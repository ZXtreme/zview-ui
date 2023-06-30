import { defineComponent as B, ref as h, computed as k, openBlock as l, createElementBlock as o, toDisplayString as i, createCommentVNode as H, createElementVNode as r, Fragment as C, renderList as v, unref as z, normalizeClass as y, nextTick as x } from "vue";
import { TimeSpinnerProps as M } from "./time-spinner.mjs";
import { deepCopy as g } from "../../../utils/math/time-picker.mjs";
const V = { class: "z-time-panel__wrap" }, q = {
  key: 0,
  class: "z-time-panel__title"
}, D = { class: "z-time-panel__content" }, F = { class: "z-time-spinner__ul" }, I = ["onClick"], P = { class: "z-time-spinner__ul" }, j = ["onClick"], A = { class: "z-time-spinner__ul" }, G = ["onClick"], R = /* @__PURE__ */ B({
  name: "time-spinner",
  props: M,
  emits: ["on-change", "item-click"],
  setup(T, { expose: w, emit: L }) {
    const u = T, a = h(null), d = h(null), _ = h(null), S = k(() => {
      let t = [];
      const n = {
        text: 0,
        selected: !1,
        disabled: !1
      };
      for (let e = 0; e < 24; e++) {
        const s = g(n);
        s.text = e, u.hours === e && (s.selected = !0), t.push(s);
      }
      return t;
    }), E = k(() => {
      let t = [];
      const n = {
        text: 0,
        selected: !1,
        disabled: !1
      };
      for (let e = 0; e < 60; e++) {
        const s = g(n);
        s.text = e, u.minutes === e && (s.selected = !0), t.push(s);
      }
      return t;
    }), N = k(() => {
      let t = [];
      const n = {
        text: 0,
        selected: !1,
        disabled: !1
      };
      for (let e = 0; e < 60; e++) {
        const s = g(n);
        s.text = e, u.seconds === e && (s.selected = !0), t.push(s);
      }
      return t;
    }), m = (t) => [
      "z-time-spinner__item",
      {
        "cell-selected": t.selected,
        "cell-disabled": t.disabled
      }
    ], p = (t) => t < 10 ? "0" + t : t, f = (t, n, e) => {
      if (n.disabled)
        return;
      const c = {
        // 时分秒三个 list 的 ref
        hour: a.value,
        minute: d.value,
        second: _.value
      }[t];
      L("item-click", t, n, () => {
        c && b(c, e);
      });
    }, $ = (t) => {
      x(() => {
        [a, d, _].forEach((n, e) => {
          b(n.value, Number(t[e]));
        });
      });
    }, b = (t, n) => {
      const e = t.querySelector(
        ".z-time-spinner__item"
      ).clientHeight;
      x(() => {
        t.scrollTop = n * e;
      });
    };
    return w({
      resetScroll: $
    }), (t, n) => (l(), o("div", V, [
      t.title ? (l(), o("div", q, i(t.title), 1)) : H("", !0),
      r("div", D, [
        r("div", {
          class: "z-time-spinner__wrapper",
          ref_key: "hourCol",
          ref: a
        }, [
          r("ul", F, [
            (l(!0), o(C, null, v(z(S), (e, s) => (l(), o("li", {
              class: y(m(e)),
              key: s,
              onClick: (c) => f("hour", e, s)
            }, i(p(e.text)), 11, I))), 128))
          ])
        ], 512),
        r("div", {
          class: "z-time-spinner__wrapper",
          ref_key: "minuteCol",
          ref: d
        }, [
          r("ul", P, [
            (l(!0), o(C, null, v(z(E), (e, s) => (l(), o("li", {
              class: y(m(e)),
              key: s,
              onClick: (c) => f("minute", e, s)
            }, i(p(e.text)), 11, j))), 128))
          ])
        ], 512),
        r("div", {
          class: "z-time-spinner__wrapper",
          ref_key: "secondCol",
          ref: _
        }, [
          r("ul", A, [
            (l(!0), o(C, null, v(z(N), (e, s) => (l(), o("li", {
              class: y(m(e)),
              key: s,
              onClick: (c) => f("second", e, s)
            }, i(p(e.text)), 11, G))), 128))
          ])
        ], 512)
      ])
    ]));
  }
});
export {
  R as default
};
