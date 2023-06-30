import { defineComponent as u, computed as h, openBlock as t, createElementBlock as i, normalizeClass as s, renderSlot as l, unref as a, normalizeStyle as f, createBlock as k, createCommentVNode as m, createElementVNode as n, toDisplayString as r } from "vue";
import { timelineItemProps as y } from "./timeline-item.mjs";
import v from "../../icon/index.mjs";
const _ = /* @__PURE__ */ n("div", { class: "z-timeline-item-tail" }, null, -1), C = {
  key: 0,
  class: "z-timeline-item-dot"
}, $ = { class: "z-timeline-item-wrapper" }, b = {
  key: 0,
  class: "z-timeline-item-timestamp z-timeline-item-top"
}, w = { class: "z-timeline-item-content" }, B = {
  key: 1,
  class: "z-timeline-item-timestamp z-timeline-item-bottom"
}, I = {
  name: "ZTimelineItem"
}, E = /* @__PURE__ */ u({
  ...I,
  props: y,
  setup(d) {
    const c = d, p = h(() => {
      const { size: e, type: o, hollow: z } = c;
      return {
        [`z-timeline-item-node--${e}`]: e,
        [`z-timeline-item-node--${o}`]: o,
        ["z-timeline-item-node-hollow"]: z
      };
    });
    return (e, o) => (t(), i("li", {
      class: s(["z-timeline-item", { ["z-timeline-item-center"]: e.center }])
    }, [
      _,
      e.$slots.dot ? (t(), i("div", C, [
        l(e.$slots, "dot")
      ])) : (t(), i("div", {
        key: 1,
        class: s(["z-timeline-item-node", a(p)]),
        style: f({ backgroundColor: e.color })
      }, [
        e.icon ? (t(), k(a(v), {
          key: 0,
          class: "z-timeline-item-icon",
          name: e.icon
        }, null, 8, ["name"])) : m("", !0)
      ], 6)),
      n("div", $, [
        !e.hideTimestamp && e.placement === "top" ? (t(), i("div", b, r(e.timestamp), 1)) : m("", !0),
        n("div", w, [
          l(e.$slots, "default")
        ]),
        !e.hideTimestamp && e.placement === "bottom" ? (t(), i("div", B, r(e.timestamp), 1)) : m("", !0)
      ])
    ], 2));
  }
});
export {
  E as default
};
