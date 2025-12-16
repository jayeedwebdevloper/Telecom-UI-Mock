import { Search, UserMinus, UserPlus, Shield, Ban } from 'lucide-react';

const UsersManagementScreen = () => {
    return (
        <div className="h-full bg-slate-50 overflow-y-auto">
            <div className="bg-gradient-to-r from-primary to-primary-light p-6 pb-8">
                <h1 className="text-white text-2xl font-bold mb-4">User Management</h1>
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border-0 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="Search by ID, name, phone..." />
                </div>
            </div>

            <div className="px-6 -mt-4 pb-6 space-y-4">
                <div className="bg-white rounded-2xl p-5 shadow border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                        <div>
                            <p className="text-gray-900 font-semibold">Jayeed Hossian</p>
                            <p className="text-gray-600 text-sm">UID: U-10239 · +8801712345678</p>
                        </div>
                        <span className="text-xs bg-secondary/20 text-secondary px-3 py-1 rounded-full">Active</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 text-xs sm:text-sm px-3 py-2 rounded-lg flex items-center gap-1 whitespace-nowrap"><Shield size={16} /> Reset Password</button>
                        <button className="bg-error hover:bg-red-600 text-white text-xs sm:text-sm px-3 py-2 rounded-lg flex items-center gap-1 whitespace-nowrap"><Ban size={16} /> Block</button>
                        <button className="bg-secondary hover:bg-green-500 text-white text-xs sm:text-sm px-3 py-2 rounded-lg flex items-center gap-1 whitespace-nowrap"><UserPlus size={16} /> Add Balance</button>
                        <button className="bg-warning hover:bg-amber-500 text-white text-xs sm:text-sm px-3 py-2 rounded-lg flex items-center gap-1 whitespace-nowrap"><UserMinus size={16} /> Minus Balance</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersManagementScreen;
