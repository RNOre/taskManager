import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"taskManager",
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/components/Task/createTask/CreateTask.test.tsx',
  },
})
