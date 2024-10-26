'use server';

import { redirect } from 'next/navigation';
import { createNewRoom } from '../supabase/helpers';
import { RoomSchema, type RoomState } from './types';

export async function createRoom(prevState: RoomState, formData: FormData) {
    console.log('Creating room', formData);
    const validatedFields = RoomSchema.safeParse({
        title: formData.get('title'),
        description: formData.get('description'),
        participant_limit: formData.get('participant_limit'),
        auto_approve: formData.get('auto_approve') === 'on', // Convert to boolean
        allow_voting: formData.get('allow_voting') === 'on', // Convert to boolean
        question_char_limit: formData.get('question_char_limit'),
    });

    if (!validatedFields.success) {
        console.log('Validation errors', validatedFields.error.flatten().fieldErrors);
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Please check the form for errors.',
        };
    }

    let code = '';
    try {
        const room = await createNewRoom(validatedFields.data);
        code = room.code;
    } catch (error) {
        console.error('Failed to create room', error);
        return {
            ...prevState,
            message: 'Failed to create room. Please try again.',
        };
    }

    redirect(`/rooms/${code}/host`);
}
