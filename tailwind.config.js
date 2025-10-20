
module.exports = {
    theme: {
        extend: {
            colors: {
                'custom-gray': '#f7fafc',
                'custom-red': '#e53e3e',
            },
        },
    },
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
    ],
    plugins: [require("flowbite/plugin")],
};
