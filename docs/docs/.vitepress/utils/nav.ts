import { addNavPrefix } from "./route";

const version = "v1.0.0";

const nav = [
  {
    text: "首页",
    activeMatch: "",
    link: "/",
  },
  {
    text: "指南",
    activeMatch: "^/docs/",
    link: "/docs/installation",
  },
  {
    text: "组件库",
    activeMatch: "^/components/",
    link: "/components/button",
  }
];

export const getNavRouter = (langPrefix: string = "/") => {
  return addNavPrefix(langPrefix, nav)
};
