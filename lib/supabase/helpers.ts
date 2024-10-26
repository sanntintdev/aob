// lib/supabase/helpers.ts
import { supabase } from './client';
import type { NewRoom } from './types';
import { generateRoomCode } from '../utils';
import { RoomFormData } from '../room/types';

async function generateUniqueRoomCode() {
    const MAX_ATTEMPTS = 3;
    let attampts = 0;
    let code = generateRoomCode();

    while (attampts < MAX_ATTEMPTS) {
        const { data, error } = await supabase
            .from('rooms')
            .select('code')
            .eq('code', code)
            .single();

        if (error && !data) {
            return code;
        }

        code = generateRoomCode();
        attampts++;
    }

    throw new Error('Failed to generate a unique room code');
}

export async function createNewRoom(roomData: RoomFormData) {
    // Generate a unique room code
    const roomCode = await generateUniqueRoomCode();
    console.log(roomCode);
    const newRoom: NewRoom = {
        code: roomCode,
        title: roomData.title,
        description: roomData.description || null,
        participant_limit: roomData.participant_limit,
        auto_approve: roomData.auto_approve,
        allow_voting: roomData.allow_voting,
        question_char_limit: roomData.question_char_limit,
        is_active: true,
        participant_count: 0,
        export_email: null,
        export_requested_at: null,
        export_status: null,
    };

    const { data, error } = await supabase.from('rooms').insert(newRoom).select().single();

    if (error) {
        console.error('Failed to create room', error);
        throw error;
    }
    return data;
}

export async function fetchRoomByCode(code: string) {
    const { data, error } = await supabase.from('rooms').select().eq('code', code).single();

    if (error) {
        console.error('Failed to fetch room', error);
        throw error;
    }

    return data;
}
