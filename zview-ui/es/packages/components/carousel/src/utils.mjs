import { ref as o, computed as T, unref as S, watch as c, onMounted as U, onBeforeUnmount as V } from "vue";
import E from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/throttle.mjs";
const w = 350, j = (t, h) => {
  const n = o(t.initialIndex), i = o(null), y = o(), d = o(), { data: u } = t, g = o(!1), v = o(!0), H = T(() => t.direction === "vertical"), L = T(
    () => t.arrow !== "never" && !S(H)
  ), M = E(
    (e) => {
      a(e);
    },
    w
  ), C = E((e) => {
    D(e);
  }, w);
  function r() {
    i.value && (clearInterval(i.value), i.value = null);
  }
  function f() {
    t.interval <= 0 || !t.autoplay || i.value || (i.value = setInterval(() => k(), t.interval));
  }
  const k = () => {
    const e = u.length;
    n.value < e - 1 || t.loop && n.value < e ? n.value = n.value + 1 : t.loop && (n.value = 0);
  };
  function a(e) {
    const l = u.length;
    !t.loop && (e < 0 || e >= l) || (t.loop && (e < -1 || e > l) && (e = (e % l + l) % l), n.value = e, m());
  }
  function A() {
    g.value = !0, t.pauseOnHover && r();
  }
  function O() {
    g.value = !1, f();
  }
  function B(e) {
    n.value = e;
  }
  function D(e) {
    t.trigger === "hover" && e !== n.value && (n.value = e);
  }
  function F() {
    a(n.value - 1);
  }
  function R() {
    a(n.value + 1);
  }
  function m() {
    r(), f();
  }
  c(
    () => n.value,
    (e, l) => {
      const s = u.length;
      e === -1 || e === s || (e === 0 && l === s ? h("change", e, s - 1) : e === s - 1 && l === -1 ? h("change", e, 0) : h("change", e, l));
    }
  ), c(
    () => t.autoplay,
    (e) => {
      e ? f() : r();
    }
  ), c(
    () => t.loop,
    () => {
      a(n.value);
    }
  ), c(
    () => t.interval,
    () => {
      m();
    }
  ), c(
    () => t.data,
    () => {
      t.data.length > 0 && a(t.initialIndex);
    }
  );
  const I = () => {
    console.log(111), n.value === u.length ? (v.value = !1, n.value = 0, setTimeout(() => v.value = !0, 10)) : n.value === -1 && (v.value = !1, n.value = u.length - 1, setTimeout(() => v.value = !0, 10));
  };
  return U(() => {
    var e;
    f(), (e = d.value) == null || e.addEventListener("transitionend", I);
  }), V(() => {
    var e;
    r(), (e = d.value) == null || e.removeEventListener("transitionend", I);
  }), {
    root: y,
    transitionItem: d,
    activeIndex: n,
    arrowDisplay: L,
    handleIndicatorClick: B,
    handleMouseEnter: A,
    handleMouseLeave: O,
    setActiveItem: a,
    prev: F,
    next: R,
    throttledArrowClick: M,
    throttledIndicatorHover: C,
    hover: g,
    animating: v
  };
};
export {
  j as useCarousel
};
