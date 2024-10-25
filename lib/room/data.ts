import { Query } from 'appwrite';
import { APPWRITE_CONFIG, databases } from '../appwrite/config';

export async function fetchRoomByCode(roomCode: string) {
    const { databaseId, collections } = APPWRITE_CONFIG;
    try {
        const rooms = await databases.listDocuments(databaseId, collections.roomCollectionId, [
            Query.equal('code', roomCode),
            Query.limit(1),
        ]);

        return rooms.documents[0] || null;
    } catch (error) {
        console.error('Failed to fetch room', error);
        throw new Error('Failed to fetch room');
    }
}
