import { X, Search, Filter, Download, Mail, MapPin, Briefcase, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useState } from "react";

interface ViewApplicantsModalProps {
    isOpen: boolean;
    onClose: () => void;
    onViewCandidate: (candidate: any) => void;
    jobTitle?: string;
}

const applicants = [
    { id: 1, name: "Sarah Chen", role: "Senior Product Designer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah6", location: "San Francisco, CA", experience: "8 years", applied: "2 days ago", status: "Review", match: 95, rating: 4.8 },
    { id: 2, name: "Michael Torres", role: "Product Designer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael6", location: "Remote", experience: "5 years", applied: "3 days ago", status: "Screening", match: 88, rating: 4.5 },
    { id: 3, name: "Emily Watson", role: "UI/UX Designer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily6", location: "New York, NY", experience: "7 years", applied: "1 week ago", status: "Interview", match: 92, rating: 4.9 },
    { id: 4, name: "David Kim", role: "Product Designer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david6", location: "Austin, TX", experience: "4 years", applied: "5 days ago", status: "Review", match: 85, rating: 4.3 },
    { id: 5, name: "Jessica Martinez", role: "Visual Designer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jessica6", location: "Remote", experience: "6 years", applied: "4 days ago", status: "Review", match: 90, rating: 4.7 },
    { id: 6, name: "Ryan Patel", role: "Senior Designer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ryan6", location: "Seattle, WA", experience: "9 years", applied: "1 week ago", status: "Screening", match: 87, rating: 4.6 },
];

export function ViewApplicantsModal({ isOpen, onClose, onViewCandidate, jobTitle }: ViewApplicantsModalProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedStage, setSelectedStage] = useState("all");

    if (!isOpen) return null;

    const filteredApplicants = applicants.filter((applicant) => {
        const matchesSearch = applicant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            applicant.role.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStage = selectedStage === "all" || applicant.status === selectedStage;
        return matchesSearch && matchesStage;
    });

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-[2px]">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden">
                {/* Header */}
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h2 className="text-gray-900">Applicants for {jobTitle || "this position"}</h2>
                            <p className="text-sm text-gray-500 mt-1">{applicants.length} total applications</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <X className="w-5 h-5 text-gray-500" />
                        </button>
                    </div>

                    {/* Search & Filters */}
                    <div className="flex gap-3">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search applicants..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent"
                            />
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                            <Filter className="w-4 h-4" />
                            Filters
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                            <Download className="w-4 h-4" />
                            Export
                        </button>
                    </div>

                    {/* Stage Filters */}
                    <div className="flex gap-2 mt-4">
                        <button
                            onClick={() => setSelectedStage("all")}
                            className={`px-4 py-2 rounded-lg text-sm transition-colors ${selectedStage === "all" ? "bg-[#800020] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            All ({applicants.length})
                        </button>
                        <button
                            onClick={() => setSelectedStage("Review")}
                            className={`px-4 py-2 rounded-lg text-sm transition-colors ${selectedStage === "Review" ? "bg-[#800020] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            Review ({applicants.filter(a => a.status === "Review").length})
                        </button>
                        <button
                            onClick={() => setSelectedStage("Screening")}
                            className={`px-4 py-2 rounded-lg text-sm transition-colors ${selectedStage === "Screening" ? "bg-[#800020] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            Screening ({applicants.filter(a => a.status === "Screening").length})
                        </button>
                        <button
                            onClick={() => setSelectedStage("Interview")}
                            className={`px-4 py-2 rounded-lg text-sm transition-colors ${selectedStage === "Interview" ? "bg-[#800020] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            Interview ({applicants.filter(a => a.status === "Interview").length})
                        </button>
                    </div>
                </div>

                {/* Applicants List */}
                <div className="p-6 overflow-y-auto" style={{ maxHeight: "calc(90vh - 340px)" }}>
                    <div className="space-y-3">
                        {filteredApplicants.map((applicant) => (
                            <div
                                key={applicant.id}
                                className="bg-white rounded-xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-200 p-5"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4 flex-1">
                                        <Avatar className="w-14 h-14">
                                            <AvatarImage src={applicant.avatar} />
                                            <AvatarFallback>{applicant.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-1">
                                                <h3 className="text-gray-900">{applicant.name}</h3>
                                                <span className={`px-3 py-1 rounded-full text-xs ${applicant.status === "Interview" ? "bg-blue-100 text-blue-700" :
                                                        applicant.status === "Screening" ? "bg-yellow-100 text-yellow-700" :
                                                            "bg-purple-100 text-purple-700"
                                                    }`}>
                                                    {applicant.status}
                                                </span>
                                                <div className="flex items-center gap-1.5">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span className="text-xs text-gray-500">{applicant.match}% match</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                                    <span className="text-xs text-gray-600">{applicant.rating}</span>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 mb-2">{applicant.role}</p>
                                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                                <span className="flex items-center gap-1.5">
                                                    <MapPin className="w-4 h-4" />
                                                    {applicant.location}
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <Briefcase className="w-4 h-4" />
                                                    {applicant.experience}
                                                </span>
                                                <span>Applied {applicant.applied}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => onViewCandidate(applicant)}
                                            className="px-4 py-2 bg-[#800020] text-white rounded-lg text-sm hover:bg-[#600018] transition-colors"
                                        >
                                            View Profile
                                        </button>
                                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center gap-2">
                                            <Mail className="w-4 h-4" />
                                            Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredApplicants.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500">No applicants found matching your criteria</p>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>Showing {filteredApplicants.length} of {applicants.length} applicants</span>
                        <button className="text-[#800020] hover:text-[#600018]">
                            Load more →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}