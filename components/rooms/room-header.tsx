'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ConfirmDialog } from '../ui/confirm-dialog';
import { useRoomParticipant } from '@/hooks/useRoomParticipant';
import { ParticipantCount } from './participant-count';

interface RoomHeaderProps {
    title: string;
    roomCode: string;
    participantCount: number;
}

export const RoomHeader = ({ title, roomCode, participantCount }: RoomHeaderProps) => {
    const [isLeavingDialogOpen, setIsLeavingDialogOpen] = useState(false);
    const { handleLeaveRoom } = useRoomParticipant(roomCode);

    return (
        <>
            <header className="bg-white border-b sticky top-0 z-50">
                <div className="container max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div>
                        <h1 className="font-semibold text-lg">{title}</h1>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>Room: {roomCode}</span>
                            <ParticipantCount roomCode={roomCode} initialCount={participantCount} />
                        </div>
                    </div>
                    <Button variant="outline" onClick={() => setIsLeavingDialogOpen(true)}>
                        Leave Room
                    </Button>
                </div>
            </header>
            <ConfirmDialog
                open={isLeavingDialogOpen}
                onOpenChange={setIsLeavingDialogOpen}
                title="Leave Room"
                description="Are you sure you want to leave this room? You'll need the room code to rejoin."
                confirmText="Leave"
                cancelText="Stay"
                onConfirm={handleLeaveRoom}
            />
        </>
    );
};
