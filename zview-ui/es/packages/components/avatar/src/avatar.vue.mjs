import { defineComponent as d, ref as y, computed as s, watch as z, openBlock as o, createElementBlock as n, normalizeClass as h, unref as t, normalizeStyle as l, createBlock as v, renderSlot as b } from "vue";
import { avatarProps as k, avatarEmits as S } from "./avatar.mjs";
import E from "../../icon/index.mjs";
const $ = ["src", "alt", "srcset"], B = {
  name: "ZAvatar"
}, j = /* @__PURE__ */ d({
  ...B,
  props: k,
  emits: S,
  setup(c, { emit: i }) {
    const r = c, a = y(!1), m = s(() => ({
      [`z-avatar-size--${r.size}`]: typeof r.size != "number",
      [`z-avatar--${r.shape}`]: r.shape,
      [`z-avatar-border--${r.border}`]: r.border
    })), p = s(() => {
      const { size: e } = r;
      return typeof e == "number" ? { width: e + "px", height: e + "px" } : {};
    }), u = s(() => ({
      objectFit: r.fit
    }));
    z(
      () => r.src,
      () => a.value = !1
    );
    function f(e) {
      a.value = !0, i("error", e);
    }
    return (e, C) => (o(), n("span", {
      class: h(["z-avatar", t(m)]),
      style: l(t(p))
    }, [
      (e.src || e.srcSet) && !a.value ? (o(), n("img", {
        key: 0,
        src: e.src,
        alt: e.alt,
        srcset: e.srcSet,
        style: l(t(u)),
        onError: f
      }, null, 44, $)) : e.icon ? (o(), v(t(E), {
        key: 1,
        name: e.icon
      }, null, 8, ["name"])) : b(e.$slots, "default", { key: 2 })
    ], 6));
  }
});
export {
  j as default
};
