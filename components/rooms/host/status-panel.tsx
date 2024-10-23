import { Card } from '@/components/ui/card';
import { Users, MessageSquare, CheckCircle2, BarChart2 } from 'lucide-react';

export function StatsPanel() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
                { label: 'Participants', value: '24', icon: Users, color: 'text-blue-500' },
                { label: 'Questions', value: '12', icon: MessageSquare, color: 'text-green-500' },
                { label: 'Answered', value: '5', icon: CheckCircle2, color: 'text-purple-500' },
                { label: 'Response Rate', value: '42%', icon: BarChart2, color: 'text-orange-500' },
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
