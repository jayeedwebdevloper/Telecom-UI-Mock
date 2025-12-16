import { User, Phone, Mail, Lock, Globe, LogOut, ChevronRight, Bell, HelpCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProfileScreen = () => {
    return (
        <div className="h-full bg-slate-50 overflow-y-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary-light p-6 pb-12">
                <h1 className="text-white text-2xl font-bold mb-8">Profile</h1>

                {/* User Info Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-white/20">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                            <User size={32} className="text-primary" />
                        </div>
                        <div>
                            <h2 className="text-white text-xl font-bold">Jayeed Hossian</h2>
                            <p className="text-white/80">+880 1712345678</p>
                            <p className="text-white/70 text-sm">jayeed@example.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-6 -mt-6 pb-6">
                {/* Account Settings */}
                <div className="bg-white rounded-2xl p-5 shadow-lg mb-4">
                    <h3 className="text-gray-900 font-bold mb-4">Account Settings</h3>
                    <div className="space-y-1">
                        <MenuItem icon={<User size={20} />} label="Edit Profile" />
                        <MenuItem icon={<Phone size={20} />} label="Change Phone Number" />
                        <MenuItem icon={<Mail size={20} />} label="Email Address" />
                        <MenuItem icon={<Lock size={20} />} label="Change Password" />
                    </div>
                </div>

                {/* App Settings */}
                <div className="bg-white rounded-2xl p-5 shadow-lg mb-4">
                    <h3 className="text-gray-900 font-bold mb-4">App Settings</h3>
                    <div className="space-y-1">
                        <LanguageMenuItem />
                        <MenuItem icon={<Bell size={20} />} label="Notifications" />
                    </div>
                </div>

                {/* Help & Support */}
                <div className="bg-white rounded-2xl p-5 shadow-lg mb-4">
                    <h3 className="text-gray-900 font-bold mb-4">Help & Support</h3>
                    <div className="space-y-1">
                        <MenuItem icon={<HelpCircle size={20} />} label="Help Center" badge="24/7" />
                        <MenuItem icon={<Phone size={20} />} label="Helpline: 16247" />
                        <MenuItem icon={<Star size={20} />} label="Rate App" />
                    </div>
                </div>

                {/* Logout */}
                <Link
                    to="/login"
                    className="bg-error hover:bg-red-600 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                >
                    <LogOut size={20} />
                    Logout
                </Link>

                <div className="text-center mt-6 text-gray-500 text-sm">
                    <p>Version 1.0.0</p>
                    <p className="mt-1">© 2024 TelePack. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

function MenuItem({ icon, label, badge }: { icon: React.ReactNode; label: string; badge?: string }) {
    return (
        <button className="w-full flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors">
            <div className="flex items-center gap-3">
                <div className="text-gray-600">{icon}</div>
                <span className="text-gray-900 font-medium">{label}</span>
            </div>
            <div className="flex items-center gap-2">
                {badge && (
                    <span className="bg-secondary text-white text-xs font-semibold px-2 py-1 rounded-full">
                        {badge}
                    </span>
                )}
                <ChevronRight size={20} className="text-gray-400" />
            </div>
        </button>
    );
}

function LanguageMenuItem() {
    return (
        <button className="w-full flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors">
            <div className="flex items-center gap-3">
                <div className="text-gray-600">
                    <Globe size={20} />
                </div>
                <span className="text-gray-900 font-medium">Language / ভাষা</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">English</span>
                <ChevronRight size={20} className="text-gray-400" />
            </div>
        </button>
    );
}

export default ProfileScreen;
