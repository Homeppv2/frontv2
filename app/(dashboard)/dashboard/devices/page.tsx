'use client';
import React from 'react';
import BreadCrumb from '@/components/breadcrumb';
import { KanbanBoard } from '@/components/kanban/kanban-board';
import NewTaskDialog from '@/components/kanban/new-task-dialog';
import { Heading } from '@/components/ui/heading';
import { WSConnection } from './WSConnection';

const breadcrumbItems = [{ title: 'Devices', link: '/dashboard/devices' }];

const Page = () => {
    return (
        <>
            <WSConnection />
            <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                <BreadCrumb items={breadcrumbItems} />
                <div className="flex items-start justify-between">
                    <Heading title={`Devices`} description="View all data" />
                </div>
                <div>
                    test
                </div>
            </div>
        </>
    );
};

export default Page;
