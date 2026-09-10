<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
=======
import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
>>>>>>> fd5248e0284d42a66546bc74d20cac8867008dc1

export default defineConfig({
<<<<<<< HEAD
  plugins: [react(), tailwindcss()],
=======
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
>>>>>>> fd5248e0284d42a66546bc74d20cac8867008dc1
  server: {
    port: 3000,
  },
})
