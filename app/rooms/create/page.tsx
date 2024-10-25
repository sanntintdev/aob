import { RoomForm } from '@/components/rooms/room-form';

const CreateRoomPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container max-w-3xl mx-auto px-4">
                <RoomForm />
            </div>
        </div>
    );
};

export default CreateRoomPage;
