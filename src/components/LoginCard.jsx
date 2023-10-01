import React, {useState} from 'react';
import {Button, Card, Form, Input} from "react-daisyui";

export default function LoginCard() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        window.history.replaceState({}, "/", "/home")
    }

    return (
        <Card className="w-full max-w-sm shadow-2xl bg-base-100 mt-4">
            <Card.Body>
                <h1 className="text-5xl font-bold text-center mb-4">Login</h1>
                <Form>
                    <Form.Label title="Email" />
                    <Input type="text" placeholder="example@harry.potter.com" className="input-bordered" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form>
                <Form>
                    <Form.Label title="Password" />
                    <Input type="password" placeholder="••••••••••" className="input-bordered" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form>
                <Form className="mt-6">
                    <Button className="btn-primary w-full" onClick={handleLogin}>Login</Button>
                </Form>
            </Card.Body>
        </Card>
    );
}
