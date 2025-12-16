import { Lock, ShieldCheck, Hash, Activity } from 'lucide-react';

const SystemSecurityScreen = () => {
    return (
        <div className="h-full bg-slate-50 overflow-y-auto">
            <div className="bg-gradient-to-r from-primary to-primary-light p-6 pb-8">
                <h1 className="text-white text-2xl font-bold mb-4">System & Security</h1>
            </div>

            <div className="px-6 -mt-4 pb-6 space-y-4">
                <div className="bg-white rounded-2xl p-5 shadow border border-gray-100">
                    <h3 className="text-gray-900 font-bold mb-3 flex items-center gap-2"><Lock size={18} /> Order Lock</h3>
                    <p className="text-gray-600 text-sm mb-3">Prevent duplicate orders during processing.</p>
                    <button className="bg-primary hover:bg-primary-light text-white px-4 py-3 rounded-xl">Enable Lock</button>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow border border-gray-100">
                    <h3 className="text-gray-900 font-bold mb-3 flex items-center gap-2"><Hash size={18} /> Duplicate TRX Prevention</h3>
                    <p className="text-gray-600 text-sm mb-3">Automatically reject already used transaction IDs.</p>
                    <button className="bg-primary hover:bg-primary-light text-white px-4 py-3 rounded-xl">Enable Prevention</button>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow border border-gray-100">
                    <h3 className="text-gray-900 font-bold mb-3 flex items-center gap-2"><ShieldCheck size={18} /> Role-based Access</h3>
                    <p className="text-gray-600 text-sm mb-3">Manage roles and permissions across admins.</p>
                    <button className="bg-primary hover:bg-primary-light text-white px-4 py-3 rounded-xl">Manage Roles</button>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow border border-gray-100">
                    <h3 className="text-gray-900 font-bold mb-3 flex items-center gap-2"><Activity size={18} /> Activity Logs</h3>
                    <p className="text-gray-600 text-sm">Track admin actions and sensitive operations.</p>
                </div>
            </div>
        </div>
    );
};

export default SystemSecurityScreen;
