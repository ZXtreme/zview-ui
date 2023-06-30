import { defineComponent as u, toRefs as p, computed as m, openBlock as n, createElementBlock as s, normalizeClass as l, unref as t, createElementVNode as b, createCommentVNode as f, renderSlot as _ } from "vue";
import { ButtonProps as k } from "./button.mjs";
const z = ["disabled"], C = {
  name: "ZButton"
}, h = /* @__PURE__ */ u({
  ...C,
  props: k,
  emits: ["click"],
  setup(i, { emit: c }) {
    const e = i, a = () => {
      c("click");
    }, { icon: o } = p(e), r = m(() => ({
      [`z-button--${e.type}`]: e.type,
      [`z-button--${e.size}`]: e.size,
      "is-plain": e.plain,
      "is-round": e.round,
      "is-disabled": e.disabled
    }));
    return (d, y) => (n(), s("button", {
      class: l(["z-button", t(r)]),
      disabled: e.disabled,
      onClick: a
    }, [
      b("span", null, [
        t(o) !== "" ? (n(), s("i", {
          key: 0,
          class: l(`z-icon-${t(o)}`)
        }, null, 2)) : f("", !0)
      ]),
      _(d.$slots, "default")
    ], 10, z));
  }
});
export {
  h as default
};
