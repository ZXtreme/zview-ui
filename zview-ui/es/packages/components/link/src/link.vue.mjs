import { defineComponent as l, useAttrs as a, computed as p, openBlock as c, createElementBlock as i, mergeProps as d, unref as s, renderSlot as u } from "vue";
import { LinkProps as m } from "./link.mjs";
const f = {
  name: "ZLink"
}, b = /* @__PURE__ */ l({
  ...f,
  props: m,
  setup(t) {
    const e = t, n = a(), r = p(() => ({
      [`z-link--${e.type}`]: e.type,
      "is-disabled": e.disabled,
      "is-underline": e.underline
    }));
    return (o, _) => (c(), i("a", d({ class: "z-link" }, s(n), { class: s(r) }), [
      u(o.$slots, "default")
    ], 16));
  }
});
export {
  b as default
};
