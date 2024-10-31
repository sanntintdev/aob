'use client';

import { useParticipantCount } from '@/hooks/useParticipantCount';
import { Users } from 'lucide-react';

export const ParticipantCount = ({
    roomCode,
    initialCount,
}: {
    roomCode: string;
    initialCount: number;
}) => {
    const participantCount = useParticipantCount(roomCode, initialCount);

    return (
        <span className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {participantCount}
        </span>
    );
};
