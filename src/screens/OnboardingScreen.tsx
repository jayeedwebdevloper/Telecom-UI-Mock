import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Zap, Shield, ChevronRight } from 'lucide-react';

const OnboardingScreen = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            icon: <ShoppingBag size={80} className="text-primary" />,
            title: 'Buy SIM Packages Easily',
            titleBn: 'সহজে সিম প্যাকেজ কিনুন',
            description: 'Browse and purchase packages from all major operators in Bangladesh',
        },
        {
            icon: <Zap size={80} className="text-warning" />,
            title: 'Auto Balance & Instant Delivery',
            titleBn: 'অটো ব্যালেন্স ও তাৎক্ষণিক ডেলিভারি',
            description: 'Get your packages delivered instantly with automated balance system',
        },
        {
            icon: <Shield size={80} className="text-secondary" />,
            title: 'Secure Payments',
            titleBn: 'নিরাপদ পেমেন্ট',
            description: 'Pay securely with bKash, Nagad, Rocket and more',
        },
    ];

    return (
        <div className="h-full bg-gradient-to-b from-slate-50 to-white flex flex-col">
            <div className="flex-1 flex flex-col items-center justify-center p-8">
                <div className="mb-12 transform transition-all duration-500">
                    {slides[currentSlide].icon}
                </div>

                <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">
                    {slides[currentSlide].title}
                </h2>
                <p className="text-lg text-primary font-medium text-center mb-4 bengali-text">
                    {slides[currentSlide].titleBn}
                </p>
                <p className="text-gray-600 text-center max-w-sm">
                    {slides[currentSlide].description}
                </p>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mb-8">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8 bg-primary' : 'w-2 bg-gray-300'
                            }`}
                    />
                ))}
            </div>

            {/* Navigation */}
            <div className="p-6">
                {currentSlide < slides.length - 1 ? (
                    <button
                        onClick={() => setCurrentSlide(currentSlide + 1)}
                        className="w-full bg-primary text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                    >
                        Next <ChevronRight size={20} />
                    </button>
                ) : (
                    <Link
                        to="/login"
                        className="w-full bg-primary text-white font-semibold py-4 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                    >
                        Get Started
                    </Link>
                )}
                <Link
                    to="/login"
                    className="block text-center text-gray-500 mt-4 hover:text-primary transition-colors"
                >
                    Skip
                </Link>
            </div>
        </div>
    );
};

export default OnboardingScreen;
