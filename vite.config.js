import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";



const exercisePath = "C:\\Users\\maojr\\OneDrive\\Pulpit\\pokes 2";

export default defineConfig({
  root: exercisePath,
  server: {
    port: 3000,
  },
  plugins: [react()],
});
