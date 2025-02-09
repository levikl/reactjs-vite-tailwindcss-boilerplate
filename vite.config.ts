import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  // @ts-expect-error look into later
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: '.vitest/setup',
  },
})
