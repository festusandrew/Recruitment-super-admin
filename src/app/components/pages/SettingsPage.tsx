import { Bell, Globe, Lock, Palette, Mail, Building, CreditCard } from "lucide-react";

export function SettingsPage() {
    return (
        <div className="p-8">
            <div className="max-w-[1200px] mx-auto">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-gray-900 mb-2">Settings</h1>
                    <p className="text-gray-600">Manage your workspace preferences and configurations</p>
                </div>

                {/* Settings Categories */}
                <div className="space-y-6">
                    {/* Company Information */}
                    <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#F5E6E8] rounded-lg flex items-center justify-center">
                                    <Building className="w-5 h-5 text-[#800020]" />
                                </div>
                                <div>
                                    <h2 className="text-gray-900">Company Information</h2>
                                    <p className="text-sm text-gray-500">Update your company details</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm text-gray-700 mb-2">Company Name</label>
                                    <input
                                        type="text"
                                        defaultValue="MployUs Inc."
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-700 mb-2">Industry</label>
                                    <input
                                        type="text"
                                        defaultValue="Technology"
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-700 mb-2">Website</label>
                                <input
                                    type="url"
                                    defaultValue="https://mployus.com"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent"
                                />
                            </div>
                            <button className="px-5 py-2.5 bg-[#800020] text-white rounded-lg hover:bg-[#600018] transition-colors">
                                Save Changes
                            </button>
                        </div>
                    </div>

                    {/* Notifications */}
                    <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                    <Bell className="w-5 h-5 text-purple-600" />
                                </div>
                                <div>
                                    <h2 className="text-gray-900">Notifications</h2>
                                    <p className="text-sm text-gray-500">Configure your notification preferences</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="text-sm text-gray-900">New Applications</p>
                                    <p className="text-xs text-gray-500 mt-1">Get notified when someone applies to your jobs</p>
                                </div>
                                <input type="checkbox" defaultChecked className="w-5 h-5 text-[#800020] rounded" />
                            </div>
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="text-sm text-gray-900">Interview Reminders</p>
                                    <p className="text-xs text-gray-500 mt-1">Receive reminders about upcoming interviews</p>
                                </div>
                                <input type="checkbox" defaultChecked className="w-5 h-5 text-[#800020] rounded" />
                            </div>
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="text-sm text-gray-900">Task Deadlines</p>
                                    <p className="text-xs text-gray-500 mt-1">Get notified about approaching task deadlines</p>
                                </div>
                                <input type="checkbox" defaultChecked className="w-5 h-5 text-[#800020] rounded" />
                            </div>
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="text-sm text-gray-900">Team Activity</p>
                                    <p className="text-xs text-gray-500 mt-1">Updates about team member actions</p>
                                </div>
                                <input type="checkbox" className="w-5 h-5 text-[#800020] rounded" />
                            </div>
                        </div>
                    </div>

                    {/* Email Settings */}
                    <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <h2 className="text-gray-900">Email Settings</h2>
                                    <p className="text-sm text-gray-500">Manage email templates and automation</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="text-sm text-gray-900">Auto-response to Applications</p>
                                    <p className="text-xs text-gray-500 mt-1">Automatically send confirmation emails</p>
                                </div>
                                <input type="checkbox" defaultChecked className="w-5 h-5 text-[#800020] rounded" />
                            </div>
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="text-sm text-gray-900">Interview Confirmation Emails</p>
                                    <p className="text-xs text-gray-500 mt-1">Send automated interview confirmations</p>
                                </div>
                                <input type="checkbox" defaultChecked className="w-5 h-5 text-[#800020] rounded" />
                            </div>
                            <button className="text-[#800020] hover:text-[#600018] text-sm">
                                Edit Email Templates →
                            </button>
                        </div>
                    </div>

                    {/* Security & Privacy */}
                    <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                                    <Lock className="w-5 h-5 text-red-600" />
                                </div>
                                <div>
                                    <h2 className="text-gray-900">Security & Privacy</h2>
                                    <p className="text-sm text-gray-500">Manage account security settings</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-900">Two-Factor Authentication</p>
                                    <p className="text-xs text-gray-500 mt-1">Add an extra layer of security</p>
                                </div>
                                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                                    Enable
                                </button>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-900">Change Password</p>
                                    <p className="text-xs text-gray-500 mt-1">Update your account password</p>
                                </div>
                                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                                    Update
                                </button>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-900">Active Sessions</p>
                                    <p className="text-xs text-gray-500 mt-1">Manage your logged-in devices</p>
                                </div>
                                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                                    View
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Appearance */}
                    <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                    <Palette className="w-5 h-5 text-orange-600" />
                                </div>
                                <div>
                                    <h2 className="text-gray-900">Appearance</h2>
                                    <p className="text-sm text-gray-500">Customize how MployUs looks</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm text-gray-700 mb-3">Theme</label>
                                <div className="flex gap-3">
                                    <button className="flex-1 p-4 border-2 border-[#800020] rounded-lg bg-[#F5E6E8]">
                                        <p className="text-sm text-gray-900 mb-1">Light Mode</p>
                                        <p className="text-xs text-gray-500">Current theme</p>
                                    </button>
                                    <button className="flex-1 p-4 border-2 border-gray-300 rounded-lg bg-gray-900 hover:border-gray-400 transition-colors">
                                        <p className="text-sm text-white mb-1">Dark Mode</p>
                                        <p className="text-xs text-gray-400">Coming soon</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Billing */}
                    <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                                    <CreditCard className="w-5 h-5 text-yellow-600" />
                                </div>
                                <div>
                                    <h2 className="text-gray-900">Billing & Subscription</h2>
                                    <p className="text-sm text-gray-500">Manage your plan and payment methods</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg mb-4">
                                <div>
                                    <p className="text-sm text-gray-900">Current Plan: Professional</p>
                                    <p className="text-xs text-gray-500 mt-1">Next billing date: Dec 28, 2025</p>
                                </div>
                                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                                    Manage Plan
                                </button>
                            </div>
                            <button className="text-[#800020] hover:text-[#600018] text-sm">
                                View Billing History →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
