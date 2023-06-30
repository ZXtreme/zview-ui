import { defineComponent as y, ref as b, computed as c, openBlock as a, createElementBlock as t, normalizeClass as i, unref as r, toDisplayString as u, createCommentVNode as s, createElementVNode as o, withDirectives as f, vModelCheckbox as C, normalizeStyle as I } from "vue";
import { SwitchProps as T } from "./switch.mjs";
const g = { key: 0 }, P = { key: 1 }, S = {
  name: "ZSwitch"
}, B = /* @__PURE__ */ y({
  ...S,
  props: T,
  emits: ["update:modelValue", "change"],
  setup(d, { emit: v }) {
    const n = d, l = b(n.modelValue), h = c(() => ({
      "is-disabled": n.disabled
    })), m = c(() => ({
      [`z-switch--${n.size}`]: n.size
    })), z = c(() => ({
      backgroundColor: l.value ? n.activeColor : n.inactiveColor
    })), w = () => {
      n.disabled || (l.value = !l.value, v("update:modelValue", l.value), v("change", l.value));
    };
    return (e, p) => (a(), t("div", {
      class: i(["z-switch-default", r(m)])
    }, [
      e.inactiveText && !e.inlinePrompt ? (a(), t("span", {
        key: 0,
        class: i(["z-switch-label z-switch-label-left", [l.value ? "" : "is-active"]])
      }, u(e.inactiveText), 3)) : s("", !0),
      e.inactiveIcon && !e.inlinePrompt ? (a(), t("span", {
        key: 1,
        class: i(["z-switch-label z-switch-label-left", [l.value ? "" : "is-active"]])
      }, [
        o("i", {
          class: i(`z-icon-${e.inactiveIcon}`)
        }, null, 2)
      ], 2)) : s("", !0),
      o("div", {
        class: i(["z-switch-content", r(h)]),
        onClick: w
      }, [
        f(o("input", {
          type: "checkbox",
          "onUpdate:modelValue": p[0] || (p[0] = (k) => l.value = k)
        }, null, 512), [
          [C, l.value]
        ]),
        o("span", {
          class: i(["core", [l.value ? "on" : "off"]]),
          style: I(r(z))
        }, [
          e.inlinePrompt ? (a(), t("span", {
            key: 0,
            class: i(["z-switch-inner", `z-switch-inner--${e.size}`])
          }, [
            e.activeText ? (a(), t("span", g, u(l.value ? e.activeText : e.inactiveText), 1)) : s("", !0),
            e.activeIcon ? (a(), t("span", P, [
              l.value ? (a(), t("i", {
                key: 1,
                class: i(`z-icon-${e.inactiveIcon}`)
              }, null, 2)) : (a(), t("i", {
                key: 0,
                class: i(`z-icon-${e.activeIcon}`)
              }, null, 2))
            ])) : s("", !0)
          ], 2)) : s("", !0)
        ], 6)
      ], 2),
      e.activeText && !e.inlinePrompt ? (a(), t("span", {
        key: 2,
        class: i(["z-switch-label z-switch-label-right", [l.value ? "is-active" : ""]])
      }, u(e.activeText), 3)) : s("", !0),
      e.activeIcon && !e.inlinePrompt ? (a(), t("span", {
        key: 3,
        class: i(["z-switch-label z-switch-label-right", [l.value ? "is-active" : ""]])
      }, [
        o("i", {
          class: i(`z-icon-${e.activeIcon}`)
        }, null, 2)
      ], 2)) : s("", !0)
    ], 2));
  }
});
export {
  B as default
};
