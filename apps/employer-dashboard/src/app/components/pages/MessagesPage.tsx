import { Search, MoreVertical, Send, Paperclip, Smile } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useState } from "react";

const conversations = [
    { id: 1, name: "Sarah Chen", role: "Product Designer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah3", lastMessage: "Thanks for the update!", time: "2m ago", unread: 2, online: true },
    { id: 2, name: "Michael Torres", role: "Frontend Developer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael3", lastMessage: "When can we schedule the interview?", time: "1h ago", unread: 0, online: false },
    { id: 3, name: "Emily Watson", role: "Marketing Manager", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily3", lastMessage: "I've reviewed the offer letter", time: "3h ago", unread: 1, online: true },
    { id: 4, name: "David Kim", role: "Data Analyst", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david3", lastMessage: "Thank you for considering my application", time: "1d ago", unread: 0, online: false },
];

const messages = [
    { id: 1, sender: "Sarah Chen", content: "Hi! I wanted to follow up on the next steps in the interview process.", time: "10:30 AM", isSender: false },
    { id: 2, sender: "You", content: "Hi Sarah! Thanks for reaching out. We'd like to schedule a technical interview with you.", time: "10:35 AM", isSender: true },
    { id: 3, sender: "Sarah Chen", content: "That sounds great! I'm available next week. What days work best for your team?", time: "10:36 AM", isSender: false },
    { id: 4, sender: "You", content: "Perfect! How about Tuesday at 2:00 PM or Thursday at 10:00 AM?", time: "10:40 AM", isSender: true },
    { id: 5, sender: "Sarah Chen", content: "Tuesday at 2:00 PM works perfectly for me. Thanks for the update!", time: "10:42 AM", isSender: false },
];

export function MessagesPage() {
    const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
    const [messageInput, setMessageInput] = useState("");

    return (
        <div className="p-8">
            <div className="max-w-[1600px] mx-auto">
                <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm overflow-hidden" style={{ height: "calc(100vh - 180px)" }}>
                    <div className="flex h-full">
                        {/* Conversations List */}
                        <div className="w-80 border-r border-gray-200 flex flex-col">
                            <div className="p-4 border-b border-gray-200">
                                <h2 className="text-gray-900 mb-3">Messages</h2>
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search conversations..."
                                        className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto">
                                {conversations.map((conversation) => (
                                    <button
                                        key={conversation.id}
                                        onClick={() => setSelectedConversation(conversation)}
                                        className={`w-full p-4 flex items-start gap-3 hover:bg-gray-50 transition-colors border-b border-gray-100 ${selectedConversation.id === conversation.id ? "bg-[#F5E6E8]" : ""
                                            }`}
                                    >
                                        <div className="relative">
                                            <Avatar className="w-12 h-12">
                                                <AvatarImage src={conversation.avatar} />
                                                <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            {conversation.online && (
                                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                                            )}
                                        </div>
                                        <div className="flex-1 text-left min-w-0">
                                            <div className="flex items-center justify-between mb-1">
                                                <h4 className="text-sm text-gray-900 truncate">{conversation.name}</h4>
                                                <span className="text-xs text-gray-500">{conversation.time}</span>
                                            </div>
                                            <p className="text-xs text-gray-600 mb-1 truncate">{conversation.role}</p>
                                            <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                                        </div>
                                        {conversation.unread > 0 && (
                                            <div className="w-5 h-5 bg-[#800020] text-white text-xs rounded-full flex items-center justify-center flex-shrink-0">
                                                {conversation.unread}
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Message Thread */}
                        <div className="flex-1 flex flex-col">
                            {/* Thread Header */}
                            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Avatar className="w-10 h-10">
                                        <AvatarImage src={selectedConversation.avatar} />
                                        <AvatarFallback>{selectedConversation.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="text-gray-900">{selectedConversation.name}</h3>
                                        <p className="text-sm text-gray-500">{selectedConversation.role}</p>
                                    </div>
                                </div>
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
                                    <MoreVertical className="w-5 h-5 text-gray-500" />
                                </button>
                            </div>

                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                                {messages.map((message) => (
                                    <div
                                        key={message.id}
                                        className={`flex gap-3 ${message.isSender ? "flex-row-reverse" : ""}`}
                                    >
                                        {!message.isSender && (
                                            <Avatar className="w-8 h-8 flex-shrink-0">
                                                <AvatarImage src={selectedConversation.avatar} />
                                                <AvatarFallback>{selectedConversation.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                        )}
                                        <div className={`flex flex-col ${message.isSender ? "items-end" : "items-start"} max-w-md`}>
                                            <div
                                                className={`px-4 py-2.5 rounded-2xl ${message.isSender
                                                        ? "bg-[#800020] text-white"
                                                        : "bg-gray-100 text-gray-900"
                                                    }`}
                                            >
                                                <p className="text-sm">{message.content}</p>
                                            </div>
                                            <span className="text-xs text-gray-500 mt-1">{message.time}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Message Input */}
                            <div className="p-4 border-t border-gray-200">
                                <div className="flex items-end gap-3">
                                    <div className="flex-1 flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-3">
                                        <input
                                            type="text"
                                            placeholder="Type a message..."
                                            value={messageInput}
                                            onChange={(e) => setMessageInput(e.target.value)}
                                            className="flex-1 bg-transparent outline-none text-sm"
                                        />
                                        <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                                            <Paperclip className="w-5 h-5 text-gray-500" />
                                        </button>
                                        <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                                            <Smile className="w-5 h-5 text-gray-500" />
                                        </button>
                                    </div>
                                    <button className="px-5 py-3 bg-[#800020] text-white rounded-lg hover:bg-[#600018] transition-colors flex items-center gap-2">
                                        <Send className="w-4 h-4" />
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
