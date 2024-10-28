import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'

import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        dts({
            tsconfigPath: './tsconfig.app.json',
            rollupTypes: true
        }),
        vue(),
        vueDevTools(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        lib: {
            entry: {
                'index': resolve(__dirname, "src/index.ts"),
                'composables': resolve(__dirname, "src/composables/index.ts"),
                'directives': resolve(__dirname, "src/directives/index.ts"),
                'plugin': resolve(__dirname, "src/plugins/curseur.ts"),
            },
            name: "CurseurVif",
            formats: ['es', 'cjs'],
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue",
                },
            },
        },
        minify: true,
        cssMinify: true,
    },
})
