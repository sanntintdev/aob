import { Button } from '@/components/ui/button';

interface QuestionProp {
    id: string;
    text: string;
    votes: number;
    isAnswered: boolean;
    timestamp: string;
}

export function HostQuestionCard({ question }: { question: QuestionProp }) {
    return (
        <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
            <div className="flex items-center gap-4">
                <div className="text-center w-12">
                    <div className="font-semibold">{question.votes}</div>
                    <div className="text-xs text-muted-foreground">votes</div>
                </div>
                <div>
                    <p className="text-sm">{question.text}</p>
                    <p className="text-xs text-muted-foreground mt-1">{question.timestamp}</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                    Hide
                </Button>
                <Button size="sm">{question.isAnswered ? 'Unanswer' : 'Mark Answered'}</Button>
            </div>
        </div>
    );
}
