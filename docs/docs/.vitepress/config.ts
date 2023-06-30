import { getNavRouter } from "./utils/nav";
import { getSidebarRouter } from "./utils/sidebar";

import { defineConfig } from "vitepress";
import { mdPlugin } from "./config/plugins";

export default defineConfig({
  // refer: https://vitepress.vuejs.org/guide/i18n
  // issue: https://github.com/vuejs/vitepress/issues/1860
  title: "Zview UI",
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      themeConfig: {
        // @ts-ignore
        nav: getNavRouter(),
        // @ts-ignore
        sidebar: getSidebarRouter(),
        lastUpdatedText: "最后更新时间",
        docFooter: {
          prev: "上一篇",
          next: "下一篇",
        },
        socialLinks: [
          { icon: "github", link: "https://github.com/ZXtreme/zview-ui" }
        ],
        outline: [1, 3],
        outlineTitle: "CONTENTS",
        footer: {
          message: "Released under the MIT License.",
          copyright: "Copyright © 2023-present ZXtreme",
        },
      },
    },
  },
  base: process.env.NODE_ENV === "production" ? "/zview-ui/" : "/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/zview-ui/logo.png",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0,user-scalable=no",
      },
    ],
  ],
  lastUpdated: true,
  markdown: {
    // dark-plus vscode
    // css-variables custom
    theme: "css-variables",
    config: (md) => mdPlugin(md),
  },
  async buildEnd(siteConfig) { },
  async transformHtml(code, id, context) { },
  async transformPageData(pageData) { },
});
