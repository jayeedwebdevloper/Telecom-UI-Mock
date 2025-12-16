import { Link } from 'react-router-dom';
import { Plus, Package, History, RefreshCw, User, ChevronRight } from 'lucide-react';
import Slider from '../components/Slider';
import NoticeTicker from '../components/NoticeTicker';

const HomeScreen = () => {
    const operators = [
        { name: 'Grameenphone', color: 'bg-blue-500', logo: '📱' },
        { name: 'Robi', color: 'bg-red-500', logo: '📱' },
        { name: 'Banglalink', color: 'bg-orange-500', logo: '📱' },
        { name: 'Airtel', color: 'bg-red-600', logo: '📱' },
        { name: 'Teletalk', color: 'bg-green-600', logo: '📱' },
    ];

    const quickFeatures = [
        { icon: <Package size={28} />, label: 'Packages', link: '/packages', color: 'bg-primary' },
        { icon: <Plus size={28} />, label: 'Add Balance', link: '/add-balance', color: 'bg-secondary' },
        { icon: <History size={28} />, label: 'Orders', link: '/orders', color: 'bg-info' },
        { icon: <RefreshCw size={28} />, label: 'Refund', link: '/refund', color: 'bg-warning' },
    ];

    return (
        <div className="h-full bg-gradient-to-b from-primary to-primary-light overflow-y-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary via-primary-light to-info p-6 pb-8 rounded-b-3xl shadow-lg">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h2 className="text-white text-2xl font-bold mb-1">Hello, Jayeed Hossian!</h2>
                        <p className="text-white/80">Welcome back</p>
                    </div>
                    <Link to="/profile" className="bg-white/20 p-3 rounded-full">
                        <User className="text-white" size={20} />
                    </Link>
                </div>

                {/* Slider */}
                <div className="mb-4">
                    <Slider />
                    <NoticeTicker />
                </div>

                {/* Wallet Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-white/20">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-white/80 text-sm mb-1">Wallet Balance</p>
                            <h3 className="text-white text-3xl font-bold">৳ 1,250</h3>
                        </div>
                        <Link
                            to="/add-balance"
                            className="bg-white text-primary rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
                        >
                            <Plus size={24} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="bg-slate-50 min-h-screen -mt-4 rounded-t-3xl">
                {/* Operators Section */}
                <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Select Operator</h3>
                    <div className="flex gap-3 overflow-x-auto pb-2">
                        {operators.map((operator, index) => (
                            <Link
                                key={index}
                                to="/packages"
                                className="flex-shrink-0 bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all min-w-[120px]"
                            >
                                <div className={`${operator.color} w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-2 mx-auto`}>
                                    {operator.logo}
                                </div>
                                <p className="text-center text-sm font-medium text-gray-700">{operator.name}</p>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Quick Features */}
                <div className="px-6 pb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {quickFeatures.map((feature, index) => (
                            <Link
                                key={index}
                                to={feature.link}
                                className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all"
                            >
                                <div className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center text-white mb-3`}>
                                    {feature.icon}
                                </div>
                                <p className="text-gray-900 font-semibold">{feature.label}</p>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Recent Offers */}
                <div className="px-6 pb-20">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold text-gray-900">Recent Offers</h3>
                        <Link to="/packages" className="text-primary text-sm font-medium flex items-center gap-1">
                            View All <ChevronRight size={16} />
                        </Link>
                    </div>
                    <div className="space-y-3">
                        <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-5 text-white shadow-lg">
                            <h4 className="font-bold text-lg mb-1">2GB Internet</h4>
                            <p className="text-sm text-white/90 mb-3">7 Days Validity</p>
                            <div className="flex justify-between items-center">
                                <span className="text-2xl font-bold">৳ 50</span>
                                <button className="bg-white text-primary font-semibold px-6 py-2 rounded-full text-sm hover:shadow-xl transition-all">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeScreen;
