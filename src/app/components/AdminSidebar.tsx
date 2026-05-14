import { useState } from "react";
import {
    LayoutDashboard,
    Building2,
    BarChart3,
    Settings,
    Users,
    Shield,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    HelpCircle,
    MessageCircle,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface AdminSidebarProps {
    activePage: string;
    onNavigate: (page: string) => void;
}

export function AdminSidebar({ activePage, onNavigate }: AdminSidebarProps) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const adminNavItems = [
        { icon: LayoutDashboard, label: "Dashboard", page: "dashboard" },
        { icon: Building2, label: "Companies", page: "companies" },
        { icon: BarChart3, label: "Analytics", page: "analytics" },
        { icon: Settings, label: "System Settings", page: "settings" },
    ];

    const secondaryNavItems = [
        { icon: HelpCircle, label: "Help Center", page: "help" },
        { icon: MessageCircle, label: "Support", page: "support" },
    ];

    return (
        <aside className={`${isCollapsed ? "w-[80px]" : "w-[260px]"} bg-[#800020] border-r border-[#600018] flex flex-col h-screen sticky top-0 transition-all duration-300 z-20`}>
            {/* Brand Area */}
            <div className={`p-4 border-b border-[#600018] flex items-center ${isCollapsed ? 'justify-center flex-col gap-2' : 'justify-between'}`}>
                <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#A52A2A] to-[#8B0000] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-white" />
                    </div>
                    {!isCollapsed && (
                        <div className="truncate">
                            <h1 className="text-white font-semibold text-lg leading-tight truncate">MployUs</h1>
                            <p className="text-xs text-gray-300 truncate">Super Admin</p>
                        </div>
                    )}
                </div>
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="p-1.5 rounded-lg hover:bg-[#600018] text-gray-300 hover:text-white transition-colors flex items-center justify-center"
                    title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
                >
                    {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                </button>
            </div>

            {/* Admin Navigation */}
            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                {adminNavItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activePage === item.page;
                    return (
                        <button
                            key={item.label}
                            onClick={() => onNavigate(item.page)}
                            title={isCollapsed ? item.label : undefined}
                            className={`w-full flex items-center ${isCollapsed ? 'justify-center py-3 px-0' : 'gap-3 px-3 py-2.5'} rounded-lg transition-all duration-200 group relative ${isActive
                                    ? "bg-[#A52A2A] text-white shadow-sm"
                                    : "text-gray-200 hover:bg-[#600018] hover:text-white"
                                }`}
                        >
                            {isActive && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full" />
                            )}
                            <Icon className="w-5 h-5 flex-shrink-0" strokeWidth={isActive ? 2.5 : 2} />
                            {!isCollapsed && <span className={isActive ? "font-medium truncate" : "truncate"}>{item.label}</span>}
                        </button>
                    );
                })}

                {/* Divider */}
                <div className="pt-4 pb-3">
                    <div className="h-px bg-gray-300/30" />
                </div>

                {/* Secondary Navigation */}
                {secondaryNavItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activePage === item.page;
                    return (
                        <button
                            key={item.label}
                            onClick={() => onNavigate(item.page)}
                            title={isCollapsed ? item.label : undefined}
                            className={`w-full flex items-center ${isCollapsed ? 'justify-center py-3 px-0' : 'gap-3 px-3 py-2.5'} rounded-lg transition-all duration-200 ${isActive
                                    ? "bg-[#A52A2A] text-white shadow-sm"
                                    : "text-gray-300 hover:bg-[#600018] hover:text-white"
                                }`}
                        >
                            <Icon className="w-5 h-5 flex-shrink-0" strokeWidth={2} />
                            {!isCollapsed && <span className="truncate">{item.label}</span>}
                        </button>
                    );
                })}
            </nav>

            {/* Bottom Account Section */}
            <div className="p-4 border-t border-[#600018]">
                <button
                    className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'gap-3 px-3 py-2.5'} rounded-lg hover:bg-[#600018] transition-all duration-200`}
                    title={isCollapsed ? "Super Admin" : undefined}
                >
                    <Avatar className="w-9 h-9 flex-shrink-0">
                        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" />
                        <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                    {!isCollapsed && (
                        <>
                            <div className="flex-1 text-left truncate">
                                <p className="text-sm text-white truncate">Super Admin</p>
                                <p className="text-xs text-gray-300 truncate">System Administrator</p>
                            </div>
                            <ChevronDown className="w-4 h-4 text-gray-300 flex-shrink-0" />
                        </>
                    )}
                </button>
            </div>
        </aside>
    );
}