import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

interface HeaderProps {
    isAdminMode?: boolean;
}

export function Header({ isAdminMode = false }: HeaderProps) {
    return (
        <header className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-10">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl text-gray-900">
                        {isAdminMode ? "Super Admin Dashboard" : "Employer Dashboard"}
                    </h1>
                    <p className="text-sm text-gray-500 mt-0.5">
                        {isAdminMode ? "Manage platform, companies, and system settings" : "Manage your recruitment pipeline and team"}
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    {/* Search */}
                    <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                        <Search className="w-5 h-5 text-gray-600" />
                    </button>

                    {/* Notifications */}
                    <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
                        <Bell className="w-5 h-5 text-gray-600" />
                        <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-red-500 text-white text-xs rounded-full">
                            3
                        </Badge>
                    </button>

                    {/* Avatar */}
                    <Avatar className="w-9 h-9 cursor-pointer ring-2 ring-gray-200 hover:ring-gray-300 transition-all">
                        <AvatarImage src={isAdminMode ? "https://api.dicebear.com/7.x/avataaars/svg?seed=admin" : "https://api.dicebear.com/7.x/avataaars/svg?seed=employer"} />
                        <AvatarFallback>{isAdminMode ? "SA" : "JD"}</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </header>
    );
}