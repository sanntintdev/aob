'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export const QuestionInput = () => {
    const [question, setQuestion] = useState('');

    return (
        <Card>
            <CardContent className="p-4">
                <form className="space-y-4">
                    <Textarea
                        placeholder="Type your question anonymously..."
                        className="min-h-[100px] resize-none"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                            {200 - question.length} characters remaining
                        </p>
                        <Button>Submit Question</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};
