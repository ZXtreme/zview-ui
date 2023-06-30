import { defineComponent as h, computed as i, openBlock as s, createElementBlock as a, normalizeClass as m, unref as p, renderSlot as o, createTextVNode as d, toDisplayString as t, createCommentVNode as l, createElementVNode as u, normalizeStyle as y } from "vue";
import { cardProps as f } from "./card.mjs";
const z = {
  key: 0,
  class: "z-card-header"
}, $ = {
  key: 1,
  class: "z-card-handle"
}, C = {
  name: "ZCard"
}, w = /* @__PURE__ */ h({
  ...C,
  props: f,
  setup(n) {
    const r = n, c = i(() => ({
      [`z-card-shadow--${r.shadow}`]: r.shadow
    }));
    return (e, k) => (s(), a("div", {
      class: m(["z-card", p(c)])
    }, [
      e.$slots.header || e.header ? (s(), a("div", z, [
        o(e.$slots, "header", {}, () => [
          d(t(e.header), 1)
        ])
      ])) : l("", !0),
      u("div", {
        class: "z-card-body",
        style: y(e.bodyStyle)
      }, [
        o(e.$slots, "default")
      ], 4),
      e.$slots.handle || e.handle ? (s(), a("div", $, [
        o(e.$slots, "handle", {}, () => [
          d(t(e.handle), 1)
        ])
      ])) : l("", !0)
    ], 2));
  }
});
export {
  w as default
};
