import { defineComponent as k, ref as u, computed as d, watch as f, onMounted as I, onUnmounted as C, openBlock as B, createElementBlock as E, normalizeClass as F, unref as w, normalizeStyle as _, createElementVNode as M, nextTick as X } from "vue";
import { ScrollThumbProps as A } from "./scroll-thumb.mjs";
import P from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/throttle.mjs";
const U = {
  name: "ZThumb"
}, G = /* @__PURE__ */ k({
  ...U,
  props: A,
  emits: [
    "update:isDraw",
    "setScrollViewTop",
    "setScrollViewLeft",
    "setScrollTumb"
  ],
  setup(S, { expose: x, emit: c }) {
    const e = S, m = u(0), h = u(0), H = (t) => {
      const o = e.viewHeight - a.value, l = t * a.value * e.retio / o;
      if (l >= n.value)
        return m.value = n.value;
      m.value = l;
    }, y = (t) => {
      const o = e.viewWidth - r.value, l = t * r.value * e.retio / o;
      if (l >= n.value)
        return h.value = n.value;
      h.value = l;
    }, z = (t) => {
      const o = Number(t * e.viewHeight / a.value).toFixed(5);
      c("setScrollViewTop", o);
    }, L = (t) => {
      const o = Number(t * e.viewWidth / r.value).toFixed(5);
      c("setScrollViewLeft", o);
    }, b = (t, o) => {
      let l = t;
      t <= 0 && (t = 0), t >= n.value && (t = n.value, l = o === "moveX" ? r.value : a.value), o === "moveX" ? h.value = t : m.value = t, i.value = !0, c("update:isDraw", i.value), o === "moveX" ? L(l) : z(l);
    }, s = u(null), V = u(null), a = u(Number(parseInt(e.height))), r = u(Number(parseInt(e.width))), n = u(0), p = u(!1), i = u(!1), W = d(() => e.move === "moveX" ? {
      width: `${e.width}px`
    } : {
      height: `${e.height}`
    }), N = d(() => e.move === "moveX" ? {
      width: `${e.thumbWidth}px`,
      left: `${h.value}px`
    } : {
      height: `${e.thumbHeight}px`,
      top: `${m.value}px`
    }), D = d(() => e.viewWidth ? !e.height && !e.maxHeight && e.viewWidth <= r.value : !e.height && !e.maxHeight);
    function Y(t, o) {
      t.onmousedown = function(l) {
        let g = o === "moveX" ? l.pageX - t.offsetLeft : l.pageY - t.offsetTop;
        return document.onmousemove = P(function(T) {
          let $ = o === "moveX" ? T.pageX - g : T.pageY - g;
          return b($, o === "moveX" ? "moveX" : "moveY"), !1;
        }, 20), document.onmouseup = function() {
          return document.onmousemove = null, document.onmouseup = null, document.onmousedown = null, X(() => {
            i.value = !1, c("update:isDraw", i.value);
          }), !1;
        }, !1;
      };
    }
    const v = () => {
      p.value || (p.value = !0, r.value = Number(parseInt(e.width)), a.value = Number(parseInt(e.height)), X(() => {
        n.value = e.move === "moveX" ? r.value - s.value.offsetWidth : a.value - s.value.offsetHeight;
      }), p.value = !1);
    };
    return f(
      () => e.height,
      () => {
        e.noresize || v();
      }
    ), f(
      () => e.viewHeight,
      () => {
        e.noresize || v();
      }
    ), f(
      () => e.width,
      () => {
        e.noresize || v();
      }
    ), f(
      () => e.viewWidth,
      () => {
        e.noresize || v();
      }
    ), I(() => {
      Y(
        s.value,
        e.move === "moveX" ? "moveX" : "moveY"
      ), v();
    }), C(() => {
      s.value && (s.value.onmousedown = null);
    }), x({
      setScrollTop: H,
      setScrollLeft: y,
      handleDrawScrollVal: b
    }), (t, o) => (B(), E("div", {
      ref_key: "scrollbar_bar",
      ref: V,
      class: F([
        "z-scrollbar__bar",
        t.move === "moveX" ? "is-horizontal" : "is-vertical",
        { show: i.value },
        { hide: w(D) },
        { native: t.native },
        { always: t.always }
      ]),
      style: _(w(W))
    }, [
      M("div", {
        ref_key: "scrollbar_thumb",
        ref: s,
        class: "z-scrollbar__thumb",
        style: _(w(N))
      }, null, 4)
    ], 6));
  }
});
export {
  G as default
};
