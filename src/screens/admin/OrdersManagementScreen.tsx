import { Search, CheckCircle, XCircle, RotateCcw } from 'lucide-react';

const OrdersManagementScreen = () => {
    return (
        <div className="h-full bg-slate-50 overflow-y-auto">
            <div className="bg-gradient-to-r from-primary to-primary-light p-6 pb-8">
                <h1 className="text-white text-2xl font-bold mb-4">Order Management</h1>
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border-0 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="Search by Order ID..." />
                </div>
            </div>

            <div className="px-6 -mt-4 pb-6 space-y-3">
                {[1, 2, 3].map(i => (
                    <div key={i} className="bg-white rounded-2xl p-5 shadow border border-gray-100">
                        <div className="flex items-center justify-between gap-2">
                            <div>
                                <p className="text-gray-900 font-semibold">ORD10{i} · 2GB Internet (GP)</p>
                                <p className="text-gray-600 text-sm">User: Sara Khan · ৳99 · 2024-01-15 14:20</p>
                            </div>
                            <div className="flex flex-wrap gap-2 justify-end">
                                <button className="bg-secondary/20 text-secondary px-3 py-2 rounded-lg text-xs flex items-center gap-1 whitespace-nowrap"><CheckCircle size={16} /> Complete</button>
                                <button className="bg-error/20 text-error px-3 py-2 rounded-lg text-xs flex items-center gap-1 whitespace-nowrap"><XCircle size={16} /> Cancel</button>
                                <button className="bg-warning/20 text-warning px-3 py-2 rounded-lg text-xs flex items-center gap-1 whitespace-nowrap"><RotateCcw size={16} /> Refund</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrdersManagementScreen;
