'use client';

import { Mail, ArrowLeft, GraduationCap, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputField } from '@/components/InputField';
import { useState } from 'react';
import {Button} from "@/components/Button";

const schema = z.object({
    email: z.string().email('Email tidak valid'),
});

type FormData = z.infer<typeof schema>;

export default function ForgotPasswordPage() {
    const [activeTab, setActiveTab] = useState<'student' | 'teacher'>('student');

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isValid },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: 'onChange',
        defaultValues: { email: '' },
    });

    const handleTabClick = (tab: 'student' | 'teacher') => {
        setActiveTab(tab);
    };

    const onSubmit = async (data: FormData) => {
        const payload = { ...data, role: activeTab };
        console.log('Reset password request:', payload);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <header className="w-full flex items-center h-16 px-4 bg-white shadow-sm fixed top-0 z-10">
                <Link href="/" className="p-2 -ml-2">
                    <ArrowLeft className="w-6 h-6 text-gray-700" />
                </Link>
                <h1 className="text-lg font-bold text-gray-800 ml-2">Lupa Password</h1>
            </header>

            <main className="flex-1 overflow-y-auto px-4 pt-20 pb-24 space-y-6">
                <div className="grid grid-cols-2 gap-3">
                    <button
                        type="button"
                        onClick={() => handleTabClick('student')}
                        className={`flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all ${
                            activeTab === 'student'
                                ? 'bg-purple-500 text-white shadow-sm'
                                : 'bg-white text-gray-700 border border-gray-300'
                        }`}
                    >
                        <GraduationCap className="w-5 h-5" />
                        Siswa
                    </button>

                    <button
                        type="button"
                        onClick={() => handleTabClick('teacher')}
                        className={`flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all ${
                            activeTab === 'teacher'
                                ? 'bg-green-500 text-white shadow-sm'
                                : 'bg-white text-gray-700 border border-gray-300'
                        }`}
                    >
                        <BookOpen className="w-5 h-5" />
                        Tutor
                    </button>
                </div>

                <form id="forgotPasswordForm" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <InputField
                            icon={<Mail className="w-5 h-5 text-gray-400" />}
                            type="email"
                            label="Email"
                            placeholder="email@example.com"
                            {...register('email')}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">
                        Masukkan alamat email kamu dan kami akan mengirimkan tautan untuk mengatur ulang password.
                    </p>
                </form>
            </main>

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
                <Button
                    type="submit"
                    form="forgotPasswordForm"
                    disabled={!isValid || isSubmitting}
                    variant={activeTab}
                    loading={isSubmitting}
                >
                    Kirim Tautan Reset
                </Button>
            </div>
        </div>
    );
}
