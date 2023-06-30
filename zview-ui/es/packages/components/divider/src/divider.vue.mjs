import { defineComponent as m, computed as o, openBlock as n, createElementBlock as i, normalizeClass as s, unref as r, normalizeStyle as p, renderSlot as u, createCommentVNode as f } from "vue";
import { DividerProps as v } from "./divider.mjs";
const y = {
  name: "ZDivider"
}, S = /* @__PURE__ */ m({
  ...y,
  props: v,
  setup(d) {
    const e = d, c = o(() => ({
      [`direction--${e.direction}`]: e.direction
    })), l = o(() => ({
      "--border-style": e.borderStyle
    })), a = o(() => ({
      [`content-position--${e.contentPosition}`]: e.contentPosition
    }));
    return (t, C) => (n(), i("div", {
      class: s(["z-divider", r(c)]),
      style: p(r(l))
    }, [
      t.$slots.default && t.direction !== "vertical" ? (n(), i("div", {
        key: 0,
        class: s(["z-divider-content", r(a)])
      }, [
        u(t.$slots, "default")
      ], 2)) : f("", !0)
    ], 6));
  }
});
export {
  S as default
};
