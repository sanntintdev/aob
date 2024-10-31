import { HostHeader } from './host-header';
import { QuestionManager } from './question-manager';
import { StatsPanel } from './stats-panel';

interface HostViewProp {
    title: string;
    code: string;
    stats: {
        participantCount: number;
        totalQuestions: number;
        answeredQuestions: number;
        unansweredQuestions: number;
    };
}

export function HostView({ room }: { room: HostViewProp }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <HostHeader roomTitle={room.title} roomCode={room.code} />
            <main className="container max-w-6xl mx-auto px-4 py-6 space-y-6">
                <StatsPanel stats={room.stats} />
                <QuestionManager />
            </main>
        </div>
    );
}
