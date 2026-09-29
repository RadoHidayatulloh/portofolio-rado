// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         // Mengganti font sans bawaan Tailwind menjadi Poppins
//         sans: ["Poppins", "sans-serif"],
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        // Mengganti font sans bawaan Tailwind menjadi Poppins
        sans: ["Poppins", "sans-serif"],
        cursive: ["Satisfy", "cursive"], // Font untuk kata "Plan"
      },
      // Tambahkan bagian spacing di bawah ini
      spacing: {
        "safe-top": "env(safe-area-inset-top)",
      },
    },
  },
  plugins: [],
};
