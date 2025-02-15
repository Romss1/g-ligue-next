"use client";
import React, { useState } from "react";
import Input from "../atoms/Input";
import PasswordInput from "../molecules/PasswordInput";
import Button from "../atoms/Button";
import Link from "next/link";
import { authApi } from "@/api/authApi";
import { LoginRequest } from "@/interfaces/auth.interface";

function LoginForm() {
    const [formData, setFormData] = useState<LoginRequest>({
        email: "",
        password: "",
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await authApi.loginUser(formData);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
            <PasswordInput
                value={formData.password}
                name="password"
                onChange={handleChange}
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