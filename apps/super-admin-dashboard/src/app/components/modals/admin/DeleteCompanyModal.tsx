import { AlertTriangle, Archive } from "lucide-react";

interface DeleteCompanyModalProps {
    isOpen: boolean;
    onClose: () => void;
    company: any;
    onConfirm: () => void;
}

export function DeleteCompanyModal({ isOpen, onClose, company, onConfirm }: DeleteCompanyModalProps) {
    if (!isOpen || !company) return null;

    return (
        <div className="fixed inset-0 bg-black/10 z-50 flex items-center justify-center p-4 backdrop-blur-[2px] animate-fade-in">
            <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden border border-gray-100 p-6 text-center">
                <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-100">
                    <AlertTriangle className="w-7 h-7 text-amber-600" />
                </div>
                
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Archive Company?</h2>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    Are you sure you want to archive <strong className="text-gray-900">{company.name}</strong>? This company's account will be moved to archived records and temporarily disabled.
                </p>

                <div className="flex items-center gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 px-5 py-2.5 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            onConfirm();
                            onClose();
                        }}
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 bg-amber-600 text-white font-medium rounded-xl hover:bg-amber-700 transition-colors shadow-sm"
                    >
                        <Archive className="w-4 h-4" />
                        Archive Company
                    </button>
                </div>
            </div>
        </div>
    );
}
