'use client';

import { Button } from '@/components/ui/button';
import { Hero } from './hero-section';
import { JoinRoomSection } from './join-room-section';
import { Features } from './feature-section';
import { CTASection } from './cta-section';

export const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Navigation */}
            <nav className="border-b bg-white/50 backdrop-blur-sm fixed top-0 w-full z-50">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="font-bold text-xl">AQBox</div>
                    <Button variant="outline">GitHub</Button>
                </div>
            </nav>

            {/* Hero Section */}
            <Hero />

            {/* Join Room Section */}
            <JoinRoomSection />

            {/* Features Grid */}
            <Features />

            {/* Create Room CTA */}
            <CTASection />

            {/* Footer */}
            <footer className="border-t">
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center text-gray-600 text-sm">
                        © 2024 AQBox. Made with ❤️
                    </div>
                </div>
            </footer>
        </div>
    );
};
