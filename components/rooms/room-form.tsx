'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { BasicSettings } from './basic-settings';
import { useRouter } from 'next/navigation';
import { createRoom, State } from '@/lib/room/actions';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useActionState } from 'react';

export const RoomForm = () => {
    const router = useRouter();
    const initialState: State = { message: null, errors: {} };
    const [state, formAction] = useActionState(createRoom, initialState);

    return (
        <form action={formAction}>
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="shrink-0"
                    onClick={() => router.push('/')}
                >
                    <ChevronLeft className="h-5 w-5" />
                </Button>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Create a Room</h1>
                    <p className="text-sm text-gray-500">Set up your Q&A session</p>
                </div>
            </div>

            {/* Error Message */}
            {state?.message && (
                <Alert variant="destructive" className="mb-6">
                    <AlertDescription>{state.message}</AlertDescription>
                </Alert>
            )}

            {/* Form */}
            <BasicSettings errors={state?.errors} />

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
                <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() => router.push('/')}
                >
                    Cancel
                </Button>
                <Button type="submit" className="w-full">
                    Create Room
                </Button>
            </div>
        </form>
    );
};
