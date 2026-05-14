import { useState } from "react";
import { Bell, Globe, Lock, Palette, Mail, Building, CreditCard, Code, Key, Plus, Copy, Check, ExternalLink, RefreshCw } from "lucide-react";

export function SettingsPage() {
    const [apiKeys, setApiKeys] = useState([
        { id: 1, name: "Production Key - MployUs Core", key: "live_pk_8f92j3k4••••••••••••9f2a", created: "Oct 12, 2025", lastUsed: "Just now", status: "Active" },
        { id: 2, name: "Staging Integration Key", key: "test_pk_1a2b3c4d••••••••••••8e7f", created: "Nov 05, 2025", lastUsed: "2 hours ago", status: "Active" },
    ]);
    const [copiedId, setCopiedId] = useState<number | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const [newKeyName, setNewKeyName] = useState("");
    const [showGenerateForm, setShowGenerateForm] = useState(false);

    const [webhooks, setWebhooks] = useState([
        { id: 1, url: "https://api.mployus.com/v1/webhooks/receiver", events: ["job.applied", "interview.scheduled"], status: "Connected" },
    ]);

    const handleCopy = (id: number, key: string) => {
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const handleGenerateKey = () => {
        if (!newKeyName.trim()) return;
        setIsGenerating(true);
        setTimeout(() => {
            const randomString = Math.random().toString(36).substring(2, 15);
            setApiKeys([
                ...apiKeys,
                {
                    id: Date.now(),
                    name: newKeyName,
                    key: `live_pk_${randomString}••••••••••••${Math.floor(Math.random() * 9000 + 1000)}`,
                    created: "Just now",
                    lastUsed: "Never",
                    status: "Active",
                }
            ]);
            setNewKeyName("");
            setIsGenerating(false);
            setShowGenerateForm(false);
        }, 1000);
    };

    return (
        <div className="p-8">
            <div className="max-w-[1200px] mx-auto">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-gray-900 mb-2 font-bold text-2xl">Settings & Configurations</h1>
                    <p className="text-gray-600 text-sm">Manage your workspace preferences, integrations, and developer API settings</p>
                </div>

                {/* Settings Categories */}
                <div className="space-y-6">
                    {/* Company Information */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#F5E6E8] rounded-xl flex items-center justify-center">
                                    <Building className="w-5 h-5 text-[#800020]" />
                                </div>
                                <div>
                                    <h2 className="text-gray-900 font-semibold">Company Information</h2>
                                    <p className="text-xs text-gray-500">Update your company details and core profile</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                                    <input
                                        type="text"
                                        defaultValue="MployUs Inc."
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#800020] text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                                    <input
                                        type="text"
                                        defaultValue="Technology"
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#800020] text-sm"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                                <input
                                    type="url"
                                    defaultValue="https://mployus.com"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#800020] text-sm"
                                />
                            </div>
                            <button className="px-6 py-2.5 bg-[#800020] text-white font-medium rounded-xl hover:bg-[#600018] transition-colors shadow-md text-sm">
                                Save Changes
                            </button>
                        </div>
                    </div>

                    {/* REDESIGNED API & WEBHOOKS SECTION */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden ring-1 ring-[#7C3AED]/10">
                        <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-purple-50/50 via-indigo-50/30 to-white">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center shadow-inner">
                                        <Code className="w-5 h-5 text-[#7C3AED]" />
                                    </div>
                                    <div>
                                        <h2 className="text-gray-900 font-bold text-lg">API & Webhooks Configuration</h2>
                                        <p className="text-xs text-gray-500">Manage your developer API keys, webhooks, and third-party integrations</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setShowGenerateForm(!showGenerateForm)}
                                    className="flex items-center gap-2 px-4 py-2 bg-[#7C3AED] text-white rounded-xl font-medium hover:bg-[#6B46C1] transition-colors shadow-md text-sm"
                                >
                                    <Plus className="w-4 h-4" />
                                    Generate New API Key
                                </button>
                            </div>
                        </div>

                        <div className="p-6 space-y-8">
                            {/* Generate Key Form */}
                            {showGenerateForm && (
                                <div className="p-6 bg-purple-50/50 rounded-2xl border border-purple-100 animate-fade-in space-y-4">
                                    <h3 className="text-sm font-semibold text-purple-950 flex items-center gap-2">
                                        <Key className="w-4 h-4 text-[#7C3AED]" />
                                        Create New Live API Key
                                    </h3>
                                    <div className="flex items-end gap-4">
                                        <div className="flex-1">
                                            <label className="block text-xs font-medium text-purple-900 mb-1">Key Description / App Name</label>
                                            <input
                                                type="text"
                                                value={newKeyName}
                                                onChange={(e) => setNewKeyName(e.target.value)}
                                                placeholder="e.g. Mobile App Integration"
                                                className="w-full px-4 py-2.5 bg-white border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-sm"
                                            />
                                        </div>
                                        <button
                                            disabled={isGenerating || !newKeyName.trim()}
                                            onClick={handleGenerateKey}
                                            className="px-6 py-2.5 bg-[#7C3AED] text-white font-medium rounded-xl hover:bg-[#6B46C1] disabled:opacity-50 transition-all shadow text-sm flex items-center gap-2"
                                        >
                                            {isGenerating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                                            {isGenerating ? "Generating..." : "Confirm & Generate"}
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Active API Keys Table */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Active API Keys</h3>
                                <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-medium border-b border-gray-100">
                                            <tr>
                                                <th className="px-6 py-3.5">Name / Description</th>
                                                <th className="px-6 py-3.5">Token Key</th>
                                                <th className="px-6 py-3.5">Created</th>
                                                <th className="px-6 py-3.5">Last Used</th>
                                                <th className="px-6 py-3.5">Status</th>
                                                <th className="px-6 py-3.5 text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {apiKeys.map((item) => (
                                                <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
                                                    <td className="px-6 py-4 font-mono text-xs text-purple-700 bg-purple-50/50 px-3 py-1 rounded-lg w-max">{item.key}</td>
                                                    <td className="px-6 py-4 text-gray-500 text-xs">{item.created}</td>
                                                    <td className="px-6 py-4 text-gray-500 text-xs">{item.lastUsed}</td>
                                                    <td className="px-6 py-4">
                                                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                                                            {item.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-right">
                                                        <button
                                                            onClick={() => handleCopy(item.id, item.key)}
                                                            className="p-2 hover:bg-gray-200/60 rounded-lg transition-colors text-gray-600 hover:text-gray-900 inline-flex items-center gap-1 text-xs font-medium"
                                                        >
                                                            {copiedId === item.id ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                                                            {copiedId === item.id ? "Copied" : "Copy"}
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Webhooks Section */}
                            <div className="space-y-3 pt-4 border-t border-gray-100">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Webhook Endpoints</h3>
                                    <button
                                        onClick={() => alert("Add webhook endpoint feature simulated.")}
                                        className="text-xs font-semibold text-[#7C3AED] hover:text-[#6B46C1] flex items-center gap-1 transition-colors"
                                    >
                                        <Plus className="w-3.5 h-3.5" />
                                        Add Webhook Endpoint
                                    </button>
                                </div>
                                <div className="space-y-3">
                                    {webhooks.map((wh) => (
                                        <div key={wh.id} className="flex items-center justify-between p-4 bg-gray-50/80 border border-gray-100 rounded-2xl hover:border-purple-200 transition-all">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-3">
                                                    <span className="font-mono text-xs text-gray-900 bg-white px-2.5 py-1 border border-gray-200 rounded-lg shadow-sm">{wh.url}</span>
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-100 text-purple-800">
                                                        {wh.status}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2 pt-1">
                                                    <span className="text-xs font-medium text-gray-500">Subscribed events:</span>
                                                    {wh.events.map((evt, idx) => (
                                                        <span key={idx} className="bg-gray-200 text-gray-700 text-[10px] font-semibold px-2 py-0.5 rounded">
                                                            {evt}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <button className="text-xs font-medium text-gray-500 hover:text-red-600 transition-colors p-2">
                                                Revoke
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* API Quota & Documentation */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 flex flex-col justify-between space-y-4">
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-semibold text-gray-900 uppercase tracking-wider">API Quota Usage</span>
                                            <span className="text-xs font-bold text-[#7C3AED]">84% Used</span>
                                        </div>
                                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                                            <div className="bg-gradient-to-r from-[#7C3AED] to-[#9333EA] h-full rounded-full" style={{ width: "84%" }}></div>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 font-medium">845,210 of 1,000,000 monthly requests consumed. Resets in 14 days.</p>
                                </div>

                                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-5 rounded-2xl flex flex-col justify-between shadow-md space-y-4">
                                    <div>
                                        <h4 className="font-bold text-sm mb-1 flex items-center gap-2">
                                            Developer Docs & SDKs
                                            <ExternalLink className="w-4 h-4 opacity-80" />
                                        </h4>
                                        <p className="text-xs text-purple-100">Explore comprehensive guides, API reference, and official client libraries for Node.js, Python, and Go.</p>
                                    </div>
                                    <a
                                        href="#docs"
                                        onClick={(e) => { e.preventDefault(); alert("Redirecting to Developer Portal..."); }}
                                        className="inline-flex items-center justify-center px-4 py-2 bg-white text-purple-900 text-xs font-bold rounded-xl hover:bg-purple-50 transition-colors shadow"
                                    >
                                        Explore Documentation
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Notifications */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                                    <Bell className="w-5 h-5 text-purple-600" />
                                </div>
                                <div>
                                    <h2 className="text-gray-900 font-semibold">Notifications</h2>
                                    <p className="text-xs text-gray-500">Configure your notification preferences</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">New Applications</p>
                                    <p className="text-xs text-gray-500 mt-1">Get notified when someone applies to your jobs</p>
                                </div>
                                <input type="checkbox" defaultChecked className="w-5 h-5 text-[#800020] rounded" />
                            </div>
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Interview Reminders</p>
                                    <p className="text-xs text-gray-500 mt-1">Receive reminders about upcoming interviews</p>
                                </div>
                                <input type="checkbox" defaultChecked className="w-5 h-5 text-[#800020] rounded" />
                            </div>
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Task Deadlines</p>
                                    <p className="text-xs text-gray-500 mt-1">Get notified about approaching task deadlines</p>
                                </div>
                                <input type="checkbox" defaultChecked className="w-5 h-5 text-[#800020] rounded" />
                            </div>
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Team Activity</p>
                                    <p className="text-xs text-gray-500 mt-1">Updates about team member actions</p>
                                </div>
                                <input type="checkbox" className="w-5 h-5 text-[#800020] rounded" />
                            </div>
                        </div>
                    </div>

                    {/* Email Settings */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <h2 className="text-gray-900 font-semibold">Email Settings</h2>
                                    <p className="text-xs text-gray-500">Manage email templates and automation</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Auto-response to Applications</p>
                                    <p className="text-xs text-gray-500 mt-1">Automatically send confirmation emails</p>
                                </div>
                                <input type="checkbox" defaultChecked className="w-5 h-5 text-[#800020] rounded" />
                            </div>
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Interview Confirmation Emails</p>
                                    <p className="text-xs text-gray-500 mt-1">Send automated interview confirmations</p>
                                </div>
                                <input type="checkbox" defaultChecked className="w-5 h-5 text-[#800020] rounded" />
                            </div>
                            <button className="text-[#800020] hover:text-[#600018] text-sm font-semibold">
                                Edit Email Templates →
                            </button>
                        </div>
                    </div>

                    {/* Security & Privacy */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                                    <Lock className="w-5 h-5 text-red-600" />
                                </div>
                                <div>
                                    <h2 className="text-gray-900 font-semibold">Security & Privacy</h2>
                                    <p className="text-xs text-gray-500">Manage account security settings</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Two-Factor Authentication</p>
                                    <p className="text-xs text-gray-500 mt-1">Add an extra layer of security</p>
                                </div>
                                <button className="px-5 py-2 border border-gray-300 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
                                    Enable
                                </button>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Change Password</p>
                                    <p className="text-xs text-gray-500 mt-1">Update your account password</p>
                                </div>
                                <button className="px-5 py-2 border border-gray-300 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
                                    Update
                                </button>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Active Sessions</p>
                                    <p className="text-xs text-gray-500 mt-1">Manage your logged-in devices</p>
                                </div>
                                <button className="px-5 py-2 border border-gray-300 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
                                    View
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Appearance */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                                    <Palette className="w-5 h-5 text-orange-600" />
                                </div>
                                <div>
                                    <h2 className="text-gray-900 font-semibold">Appearance</h2>
                                    <p className="text-xs text-gray-500">Customize how MployUs looks</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-3">Theme</label>
                                <div className="flex gap-3">
                                    <button className="flex-1 p-4 border-2 border-[#800020] rounded-xl bg-[#F5E6E8]">
                                        <p className="text-sm font-bold text-gray-900 mb-1">Light Mode</p>
                                        <p className="text-xs text-gray-500 font-medium">Current theme</p>
                                    </button>
                                    <button className="flex-1 p-4 border-2 border-gray-300 rounded-xl bg-gray-900 hover:border-gray-400 transition-colors">
                                        <p className="text-sm font-bold text-white mb-1">Dark Mode</p>
                                        <p className="text-xs text-gray-400 font-medium">Coming soon</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Billing */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                                    <CreditCard className="w-5 h-5 text-yellow-600" />
                                </div>
                                <div>
                                    <h2 className="text-gray-900 font-semibold">Billing & Subscription</h2>
                                    <p className="text-xs text-gray-500">Manage your plan and payment methods</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl mb-4">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Current Plan: Professional</p>
                                    <p className="text-xs text-gray-500 mt-1">Next billing date: Dec 28, 2025</p>
                                </div>
                                <button className="px-5 py-2 border border-gray-300 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
                                    Manage Plan
                                </button>
                            </div>
                            <button className="text-[#800020] hover:text-[#600018] text-sm font-semibold">
                                View Billing History →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
