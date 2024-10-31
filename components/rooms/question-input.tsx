'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useRef } from 'react';

export const QuestionInput = () => {
    const formRef = useRef<HTMLFormElement>(null);

    return (
        <Card>
            <CardContent className="p-4">
                <form ref={formRef} className="space-y-4">
                    <Textarea
                        name="question"
                        placeholder="Type your question anonymously..."
                        className="min-h-[100px] resize-none"
                    />
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                            {500 - 100} characters remaining
                        </p>
                        <Button>Submit Question</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};
