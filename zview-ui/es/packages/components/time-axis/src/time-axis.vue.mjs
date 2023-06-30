import { defineComponent as y, ref as u, computed as k, onMounted as z, onUnmounted as I, openBlock as s, createElementBlock as o, normalizeClass as f, normalizeStyle as S, unref as A, renderSlot as h, createCommentVNode as p, createElementVNode as n, Fragment as $, renderList as E, toDisplayString as _ } from "vue";
import { TimeAxisProps as C } from "./time-axis.mjs";
import { offsetTop as L } from "../../../utils/vue/offset.mjs";
import T from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/throttle.mjs";
const b = {
  key: 0,
  class: "header"
}, B = { class: "timeline" }, H = ["data-text"], N = { class: "content" }, V = ["src"], q = { class: "content-title" }, D = { class: "content-desc" }, F = {
  key: 1,
  class: "footer"
}, M = {
  name: "ZTimeAxis"
}, j = /* @__PURE__ */ y({
  ...M,
  props: C,
  setup(v) {
    const g = v, c = u(null), l = u(0), x = k(() => ({
      backgroundImage: `url(${g.timeAxisItems[l.value].src})`
    }));
    let r;
    const m = T(() => {
      let e = window.pageYOffset;
      const d = r.length;
      let t = 0;
      const a = window.innerHeight;
      for (let i = 0; i < d; i++) {
        const w = r[i];
        if (L(w) <= e + a / 3)
          t = i;
        else
          break;
      }
      l.value = t;
    }, 20);
    return z(() => {
      r = c.value.querySelectorAll(".z-timeaxis-item"), window.addEventListener("scroll", m);
    }), I(() => {
      window.removeEventListener("scroll", m);
    }), (e, d) => (s(), o("div", {
      class: f(["z-timeaxis", e.single ? "z-timeaxis-single" : ""]),
      ref_key: "timeaxis",
      ref: c,
      style: S(A(x))
    }, [
      e.$slots.header ? (s(), o("div", b, [
        h(e.$slots, "header")
      ])) : p("", !0),
      n("div", B, [
        (s(!0), o($, null, E(e.timeAxisItems, (t, a) => (s(), o("div", {
          class: f(["z-timeaxis-item", l.value === a ? "item--active" : ""]),
          "data-text": t.title
        }, [
          n("div", N, [
            n("img", {
              class: "img",
              src: t.src
            }, null, 8, V),
            n("h2", q, _(t.time), 1),
            n("p", D, _(t.content), 1)
          ])
        ], 10, H))), 256))
      ]),
      e.$slots.footer ? (s(), o("div", F, [
        h(e.$slots, "footer")
      ])) : p("", !0)
    ], 6));
  }
});
export {
  j as default
};
