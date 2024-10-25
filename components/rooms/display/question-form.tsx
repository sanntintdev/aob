'use client';

import { useRef, FormEvent, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Send } from 'lucide-react';

export const CreateQuestionForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [error, setError] = useState<string>('');
    const [charCount, setCharCount] = useState(0);
    const MAX_CHARS = 200;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        if (!formRef.current) return;

        const formData = new FormData(formRef.current);
        const questionText = formData.get('questionText') as string;

        if (!questionText || questionText.trim().length === 0) {
            setError('Question cannot be empty');
            return;
        }

        // TODO: Add your question submission logic here
        console.log('Question submitted:', questionText);

        // Reset form after successful submission
        formRef.current.reset();
        setCharCount(0);
    };

    return (
        <Card className="mb-6">
            <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg font-medium">
                    <MessageCircle className="h-5 w-5" />
                    Ask a Question
                </CardTitle>
            </CardHeader>
            <form ref={formRef} onSubmit={handleSubmit}>
                <CardContent>
                    <Textarea
                        name="questionText"
                        placeholder="What's your question?"
                        className={`min-h-[100px] resize-none ${
                            error ? 'border-red-500 focus-visible:ring-red-500' : ''
                        }`}
                        maxLength={MAX_CHARS}
                        onChange={(e) => {
                            setCharCount(e.target.value.length);
                            setError('');
                        }}
                    />
                    {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-0">
                    <span className="text-sm text-muted-foreground">
                        {charCount}/{MAX_CHARS} characters
                    </span>
                    <Button type="submit" className="gap-2">
                        <Send className="h-4 w-4" />
                        Submit Question
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
};
