import typescript from '@rollup/plugin-typescript';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [],
      plugins: [
        typescript({
          sourceMap: false,
          declaration: true,
          outDir: 'dist',
        }),
      ],
    },
  },
});
