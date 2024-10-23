import { PlusCircle } from "lucide-react";
import { Button } from "../ui/button";

export const CTASection = () => {
    return (
        <div className="bg-blue-50">
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Ready to Start Your Q&A Session?
                    </h2>
                    <p className="text-gray-600">
                        Create a room in seconds. No registration required.
                    </p>
                    <Button size="lg" className="gap-2">
                        <PlusCircle className="h-5 w-5" />
                        Create a Room
                    </Button>
                </div>
            </div>
        </div>
    );
};
