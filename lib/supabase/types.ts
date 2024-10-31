// types/supabase.ts
export type Database = {
    public: {
        Tables: {
            rooms: {
                Row: {
                    id: string;
                    code: string;
                    title: string;
                    description: string | null;
                    is_active: boolean;
                    allow_voting: boolean;
                    auto_approve: boolean;
                    participant_count: number;
                    participant_limit: number;
                    question_char_limit: number;
                    created_at: string;
                    last_active_at: string;
                    export_email: string | null;
                    export_requested_at: string | null;
                    export_status: 'pending' | 'sent' | 'failed' | null;
                };
                Insert: Omit<
                    Database['public']['Tables']['rooms']['Row'],
                    'id' | 'created_at' | 'last_active_at'
                >;
                Update: Partial<Database['public']['Tables']['rooms']['Row']>;
            };
            questions: {
                Row: {
                    id: string;
                    room_id: string;
                    text: string;
                    votes: number;
                    status: 'pending' | 'answered' | 'hidden';
                    created_at: string;
                    answered_at: string | null;
                };
                Insert: Omit<
                    Database['public']['Tables']['questions']['Row'],
                    'id' | 'created_at' | 'votes'
                >;
                Update: Partial<Database['public']['Tables']['questions']['Row']>;
            };
        };
    };
};

// You can also create some helper types for easier usage
export type Room = Database['public']['Tables']['rooms']['Row'];
export type NewRoom = Database['public']['Tables']['rooms']['Insert'];
export type UpdateRoom = Database['public']['Tables']['rooms']['Update'];

export type Question = Database['public']['Tables']['questions']['Row'];
export type NewQuestion = Database['public']['Tables']['questions']['Insert'];
export type UpdateQuestion = Database['public']['Tables']['questions']['Update'];
