import { useEffect, useState } from 'react';
import { useAppStore } from '../store/appStore';

export default function Slider() {
    const { sliderImages } = useAppStore();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setIndex(prev => (prev + 1) % sliderImages.length), 4000);
        return () => clearInterval(id);
    }, [sliderImages.length]);

    if (sliderImages.length === 0) return null;

    return (
        <div className="relative w-full h-40 rounded-2xl overflow-hidden shadow-lg bg-gray-200">
            {sliderImages.map((src, i) => (
                <img
                    key={i}
                    src={src}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
                />
            ))}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {sliderImages.map((_, i) => (
                    <span key={i} className={`w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/60'}`} />)
                )}
            </div>
        </div>
    );
}
