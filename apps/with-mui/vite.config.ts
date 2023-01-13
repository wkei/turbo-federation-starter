import react from "@vitejs/plugin-react";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import federation from "@originjs/vite-plugin-federation";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig(({ mode }) => {
  const isLive = mode === "live";
  const isDev = mode === "development";

  return {
    base: isLive ? "http://localhost:5002/" : isDev ? "/with-mui/" : "/",
    server: {
      port: 5002,
    },
    plugins: [
      react(),
      splitVendorChunkPlugin(),
      cssInjectedByJsPlugin(),
      federation({
        name: "with-mui",
        filename: "remoteEntry.js",
        exposes: {
          "./App": {
            import: "./src/App",
            name: "test",
          },
        },
        shared: ["react", "react-dom", "react-router-dom"],
      }),
    ],
    build: {
      watch: isLive ? {} : null,
      target: "esnext",
    },
  };
});
