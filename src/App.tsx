import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PhoneMockup from './components/PhoneMockup';
import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import AddBalanceScreen from './screens/AddBalanceScreen';
import PackageListScreen from './screens/PackageListScreen';
import PackageDetailScreen from './screens/PackageDetailScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import RefundScreen from './screens/RefundScreen';
import AdminLoginScreen from './screens/admin/AdminLoginScreen';
import AdminDashboardScreen from './screens/admin/AdminDashboardScreen';
import BalanceManagementScreen from './screens/admin/BalanceManagementScreen';
import UsersManagementScreen from './screens/admin/UsersManagementScreen';
import OrdersManagementScreen from './screens/admin/OrdersManagementScreen';
import PackageManagementScreen from './screens/admin/PackageManagementScreen';
import OperatorManagementScreen from './screens/admin/OperatorManagementScreen';
import RefundManagementScreen from './screens/admin/RefundManagementScreen';
import NotificationScreen from './screens/admin/NotificationScreen';
import SliderNoticeScreen from './screens/admin/SliderNoticeScreen';
import SystemSecurityScreen from './screens/admin/SystemSecurityScreen';
import { Menu } from 'lucide-react';
import { useState } from 'react';

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Router>
            <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 py-8 px-4">
                {/* Header */}
                <div className="max-w-7xl mx-auto mb-8">
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-bold text-white mb-2">
                                    Telecom Package App
                                </h1>
                                <p className="text-white/80">UI & UX Design Preview</p>
                            </div>
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="lg:hidden text-white p-2 hover:bg-white/20 rounded-lg transition-colors"
                            >
                                <Menu size={24} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Navigation Menu */}
                <div className={`max-w-7xl mx-auto mb-8 ${menuOpen ? 'block' : 'hidden'} lg:block`}>
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                            <NavButton to="/" label="Splash" />
                            <NavButton to="/onboarding" label="Onboarding" />
                            <NavButton to="/login" label="Login" />
                            <NavButton to="/register" label="Register" />
                            <NavButton to="/home" label="Home" />
                            <NavButton to="/add-balance" label="Add Balance" />
                            <NavButton to="/packages" label="Packages" />
                            <NavButton to="/orders" label="Orders" />
                            <NavButton to="/refund" label="Refund" />
                            <NavButton to="/profile" label="Profile" />
                            <NavButton to="/admin" label="Admin Login" />
                            <NavButton to="/admin/dashboard" label="Dashboard" />
                            <NavButton to="/admin/balance" label="Balance Mgmt" />
                            <NavButton to="/admin/users" label="Users" />
                            <NavButton to="/admin/orders" label="Order Mgmt" />
                            <NavButton to="/admin/packages" label="Package Mgmt" />
                            <NavButton to="/admin/operators" label="Operators" />
                            <NavButton to="/admin/refunds" label="Refunds" />
                            <NavButton to="/admin/notifications" label="Notifications" />
                            <NavButton to="/admin/slider" label="Slider & Notice" />
                            <NavButton to="/admin/system" label="System & Security" />
                        </div>
                    </div>
                </div>

                {/* Phone Mockup */}
                <div className="max-w-7xl mx-auto">
                    <PhoneMockup>
                        <Routes>
                            <Route path="/" element={<SplashScreen />} />
                            <Route path="/onboarding" element={<OnboardingScreen />} />
                            <Route path="/login" element={<LoginScreen />} />
                            <Route path="/register" element={<RegisterScreen />} />
                            <Route path="/home" element={<HomeScreen />} />
                            <Route path="/add-balance" element={<AddBalanceScreen />} />
                            <Route path="/packages" element={<PackageListScreen />} />
                            <Route path="/packages/:id" element={<PackageDetailScreen />} />
                            <Route path="/orders" element={<OrderHistoryScreen />} />
                            <Route path="/refund" element={<RefundScreen />} />
                            <Route path="/profile" element={<ProfileScreen />} />
                            <Route path="/admin" element={<AdminLoginScreen />} />
                            <Route path="/admin/dashboard" element={<AdminDashboardScreen />} />
                            <Route path="/admin/balance" element={<BalanceManagementScreen />} />
                            <Route path="/admin/users" element={<UsersManagementScreen />} />
                            <Route path="/admin/orders" element={<OrdersManagementScreen />} />
                            <Route path="/admin/packages" element={<PackageManagementScreen />} />
                            <Route path="/admin/operators" element={<OperatorManagementScreen />} />
                            <Route path="/admin/refunds" element={<RefundManagementScreen />} />
                            <Route path="/admin/notifications" element={<NotificationScreen />} />
                            <Route path="/admin/slider" element={<SliderNoticeScreen />} />
                            <Route path="/admin/system" element={<SystemSecurityScreen />} />
                        </Routes>
                    </PhoneMockup>
                </div>
            </div>
        </Router>
    );
}

function NavButton({ to, label }: { to: string; label: string }) {
    return (
        <Link
            to={to}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 text-center text-sm hover:scale-105"
        >
            {label}
        </Link>
    );
}

export default App;
