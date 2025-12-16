import { Search, Plus, EyeOff, Pencil, Trash2 } from 'lucide-react';

const PackageManagementScreen = () => {
    return (
        <div className="h-full bg-slate-50 overflow-y-auto">
            <div className="bg-gradient-to-r from-primary to-primary-light p-6 pb-8">
                <h1 className="text-white text-2xl font-bold mb-4">Package Management</h1>
                <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative flex-1 min-w-0">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border-0 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="Search packages..." />
                    </div>
                    <button className="bg-secondary hover:bg-green-500 text-white font-semibold px-4 py-3 rounded-xl flex items-center gap-2 self-start whitespace-nowrap"><Plus size={18} /> Add Package</button>
                </div>
            </div>

            <div className="px-6 -mt-4 pb-6 space-y-3">
                {[1, 2, 3].map(i => (
                    <div key={i} className="bg-white rounded-2xl p-5 shadow border border-gray-100">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-900 font-semibold">2GB Internet · GP</p>
                                <p className="text-gray-600 text-sm">৳50 · 7 Days · Visible</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-3 py-2 rounded-lg text-sm flex items-center gap-1"><Pencil size={16} /> Edit</button>
                                <button className="bg-warning/20 text-warning px-3 py-2 rounded-lg text-sm flex items-center gap-1"><EyeOff size={16} /> Hide</button>
                                <button className="bg-error/20 text-error px-3 py-2 rounded-lg text-sm flex items-center gap-1"><Trash2 size={16} /> Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PackageManagementScreen;
