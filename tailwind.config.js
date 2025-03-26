export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            colors: {
                primary: {
                    50: '#f5f0ff',
                    100: '#ece3fe',
                    200: '#dac8fd',
                    300: '#c3a1fb',
                    400: '#aa72f7',
                    500: '#8f47f0',
                    600: '#7e31e5',
                    700: '#6b25cc',
                    800: '#5a22a7',
                    900: '#4c1e86',
                    950: '#2d115a',
                },
                secondary: {
                    50: '#f2fbfa',
                    100: '#d3f4f1',
                    200: '#a8e9e3',
                    300: '#72d6d2',
                    400: '#40b9ba',
                    500: '#299a9e',
                    600: '#1f7a7f',
                    700: '#1c6268',
                    800: '#1a5054',
                    900: '#1a4348',
                    950: '#0a2629',
                },
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'slide-down': 'slideDown 0.3s ease-out',
                'scale-up': 'scaleUp 0.3s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleUp: {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
        },
    },
    plugins: [
        require('tailwindcss-animate'),
    ],
};