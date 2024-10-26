import { supabase } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';

export function useParticipantCount(roomCode: string, initialCount = 0) {
    const [participantCount, setParticipantCount] = useState(initialCount);

    useEffect(() => {
        const channel = supabase
            .channel(`room:${roomCode}`)
            .on(
                'postgres_changes',
                {
                    event: 'UPDATE',
                    schema: 'public',
                    table: 'rooms',
                    filter: `code=eq.${roomCode}`,
                },
                (payload) => {
                    setParticipantCount(payload.new.participant_count);
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    return participantCount;
}
