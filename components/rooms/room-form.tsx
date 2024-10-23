'use client';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BasicSettings } from './basic-settings';
import { AdvancedSettings } from './advance-settings';

export const RoomForm = () => {
    return (
        <>
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
                <Button variant="ghost" size="icon" className="shrink-0">
                    <ChevronLeft className="h-5 w-5" />
                </Button>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Create a Room</h1>
                    <p className="text-sm text-gray-500">Set up your Q&A session</p>
                </div>
            </div>

            {/* Form */}
            <Tabs defaultValue="basic" className="space-y-6">
                <TabsList className="grid grid-cols-2 w-full">
                    <TabsTrigger value="basic">Basic Setup</TabsTrigger>
                    <TabsTrigger value="advanced">Advanced Options</TabsTrigger>
                </TabsList>

                <TabsContent value="basic">
                    <BasicSettings />
                </TabsContent>

                <TabsContent value="advanced">
                    <AdvancedSettings />
                </TabsContent>
            </Tabs>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
                <Button variant="outline" className="w-full">
                    Cancel
                </Button>
                <Button className="w-full">Create Room</Button>
            </div>
        </>
    );
};
