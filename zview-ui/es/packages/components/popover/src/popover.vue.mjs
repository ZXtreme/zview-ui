import { defineComponent as H, ref as r, computed as d, onMounted as _, openBlock as f, createElementBlock as p, createVNode as L, Transition as M, withCtx as P, withDirectives as S, createElementVNode as l, normalizeClass as v, unref as s, normalizeStyle as V, toDisplayString as g, createCommentVNode as N, renderSlot as m, createTextVNode as x, vShow as E } from "vue";
import { onClickOutside as z } from "../../../../node_modules/.pnpm/@vueuse_core@9.13.0_vue@3.2.47/node_modules/@vueuse/core/index.mjs";
import { popoverProps as A } from "./popover.mjs";
const B = ["aria-hidden"], D = ["textContent"], W = {
  name: "ZPopover"
}, q = /* @__PURE__ */ H({
  ...W,
  props: A,
  setup(h) {
    const e = h, a = r(null), o = r(!1), u = d(() => e.trigger !== "manual" ? o.value : e.modelValue), w = d(() => {
      let t = {};
      return (e.width ?? null) && (t.width = e.width + "px"), t;
    }), n = r(null), i = r(null);
    _(() => {
      if (e.placement.includes("top") || e.placement.includes("bottom")) {
        let t = n.value.clientWidth;
        i.value.style.setProperty(
          "--geticonsite",
          t / 2 + "px"
        );
      } else if (e.placement.includes("left") || e.placement.includes("right")) {
        let t = n.value.clientHeight;
        i.value.style.setProperty(
          "--geticonsite",
          t / 2 + "px"
        );
      }
    });
    const c = r(null);
    function C() {
      e.trigger.toLowerCase() === "click" && (e.disabled || (o.value = !o.value));
    }
    z(a, (t) => {
      o.value = !1;
    });
    function b() {
      e.trigger.toLowerCase() === "focus" && (e.disabled || (o.value = !0));
    }
    function y() {
      e.trigger.toLowerCase() === "focus" && (e.disabled || (o.value = !1));
    }
    function k() {
      e.trigger.toLowerCase() === "hover" && (e.disabled || (clearTimeout(c.value), o.value = !0));
    }
    function T() {
      e.trigger.toLowerCase() === "hover" && (e.disabled || (c.value = setTimeout(() => {
        o.value = !1;
      }, 300)));
    }
    return (t, $) => (f(), p("div", {
      ref_key: "target",
      ref: a,
      class: "popover-box",
      onMouseenter: k,
      onMouseleave: T
    }, [
      L(M, { name: "slide-fade" }, {
        default: P(() => [
          S(l("div", {
            class: v(["popover-outbox", t.placement, t.popperClass]),
            "aria-hidden": t.disabled || !s(u) ? "true" : "false"
          }, [
            l("div", {
              class: "popover-arrow",
              ref_key: "popoverArrow",
              ref: i
            }, null, 512),
            l("div", {
              class: v(["popover-box-content"]),
              style: V(s(w))
            }, [
              t.title ? (f(), p("div", {
                key: 0,
                textContent: g(t.title),
                class: "popover-title"
              }, null, 8, D)) : N("", !0),
              m(t.$slots, "default", {}, () => [
                x(g(t.content), 1)
              ])
            ], 4)
          ], 10, B), [
            [E, !t.disabled && s(u)]
          ])
        ]),
        _: 3
      }),
      l("div", {
        ref_key: "reference",
        ref: n,
        class: "reference-content",
        onClick: C,
        onMousedown: b,
        onMouseup: y
      }, [
        m(t.$slots, "reference")
      ], 544)
    ], 544));
  }
});
export {
  q as default
};
