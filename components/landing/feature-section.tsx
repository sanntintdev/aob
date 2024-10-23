'use client';

import { Lock, MessageSquare, Zap } from 'lucide-react';
import { Card, CardHeader, CardTitle } from '../ui/card';

export const Features = () => {
    const features = [
        {
            icon: Lock,
            title: 'Anonymous Questions',
            description: 'Encourage open participation with complete anonymity',
        },
        {
            icon: Zap,
            title: 'Real-time Updates',
            description: 'See questions and responses instantly as they happen',
        },
        {
            icon: MessageSquare,
            title: 'Interactive Voting',
            description: 'Let participants vote on the most important questions',
        },
    ];

    return (
        <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Everything You Need</h2>
                <p className="text-gray-600 mt-2">
                    Simple yet powerful features for effective Q&A sessions
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {features.map((feature, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all">
                        <CardHeader>
                            <feature.icon className="h-12 w-12 text-blue-500 mb-4" />
                            <CardTitle className="text-xl">{feature.title}</CardTitle>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    );
};
