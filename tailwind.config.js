/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // W88 Game brand palette
        primary: '#100E0C', // deep warm charcoal background
        accent: '#FFC933', // vivid gold
        card: '#1C1814', // elevated dark surface
        cta: '#FF8A45', // peach-orange CTA border
        'cta-icon': '#FF5C2B', // hot orange for download icon
      },
    },
  },
  plugins: [],
}
