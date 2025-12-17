import { Home, Package, History, Wallet, User, LayoutDashboard, Users, Bell } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const CUSTOMER_TABS = [
    { to: '/home', label: 'Home', icon: <Home size={20} /> },
    { to: '/packages', label: 'Packages', icon: <Package size={20} /> },
    { to: '/orders', label: 'Orders', icon: <History size={20} /> },
    // { to: '/add-balance', label: 'Balance', icon: <Wallet size={20} /> },
    { to: '/profile', label: 'Profile', icon: <User size={20} /> },
];

const ADMIN_TABS = [
    { to: '/admin/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { to: '/admin/users', label: 'Users', icon: <Users size={20} /> },
    { to: '/admin/orders', label: 'Orders', icon: <History size={20} /> },
    { to: '/admin/packages', label: 'Packages', icon: <Package size={20} /> },
    // { to: '/admin/notifications', label: 'Notifications', icon: <Bell size={20} /> },
];

export default function BottomTabBar() {
    const { pathname } = useLocation();
    const hideOn = ['/', '/onboarding', '/login', '/register', '/admin'];
    const shouldHide = hideOn.includes(pathname);
    const isAdmin = pathname.startsWith('/admin');
    const TABS = isAdmin ? ADMIN_TABS : CUSTOMER_TABS;

    if (shouldHide) return null;

    return (
        <div className="absolute bottom-0 left-0 right-0 w-full px-2 py-2 bg-gradient-to-t from-white via-white to-white/95 border-t border-gray-200 z-40 rounded-b-[2.5rem]">
            <div className="flex items-center justify-between">
                {TABS.map(tab => {
                    const active = pathname === tab.to || (tab.to !== (isAdmin ? '/admin/dashboard' : '/home') && pathname.startsWith(tab.to));
                    return (
                        <Link
                            key={tab.to}
                            to={tab.to}
                            className={`flex flex-col items-center gap-1 px-2 py-1 rounded-xl transition-colors ${active ? (isAdmin ? 'text-primary' : 'text-primary') : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            {tab.icon}
                            <span className="text-xs font-medium">{tab.label}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
