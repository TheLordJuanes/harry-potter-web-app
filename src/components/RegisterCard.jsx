import React, {useEffect, useRef, useState} from 'react';
import {Alert, Button, Card, Form, Input, Modal} from "react-daisyui";
import {auth} from "../firebase-config.js";
import {createUserWithEmailAndPassword} from "firebase/auth";

export default function RegisterCard() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [registerSuccess, setRegisterSuccess] = useState(false);
    const ref = useRef()

    const handleShow = () => {
        ref.current?.showModal()
        setIsModalOpen(true);
        setRegisterSuccess(true)
    }

    const handleClose = () => {
        ref.current?.close()
        setIsModalOpen(false);
    }

    useEffect(() => {
        if (!isModalOpen && registerSuccess) {
            setRegisterSuccess(false)
            window.location.href = "/login";

        }
    }, [isModalOpen]);

    const handleLogin = () => {
        window.location.href = "/login";
    }

    const handleRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setError("")
                handleShow()
            })
            .catch((error) => {
                switch (error.code) {
                    case "auth/invalid-email":
                        setError("Invalid email!")
                        break;
                    case "auth/email-already-in-use":
                        setError("Email already in use!")
                        break;
                    case "auth/operation-not-allowed":
                        setError("Operation not allowed!")
                        break;
                    case "auth/weak-password":
                        setError("Weak password! Password should be at least 6 characters")
                        break;
                    case "auth/missing-password":
                        setError("Missing password!")
                        break;
                    case "auth/missing-email":
                        setError("Missing email!")
                        break;
                    default:
                        setError("Unknown error!")
                        break;
                }
            })
    }

    return (
        <Card className="w-full max-w-sm shadow-2xl bg-base-100 mt-4">
            <Card.Body>
                <h1 className="text-5xl font-bold text-center mb-4">Register</h1>
                <Form>
                    <Form.Label title="Email"/>
                    <Input type="text" placeholder="example@harry.potter.com" className="input-bordered" value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                    <Form.Label title="Password"/>
                    <Input type="password" placeholder="••••••••••" className="input-bordered mb-4" value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                </Form>
                <Button className="btn-primary w-full" onClick={handleRegister}>Register</Button>
                {
                    error !== "" && (
                        <Alert className="alert-error"
                               icon={<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6"
                                          fill="none" viewBox="0 0 24 24">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                         d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                               </svg>}>
                            <span>{error}</span>
                        </Alert>)
                }
                <Form.Label className="mt-4" title="Already have an account?"/>
                <Button className="btn-primary w-full mb-4" onClick={handleLogin}>Login</Button>
                <Modal ref={ref}>
                    <Modal.Body>
                        The user has been registered successfully!
                    </Modal.Body>
                    <Modal.Actions>
                        <Button onClick={handleClose}>Close</Button>
                    </Modal.Actions>
                </Modal>
            </Card.Body>
        </Card>
    );
}
