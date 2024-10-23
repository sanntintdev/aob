import { Button } from '@/components/ui/button';
import { LayoutDashboard, Settings } from 'lucide-react';

export function HostHeader() {
    return (
        <header className="bg-white border-b sticky top-0 z-50">
            <div className="container max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <div>
                    <h1 className="font-semibold text-lg">Team Q&A Session (Host)</h1>
                    <div className="text-sm text-muted-foreground">Room: ABC123</div>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                        <LayoutDashboard className="h-4 w-4" />
                        Display Mode
                    </Button>
                    <Button variant="outline" size="sm">
                        <Settings className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </header>
    );
}
