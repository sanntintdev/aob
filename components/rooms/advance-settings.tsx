import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Settings } from 'lucide-react';

export const AdvancedSettings = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Advanced Settings
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                        <Label>Profanity Filter</Label>
                        <p className="text-sm text-gray-500">
                            Automatically filter inappropriate content
                        </p>
                    </div>
                    <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                        <Label>Rate Limiting</Label>
                        <p className="text-sm text-gray-500">Limit questions per participant</p>
                    </div>
                    <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                        <Label>Display Mode</Label>
                        <p className="text-sm text-gray-500">Enable presentation view</p>
                    </div>
                    <Switch />
                </div>

                <Separator />

                <div className="space-y-2">
                    <Label htmlFor="custom-code">Custom Room Code (Optional)</Label>
                    <Input
                        id="custom-code"
                        placeholder="Enter 6-character code"
                        className="uppercase"
                        maxLength={6}
                    />
                    <p className="text-sm text-gray-500">Leave blank for auto-generated code</p>
                </div>
            </CardContent>
        </Card>
    );
};
