import { HostView } from '@/components/rooms/host/host-view';
import { fetchRoomWithStatus } from '@/lib/supabase/helpers';

interface HostPageProps {
    code: string;
}

export default async function HostPage({ params }: { params: HostPageProps }) {
    const { code } = await params;
    const room = await fetchRoomWithStatus(code);

    if (!room) {
        return <div>Room not found</div>;
    }
    return <HostView room={room} />;
}
