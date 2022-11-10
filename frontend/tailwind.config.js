/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    daisyui: {
        themes: [
            {
                demo: {
                    primary: '#0a8bdd',
                    secondary: '#fff',
                    accent: '#37CDBE',
                    neutral: '#fff',
                    'base-100': '#FFFFFF',
                    info: '#3ABFF8',
                    success: '#36D399',
                    warning: '#FBBD23',
                    error: '#F87272',
                },
            },
        ],
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
