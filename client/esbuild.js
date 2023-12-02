// esbuild.config.js

import { build } from "esbuild";

build({
  entryPoints: ["src/constant/nav.js"],
  bundle: true,
  outfile: "dist/bundle.js",
  loader: {
    ".js": ".jsx", // Add this line to enable JSX for '.js' files
  },
}).catch(() => process.exit(1));
