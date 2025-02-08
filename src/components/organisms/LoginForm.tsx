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
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <Button>Se connecter</Button>
            <p className="text-center text-stone-500">
                Vous n&apos;avez pas de compte ?{" "}
                <Link href="/register" className="text-stone-600 hover:underline">
                    Inscrivez-vous
                </Link>
            </p>
        </form>
    )
}
export default LoginForm;