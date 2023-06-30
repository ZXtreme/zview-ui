import { defineComponent as d, computed as m, openBlock as t, createElementBlock as s, createElementVNode as n, renderSlot as l, createVNode as p, unref as i, normalizeClass as f, toDisplayString as u, createCommentVNode as r } from "vue";
import { ResultProps as $ } from "./result.mjs";
import z from "../../icon/index.mjs";
const b = { class: "z-result" }, h = {
  key: 0,
  class: "z-result-title"
}, k = {
  key: 1,
  class: "z-result-sub-title"
}, v = {
  key: 2,
  class: "z-result-extra"
}, y = {
  name: "ZResult"
}, B = /* @__PURE__ */ d({
  ...y,
  props: $,
  setup(a) {
    const o = a, c = m(() => ({
      [`z-result--${o.icon}`]: o.icon
    }));
    return (e, _) => (t(), s("div", b, [
      n("div", null, [
        l(e.$slots, "icon", {}, () => [
          p(i(z), {
            name: o.icon,
            class: f(i(c)),
            style: { "font-size": "64px" }
          }, null, 8, ["name", "class"])
        ])
      ]),
      e.title || e.$slots.title ? (t(), s("div", h, [
        l(e.$slots, "title", {}, () => [
          n("p", null, u(e.title), 1)
        ])
      ])) : r("", !0),
      e.subTitle || e.$slots["sub-title"] ? (t(), s("div", k, [
        l(e.$slots, "sub-title", {}, () => [
          n("p", null, u(e.subTitle), 1)
        ])
      ])) : r("", !0),
      e.$slots.extra ? (t(), s("div", v, [
        l(e.$slots, "extra")
      ])) : r("", !0)
    ]));
  }
});
export {
  B as default
};
