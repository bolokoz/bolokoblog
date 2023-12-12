import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Boloko Blog",
  description: "Anti Alzheimer",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
