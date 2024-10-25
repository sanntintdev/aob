import { RoomView } from '@/components/rooms/room-view';
import { fetchRoomByCode } from '@/lib/room/data';

export const RoomPage = async ({ params }: { params: { code: string } }) => {
    const { code } = await params;
    const room = await fetchRoomByCode(code);

    if (!room) {
        return <div>Room not found</div>;
    }
    return <RoomView room={room} />;
};

export default RoomPage;
