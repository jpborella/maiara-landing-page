import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/maiara/',
  plugins: [react()],
  server: {
    port: 5173,
  },
});
