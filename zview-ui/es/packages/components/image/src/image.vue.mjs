import { defineComponent as R, ref as i, computed as p, watch as q, onMounted as N, openBlock as r, createElementBlock as l, mergeProps as j, unref as y, createCommentVNode as s, createElementVNode as h, Fragment as I, renderList as D, normalizeStyle as M, renderSlot as w, createBlock as Z, withCtx as G } from "vue";
import { ImageProps as J } from "./image.mjs";
import K from "./image-viewer.vue.mjs";
import O from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/throttle.mjs";
const Q = ["src"], T = { class: "content" }, U = ["data-src", "src"], W = {
  key: 2,
  class: "wrapper"
}, X = /* @__PURE__ */ h("div", { class: "placeholder" }, "Loading..", -1), Y = /* @__PURE__ */ h("div", { class: "error" }, "Fail", -1), x = { key: 0 }, ee = {
  name: "ZImage"
}, se = /* @__PURE__ */ R({
  ...ee,
  props: J,
  emits: ["load", "error", "switch", "close"],
  setup(S, { emit: v }) {
    const t = S, m = i(""), a = i(!1), c = i(!0), u = i(!1), E = i(null), b = i(null), k = p(() => {
      const { fit: e, width: o, height: n } = t;
      return {
        width: o,
        height: n,
        objectFit: e
      };
    }), g = p(() => {
      const { previewSrcList: e } = t;
      return Array.isArray(e) && e.length > 0;
    }), z = p(() => {
      const { previewSrcList: e, initialIndex: o } = t;
      let n = o;
      return o >= e.length && (n = 0), n;
    }), $ = (e) => {
      c.value = !1, a.value = !1, v("load", e);
    }, A = (e) => {
      c.value = !1, a.value = !0, v("error", e);
    }, B = () => {
      g.value && (document.body.style.overflow = "hidden", u.value = !u.value);
    }, F = (e) => Array.from(document.querySelectorAll(e)), C = O(L, 200);
    function L() {
      var d, _;
      const e = ((d = t.scrollContainer) == null ? void 0 : d.offsetHeight) ?? window.innerHeight, o = F(".z-image .lazyImg img[data-src]"), n = ((_ = t.scrollContainer) == null ? void 0 : _.getBoundingClientRect().top) ?? 0;
      if (o.length === 0) {
        (t.scrollContainer ?? window).removeEventListener("scroll", C);
        return;
      }
      o.forEach((f) => {
        f.getBoundingClientRect().top - n < e && (f.src = f.dataset.src, f.removeAttribute("data-src"));
      });
    }
    const H = (e) => {
      e.addEventListener("scroll", C);
    };
    q(
      () => t.scrollContainer,
      () => {
        const e = t.scrollContainer ?? window;
        H(e);
      },
      {
        immediate: !0
      }
    );
    const V = () => {
      u.value = !1, document.body.style.overflow = "auto", v("close");
    }, P = () => {
      v("switch");
    };
    return N(() => {
      c.value = !0, a.value = !1, m.value = t.src, g.value && (m.value = t.previewSrcList[z.value]), L();
    }), (e, o) => (r(), l("div", {
      ref_key: "container",
      ref: E,
      class: "z-image"
    }, [
      m.value !== "" && !a.value && !e.lazy ? (r(), l("img", j({
        key: 0,
        src: m.value
      }, e.$attrs, {
        style: y(k),
        onClick: B,
        onLoad: $,
        onError: A,
        class: "main-img"
      }), null, 16, Q)) : s("", !0),
      e.lazy ? (r(), l("div", {
        key: 1,
        class: "lazy-imgs",
        ref_key: "scrollContainer",
        ref: b
      }, [
        h("div", T, [
          (r(!0), l(I, null, D(e.lazyList, (n, d) => (r(), l("div", {
            key: d,
            class: "lazyImg"
          }, [
            h("img", {
              "data-src": n,
              alt: "加载中...",
              src: e.altImg,
              style: M(y(k))
            }, null, 12, U)
          ]))), 128))
        ])
      ], 512)) : s("", !0),
      (c.value || a.value) && !e.lazy ? (r(), l("div", W, [
        c.value ? w(e.$slots, "placeholder", { key: 0 }, () => [
          X
        ]) : a.value ? w(e.$slots, "error", { key: 1 }, () => [
          Y
        ]) : s("", !0)
      ])) : s("", !0),
      y(g) ? (r(), l(I, { key: 3 }, [
        u.value ? (r(), Z(K, {
          key: 0,
          visable: u.value,
          "initial-index": y(z),
          infinite: e.infinite,
          "zoom-rate": e.zoomRate,
          "url-list": e.previewSrcList,
          onClosePreview: V,
          onSwitch: P
        }, {
          default: G(() => [
            e.$slots.viewer ? (r(), l("div", x, [
              w(e.$slots, "viewer")
            ])) : s("", !0)
          ]),
          _: 3
        }, 8, ["visable", "initial-index", "infinite", "zoom-rate", "url-list"])) : s("", !0)
      ], 64)) : s("", !0)
    ], 512));
  }
});
export {
  se as default
};
