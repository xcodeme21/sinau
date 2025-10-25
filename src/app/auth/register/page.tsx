import { Suspense } from 'react';
import RegisterForm from "@/containers/auth/RegisterForm";

export default function RegisterPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Memuat...</p>
                </div>
            </div>
        }>
            <RegisterForm />
        </Suspense>
    );
}