// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@tailwindcss/vite";
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.cvera.app',
    vite: {
    plugins: [tailwindcss()],
  },
});
