import { Users, Database, Cloud, Receipt, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchAdminMetrics, AdminMetrics } from '../../api/admin';
import { formatBytes, formatNumber, percent } from '../../utils/format';

const AdminDashboardScreen = () => {
    const [metrics, setMetrics] = useState<AdminMetrics>({});

    useEffect(() => {
        let mounted = true;
        fetchAdminMetrics().then((m) => {
            if (mounted) setMetrics(m);
        });
        return () => { mounted = false; };
    }, []);

    const mongoUsed = formatBytes(metrics.mongo?.usedBytes);
    const mongoTotal = formatBytes(metrics.mongo?.totalBytes);
    const mongoPct = percent(metrics.mongo?.usedBytes, metrics.mongo?.totalBytes);

    const r2Used = formatBytes(metrics.r2?.usedBytes);
    const r2Total = formatBytes(metrics.r2?.totalBytes);
    const r2Pct = percent(metrics.r2?.usedBytes, metrics.r2?.totalBytes);

    const stats = [
        {
            label: 'Total Users',
            value: formatNumber(metrics.usersTotal),
            change: '',
            trend: 'up',
            icon: <Users size={24} />, color: 'bg-blue-500'
        },
        {
            label: 'MongoDB Storage',
            value: `${mongoUsed} / ${mongoTotal}`,
            change: mongoPct !== undefined ? `${mongoPct}% used` : '',
            trend: 'up',
            icon: <Database size={24} />, color: 'bg-secondary'
        },
        {
            label: 'Cloudflare R2 Storage',
            value: `${r2Used} / ${r2Total}`,
            change: r2Pct !== undefined ? `${r2Pct}% used` : '',
            trend: 'up',
            icon: <Cloud size={24} />, color: 'bg-warning'
        },
        {
            label: 'Total Transactions',
            value: formatNumber(metrics.transactionsTotal),
            change: '',
            trend: 'up',
            icon: <Receipt size={24} />, color: 'bg-info'
        },
    ];

    const recentOrders = [
        { id: 'ORD123', user: 'Jayeed Hossian', package: '2GB Internet', amount: 50, status: 'completed' },
        { id: 'ORD124', user: 'Sara Khan', package: '5GB Combo', amount: 99, status: 'pending' },
        { id: 'ORD125', user: 'Rakib Hasan', package: 'Unlimited', amount: 199, status: 'completed' },
    ];

    return (
        <div className="h-full bg-slate-50 overflow-y-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary-light p-6 pb-8">
                <h1 className="text-white text-2xl font-bold mb-1">Admin Dashboard</h1>
                <p className="text-white/80">Welcome back, Administrator</p>
            </div>

            <div className="px-6 -mt-4 pb-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                            <div className={`${stat.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-3`}>
                                {stat.icon}
                            </div>
                            <p className="text-gray-600 text-xs mb-1">{stat.label}</p>
                            <p className="text-gray-900 text-xl font-bold mb-2">{stat.value}</p>
                            <div className="flex items-center gap-1">
                                {stat.change ? (
                                    <>
                                        {stat.trend === 'up' ? (
                                            <ArrowUpRight size={16} className="text-secondary" />
                                        ) : (
                                            <ArrowDownRight size={16} className="text-error" />
                                        )}
                                        <span className={`text-xs font-medium ${stat.trend === 'up' ? 'text-secondary' : 'text-error'}`}>
                                            {stat.change}
                                        </span>
                                    </>
                                ) : null}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                    <Link to="/admin/users" className="bg-primary hover:bg-primary-light text-white font-semibold py-4 rounded-xl transition-all text-center">Manage Users</Link>
                    <Link to="/admin/packages" className="bg-primary hover:bg-primary-light text-white font-semibold py-4 rounded-xl transition-all text-center">Packages</Link>
                    <Link to="/admin/orders" className="bg-primary hover:bg-primary-light text-white font-semibold py-4 rounded-xl transition-all text-center">Orders</Link>
                    <Link to="/admin/refunds" className="bg-primary hover:bg-primary-light text-white font-semibold py-4 rounded-xl transition-all text-center">Refunds</Link>
                </div>

                {/* Recent Orders */}
                <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
                    <h3 className="text-gray-900 font-bold mb-4">Recent Orders</h3>
                    <div className="space-y-3">
                        {recentOrders.map((order) => (
                            <div key={order.id} className="bg-slate-50 rounded-xl p-4 border border-gray-100">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <p className="text-gray-900 font-semibold text-sm">{order.user}</p>
                                        <p className="text-gray-500 text-xs">{order.id}</p>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${order.status === 'completed'
                                        ? 'bg-secondary/20 text-secondary'
                                        : 'bg-warning/20 text-warning'
                                        }`}>
                                        {order.status}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-gray-700 text-sm">{order.package}</p>
                                    <p className="text-gray-900 font-bold">৳{order.amount}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardScreen;
