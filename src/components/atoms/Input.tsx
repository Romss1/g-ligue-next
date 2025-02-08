
import React from "react";

interface InputProps {
    type: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

function Input({
    type,
    name,
    placeholder,
    value,
    onChange,
    className,
}: Readonly<InputProps>) {
    return (
        <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-950 text-gray-950 ${className}`}
        />
    );
}

export default Input;