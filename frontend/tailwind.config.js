/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
                bold: ["Inter", "system-ui", "sans-serif"],
            },
            colors: {
                "brand-background": "#EEF2FF", // A lighter lavender
                "brand-background-alt": "#FDF2F8", // A lighter rose
                "brand-surface": "#F8FAFF", // An even lighter off-white/blue
                "brand-primary": "#6366F1", // A lighter, more accessible blue
                "brand-accent": "#F43F5E", // A lighter vibrant pink/red
                "brand-yellow": "#FCD34D", // A lighter golden yellow
                "brand-green": "#34D399",
                "brand-purple": "#A78BFA",
                "text-primary": "#111827",
                "text-secondary": "#4B5563",
                // Neubrutalism color variants for cards and elements (lighter)
                "neubrutalism-blue": "#60A5FA",
                "neubrutalism-pink": "#F472B6",
                "neubrutalism-yellow": "#FDE047",
                "neubrutalism-purple": "#A78BFA",
                "neubrutalism-green": "#4ADE80",
                "neubrutalism-orange": "#FB923C",
                "neubrutalism-red": "#F87171",
            },
            boxShadow: {
                "neubrutalism-sm": "4px 4px 0px #000",
                "neubrutalism-md": "6px 6px 0px #000",
                "neubrutalism-lg": "8px 8px 0px #000",
            },
            keyframes: {
                "fade-in-up": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(10px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                "bubble-float": {
                    "0%": {
                        transform: "translateY(0) translateX(0)",
                        opacity: "0.7",
                    },
                    "50%": {
                        transform: "translateY(-100px) translateX(50px)",
                        opacity: "0.3",
                    },
                    "100%": {
                        transform: "translateY(-200px) translateX(-50px)",
                        opacity: "0",
                    },
                },
                "bubble-float-2": {
                    "0%": {
                        transform: "translateY(0) translateX(0)",
                        opacity: "0.5",
                    },
                    "50%": {
                        transform: "translateY(-150px) translateX(-60px)",
                        opacity: "0.2",
                    },
                    "100%": {
                        transform: "translateY(-300px) translateX(40px)",
                        opacity: "0",
                    },
                },
            },
            animation: {
                "fade-in-up": "fade-in-up 0.5s ease-out",
                "bubble-float": "bubble-float 25s ease-in-out infinite",
                "bubble-float-2": "bubble-float-2 35s ease-in-out infinite",
            },
        },
    },
    plugins: [],
}
