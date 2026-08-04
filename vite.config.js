import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  server: {
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "https://afritek-mdr1.vercel.app",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, "/api/v1/auth"),
        // Add these options to handle CORS better
        headers: {
          Origin: "https://afritek-mdr1.vercel.app",
        },
        configure: (proxy) => {
          proxy.on("error", (err) => {
            console.log("Proxy error:", err);
          });
          proxy.on("proxyReq", (proxyReq, req) => {
            // Remove problematic headers
            proxyReq.removeHeader("Origin");
            proxyReq.removeHeader("Referer");
            console.log(
              "🔄 Proxying:",
              req.method,
              req.url,
              "→",
              proxyReq.path,
            );
          });
          proxy.on("proxyRes", (proxyRes, req) => {
            console.log("✅ Proxy response:", proxyRes.statusCode, req.url);
          });
        },
      },
    },
  },
});
