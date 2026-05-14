import { KPICards } from "../KPICards";
import { ActiveJobs } from "../ActiveJobs";
import { PipelineSnapshot } from "../PipelineSnapshot";
import { ActivityFeed } from "../ActivityFeed";
import { TasksWidget } from "../TasksWidget";

interface DashboardPageProps {
    onViewAllJobs?: () => void;
}

export function DashboardPage({ onViewAllJobs }: DashboardPageProps) {
    return (
        <div className="p-8">
            <div className="max-w-[1600px] mx-auto">
                {/* KPI Summary Cards */}
                <KPICards />

                {/* 3-Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                    {/* Left/Center Column - Spans 2 columns */}
                    <div className="lg:col-span-2 space-y-6">
                        <ActiveJobs onViewAll={onViewAllJobs} />
                        <PipelineSnapshot />
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        <ActivityFeed />
                        <TasksWidget />
                    </div>
                </div>
            </div>
        </div>
    );
}
