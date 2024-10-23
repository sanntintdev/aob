import { Badge } from '@/components/ui/badge';
import { Users } from 'lucide-react';

export function DisplayHeader() {
    return (
        <header className="bg-white/50 backdrop-blur-sm border-b sticky top-0 z-50">
            <div className="container max-w-6xl mx-auto px-4">
                <div className="h-16 flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Team Q&A Session</h1>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                24 participants
                            </span>
                            <span>•</span>
                            <span>Room: ABC123</span>
                        </div>
                    </div>
                    <Badge variant="secondary" className="text-base px-4 py-1">
                        Display Mode
                    </Badge>
                </div>
            </div>
        </header>
    );
}
