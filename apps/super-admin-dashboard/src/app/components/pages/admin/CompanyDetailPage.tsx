import { useState } from "react";
import {
    ArrowLeft,
    Building2,
    MapPin,
    Phone,
    Globe,
    Mail,
    Users,
    Briefcase,
    Star,
    Shield,
    FileText,
    UserCheck,
    Clock,
    Calendar,
    Edit,
    MoreHorizontal,
    ExternalLink,
    CheckCircle,
    AlertTriangle,
    XCircle,
    TrendingUp,
    CreditCard,
    MessageSquare,
    ClipboardList,
} from "lucide-react";

interface CompanyDetailPageProps {
    company: any;
    onBack: () => void;
}

const tabs = [
    "Overview",
    "Departments",
    "Contracts & Rates",
    "Compliance",
    "Jobs",
    "Financial",
    "Ratings & Feedback",
    "Notes",
];

// Extended company data with UK/EU/IE regulatory info
const companyDetailData: Record<number, any> = {
    1: {
        description:
            "TechCorp Inc. is a leading enterprise software company headquartered in Dublin, specialising in AI-driven recruitment solutions. They employ over 500 staff across Ireland and the UK.",
        address: "42 Grand Canal Dock, Dublin 2, D02 TK83",
        eircode: "D02 TK83",
        phone: "+353 1 555 1200",
        fax: "+353 1 555 1201",
        email: "hr@techcorp.ie",
        website: "www.techcorp.ie",
        established: "2015",
        ownership: "Private (VC-backed)",
        employeeCount: "500+",
        industry: "Technology / SaaS",
        companyNumber: "IE 587234",
        vatNumber: "IE 9876543A",
        activeJobs: 23,
        avgRating: 4.8,
        monthlySpend: "€48,500.00",
        regulatory: {
            gdprCompliant: "Yes",
            gdprOfficer: "Jane Murphy",
            dataProtectionReg: "DPC-2024-00456",
            lastAudit: "2025-11-20",
            icoRegistration: "N/A (Ireland)",
            workplaceRelationsCompliant: "Compliant",
            equalityAct: "Compliant",
            safeTPass: "N/A",
        },
        primaryContact: {
            name: "Siobhán O'Reilly",
            role: "Talent Acquisition Director",
            phone: "+353 1 555 1210",
            email: "siobhan.oreilly@techcorp.ie",
            mobile: "+353 87 234 5678",
        },
        keyContacts: [
            {
                name: "Dr. Paul Connolly",
                role: "CTO",
                department: "Engineering",
                phone: "+353 1 555 1220",
                email: "paul.connolly@techcorp.ie",
                tag: "Secondary",
            },
            {
                name: "Marie Kavanagh",
                role: "Finance Director",
                department: "Finance",
                phone: "+353 1 555 1230",
                email: "marie.kavanagh@techcorp.ie",
                tag: "Finance",
            },
            {
                name: "Catherine Doyle",
                role: "HR Manager",
                department: "People Ops",
                phone: "+353 1 555 1240",
                email: "catherine.doyle@techcorp.ie",
                tag: "HR",
            },
            {
                name: "Eamon Walsh",
                role: "CEO / Managing Director",
                department: "Executive",
                phone: "+353 1 555 1201",
                email: "eamon.walsh@techcorp.ie",
                tag: "Escalation",
            },
        ],
    },
    2: {
        description:
            "StartupXYZ is a fast-growing fintech startup based in Cork, building innovative payment solutions for the European market.",
        address: "15 Patrick Street, Cork, T12 X8N7",
        eircode: "T12 X8N7",
        phone: "+353 21 555 3400",
        fax: "—",
        email: "people@startupxyz.ie",
        website: "www.startupxyz.ie",
        established: "2021",
        ownership: "Private (Seed stage)",
        employeeCount: "45",
        industry: "Fintech",
        companyNumber: "IE 672345",
        vatNumber: "IE 1234567B",
        activeJobs: 8,
        avgRating: 4.5,
        monthlySpend: "€12,800.00",
        regulatory: {
            gdprCompliant: "Yes",
            gdprOfficer: "Tom Barry",
            dataProtectionReg: "DPC-2023-00891",
            lastAudit: "2025-08-15",
            icoRegistration: "N/A (Ireland)",
            workplaceRelationsCompliant: "Compliant",
            equalityAct: "Compliant",
            safeTPass: "N/A",
        },
        primaryContact: {
            name: "Aoife Murphy",
            role: "Head of People",
            phone: "+353 21 555 3410",
            email: "aoife.murphy@startupxyz.ie",
            mobile: "+353 85 678 1234",
        },
        keyContacts: [
            {
                name: "Liam Brennan",
                role: "Co-Founder & CEO",
                department: "Executive",
                phone: "+353 21 555 3401",
                email: "liam@startupxyz.ie",
                tag: "Escalation",
            },
            {
                name: "Sarah Chen",
                role: "VP Engineering",
                department: "Engineering",
                phone: "+353 21 555 3420",
                email: "sarah.chen@startupxyz.ie",
                tag: "Technical",
            },
        ],
    },
};

// Default detail data for companies not explicitly mapped
const defaultDetailData = {
    description:
        "A registered company on the MployUs recruitment platform, actively using our services for talent acquisition across the EU market.",
    address: "1 Harcourt Street, Dublin 2, D02 Y873",
    eircode: "D02 Y873",
    phone: "+353 1 555 0000",
    fax: "—",
    email: "info@company.ie",
    website: "www.company.ie",
    established: "2018",
    ownership: "Private",
    employeeCount: "100+",
    industry: "Technology",
    companyNumber: "IE 123456",
    vatNumber: "IE 5555555A",
    activeJobs: 10,
    avgRating: 4.2,
    monthlySpend: "€22,000.00",
    regulatory: {
        gdprCompliant: "Yes",
        gdprOfficer: "Data Protection Officer",
        dataProtectionReg: "DPC-2024-XXXXX",
        lastAudit: "2025-06-01",
        icoRegistration: "N/A",
        workplaceRelationsCompliant: "Compliant",
        equalityAct: "Compliant",
        safeTPass: "N/A",
    },
    primaryContact: {
        name: "John Doe",
        role: "HR Director",
        phone: "+353 1 555 0010",
        email: "john.doe@company.ie",
        mobile: "+353 86 000 0000",
    },
    keyContacts: [
        {
            name: "Jane Smith",
            role: "CEO",
            department: "Executive",
            phone: "+353 1 555 0001",
            email: "jane.smith@company.ie",
            tag: "Escalation",
        },
    ],
};

export function CompanyDetailPage({ company, onBack }: CompanyDetailPageProps) {
    const [activeTab, setActiveTab] = useState("Overview");

    const detail = companyDetailData[company.id] || {
        ...defaultDetailData,
        email: company.email,
        activeJobs: company.jobs,
    };

    const statusColor =
        company.status === "Active"
            ? "bg-green-100 text-green-700"
            : company.status === "Suspended"
                ? "bg-red-100 text-red-700"
                : "bg-yellow-100 text-yellow-700";

    return (
        <div className="p-8">
            {/* Back Button */}
            <button
                onClick={onBack}
                className="flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-6 transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back to Companies</span>
            </button>

            {/* Company Header Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-5 flex-wrap lg:flex-nowrap">
                    {/* Logo */}
                    <div className="w-20 h-20 bg-gradient-to-br from-[#7C3AED]/10 to-[#7C3AED]/5 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-10 h-10 text-[#7C3AED]" />
                    </div>

                    {/* Company Info */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1 flex-wrap">
                            <h2 className="text-xl text-gray-900">{company.name}</h2>
                            <span className="bg-gray-100 text-gray-400 text-xs px-2 py-0.5 rounded">
                                CL-{String(company.id).padStart(3, "0")}
                            </span>
                            <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs ${statusColor}`}
                            >
                                {company.status}
                            </span>
                        </div>
                        <p className="text-sm text-gray-500 mb-3 max-w-xl leading-relaxed">
                            {detail.description}
                        </p>
                        <div className="flex items-center gap-5 flex-wrap text-sm text-gray-500">
                            <span className="flex items-center gap-1.5">
                                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                                {detail.address}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Phone className="w-3.5 h-3.5 text-gray-400" />
                                {detail.phone}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Globe className="w-3.5 h-3.5 text-gray-400" />
                                {detail.website}
                            </span>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="flex gap-3 flex-shrink-0">
                        <div className="bg-gray-50 rounded-xl px-5 py-3 text-center min-w-[110px]">
                            <p className="text-lg text-gray-900">{detail.activeJobs}</p>
                            <p className="text-[10px] text-gray-400 mt-0.5">Active Jobs</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl px-5 py-3 text-center min-w-[110px]">
                            <p className="text-lg text-amber-500">{detail.avgRating}</p>
                            <p className="text-[10px] text-gray-400 mt-0.5">Avg Rating</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl px-5 py-3 text-center min-w-[110px]">
                            <p className="text-lg text-emerald-500">
                                {detail.monthlySpend}
                            </p>
                            <p className="text-[10px] text-gray-400 mt-0.5">Monthly Spend</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="bg-white border border-gray-200 rounded-xl mb-6">
                <div className="flex items-center gap-1 overflow-x-auto px-5 border-b border-gray-200">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-3 text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === tab
                                    ? "border-emerald-500 text-emerald-600"
                                    : "border-transparent text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            {activeTab === "Overview" && (
                <OverviewTab company={company} detail={detail} />
            )}
            {activeTab === "Departments" && <DepartmentsTab />}
            {activeTab === "Contracts & Rates" && <ContractsTab />}
            {activeTab === "Compliance" && <ComplianceTab detail={detail} />}
            {activeTab === "Jobs" && <JobsTab company={company} />}
            {activeTab === "Financial" && <FinancialTab />}
            {activeTab === "Ratings & Feedback" && <RatingsTab />}
            {activeTab === "Notes" && <NotesTab />}
        </div>
    );
}

function OverviewTab({ company, detail }: { company: any; detail: any }) {
    return (
        <div className="space-y-6">
            {/* Two column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Company Details */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-[#7C3AED]" />
                        <h3 className="text-sm text-gray-900">Company Details</h3>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                        <DetailRow label="Full Address" value={detail.address} />
                        <DetailRow label="Eircode / Postcode" value={detail.eircode} />
                        <DetailRow label="Phone" value={detail.phone} />
                        <DetailRow label="Fax" value={detail.fax} />
                        <DetailRow label="Email" value={detail.email} />
                        <DetailRow label="Website" value={detail.website} />
                        <DetailRow label="Established" value={detail.established} />
                        <DetailRow label="Ownership" value={detail.ownership} />
                        <DetailRow label="Employee Count" value={detail.employeeCount} />
                        <DetailRow label="Industry" value={detail.industry} />
                        <DetailRow label="Company Number" value={detail.companyNumber} />
                        <DetailRow label="VAT Number" value={detail.vatNumber} />
                    </div>
                </div>

                {/* Regulatory & Compliance + Primary Contact */}
                <div className="space-y-6">
                    {/* Regulatory */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-emerald-500" />
                            <h3 className="text-sm text-gray-900">
                                Regulatory & Compliance
                            </h3>
                        </div>
                        <div className="bg-emerald-50 rounded-xl p-4 space-y-3">
                            <DetailRow
                                label="GDPR Compliant"
                                value={detail.regulatory.gdprCompliant}
                                green
                            />
                            <DetailRow
                                label="Data Protection Officer"
                                value={detail.regulatory.gdprOfficer}
                                green
                            />
                            <DetailRow
                                label="DPC Registration"
                                value={detail.regulatory.dataProtectionReg}
                                green
                            />
                            <DetailRow
                                label="Last Compliance Audit"
                                value={detail.regulatory.lastAudit}
                                green
                            />
                            <DetailRow
                                label="WRC Compliance"
                                value={detail.regulatory.workplaceRelationsCompliant}
                                green
                            />
                            <DetailRow
                                label="Employment Equality"
                                value={detail.regulatory.equalityAct}
                                green
                            />
                        </div>
                    </div>

                    {/* Primary Contact */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <UserCheck className="w-4 h-4 text-[#7C3AED]" />
                            <h3 className="text-sm text-gray-900">Primary Contact</h3>
                        </div>
                        <div className="bg-purple-50 rounded-xl p-4 space-y-2">
                            <p className="text-sm text-[#5B21B6]">
                                {detail.primaryContact.name}
                            </p>
                            <p className="text-xs text-[#7C3AED]">
                                {detail.primaryContact.role}
                            </p>
                            <div className="flex items-center gap-1.5 text-xs text-[#6D28D9]">
                                <Phone className="w-3 h-3" />
                                {detail.primaryContact.phone}
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-[#6D28D9]">
                                <Mail className="w-3 h-3" />
                                {detail.primaryContact.email}
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-[#6D28D9]">
                                <Phone className="w-3 h-3" />
                                {detail.primaryContact.mobile} (Mobile)
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Contacts */}
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <h3 className="text-sm text-gray-900">Key Contacts</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {detail.keyContacts.map((contact: any, i: number) => (
                        <div
                            key={i}
                            className="border border-gray-200 rounded-xl p-4 space-y-1"
                        >
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-900">{contact.name}</p>
                                <span className="bg-gray-100 text-gray-400 text-[10px] px-2 py-0.5 rounded capitalize">
                                    {contact.tag.toLowerCase()}
                                </span>
                            </div>
                            <p className="text-xs text-gray-500">{contact.role}</p>
                            <div className="flex items-center gap-4 pt-1">
                                <span className="flex items-center gap-1 text-[11px] text-gray-400">
                                    <Phone className="w-3 h-3" />
                                    {contact.phone}
                                </span>
                                <span className="flex items-center gap-1 text-[11px] text-gray-400">
                                    <Mail className="w-3 h-3" />
                                    {contact.email}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function DetailRow({
    label,
    value,
    green = false,
}: {
    label: string;
    value: string;
    green?: boolean;
}) {
    return (
        <div className="flex items-start justify-between">
            <span
                className={`text-xs ${green ? "text-emerald-700/70" : "text-gray-400"}`}
            >
                {label}
            </span>
            <span
                className={`text-xs text-right ${green ? "text-emerald-800" : "text-gray-900"
                    }`}
            >
                {value}
            </span>
        </div>
    );
}

function DepartmentsTab() {
    const departments = [
        {
            name: "Engineering",
            headCount: 120,
            openRoles: 8,
            manager: "Paul Connolly",
            budget: "€85,000/mo",
        },
        {
            name: "Product",
            headCount: 35,
            openRoles: 4,
            manager: "Sarah Chen",
            budget: "€42,000/mo",
        },
        {
            name: "Sales & Marketing",
            headCount: 65,
            openRoles: 6,
            manager: "Declan Murphy",
            budget: "€55,000/mo",
        },
        {
            name: "People & Culture",
            headCount: 18,
            openRoles: 2,
            manager: "Siobhán O'Reilly",
            budget: "€22,000/mo",
        },
        {
            name: "Finance & Operations",
            headCount: 25,
            openRoles: 1,
            manager: "Marie Kavanagh",
            budget: "€18,000/mo",
        },
        {
            name: "Customer Success",
            headCount: 40,
            openRoles: 3,
            manager: "Aidan Byrne",
            budget: "€35,000/mo",
        },
    ];

    return (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-sm text-gray-900">Departments Overview</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                                Department
                            </th>
                            <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                                Head Count
                            </th>
                            <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                                Open Roles
                            </th>
                            <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                                Department Head
                            </th>
                            <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                                Recruitment Budget
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {departments.map((dept) => (
                            <tr key={dept.name} className="hover:bg-gray-50">
                                <td className="px-6 py-3.5 text-sm text-gray-900">
                                    {dept.name}
                                </td>
                                <td className="px-6 py-3.5 text-sm text-gray-600">
                                    {dept.headCount}
                                </td>
                                <td className="px-6 py-3.5">
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-purple-100 text-purple-700">
                                        {dept.openRoles}
                                    </span>
                                </td>
                                <td className="px-6 py-3.5 text-sm text-gray-600">
                                    {dept.manager}
                                </td>
                                <td className="px-6 py-3.5 text-sm text-gray-900">
                                    {dept.budget}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function ContractsTab() {
    return (
        <div className="space-y-6">
            {/* Active Contract */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm text-gray-900">Active Contract</h3>
                    <span className="bg-green-100 text-green-700 text-xs px-2.5 py-0.5 rounded-full">
                        Active
                    </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                        <DetailRow label="Contract ID" value="CTR-2024-0456" />
                        <DetailRow label="Plan" value="Enterprise" />
                        <DetailRow label="Start Date" value="01 Jan 2024" />
                        <DetailRow label="End Date" value="31 Dec 2026" />
                        <DetailRow label="Auto-Renew" value="Yes" />
                    </div>
                    <div className="space-y-3">
                        <DetailRow label="Monthly Fee" value="€4,500.00" />
                        <DetailRow label="Per-Hire Fee" value="€250.00" />
                        <DetailRow label="Annual Value" value="€54,000.00" />
                        <DetailRow label="Payment Terms" value="Net 30" />
                        <DetailRow label="Currency" value="EUR (€)" />
                    </div>
                    <div className="space-y-3">
                        <DetailRow label="Job Post Limit" value="Unlimited" />
                        <DetailRow label="User Seats" value="50" />
                        <DetailRow label="API Access" value="Yes" />
                        <DetailRow label="Dedicated CSM" value="Yes" />
                        <DetailRow label="SLA Level" value="Premium (4hr)" />
                    </div>
                </div>
            </div>

            {/* Rate Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-sm text-gray-900 mb-4">Rate Card</h3>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-2.5 text-left text-xs text-gray-500 uppercase">
                                    Service
                                </th>
                                <th className="px-4 py-2.5 text-left text-xs text-gray-500 uppercase">
                                    Standard Rate
                                </th>
                                <th className="px-4 py-2.5 text-left text-xs text-gray-500 uppercase">
                                    Agreed Rate
                                </th>
                                <th className="px-4 py-2.5 text-left text-xs text-gray-500 uppercase">
                                    Discount
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                {
                                    service: "Featured Job Listing",
                                    standard: "€150.00",
                                    agreed: "€120.00",
                                    discount: "20%",
                                },
                                {
                                    service: "CV Database Access",
                                    standard: "€500.00/mo",
                                    agreed: "€400.00/mo",
                                    discount: "20%",
                                },
                                {
                                    service: "Recruitment Campaign",
                                    standard: "€2,500.00",
                                    agreed: "€2,000.00",
                                    discount: "20%",
                                },
                                {
                                    service: "Background Check (Basic)",
                                    standard: "€45.00",
                                    agreed: "€35.00",
                                    discount: "22%",
                                },
                                {
                                    service: "Background Check (Enhanced)",
                                    standard: "€95.00",
                                    agreed: "€75.00",
                                    discount: "21%",
                                },
                            ].map((item) => (
                                <tr key={item.service} className="hover:bg-gray-50">
                                    <td className="px-4 py-2.5 text-sm text-gray-900">
                                        {item.service}
                                    </td>
                                    <td className="px-4 py-2.5 text-sm text-gray-500 line-through">
                                        {item.standard}
                                    </td>
                                    <td className="px-4 py-2.5 text-sm text-gray-900">
                                        {item.agreed}
                                    </td>
                                    <td className="px-4 py-2.5">
                                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                                            {item.discount}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function ComplianceTab({ detail }: { detail: any }) {
    const complianceItems = [
        {
            category: "Data Protection (GDPR)",
            items: [
                {
                    label: "GDPR Registration",
                    status: "compliant",
                    detail: detail.regulatory.dataProtectionReg,
                },
                {
                    label: "Data Processing Agreement",
                    status: "compliant",
                    detail: "Signed 01 Jan 2024",
                },
                {
                    label: "Data Protection Officer",
                    status: "compliant",
                    detail: detail.regulatory.gdprOfficer,
                },
                {
                    label: "Privacy Impact Assessment",
                    status: "compliant",
                    detail: "Completed 15 Mar 2025",
                },
                {
                    label: "Data Breach Protocol",
                    status: "compliant",
                    detail: "72hr notification agreed",
                },
            ],
        },
        {
            category: "Employment Law (IE/UK/EU)",
            items: [
                {
                    label: "WRC Compliance",
                    status: "compliant",
                    detail: "No active disputes",
                },
                {
                    label: "Employment Equality Acts",
                    status: "compliant",
                    detail: "Policy reviewed annually",
                },
                {
                    label: "Working Time Regulations",
                    status: "compliant",
                    detail: "EU WTD compliant",
                },
                {
                    label: "Right to Work Verification",
                    status: "compliant",
                    detail: "Automated checks enabled",
                },
                {
                    label: "Agency Workers Directive",
                    status: "warning",
                    detail: "Review due 01 Apr 2026",
                },
            ],
        },
        {
            category: "Financial & Tax",
            items: [
                {
                    label: "Revenue / HMRC Compliant",
                    status: "compliant",
                    detail: "Tax clearance valid",
                },
                {
                    label: "VAT Registered",
                    status: "compliant",
                    detail: detail.vatNumber || "IE 9876543A",
                },
                {
                    label: "Anti-Money Laundering",
                    status: "compliant",
                    detail: "KYC completed",
                },
                {
                    label: "Insurance (Employer's Liability)",
                    status: "compliant",
                    detail: "€13M cover, expires Dec 2026",
                },
            ],
        },
    ];

    const statusIcon = (status: string) => {
        if (status === "compliant")
            return <CheckCircle className="w-4 h-4 text-emerald-500" />;
        if (status === "warning")
            return <AlertTriangle className="w-4 h-4 text-amber-500" />;
        return <XCircle className="w-4 h-4 text-red-500" />;
    };

    return (
        <div className="space-y-6">
            {complianceItems.map((section) => (
                <div
                    key={section.category}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden"
                >
                    <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                        <h3 className="text-sm text-gray-900">{section.category}</h3>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {section.items.map((item) => (
                            <div
                                key={item.label}
                                className="flex items-center justify-between px-6 py-3"
                            >
                                <div className="flex items-center gap-3">
                                    {statusIcon(item.status)}
                                    <span className="text-sm text-gray-700">{item.label}</span>
                                </div>
                                <span className="text-sm text-gray-500">{item.detail}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

function JobsTab({ company }: { company: any }) {
    const jobs = [
        {
            title: "Senior Software Engineer",
            department: "Engineering",
            location: "Dublin, Ireland",
            type: "Full-time",
            salary: "€85,000 - €110,000",
            applicants: 34,
            posted: "5 days ago",
            status: "Active",
        },
        {
            title: "Product Manager",
            department: "Product",
            location: "Remote (EU)",
            type: "Full-time",
            salary: "€75,000 - €95,000",
            applicants: 28,
            posted: "1 week ago",
            status: "Active",
        },
        {
            title: "UX Designer",
            department: "Product",
            location: "Cork, Ireland",
            type: "Full-time",
            salary: "€55,000 - €70,000",
            applicants: 45,
            posted: "3 days ago",
            status: "Active",
        },
        {
            title: "DevOps Engineer",
            department: "Engineering",
            location: "Dublin, Ireland",
            type: "Contract",
            salary: "€500 - €650/day",
            applicants: 12,
            posted: "2 weeks ago",
            status: "Active",
        },
        {
            title: "Sales Development Rep",
            department: "Sales",
            location: "London, UK",
            type: "Full-time",
            salary: "£35,000 - £45,000 + OTE",
            applicants: 56,
            posted: "1 day ago",
            status: "Active",
        },
    ];

    return (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <h3 className="text-sm text-gray-900">
                    Active Jobs ({jobs.length})
                </h3>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                                Position
                            </th>
                            <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                                Location
                            </th>
                            <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                                Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                                Salary
                            </th>
                            <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                                Applicants
                            </th>
                            <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                                Posted
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {jobs.map((job) => (
                            <tr key={job.title} className="hover:bg-gray-50">
                                <td className="px-6 py-3.5">
                                    <p className="text-sm text-gray-900">{job.title}</p>
                                    <p className="text-xs text-gray-500">{job.department}</p>
                                </td>
                                <td className="px-6 py-3.5 text-sm text-gray-600">
                                    {job.location}
                                </td>
                                <td className="px-6 py-3.5">
                                    <span
                                        className={`text-xs px-2 py-0.5 rounded-full ${job.type === "Full-time"
                                                ? "bg-blue-100 text-blue-700"
                                                : "bg-orange-100 text-orange-700"
                                            }`}
                                    >
                                        {job.type}
                                    </span>
                                </td>
                                <td className="px-6 py-3.5 text-sm text-gray-900">
                                    {job.salary}
                                </td>
                                <td className="px-6 py-3.5 text-sm text-gray-600">
                                    {job.applicants}
                                </td>
                                <td className="px-6 py-3.5 text-sm text-gray-500">
                                    {job.posted}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function FinancialTab() {
    const invoices = [
        {
            id: "INV-2026-0024",
            date: "01 Feb 2026",
            amount: "€4,500.00",
            status: "Paid",
            method: "Direct Debit",
        },
        {
            id: "INV-2026-0012",
            date: "01 Jan 2026",
            amount: "€4,750.00",
            status: "Paid",
            method: "Direct Debit",
        },
        {
            id: "INV-2025-0144",
            date: "01 Dec 2025",
            amount: "€4,500.00",
            status: "Paid",
            method: "Direct Debit",
        },
        {
            id: "INV-2025-0132",
            date: "01 Nov 2025",
            amount: "€5,200.00",
            status: "Paid",
            method: "Direct Debit",
        },
        {
            id: "INV-2025-0120",
            date: "01 Oct 2025",
            amount: "€4,500.00",
            status: "Paid",
            method: "Bank Transfer",
        },
    ];

    return (
        <div className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                    {
                        label: "Total Billed (YTD)",
                        value: "€48,500.00",
                        icon: CreditCard,
                        color: "text-[#7C3AED]",
                        bg: "bg-purple-50",
                    },
                    {
                        label: "Outstanding",
                        value: "€0.00",
                        icon: Clock,
                        color: "text-emerald-600",
                        bg: "bg-emerald-50",
                    },
                    {
                        label: "Avg Monthly",
                        value: "€4,650.00",
                        icon: TrendingUp,
                        color: "text-blue-600",
                        bg: "bg-blue-50",
                    },
                    {
                        label: "Credit Note",
                        value: "€0.00",
                        icon: FileText,
                        color: "text-gray-600",
                        bg: "bg-gray-50",
                    },
                ].map((card) => (
                    <div
                        key={card.label}
                        className="bg-white border border-gray-200 rounded-xl p-5"
                    >
                        <div className="flex items-center gap-3">
                            <div
                                className={`w-10 h-10 ${card.bg} rounded-lg flex items-center justify-center`}
                            >
                                <card.icon className={`w-5 h-5 ${card.color}`} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">{card.label}</p>
                                <p className="text-lg text-gray-900">{card.value}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Invoices Table */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100">
                    <h3 className="text-sm text-gray-900">Recent Invoices</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                                    Invoice
                                </th>
                                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                                    Date
                                </th>
                                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                                    Amount
                                </th>
                                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">
                                    Payment Method
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {invoices.map((inv) => (
                                <tr key={inv.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-3.5 text-sm text-[#7C3AED]">
                                        {inv.id}
                                    </td>
                                    <td className="px-6 py-3.5 text-sm text-gray-600">
                                        {inv.date}
                                    </td>
                                    <td className="px-6 py-3.5 text-sm text-gray-900">
                                        {inv.amount}
                                    </td>
                                    <td className="px-6 py-3.5">
                                        <span className="text-xs bg-green-100 text-green-700 px-2.5 py-0.5 rounded-full">
                                            {inv.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-3.5 text-sm text-gray-500">
                                        {inv.method}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function RatingsTab() {
    const reviews = [
        {
            reviewer: "Candidate – Aoife Brennan",
            rating: 5,
            comment:
                "Excellent hiring process, very professional and responsive HR team. Received feedback within 48 hours.",
            date: "12 Feb 2026",
        },
        {
            reviewer: "Candidate – Mark O'Sullivan",
            rating: 4,
            comment:
                "Good experience overall. The interview process was well-structured, though timelines could be improved.",
            date: "28 Jan 2026",
        },
        {
            reviewer: "Agency – RecruitPro Ireland",
            rating: 5,
            comment:
                "Excellent partner to work with. Clear role briefs, timely payments, and strong collaboration.",
            date: "15 Jan 2026",
        },
        {
            reviewer: "Candidate – Sarah Murphy",
            rating: 4,
            comment:
                "Well-organised assessment centre. Office environment was welcoming. Would recommend as an employer.",
            date: "02 Jan 2026",
        },
    ];

    return (
        <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-center gap-8">
                <div className="text-center">
                    <p className="text-4xl text-amber-500">4.8</p>
                    <div className="flex items-center gap-0.5 mt-1 justify-center">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Star
                                key={s}
                                className={`w-4 h-4 ${s <= 4 ? "text-amber-400 fill-amber-400" : "text-amber-400 fill-amber-400 opacity-60"
                                    }`}
                            />
                        ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                        Based on {reviews.length} reviews
                    </p>
                </div>
                <div className="flex-1 space-y-1.5">
                    {[
                        { stars: 5, pct: 65 },
                        { stars: 4, pct: 30 },
                        { stars: 3, pct: 5 },
                        { stars: 2, pct: 0 },
                        { stars: 1, pct: 0 },
                    ].map((row) => (
                        <div key={row.stars} className="flex items-center gap-2">
                            <span className="text-xs text-gray-500 w-3">{row.stars}</span>
                            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                            <div className="flex-1 bg-gray-100 rounded-full h-2">
                                <div
                                    className="bg-amber-400 h-2 rounded-full"
                                    style={{ width: `${row.pct}%` }}
                                />
                            </div>
                            <span className="text-xs text-gray-400 w-8">{row.pct}%</span>
                        </div>
                    ))}
                </div>
            </div>

            {reviews.map((review, i) => (
                <div
                    key={i}
                    className="bg-white border border-gray-200 rounded-xl p-5"
                >
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-900">{review.reviewer}</span>
                            <div className="flex items-center gap-0.5">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star
                                        key={s}
                                        className={`w-3 h-3 ${s <= review.rating
                                                ? "text-amber-400 fill-amber-400"
                                                : "text-gray-200"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                        <span className="text-xs text-gray-400">{review.date}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        {review.comment}
                    </p>
                </div>
            ))}
        </div>
    );
}

function NotesTab() {
    const [noteText, setNoteText] = useState("");
    const [notes, setNotes] = useState([
        {
            author: "Admin – Ciara Kelly",
            date: "20 Feb 2026, 14:32",
            text: "Contract renewal discussion scheduled for March. They're interested in upgrading to include the new AI screening module. Expecting a 15% increase in contract value.",
        },
        {
            author: "Admin – Sean Gallagher",
            date: "05 Feb 2026, 09:15",
            text: "Completed quarterly compliance review. All GDPR documentation up to date. DPO confirmed data retention policies aligned with our platform requirements.",
        },
        {
            author: "Admin – Ciara Kelly",
            date: "18 Jan 2026, 16:45",
            text: "Met with Siobhán O'Reilly to discuss Q1 hiring plans. They're planning to expand engineering team by 20 headcount and need support with senior-level sourcing.",
        },
    ]);

    const handleAddNote = () => {
        if (!noteText.trim()) return;
        setNotes([
            {
                author: "Admin – You",
                date: new Date().toLocaleDateString("en-IE", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                }),
                text: noteText,
            },
            ...notes,
        ]);
        setNoteText("");
    };

    return (
        <div className="space-y-4">
            {/* Add Note */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
                <textarea
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    placeholder="Add a note about this company..."
                    className="w-full border border-gray-200 rounded-lg p-3 text-sm resize-none h-24 focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent"
                />
                <div className="flex justify-end mt-3">
                    <button
                        onClick={handleAddNote}
                        className="px-4 py-2 bg-[#7C3AED] text-white text-sm rounded-lg hover:bg-[#6B46C1] transition-colors"
                    >
                        Add Note
                    </button>
                </div>
            </div>

            {/* Notes List */}
            {notes.map((note, i) => (
                <div
                    key={i}
                    className="bg-white border border-gray-200 rounded-xl p-5"
                >
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-900">{note.author}</span>
                        <span className="text-xs text-gray-400">{note.date}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{note.text}</p>
                </div>
            ))}
        </div>
    );
}
