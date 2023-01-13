import react from "@vitejs/plugin-react";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import federation from "@originjs/vite-plugin-federation";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig(({ mode }) => {
  const isLive = mode === "live";
  const isDev = mode === "development";

  return {
    base: isLive ? "http://localhost:5003/" : isDev ? "/with-antd/" : "/",
    server: {
      port: 5003,
    },
    plugins: [
      react(),
      splitVendorChunkPlugin(),
      cssInjectedByJsPlugin(),
      federation({
        name: "with-antd",
        filename: "remoteEntry.js",
        exposes: {
          "./App": "./src/App",
        },
        shared: {
          react: {
            version: "18.2.0",
          },
          "react-dom": {
            version: "18.2.0",
          },
          "react-router-dom": {
            version: "6.4.2",
          },
        },
      }),
    ],
    build: {
      watch: isLive ? {} : null,
      minify: false,
      target: "esnext",
    },
  };
});
