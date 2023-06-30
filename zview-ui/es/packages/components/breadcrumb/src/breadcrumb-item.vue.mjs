import { defineComponent as p, inject as m, toRefs as _, openBlock as o, createElementBlock as t, createElementVNode as s, renderSlot as l, unref as e, createBlock as d, toDisplayString as i } from "vue";
import u from "../../icon/index.mjs";
import { BreadcrumbItemProps as f } from "./breadcrumb-item.mjs";
const b = { class: "z-breadcrumb__item" }, k = { class: "item__separator" }, B = { key: 1 }, I = {
  name: "ZBreadcrumbItem"
}, S = /* @__PURE__ */ p({
  ...I,
  props: f,
  setup(h) {
    const a = m("breadcrumbProps", { separator: void 0, separatorIcon: void 0 }), { separator: n, separatorIcon: r } = _(a);
    return (c, y) => (o(), t("span", b, [
      s("span", null, [
        l(c.$slots, "default")
      ]),
      s("span", k, [
        e(r) ? (o(), d(e(u), {
          key: 0,
          name: e(r)
        }, null, 8, ["name"])) : (o(), t("span", B, i(e(n)), 1))
      ])
    ]));
  }
});
export {
  S as default
};
