import { defineComponent as W, ref as _, reactive as X, toRefs as Y, computed as I, watch as M, nextTick as C, openBlock as v, createElementBlock as g, createElementVNode as a, normalizeClass as R, unref as l, createCommentVNode as z, createVNode as O, Transition as ee, withCtx as te, withModifiers as ne, createBlock as le } from "vue";
import A from "./time-spinner.vue.mjs";
import { formatOutputValue as $, isString as se, withinNum as re, deepCopy as b, compareArrJoined as H } from "../../../utils/math/time-picker.mjs";
import { TimePickerProps as ie } from "./time-picker.mjs";
import { onClickOutside as oe } from "../../../../node_modules/.pnpm/@vueuse_core@9.13.0_vue@3.2.47/node_modules/@vueuse/core/index.mjs";
const ae = /* @__PURE__ */ a("span", { class: "z-input__prefix" }, [
  /* @__PURE__ */ a("i", { class: "z-timepick__icon z-icon-time" })
], -1), ue = ["value", "placeholder", "disabled", "readonly"], ce = /* @__PURE__ */ a("i", { class: "z-timepick__icon z-icon-close" }, null, -1), de = [
  ce
], me = { class: "z-time-panel-body" }, pe = {
  key: 0,
  class: "z-time-panel__footer"
}, fe = {
  name: "ZTimePicker"
}, Ce = /* @__PURE__ */ W({
  ...fe,
  props: ie,
  emits: ["on-change", "on-confirm", "on-clear"],
  setup(J, { emit: x }) {
    const r = J, T = _(!1), V = _(!1), y = _(null), h = _(null), w = _(null), t = X({
      inputText: "",
      // input的内容
      startValue: [],
      // 开始时间，[HH,mm,ss]
      endValue: []
      // 结束时间，[HH,mm,ss]
    }), { inputText: Z, startValue: m, endValue: p } = Y(t), j = I(() => ({
      "z-time-picker-disabled": r.disabled
    })), q = I(() => r.clearable && t.inputText && T.value), i = I(() => r.type === "timerange");
    M(
      () => r.modelValue,
      (e) => {
        C(() => {
          E(e);
        });
      },
      { immediate: !0, deep: !0 }
    ), M(
      [() => t.startValue, () => t.endValue],
      () => {
        C(() => {
          G();
        });
      },
      { immediate: !0 }
    );
    const D = () => {
      V.value = !0, F();
    };
    oe(w, () => {
      r.disabled || r.readonly || (V.value = !1);
    });
    const N = (e, n, s, c) => {
      const f = n === "hour" ? 0 : n === "minute" ? 1 : 2;
      let k = null;
      if (e === "start") {
        const d = P(b(t.startValue));
        d[f] = s.text;
        const o = u(d);
        if (i.value)
          if (H(d, t.endValue)) {
            const U = b(o);
            k = [o, U], C(() => h.value.resetScroll(d));
          } else
            k = [o, u(t.endValue)];
        else
          k = o;
      }
      if (e === "end") {
        const d = P(b(t.startValue)), o = P(b(t.endValue));
        if (o[f] = s.text, H(d, o))
          return;
        k = [u(d), u(o)];
      }
      E(k), c(), x("on-change", k);
    }, P = (e) => {
      for (let n = 0; n < 3; n++)
        e[n] = e[n] || 0;
      return e;
    }, u = (e) => $(e, r.format), F = () => {
      C(() => {
        y.value && y.value.resetScroll(t.startValue), h.value && h.value.resetScroll(t.endValue);
      });
    }, G = () => {
      const e = $(t.startValue, r.format);
      if (!i.value) {
        t.inputText = e;
        return;
      }
      const n = $(t.endValue, r.format);
      t.inputText = !e && !n ? "" : `${e}${r.separator}${n}`;
    }, E = (e) => {
      i.value ? (t.startValue = S(e[0]), t.endValue = S(e[1])) : t.startValue = S(e);
    }, S = (e) => e ? se(e) ? K(e).slice(0, 3) : [] : [], K = (e) => e.replace(/[^\d]+/g, ",").split(",").filter((s) => s !== "").map((s, c) => re(parseInt(s, 10), 0, c === 0 ? 23 : 59)), B = (e) => {
      r.disabled || (e.stopPropagation(), V.value = !1, t.inputText = "", t.startValue = [], t.endValue = [], x("on-clear"));
    }, L = () => {
      V.value = !1;
      const e = Q();
      x("on-confirm", e);
    }, Q = () => i.value ? [u(t.startValue), u(t.endValue)] : u(t.startValue);
    return (e, n) => (v(), g("div", {
      class: "z-time-picker-rel",
      ref_key: "timePicker",
      ref: w,
      onClick: D
    }, [
      a("div", {
        class: R(["z-time-picker", l(j)]),
        onMouseenter: n[0] || (n[0] = (s) => T.value = !0),
        onMouseleave: n[1] || (n[1] = (s) => T.value = !1)
      }, [
        ae,
        a("input", {
          type: "text",
          class: "z-input__inner",
          value: l(Z),
          placeholder: e.placeholder,
          disabled: e.disabled,
          readonly: e.readonly
        }, null, 8, ue),
        l(q) ? (v(), g("span", {
          key: 0,
          class: "z-input__suffix",
          onClick: B
        }, de)) : z("", !0)
      ], 34),
      O(ee, { name: "slide-fade" }, {
        default: te(() => [
          V.value ? (v(), g("div", {
            key: 0,
            class: R(["z-time-panel", { "is-range": l(i), "is-confirm": e.confirm }]),
            onClick: n[4] || (n[4] = ne(() => {
            }, ["stop"]))
          }, [
            a("div", me, [
              O(A, {
                ref_key: "startPicker",
                ref: y,
                title: l(i) ? "开始时间" : "",
                hours: l(m).length && l(m)[0],
                minutes: l(m).length && l(m)[1],
                seconds: l(m).length && l(m)[2],
                onItemClick: n[2] || (n[2] = (s, c, f) => N("start", s, c, f))
              }, null, 8, ["title", "hours", "minutes", "seconds"]),
              l(i) ? (v(), le(A, {
                key: 0,
                class: "end-picker-time",
                ref_key: "endPicker",
                ref: h,
                title: l(i) ? "结束时间" : "",
                hours: l(p).length && l(p)[0],
                minutes: l(p).length && l(p)[1],
                seconds: l(p).length && l(p)[2],
                onItemClick: n[3] || (n[3] = (s, c, f) => N("end", s, c, f))
              }, null, 8, ["title", "hours", "minutes", "seconds"])) : z("", !0)
            ]),
            e.confirm ? (v(), g("div", pe, [
              a("button", {
                class: "z-time-panel__btn",
                onClick: B
              }, "清空"),
              a("button", {
                class: "z-time-panel__btn btn__confirm",
                onClick: L
              }, "确定")
            ])) : z("", !0)
          ], 2)) : z("", !0)
        ]),
        _: 1
      })
    ], 512));
  }
});
export {
  Ce as default
};
