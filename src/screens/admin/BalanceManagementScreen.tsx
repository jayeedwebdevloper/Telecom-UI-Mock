import { Search, CheckCircle, XCircle, Edit2, Clock } from 'lucide-react';

const BalanceManagementScreen = () => {
    const pendingBalances = [
        {
            id: 'BAL001',
            user: 'Jayeed Ahmed',
            email: 'jayeed@example.com',
            phone: '01712345678',
            method: 'bKash',
            transactionId: 'TRX123456789',
            amount: 500,
            requestDate: '2024-01-15 14:30',
        },
        {
            id: 'BAL002',
            user: 'Sara Khan',
            email: 'sara@example.com',
            phone: '01812345678',
            method: 'Nagad',
            transactionId: 'TRX987654321',
            amount: 1000,
            requestDate: '2024-01-15 15:45',
        },
    ];

    return (
        <div className="h-full bg-slate-50 overflow-y-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-secondary to-secondary-light p-6 pb-8">
                <h1 className="text-white text-2xl font-bold mb-4">Balance Management</h1>

                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search by user or transaction ID..."
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                </div>
            </div>

            <div className="px-6 -mt-4 pb-6">
                {/* Tabs */}
                <div className="flex gap-2 mb-6 overflow-x-auto">
                    <button className="flex-shrink-0 bg-secondary text-white px-6 py-3 rounded-xl font-semibold shadow-lg">
                        Pending
                    </button>
                    <button className="flex-shrink-0 bg-white border border-gray-200 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50">
                        Manual Balance
                    </button>
                    <button className="flex-shrink-0 bg-white border border-gray-200 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50">
                        History
                    </button>
                </div>

                {/* Pending Balance List */}
                <div className="space-y-4">
                    {pendingBalances.map((balance) => (
                        <div key={balance.id} className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
                            {/* User Info */}
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-gray-900 font-bold text-lg">{balance.user}</h3>
                                    <p className="text-gray-600 text-sm">{balance.email}</p>
                                    <p className="text-gray-600 text-sm">{balance.phone}</p>
                                </div>
                                <div className="text-right">
                                    <span className="bg-warning/20 text-warning px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                                        <Clock size={14} />
                                        Pending
                                    </span>
                                </div>
                            </div>

                            {/* Transaction Details */}
                            <div className="bg-slate-50 rounded-xl p-4 mb-4 border border-gray-200">
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    <div>
                                        <p className="text-gray-600 mb-1">Payment Method</p>
                                        <p className="text-gray-900 font-semibold">{balance.method}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 mb-1">Transaction ID</p>
                                        <p className="text-gray-900 font-semibold">{balance.transactionId}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 mb-1">Request Date</p>
                                        <p className="text-gray-900 font-medium">{balance.requestDate}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 mb-1">Amount</p>
                                        <div className="flex items-center gap-2">
                                            <p className="text-gray-900 font-bold text-lg">৳{balance.amount}</p>
                                            <button className="text-info hover:text-info/80">
                                                <Edit2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="grid grid-cols-2 gap-3">
                                <button className="bg-secondary hover:bg-secondary-light text-white font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2">
                                    <CheckCircle size={20} />
                                    Accept
                                </button>
                                <button className="bg-error hover:bg-red-600 text-white font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2">
                                    <XCircle size={20} />
                                    Reject
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Manual Balance Section */}
                <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 mt-6">
                    <h3 className="text-gray-900 font-bold mb-4">Manual Balance Adjustment</h3>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-700 text-sm mb-2">Search User</label>
                            <input
                                type="text"
                                placeholder="Enter phone or email"
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 text-gray-900 border-2 border-gray-200 focus:border-secondary focus:outline-none"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block text-gray-700 text-sm mb-2">Action</label>
                                <select className="w-full px-4 py-3 rounded-xl bg-slate-50 text-gray-900 border-2 border-gray-200 focus:border-secondary focus:outline-none">
                                    <option>Add Balance</option>
                                    <option>Minus Balance</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm mb-2">Amount</label>
                                <input
                                    type="number"
                                    placeholder="0"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 text-gray-900 border-2 border-gray-200 focus:border-secondary focus:outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm mb-2">Reason</label>
                            <textarea
                                rows={3}
                                placeholder="Enter reason for balance adjustment..."
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 text-gray-900 border-2 border-gray-200 focus:border-secondary focus:outline-none resize-none"
                            ></textarea>
                        </div>

                        <button className="w-full bg-primary hover:bg-primary-light text-white font-semibold py-3 rounded-xl transition-all">
                            Apply Balance Change
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BalanceManagementScreen;
