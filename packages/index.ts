import { App } from "vue";
export * from "@zview-plus/components";
import components from "@zview-plus/components";

export default {
  install: (app: App) => {
    // @ts-ignore
    components.forEach((comp) => app.use(comp));
  },
};