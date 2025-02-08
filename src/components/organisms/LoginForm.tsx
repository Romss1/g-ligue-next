"use client";
import React, { useState } from "react";
import Input from "../atoms/Input";
import PasswordInput from "../molecules/PasswordInput";
import Button from "../atoms/Button";
import Link from "next/link";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle login logic here
    };
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <Button>Login</Button>
            <p className="text-center">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-blue-500 hover:underline">
                    Register here
                </Link>
            </p>
        </form>
    )
}
export default LoginForm;