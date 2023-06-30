import Theme from "vitepress/theme";
import "./style/vitepress.less";
import "element-plus/dist/index.css";
import "./style/themes.less";
// @ts-ignore
import hpCode from "../home/hp-source-code.vue";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.configure({ showSpinner: true });

import hp from "zview-ui";
import "@zview-plus/theme-chalk";

import { inBrowser } from "vitepress";

const vi = "vi_lang";

function dispatchEventStroage() {
  const signSetItem = localStorage.setItem;
  localStorage.setItem = function (key, val) {
    let setEvent: any = new Event("setItemEvent");
    setEvent.key = key;
    setEvent.newValue = val;
    window.dispatchEvent(setEvent);
    signSetItem.apply(this, arguments);
  };
}

function toggleLang(router: any) {
  /\/en-US\//.test(router.route.path)
    ? localStorage.setItem(vi, "en-US")
    : localStorage.setItem(vi, "zh-CN");
}

export default {
  ...Theme,

  enhanceApp({ app, router }) {
    if (inBrowser) {
      app.use(hp);

      dispatchEventStroage();

      // refer: https://github.com/vuejs/vitepress/issues/1910
      router.onBeforeRouteChange = () => {
        NProgress.start();
      };
      router.onAfterRouteChanged = () => {
        toggleLang(router);
        NProgress.done();
      };
      app.component("HCode", hpCode);
    }
  },
};
