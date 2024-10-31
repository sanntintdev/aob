'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { QuestionInput } from './question-input';
import { QuestionList } from './question-list';
import { RoomStatusBar } from './room-status-bar';
import { RoomHeader } from './room-header';

export const RoomView = ({ room }: { room: any }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <RoomHeader
                title={room.title}
                roomCode={room.code}
                participantCount={room.participant_count}
            />
            <main className="container max-w-4xl mx-auto px-4 py-6 space-y-6">
                <div className="text-center text-sm">
                    <span>{room?.description || ''}</span>
                </div>
                <QuestionInput />
                <RoomStatusBar />
                <QuestionList />
            </main>
        </div>
    );
};
