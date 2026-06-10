export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Archivo', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Clash Display', 'sans-serif']
      },
      colors: {
        pitch: '#06130f',
        limewave: '#b6ff5c',
        vinyl: '#111827'
      },
      boxShadow: {
        glow: '0 0 40px rgba(182, 255, 92, 0.18)'
      }
    }
  },
  plugins: []
};
