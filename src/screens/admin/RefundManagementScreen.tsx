import { CheckCircle, XCircle } from 'lucide-react';

const RefundManagementScreen = () => {
    return (
        <div className="h-full bg-slate-50 overflow-y-auto">
            <div className="bg-gradient-to-r from-primary to-primary-light p-6 pb-8">
                <h1 className="text-white text-2xl font-bold mb-4">Refund Management</h1>
            </div>

            <div className="px-6 -mt-4 pb-6 space-y-3">
                {[{ id: 'ORD204', user: 'Rakib Hasan', amount: 89, reason: 'Order cancelled by system' }].map(r => (
                    <div key={r.id} className="bg-white rounded-2xl p-5 shadow border border-gray-100">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-900 font-semibold">{r.id} · ৳{r.amount}</p>
                                <p className="text-gray-600 text-sm">{r.user}</p>
                                <p className="text-gray-700 text-xs mt-1">Reason: {r.reason}</p>
                            </div>
                            <div className="flex gap-2 flex-col">
                                <button className="bg-secondary/20 text-secondary px-3 py-2 rounded-lg text-sm flex items-center gap-1"><CheckCircle size={16} /> Accept</button>
                                <button className="bg-error/20 text-error px-3 py-2 rounded-lg text-sm flex items-center gap-1"><XCircle size={16} /> Reject</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RefundManagementScreen;
