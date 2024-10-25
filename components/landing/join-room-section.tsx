'use client';

import { useRef, FormEvent, useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { useRouter } from 'next/navigation';

export const JoinRoomSection = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [error, setError] = useState<string>('');
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        if (!formRef.current) return;

        const form = formRef.current;
        const formData = new FormData(form);
        const roomCode = formData.get('roomCode') as string;

        if (!roomCode || roomCode.length !== 6) {
            setError('Room code must be 6 characters');
            return;
        }

        router.push(`/rooms/${roomCode}`);
    };

    return (
        <div className="bg-white border-y" id="join_session">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-md mx-auto text-center space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Join an Existing Room</h2>
                    <Card className="border-2 hover:border-blue-500 transition-all">
                        <CardContent className="pt-6">
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                                <Input
                                    name="roomCode"
                                    placeholder="ENTER ROOM CODE"
                                    className={`text-center text-xl font-medium uppercase tracking-widest h-12 bg-gray-50 ${
                                        error ? 'border-red-500 focus-visible:ring-red-500' : ''
                                    }`}
                                    maxLength={6}
                                    onInput={(e) => {
                                        const input = e.target as HTMLInputElement;
                                        input.value = input.value.toUpperCase();
                                        setError(''); // Clear error when user types
                                    }}
                                />
                                {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
                                <Button
                                    type="submit"
                                    className="w-full bg-gray-900 hover:bg-gray-800"
                                    size="lg"
                                >
                                    Join Room
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};
