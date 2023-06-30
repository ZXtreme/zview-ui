import { defineComponent as o, provide as t, openBlock as s, createElementBlock as c, renderSlot as p } from "vue";
import { BreadcrumbProps as n } from "./breadcrumb.mjs";
const a = { class: "z-breadcrumb" }, d = {
  name: "ZBreadcrumb"
}, f = /* @__PURE__ */ o({
  ...d,
  props: n,
  setup(r) {
    return t("breadcrumbProps", r), (e, u) => (s(), c("div", a, [
      p(e.$slots, "default")
    ]));
  }
});
export {
  f as default
};
