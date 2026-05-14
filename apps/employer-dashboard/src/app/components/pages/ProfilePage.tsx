import { Camera, Mail, Phone, MapPin, Briefcase, Calendar, Award, Shield, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function ProfilePage() {
    const activityLog = [
        { action: "Updated job posting", item: "Senior React Developer", time: "2 hours ago" },
        { action: "Scheduled interview with", item: "Sarah Johnson", time: "5 hours ago" },
        { action: "Reviewed candidate", item: "Michael Chen", time: "1 day ago" },
        { action: "Added new team member", item: "Emily Rodriguez", time: "2 days ago" },
        { action: "Changed pipeline status", item: "Backend Developer role", time: "3 days ago" },
    ];

    return (
        <div className="p-8">
            <div className="max-w-[1200px] mx-auto">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-gray-900 mb-2">My Profile</h1>
                    <p className="text-gray-600">Manage your personal information and preferences</p>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {/* Left Column - Profile Card */}
                    <div className="col-span-1 space-y-6">
                        {/* Profile Picture Card */}
                        <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm p-6">
                            <div className="text-center">
                                <div className="relative inline-block mb-4">
                                    <Avatar className="w-24 h-24">
                                        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=employer" />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#800020] rounded-full flex items-center justify-center hover:bg-[#600018] transition-colors">
                                        <Camera className="w-4 h-4 text-white" />
                                    </button>
                                </div>
                                <h2 className="text-gray-900 mb-1">Jane Doe</h2>
                                <p className="text-sm text-gray-500 mb-4">Hiring Manager</p>
                                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                                    <MapPin className="w-4 h-4" />
                                    <span>San Francisco, CA</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm p-6">
                            <h3 className="text-gray-900 mb-4">Quick Stats</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Active Jobs</span>
                                    <span className="text-gray-900">12</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Candidates Reviewed</span>
                                    <span className="text-gray-900">248</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Interviews Scheduled</span>
                                    <span className="text-gray-900">36</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Hires Made</span>
                                    <span className="text-gray-900">18</span>
                                </div>
                            </div>
                        </div>

                        {/* Account Actions */}
                        <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm p-6">
                            <h3 className="text-gray-900 mb-4">Account</h3>
                            <div className="space-y-2">
                                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-left">
                                    <Shield className="w-4 h-4" />
                                    <span className="text-sm">Security Settings</span>
                                </button>
                                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-left">
                                    <LogOut className="w-4 h-4" />
                                    <span className="text-sm">Sign Out</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Profile Details */}
                    <div className="col-span-2 space-y-6">
                        {/* Personal Information */}
                        <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm">
                            <div className="p-6 border-b border-gray-200">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-gray-900">Personal Information</h2>
                                    <button className="text-[#800020] hover:text-[#600018] text-sm">
                                        Edit
                                    </button>
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm text-gray-700 mb-2">First Name</label>
                                        <input
                                            type="text"
                                            defaultValue="Jane"
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-gray-700 mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            defaultValue="Doe"
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-700 mb-2">Email Address</label>
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-gray-400" />
                                        <input
                                            type="email"
                                            defaultValue="jane.doe@mployus.com"
                                            className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-700 mb-2">Phone Number</label>
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-5 h-5 text-gray-400" />
                                        <input
                                            type="tel"
                                            defaultValue="+1 (555) 123-4567"
                                            className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-700 mb-2">Location</label>
                                    <div className="flex items-center gap-3">
                                        <MapPin className="w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            defaultValue="San Francisco, CA"
                                            className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent"
                                        />
                                    </div>
                                </div>
                                <button className="px-6 py-2.5 bg-[#800020] text-white rounded-lg hover:bg-[#600018] transition-colors">
                                    Save Changes
                                </button>
                            </div>
                        </div>

                        {/* Professional Details */}
                        <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm">
                            <div className="p-6 border-b border-gray-200">
                                <h2 className="text-gray-900">Professional Details</h2>
                            </div>
                            <div className="p-6 space-y-4">
                                <div>
                                    <label className="block text-sm text-gray-700 mb-2">Job Title</label>
                                    <div className="flex items-center gap-3">
                                        <Briefcase className="w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            defaultValue="Hiring Manager"
                                            className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-700 mb-2">Department</label>
                                    <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent">
                                        <option>Human Resources</option>
                                        <option>Engineering</option>
                                        <option>Product</option>
                                        <option>Sales</option>
                                        <option>Marketing</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-700 mb-2">Member Since</label>
                                    <div className="flex items-center gap-3">
                                        <Calendar className="w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            defaultValue="January 15, 2024"
                                            disabled
                                            className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-700 mb-2">Role Permissions</label>
                                    <div className="flex items-center gap-3">
                                        <Award className="w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            defaultValue="Full Access"
                                            disabled
                                            className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm">
                            <div className="p-6 border-b border-gray-200">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-gray-900">Recent Activity</h2>
                                    <button className="text-[#800020] hover:text-[#600018] text-sm">
                                        View All →
                                    </button>
                                </div>
                            </div>
                            <div className="divide-y divide-gray-200">
                                {activityLog.map((activity, index) => (
                                    <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 bg-[#F5E6E8] rounded-full flex items-center justify-center flex-shrink-0">
                                                <div className="w-2 h-2 bg-[#800020] rounded-full" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm text-gray-900">
                                                    {activity.action} <span className="text-[#800020]">{activity.item}</span>
                                                </p>
                                                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
