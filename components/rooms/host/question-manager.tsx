import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter } from 'lucide-react';
import { HostQuestionCard } from './host-question-card';

export function QuestionManager() {
    const SAMPLE_QUESTIONS = [
        {
            id: '1',
            text: "What's the timeline for implementing the new feature set discussed in the last meeting?",
            votes: 15,
            isAnswered: false,
            timestamp: '5 minutes ago',
        },
        {
            id: '2',
            text: 'Can you explain how the new authentication system will work with existing user accounts?',
            votes: 12,
            isAnswered: true,
            timestamp: '10 minutes ago',
        },
        // Add more sample questions...
    ] as const;
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle>Questions</CardTitle>
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                            <Input placeholder="Search questions..." className="pl-9 w-[250px]" />
                        </div>
                        <Button variant="outline" size="icon">
                            <Filter className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {SAMPLE_QUESTIONS.map((question) => (
                        <HostQuestionCard key={question.id} question={question} />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
