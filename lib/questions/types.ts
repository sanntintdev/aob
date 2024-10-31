import { z } from 'zod';

export const QuestionSchema = z.object({
    question: z.string().min(1, 'Question is required').max(2000),
    room_code: z.string().min(1, 'Room code is required').max(6),
    user_id: z.string().min(1, 'User ID is required').max(36),
});

export type QuestionFormData = z.infer<typeof QuestionSchema>;
