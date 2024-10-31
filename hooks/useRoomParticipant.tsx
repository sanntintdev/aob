import { supabase } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function useRoomParticipant(roomCode: string) {
    const router = useRouter();
    const incrementParticipantCount = async () => {
        await supabase.rpc('increment_participant_count', { room_code: roomCode });
    };

    const decrementParticipantCount = async () => {
        await supabase.rpc('decrement_participant_count', { room_code: roomCode });
    };

    const handleLeaveRoom = async () => {
        await decrementParticipantCount();
        router.push('/');
    };

    useEffect(() => {
        incrementParticipantCount();

        // Handle browser/tab closing
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            decrementParticipantCount();
            e.preventDefault();
            e.returnValue = '';
        };
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            decrementParticipantCount();
        };
    }, [roomCode]);

    return { handleLeaveRoom };
}
