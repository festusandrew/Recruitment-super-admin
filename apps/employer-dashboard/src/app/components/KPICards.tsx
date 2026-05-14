import { Briefcase, Users, Calendar, FileCheck, TrendingUp, TrendingDown } from "lucide-react";

const kpiData = [
    {
        label: "Open Roles",
        value: "24",
        change: "+3",
        trend: "up",
        icon: Briefcase,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
    },
    {
        label: "Total Applicants",
        value: "1,847",
        change: "+127",
        trend: "up",
        icon: Users,
        color: "text-green-600",
        bgColor: "bg-green-50",
    },
    {
        label: "Interviews Scheduled",
        value: "38",
        change: "+12",
        trend: "up",
        icon: Calendar,
        color: "text-purple-600",
        bgColor: "bg-purple-50",
    },
    {
        label: "Offers Pending",
        value: "7",
        change: "-2",
        trend: "down",
        icon: FileCheck,
        color: "text-orange-600",
        bgColor: "bg-orange-50",
    },
];

export function KPICards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpiData.map((kpi) => {
                const Icon = kpi.icon;
                const TrendIcon = kpi.trend === "up" ? TrendingUp : TrendingDown;

                return (
                    <div
                        key={kpi.label}
                        className="bg-white rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-200/60 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:border-gray-300/60 transition-all duration-200"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <p className="text-sm text-gray-600 mb-2">{kpi.label}</p>
                                <p className="text-3xl text-gray-900 mb-2">{kpi.value}</p>
                                <div className="flex items-center gap-1">
                                    <TrendIcon
                                        className={`w-4 h-4 ${kpi.trend === "up" ? "text-green-600" : "text-red-600"
                                            }`}
                                    />
                                    <span
                                        className={`text-sm ${kpi.trend === "up" ? "text-green-600" : "text-red-600"
                                            }`}
                                    >
                                        {kpi.change}
                                    </span>
                                    <span className="text-xs text-gray-500 ml-1">this week</span>
                                </div>
                            </div>
                            <div className={`${kpi.bgColor} ${kpi.color} p-3 rounded-xl`}>
                                <Icon className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}