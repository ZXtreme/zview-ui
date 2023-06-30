import { defineComponent as n, computed as s, openBlock as a, createElementBlock as l, normalizeStyle as c, unref as p, renderSlot as d } from "vue";
import { HeaderProps as m } from "./container.mjs";
const u = {
  name: "ZHeader"
}, _ = /* @__PURE__ */ n({
  ...u,
  props: m,
  setup(e) {
    const t = e, r = s(() => ({
      height: t.height
    }));
    return (o, f) => (a(), l("header", {
      class: "z-header",
      style: c(p(r))
    }, [
      d(o.$slots, "default")
    ], 4));
  }
});
export {
  _ as default
};
