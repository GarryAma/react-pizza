import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import tailwindcss from "@tailwindcss/vite";

// Tidak perlu @tailwindcss/vite di sini
export default defineConfig({
  plugins: [react(), eslint(), tailwindcss()],
});
