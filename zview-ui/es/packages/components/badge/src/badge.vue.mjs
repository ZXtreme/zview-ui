import { defineComponent as i, computed as s, openBlock as u, createElementBlock as p, renderSlot as c, withDirectives as d, createElementVNode as m, normalizeClass as f, unref as n, toDisplayString as _, vShow as v } from "vue";
import { badgeProps as y } from "./badge.mjs";
const h = { class: "z-badge" }, D = ["textContent"], b = {
  name: "ZBadge"
}, x = /* @__PURE__ */ i({
  ...b,
  props: y,
  setup(r, { expose: a }) {
    const e = r, l = s(() => e.type && e.value && !e.isDot ? {
      [`z-badge-type--${e.type}`]: e.type
    } : {
      "is-dot": e.isDot
    }), t = s(() => e.isDot ? "" : typeof e.value == "number" && typeof e.max == "number" ? e.max < e.value ? `${e.max}+` : `${e.value}` : `${e.value}`);
    return a({
      /** 向外暴露 badge content */
      content: t
    }), (o, g) => (u(), p("div", h, [
      c(o.$slots, "default"),
      d(m("sup", {
        class: f(n(l)),
        textContent: _(n(t))
      }, null, 10, D), [
        [v, !o.hidden && (n(t) || o.isDot)]
      ])
    ]));
  }
});
export {
  x as default
};
