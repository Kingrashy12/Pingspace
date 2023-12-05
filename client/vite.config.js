// import legacy from "@vitejs/plugin-legacy";
import solid from "solid-start/vite";
// import imagemin from "unplugin-imagemin/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    solid({
      ssr: true,
    }),
    // legacy({
    //   targets: ["defaults", "not IE 11"],
    // }),
    // imagemin(),
  ],
});
