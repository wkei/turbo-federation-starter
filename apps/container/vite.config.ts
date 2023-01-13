import react from "@vitejs/plugin-react";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  const isLive = mode === "live";

  return {
    server: {
      port: 5000,
    },
    plugins: [
      react(),
      splitVendorChunkPlugin(),
      federation({
        name: "container",
        filename: "container.js",
        remotes: {
          subapp: `${
            isLive ? "http://localhost:5001/assets" : "/subapp"
          }/remoteEntry.js`,
          "with-mui": `${
            isLive ? "http://localhost:5002/assets" : "/with-mui"
          }/remoteEntry.js`,
          "with-antd": `${
            isLive ? "http://localhost:5003/assets" : "/with-antd"
          }/remoteEntry.js`,
        },
        // shared: ["react", "react-dom", "react-router-dom"],
        shared: {
          react: {
            requiredVersion: "18.2.0",
          },
          "react-dom": {
            requiredVersion: "18.2.0",
          },
          "react-router-dom": {
            requiredVersion: "6.4.2",
          },
        },
      }),
    ],
    build: {
      watch: isLive ? {} : null,
      target: "esnext",
    },
  };
});
