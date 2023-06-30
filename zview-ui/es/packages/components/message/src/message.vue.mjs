import { defineComponent as c, ref as f, onMounted as g, onUnmounted as v, openBlock as n, createBlock as z, Transition as y, withCtx as C, withDirectives as k, createElementVNode as r, normalizeClass as i, renderSlot as T, createElementBlock as t, toDisplayString as M, createCommentVNode as _, vShow as $ } from "vue";
import { MessageProps as B } from "./message.mjs";
const L = {
  key: 0,
  class: "z-message__content"
}, w = ["innerHTML"], S = {
  name: "ZMessage"
}, D = /* @__PURE__ */ c({
  ...S,
  props: B,
  setup(m) {
    const a = m, s = f(!1);
    let l = null;
    const u = () => {
      s.value = !0, a.duration > 0 && (l = setTimeout(() => {
        s.value = !1;
      }, a.duration));
    }, d = () => {
      s.value = !1;
    };
    return g(() => {
      u();
    }), v(() => {
      clearTimeout(l);
    }), (e, o) => (n(), z(y, {
      name: "z-message-fade",
      onBeforeLeave: o[0] || (o[0] = (p) => e.onClose && e.onClose()),
      onAfterLeave: o[1] || (o[1] = (p) => e.$emit("destroy"))
    }, {
      default: C(() => [
        k(r("div", {
          class: i([
            "z-message",
            e.type ? `z-message--${e.type}` : ""
          ])
        }, [
          r("i", {
            class: i(`z-message__icon z-icon-${e.type}`)
          }, null, 2),
          T(e.$slots, "default", {}, () => [
            e.dangerouslyUseHTMLString ? (n(), t("p", {
              key: 1,
              innerHTML: e.message,
              class: "z-message__content"
            }, null, 8, w)) : (n(), t("p", L, M(e.message), 1))
          ]),
          e.showClose ? (n(), t("i", {
            key: 0,
            class: "z-message__closeBtn z-icon-close1",
            onClick: d
          })) : _("", !0)
        ], 2), [
          [$, s.value]
        ])
      ]),
      _: 3
    }));
  }
});
export {
  D as default
};
