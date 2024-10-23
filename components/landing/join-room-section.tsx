import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";

export const JoinRoomSection = () => {
    return (
        <div className="bg-white border-y">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-md mx-auto text-center space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Join an Existing Room</h2>
                    <Card className="border-2 hover:border-blue-500 transition-all">
                        <CardContent className="pt-6">
                            <form className="space-y-4">
                                <Input
                                    placeholder="Enter room code"
                                    className="text-center text-lg uppercase tracking-wider"
                                    maxLength={6}
                                />
                                <Button className="w-full" size="lg">
                                    Join Room
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};
