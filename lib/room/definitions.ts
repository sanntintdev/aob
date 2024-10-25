export type Room = {
    id: string;
    code: string;
    title: string;
    description?: string;
    isActive: boolean;
    allowVoting: boolean;
    autoApprove: boolean;
    participantCount: number;
    participantLimit: number;
    questionCharLimit: number;
    createdAt: string;
};
