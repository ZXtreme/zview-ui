import { defineComponent as r, computed as n, openBlock as l, createElementBlock as a, normalizeStyle as c, unref as d, renderSlot as p } from "vue";
import { AsideProps as i } from "./container.mjs";
const m = {
  name: "ZAside"
}, h = /* @__PURE__ */ r({
  ...m,
  props: i,
  setup(e) {
    const t = e, o = n(() => ({
      width: t.width
    }));
    return (s, u) => (l(), a("aside", {
      class: "z-aside",
      style: c(d(o))
    }, [
      p(s.$slots, "default")
    ], 4));
  }
});
export {
  h as default
};
