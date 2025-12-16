import { ImagePlus, Save } from 'lucide-react';
import { useState } from 'react';
import { useAppStore } from '../../store/appStore';

const SliderNoticeScreen = () => {
    const { sliderImages, setSliderImages, noticeText, setNoticeText } = useAppStore();
    const [url, setUrl] = useState('');

    const addImage = () => {
        if (!url.trim()) return;
        setSliderImages([url.trim(), ...sliderImages].slice(0, 6));
        setUrl('');
    };

    return (
        <div className="h-full bg-slate-50 overflow-y-auto">
            <div className="bg-gradient-to-r from-primary to-primary-light p-6 pb-8">
                <h1 className="text-white text-2xl font-bold mb-4">Slider & Notice</h1>
            </div>

            <div className="px-6 -mt-4 pb-6 space-y-4">
                <div className="bg-white rounded-2xl p-5 shadow border border-gray-100">
                    <h3 className="text-gray-900 font-bold mb-3">Slider Images</h3>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <input value={url} onChange={(e) => setUrl(e.target.value)} className="flex-1 px-4 py-3 rounded-xl bg-slate-50 text-gray-900 border-2 border-gray-200 focus:border-secondary focus:outline-none" placeholder="Paste image URL (https://...)" />
                        <button onClick={addImage} className="bg-secondary hover:bg-green-500 text-white px-4 py-3 rounded-xl font-semibold flex items-center gap-2 whitespace-nowrap"><ImagePlus size={18} /> Add Image</button>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">Recommended: 1200x500</p>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                        {sliderImages.map((src, i) => (
                            <div key={i} className="relative rounded-xl overflow-hidden border border-gray-200">
                                <img src={src} className="w-full h-24 object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow border border-gray-100">
                    <h3 className="text-gray-900 font-bold mb-3">Floating Notice</h3>
                    <input value={noticeText} onChange={(e) => setNoticeText(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 text-gray-900 border-2 border-gray-200 focus:border-secondary focus:outline-none" placeholder="Enter notice text..." />
                    <button className="mt-4 bg-secondary hover:bg-green-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2"><Save size={18} /> Save</button>
                </div>
            </div>
        </div>
    );
};

export default SliderNoticeScreen;
