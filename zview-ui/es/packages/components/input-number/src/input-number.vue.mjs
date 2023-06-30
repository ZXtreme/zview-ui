import { defineComponent as D, ref as r, watch as k, onMounted as Z, openBlock as z, createElementBlock as C, normalizeClass as c, Fragment as j, createElementVNode as p, createVNode as v, unref as d, nextTick as P } from "vue";
import x from "../../input/index.mjs";
import N from "../../icon/index.mjs";
import { InputNumberProps as q } from "./input-number.mjs";
const A = { class: "crease_container" }, H = {
  name: "ZInputNumber"
}, W = /* @__PURE__ */ D({
  ...H,
  props: q,
  emits: ["change", "blur", "focus"],
  setup(E, { expose: L, emit: g }) {
    const a = E, s = r(""), o = r(a.disabled), b = r(a.min), f = r(a.max), t = r(a.step), F = r(a.stepStrictly), V = r(a.precision), i = r(a.readonly), l = r(a.modelValue), B = r(""), y = r(null), M = (e, u, n) => n - e < e - u ? "end" : "start", T = (e, u) => {
      const n = Math.floor(e / u);
      return [n * u, n * u + u];
    }, I = (e) => {
      o.value || i.value || h(Number(l.value) - e) || (l.value = Number(l.value) - e, m());
    }, S = (e) => {
      o.value || i.value || h(Number(l.value) + e) || (l.value = Number(l.value) + e, m());
    }, G = (e, u) => {
      l.value = Number(u), P(() => {
        if (F.value) {
          const n = T(Number(l.value), t.value);
          M(Number(l.value), n[0], n[1]) === "start" ? l.value = n[0] : l.value = n[1];
        }
        g("blur", e), m();
      });
    }, $ = (e) => {
      g("focus", e);
    }, h = (e) => e < b.value || e > f.value ? !0 : (s.value = "", !1), m = () => {
      P(() => {
        o.value || i.value || (Number(l.value) <= b.value ? (s.value = "decrease", l.value = b.value) : Number(l.value) >= f.value ? (s.value = "increase", l.value = f.value) : s.value !== "" && (s.value = ""), g("change", l.value, B.value), V.value >= 1 ? l.value = Number(l.value).toFixed(V.value) : l.value = Number(Number(l.value).toFixed(6)));
      });
    }, U = () => {
      var e;
      (e = y.value) == null || e.inputGetFocus();
    }, w = () => {
      var e;
      (e = y.value) == null || e.inputGetBlur();
    };
    return k(
      [
        () => a.disabled,
        () => a.min,
        () => a.max,
        () => a.step,
        () => a.stepStrictly,
        () => a.precision,
        () => a.readonly
      ],
      () => {
        o.value = a.disabled, b.value = a.min, f.value = a.max, t.value = a.step, F.value = a.stepStrictly, V.value = a.precision, i.value = a.readonly;
      }
    ), k(
      () => l.value,
      (e, u) => {
        B.value = u;
      }
    ), k(
      () => a.modelValue,
      (e) => {
        l.value = e, m();
      }
    ), Z(() => {
      m();
    }), L({
      inputGetFocus: U,
      inputGetBlur: w
    }), (e, u) => (z(), C("div", {
      class: c([
        "z-input-number",
        { "is-disabled": o.value },
        { small: e.size === "small" },
        { large: e.size === "large" },
        { right: e.controlsPosition === "right" },
        { controls: !e.controls }
      ])
    }, [
      a.controlsPosition ? (z(), C(j, { key: 1 }, [
        v(d(x), {
          modelValue: l.value,
          "onUpdate:modelValue": u[3] || (u[3] = (n) => l.value = n),
          type: "number",
          readonly: i.value,
          name: e.name,
          label: e.label,
          placeholder: e.placeholder,
          disabled: o.value,
          ref_key: "input",
          ref: y,
          onFocus: $,
          onBlur: G
        }, null, 8, ["modelValue", "readonly", "name", "label", "placeholder", "disabled"]),
        p("div", A, [
          p("span", {
            class: c([
              "z-input-number__increase",
              { "is-disabled": s.value === "increase" }
            ]),
            onClick: u[4] || (u[4] = (n) => S(t.value))
          }, [
            v(d(N), { name: "xiangshang2" })
          ], 2),
          p("span", {
            class: c([
              "z-input-number__decrease",
              { "is-disabled": s.value === "decrease" }
            ]),
            onClick: u[5] || (u[5] = (n) => I(t.value))
          }, [
            v(d(N), { name: "xiangxia1" })
          ], 2)
        ])
      ], 64)) : (z(), C(j, { key: 0 }, [
        p("span", {
          class: c([
            "z-input-number__decrease",
            { "is-disabled": s.value === "decrease" }
          ]),
          onClick: u[0] || (u[0] = (n) => I(t.value))
        }, [
          v(d(N), { name: "jian" })
        ], 2),
        v(d(x), {
          modelValue: l.value,
          "onUpdate:modelValue": u[1] || (u[1] = (n) => l.value = n),
          type: "number",
          readonly: i.value,
          name: e.name,
          label: e.label,
          placeholder: e.placeholder,
          disabled: o.value,
          ref_key: "input",
          ref: y,
          onFocus: $,
          onBlur: G
        }, null, 8, ["modelValue", "readonly", "name", "label", "placeholder", "disabled"]),
        p("span", {
          class: c([
            "z-input-number__increase",
            { "is-disabled": s.value === "increase" }
          ]),
          onClick: u[2] || (u[2] = (n) => S(t.value))
        }, [
          v(d(N), { name: "jia" })
        ], 2)
      ], 64))
    ], 2));
  }
});
export {
  W as default
};
