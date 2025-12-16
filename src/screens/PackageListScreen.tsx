import { useMemo, useState } from 'react';
import { Search, Wifi, Phone as PhoneIcon, Calendar, Tag, MessageSquare, Percent } from 'lucide-react';
import { Link } from 'react-router-dom';
import { OPERATORS, PACKAGES, getOperatorInfo } from '../data/packages';

const PackageListScreen = () => {
    const [selectedOperator, setSelectedOperator] = useState(OPERATORS[0].id);
    const [query, setQuery] = useState('');
    const [typeFilters, setTypeFilters] = useState<Set<string>>(new Set());

    const toggleType = (t: string) => {
        setTypeFilters(prev => {
            const n = new Set(prev);
            if (n.has(t)) n.delete(t); else n.add(t);
            return n;
        });
    };

    const filtered = useMemo(() => {
        return PACKAGES.filter(p => {
            if (selectedOperator && p.operator !== selectedOperator) return false;
            if (typeFilters.size > 0 && !typeFilters.has(p.type)) return false;
            const hay = `${p.name} ${p.type} ${p.validity} ${p.price} ${p.dataMB ?? ''} ${p.minutes ?? ''} ${p.sms ?? ''} ${p.callRatePaisa ?? ''}`.toLowerCase();
            return hay.includes(query.toLowerCase());
        });
    }, [selectedOperator, query, typeFilters]);

    return (
        <div className="h-full bg-slate-50 overflow-y-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary-light p-6 pb-8 sticky top-0 z-10">
                <h1 className="text-white text-2xl font-bold mb-4">Packages</h1>

                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        type="text"
                        placeholder="Search name, data, minutes, sms, price..."
                        className="w-full pl-12 pr-4 py-3 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                </div>
            </div>

            {/* Operator Tabs */}
            <div className="sticky top-32 bg-white px-6 py-4 shadow-md z-10">
                <div className="flex gap-2 overflow-x-auto mb-3">
                    {OPERATORS.map((operator) => (
                        <button
                            key={operator.id}
                            onClick={() => setSelectedOperator(operator.id)}
                            className={`flex-shrink-0 px-3 py-2 rounded-xl font-semibold transition-all flex items-center gap-2 ${selectedOperator === operator.id
                                ? `${operator.color} text-white shadow-lg`
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold bg-white/20`}>{operator.logo}</span>
                            {operator.name}
                        </button>
                    ))}
                </div>
                <div className="flex gap-2 overflow-x-auto">
                    {[
                        { id: 'internet', label: 'Internet', icon: <Wifi size={14} /> },
                        { id: 'minutes', label: 'Minutes', icon: <PhoneIcon size={14} /> },
                        { id: 'sms', label: 'SMS', icon: <MessageSquare size={14} /> },
                        { id: 'combo', label: 'Combo', icon: <Tag size={14} /> },
                        { id: 'callRate', label: 'Call Rate', icon: <Percent size={14} /> },
                    ].map(f => (
                        <button
                            key={f.id}
                            onClick={() => toggleType(f.id)}
                            className={`flex-shrink-0 px-3 py-2 rounded-full text-sm font-medium border ${typeFilters.has(f.id) ? 'bg-primary text-white border-primary' : 'bg-white text-gray-700 border-gray-200'} flex items-center gap-1`}
                        >
                            {f.icon}
                            {f.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Package List */}
            <div className="p-6 space-y-4 pb-20">
                {filtered.map((pkg) => {
                    const op = getOperatorInfo(pkg.operator);
                    return (
                        <Link
                            to={`/packages/${pkg.id}`}
                            key={pkg.id}
                            className="block bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all hover:-translate-y-0.5"
                        >
                            <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center gap-3">
                                    <div className={`${op.color} w-10 h-10 rounded-xl text-white font-bold text-xs flex items-center justify-center`}>{op.logo}</div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">{pkg.name}</h3>
                                        <p className="text-xs text-gray-500">{op.name}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-primary">৳{pkg.price}</div>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {pkg.dataMB && (
                                    <span className="flex items-center gap-1 text-sm bg-info/10 text-info px-3 py-1 rounded-lg font-medium">
                                        <Wifi size={14} />
                                        {(pkg.dataMB / 1024) >= 1 ? `${(pkg.dataMB / 1024).toFixed(0)}GB` : `${pkg.dataMB}MB`}
                                    </span>
                                )}
                                {pkg.minutes && (
                                    <span className="flex items-center gap-1 text-sm bg-secondary/10 text-secondary px-3 py-1 rounded-lg font-medium">
                                        <PhoneIcon size={14} />
                                        {pkg.minutes} Min
                                    </span>
                                )}
                                {pkg.sms && (
                                    <span className="flex items-center gap-1 text-sm bg-primary/10 text-primary px-3 py-1 rounded-lg font-medium">
                                        <MessageSquare size={14} />
                                        {pkg.sms} SMS
                                    </span>
                                )}
                                {pkg.callRatePaisa && (
                                    <span className="flex items-center gap-1 text-sm bg-warning/10 text-warning px-3 py-1 rounded-lg font-medium">
                                        <Percent size={14} />
                                        {pkg.callRatePaisa}p/min
                                    </span>
                                )}
                                <span className="flex items-center gap-1 text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-lg font-medium">
                                    <Calendar size={14} />
                                    {pkg.validity}
                                </span>
                            </div>
                        </Link>
                    );
                })}
                {filtered.length === 0 && (
                    <div className="text-center text-gray-500 py-12">No packages match your filters</div>
                )}
            </div>
        </div>
    );
};

export default PackageListScreen;
