import { Calendar as CalendarIcon, Clock, Video, MapPin, Users, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useState } from "react";

const upcomingInterviews = [
    { id: 1, candidate: "Sarah Chen", role: "Product Designer", time: "10:00 AM", duration: "1 hour", type: "Video", interviewer: "Jane Doe", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah2", date: "Today" },
    { id: 2, candidate: "Michael Torres", role: "Frontend Developer", time: "2:00 PM", duration: "45 min", type: "Video", interviewer: "Mike Johnson", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael2", date: "Today" },
    { id: 3, candidate: "Emily Watson", role: "Marketing Manager", time: "11:00 AM", duration: "1 hour", type: "On-site", interviewer: "Sarah Williams", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily2", date: "Tomorrow" },
    { id: 4, candidate: "David Kim", role: "Data Analyst", time: "3:30 PM", duration: "30 min", type: "Phone", interviewer: "Tom Chen", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david2", date: "Nov 28" },
];

interface InterviewsPageProps {
    onScheduleInterview: () => void;
}

export function InterviewsPage({ onScheduleInterview }: InterviewsPageProps) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [view, setView] = useState<"list" | "calendar">("list");

    return (
        <div className="p-8">
            <div className="max-w-[1600px] mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-gray-900 mb-2">Interviews</h1>
                        <p className="text-gray-600">Manage and schedule candidate interviews</p>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
                            <button
                                onClick={() => setView("list")}
                                className={`px-4 py-2 rounded text-sm transition-colors ${view === "list" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600"
                                    }`}
                            >
                                List View
                            </button>
                            <button
                                onClick={() => setView("calendar")}
                                className={`px-4 py-2 rounded text-sm transition-colors ${view === "calendar" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600"
                                    }`}
                            >
                                Calendar View
                            </button>
                        </div>
                        <button
                            onClick={onScheduleInterview}
                            className="flex items-center gap-2 px-5 py-2.5 bg-[#800020] text-white rounded-lg hover:bg-[#600018] transition-colors"
                        >
                            <Plus className="w-4 h-4" />
                            Schedule Interview
                        </button>
                    </div>
                </div>

                {view === "list" ? (
                    <>
                        {/* Upcoming Interviews */}
                        <div className="mb-6">
                            <h2 className="text-gray-900 mb-4">Upcoming Interviews</h2>
                            <div className="space-y-4">
                                {upcomingInterviews.map((interview) => (
                                    <div
                                        key={interview.id}
                                        className="bg-white rounded-xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-200 p-6"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4 flex-1">
                                                <Avatar className="w-14 h-14">
                                                    <AvatarImage src={interview.avatar} />
                                                    <AvatarFallback>{interview.candidate.charAt(0)}</AvatarFallback>
                                                </Avatar>
                                                <div className="flex-1">
                                                    <h3 className="text-gray-900 mb-1">{interview.candidate}</h3>
                                                    <p className="text-gray-600 mb-2">{interview.role}</p>
                                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                                        <span className="flex items-center gap-1.5">
                                                            <CalendarIcon className="w-4 h-4" />
                                                            {interview.date}
                                                        </span>
                                                        <span className="flex items-center gap-1.5">
                                                            <Clock className="w-4 h-4" />
                                                            {interview.time}
                                                        </span>
                                                        <span className="flex items-center gap-1.5">
                                                            {interview.type === "Video" ? <Video className="w-4 h-4" /> : <MapPin className="w-4 h-4" />}
                                                            {interview.type}
                                                        </span>
                                                        <span className="flex items-center gap-1.5">
                                                            <Users className="w-4 h-4" />
                                                            {interview.interviewer}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <button className="px-4 py-2 bg-[#800020] text-white rounded-lg text-sm hover:bg-[#600018] transition-colors">
                                                    Join / View
                                                </button>
                                                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                                                    Reschedule
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Past Interviews */}
                        <div>
                            <h2 className="text-gray-900 mb-4">Past Interviews</h2>
                            <div className="space-y-4">
                                <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm p-6 opacity-60">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4 flex-1">
                                            <Avatar className="w-14 h-14">
                                                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=jessica2" />
                                                <AvatarFallback>J</AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1">
                                                <h3 className="text-gray-900 mb-1">Jessica Martinez</h3>
                                                <p className="text-gray-600 mb-2">UX Researcher</p>
                                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                                    <span className="flex items-center gap-1.5">
                                                        <CalendarIcon className="w-4 h-4" />
                                                        Nov 22
                                                    </span>
                                                    <span className="flex items-center gap-1.5">
                                                        <Clock className="w-4 h-4" />
                                                        2:00 PM
                                                    </span>
                                                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Completed</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                                            View Feedback
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    /* Calendar View */
                    <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm p-6">
                        {/* Calendar Header */}
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-gray-900">November 2024</h2>
                            <div className="flex gap-2">
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
                                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
                                    <ChevronRight className="w-5 h-5 text-gray-600" />
                                </button>
                            </div>
                        </div>

                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 gap-4">
                            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                                <div key={day} className="text-center text-sm text-gray-600 py-2">
                                    {day}
                                </div>
                            ))}
                            {Array.from({ length: 35 }, (_, i) => {
                                const dayNum = i - 4;
                                const hasInterview = [25, 26, 28].includes(dayNum);
                                return (
                                    <div
                                        key={i}
                                        className={`aspect-square border border-gray-200 rounded-lg p-2 ${dayNum > 0 && dayNum <= 30 ? "bg-white hover:bg-gray-50 cursor-pointer" : "bg-gray-50"
                                            } ${hasInterview ? "border-[#800020] bg-[#F5E6E8]" : ""}`}
                                    >
                                        {dayNum > 0 && dayNum <= 30 && (
                                            <>
                                                <div className="text-sm text-gray-900 mb-1">{dayNum}</div>
                                                {hasInterview && (
                                                    <div className="text-xs text-[#800020] truncate">
                                                        {dayNum === 25 ? "2 interviews" : "1 interview"}
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
