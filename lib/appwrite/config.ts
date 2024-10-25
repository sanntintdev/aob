import { Client, Databases } from 'appwrite';

export const clientConfig = {
    endpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || '',
    projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '',
    apiKey: process.env.NEXT_PUBLIC_APPWRITE_API_KEY || '',
};

// Client-side initialization
const client = new Client().setEndpoint(clientConfig.endpoint).setProject(clientConfig.projectId);

// Initialize client-side services
export const databases = new Databases(client);

export const APPWRITE_CONFIG = {
    databaseId: '67190251002440bbf2d2',
    collections: {
        roomCollectionId: '67190260000867cd73e4',
        questionCollectionId: 'Questions',
    },
} as const;
