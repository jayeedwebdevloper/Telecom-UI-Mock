import { ImagePlus, Save, Trash2 } from 'lucide-react';
import { useAppStore } from '../../store/appStore';

const SliderNoticeScreen = () => {
    const { sliderImages, setSliderImages, noticeText, setNoticeText } = useAppStore();

    const onUploadFiles = (files: FileList | null) => {
        if (!files || files.length === 0) return;
        const newUrls: string[] = [];
        for (let i = 0; i < files.length; i++) {
            const f = files.item(i);
            if (!f) continue;
            const url = URL.createObjectURL(f);
            newUrls.push(url);
        }
        if (newUrls.length > 0) {
            setSliderImages([...newUrls, ...sliderImages].slice(0, 6));
        }
    };

    const removeImage = (index: number) => {
        const toRemove = sliderImages[index];
        try { URL.revokeObjectURL(toRemove); } catch { }
        const next = sliderImages.filter((_, i) => i !== index);
        setSliderImages(next);
    };

    return (
        <div className="h-full bg-slate-50 overflow-y-auto">
            <div className="bg-gradient-to-r from-primary to-primary-light p-6 pb-8">
                <h1 className="text-white text-2xl font-bold mb-4">Slider & Notice</h1>
            </div>

            <div className="px-6 -mt-4 pb-6 space-y-4">
                <div className="bg-white rounded-2xl p-5 shadow border border-gray-100">
                    <h3 className="text-gray-900 font-bold mb-3">Slider Images</h3>
                    <div className="flex flex-col gap-3">
                        <label className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-slate-50 border-2 border-gray-200">
                            <span className="text-gray-700">Upload image</span>
                            <div className="bg-secondary hover:bg-green-500 text-white px-4 py-2 rounded-xl font-semibold flex items-center gap-2 whitespace-nowrap text-xs">
                                <ImagePlus size={14} />
                                <span>Choose Files</span>
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                className="hidden"
                                onChange={(e) => onUploadFiles(e.target.files)}
                            />
                        </label>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">Recommended: 1200x500</p>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                        {sliderImages.map((src, i) => (
                            <div key={i} className="relative rounded-xl overflow-hidden border border-gray-200">
                                <img src={src} className="w-full h-24 object-cover" />
                                <button
                                    title="Remove"
                                    onClick={() => removeImage(i)}
                                    className="absolute top-2 right-2 bg-error text-white rounded-full p-2 shadow"
                                >
                                    <Trash2 size={16} />
                                </button>
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
