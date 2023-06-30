import { defineComponent as m, computed as e, openBlock as n, createElementBlock as r, createElementVNode as p, normalizeClass as c, normalizeStyle as u, unref as t, toDisplayString as _, createCommentVNode as f } from "vue";
import { iconProps as z } from "./icon.mjs";
const y = { class: "z-icon" }, g = {
  name: "ZIcon"
}, h = /* @__PURE__ */ m({
  ...g,
  props: z,
  setup(s) {
    const o = s, l = e(() => ({ ["z-dot"]: o.dot && !o.badge })), a = e(() => o.badge), i = e(() => ({
      color: o.color
    }));
    return (d, C) => (n(), r("div", y, [
      p("i", {
        class: c(`z-icon-${o.name}`),
        style: u(t(i))
      }, null, 6),
      d.dot ? (n(), r("div", {
        key: 0,
        class: c(["z-info", t(l)])
      }, _(t(a)), 3)) : f("", !0)
    ]));
  }
});
export {
  h as default
};
