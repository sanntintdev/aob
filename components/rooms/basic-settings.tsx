import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { MessageSquare, Users } from 'lucide-react';

export const BasicSettings = () => {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <MessageSquare className="h-5 w-5" />
                        Room Details
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="title">Room Title</Label>
                        <Input id="title" placeholder="My Q&A Session" />
                        <p className="text-sm text-gray-500">
                            This will be displayed to all participants
                        </p>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Description (Optional)</Label>
                        <Input id="description" placeholder="What's this Q&A session about?" />
                    </div>

                    <Separator />

                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label>Participant Limit</Label>
                                <p className="text-sm text-gray-500">
                                    Maximum number of participants
                                </p>
                            </div>
                            <Input type="number" className="w-24 text-right" defaultValue="100" />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label>Auto-approve Questions</Label>
                                <p className="text-sm text-gray-500">
                                    Show questions without moderation
                                </p>
                            </div>
                            <Switch />
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        Participant Settings
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>Allow Voting</Label>
                            <p className="text-sm text-gray-500">
                                Participants can upvote questions
                            </p>
                        </div>
                        <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>Question Character Limit</Label>
                            <p className="text-sm text-gray-500">Maximum length of questions</p>
                        </div>
                        <Input type="number" className="w-24 text-right" defaultValue="200" />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
