import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, ArrowRight, Chrome } from 'lucide-react';
import { useState } from 'react';

const LoginScreen = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="h-full bg-gradient-to-b from-slate-50 to-white p-6 flex flex-col">
            <div className="flex-1 flex flex-col justify-center">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
                    <p className="text-gray-600">Login to your account</p>
                    <p className="text-primary bengali-text">আপনার অ্যাকাউন্টে লগইন করুন</p>
                </div>

                <form className="space-y-5">
                    {/* Email Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
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
                                placeholder="Enter password"
                                className="w-full pl-12 pr-12 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
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

                    <div className="flex justify-end">
                        <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                            Forgot Password?
                        </Link>
                    </div>

                    <Link
                        to="/home"
                        className="w-full bg-primary hover:bg-primary-light text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                    >
                        Login <ArrowRight size={20} />
                    </Link>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-6">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="text-sm text-gray-500">Or continue with</span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    {/* Google Sign-in */}
                    <button
                        type="button"
                        className="w-full bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 rounded-xl border-2 border-gray-200 flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all"
                    >
                        <Chrome size={20} className="text-red-500" />
                        Sign in with Google
                    </button>
                </form>
            </div>

            <div className="text-center pb-6 pt-5">
                <p className="text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-primary font-semibold hover:underline">
                        Create Account
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginScreen;
