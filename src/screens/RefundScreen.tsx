import { RefreshCw } from 'lucide-react';

const RefundScreen = () => {
    const refundableOrders = [
        {
            id: 'ORD002',
            package: '5GB Internet',
            operator: 'Robi',
            amount: 99,
            date: '2024-01-14',
        },
    ];

    return (
        <div className="h-full bg-slate-50 overflow-y-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-warning to-orange-500 p-6 pb-8">
                <h1 className="text-white text-2xl font-bold mb-2">Refund Request</h1>
                <p className="text-white/80">Request refund for pending orders</p>
            </div>

            <div className="px-6 -mt-4 pb-6">
                {refundableOrders.length > 0 ? (
                    <div className="space-y-4">
                        {refundableOrders.map((order) => (
                            <div key={order.id} className="bg-white rounded-2xl p-5 shadow-lg">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">{order.package}</h3>
                                        <p className="text-sm text-gray-500">{order.operator}</p>
                                        <p className="text-xs text-gray-400 mt-1">{order.date}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-primary">৳{order.amount}</p>
                                        <p className="text-xs text-gray-500">{order.id}</p>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Refund Reason
                                    </label>
                                    <textarea
                                        placeholder="Please explain why you need a refund..."
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-warning focus:outline-none transition-colors resize-none"
                                    ></textarea>
                                </div>

                                <button className="w-full bg-warning hover:bg-orange-500 text-white font-semibold py-3 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                                    <RefreshCw size={20} />
                                    Submit Refund Request
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                        <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <RefreshCw size={40} className="text-gray-400" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">No Refundable Orders</h3>
                        <p className="text-gray-500">You don't have any pending orders eligible for refund</p>
                    </div>
                )}

                {/* Refund History */}
                <div className="mt-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Refund History</h3>
                    <div className="bg-white rounded-2xl p-5 shadow-md">
                        <div className="flex items-center justify-between py-3 border-b border-gray-100">
                            <div>
                                <p className="font-semibold text-gray-900">ORD004</p>
                                <p className="text-sm text-gray-500">Weekly Combo - Airtel</p>
                                <p className="text-xs text-gray-400 mt-1">Refunded on 2024-01-13</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-bold text-secondary">৳89</p>
                                <span className="text-xs bg-secondary/20 text-secondary px-3 py-1 rounded-full font-medium">
                                    Approved
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RefundScreen;
