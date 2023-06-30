import { defineComponent as S, useSlots as w, ref as z, computed as l, openBlock as s, createBlock as i, Transition as T, withCtx as A, withDirectives as B, createElementVNode as f, normalizeClass as a, unref as o, normalizeStyle as E, createCommentVNode as r, createElementBlock as n, renderSlot as m, createTextVNode as y, toDisplayString as u, Fragment as N, vShow as V } from "vue";
import v from "../../icon/index.mjs";
import { AlertProps as D, AlertEmits as I } from "./alert.mjs";
const F = { class: "content" }, P = {
  key: 1,
  class: "description"
}, Z = {
  name: "ZAlert"
}, J = /* @__PURE__ */ S({
  ...Z,
  props: D,
  emits: I,
  setup(h, { emit: k }) {
    const t = h, p = w(), c = z(!0), C = l(() => ({
      "z-alert": !0,
      [`z-alert--${t.type}`]: t.type,
      "is-center": t.center,
      [`is-${t.effect}`]: t.effect
    })), $ = l(() => ({
      opacity: c.value ? 1 : 0,
      "background-color": t.effect === "light" ? `var(--hv-color-${t.type}-light-9)` : `var(--hv-color-${t.type})`,
      color: t.effect === "light" ? `var(--hv-color-${t.type})` : "white"
    })), b = l(() => ({
      icon: t.description || p.default
    })), g = l(() => ({
      title: !0,
      "is-bold": t.description || p.default
    })), d = (e) => {
      c.value = !1, k("close", e);
    };
    return (e, j) => (s(), i(T, null, {
      default: A(() => [
        B(f("div", {
          class: a(o(C)),
          style: E(o($))
        }, [
          e.showIcon ? (s(), i(o(v), {
            key: 0,
            name: e.type,
            class: a(o(b))
          }, null, 8, ["name", "class"])) : r("", !0),
          f("div", F, [
            e.title || e.$slots.title ? (s(), n("span", {
              key: 0,
              class: a(o(g))
            }, [
              m(e.$slots, "title", {}, () => [
                y(u(e.title), 1)
              ])
            ], 2)) : r("", !0),
            e.$slots.default || e.description ? (s(), n("p", P, [
              m(e.$slots, "default", {}, () => [
                y(u(e.description), 1)
              ])
            ])) : r("", !0),
            e.closable ? (s(), n(N, { key: 2 }, [
              e.closeText ? (s(), n("div", {
                key: 0,
                class: "close-btn is-customed",
                onClick: d
              }, u(e.closeText), 1)) : (s(), i(o(v), {
                key: 1,
                name: "close1",
                class: "close-btn",
                onClick: d
              }))
            ], 64)) : r("", !0)
          ])
        ], 6), [
          [V, c.value]
        ])
      ]),
      _: 3
    }));
  }
});
export {
  J as default
};
