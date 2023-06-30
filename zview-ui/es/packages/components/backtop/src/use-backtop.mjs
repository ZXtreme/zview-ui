import { shallowRef as l, ref as u } from "vue";
import { useEventListener as h } from "../../../../node_modules/.pnpm/@vueuse_core@9.13.0_vue@3.2.47/node_modules/@vueuse/core/index.mjs";
import { useThrottleFn as d } from "../../../../node_modules/.pnpm/@vueuse_shared@9.13.0_vue@3.2.47/node_modules/@vueuse/shared/index.mjs";
const T = (n, r) => {
  const c = l(document), o = l(document.documentElement), e = u(!1), s = () => {
    e.value = o.value.scrollTop >= n.visibilityHeight;
  }, i = (a) => {
    var t;
    (t = o.value) == null || t.scrollTo({ top: 0, behavior: "smooth" }), r("click", a);
  }, m = d(s, 300, !0);
  return h(c, "scroll", m), {
    visible: e,
    handleClick: i
  };
};
export {
  T as useBacktop
};
