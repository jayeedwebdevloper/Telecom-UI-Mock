import React, { createContext, useContext, useMemo, useState } from 'react';

type AppStoreState = {
    sliderImages: string[];
    noticeText: string;
    setSliderImages: (imgs: string[]) => void;
    setNoticeText: (t: string) => void;
};

const defaultImages = [
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80&auto=format&fit=crop'
];

const AppStoreContext = createContext<AppStoreState | null>(null);

export function AppStoreProvider({ children }: { children: React.ReactNode }) {
    const [sliderImages, setSliderImages] = useState<string[]>(defaultImages);
    const [noticeText, setNoticeText] = useState<string>('Special Offer: 2GB at ৳50 • Auto Balance • Secure Payments');

    const value = useMemo(() => ({ sliderImages, noticeText, setSliderImages, setNoticeText }), [sliderImages, noticeText]);

    return <AppStoreContext.Provider value={value}>{children}</AppStoreContext.Provider>;
}

export function useAppStore() {
    const ctx = useContext(AppStoreContext);
    if (!ctx) throw new Error('useAppStore must be used within AppStoreProvider');
    return ctx;
}
