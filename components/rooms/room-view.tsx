import { Users } from 'lucide-react';
import { QuestionInput } from './question-input';
import { QuestionList } from './question-list';
import { RoomStatusBar } from './room-status-bar';
import { Button } from '../ui/button';

export const RoomView = ({ room }: { room: any }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white border-b sticky top-0 z-50">
                <div className="container max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div>
                        <h1 className="font-semibold text-lg">{room.title}</h1>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>Room: {room.code}</span>
                            <span className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                {room.participantCount as number}
                            </span>
                        </div>
                    </div>
                    <Button variant="outline">Leave Room</Button>
                </div>
            </header>
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
