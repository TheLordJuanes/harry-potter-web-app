import React, {useState} from 'react';
import {Button, Card, Form, Input} from "react-daisyui";

export default function LoginCard() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        console.log("Logging in...")
        // window.history.replaceState({}, "/", "/home")
    }

    const handleRegister = () => {
        window.history.replaceState({}, "/", "/register")
    }

    return (
        <Card className="w-full max-w-sm shadow-2xl bg-base-100 mt-4">
            <Card.Body>
                <h1 className="text-5xl font-bold text-center mb-4">Login</h1>
                <Form>
                    <Form.Label title="Email" />
                    <Input type="text" placeholder="example@harry.potter.com" className="input-bordered" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Form.Label title="Password" />
                    <Input type="password" placeholder="••••••••••" className="input-bordered mb-4" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Button className="btn-primary w-full mb-4" onClick={handleLogin}>Login</Button>
                    <Form.Label title="Don't have an account?" />
                    <Button className="btn-primary w-full" onClick={handleRegister}>Register</Button>
                </Form>
            </Card.Body>
        </Card>
    );
}
