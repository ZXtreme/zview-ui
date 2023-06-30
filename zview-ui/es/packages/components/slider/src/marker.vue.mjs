import { defineComponent as v, useAttrs as y, ref as s, computed as b, onMounted as k, openBlock as a, createElementBlock as c, createBlock as h, unref as m, withCtx as S, createElementVNode as M, normalizeStyle as f } from "vue";
import { SliderProps as z } from "./slider.mjs";
import { offsetTop as T, offsetLeft as g } from "../../../utils/vue/offset.mjs";
import B from "../../tooltip/index.mjs";
import D from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/throttle.mjs";
const E = { class: "z-slider__button-wrapper" }, V = {
  name: "ZSliderMarker"
}, I = /* @__PURE__ */ v({
  ...V,
  props: z,
  emits: ["update:isDraw", "setMarkerSite"],
  setup(p, { expose: d, emit: n }) {
    const e = p, o = y(), r = s(null), l = s(0), _ = s(0), i = b(() => e.vertical ? {
      bottom: `${e.modelValue}%`
    } : {
      left: `${e.modelValue}%`
    }), w = (t) => {
      t.onmousedown = function() {
        return document.onmousemove = D(function(u) {
          return e.disabled || (n("update:isDraw", !0), e.vertical ? l.value = T(o.runway_wraper) + o.runway_wraper.offsetHeight - u.pageY : l.value = u.pageX - g(o.runway_wraper), n("setMarkerSite", l.value, o.yname)), !1;
        }, 20), document.onmouseup = function() {
          return document.onmousemove = null, document.onmousedown = null, document.onmouseup = null, setTimeout(() => {
            n("update:isDraw", !1);
          }, 50), !1;
        }, !1;
      };
    };
    return k(() => {
      w(r.value);
    }), d({
      btnIndex: _
    }), (t, u) => (a(), c("div", E, [
      t.showTooltip ? (a(), h(m(B), {
        key: 0,
        content: t.$attrs.tip + "",
        placement: t.placement
      }, {
        default: S(() => [
          M("div", {
            ref_key: "btn",
            ref: r,
            class: "z-slider__button",
            style: f(m(i))
          }, null, 4)
        ]),
        _: 1
      }, 8, ["content", "placement"])) : (a(), c("div", {
        key: 1,
        ref_key: "btn",
        ref: r,
        class: "z-slider__button",
        style: f(m(i))
      }, null, 4))
    ]));
  }
});
export {
  I as default
};
