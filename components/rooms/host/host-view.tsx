import { HostHeader } from './host-header';
import { QuestionManager } from './question-manager';
import { StatsPanel } from './status-panel';

export function HostView() {
    return (
        <div className="min-h-screen bg-gray-50">
            <HostHeader />
            <main className="container max-w-6xl mx-auto px-4 py-6 space-y-6">
                <StatsPanel />
                <QuestionManager />
            </main>
        </div>
    );
}
