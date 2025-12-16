import { useParams, useNavigate } from 'react-router-dom';
import { getPackageById, getOperatorInfo } from '../data/packages';
import { Wifi, Phone as PhoneIcon, MessageSquare, Percent, Calendar, ArrowLeft } from 'lucide-react';

const PackageDetailScreen = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const pkg = id ? getPackageById(id) : undefined;

    if (!pkg) {
        return (
            <div className="h-full bg-slate-50 p-6">
                <button onClick={() => navigate(-1)} className="text-primary font-semibold mb-4 flex items-center gap-2">
                    <ArrowLeft size={18} /> Back
                </button>
                <div className="bg-white rounded-2xl p-6 shadow">Package not found.</div>
            </div>
        );
    }

    const op = getOperatorInfo(pkg.operator);

    return (
        <div className="h-full bg-slate-50 overflow-y-auto">
            <div className="bg-gradient-to-r from-primary to-primary-light p-6 pb-8">
                <button onClick={() => navigate(-1)} className="text-white/90 font-semibold flex items-center gap-2 mb-4">
                    <ArrowLeft size={18} /> Back
                </button>
                <div className="flex items-center gap-3">
                    <div className={`${op.color} w-12 h-12 rounded-xl text-white font-bold text-xs flex items-center justify-center`}>{op.logo}</div>
                    <div>
                        <h1 className="text-white text-2xl font-bold">{pkg.name}</h1>
                        <p className="text-white/80 text-sm">{op.name}</p>
                    </div>
                </div>
            </div>

            <div className="p-6 -mt-6 space-y-4">
                <div className="bg-white rounded-2xl p-5 shadow">
                    <div className="flex flex-wrap gap-2">
                        {pkg.dataMB && (
                            <span className="flex items-center gap-1 text-sm bg-info/10 text-info px-3 py-1 rounded-lg font-medium">
                                <Wifi size={14} /> {(pkg.dataMB / 1024) >= 1 ? `${(pkg.dataMB / 1024).toFixed(0)}GB` : `${pkg.dataMB}MB`}
                            </span>
                        )}
                        {pkg.minutes && (
                            <span className="flex items-center gap-1 text-sm bg-secondary/10 text-secondary px-3 py-1 rounded-lg font-medium">
                                <PhoneIcon size={14} /> {pkg.minutes} Min
                            </span>
                        )}
                        {pkg.sms && (
                            <span className="flex items-center gap-1 text-sm bg-primary/10 text-primary px-3 py-1 rounded-lg font-medium">
                                <MessageSquare size={14} /> {pkg.sms} SMS
                            </span>
                        )}
                        {pkg.callRatePaisa && (
                            <span className="flex items-center gap-1 text-sm bg-warning/10 text-warning px-3 py-1 rounded-lg font-medium">
                                <Percent size={14} /> {pkg.callRatePaisa}p/min
                            </span>
                        )}
                        <span className="flex items-center gap-1 text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-lg font-medium">
                            <Calendar size={14} /> {pkg.validity}
                        </span>
                    </div>

                    <div className="mt-4">
                        <p className="text-gray-600">{pkg.description ?? 'No additional description available.'}</p>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow flex items-center justify-between">
                    <div>
                        <p className="text-gray-500 text-sm">Price</p>
                        <p className="text-3xl font-bold text-primary">৳{pkg.price}</p>
                    </div>
                    <button className="bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
                        Buy Now
                    </button>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow">
                    <h3 className="text-gray-900 font-bold mb-3">How to Activate</h3>
                    <ol className="list-decimal ml-5 space-y-1 text-gray-600 text-sm">
                        <li>Select payment method and pay</li>
                        <li>Confirm your order from confirmation screen</li>
                        <li>Package will be activated instantly</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default PackageDetailScreen;
