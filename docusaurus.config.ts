import type { Config } from "@docusaurus/types";
const config: Config = {
  title: "Documentation Site - by Athar Kharal, PhD",
  url: "https://yoursite.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "Aria Webworks",
  projectName: "First DocuSaurus Project",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          // routeBasePath: '/', // ← this makes docs the homepage
          sidebarPath: require.resolve("./sidebars.ts"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
export default config;
