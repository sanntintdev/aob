import { Card } from '@/components/ui/card';
import { Users, MessageSquare, CheckCircle2, CircleXIcon } from 'lucide-react';

interface StatsPanelProp {
    participantCount: number;
    totalQuestions: number;
    answeredQuestions: number;
    unansweredQuestions: number;
}

export function StatsPanel({ stats }: { stats: StatsPanelProp }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
                {
                    label: 'Participants',
                    value: `${stats.participantCount}`,
                    icon: Users,
                    color: 'text-blue-500',
                },
                {
                    label: 'Questions',
                    value: `${stats.totalQuestions}`,
                    icon: MessageSquare,
                    color: 'text-green-500',
                },
                {
                    label: 'Answered',
                    value: `${stats.answeredQuestions}`,
                    icon: CheckCircle2,
                    color: 'text-purple-500',
                },
                {
                    label: 'Not Answered',
                    value: `${stats.unansweredQuestions}`,
                    icon: CircleXIcon,
                    color: 'text-red-500',
                },
            ].map((stat) => (
                <Card key={stat.label} className="p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                            <p className="text-2xl font-semibold">{stat.value}</p>
                        </div>
                        <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                </Card>
            ))}
        </div>
    );
}
