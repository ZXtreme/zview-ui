import { defineComponent as r, computed as c, provide as d, openBlock as p, createElementBlock as l, renderSlot as u } from "vue";
import { CheckboxGroupProps as m } from "./checkbox-group.mjs";
const h = { class: "z-checkbox-group" }, i = {
  name: "ZCheckboxGroup"
}, g = /* @__PURE__ */ r({
  ...i,
  props: m,
  emits: ["update:modelValue", "change"],
  setup(n, { emit: o }) {
    const t = n, s = c(() => t.modelValue), a = c(() => t.disabled);
    return d("checkboxGroup", {
      modelValue: s,
      disabled: a,
      changeEvent: (e) => {
        o("update:modelValue", e), o("change", e);
      }
    }), (e, f) => (p(), l("div", h, [
      u(e.$slots, "default")
    ]));
  }
});
export {
  g as default
};
