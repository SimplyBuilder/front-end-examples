// vite.config.js
import { defineConfig } from 'vite';

import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    root: './src',
    base: "./",
    build: {
        manifest: false,
        outDir: '../build',
        minify: 'terser',
        terserOptions: {
            mangle: false,
        }
    },
    optimizeDeps: {
        keepNames: true
    },
    css: {
        postcss: {
            config: './postcss.config.js'
        }
    },
    publicDir: '../static',
    resolve: {
        alias: {
            '@stores': resolve(__dirname, 'src', 'stores'),
            '@components': resolve(__dirname, 'src', 'components'),
            '@styles': resolve(__dirname, 'src', 'styles'),
        },
    },
    server: {
        cors: false,
        open: false
    },
    plugins: []
});