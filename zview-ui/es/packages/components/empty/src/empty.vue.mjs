import { defineComponent as d, computed as r, openBlock as t, createElementBlock as o, createElementVNode as n, normalizeStyle as l, unref as m, renderSlot as i, createVNode as y, toDisplayString as u, createCommentVNode as f } from "vue";
import g from "./empty-img.vue.mjs";
import { EmptyProps as _ } from "./empty.mjs";
const h = { class: "z-empty" }, k = ["src"], z = { class: "z-empty-description" }, S = { key: 1 }, $ = {
  key: 0,
  class: "z-empty-bottom"
}, E = {
  name: "ZEmpty"
}, C = /* @__PURE__ */ d({
  ...E,
  props: _,
  setup(p) {
    const s = p, a = r(() => s.description || "description"), c = r(() => ({
      width: s.imageSize ? `${s.imageSize}px` : ""
    }));
    return (e, v) => (t(), o("div", h, [
      n("div", {
        class: "z-empty-image",
        style: l(m(c))
      }, [
        e.image ? (t(), o("img", {
          key: 0,
          src: e.image,
          ondragstart: "return false"
        }, null, 8, k)) : i(e.$slots, "image", { key: 1 }, () => [
          y(g)
        ])
      ], 4),
      n("div", z, [
        e.$slots.description ? i(e.$slots, "description", { key: 0 }) : (t(), o("p", S, u(m(a)), 1))
      ]),
      e.$slots.default ? (t(), o("div", $, [
        i(e.$slots, "default")
      ])) : f("", !0)
    ]));
  }
});
export {
  C as default
};
