// lib/room/actions.ts
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { ID } from 'appwrite';
import { generateRoomCode } from '../utils';
import { databases } from '../appwrite/config';
import { log } from 'console';
import { APPWRITE_CONFIG } from '../appwrite/config';

const RoomSchema = z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    description: z.string().optional(),
    participantLimit: z.coerce.number().min(1, { message: 'Minimum 1 participant required' }),
    questionCharLimit: z.coerce.number().min(1, { message: 'Minimum character limit is 1' }),
    allowVoting: z.boolean().default(true),
    autoApprove: z.boolean().default(false),
});

export type State = {
    errors?: {
        title?: string[];
        description?: string[];
        participantLimit?: string[];
        questionCharLimit?: string[];
    };
    message?: string | null;
};

export async function createRoom(prevState: State, formData: FormData) {
    const validatedFields = RoomSchema.safeParse({
        title: formData.get('title'),
        description: formData.get('description'),
        participantLimit: formData.get('participantLimit'),
        questionCharLimit: formData.get('questionCharLimit'),
        allowVoting: formData.get('allowVoting') === 'true',
        autoApprove: formData.get('autoApprove') === 'true',
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Please check the form for errors.',
        };
    }
    const roomCode = generateRoomCode();
    const { databaseId, collections } = APPWRITE_CONFIG;

    try {
        // Implement this function
        await databases.createDocument(databaseId, collections.roomCollectionId, ID.unique(), {
            code: roomCode,
            ...validatedFields.data,
            participantCount: 0,
            isActive: true,
            createdAt: new Date().toISOString(),
        });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        log('Failed to create room', error);
        return {
            ...prevState,
            message: 'Failed to create room. Please try again.',
        };
    }

    revalidatePath('/rooms');
    redirect(`/rooms/${roomCode}/host`);
}


