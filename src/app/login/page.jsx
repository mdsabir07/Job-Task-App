'use client';

import { signIn } from 'next-auth/react';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    // If already logged in, redirect
    useEffect(() => {
        if (status === 'authenticated') {
            router.push('/products');
        }
    }, [status, router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
            <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                    Sign in to JobTask
                </h2>
                <button
                    onClick={() => signIn('google')}
                    className="w-full cursor-pointer bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                >
                    Sign in with Google
                </button>
            </div>
        </div>
    );
}