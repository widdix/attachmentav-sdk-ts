import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['sdk/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
});
