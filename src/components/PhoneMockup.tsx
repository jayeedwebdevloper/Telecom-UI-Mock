import React from 'react';
import BottomTabBar from './BottomTabBar';

interface PhoneMockupProps {
    children: React.ReactNode;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ children }) => {
    return (
        <div className="flex justify-center items-center py-8">
            <div className="phone-float relative">
                {/* Phone Frame */}
                <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl" style={{ width: '380px', height: '780px' }}>
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-900 rounded-b-3xl h-7 w-40 z-10"></div>

                    {/* Screen */}
                    <div className="bg-white rounded-[2.5rem] h-full w-full overflow-hidden relative">
                        {/* Status Bar */}
                        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-gray-900/5 to-transparent z-20 flex items-center justify-between px-8 pt-2">
                            <span className="text-xs font-semibold text-gray-700">9:41</span>
                            <div className="flex items-center gap-1">
                                <div className="w-4 h-3 border border-gray-700 rounded-sm relative">
                                    <div className="absolute inset-0.5 bg-gray-700 rounded-sm"></div>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="h-full w-full overflow-y-auto hide-scrollbar pt-12 pb-24 screen-transition">
                            {children}
                        </div>

                        {/* Bottom Tab Bar */}
                        <BottomTabBar />
                    </div>

                    {/* Volume Buttons */}
                    <div className="absolute left-0 top-32 w-1 h-12 bg-gray-800 rounded-l-lg -ml-1"></div>
                    <div className="absolute left-0 top-48 w-1 h-12 bg-gray-800 rounded-l-lg -ml-1"></div>

                    {/* Power Button */}
                    <div className="absolute right-0 top-40 w-1 h-16 bg-gray-800 rounded-r-lg -mr-1"></div>
                </div>
            </div>
        </div>
    );
};

export default PhoneMockup;
