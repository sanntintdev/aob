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

export async function fetchRoomWithStatus(code: string) {
    const { data, error } = await supabase.from('rooms').select('*').eq('code', code).single();

    if (error) throw error;

    const { count: totalQuestions, error: totalError } = await supabase
        .from('questions')
        .select('*', { count: 'exact', head: true })
        .eq('room_id', data.id);

    if (totalError) throw totalError;

    const { count: answeredQuestions, error: answeredError } = await supabase
        .from('questions')
        .select('*', { count: 'exact', head: true })
        .eq('room_id', data.id)
        .eq('status', 'answered');

    if (answeredError) throw answeredError;

    return {
        ...data,
        stats: {
            participantCount: data.participant_count,
            totalQuestions: totalQuestions ?? 0,
            answeredQuestions: answeredQuestions ?? 0,
            unansweredQuestions: (totalQuestions ?? 0) - (answeredQuestions ?? 0),
        },
    };
}

export async function fetchParticipantCount(code: string) {
    const { data, error } = await supabase
        .from('rooms')
        .select('participant_count')
        .eq('code', code)
        .single();

    if (error) {
        console.error('Failed to fetch participant count', error);
        throw error;
    }

    return data;
}
