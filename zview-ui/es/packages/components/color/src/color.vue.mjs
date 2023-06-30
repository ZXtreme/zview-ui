import { defineComponent as a, openBlock as e, createElementBlock as t, createElementVNode as r, normalizeStyle as n, toDisplayString as l, Fragment as i, renderList as _, createCommentVNode as d } from "vue";
import { ColorProps as m } from "./color.mjs";
const p = { class: "z-color" }, h = { class: "z-color__header--title" }, u = { class: "z-color__header--color" }, f = {
  key: 0,
  class: "z-color__footer"
}, g = {
  name: "ZColor"
}, C = /* @__PURE__ */ a({
  ...g,
  props: m,
  setup(z) {
    return (o, k) => (e(), t("div", p, [
      r("div", {
        class: "z-color__header",
        style: n([
          { backgroundColor: o.main },
          o.content.length === 0 ? "height: 112px" : ""
        ])
      }, [
        r("div", h, l(o.mainTitle), 1),
        r("div", u, l(o.main), 1)
      ], 4),
      o.content.length ? (e(), t("div", f, [
        (e(!0), t(i, null, _(o.content, (s, c) => (e(), t("div", {
          class: "z-color__footer--item",
          key: c,
          style: n({ backgroundColor: s })
        }, null, 4))), 128))
      ])) : d("", !0)
    ]));
  }
});
export {
  C as default
};
