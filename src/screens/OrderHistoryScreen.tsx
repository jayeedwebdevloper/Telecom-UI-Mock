import { useState } from 'react';
import { CheckCircle, Clock, XCircle, Search } from 'lucide-react';

const OrderHistoryScreen = () => {
    const [activeTab, setActiveTab] = useState('all');

    const orders = [
        {
            id: 'ORD001',
            package: '2GB Internet',
            operator: 'GP',
            amount: 50,
            status: 'success',
            date: '2024-01-15 14:30',
        },
        {
            id: 'ORD002',
            package: '5GB Internet',
            operator: 'Robi',
            amount: 99,
            status: 'pending',
            date: '2024-01-14 10:20',
        },
        {
            id: 'ORD003',
            package: 'Unlimited Minutes',
            operator: 'Banglalink',
            amount: 199,
            status: 'success',
            date: '2024-01-13 16:45',
        },
        {
            id: 'ORD004',
            package: 'Weekly Combo',
            operator: 'Airtel',
            amount: 89,
            status: 'cancelled',
            date: '2024-01-12 09:15',
        },
    ];

    const filteredOrders = orders.filter(order => {
        if (activeTab === 'all') return true;
        return order.status === activeTab;
    });

    const tabs = [
        { id: 'all', label: 'All' },
        { id: 'success', label: 'Successful' },
        { id: 'pending', label: 'Pending' },
        { id: 'cancelled', label: 'Cancelled' },
    ];

    return (
        <div className="h-full bg-slate-50 overflow-y-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary-light p-6 pb-8">
                <h1 className="text-white text-2xl font-bold mb-4">Order History</h1>

                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search by order ID..."
                        className="w-full pl-12 pr-4 py-3 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                </div>
            </div>

            {/* Tabs */}
            <div className="bg-white px-6 py-4 shadow-md sticky top-0">
                <div className="flex gap-2 overflow-x-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-shrink-0 px-5 py-2.5 rounded-xl font-semibold transition-all ${activeTab === tab.id
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Orders List */}
            <div className="p-6 space-y-4 pb-20">
                {filteredOrders.length > 0 ? (
                    filteredOrders.map((order) => (
                        <div
                            key={order.id}
                            className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${order.status === 'success' ? 'bg-secondary/20' :
                                            order.status === 'pending' ? 'bg-warning/20' :
                                                'bg-error/20'
                                        }`}>
                                        {order.status === 'success' ? <CheckCircle className="text-secondary" size={24} /> :
                                            order.status === 'pending' ? <Clock className="text-warning" size={24} /> :
                                                <XCircle className="text-error" size={24} />}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">{order.package}</h3>
                                        <p className="text-sm text-gray-500">{order.operator}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xl font-bold text-primary">৳{order.amount}</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                <div>
                                    <p className="text-xs text-gray-500">Order ID</p>
                                    <p className="text-sm font-semibold text-gray-700">{order.id}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Date & Time</p>
                                    <p className="text-sm font-medium text-gray-700">{order.date}</p>
                                </div>
                                <span className={`px-4 py-1.5 rounded-full text-xs font-semibold ${order.status === 'success' ? 'bg-secondary/20 text-secondary' :
                                        order.status === 'pending' ? 'bg-warning/20 text-warning' :
                                            'bg-error/20 text-error'
                                    }`}>
                                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                </span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-12">
                        <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Clock size={40} className="text-gray-400" />
                        </div>
                        <p className="text-gray-500 font-medium">No orders found</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OrderHistoryScreen;
