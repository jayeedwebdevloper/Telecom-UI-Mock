import { Link } from 'react-router-dom';
import { Mail, Lock, Shield } from 'lucide-react';

const AdminLoginScreen = () => {
    return (
        <div className="h-full bg-gradient-to-br from-dark via-primary to-primary-light flex flex-col justify-center p-6">
            <div className="text-center mb-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-full p-6 inline-block mb-4">
                    <Shield size={48} className="text-white" />
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">Admin Portal</h1>
                <p className="text-white/80">Secure access for administrators</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <form className="space-y-5">
                    {/* Email Input */}
                    <div>
                        <label className="block text-white text-sm font-medium mb-2">
                            Admin Email
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black/70" size={20} />
                            <input
                                type="email"
                                placeholder="admin@example.com"
                                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/20 border-2 border-white/30 text-white placeholder-white/50 focus:border-white focus:outline-none transition-colors"
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div>
                        <label className="block text-white text-sm font-medium mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black/70" size={20} />
                            <input
                                type="password"
                                placeholder="Enter password"
                                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/20 border-2 border-white/30 text-white placeholder-white/50 focus:border-white focus:outline-none transition-colors"
                            />
                        </div>
                    </div>

                    <Link
                        to="/admin/dashboard"
                        className="w-full bg-white text-primary font-bold py-4 rounded-xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]"
                    >
                        Admin Login
                    </Link>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-white/60 text-sm">
                        Protected area - Authorized personnel only
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdminLoginScreen;
