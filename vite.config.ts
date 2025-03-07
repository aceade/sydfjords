import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    // This is needed, or else Vite will try to find image paths (which it wont be able to find because this will be called on the web, not directly)
    // For example <img src="/images/logo.png"> will not work without the code below
    // source: https://stackoverflow.com/a/73641141
    template: {
        transformAssetUrls: {
            includeAbsolute: false,
        },
    },
}),],
  base: "/sydfjords/",
});
