import { defineComponent as F, ref as v, computed as g, watch as A, openBlock as t, createElementBlock as o, normalizeClass as l, Fragment as z, createElementVNode as s, mergeProps as y, unref as i, withModifiers as c, createCommentVNode as p, createVNode as V, Transition as $, withCtx as G, toDisplayString as B } from "vue";
import { InputProps as w } from "./input.mjs";
const N = ["type", "value", "onInput"], E = ["onClick"], P = ["value", "maxlength", "onInput"], S = { class: "z-textarea-maxlength" }, D = {
  name: "ZInput"
}, j = /* @__PURE__ */ F({
  ...D,
  props: w,
  emits: ["change", "blur", "focus"],
  setup(k, { expose: I, emit: a }) {
    const r = k, n = v(r.modelValue), b = g(() => ({
      [`z-input-${r.size}`]: r.size
    })), u = v(null), f = g(() => n.value ? String(n.value).length : 0);
    A(
      () => r.modelValue,
      (e) => {
        n.value = e ?? "";
      }
    );
    const h = (e) => {
      n.value = e.target.value, a("change", n.value);
    }, C = () => {
      n.value = "", a("change", n.value);
    }, m = (e) => {
      a("blur", e, e.target.value);
    }, d = (e) => {
      a("focus", e, e.target.value);
    };
    return I({
      inputGetFocus: () => {
        var e;
        (e = u.value) == null || e.focus();
      },
      inputGetBlur: () => {
        var e;
        (e = u.value) == null || e.blur();
      }
    }), (e, T) => (t(), o("div", {
      class: l(["z-from-input", {
        "z-input-icon-before": e.iconBefore && e.iconBefore !== "",
        "z-input-icon-after": e.iconAfter && e.iconAfter !== "" || e.clearable
      }])
    }, [
      e.type !== "textarea" ? (t(), o(z, { key: 0 }, [
        s("input", y({ class: "z-input" }, e.$attrs, {
          type: e.type,
          value: n.value,
          class: i(b),
          ref_key: "input",
          ref: u,
          onInput: c(h, ["stop"]),
          onBlur: m,
          onFocus: d
        }), null, 16, N),
        e.iconAfter && e.iconAfter !== "" ? (t(), o("i", {
          key: 0,
          class: l(["z-after", `z-icon-${e.iconAfter}`])
        }, null, 2)) : p("", !0),
        e.iconBefore && e.iconBefore !== "" ? (t(), o("i", {
          key: 1,
          class: l(["z-before", `z-icon-${e.iconBefore}`])
        }, null, 2)) : p("", !0),
        V($, { name: "fade" }, {
          default: G(() => [
            e.clearable && i(f) > 0 ? (t(), o("span", {
              key: 0,
              class: "z-icon-h",
              onClick: c(C, ["stop"])
            }, null, 8, E)) : p("", !0)
          ]),
          _: 1
        })
      ], 64)) : (t(), o(z, { key: 1 }, [
        s("textarea", y({ class: "z-textarea" }, e.$attrs, {
          value: n.value,
          maxlength: e.maxlength,
          ref_key: "input",
          ref: u,
          onInput: c(h, ["stop"]),
          onBlur: m,
          onFocus: d
        }), `
      `, 16, P),
        s("span", S, B(i(f)) + "/" + B(e.maxlength), 1)
      ], 64))
    ], 2));
  }
});
export {
  j as default
};
