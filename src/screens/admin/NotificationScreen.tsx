import { Image, Send } from 'lucide-react';

const NotificationScreen = () => {
    return (
        <div className="h-full bg-slate-50 overflow-y-auto">
            <div className="bg-gradient-to-r from-primary to-primary-light p-6 pb-8">
                <h1 className="text-white text-2xl font-bold mb-4">Push Notifications</h1>
            </div>

            <div className="px-6 -mt-4 pb-6 space-y-4">
                <div className="bg-white rounded-2xl p-5 shadow border border-gray-100">
                    <label className="block text-gray-700 text-sm mb-2">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 text-gray-900 border-2 border-gray-200 focus:border-secondary focus:outline-none resize-none" placeholder="Enter notification text..." />

                    <div className="flex items-center justify-between mt-4">
                        <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-4 py-3 rounded-xl flex items-center gap-2"><Image size={18} /> Upload Image</button>
                        <button className="bg-secondary hover:bg-green-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2"><Send size={18} /> Send Notification</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotificationScreen;
