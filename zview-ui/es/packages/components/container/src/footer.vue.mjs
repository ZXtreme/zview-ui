import { defineComponent as n, computed as s, openBlock as l, createElementBlock as c, normalizeStyle as p, unref as a, renderSlot as f } from "vue";
import { FooterProps as m } from "./container.mjs";
const u = {
  name: "ZFooter"
}, h = /* @__PURE__ */ n({
  ...u,
  props: m,
  setup(e) {
    const o = e, t = s(() => ({
      height: o.height
    }));
    return (r, i) => (l(), c("footer", {
      class: "z-footer",
      style: p(a(t))
    }, [
      f(r.$slots, "default")
    ], 4));
  }
});
export {
  h as default
};
