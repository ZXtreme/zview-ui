import { defineComponent as E, ref as t, computed as H, watch as y, onMounted as F, nextTick as $, onUnmounted as M, openBlock as T, createElementBlock as U, createElementVNode as Y, normalizeClass as _, normalizeStyle as L, unref as N, createBlock as A, resolveDynamicComponent as O, withCtx as P, renderSlot as R, createVNode as Z } from "vue";
import { ScrollBarProps as j } from "./scrollbar.mjs";
import q from "./scroll-thumb.vue.mjs";
const G = {
  class: "z-scrollbar",
  ref: "scrollbar"
}, J = {
  name: "ZScrollbar"
}, le = /* @__PURE__ */ E({
  ...J,
  props: j,
  emits: ["scroll"],
  setup(D, { expose: V, emit: W }) {
    const l = D, u = (e, s) => Number(Number(e).toFixed(s)), o = t(null), v = t(null), n = t(null), a = t(Number(parseInt(l.height))), c = t(Number(parseInt(l.maxHeight))), m = t(0), h = t(0), S = t(0), p = t(!1), g = t(0), r = t(0), f = t(0), z = t(!1), w = H(
      () => !l.height && !l.maxHeight ? "moveX" : "moveY"
    ), k = H(() => a.value ? {
      height: `${a.value}px`
    } : {}), C = (e) => {
      n.value.handleDrawScrollVal(e, "moveY"), p.value = !1;
    }, x = (e) => {
      n.value.handleDrawScrollVal(e, "moveX"), p.value = !1;
    }, i = () => {
      const e = w.value === "moveX" ? Number(o.value.scrollLeft.toFixed(5)) : Number(o.value.scrollTop.toFixed(5));
      w.value === "moveX" ? n.value.setScrollLeft(e) : n.value.setScrollTop(e), W("scroll", {
        scrollTop: o.value.scrollTop,
        scrollLeft: o.value.scrollLeft
      });
    }, I = (e) => {
      o.value.scrollTop = e;
    }, X = (e) => {
      o.value.scrollLeft = e;
    }, b = () => {
      var e, s;
      z.value = !0, m.value = v.value.offsetWidth, h.value = (e = v.value) == null ? void 0 : e.scrollHeight, S.value = (s = v.value) == null ? void 0 : s.scrollWidth, r.value = u(a.value * a.value / h.value, 0), r.value <= l.minSize && (r.value = l.minSize), f.value = u(m.value * m.value / S.value, 0), f.value <= l.minSize && (f.value = l.minSize), c.value && (h.value >= c.value ? (a.value = c.value, r.value = u(a.value * a.value / h.value, 0), r.value <= l.minSize && (r.value = l.minSize)) : (a.value = 0, r.value = 0)), g.value = 1 - (w.value === "moveX" ? u(f.value / m.value, 2) : u(r.value / a.value, 2)), z.value = !1;
    };
    y(
      () => l.height,
      () => {
        l.noresize || (a.value = Number(parseInt(l.height)), b(), i());
      }
    ), y(
      () => l.maxHeight,
      () => {
        l.noresize || (c.value = Number(parseInt(l.maxHeight)), a.value = Number(parseInt(l.height)) || 0, b(), i());
      }
    );
    let d = null;
    return F(() => {
      var e;
      b(), (e = o.value) == null || e.addEventListener("scroll", i), l.noresize || (d = new MutationObserver(() => {
        b(), i();
      }), $(() => {
        d.observe(v.value, {
          childList: !0,
          // 监听子节点的变化(增加，删除)
          characterData: !0
          // 监听节点的内容或文本变化
        });
      }));
    }), M(() => {
      var e;
      (e = o.value) == null || e.removeEventListener("scroll", i), d == null || d.disconnect();
    }), V({
      setScrollTop: C,
      setScrollLeft: x,
      wrapRef: o
    }), (e, s) => (T(), U("div", G, [
      Y("div", {
        class: _([e.wrapClass, "z-scrollbar__wrap", { native: e.native }]),
        ref_key: "scrollbar_wrap",
        ref: o,
        style: L([N(k), e.wrapStyle])
      }, [
        (T(), A(O(e.tag), {
          class: _([e.viewClass, "z-scrollbar__view"]),
          ref_key: "scrollbar_view",
          ref: v,
          style: L(e.viewStyle)
        }, {
          default: P(() => [
            R(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 6),
      Z(q, {
        ref_key: "scrollThumb",
        ref: n,
        onSetScrollViewTop: I,
        onSetScrollViewLeft: X,
        onSetScrollThumb: i,
        always: e.always,
        isDraw: p.value,
        "onUpdate:isDraw": s[0] || (s[0] = (B) => p.value = B),
        height: a.value,
        maxHeight: c.value,
        width: m.value,
        noresize: e.noresize,
        viewHeight: h.value,
        viewWidth: S.value,
        thumbWidth: f.value,
        native: e.native,
        move: N(w),
        retio: g.value,
        thumbHeight: r.value
      }, null, 8, ["always", "isDraw", "height", "maxHeight", "width", "noresize", "viewHeight", "viewWidth", "thumbWidth", "native", "move", "retio", "thumbHeight"])
    ], 512));
  }
});
export {
  le as default
};
