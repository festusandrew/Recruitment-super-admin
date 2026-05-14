import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const pipelineStages = [
    {
        id: 1,
        name: "Applied",
        count: 127,
        color: "bg-blue-50 border-blue-200",
        candidates: [
            {
                id: 1,
                name: "Sarah Johnson",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
                initials: "SJ",
            },
            {
                id: 2,
                name: "Michael Chen",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
                initials: "MC",
            },
            {
                id: 3,
                name: "Emma Davis",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
                initials: "ED",
            },
            {
                id: 4,
                name: "James Wilson",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
                initials: "JW",
            },
        ],
    },
    {
        id: 2,
        name: "Screened",
        count: 45,
        color: "bg-purple-50 border-purple-200",
        candidates: [
            {
                id: 5,
                name: "Olivia Martinez",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=olivia",
                initials: "OM",
            },
            {
                id: 6,
                name: "Liam Brown",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=liam",
                initials: "LB",
            },
            {
                id: 7,
                name: "Sophia Lee",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sophia",
                initials: "SL",
            },
        ],
    },
    {
        id: 3,
        name: "Interviewing",
        count: 18,
        color: "bg-green-50 border-green-200",
        candidates: [
            {
                id: 8,
                name: "Noah Anderson",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=noah",
                initials: "NA",
            },
            {
                id: 9,
                name: "Ava Taylor",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ava",
                initials: "AT",
            },
        ],
    },
];

export function PipelineSnapshot() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-200/60">
            <div className="mb-6">
                <h2 className="text-xl text-gray-900">Pipeline Snapshot</h2>
                <p className="text-sm text-gray-500 mt-1">
                    Quick overview of candidates across stages
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {pipelineStages.map((stage) => (
                    <div
                        key={stage.id}
                        className={`${stage.color} rounded-xl p-5 border shadow-[0_2px_6px_rgba(0,0,0,0.03)] transition-all duration-200 hover:shadow-[0_4px_10px_rgba(0,0,0,0.06)]`}
                    >
                        {/* Stage Header */}
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-gray-900">{stage.name}</h3>
                            <Badge variant="secondary" className="bg-white/80">
                                {stage.count}
                            </Badge>
                        </div>

                        {/* Candidate Avatars */}
                        <div className="flex -space-x-2 mb-3">
                            {stage.candidates.map((candidate, index) => (
                                <Avatar
                                    key={candidate.id}
                                    className="w-10 h-10 border-2 border-white hover:z-10 hover:scale-110 transition-transform cursor-pointer"
                                    style={{ zIndex: stage.candidates.length - index }}
                                >
                                    <AvatarImage src={candidate.avatar} />
                                    <AvatarFallback className="text-xs">{candidate.initials}</AvatarFallback>
                                </Avatar>
                            ))}
                            {stage.count > stage.candidates.length && (
                                <div
                                    className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs text-gray-600"
                                    style={{ zIndex: 0 }}
                                >
                                    +{stage.count - stage.candidates.length}
                                </div>
                            )}
                        </div>

                        {/* View All Link */}
                        <button className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
                            View all candidates →
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}