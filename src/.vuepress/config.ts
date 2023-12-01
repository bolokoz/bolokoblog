import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Boloko Blog",
  description: "hue hue",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
