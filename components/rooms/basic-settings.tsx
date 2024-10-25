'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { MessageSquare, Users } from 'lucide-react';

interface BasicSettingsProps {
    errors?: {
        title?: string[];
        description?: string[];
        participantLimit?: string[];
        questionCharLimit?: string[];
    };
}

export const BasicSettings = ({ errors }: BasicSettingsProps) => {
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
                        <Input
                            id="title"
                            name="title"
                            placeholder="My Q&A Session"
                            className={errors?.title ? 'border-red-500' : ''}
                        />
                        {errors?.title && <p className="text-sm text-red-500">{errors.title[0]}</p>}
                        <p className="text-sm text-gray-500">
                            This will be displayed to all participants
                        </p>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Description (Optional)</Label>
                        <Input
                            id="description"
                            name="description"
                            placeholder="What's this Q&A session about?"
                            className={errors?.description ? 'border-red-500' : ''}
                        />
                        {errors?.description && (
                            <p className="text-sm text-red-500">{errors.description[0]}</p>
                        )}
                    </div>

                    <Separator />

                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label htmlFor="participantLimit">Participant Limit</Label>
                                <p className="text-sm text-gray-500">
                                    Maximum number of participants
                                </p>
                            </div>
                            <Input
                                id="participantLimit"
                                name="participantLimit"
                                type="number"
                                className={`w-24 text-right ${
                                    errors?.participantLimit ? 'border-red-500' : ''
                                }`}
                                defaultValue="100"
                            />
                        </div>
                        {errors?.participantLimit && (
                            <p className="text-sm text-red-500">{errors.participantLimit[0]}</p>
                        )}

                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label>Auto-approve Questions</Label>
                                <p className="text-sm text-gray-500">
                                    Show questions without moderation
                                </p>
                            </div>
                            <Switch name="autoApprove" />
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
                        <Switch name="allowVoting" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label htmlFor="questionCharLimit">Question Character Limit</Label>
                            <p className="text-sm text-gray-500">Maximum length of questions</p>
                        </div>
                        <Input
                            id="questionCharLimit"
                            name="questionCharLimit"
                            type="number"
                            className={`w-24 text-right ${
                                errors?.questionCharLimit ? 'border-red-500' : ''
                            }`}
                            defaultValue="200"
                        />
                    </div>
                    {errors?.questionCharLimit && (
                        <p className="text-sm text-red-500">{errors.questionCharLimit[0]}</p>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};
