import { defineComponent as i, computed as s, useSlots as u, openBlock as f, createElementBlock as d, normalizeClass as p, unref as m, renderSlot as _ } from "vue";
import { ContainerProps as z } from "./container.mjs";
const C = {
  name: "ZContainer"
}, Z = /* @__PURE__ */ i({
  ...C,
  props: z,
  setup(a) {
    const t = a, l = s(() => ({
      "z-container-horizontal": c.value
    })), e = u(), c = s(() => t.direction === "vertical" ? !0 : t.direction === "horizontal" ? !1 : e && e.default ? e.default().some((r) => {
      const n = r.type.name;
      return n === "ZHeader" || n === "ZFooter";
    }) : !1);
    return (o, r) => (f(), d("section", {
      class: p(["z-container", m(l)])
    }, [
      _(o.$slots, "default")
    ], 2));
  }
});
export {
  Z as default
};
