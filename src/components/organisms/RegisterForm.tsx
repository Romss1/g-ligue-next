"use client";
import React, { useState } from "react";
import Link from "next/link";
import PasswordInput from "@/components/molecules/PasswordInput";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import { authApi } from "@/api/authApi";
import { RegisterRequest } from "@/interfaces/auth.interface";

const RegisterForm = () => {
    const [formData, setFormData] = useState<RegisterRequest>({
        lastName: "",
        firstName: "",
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await authApi.registerUser(formData);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input
                type="text"
                name="lastName"
                placeholder="Nom"
                value={formData.lastName}
                onChange={handleChange}
            /><Input
                type="text"
                name="firstName"
                placeholder="Prénom"
                value={formData.firstName}
                onChange={handleChange}
            />
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
                placeholder="Mot de passe"
            />
            <Button>Créer un compte</Button>
            <p className="text-center text-stone-500">
                Vous avez un compte ?{" "}
                <Link href="/login" className="text-stone-600 hover:underline">
                    Connectez-vous
                </Link>
            </p>
        </form>
    );
};
export default RegisterForm;