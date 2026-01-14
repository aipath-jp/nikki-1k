import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "server", // サーバーモードに変更
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  // GitHub Pages用の設定は不要になるので、シンプルにします
});
