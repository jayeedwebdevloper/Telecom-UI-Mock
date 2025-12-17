import { Link } from 'react-router-dom';

const SplashScreen = () => {
    return (
        <div className="h-full bg-gradient-to-br from-primary via-primary-light to-info flex flex-col items-center justify-center p-8">
            <div className="text-center animate-pulse">
                <div className="bg-white rounded-full p-8 mb-8 shadow-2xl">
                    LOGO
                </div>
                <h1 className="text-4xl font-bold text-white mb-4">
                    TelePack
                </h1>
                <p className="text-xl text-white/90 mb-2">
                    All SIM Packages in One App
                </p>
                <p className="text-lg text-white/80 bengali-text">
                    সব সিম প্যাকেজ এক অ্যাপে
                </p>
            </div>

            <Link
                to="/onboarding"
                className="mt-12 bg-white text-primary font-semibold py-4 px-12 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
                Get Started
            </Link>
        </div>
    );
};

export default SplashScreen;
