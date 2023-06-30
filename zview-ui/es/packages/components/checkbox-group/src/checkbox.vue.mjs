import { defineComponent as _, inject as f, computed as t, openBlock as b, createElementBlock as h, normalizeClass as m, unref as o, createElementVNode as d, withDirectives as g, isRef as V, vModelCheckbox as C, renderSlot as x, Fragment as z, createTextVNode as E, toDisplayString as y, createCommentVNode as B } from "vue";
import { CheckBoxProps as D } from "./checkbox.mjs";
const G = /* @__PURE__ */ d("span", { class: "z-checkbox__inner" }, null, -1), N = ["disabled", "value"], S = { class: "z-checkbox__label" }, $ = {
  name: "ZCheckbox"
}, F = /* @__PURE__ */ _({
  ...$,
  props: D,
  emits: ["update:modelValue", "change"],
  setup(p, { emit: u }) {
    const s = p, l = f("checkboxGroup", {}), n = t(() => l.modelValue && l.modelValue.value.length > 0), a = t({
      get() {
        return n.value ? l.modelValue && l.modelValue.value : s.modelValue;
      },
      set(e) {
        n.value ? l.changeEvent && l.changeEvent(e) : u("update:modelValue", e);
      }
    }), i = t(() => n.value ? a.value.includes(s.label) : a.value), c = t(() => n.value && l.disabled && l.disabled.value || s.disabled), k = () => {
      u("change", a.value);
    };
    return (e, r) => (b(), h("label", {
      class: m(["z-checkbox", [
        { "is-checked": o(i) },
        { "is-disabled": o(c) },
        { "is-bordered": e.border }
      ]])
    }, [
      d("span", {
        class: m(["z-checkbox__input", {
          "is-checked": o(i),
          "is-disabled": o(c),
          "is-indeterminate": e.indeterminate
        }])
      }, [
        G,
        g(d("input", {
          class: "z-checkbox__original",
          type: "checkbox",
          "onUpdate:modelValue": r[0] || (r[0] = (v) => V(a) ? a.value = v : null),
          disabled: o(c),
          value: e.label,
          onChange: k
        }, null, 40, N), [
          [C, o(a)]
        ])
      ], 2),
      d("span", S, [
        x(e.$slots, "default"),
        e.$slots.default ? B("", !0) : (b(), h(z, { key: 0 }, [
          E(y(e.label), 1)
        ], 64))
      ])
    ], 2));
  }
});
export {
  F as default
};
