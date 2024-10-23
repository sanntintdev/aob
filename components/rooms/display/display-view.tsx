import React from 'react';
import { Card } from '@/components/ui/card';
import { QrCodeIcon } from 'lucide-react';
import { DisplayHeader } from './display-header';
import { QuestionDisplay } from './question-display';

export function DisplayView() {
    return (
        <div className="min-h-screen bg-gray-50">
            <DisplayHeader />

            <main className="container max-w-6xl mx-auto p-4 md:p-6 space-y-6">
                {/* Active Question Display */}
                <QuestionDisplay />

                {/* Join Instructions */}
                <div className="fixed bottom-6 right-6 flex items-center gap-4">
                    <Card className="bg-white/80 backdrop-blur-sm p-4 flex items-center gap-3">
                        <QrCodeIcon className="h-8 w-8 text-gray-600" />
                        <div>
                            <p className="font-medium">Join the discussion</p>
                            <p className="text-sm text-gray-500">Visit aqbox.com/ABC123</p>
                        </div>
                    </Card>
                </div>
            </main>
        </div>
    );
}
