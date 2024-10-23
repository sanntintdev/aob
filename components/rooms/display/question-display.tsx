import { Card, CardContent } from '@/components/ui/card';
import { ThumbsUp, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function QuestionDisplay() {
    const UPCOMING_QUESTIONS = [
        {
            text: 'Can you explain the rationale behind the new database schema?',
            votes: 18,
            timestamp: '2 minutes ago',
        },
        {
            text: "What's the plan for handling legacy data during the migration?",
            votes: 15,
            timestamp: '5 minutes ago',
        },
        // Add more questions...
    ] as const;

    const ANSWERED_QUESTIONS = [
        {
            text: 'How will this affect our current API endpoints?',
            votes: 22,
            timestamp: '10 minutes ago',
        },
        {
            text: 'Will there be any downtime during the deployment?',
            votes: 19,
            timestamp: '15 minutes ago',
        },
        // Add more questions...
    ] as const;
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Featured Question */}
            <Card className="lg:col-span-2 border-2">
                <CardContent className="p-6">
                    <div className="flex gap-6">
                        <div className="flex flex-col items-center">
                            <div className="bg-blue-50 rounded-full p-3">
                                <ThumbsUp className="h-8 w-8 text-blue-500" />
                            </div>
                            <span className="text-2xl font-bold mt-2">24</span>
                            <span className="text-sm text-gray-500">votes</span>
                        </div>
                        <div className="flex-1 space-y-4">
                            <Badge className="mb-4">Current Question</Badge>
                            <p className="text-2xl font-medium leading-relaxed">
                                What&apos;s the timeline for implementing the new feature set discussed
                                in the last meeting?
                            </p>
                            <div className="flex items-center gap-2 text-gray-500">
                                <MessageSquare className="h-4 w-4" />
                                <span>Asked 5 minutes ago</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Upcoming Questions */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-600 px-1">Up Next</h2>
                {UPCOMING_QUESTIONS.map((question, index) => (
                    <Card key={index} className="hover:border-blue-200 transition-colors">
                        <CardContent className="p-4">
                            <div className="flex gap-4">
                                <div className="text-center">
                                    <div className="text-xl font-semibold">{question.votes}</div>
                                    <div className="text-sm text-gray-500">votes</div>
                                </div>
                                <div>
                                    <p className="text-lg">{question.text}</p>
                                    <p className="text-sm text-gray-500 mt-2">
                                        {question.timestamp}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Recently Answered */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-600 px-1">Recently Answered</h2>
                {ANSWERED_QUESTIONS.map((question, index) => (
                    <Card key={index} className="bg-gray-50 hover:bg-gray-100 transition-colors">
                        <CardContent className="p-4">
                            <div className="flex gap-4">
                                <div className="text-center">
                                    <div className="text-xl font-semibold">{question.votes}</div>
                                    <div className="text-sm text-gray-500">votes</div>
                                </div>
                                <div>
                                    <p className="text-lg">{question.text}</p>
                                    <p className="text-sm text-gray-500 mt-2">
                                        {question.timestamp}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
