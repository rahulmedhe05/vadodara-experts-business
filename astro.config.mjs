import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [
    react(),
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': __dirname,
        'next/link': path.resolve(__dirname, './components/NextLink.tsx'),
        'next/image': path.resolve(__dirname, './components/NextImage.tsx'),
        'next/navigation': path.resolve(__dirname, './components/NextNavigation.tsx'),
      },
    },
  },
});
