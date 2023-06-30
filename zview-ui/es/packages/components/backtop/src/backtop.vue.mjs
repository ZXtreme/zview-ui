import { defineComponent as i, computed as l, unref as t, openBlock as k, createElementBlock as u, normalizeStyle as d, renderSlot as f, createVNode as B, createCommentVNode as b } from "vue";
import _ from "../../icon/index.mjs";
import { BacktopProps as g, BacktopEmits as x } from "./backtop.mjs";
import { useBacktop as y } from "./use-backtop.mjs";
const C = {
  name: "ZBacktop"
}, z = /* @__PURE__ */ i({
  ...C,
  props: g,
  emits: x,
  setup(n, { emit: p }) {
    const o = n, { handleClick: e, visible: m } = y(o, p), s = l(() => ({
      right: `${o.right}px`,
      bottom: `${o.bottom}px`
    }));
    return (a, r) => t(m) ? (k(), u("div", {
      key: 0,
      class: "z-backtop",
      style: d(t(s)),
      onClick: r[0] || (r[0] = //@ts-ignore
      (...c) => t(e) && t(e)(...c))
    }, [
      f(a.$slots, "default", {}, () => [
        B(t(_), { name: "xiangshang1" })
      ])
    ], 4)) : b("", !0);
  }
});
export {
  z as default
};
