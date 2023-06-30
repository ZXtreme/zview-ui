import { defineComponent as d, computed as u, openBlock as n, createElementBlock as g, normalizeClass as f, unref as l, normalizeStyle as k, createElementVNode as C, renderSlot as z, createBlock as _, withModifiers as h, createCommentVNode as y } from "vue";
import { tagProps as $, tagEmits as B } from "./tag.mjs";
import E from "../../icon/index.mjs";
const b = { class: "z-tag-content" }, N = {
  name: "ZTag"
}, I = /* @__PURE__ */ d({
  ...N,
  props: $,
  emits: B,
  setup(a, { emit: t }) {
    const c = a, r = u(() => {
      const { type: e, theme: o, round: p, size: s } = c;
      return {
        ["z-tag-round"]: p,
        [`z-tag--${e}`]: e,
        [`z-tag--${s}`]: s,
        [`is-${o}`]: o
      };
    }), i = (e) => {
      t("close", e);
    }, m = (e) => {
      t("click", e);
    };
    return (e, o) => (n(), g("span", {
      class: f(["z-tag", l(r)]),
      style: k({ backgroundColor: e.color }),
      onClick: m
    }, [
      C("span", b, [
        z(e.$slots, "default")
      ]),
      e.closable ? (n(), _(l(E), {
        key: 0,
        name: "close",
        class: "z-tag-close",
        onClick: h(i, ["stop"])
      }, null, 8, ["onClick"])) : y("", !0)
    ], 6));
  }
});
export {
  I as default
};
