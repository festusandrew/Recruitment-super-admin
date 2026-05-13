import { X, MapPin, Building2, Clock, DollarSign, Users, Briefcase, Calendar, ExternalLink, Edit, Pause, Play, XCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Progress } from "../ui/progress";

interface JobDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    onEdit: () => void;
    onViewApplicants: () => void;
    job?: {
        id: number;
        title: string;
        location: string;
        department: string;
        applicants: number;
        status: string;
        type?: string;
        salary?: string;
        experience?: string;
        description?: string;
        posted?: string;
    };
}

export function JobDetailsModal({ isOpen, onClose, onEdit, onViewApplicants, job }: JobDetailsModalProps) {
    if (!isOpen || !job) return null;

    const recentApplicants = [
        { id: 1, name: "Sarah Chen", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah5", time: "2 hours ago", match: 95 },
        { id: 2, name: "Michael Torres", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael5", time: "5 hours ago", match: 88 },
        { id: 3, name: "Emily Watson", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily5", time: "1 day ago", match: 92 },
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
                {/* Header */}
                <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 p-8">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                    >
                        <X className="w-5 h-5 text-white" />
                    </button>

                    <div className="text-white">
                        <div className="flex items-center gap-2 mb-2">
                            <span className={`px-3 py-1 rounded-full text-sm ${job.status === "Live"
                                    ? "bg-green-500/20 text-green-100 border border-green-400/30"
                                    : "bg-yellow-500/20 text-yellow-100 border border-yellow-400/30"
                                }`}>
                                {job.status}
                            </span>
                            <span className="text-blue-100 text-sm">Posted {job.posted || "3 days ago"}</span>
                        </div>
                        <h2 className="text-white mb-3">{job.title}</h2>
                        <div className="flex items-center gap-6 text-blue-100">
                            <span className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                            </span>
                            <span className="flex items-center gap-2">
                                <Building2 className="w-4 h-4" />
                                {job.department}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {job.type || "Full-time"}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-280px)]">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-4 gap-4 mb-6">
                        <div className="bg-blue-50 rounded-xl p-4 border border-blue-200/60">
                            <div className="flex items-center gap-2 mb-2">
                                <Users className="w-5 h-5 text-blue-600" />
                                <p className="text-sm text-blue-900">Total Applicants</p>
                            </div>
                            <p className="text-2xl text-blue-900">{job.applicants}</p>
                        </div>
                        <div className="bg-green-50 rounded-xl p-4 border border-green-200/60">
                            <div className="flex items-center gap-2 mb-2">
                                <Users className="w-5 h-5 text-green-600" />
                                <p className="text-sm text-green-900">In Review</p>
                            </div>
                            <p className="text-2xl text-green-900">24</p>
                        </div>
                        <div className="bg-purple-50 rounded-xl p-4 border border-purple-200/60">
                            <div className="flex items-center gap-2 mb-2">
                                <Calendar className="w-5 h-5 text-purple-600" />
                                <p className="text-sm text-purple-900">Interviewed</p>
                            </div>
                            <p className="text-2xl text-purple-900">8</p>
                        </div>
                        <div className="bg-orange-50 rounded-xl p-4 border border-orange-200/60">
                            <div className="flex items-center gap-2 mb-2">
                                <Briefcase className="w-5 h-5 text-orange-600" />
                                <p className="text-sm text-orange-900">Hired</p>
                            </div>
                            <p className="text-2xl text-orange-900">2</p>
                        </div>
                    </div>

                    {/* Job Details */}
                    <div className="grid grid-cols-2 gap-6 mb-6">
                        <div>
                            <h3 className="text-gray-900 mb-4">Job Information</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                        <DollarSign className="w-5 h-5 text-gray-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Salary Range</p>
                                        <p className="text-sm text-gray-900">{job.salary || "$120,000 - $180,000"}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                        <Briefcase className="w-5 h-5 text-gray-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Experience Level</p>
                                        <p className="text-sm text-gray-900">{job.experience || "5+ years"}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-gray-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Job Type</p>
                                        <p className="text-sm text-gray-900">{job.type || "Full-time"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-gray-900 mb-4">Pipeline Progress</h3>
                            <div className="space-y-3">
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-gray-600">Applications</span>
                                        <span className="text-sm text-gray-900">127</span>
                                    </div>
                                    <Progress value={100} className="h-2" />
                                </div>
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-gray-600">Screening</span>
                                        <span className="text-sm text-gray-900">45</span>
                                    </div>
                                    <Progress value={35} className="h-2" />
                                </div>
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-gray-600">Interview</span>
                                        <span className="text-sm text-gray-900">12</span>
                                    </div>
                                    <Progress value={9} className="h-2" />
                                </div>
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-gray-600">Offer</span>
                                        <span className="text-sm text-gray-900">3</span>
                                    </div>
                                    <Progress value={2} className="h-2" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                        <h3 className="text-gray-900 mb-3">Job Description</h3>
                        <div className="text-gray-600 text-sm leading-relaxed space-y-2">
                            <p>{job.description || "We are looking for an experienced professional to join our team. The ideal candidate will have strong technical skills and a passion for innovation."}</p>
                            <p>This role requires excellent communication skills and the ability to work collaboratively with cross-functional teams.</p>
                        </div>
                    </div>

                    {/* Recent Applicants */}
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-gray-900">Recent Applicants</h3>
                            <button
                                onClick={onViewApplicants}
                                className="text-sm text-blue-600 hover:text-blue-700"
                            >
                                View all →
                            </button>
                        </div>
                        <div className="space-y-2">
                            {recentApplicants.map((applicant) => (
                                <div key={applicant.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                    <Avatar className="w-10 h-10">
                                        <AvatarImage src={applicant.avatar} />
                                        <AvatarFallback>{applicant.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-900">{applicant.name}</p>
                                        <p className="text-xs text-gray-500">Applied {applicant.time}</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-xs text-gray-600">{applicant.match}% match</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Actions Footer */}
                <div className="p-6 border-t border-gray-200 bg-gray-50">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={onViewApplicants}
                            className="flex-1 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                        >
                            <Users className="w-4 h-4" />
                            View All Applicants
                        </button>
                        <button
                            onClick={onEdit}
                            className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-white transition-colors flex items-center gap-2"
                        >
                            <Edit className="w-4 h-4" />
                            Edit Job
                        </button>
                        <button className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-white transition-colors flex items-center gap-2">
                            {job.status === "Live" ? (
                                <>
                                    <Pause className="w-4 h-4" />
                                    Pause
                                </>
                            ) : (
                                <>
                                    <Play className="w-4 h-4" />
                                    Activate
                                </>
                            )}
                        </button>
                        <button className="px-5 py-2.5 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors flex items-center gap-2">
                            <XCircle className="w-4 h-4" />
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
