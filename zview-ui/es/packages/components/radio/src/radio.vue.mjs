import { defineComponent as m, ref as r, computed as f, openBlock as t, createElementBlock as i, Fragment as v, renderList as h, normalizeClass as g, normalizeStyle as z, unref as b, createElementVNode as d, toDisplayString as y } from "vue";
import { RadioProps as k } from "./radio.mjs";
const S = { class: "z-radio" }, C = ["onClick"], x = /* @__PURE__ */ d("span", { class: "z-radio-item-button" }, null, -1), B = { class: "z-radio-item-label" }, E = {
  name: "ZRadio"
}, $ = /* @__PURE__ */ m({
  ...E,
  props: k,
  emits: ["change"],
  setup(c, { emit: u }) {
    const l = c, a = r(l.modelValue), o = r("inline-flex"), p = f(() => (l.inline ? o.value : o.value = "flex", { display: `${o.value}` })), _ = (n, s) => {
      n.disabled || (a.value = String(s), u("change", n));
    };
    return (n, s) => (t(), i("div", S, [
      (t(!0), i(v, null, h(n.options, (e) => (t(), i("div", {
        class: g(["z-item-radio", [
          { active: a.value === String(e.id) },
          { "z-item-disabled-radio": e.disabled }
        ]]),
        key: e.id,
        style: z(b(p)),
        onClick: (I) => _(e, e.id)
      }, [
        x,
        d("span", B, y(e.label), 1)
      ], 14, C))), 128))
    ]));
  }
});
export {
  $ as default
};
