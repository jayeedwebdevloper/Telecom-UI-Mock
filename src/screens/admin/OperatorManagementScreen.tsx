import { Plus, ToggleLeft, ToggleRight } from 'lucide-react';

const OperatorManagementScreen = () => {
    return (
        <div className="h-full bg-slate-50 overflow-y-auto">
            <div className="bg-gradient-to-r from-primary to-primary-light p-6 pb-8">
                <h1 className="text-white text-2xl font-bold mb-4">Operator Management</h1>
                <button className="bg-secondary hover:bg-green-500 text-white font-semibold px-4 py-3 rounded-xl flex items-center gap-2"><Plus size={18} /> Add Operator</button>
            </div>

            <div className="px-6 -mt-4 pb-6 space-y-3">
                {[{ name: 'Grameenphone', active: true }, { name: 'Robi', active: true }, { name: 'Banglalink', active: false }].map((op) => (
                    <div key={op.name} className="bg-white rounded-2xl p-5 shadow border border-gray-100 flex items-center justify-between">
                        <div>
                            <p className="text-gray-900 font-semibold">{op.name}</p>
                            <p className="text-gray-600 text-sm">Status: {op.active ? 'Active' : 'Inactive'}</p>
                        </div>
                        <button className={`px-3 py-2 rounded-lg flex items-center gap-1 ${op.active ? 'bg-secondary text-white hover:bg-green-500' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'}`}>
                            {op.active ? <ToggleRight size={18} /> : <ToggleLeft size={18} />} {op.active ? 'Active' : 'Inactive'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OperatorManagementScreen;
