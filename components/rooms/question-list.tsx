import { QuestionCard } from './question-card';

export const QuestionList = () => {
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
        <div className="space-y-4">
            {SAMPLE_QUESTIONS.map((question) => (
                <QuestionCard key={question.id} question={question} />
            ))}
        </div>
    );
};
