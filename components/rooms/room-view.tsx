import { QuestionInput } from './question-input';
import { QuestionList } from './question-list';
import { RoomHeader } from './room-header';
import { RoomStatusBar } from './room-status-bar';

export const RoomView = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <RoomHeader />
            <main className="container max-w-4xl mx-auto px-4 py-6 space-y-6">
                <QuestionInput />
                <RoomStatusBar />
                <QuestionList />
            </main>
        </div>
    );
};
