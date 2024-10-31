import { z } from 'zod';

export const RoomSchema = z.object({
    title: z.string().min(1, 'Title is required').max(100),
    description: z.string().optional(),
    participant_limit: z.coerce.number().min(1).max(1000),
    auto_approve: z.boolean(),
    allow_voting: z.boolean(),
    question_char_limit: z.coerce.number().min(1).max(2000),
});

export type RoomFormData = z.infer<typeof RoomSchema>;

export type RoomState = {
    errors?: {
        title?: string[];
        description?: string[];
        participant_limit?: string[];
        auto_approve?: string[];
        allow_voting?: string[];
        question_char_limit?: string[];
    };
    message?: string;
};
