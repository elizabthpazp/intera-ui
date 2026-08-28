/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./dist/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@elizabthpazp/intera-ui/dist/**/*.{js,ts,jsx,tsx}"
  ],
  // Para la build aislada: mantenemos preflight false pero el archivo aislado incluye manualmente las variables --tw-* mínimas
  // Cambiado a true temporalmente para que el playground y la librería generen estilos visibles sin configuración extra.
  // Si necesitas versión 100% aislada sin reset de html/body, usa `src/globals.isolated.css` + config preflight:false y añade tu propio reset.
  corePlugins: {
    preflight: true,
  },
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
      },
    },
  },
  plugins: [],
};
