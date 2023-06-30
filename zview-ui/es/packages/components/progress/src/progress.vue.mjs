import { defineComponent as F, computed as r, openBlock as a, createElementBlock as i, normalizeClass as w, unref as o, createElementVNode as d, normalizeStyle as c, renderSlot as z, toDisplayString as b, createCommentVNode as S, createBlock as L } from "vue";
import { isFunction as M, isString as C } from "../../../../node_modules/.pnpm/registry.npmmirror.com_@vue_shared@3.2.36/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
import { progressProps as A } from "./progress.mjs";
import E from "../../icon/index.mjs";
const O = {
  key: 0,
  class: "z-progress-bar"
}, V = {
  key: 0,
  class: "z-progress-bar-innerText"
}, R = { viewBox: "0 0 100 100" }, U = ["d", "stroke-width", "stroke-linecap"], Z = ["d", "stroke", "opacity", "stroke-linecap", "stroke-width"], j = { key: 0 }, q = {
  name: "ZProgress"
}, Q = /* @__PURE__ */ F({
  ...q,
  props: A,
  setup(D) {
    const t = D, g = {
      success: "#67c23a",
      error: "#f56c6c",
      warning: "#e6a23c",
      default: "#20a0ff"
    }, x = r(() => {
      const { status: e, type: s, showText: u, textInside: n } = t;
      return {
        [`z-progress--${s}`]: s,
        [`z-progress--${e}`]: e,
        ["z-progress-without-text"]: !u,
        ["z-progress-text-inside"]: n
      };
    }), I = r(() => ({
      width: `${t.percentage}%`,
      animationDuration: `${t.duration}s`,
      backgroundColor: v(t.percentage)
    })), h = r(
      () => (t.strokeWidth / t.width * 100).toFixed(1)
    ), k = r(() => ["circle", "dashboard"].includes(t.type) ? Number.parseInt(
      `${50 - Number.parseFloat(h.value) / 2}`,
      10
    ) : 0), m = r(() => {
      const e = k.value, s = t.type === "dashboard";
      return `
          M 50 50
          m 0 ${s ? "" : "-"}${e}
          a ${e} ${e} 0 1 1 0 ${s ? "-" : ""}${e * 2}
          a ${e} ${e} 0 1 1 0 ${s ? "" : "-"}${e * 2}
          `;
    }), p = r(() => 2 * Math.PI * k.value), f = r(() => t.type === "dashboard" ? 0.75 : 1), y = r(() => `${-1 * p.value * (1 - f.value) / 2}px`), P = r(() => ({
      strokeDasharray: `${p.value * f.value}px, ${p.value}px`,
      strokeDashoffset: y.value
    })), T = r(() => ({
      strokeDasharray: `${p.value * f.value * (t.percentage / 100)}px, ${p.value}px`,
      strokeDashoffset: y.value,
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
    })), _ = r(() => {
      let e;
      return t.color ? e = v(t.percentage) : e = g[t.status] || g.default, e;
    }), B = r(() => t.status === "warning" ? "warning" : t.status === "success" ? "success" : "close"), N = r(() => t.type === "line" ? 12 + t.strokeWidth * 0.4 : t.width * 0.111111 + 2), $ = r(() => t.format(t.percentage));
    function W(e) {
      const s = 100 / e.length;
      return e.map((n, l) => C(n) ? {
        color: n,
        percentage: (l + 1) * s
      } : n).sort((n, l) => n.percentage - l.percentage);
    }
    const v = (e) => {
      var u;
      const { color: s } = t;
      if (M(s))
        return s(e);
      if (C(s))
        return s;
      {
        const n = W(s);
        for (const l of n)
          if (l.percentage > e)
            return l.color;
        return (u = n[n.length - 1]) == null ? void 0 : u.color;
      }
    };
    return (e, s) => (a(), i("div", {
      class: w(["z-progress", o(x)])
    }, [
      e.type === "line" ? (a(), i("div", O, [
        d("div", {
          class: "z-progress-bar-outer",
          style: c({ height: `${e.strokeWidth}px` })
        }, [
          d("div", {
            class: w(["z-progress-bar-inner", { ["z-progress-bar-innerindeterminate"]: e.indeterminate }]),
            style: c(o(I))
          }, [
            (e.showText || e.$slots.default) && e.textInside ? (a(), i("div", V, [
              z(e.$slots, "default", {}, () => [
                d("span", null, b(o($)), 1)
              ])
            ])) : S("", !0)
          ], 6)
        ], 4)
      ])) : (a(), i("div", {
        key: 1,
        class: "z-progress-circle",
        style: c({ height: `${e.width}px`, width: `${e.width}px` })
      }, [
        (a(), i("svg", R, [
          d("path", {
            class: "z-progress-circle-track",
            d: o(m),
            stroke: "#e5e9f2",
            "stroke-width": o(h),
            fill: "none",
            style: c(o(P)),
            "stroke-linecap": e.strokeLinecap
          }, null, 12, U),
          d("path", {
            class: "z-progress-circle-path",
            d: o(m),
            stroke: o(_),
            fill: "none",
            opacity: e.percentage ? 1 : 0,
            "stroke-linecap": e.strokeLinecap,
            "stroke-width": o(h),
            style: c(o(T))
          }, null, 12, Z)
        ]))
      ], 4)),
      (e.showText || e.$slots.default) && !e.textInside ? (a(), i("div", {
        key: 2,
        class: "z-progress-text",
        style: c({ fontSize: `${o(N)}px` })
      }, [
        z(e.$slots, "default", {}, () => [
          e.status ? (a(), L(o(E), {
            key: 1,
            name: o(B)
          }, null, 8, ["name"])) : (a(), i("span", j, b(o($)), 1))
        ])
      ], 4)) : S("", !0)
    ], 2));
  }
});
export {
  Q as default
};
