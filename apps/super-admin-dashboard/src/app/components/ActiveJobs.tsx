import { MapPin, Building2, Users, ExternalLink, Edit, Share2, MoreVertical } from "lucide-react";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { useState } from "react";
import { JobDetailsModal } from "./modals/JobDetailsModal";
import { EditJobModal } from "./modals/EditJobModal";
import { ViewApplicantsModal } from "./modals/ViewApplicantsModal";
import { ShareJobModal } from "./modals/ShareJobModal";

const jobsData = [
    {
        id: 1,
        title: "Senior Frontend Developer",
        location: "Remote",
        department: "Engineering",
        applicants: 127,
        progress: 65,
        status: "Live",
        statusColor: "bg-green-100 text-green-700 border-green-200",
        type: "Full-time",
        salary: "$120,000 - $180,000",
        experience: "5+ years",
        posted: "3 days ago",
    },
    {
        id: 2,
        title: "Product Designer",
        location: "New York, NY",
        department: "Design",
        applicants: 89,
        progress: 45,
        status: "Live",
        statusColor: "bg-green-100 text-green-700 border-green-200",
        type: "Full-time",
        salary: "$100,000 - $150,000",
        experience: "3-5 years",
        posted: "5 days ago",
    },
    {
        id: 3,
        title: "DevOps Engineer",
        location: "San Francisco, CA",
        department: "Engineering",
        applicants: 54,
        progress: 30,
        status: "Live",
        statusColor: "bg-green-100 text-green-700 border-green-200",
        type: "Full-time",
        salary: "$130,000 - $190,000",
        experience: "5+ years",
        posted: "1 week ago",
    },
    {
        id: 4,
        title: "Marketing Manager",
        location: "Remote",
        department: "Marketing",
        applicants: 43,
        progress: 20,
        status: "Paused",
        statusColor: "bg-yellow-100 text-yellow-700 border-yellow-200",
        type: "Full-time",
        salary: "$90,000 - $130,000",
        experience: "5+ years",
        posted: "2 weeks ago",
    },
    {
        id: 5,
        title: "Data Analyst",
        location: "Austin, TX",
        department: "Analytics",
        applicants: 67,
        progress: 55,
        status: "Live",
        statusColor: "bg-green-100 text-green-700 border-green-200",
        type: "Full-time",
        salary: "$80,000 - $120,000",
        experience: "3-5 years",
        posted: "4 days ago",
    },
];

interface ActiveJobsProps {
    onViewAll?: () => void;
}

export function ActiveJobs({ onViewAll }: ActiveJobsProps) {
    const [selectedJob, setSelectedJob] = useState<any>(null);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isApplicantsModalOpen, setIsApplicantsModalOpen] = useState(false);
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);

    const handleJobClick = (job: any) => {
        setSelectedJob(job);
        setIsDetailsModalOpen(true);
    };

    const handleEditJob = (job: any) => {
        setSelectedJob(job);
        setIsEditModalOpen(true);
    };

    const handleViewApplicants = (job: any) => {
        setSelectedJob(job);
        setIsApplicantsModalOpen(true);
    };

    const handleShareJob = (job: any) => {
        setSelectedJob(job);
        setIsShareModalOpen(true);
    };

    return (
        <>
            <div className="bg-white rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-200/60">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-xl text-gray-900">Active Jobs</h2>
                        <p className="text-sm text-gray-500 mt-1">
                            {jobsData.length} jobs currently open
                        </p>
                    </div>
                    <Button variant="outline" size="sm" onClick={onViewAll}>
                        View All Jobs
                    </Button>
                </div>

                <div className="overflow-x-auto -mx-6 px-6">
                    <div className="flex gap-4 pb-4 min-w-max">
                        {jobsData.map((job) => (
                            <div
                                key={job.id}
                                className="bg-gray-50 rounded-xl p-5 border border-gray-200/60 shadow-[0_2px_6px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:border-gray-300/70 transition-all duration-200 w-[320px] flex-shrink-0"
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div
                                        className="flex-1 cursor-pointer"
                                        onClick={() => handleJobClick(job)}
                                    >
                                        <h3 className="text-gray-900 mb-2 hover:text-blue-600 transition-colors">{job.title}</h3>
                                        <div className="flex flex-col gap-1.5">
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <MapPin className="w-4 h-4" />
                                                <span>{job.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <Building2 className="w-4 h-4" />
                                                <span>{job.department}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="p-1 hover:bg-gray-200 rounded-lg transition-colors">
                                        <MoreVertical className="w-4 h-4 text-gray-500" />
                                    </button>
                                </div>

                                {/* Status Badge */}
                                <Badge
                                    variant="outline"
                                    className={`mb-4 ${job.statusColor}`}
                                >
                                    {job.status}
                                </Badge>

                                {/* Applicants */}
                                <div className="mb-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <Users className="w-4 h-4" />
                                            <span>{job.applicants} applicants</span>
                                        </div>
                                        <span className="text-xs text-gray-500">{job.progress}%</span>
                                    </div>
                                    <Progress value={job.progress} className="h-2" />
                                </div>

                                {/* Quick Actions */}
                                <div className="flex gap-2 pt-3 border-t border-gray-200">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="flex-1 text-xs h-8"
                                        onClick={() => handleViewApplicants(job)}
                                    >
                                        <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                                        Pipeline
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="flex-1 text-xs h-8"
                                        onClick={() => handleEditJob(job)}
                                    >
                                        <Edit className="w-3.5 h-3.5 mr-1.5" />
                                        Edit
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="flex-1 text-xs h-8"
                                        onClick={() => handleShareJob(job)}
                                    >
                                        <Share2 className="w-3.5 h-3.5 mr-1.5" />
                                        Share
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modals */}
            <JobDetailsModal
                isOpen={isDetailsModalOpen}
                onClose={() => {
                    setIsDetailsModalOpen(false);
                    setSelectedJob(null);
                }}
                onEdit={() => {
                    setIsDetailsModalOpen(false);
                    setIsEditModalOpen(true);
                }}
                onViewApplicants={() => {
                    setIsDetailsModalOpen(false);
                    setIsApplicantsModalOpen(true);
                }}
                job={selectedJob}
            />

            <EditJobModal
                isOpen={isEditModalOpen}
                onClose={() => {
                    setIsEditModalOpen(false);
                    setSelectedJob(null);
                }}
                job={selectedJob}
            />

            <ViewApplicantsModal
                isOpen={isApplicantsModalOpen}
                onClose={() => {
                    setIsApplicantsModalOpen(false);
                    setSelectedJob(null);
                }}
                onViewCandidate={(candidate) => {
                    // This would trigger the candidate details modal
                    console.log("View candidate:", candidate);
                }}
                jobTitle={selectedJob?.title}
            />

            <ShareJobModal
                isOpen={isShareModalOpen}
                onClose={() => {
                    setIsShareModalOpen(false);
                    setSelectedJob(null);
                }}
                jobTitle={selectedJob?.title}
            />
        </>
    );
}