import { useState } from 'react';
import { CheckCircle, Clock, XCircle } from 'lucide-react';

const AddBalanceScreen = () => {
    const [selectedMethod, setSelectedMethod] = useState('bkash');
    const [amount, setAmount] = useState('');
    const [transactionId, setTransactionId] = useState('');

    const paymentMethods = [
        { id: 'bkash', name: 'bKash', color: 'bg-pink-600', number: '01712345678' },
        { id: 'nagad', name: 'Nagad', color: 'bg-orange-500', number: '01812345678' },
        { id: 'rocket', name: 'Rocket', color: 'bg-purple-600', number: '01912345678' },
    ];

    const recentTransactions = [
        { id: 'TRX001', amount: 500, status: 'success', date: '2 hours ago' },
        { id: 'TRX002', amount: 300, status: 'pending', date: '1 day ago' },
        { id: 'TRX003', amount: 200, status: 'cancelled', date: '3 days ago' },
    ];

    return (
        <div className="h-full bg-slate-50 overflow-y-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary-light p-6 pb-8">
                <h1 className="text-white text-2xl font-bold mb-1">Add Balance</h1>
                <p className="text-white/80">Auto balance top-up</p>
                <p className="text-white/80 bengali-text text-sm">অটো ব্যালেন্স যোগ করুন</p>
            </div>

            <div className="px-6 -mt-4 pb-6">
                {/* Payment Methods */}
                <div className="bg-white rounded-2xl p-5 shadow-lg mb-6">
                    <h3 className="text-gray-900 font-bold mb-4">Select Payment Method</h3>
                    <div className="space-y-3">
                        {paymentMethods.map((method) => (
                            <button
                                key={method.id}
                                onClick={() => setSelectedMethod(method.id)}
                                className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${selectedMethod === method.id
                                    ? 'border-primary bg-primary/5'
                                    : 'border-gray-200 hover:border-primary/50'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`${method.color} w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold`}>
                                        {method.name[0]}
                                    </div>
                                    <div className="text-left">
                                        <p className="font-semibold text-gray-900">{method.name}</p>
                                        <p className="text-sm text-gray-500">{method.number}</p>
                                    </div>
                                </div>
                                <div className={`w-5 h-5 rounded-full border-2 ${selectedMethod === method.id
                                    ? 'border-primary bg-primary'
                                    : 'border-gray-300'
                                    }`}>
                                    {selectedMethod === method.id && (
                                        <CheckCircle className="text-white" size={16} />
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Amount Input */}
                <div className="bg-white rounded-2xl p-5 shadow-lg mb-6">
                    <h3 className="text-gray-900 font-bold mb-4">Enter Amount</h3>
                    <div className="relative mb-4">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg font-bold">৳</span>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="0"
                            className="w-full pl-10 pr-4 py-4 text-2xl font-bold rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        {[100, 200, 500, 1000, 2000, 5000].map((preset) => (
                            <button
                                key={preset}
                                onClick={() => setAmount(preset.toString())}
                                className="py-2 px-4 bg-slate-100 hover:bg-primary hover:text-white rounded-lg font-medium transition-colors"
                            >
                                ৳{preset}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Transaction ID */}
                <div className="bg-white rounded-2xl p-5 shadow-lg mb-6">
                    <h3 className="text-gray-900 font-bold mb-4">Transaction ID</h3>
                    <input
                        type="text"
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                        placeholder="Enter transaction ID"
                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                    />
                    <p className="text-xs text-gray-500 mt-2">Enter the transaction ID from your payment app</p>
                </div>

                {/* Submit Button */}
                <button className="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                    Submit Request
                </button>

                {/* Recent Transactions */}
                <div className="mt-6">
                    <h3 className="text-gray-900 font-bold mb-4">Recent Transactions</h3>
                    <div className="space-y-3">
                        {recentTransactions.map((tx) => (
                            <div key={tx.id} className="bg-white rounded-xl p-4 shadow-md flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.status === 'success' ? 'bg-secondary/20' :
                                        tx.status === 'pending' ? 'bg-warning/20' :
                                            'bg-error/20'
                                        }`}>
                                        {tx.status === 'success' ? <CheckCircle className="text-secondary" size={20} /> :
                                            tx.status === 'pending' ? <Clock className="text-warning" size={20} /> :
                                                <XCircle className="text-error" size={20} />}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">{tx.id}</p>
                                        <p className="text-sm text-gray-500">{tx.date}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-gray-900">৳{tx.amount}</p>
                                    <span className={`text-xs font-medium ${tx.status === 'success' ? 'text-secondary' :
                                        tx.status === 'pending' ? 'text-warning' :
                                            'text-error'
                                        }`}>
                                        {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBalanceScreen;
