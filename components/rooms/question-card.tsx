import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ThumbsUp, CheckCircle2 } from 'lucide-react';

interface QuestionCardProps {
    question: {
        id: string;
        text: string;
        votes: number;
        isAnswered: boolean;
        timestamp: string;
    };
}

export const QuestionCard = ({ question }: QuestionCardProps) => {
    return (
        <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
                <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                        <Button variant="ghost" size="sm" className="flex flex-col gap-1">
                            <ThumbsUp className="h-4 w-4" />
                            <span className="text-xs font-medium">{question.votes}</span>
                        </Button>
                    </div>
                    <div className="flex-1 space-y-2">
                        <p className="text-sm/relaxed text-foreground">{question.text}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>{question.timestamp}</span>
                            {question.isAnswered && (
                                <Badge variant="secondary" className="flex items-center gap-1">
                                    <CheckCircle2 className="h-3 w-3" />
                                    Answered
                                </Badge>
                            )}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
