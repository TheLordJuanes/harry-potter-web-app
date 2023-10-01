import React, {useState} from 'react';
import {Alert, Button, Card, Form, Input} from "react-daisyui";
import {auth} from "../firebase-config.js";
import {signInWithEmailAndPassword} from "firebase/auth";
import {useDispatch} from "react-redux";
import {setEmailInStore} from "../redux/userSlice.js";

export default function LoginCard() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const dispatch = useDispatch()

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError("")
                dispatch(setEmailInStore({userEmail: userCredential.user.email}))
                window.location.href = "/home";
            })
            .catch((error) => {
                switch (error.code) {
                    case "auth/invalid-email":
                        setError("Invalid email!")
                        break;
                    case "auth/user-disabled":
                        setError("User disabled!")
                        break;
                    case "auth/user-not-found":
                        setError("User or password incorrect!")
                        break;
                    case "auth/wrong-password":
                        setError("User or password incorrect!")
                        break;
                    case "auth/invalid-login-credentials":
                        setError("User or password incorrect!")
                        break;
                    default:
                        setError("Unknown error!")
                        break;
                }
            })
    }

    const handleRegister = () => {
        window.location.href = "/register";
    }

    return (
        <Card className="w-full max-w-sm shadow-2xl bg-base-100 mt-4">
            <Card.Body>
                <h1 className="text-5xl font-bold text-center mb-4">Login</h1>
                <Form>
                    <Form.Label title="Email"/>
                    <Input type="text" placeholder="example@harry.potter.com" className="input-bordered" value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                    <Form.Label title="Password"/>
                    <Input type="password" placeholder="••••••••••" className="input-bordered mb-4" value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                </Form>
                <Button className="btn-primary w-full" onClick={handleLogin}>Login</Button>
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
                <Form.Label className="mt-4" title="Don't have an account?"/>
                <Button className="btn-primary w-full" onClick={handleRegister}>Register</Button>
            </Card.Body>
        </Card>
    );
}
