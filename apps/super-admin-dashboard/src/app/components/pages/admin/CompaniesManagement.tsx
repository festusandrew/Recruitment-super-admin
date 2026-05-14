import { useState } from "react";
import {
    Building2, Search, Filter, Plus, Eye, Edit, Trash2, Archive,
    MoreVertical, Users, Briefcase, DollarSign, ChevronDown
} from "lucide-react";
import { ViewCompanyModal } from "../../modals/admin/ViewCompanyModal";
import { EditCompanyModal } from "../../modals/admin/EditCompanyModal";
import { CompanyActionsMenu } from "../../modals/admin/CompanyActionsMenu";
import { DeleteCompanyModal } from "../../modals/admin/DeleteCompanyModal";

interface CompaniesManagementProps {
    onViewCompany?: (company: any) => void;
}

export function CompaniesManagement({ onViewCompany }: CompaniesManagementProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [filterPlan, setFilterPlan] = useState("All");
    const [selectedCompany, setSelectedCompany] = useState<any>(null);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddingCompany, setIsAddingCompany] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [companyToDelete, setCompanyToDelete] = useState<any>(null);

    const [companies, setCompanies] = useState([
        {
            id: 1,
            name: "TechCorp Inc.",
            logo: "TC",
            email: "contact@techcorp.com",
            plan: "Enterprise",
            users: 45,
            jobs: 23,
            candidates: 456,
            revenue: "$4,500",
            status: "Active",
            joined: "Jan 15, 2024",
        },
        {
            id: 2,
            name: "StartupXYZ",
            logo: "SX",
            email: "hello@startupxyz.com",
            plan: "Professional",
            users: 12,
            jobs: 8,
            candidates: 123,
            revenue: "$1,200",
            status: "Active",
            joined: "Feb 3, 2024",
        },
        {
            id: 3,
            name: "GlobalTech Solutions",
            logo: "GT",
            email: "info@globaltech.com",
            plan: "Enterprise",
            users: 67,
            jobs: 34,
            candidates: 789,
            revenue: "$6,700",
            status: "Active",
            joined: "Dec 22, 2023",
        },
        {
            id: 4,
            name: "InnovateLabs",
            logo: "IL",
            email: "team@innovatelabs.com",
            plan: "Starter",
            users: 5,
            jobs: 3,
            candidates: 45,
            revenue: "$299",
            status: "Trial",
            joined: "Mar 1, 2024",
        },
        {
            id: 5,
            name: "DataDriven Corp",
            logo: "DD",
            email: "contact@datadriven.com",
            plan: "Professional",
            users: 28,
            jobs: 15,
            candidates: 267,
            revenue: "$2,800",
            status: "Active",
            joined: "Jan 28, 2024",
        },
        {
            id: 6,
            name: "CloudFirst Inc.",
            logo: "CF",
            email: "support@cloudfirst.com",
            plan: "Enterprise",
            users: 52,
            jobs: 28,
            candidates: 612,
            revenue: "$5,200",
            status: "Active",
            joined: "Nov 10, 2023",
        },
    ]);

    const handleViewCompany = (company: any) => {
        if (onViewCompany) {
            onViewCompany(company);
        } else {
            setSelectedCompany(company);
            setIsViewModalOpen(true);
        }
    };

    const handleEditCompany = (company: any) => {
        setSelectedCompany(company);
        setIsEditModalOpen(true);
        setIsAddingCompany(false);
    };

    const handleAddCompany = () => {
        setSelectedCompany({
            id: Date.now(),
            name: "",
            logo: "",
            description: "",
            email: "",
            phone: "",
            fax: "",
            plan: "Starter",
            status: "Active",
            users: 0,
            jobs: 0,
            candidates: 0,
            revenue: "$0",
            joined: new Date().toLocaleDateString(),
            ownership: "Private",
            employeeCount: "1-10",
            industry: "Technology",
            address: "",
            eircode: "",
            companyNumber: "",
            vatNumber: "",
            monthlySpend: "€0.00",
            avgRating: "5.0",
            gdprCompliant: "Yes",
            gdprOfficer: "",
            dataProtectionReg: "",
            lastAudit: "",
            wrcCompliance: "Compliant",
            equalityCompliance: "Compliant",
            contactName: "",
            contactRole: "",
            contactMobile: "",
        });
        setIsEditModalOpen(true);
        setIsAddingCompany(true);
    };

    const handleSaveCompany = (updatedCompany: any) => {
        if (isAddingCompany) {
            setCompanies([updatedCompany, ...companies]);
        } else {
            setCompanies(companies.map(c =>
                c.id === updatedCompany.id ? { ...c, ...updatedCompany } : c
            ));
        }
        setIsAddingCompany(false);
    };

    const handleDeleteClick = (company: any) => {
        setCompanyToDelete(company);
        setIsDeleteModalOpen(true);
    };

    const handleConfirmDelete = () => {
        if (companyToDelete) {
            setCompanies(companies.filter(c => c.id !== companyToDelete.id));
            setCompanyToDelete(null);
        }
    };

    const handleSuspendCompany = (companyId: number) => {
        if (confirm("Are you sure you want to suspend this company's account?")) {
            setCompanies(companies.map(c =>
                c.id === companyId ? { ...c, status: "Suspended" } : c
            ));
        }
    };

    const handleSuspendCompanyWithReason = (companyId: number, reason: string, sendEmail: boolean) => {
        setCompanies(companies.map(c =>
            c.id === companyId ? { ...c, status: "Suspended" } : c
        ));
        console.log(`Company ${companyId} suspended. Reason: ${reason}, Send email: ${sendEmail}`);
        // You can add a toast notification here
    };

    const handleActivateCompany = (companyId: number) => {
        setCompanies(companies.map(c =>
            c.id === companyId ? { ...c, status: "Active" } : c
        ));
    };

    const filteredCompanies = companies.filter(company => {
        const matchesSearch =
            company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            company.email.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPlan = filterPlan === "All" || company.plan === filterPlan;
        return matchesSearch && matchesPlan;
    });

    return (
        <div className="p-6">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-xl text-gray-900 mb-1">Companies Management</h1>
                <p className="text-sm text-gray-600">Manage all registered companies on the platform</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-5">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs text-gray-500">Total Companies</p>
                            <p className="text-xl text-gray-900 mt-0.5">1,284</p>
                        </div>
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Building2 className="w-5 h-5 text-blue-600" />
                        </div>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs text-gray-500">Active Users</p>
                            <p className="text-xl text-gray-900 mt-0.5">8,942</p>
                        </div>
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <Users className="w-5 h-5 text-green-600" />
                        </div>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs text-gray-500">Total Jobs</p>
                            <p className="text-xl text-gray-900 mt-0.5">3,456</p>
                        </div>
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                            <Briefcase className="w-5 h-5 text-purple-600" />
                        </div>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs text-gray-500">Total Revenue</p>
                            <p className="text-xl text-gray-900 mt-0.5">$284K</p>
                        </div>
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                            <DollarSign className="w-5 h-5 text-purple-600" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 flex-1">
                    {/* Search */}
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search companies..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent"
                        />
                    </div>

                    {/* Filter by Plan */}
                    <div className="relative">
                        <select
                            value={filterPlan}
                            onChange={(e) => setFilterPlan(e.target.value)}
                            className="pl-3 pr-9 py-2 text-sm border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent bg-white"
                        >
                            <option value="All">All Plans</option>
                            <option value="Enterprise">Enterprise</option>
                            <option value="Professional">Professional</option>
                            <option value="Starter">Starter</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
                    </div>
                </div>

                {/* Add Company Button */}
                <button className="flex items-center gap-2 px-4 py-2 bg-[#7C3AED] text-white text-sm rounded-lg hover:bg-[#6B46C1] transition-colors" onClick={handleAddCompany}>
                    <Plus className="w-4 h-4" />
                    Add Company
                </button>
            </div>

            {/* Companies Table */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-4 py-2.5 text-left text-xs text-gray-500 uppercase tracking-wider">
                                    Company
                                </th>
                                <th className="px-4 py-2.5 text-left text-xs text-gray-500 uppercase tracking-wider">
                                    Plan
                                </th>
                                <th className="px-4 py-2.5 text-left text-xs text-gray-500 uppercase tracking-wider">
                                    Users
                                </th>
                                <th className="px-4 py-2.5 text-left text-xs text-gray-500 uppercase tracking-wider">
                                    Jobs
                                </th>
                                <th className="px-4 py-2.5 text-left text-xs text-gray-500 uppercase tracking-wider">
                                    Candidates
                                </th>
                                <th className="px-4 py-2.5 text-left text-xs text-gray-500 uppercase tracking-wider">
                                    Revenue
                                </th>
                                <th className="px-4 py-2.5 text-left text-xs text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-4 py-2.5 text-left text-xs text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {filteredCompanies.map((company) => (
                                <tr key={company.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-3 whitespace-nowrap">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-9 h-9 bg-gradient-to-br from-[#7C3AED] to-[#9333EA] rounded-lg flex items-center justify-center">
                                                <span className="text-white text-xs">{company.logo}</span>
                                            </div>
                                            <div>
                                                <button onClick={() => handleViewCompany(company)} className="text-sm text-[#7C3AED] hover:underline text-left">{company.name}</button>
                                                <p className="text-xs text-gray-500">{company.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap">
                                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs ${company.plan === 'Enterprise'
                                                ? 'bg-purple-100 text-purple-700'
                                                : company.plan === 'Professional'
                                                    ? 'bg-blue-100 text-blue-700'
                                                    : 'bg-gray-100 text-gray-700'
                                            }`}>
                                            {company.plan}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                                        {company.users}
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                                        {company.jobs}
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                                        {company.candidates}
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                                        {company.revenue}
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap">
                                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs ${company.status === 'Active'
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-yellow-100 text-yellow-700'
                                            }`}>
                                            {company.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap">
                                        <div className="flex items-center gap-1.5">
                                            <button
                                                className="p-1 hover:bg-gray-100 rounded"
                                                title="View Details"
                                                onClick={() => handleViewCompany(company)}
                                            >
                                                <Eye className="w-4 h-4 text-gray-600" />
                                            </button>
                                            <button
                                                className="p-1 hover:bg-gray-100 rounded"
                                                title="Edit"
                                                onClick={() => handleEditCompany(company)}
                                            >
                                                <Edit className="w-4 h-4 text-gray-600" />
                                            </button>
                                            <button
                                                className="p-1 hover:bg-amber-100 rounded"
                                                title="Archive"
                                                onClick={() => handleDeleteClick(company)}
                                            >
                                                <Archive className="w-4 h-4 text-amber-600" />
                                            </button>
                                            <CompanyActionsMenu
                                                company={company}
                                                onSuspend={handleSuspendCompany}
                                                onActivate={handleActivateCompany}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modals */}
            <ViewCompanyModal
                isOpen={isViewModalOpen}
                onClose={() => setIsViewModalOpen(false)}
                company={selectedCompany}
                onEdit={handleEditCompany}
                onSuspend={handleSuspendCompanyWithReason}
            />
            <EditCompanyModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                company={selectedCompany}
                onSave={handleSaveCompany}
            />
            <DeleteCompanyModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                company={companyToDelete}
                onConfirm={handleConfirmDelete}
            />
        </div>
    );
}