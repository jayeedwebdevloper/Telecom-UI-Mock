import { Link } from 'react-router-dom';
import { User, Phone, Mail, Lock, Eye, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const RegisterScreen = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="h-full bg-gradient-to-b from-slate-50 to-white p-6 overflow-y-auto">
            <div className="mb-6 pt-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
                <p className="text-gray-600">Sign up to get started</p>
                <p className="text-primary bengali-text">নতুন অ্যাকাউন্ট তৈরি করুন</p>
            </div>

            <form className="space-y-4 pb-6">
                {/* Name Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                    </label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                        />
                    </div>
                </div>

                {/* Phone Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                    </label>
                    <div className="relative">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="tel"
                            placeholder="01XXXXXXXXX"
                            maxLength={11}
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                        />
                    </div>
                </div>

                {/* Email Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email (Optional)
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                        />
                    </div>
                </div>

                {/* Password Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                    </label>
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Create password"
                            className="w-full pl-12 pr-12 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary"
                        >
                            <Eye size={20} />
                        </button>
                    </div>
                </div>

                {/* Confirm Password */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm Password
                    </label>
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="password"
                            placeholder="Confirm password"
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                        />
                    </div>
                </div>

                <Link
                    to="/home"
                    className="w-full bg-primary hover:bg-primary-light text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all mt-6"
                >
                    Create Account <ArrowRight size={20} />
                </Link>
            </form>

            <div className="text-center pb-6">
                <p className="text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login" className="text-primary font-semibold hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterScreen;
