import { PlusCircle, Users } from "lucide-react";
import { Button } from "../ui/button";

export const Hero = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="pt-32 pb-20 text-center space-y-6 max-w-3xl mx-auto">
                <h1 className="text-5xl font-bold text-gray-900 animate-fade-in">
                    Anonymous Q&A
                    <span className="text-blue-500"> Made Simple</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Create instant Q&A sessions for your events, meetings, or classes. No sign-up
                    required.
                </p>
                <div className="flex gap-4 justify-center pt-4">
                    <Button size="lg" className="gap-2">
                        <PlusCircle className="h-5 w-5" />
                        Create Room
                    </Button>
                    <Button size="lg" variant="outline" className="gap-2">
                        <Users className="h-5 w-5" />
                        Join Room
                    </Button>
                </div>
            </div>
        </div>
    );
};
