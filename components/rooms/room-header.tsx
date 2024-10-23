import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';

export const RoomHeader = () => {
    return (
        <header className="bg-white border-b sticky top-0 z-50">
            <div className="container max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
                <div>
                    <h1 className="font-semibold text-lg">Team Q&A Session</h1>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Room: ABC123</span>
                        <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            24
                        </span>
                    </div>
                </div>
                <Button variant="outline">Leave Room</Button>
            </div>
        </header>
    );
};
