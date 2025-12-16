/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0B3C5D',
                    light: '#1C5D99',
                },
                secondary: {
                    DEFAULT: '#16A34A',
                    light: '#22C55E',
                },
                warning: '#F59E0B',
                error: '#EF4444',
                info: '#06B6D4',
                dark: '#0F172A',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                bengali: ['Noto Sans Bengali', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
