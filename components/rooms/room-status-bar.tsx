import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageSquare, CheckCircle } from 'lucide-react';

export const RoomStatusBar = () => {
    return (
        <div className="flex items-center justify-between">
            <Tabs defaultValue="all" className="w-full">
                <TabsList>
                    <TabsTrigger value="all" className="flex gap-2">
                        <MessageSquare className="h-4 w-4" />
                        All Questions (12)
                    </TabsTrigger>
                    <TabsTrigger value="answered" className="flex gap-2">
                        <CheckCircle className="h-4 w-4" />
                        Answered (5)
                    </TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    );
};
