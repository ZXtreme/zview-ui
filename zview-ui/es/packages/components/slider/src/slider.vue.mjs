import { defineComponent as b, ref as r, watch as i, openBlock as h, createElementBlock as S, normalizeClass as T, createElementVNode as z, createVNode as C, createBlock as N, unref as B, createCommentVNode as E, nextTick as w } from "vue";
import I from "../../input-number/index.mjs";
import { SliderProps as A } from "./slider.mjs";
import O from "./runway.vue.mjs";
import { isOutBounds as f } from "./utils.mjs";
import { isArray as u } from "../../../../node_modules/.pnpm/registry.npmmirror.com_@vue_shared@3.2.36/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
import P from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/throttle.mjs";
const U = {
  name: "ZSlider"
}, F = /* @__PURE__ */ b({
  ...U,
  props: A,
  emits: ["input", "change"],
  setup(v, { emit: m }) {
    const a = v, n = r(1), l = r(a.modelValue), s = r(null), c = r(null), t = r(null), p = r(0), g = (e, o) => {
      m("change", e, o);
    }, V = (e, o) => {
      n.value = e, m("input", e, o);
    }, y = (e) => {
      l.value = e;
    }, d = () => {
      w(() => {
        p.value = a.vertical ? a.height : t.value.offsetWidth, l.value = a.modelValue, n.value = u(a.modelValue) ? a.modelValue[0] : a.modelValue;
      });
    };
    return i(
      () => a.modelValue,
      P(() => {
        w(() => {
          if (u(l.value) ? l.value.forEach((e) => {
            f(e, a.min, a.max);
          }) : f(l.value, a.min, a.max), a.range && (!u(l.value) || l.value.length !== 2))
            throw new Error("有 range 字段则必须传入 modelValue 一个数组参数");
          d();
        });
      }, 20),
      {
        immediate: !0
      }
    ), i(() => a.range, () => {
      s.value.update();
    }), i([() => a.vertical, () => a.height], () => {
      d();
    }), (e, o) => (h(), S("div", {
      ref_key: "slider",
      ref: c,
      class: T([
        "z-slider",
        { "is-vertical": e.vertical },
        { "is-disabled": e.disabled }
      ])
    }, [
      z("div", {
        class: "z-slider__runway_wraper",
        ref_key: "runway_wraper",
        ref: t
      }, [
        C(O, {
          ref_key: "runway",
          ref: s,
          modelValue: l.value,
          min: e.min,
          max: e.max,
          step: e.step,
          showTooltip: e.showTooltip,
          showStops: e.showStops,
          disabled: e.disabled,
          formatTooltip: e.formatTooltip,
          onChange: g,
          onInput: V,
          range: e.range,
          vertical: e.vertical,
          width: p.value,
          height: e.height,
          placement: e.placement,
          marks: e.marks,
          runway_wraper: t.value
        }, null, 8, ["modelValue", "min", "max", "step", "showTooltip", "showStops", "disabled", "formatTooltip", "range", "vertical", "width", "height", "placement", "marks", "runway_wraper"])
      ], 512),
      e.showInput ? (h(), N(B(I), {
        key: 0,
        modelValue: n.value,
        "onUpdate:modelValue": o[0] || (o[0] = (k) => n.value = k),
        max: e.max,
        min: e.min,
        size: e.inputSize,
        controls: e.showInputControls,
        onChange: y
      }, null, 8, ["modelValue", "max", "min", "size", "controls"])) : E("", !0)
    ], 2));
  }
});
export {
  F as default
};
