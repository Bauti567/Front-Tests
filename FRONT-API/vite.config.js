import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://bauti567.github.io/<REPO>/"
  plugins: [react()],
})
