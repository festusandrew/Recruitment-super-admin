import { useState } from "react";
import { X, Save, Upload, Building2, MapPin, Briefcase, FileText, Settings, Shield, UserCheck, DollarSign, Star } from "lucide-react";

interface EditCompanyModalProps {
    isOpen: boolean;
    onClose: () => void;
    company: any;
    onSave: (updatedCompany: any) => void;
}

export function EditCompanyModal({ isOpen, onClose, company, onSave }: EditCompanyModalProps) {
    const [formData, setFormData] = useState(company || {
        name: "",
        logo: "",
        description: "",
        email: "",
        phone: "",
        fax: "",
        website: "",
        established: "",
        ownership: "Private",
        employeeCount: "100+",
        industry: "Technology",
        address: "",
        eircode: "",
        companyNumber: "",
        vatNumber: "",
        monthlySpend: "€0.00",
        avgRating: "5.0",
        plan: "Starter",
        status: "Active",
        userLimit: "",
        jobsLimit: "",
        notes: "",
        // Regulatory
        gdprCompliant: "Yes",
        gdprOfficer: "",
        dataProtectionReg: "",
        lastAudit: "",
        wrcCompliance: "Compliant",
        equalityCompliance: "Compliant",
        // Primary Contact
        contactName: "",
        contactRole: "",
        contactMobile: "",
    });

    if (!isOpen) return null;

    const handleSave = () => {
        const logoInitials = formData.logo ? formData.logo : formData.name ? formData.name.substring(0, 2).toUpperCase() : "CO";
        onSave({ ...formData, logo: logoInitials });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/10 z-50 flex items-center justify-center p-4 backdrop-blur-[2px] animate-fade-in">
            <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 flex flex-col">
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-5 flex items-center justify-between z-10 shadow-sm">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">
                            {company ? "Edit Company Profile" : "Add New Company Profile"}
                        </h2>
                        <p className="text-xs text-gray-500 mt-1">Complete all details matching the company profile and compliance dashboard</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* Form Content */}
                <div className="p-8 space-y-10 flex-1 overflow-y-auto">
                    {/* General & Logo Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                            <Building2 className="w-4 h-4 text-[#7C3AED]" />
                            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">General Information & Logo</h3>
                        </div>

                        {/* Logo Upload area */}
                        <div className="flex items-center gap-6 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <div className="w-20 h-20 bg-gradient-to-br from-[#7C3AED] to-[#9333EA] rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-md">
                                {formData.logo || (formData.name ? formData.name.substring(0, 2).toUpperCase() : "CO")}
                            </div>
                            <div className="space-y-2 flex-1">
                                <label className="block text-sm font-medium text-gray-700">Company Logo Initials</label>
                                <div className="flex gap-3">
                                    <input
                                        type="text"
                                        maxLength={3}
                                        value={formData.logo}
                                        onChange={(e) => setFormData({ ...formData, logo: e.target.value.toUpperCase() })}
                                        placeholder="e.g. TC"
                                        className="w-24 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-sm text-center uppercase font-bold"
                                    />
                                    <button 
                                        type="button" 
                                        onClick={() => alert("Simulated logo upload: select an image file to upload.")}
                                        className="flex items-center gap-2 px-4 py-2 border border-purple-200 bg-purple-50 hover:bg-purple-100 text-[#7C3AED] rounded-xl text-sm font-medium transition-colors"
                                    >
                                        <Upload className="w-4 h-4" />
                                        Upload Logo Image
                                    </button>
                                </div>
                                <p className="text-xs text-gray-500">Max file size 5MB. Formats: PNG, JPG, SVG.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Enter company name"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                                <input
                                    type="text"
                                    value={formData.industry}
                                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                                    placeholder="e.g. Technology / SaaS"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Ownership Type</label>
                                <select
                                    value={formData.ownership}
                                    onChange={(e) => setFormData({ ...formData, ownership: e.target.value })}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-sm"
                                >
                                    <option value="Private">Private</option>
                                    <option value="Private (VC-backed)">Private (VC-backed)</option>
                                    <option value="Public">Public</option>
                                    <option value="Non-Profit">Non-Profit</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Employee Count</label>
                                <select
                                    value={formData.employeeCount}
                                    onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-sm"
                                >
                                    <option value="1-10">1 - 10</option>
                                    <option value="11-50">11 - 50</option>
                                    <option value="51-200">51 - 200</option>
                                    <option value="201-500">201 - 500</option>
                                    <option value="500+">500+</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Established Year</label>
                                <input
                                    type="text"
                                    value={formData.established}
                                    onChange={(e) => setFormData({ ...formData, established: e.target.value })}
                                    placeholder="e.g. 2015"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-sm"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Company Description</label>
                                <textarea
                                    value={formData.description || ""}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    placeholder="Detailed overview of the company, its background, and core focus..."
                                    rows={3}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-sm resize-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Contact & Location Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                            <MapPin className="w-4 h-4 text-[#7C3AED]" />
                            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Company Contact & Location</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Company Email *</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="contact@company.com"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    type="text"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    placeholder="+353 1 555 1200"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Fax Number</label>
                                <input
                                    type="text"
                                    value={formData.fax || ""}
                                    onChange={(e) => setFormData({ ...formData, fax: e.target.value })}
                                    placeholder="+353 1 555 1201"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                                <input
                                    type="text"
                                    value={formData.website}
                                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                    placeholder="www.company.ie"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-sm"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Address</label>
                                <input
                                    type="text"
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    placeholder="42 Grand Canal Dock, Dublin 2"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Eircode / Postcode</label>
                                <input
                                    type="text"
                                    value={formData.eircode}
                                    onChange={(e) => setFormData({ ...formData, eircode: e.target.value })}
                                    placeholder="D02 TK83"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Primary Contact Details */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                            <UserCheck className="w-4 h-4 text-[#7C3AED]" />
                            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Primary Contact Person</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    value={formData.contactName || ""}
                                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                                    placeholder="e.g. Siobhán O'Reilly"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Job Role / Title</label>
                                <input
                                    type="text"
                                    value={formData.contactRole || ""}
                                    onChange={(e) => setFormData({ ...formData, contactRole: e.target.value })}
                                    placeholder="e.g. Talent Acquisition Director"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Phone</label>
                                <input
                                    type="text"
                                    value={formData.contactMobile || ""}
                                    onChange={(e) => setFormData({ ...formData, contactMobile: e.target.value })}
                                    placeholder="+353 87 234 5678"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Regulatory & Compliance Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                            <Shield className="w-4 h-4 text-emerald-500" />
                            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Regulatory & Compliance</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                            <div>
                                <label className="block text-sm font-medium text-emerald-900 mb-1">GDPR Compliant</label>
                                <select
                                    value={formData.gdprCompliant || "Yes"}
                                    onChange={(e) => setFormData({ ...formData, gdprCompliant: e.target.value })}
                                    className="w-full px-4 py-2.5 border border-emerald-200 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                                >
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Pending">Pending Audit</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-emerald-900 mb-1">Data Protection Officer</label>
                                <input
                                    type="text"
                                    value={formData.gdprOfficer || ""}
                                    onChange={(e) => setFormData({ ...formData, gdprOfficer: e.target.value })}
                                    placeholder="e.g. Jane Murphy"
                                    className="w-full px-4 py-2.5 border border-emerald-200 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-emerald-900 mb-1">DPC Registration</label>
                                <input
                                    type="text"
                                    value={formData.dataProtectionReg || ""}
                                    onChange={(e) => setFormData({ ...formData, dataProtectionReg: e.target.value })}
                                    placeholder="e.g. DPC-2024-00456"
                                    className="w-full px-4 py-2.5 border border-emerald-200 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-emerald-900 mb-1">Last Compliance Audit</label>
                                <input
                                    type="text"
                                    value={formData.lastAudit || ""}
                                    onChange={(e) => setFormData({ ...formData, lastAudit: e.target.value })}
                                    placeholder="YYYY-MM-DD"
                                    className="w-full px-4 py-2.5 border border-emerald-200 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-emerald-900 mb-1">WRC Compliance</label>
                                <select
                                    value={formData.wrcCompliance || "Compliant"}
                                    onChange={(e) => setFormData({ ...formData, wrcCompliance: e.target.value })}
                                    className="w-full px-4 py-2.5 border border-emerald-200 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                                >
                                    <option value="Compliant">Compliant</option>
                                    <option value="Review Required">Review Required</option>
                                    <option value="Non-Compliant">Non-Compliant</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-emerald-900 mb-1">Employment Equality</label>
                                <select
                                    value={formData.equalityCompliance || "Compliant"}
                                    onChange={(e) => setFormData({ ...formData, equalityCompliance: e.target.value })}
                                    className="w-full px-4 py-2.5 border border-emerald-200 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                                >
                                    <option value="Compliant">Compliant</option>
                                    <option value="Review Required">Review Required</option>
                                    <option value="Non-Compliant">Non-Compliant</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Registration, Tax & Financial Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                            <FileText className="w-4 h-4 text-[#7C3AED]" />
                            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Registration, Tax & Financials</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Company Reg Number</label>
                                <input
                                    type="text"
                                    value={formData.companyNumber}
                                    onChange={(e) => setFormData({ ...formData, companyNumber: e.target.value })}
                                    placeholder="e.g. IE 587234"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">VAT Number</label>
                                <input
                                    type="text"
                                    value={formData.vatNumber}
                                    onChange={(e) => setFormData({ ...formData, vatNumber: e.target.value })}
                                    placeholder="e.g. IE 9876543A"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Spend</label>
                                <input
                                    type="text"
                                    value={formData.monthlySpend || "€0.00"}
                                    onChange={(e) => setFormData({ ...formData, monthlySpend: e.target.value })}
                                    placeholder="€48,500.00"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Average Rating</label>
                                <input
                                    type="text"
                                    value={formData.avgRating || "5.0"}
                                    onChange={(e) => setFormData({ ...formData, avgRating: e.target.value })}
                                    placeholder="4.8"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Subscription & Platform Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                            <Settings className="w-4 h-4 text-[#7C3AED]" />
                            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Platform Settings & Limits</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Subscription Plan *</label>
                                <select
                                    value={formData.plan}
                                    onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-sm"
                                >
                                    <option value="Starter">Starter - $299/month</option>
                                    <option value="Professional">Professional - $999/month</option>
                                    <option value="Enterprise">Enterprise - Custom pricing</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Account Status *</label>
                                <select
                                    value={formData.status}
                                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-sm"
                                >
                                    <option value="Active">Active</option>
                                    <option value="Trial">Trial</option>
                                    <option value="Suspended">Suspended</option>
                                    <option value="Cancelled">Cancelled</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">User Limit</label>
                                <input
                                    type="number"
                                    value={formData.userLimit || ""}
                                    onChange={(e) => setFormData({ ...formData, userLimit: e.target.value })}
                                    placeholder="Leave empty for unlimited"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Active Jobs Limit</label>
                                <input
                                    type="number"
                                    value={formData.jobsLimit || ""}
                                    onChange={(e) => setFormData({ ...formData, jobsLimit: e.target.value })}
                                    placeholder="Leave empty for unlimited"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Admin Notes */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Admin Notes</label>
                        <textarea
                            value={formData.notes || ""}
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                            placeholder="Internal notes about this company..."
                            rows={3}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-sm resize-none"
                        />
                    </div>
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-8 py-4 flex items-center justify-end gap-3 z-10">
                    <button
                        onClick={onClose}
                        className="px-6 py-2.5 text-gray-700 hover:bg-gray-200 font-medium rounded-xl transition-colors text-sm"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="flex items-center gap-2 px-6 py-2.5 bg-[#7C3AED] text-white font-medium rounded-xl hover:bg-[#6B46C1] transition-colors shadow-md text-sm"
                    >
                        <Save className="w-4 h-4" />
                        Save Company Profile
                    </button>
                </div>
            </div>
        </div>
    );
}