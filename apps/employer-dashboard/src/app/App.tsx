import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { AdminSidebar } from "./components/AdminSidebar";
import { Header } from "./components/Header";
import { DashboardPage } from "./components/pages/DashboardPage";
import { JobsPage } from "./components/pages/JobsPage";
import { CandidatesPage } from "./components/pages/CandidatePage";
import { PipelinePage } from "./components/pages/PipelinePage";
import { InterviewsPage } from "./components/pages/InterviewsPage";
import { MessagesPage } from "./components/pages/MessagesPage";
import { TemplatesPage } from "./components/pages/TemplatesPage";
import { AnalyticsPage } from "./components/pages/AnalyticsPage";
import { SettingsPage } from "./components/pages/SettingsPage";
import { HelpCenterPage } from "./components/pages/HelpCenterPage";
import { SupportPage } from "./components/pages/SupportPage";
import { ProfilePage } from "./components/pages/ProfilePage";
import { ApplicantProfile } from "./components/ApplicantProfile";
import { SuperAdminDashboard } from "./components/pages/admin/SuperAdminDashboard";
import { CompaniesManagement } from "./components/pages/admin/CompaniesManagement";
import { PlatformAnalytics } from "./components/pages/admin/PlatformAnalytics";
import { SystemSettings } from "./components/pages/admin/SystemSettings";
import { CompanyDetailPage } from "./components/pages/admin/CompanyDetailPage";
import { AddJobModal } from "./components/modals/AddJobModal";
import { CandidateDetailsModal } from "./components/modals/CandidateDetailsModal";
import { ScheduleInterviewModal } from "./components/modals/ScheduleInterviewModal";
import { AddTaskModal } from "./components/modals/AddTaskModal";

export default function App() {
    const [activePage, setActivePage] = useState("admin-dashboard");
    const [isAdminMode, setIsAdminMode] = useState(true);
    const [isAddJobModalOpen, setIsAddJobModalOpen] = useState(false);
    const [isCandidateModalOpen, setIsCandidateModalOpen] = useState(false);
    const [isScheduleInterviewModalOpen, setIsScheduleInterviewModalOpen] = useState(false);
    const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
    const [selectedCandidate, setSelectedCandidate] = useState<any>(null);
    const [viewingApplicantProfile, setViewingApplicantProfile] = useState(false);
    const [selectedApplicant, setSelectedApplicant] = useState<any>(null);
    const [viewingCompanyDetail, setViewingCompanyDetail] = useState(false);
    const [selectedCompanyDetail, setSelectedCompanyDetail] = useState<any>(null);

    const handleViewCandidate = (candidate: any) => {
        setSelectedCandidate({
            ...candidate,
            email: `${candidate.name.toLowerCase().replace(" ", ".")}@example.com`,
            phone: "+1 (555) 123-4567",
            experience: `${candidate.experience} of experience in ${candidate.role}`,
            education: "Bachelor's Degree in Computer Science",
            appliedDate: candidate.applied,
            status: candidate.status,
        });
        setIsCandidateModalOpen(true);
    };

    const handleViewApplicantProfile = (applicant: any) => {
        setSelectedApplicant({
            ...applicant,
            email: applicant.email || `${applicant.name.toLowerCase().replace(" ", ".")}@example.com`,
            phone: applicant.phone || "+1 (555) 123-4567",
        });
        setViewingApplicantProfile(true);
    };

    const handleBackFromApplicantProfile = () => {
        setViewingApplicantProfile(false);
        setSelectedApplicant(null);
    };

    const handleViewCompanyDetail = (company: any) => {
        setSelectedCompanyDetail(company);
        setViewingCompanyDetail(true);
    };

    const handleBackFromCompanyDetail = () => {
        setViewingCompanyDetail(false);
        setSelectedCompanyDetail(null);
    };

    const handleToggleAdminMode = () => {
        setIsAdminMode(!isAdminMode);
        // When switching to admin mode, go to admin dashboard
        if (!isAdminMode) {
            setActivePage("admin-dashboard");
        } else {
            // When exiting admin mode, go back to regular dashboard
            setActivePage("dashboard");
        }
    };

    const handleExitAdminMode = () => {
        setIsAdminMode(false);
        setActivePage("dashboard");
    };

    const renderPage = () => {
        if (viewingApplicantProfile) {
            return <ApplicantProfile onBack={handleBackFromApplicantProfile} applicant={selectedApplicant} />;
        }

        // Admin Pages
        if (isAdminMode) {
            switch (activePage) {
                case "admin-dashboard":
                    return <SuperAdminDashboard onViewAllCompanies={() => setActivePage("admin-companies")} />;
                case "admin-companies":
                    if (viewingCompanyDetail && selectedCompanyDetail) {
                        return <CompanyDetailPage company={selectedCompanyDetail} onBack={handleBackFromCompanyDetail} />;
                    }
                    return <CompaniesManagement onViewCompany={handleViewCompanyDetail} />;
                case "admin-analytics":
                    return <PlatformAnalytics />;
                case "admin-settings":
                    return <SystemSettings />;
                case "help":
                    return <HelpCenterPage />;
                case "support":
                    return <SupportPage />;
                default:
                    return <SuperAdminDashboard onViewAllCompanies={() => setActivePage("admin-companies")} />;
            }
        }

        // Regular Employer Pages
        switch (activePage) {
            case "dashboard":
                return <DashboardPage onViewAllJobs={() => setActivePage("jobs")} />;
            case "jobs":
                return <JobsPage onAddJob={() => setIsAddJobModalOpen(true)} onViewApplicantProfile={handleViewApplicantProfile} />;
            case "candidates":
                return <CandidatesPage onViewCandidate={handleViewCandidate} />;
            case "pipeline":
                return <PipelinePage />;
            case "interviews":
                return <InterviewsPage onScheduleInterview={() => setIsScheduleInterviewModalOpen(true)} />;
            case "messages":
                return <MessagesPage />;
            case "templates":
                return <TemplatesPage />;
            case "analytics":
                return <AnalyticsPage />;
            case "settings":
                return <SettingsPage />;
            case "help":
                return <HelpCenterPage />;
            case "support":
                return <SupportPage />;
            case "profile":
                return <ProfilePage />;
            default:
                return <DashboardPage onViewAllJobs={() => setActivePage("jobs")} />;
        }
    };

    return (
        <div className="flex min-h-screen bg-white">
            {/* Sidebar */}
            {isAdminMode ? (
                <AdminSidebar
                    activePage={activePage}
                    onNavigate={setActivePage}
                />
            ) : (
                <Sidebar activePage={activePage} onNavigate={setActivePage} />
            )}

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                <Header
                    isAdminMode={isAdminMode}
                />

                <main className="flex-1 overflow-auto bg-gray-50">
                    {renderPage()}
                </main>
            </div>

            {/* Modals */}
            <AddJobModal isOpen={isAddJobModalOpen} onClose={() => setIsAddJobModalOpen(false)} />
            <CandidateDetailsModal
                isOpen={isCandidateModalOpen}
                onClose={() => {
                    setIsCandidateModalOpen(false);
                    setSelectedCandidate(null);
                }}
                candidate={selectedCandidate}
            />
            <ScheduleInterviewModal
                isOpen={isScheduleInterviewModalOpen}
                onClose={() => setIsScheduleInterviewModalOpen(false)}
            />
            <AddTaskModal isOpen={isAddTaskModalOpen} onClose={() => setIsAddTaskModalOpen(false)} />
        </div>
    );
}