import { defineComponent as X, ref as r, computed as S, watch as G, openBlock as u, createElementBlock as b, normalizeStyle as _, createElementVNode as V, unref as I, normalizeClass as H, Fragment as $, renderList as z, toDisplayString as W, createCommentVNode as D, createVNode as Y, mergeProps as E, createBlock as Z } from "vue";
import { SliderProps as q } from "./slider.mjs";
import N from "./marker.vue.mjs";
import { isObject as K, isArray as A } from "../../../../node_modules/.pnpm/registry.npmmirror.com_@vue_shared@3.2.36/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
import { judgeLocation as C, cutChunk as Q } from "./utils.mjs";
import { toFixed as ee } from "../../../utils/math/tofixed.mjs";
import { offsetTop as te, offsetLeft as le } from "../../../utils/vue/offset.mjs";
import ae from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/throttle.mjs";
const ne = { class: "z-slider__stop_label_box" }, re = {
  name: "ZSliderRunway"
}, fe = /* @__PURE__ */ X({
  ...re,
  props: q,
  emits: ["input", "change"],
  setup(B, { expose: O, emit: M }) {
    const e = B, y = r(null), v = r(null), m = r(null), s = r(0), o = r(0), d = r(0), p = r(0), g = r(0), h = r(0), f = r([]), w = r(!1), k = r(0), j = S(() => e.marks ? Object.keys(e.marks) : []), F = S(() => f.value.filter((l, n) => j.value.includes(String(n + 1)))), L = (l) => {
      let n = 0;
      const t = JSON.parse(JSON.stringify(f.value));
      t.unshift(0), t.push(Number.MAX_SAFE_INTEGER);
      for (let a = 0; a < t.length; a++)
        if (l <= t[a]) {
          n = C(l, t[a - 1], t[a]) === "end" ? a : a - 1;
          break;
        }
      return [t, n];
    }, P = S(() => e.vertical ? {
      bottom: `${g.value}%`,
      height: `${h.value}%`
    } : {
      left: `${g.value}%`,
      width: `${h.value}%`
    }), c = (l, n) => {
      let t = 0, [a, i] = L(l);
      i === -1 && (i = 0), t = Number(ee(String(a[i] / e.width * 100), 0)), n === "btn1" ? (s.value = t, d.value = i * e.step + e.min, v.value.btnIndex = i - (i === 0 ? 0 : 1)) : (o.value = t, p.value = i * e.step + e.min, m.value.btnIndex = i - (i === 0 ? 0 : 1)), J(), M("input", d.value, p.value), e.formatTooltip && (d.value = e.formatTooltip(d.value), p.value = e.formatTooltip(p.value));
    }, J = () => {
      e.range && A(e.modelValue) ? (g.value = Math.min(o.value, s.value), h.value = Math.max(o.value, s.value) - Math.min(o.value, s.value)) : h.value = s.value;
    }, R = (l) => {
      if (e.disabled || w.value)
        return !1;
      let n = "btn1";
      if (e.vertical ? k.value = te(y.value) + y.value.offsetHeight - l.pageY : k.value = l.pageX - le(y.value), e.range) {
        let t = v.value.btnIndex > m.value.btnIndex ? "start" : "end", a = v.value.btnIndex > m.value.btnIndex ? v.value.btnIndex : m.value.btnIndex, i = t === "start" ? "end" : "start", U = t === "start" ? m.value.btnIndex : v.value.btnIndex;
        C(k.value, f.value[U], f.value[a]) === i ? n = "btn1" : n = "btn2";
      }
      return c(k.value, n), M("change", d.value, p.value), !1;
    }, x = S(() => e.width / (e.max - e.min)), T = () => {
      f.value = Q(e.width, e.step, e.max - e.min), e.range && A(e.modelValue) ? (c(x.value * (e.modelValue[0] - e.min), "btn1"), c(x.value * (e.modelValue[1] - e.min), "btn2"), g.value = Math.min(o.value, s.value), h.value = Math.max(o.value, s.value) - Math.min(o.value, s.value)) : c(x.value * (e.modelValue - e.min), "btn1");
    };
    return G(
      [
        () => e.modelValue,
        () => e.width,
        () => e.step,
        () => e.max,
        () => e.min
      ],
      ae(() => {
        T();
      }, 20)
    ), O({
      update: T
    }), (l, n) => (u(), b("div", {
      class: "z-slider__runway",
      ref_key: "slider_runway",
      ref: y,
      onClick: R,
      style: _({ height: `${l.height}px` })
    }, [
      V("div", {
        class: "z-slider__bar",
        style: _(I(P))
      }, null, 4),
      l.showStops ? (u(), b("div", {
        key: 0,
        class: H(["z-slider__stop", { showEffect: l.marks }])
      }, [
        (u(!0), b($, null, z(I(F), (t, a) => (u(), b("div", {
          class: "z-slider__stop_item",
          key: a,
          style: _([l.vertical ? `bottom: ${t}px` : `left: ${t}px`])
        }, null, 4))), 128)),
        V("div", ne, [
          (u(!0), b($, null, z(l.marks, (t, a) => (u(), b("div", {
            class: "z-slider__stop_label",
            key: a,
            style: _([{ left: f.value[a - 1] + "px" }, t.style])
          }, W(I(K)(t) ? t.label : t), 5))), 128))
        ])
      ], 2)) : D("", !0),
      Y(N, E({
        ref_key: "btn1",
        ref: v
      }, l.$attrs, {
        "model-value": s.value,
        placement: l.placement,
        tip: d.value,
        isDraw: w.value,
        "onUpdate:isDraw": n[0] || (n[0] = (t) => w.value = t),
        disabled: l.disabled,
        showTooltip: l.showTooltip,
        vertical: l.vertical,
        yname: "btn1",
        onSetMarkerSite: c
      }), null, 16, ["model-value", "placement", "tip", "isDraw", "disabled", "showTooltip", "vertical"]),
      l.range ? (u(), Z(N, E({
        key: 1,
        ref_key: "btn2",
        ref: m
      }, l.$attrs, {
        yname: "btn2",
        isDraw: w.value,
        "onUpdate:isDraw": n[1] || (n[1] = (t) => w.value = t),
        placement: l.placement,
        showTooltip: l.showTooltip,
        disabled: l.disabled,
        "model-value": o.value,
        vertical: l.vertical,
        tip: p.value,
        onSetMarkerSite: c
      }), null, 16, ["isDraw", "placement", "showTooltip", "disabled", "model-value", "vertical", "tip"])) : D("", !0)
    ], 4));
  }
});
export {
  fe as default
};
