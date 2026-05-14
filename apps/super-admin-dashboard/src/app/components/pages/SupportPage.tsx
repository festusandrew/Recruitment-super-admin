import { useState } from "react";
import { MessageCircle, Mail, Phone, Clock, CheckCircle, AlertCircle, X, Send, User, Calendar, ExternalLink, Tag } from "lucide-react";

export function SupportPage() {
    const [tickets, setTickets] = useState([
        {
            id: "#TKT-1245",
            subject: "Issue with candidate email notifications",
            category: "Technical Issue",
            status: "open",
            priority: "high",
            date: "Nov 27, 2025",
            lastUpdate: "2 hours ago",
            messages: [
                { sender: "You", time: "Nov 27, 2025, 10:15 AM", text: "Candidate emails are not sending when moving applicants to Interview stage." },
                { sender: "Support Agent (Sarah)", time: "Nov 27, 2025, 11:30 AM", text: "Hello! We are currently investigating the SMTP relay delay. We will update you shortly." }
            ]
        },
        {
            id: "#TKT-1238",
            subject: "Question about analytics export",
            category: "Feature Request",
            status: "in-progress",
            priority: "medium",
            date: "Nov 25, 2025",
            lastUpdate: "1 day ago",
            messages: [
                { sender: "You", time: "Nov 25, 2025, 2:00 PM", text: "Can we export custom date ranges in CSV format from Platform Analytics?" },
                { sender: "Support Agent (Mark)", time: "Nov 26, 2025, 9:00 AM", text: "This feature is currently in beta! I have enabled it for your account." }
            ]
        },
        {
            id: "#TKT-1220",
            subject: "Feature request: Bulk candidate actions",
            category: "Feature Request",
            status: "resolved",
            priority: "low",
            date: "Nov 20, 2025",
            lastUpdate: "5 days ago",
            messages: [
                { sender: "You", time: "Nov 20, 2025, 4:20 PM", text: "We need the ability to archive multiple candidates at once." },
                { sender: "Support Agent (System)", time: "Nov 22, 2025, 1:15 PM", text: "Resolved: Bulk selection has been rolled out in v2.4." }
            ]
        },
    ]);

    // Form state
    const [subject, setSubject] = useState("");
    const [category, setCategory] = useState("Technical Issue");
    const [priority, setPriority] = useState("medium");
    const [description, setDescription] = useState("");

    // Active Modals & Views
    const [selectedTicket, setSelectedTicket] = useState<any>(null);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [chatMessage, setChatMessage] = useState("");
    const [chatLog, setChatLog] = useState([
        { sender: "System", time: "Just now", text: "Hello! An agent will join shortly. How can we help you today?" }
    ]);
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    const showToast = (msg: string) => {
        setToastMessage(msg);
        setTimeout(() => setToastMessage(null), 4000);
    };

    const handleSubmitTicket = (e: React.FormEvent) => {
        e.preventDefault();
        if (!subject.trim() || !description.trim()) {
            showToast("⚠️ Please fill in both the Subject and Description fields.");
            return;
        }

        const newTicket = {
            id: `#TKT-${Math.floor(1000 + Math.random() * 9000)}`,
            subject,
            category,
            status: "open",
            priority,
            date: "Just now",
            lastUpdate: "Just now",
            messages: [
                { sender: "You", time: "Just now", text: description }
            ]
        };

        setTickets([newTicket, ...tickets]);
        setSubject("");
        setDescription("");
        showToast("✅ Support ticket submitted successfully! Our team will respond shortly.");
    };

    const handleSendChatMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!chatMessage.trim()) return;

        const newMsg = { sender: "You", time: "Just now", text: chatMessage };
        setChatLog([...chatLog, newMsg]);
        setChatMessage("");

        // Simulated auto response
        setTimeout(() => {
            setChatLog(prev => [...prev, { sender: "Support Agent (Alex)", time: "Just now", text: "Thanks for reaching out! I am looking into your account right now." }]);
        }, 1500);
    };

    return (
        <div className="p-8 relative">
            {/* Toast Notification */}
            {toastMessage && (
                <div className="fixed top-6 right-6 z-50 bg-gray-900 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-fade-in border border-gray-800">
                    <span className="text-sm font-medium">{toastMessage}</span>
                    <button onClick={() => setToastMessage(null)} className="text-gray-400 hover:text-white ml-2">
                        <X className="w-4 h-4" />
                    </button>
                </div>
            )}

            <div className="max-w-[1200px] mx-auto">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-gray-900 mb-2">Support Center</h1>
                    <p className="text-gray-600">Get help from our dedicated support team</p>
                </div>

                {/* Contact Methods */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="p-6 bg-white rounded-xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 bg-[#F5E6E8] rounded-lg flex items-center justify-center mb-4">
                                <MessageCircle className="w-6 h-6 text-[#800020]" />
                            </div>
                            <h3 className="text-gray-900 mb-2">Live Chat</h3>
                            <p className="text-sm text-gray-500 mb-6">Chat with our support team in real-time</p>
                        </div>
                        <button 
                            onClick={() => setIsChatOpen(true)}
                            className="w-full px-4 py-2.5 bg-[#800020] text-white rounded-lg hover:bg-[#600018] transition-colors font-medium flex items-center justify-center gap-2"
                        >
                            <MessageCircle className="w-4 h-4" /> Start Chat
                        </button>
                    </div>

                    <div className="p-6 bg-white rounded-xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <Mail className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-gray-900 mb-2">Email Support</h3>
                            <p className="text-sm text-gray-500 mb-6">We'll respond within 24 hours</p>
                        </div>
                        <button 
                            onClick={() => showToast("✉️ Email prompt initiated: support@mployus.com")}
                            className="w-full px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center gap-2"
                        >
                            <Mail className="w-4 h-4" /> Send Email
                        </button>
                    </div>

                    <div className="p-6 bg-white rounded-xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <Phone className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-gray-900 mb-2">Phone Support</h3>
                            <p className="text-sm text-gray-500 mb-6">Available Mon-Fri, 9am-6pm EST</p>
                        </div>
                        <button 
                            onClick={() => showToast("📞 Calling Support Line: +1 (800) 555-0199")}
                            className="w-full px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center gap-2"
                        >
                            <Phone className="w-4 h-4" /> Call Us
                        </button>
                    </div>
                </div>

                {/* Support Hours */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Clock className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="text-gray-900 mb-2">Support Hours</h3>
                            <div className="space-y-1 text-sm text-gray-600">
                                <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                                <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                                <p>Sunday: Closed (Email support available)</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Create New Ticket */}
                <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm mb-8">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-gray-900">Submit a Support Request</h2>
                        <p className="text-sm text-gray-500 mt-1">Our team typically responds within 2-4 hours</p>
                    </div>
                    <form onSubmit={handleSubmitTicket} className="p-6 space-y-4">
                        <div>
                            <label className="block text-sm text-gray-700 mb-2">Subject</label>
                            <input
                                type="text"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                placeholder="Brief description of your issue"
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-700 mb-2">Category</label>
                            <select 
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent"
                            >
                                <option>Technical Issue</option>
                                <option>Feature Request</option>
                                <option>Billing Question</option>
                                <option>Account Access</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-700 mb-2">Priority</label>
                            <select 
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent"
                            >
                                <option value="low">Low - General question</option>
                                <option value="medium">Medium - Issue affecting work</option>
                                <option value="high">High - Critical issue</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-700 mb-2">Description</label>
                            <textarea
                                rows={5}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Please provide detailed information about your issue..."
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent resize-none"
                            />
                        </div>
                        <div className="flex items-center gap-3 pt-2">
                            <button 
                                type="submit" 
                                className="px-6 py-2.5 bg-[#800020] text-white rounded-lg hover:bg-[#600018] transition-colors font-medium"
                            >
                                Submit Request
                            </button>
                            <button 
                                type="button" 
                                onClick={() => {
                                    setSubject("");
                                    setDescription("");
                                    showToast("ℹ️ Form cleared.");
                                }}
                                className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>

                {/* Your Support Tickets */}
                <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm mb-8">
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-gray-900">Your Support Tickets</h2>
                                <p className="text-sm text-gray-500 mt-1">Track and manage your support requests</p>
                            </div>
                            <button 
                                onClick={() => showToast("📂 Showing all past and archived support tickets.")}
                                className="text-[#800020] hover:text-[#600018] text-sm font-medium flex items-center gap-1"
                            >
                                View All →
                            </button>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-200">
                        {tickets.map((ticket) => (
                            <div key={ticket.id} className="p-6 hover:bg-gray-50 transition-colors">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="font-semibold text-gray-900">{ticket.id}</span>
                                            <span
                                                className={`px-2.5 py-1 rounded-full text-xs font-medium ${ticket.status === "open"
                                                        ? "bg-blue-100 text-blue-700"
                                                        : ticket.status === "in-progress"
                                                            ? "bg-yellow-100 text-yellow-700"
                                                            : "bg-green-100 text-green-700"
                                                    }`}
                                            >
                                                {ticket.status === "open" ? "Open" : ticket.status === "in-progress" ? "In Progress" : "Resolved"}
                                            </span>
                                            <span
                                                className={`px-2.5 py-1 rounded-full text-xs font-medium ${ticket.priority === "high"
                                                        ? "bg-red-100 text-red-700"
                                                        : ticket.priority === "medium"
                                                            ? "bg-orange-100 text-orange-700"
                                                            : "bg-gray-100 text-gray-700"
                                                    }`}
                                            >
                                                {ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)} Priority
                                            </span>
                                        </div>
                                        <h3 className="text-gray-900 mb-2 font-medium">{ticket.subject}</h3>
                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                            <span>Created: {ticket.date}</span>
                                            <span>•</span>
                                            <span>Last update: {ticket.lastUpdate}</span>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => setSelectedTicket(ticket)}
                                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Resources */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-gradient-to-br from-[#800020] to-[#600018] rounded-xl text-white flex flex-col justify-between shadow-md">
                        <div>
                            <CheckCircle className="w-8 h-8 mb-3 text-white/90" />
                            <h3 className="mb-2 text-lg font-semibold">Knowledge Base</h3>
                            <p className="text-sm text-gray-200 mb-6 leading-relaxed">Find answers instantly in our extensive help documentation and video tutorials.</p>
                        </div>
                        <button 
                            onClick={() => showToast("📚 Navigating to Knowledge Base articles...")}
                            className="text-sm text-white hover:text-gray-200 font-medium self-start flex items-center gap-1.5 underline underline-offset-4"
                        >
                            Browse Articles →
                        </button>
                    </div>

                    <div className="p-6 bg-gray-900 rounded-xl text-white flex flex-col justify-between shadow-md">
                        <div>
                            <AlertCircle className="w-8 h-8 mb-3 text-blue-400" />
                            <h3 className="mb-2 text-lg font-semibold">System Status</h3>
                            <p className="text-sm text-gray-300 mb-6 leading-relaxed">Check platform operational status, API response times, and server uptime reports.</p>
                        </div>
                        <button 
                            onClick={() => showToast("🟢 All Systems Operational (99.99% Uptime)")}
                            className="text-sm text-white hover:text-gray-300 font-medium self-start flex items-center gap-1.5 underline underline-offset-4"
                        >
                            View Status →
                        </button>
                    </div>
                </div>
            </div>

            {/* Live Chat Modal */}
            {isChatOpen && (
                <div className="fixed inset-0 bg-black/10 z-50 flex items-center justify-center p-4 backdrop-blur-[2px] animate-fade-in">
                    <div className="bg-white rounded-2xl max-w-[500px] w-full shadow-2xl flex flex-col h-[600px] overflow-hidden border border-gray-100">
                        <div className="bg-[#800020] text-white p-5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                    <MessageCircle className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-base">Live Support Chat</h3>
                                    <p className="text-xs text-white/80">Typically replies under 2 minutes</p>
                                </div>
                            </div>
                            <button onClick={() => setIsChatOpen(false)} className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="flex-1 p-5 overflow-y-auto space-y-4 bg-gray-50/50">
                            {chatLog.map((msg, idx) => (
                                <div key={idx} className={`flex flex-col max-w-[80%] ${msg.sender === "You" ? "ml-auto items-end" : "mr-auto items-start"}`}>
                                    <div className={`p-3.5 rounded-2xl text-sm shadow-sm ${msg.sender === "You" ? "bg-[#800020] text-white rounded-tr-none" : "bg-white text-gray-800 border border-gray-100 rounded-tl-none"}`}>
                                        {msg.text}
                                    </div>
                                    <span className="text-[10px] text-gray-400 mt-1 px-1">{msg.sender} • {msg.time}</span>
                                </div>
                            ))}
                        </div>
                        <form onSubmit={handleSendChatMessage} className="p-4 border-t border-gray-100 bg-white flex items-center gap-2">
                            <input 
                                type="text" 
                                value={chatMessage} 
                                onChange={(e) => setChatMessage(e.target.value)} 
                                placeholder="Type your message..."
                                className="flex-1 px-4 py-2.5 bg-gray-100 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#800020]/20 focus:bg-white border border-transparent transition-all"
                            />
                            <button type="submit" className="p-2.5 bg-[#800020] text-white rounded-xl hover:bg-[#600018] transition-colors shadow-md">
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Ticket Details Modal */}
            {selectedTicket && (
                <div className="fixed inset-0 bg-black/10 z-50 flex items-center justify-center p-4 backdrop-blur-[2px] animate-fade-in">
                    <div className="bg-white rounded-2xl max-w-[650px] w-full shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[80vh]">
                        <div className="p-6 border-b border-gray-100 flex items-start justify-between bg-gray-50/50">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="font-bold text-gray-900 text-lg">{selectedTicket.id}</span>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${selectedTicket.status === 'open' ? 'bg-blue-100 text-blue-700' : selectedTicket.status === 'in-progress' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                                        {selectedTicket.status.toUpperCase()}
                                    </span>
                                </div>
                                <h2 className="text-xl font-semibold text-gray-900">{selectedTicket.subject}</h2>
                            </div>
                            <button onClick={() => setSelectedTicket(null)} className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-6 overflow-y-auto space-y-6 flex-1">
                            <div className="flex items-center gap-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                <div className="flex items-center gap-2">
                                    <Tag className="w-4 h-4 text-[#800020]" />
                                    <span>Category: <strong>{selectedTicket.category || 'Technical Issue'}</strong></span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-blue-600" />
                                    <span>Created: <strong>{selectedTicket.date}</strong></span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Conversation History</h3>
                                <div className="space-y-4">
                                    {selectedTicket.messages?.map((msg: any, i: number) => (
                                        <div key={i} className={`p-4 rounded-xl border ${msg.sender === 'You' ? 'bg-white border-gray-200' : 'bg-[#F5E6E8]/40 border-[#800020]/20'}`}>
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-2">
                                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${msg.sender === 'You' ? 'bg-gray-900 text-white' : 'bg-[#800020] text-white'}`}>
                                                        {msg.sender[0]}
                                                    </div>
                                                    <span className="font-semibold text-sm text-gray-900">{msg.sender}</span>
                                                </div>
                                                <span className="text-xs text-gray-500">{msg.time}</span>
                                            </div>
                                            <p className="text-sm text-gray-700 leading-relaxed pl-8">{msg.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-t border-gray-100 bg-gray-50/50 flex justify-end">
                            <button onClick={() => setSelectedTicket(null)} className="px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-colors shadow-sm">
                                Close Window
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
