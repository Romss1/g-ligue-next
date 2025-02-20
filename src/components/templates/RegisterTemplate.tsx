import React from "react";
import RegisterForm from "@/components/organisms/RegisterForm";

function RegisterTemplate() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-stone-700">
            Inscrivez-vous pour créer ou rejoindre un club.
          </h2>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}
export default RegisterTemplate;