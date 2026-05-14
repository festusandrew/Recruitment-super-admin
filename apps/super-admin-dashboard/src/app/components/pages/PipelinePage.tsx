import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Plus } from "lucide-react";

const stages = [
    {
        id: "review",
        name: "Review",
        count: 12,
        color: "bg-purple-100 text-purple-700",
        candidates: [
            { id: 1, name: "Sarah Chen", role: "Product Designer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah1", match: 95 },
            { id: 2, name: "Mike Ross", role: "Frontend Dev", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike1", match: 88 },
            { id: 3, name: "Laura Palmer", role: "Marketing Manager", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=laura1", match: 92 },
        ],
    },
    {
        id: "screening",
        name: "Screening",
        count: 8,
        color: "bg-yellow-100 text-yellow-700",
        candidates: [
            { id: 4, name: "Tom Hardy", role: "Data Analyst", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=tom1", match: 85 },
            { id: 5, name: "Anna Davis", role: "UX Researcher", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=anna1", match: 90 },
        ],
    },
    {
        id: "interview",
        name: "Interview",
        count: 6,
        color: "bg-blue-100 text-blue-700",
        candidates: [
            { id: 6, name: "James Wilson", role: "Product Manager", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james1", match: 87 },
            { id: 7, name: "Emma Stone", role: "Content Writer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma1", match: 82 },
            { id: 8, name: "Chris Evans", role: "DevOps Engineer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=chris1", match: 89 },
        ],
    },
    {
        id: "offer",
        name: "Offer",
        count: 3,
        color: "bg-green-100 text-green-700",
        candidates: [
            { id: 9, name: "Olivia Brown", role: "UI Designer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=olivia1", match: 94 },
        ],
    },
    {
        id: "hired",
        name: "Hired",
        count: 15,
        color: "bg-emerald-100 text-emerald-700",
        candidates: [
            { id: 10, name: "Noah Martinez", role: "Backend Dev", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=noah1", match: 96 },
            { id: 11, name: "Sophia Lee", role: "Product Designer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sophia1", match: 93 },
        ],
    },
];

export function PipelinePage() {
    return (
        <div className="p-8">
            <div className="max-w-[1800px] mx-auto">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-gray-900 mb-2">Recruitment Pipeline</h1>
                    <p className="text-gray-600">Track candidates through your hiring stages</p>
                </div>

                {/* Kanban Board */}
                <div className="flex gap-6 overflow-x-auto pb-4">
                    {stages.map((stage) => (
                        <div key={stage.id} className="flex-shrink-0 w-80">
                            {/* Stage Header */}
                            <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm p-4 mb-4">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-gray-900">{stage.name}</h3>
                                        <span className={`px-2.5 py-1 rounded-full text-xs ${stage.color}`}>
                                            {stage.count}
                                        </span>
                                    </div>
                                    <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100 transition-colors">
                                        <Plus className="w-4 h-4 text-gray-500" />
                                    </button>
                                </div>
                            </div>

                            {/* Candidates Cards */}
                            <div className="space-y-3">
                                {stage.candidates.map((candidate) => (
                                    <div
                                        key={candidate.id}
                                        className="bg-white rounded-xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-200 p-4 cursor-move"
                                        draggable
                                    >
                                        <div className="flex items-start gap-3 mb-3">
                                            <Avatar className="w-10 h-10">
                                                <AvatarImage src={candidate.avatar} />
                                                <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-gray-900 text-sm truncate">{candidate.name}</h4>
                                                <p className="text-xs text-gray-500 truncate">{candidate.role}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-1.5">
                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                <span className="text-xs text-gray-600">{candidate.match}% match</span>
                                            </div>
                                            <button className="text-xs text-blue-600 hover:text-blue-700">
                                                View
                                            </button>
                                        </div>
                                    </div>
                                ))}

                                {/* Add New Card */}
                                <button className="w-full p-4 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center gap-2">
                                    <Plus className="w-4 h-4" />
                                    <span className="text-sm">Add candidate</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pipeline Stats */}
                <div className="mt-8 grid grid-cols-4 gap-6">
                    <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm p-6">
                        <p className="text-gray-600 mb-1">Total Candidates</p>
                        <p className="text-gray-900">44</p>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm p-6">
                        <p className="text-gray-600 mb-1">Avg. Time to Hire</p>
                        <p className="text-gray-900">21 days</p>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm p-6">
                        <p className="text-gray-600 mb-1">Conversion Rate</p>
                        <p className="text-gray-900">34%</p>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm p-6">
                        <p className="text-gray-600 mb-1">Offers Pending</p>
                        <p className="text-gray-900">3</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
