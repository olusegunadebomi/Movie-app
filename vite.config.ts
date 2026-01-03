import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Use base that matches GitHub Pages URL (homepage). Adjust if you host elsewhere.
export default defineConfig({
  base: "/entertainment-web-app/",
  plugins: [react()],
});
