import { X, Link2, Mail, Share2, Copy, Check, Linkedin, Facebook, Twitter } from "lucide-react";
import { useState } from "react";

interface ShareJobModalProps {
    isOpen: boolean;
    onClose: () => void;
    jobTitle?: string;
}

export function ShareJobModal({ isOpen, onClose, jobTitle }: ShareJobModalProps) {
    const [copied, setCopied] = useState(false);
    const [emailSent, setEmailSent] = useState(false);
    const jobUrl = `https://mployus.com/jobs/${jobTitle?.toLowerCase().replace(/\s+/g, "-")}`;

    if (!isOpen) return null;

    const handleCopyLink = () => {
        navigator.clipboard.writeText(jobUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleShareEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setEmailSent(true);
        setTimeout(() => {
            setEmailSent(false);
            onClose();
        }, 1500);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Share2 className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                            <h2 className="text-gray-900">Share Job</h2>
                            <p className="text-sm text-gray-500">{jobTitle || "Job Posting"}</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                <div className="p-6">
                    {/* Copy Link */}
                    <div className="mb-6">
                        <label className="block text-sm text-gray-700 mb-2">Job Link</label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={jobUrl}
                                readOnly
                                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-sm"
                            />
                            <button
                                onClick={handleCopyLink}
                                className={`px-5 py-2.5 rounded-lg transition-all ${copied
                                        ? "bg-green-600 text-white"
                                        : "bg-blue-600 text-white hover:bg-blue-700"
                                    }`}
                            >
                                {copied ? (
                                    <>
                                        <Check className="w-4 h-4" />
                                    </>
                                ) : (
                                    <>
                                        <Copy className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Social Media Share */}
                    <div className="mb-6">
                        <label className="block text-sm text-gray-700 mb-3">Share on Social Media</label>
                        <div className="grid grid-cols-3 gap-3">
                            <button className="flex flex-col items-center gap-2 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <Linkedin className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-sm text-gray-700">LinkedIn</span>
                            </button>
                            <button className="flex flex-col items-center gap-2 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center">
                                    <Twitter className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-sm text-gray-700">Twitter</span>
                            </button>
                            <button className="flex flex-col items-center gap-2 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
                                    <Facebook className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-sm text-gray-700">Facebook</span>
                            </button>
                        </div>
                    </div>

                    {/* Email Share */}
                    <div>
                        <label className="block text-sm text-gray-700 mb-2">Share via Email</label>
                        <form onSubmit={handleShareEmail} className="space-y-3">
                            <input
                                type="email"
                                placeholder="Enter email addresses (comma separated)"
                                required
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <textarea
                                placeholder="Add a personal message (optional)"
                                rows={3}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            />
                            <button
                                type="submit"
                                disabled={emailSent}
                                className={`w-full px-5 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 ${emailSent
                                        ? "bg-green-600 text-white"
                                        : "bg-blue-600 text-white hover:bg-blue-700"
                                    }`}
                            >
                                {emailSent ? (
                                    <>
                                        <Check className="w-4 h-4" />
                                        Sent!
                                    </>
                                ) : (
                                    <>
                                        <Mail className="w-4 h-4" />
                                        Send Email
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Job Boards */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                        <label className="block text-sm text-gray-700 mb-3">Post to Job Boards</label>
                        <div className="space-y-2">
                            <button className="w-full flex items-center justify-between p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                <span className="text-sm text-gray-700">Indeed</span>
                                <span className="text-xs text-blue-600">Post →</span>
                            </button>
                            <button className="w-full flex items-center justify-between p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                <span className="text-sm text-gray-700">Glassdoor</span>
                                <span className="text-xs text-blue-600">Post →</span>
                            </button>
                            <button className="w-full flex items-center justify-between p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                <span className="text-sm text-gray-700">ZipRecruiter</span>
                                <span className="text-xs text-blue-600">Post →</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
