import { defineComponent as _, ref as d, computed as b, onMounted as F, onUnmounted as $, openBlock as g, createElementBlock as p, createVNode as n, unref as a, withCtx as R, createElementVNode as r, Fragment as S, renderList as E, withDirectives as N, vShow as O, renderSlot as D } from "vue";
import { imageViewerProps as A } from "./image-viewer.mjs";
import i from "../../icon/index.mjs";
import B from "../../dialog/index.mjs";
import M from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/throttle.mjs";
const U = { class: "z-image" }, H = {
  class: "z-image-viewer",
  style: { height: "calc(100vh - 40px)" }
}, X = { class: "content" }, Y = { class: "arrow" }, Z = { class: "actions" }, j = ["src"], q = {
  name: "ZImageViewer"
}, W = /* @__PURE__ */ _({
  ...q,
  props: A,
  emits: ["closePreview", "switch"],
  setup(y, { emit: m }) {
    const c = y, u = d(c.initialIndex), t = d({
      scale: 1.2,
      // 放大倍数
      deg: 0
      // 旋转角度
    }), l = d(null), z = d([]), C = () => {
      m("closePreview");
    }, I = b(() => u.value === 0), L = b(() => u.value === c.urlList.length - 1), w = (s) => {
      const e = c.urlList.length;
      u.value = (s % e + e) % e;
    };
    function v(s) {
      const e = c.zoomRate, o = 90;
      switch (s) {
        case "zoomOut":
          if (t.value.scale < 7) {
            if (t.value.scale = Number.parseFloat(
              (t.value.scale * e).toFixed(3)
            ), !l.value)
              break;
            l.value.style.setProperty(
              "--scale",
              t.value.scale.toString()
            );
          }
          break;
        case "zoomIn":
          if (t.value.scale > 0.2) {
            if (t.value.scale = Number.parseFloat(
              (t.value.scale / e).toFixed(3)
            ), !l.value)
              break;
            l.value.style.setProperty(
              "--scale",
              t.value.scale.toString()
            );
          }
          break;
        case "clockwise":
          t.value.deg += o, l.value.style.setProperty("--deg", t.value.deg + "deg");
          break;
        case "anticlockwise":
          t.value.deg -= o, l.value.style.setProperty("--deg", t.value.deg + "deg");
          break;
        case "reset":
          f();
          break;
      }
    }
    const f = () => {
      l.value.style.setProperty("--deg", "0deg"), l.value.style.setProperty("--scale", "1.2"), t.value.scale = 1.2, t.value.deg = 0;
    }, P = () => {
      I.value && !c.infinite || (w(u.value - 1), f(), m("switch"));
    }, x = () => {
      L.value && !c.infinite || (w(u.value + 1), f(), m("switch"));
    }, k = M((s) => {
      const e = s.deltaY || s.deltaX;
      v(e > 0 ? "zoomOut" : "zoomIn");
    }, 30);
    return F(() => {
      window.addEventListener("mousewheel", k);
    }), $(() => {
      window.removeEventListener("mousewheel", k);
    }), (s, e) => (g(), p("div", U, [
      n(a(B), {
        modelValue: s.visable,
        "onUpdate:modelValue": e[5] || (e[5] = (o) => s.visable = o),
        bgColor: "transparent",
        width: "100%",
        top: "0"
      }, {
        content: R(() => [
          r("button", {
            type: "button",
            class: "btn-close",
            onClick: C,
            "aria-label": "Close modal"
          }, [
            n(a(i), { name: "close1" })
          ]),
          r("div", H, [
            r("div", X, [
              r("div", Y, [
                r("span", {
                  onClick: P,
                  class: "arrowLeft"
                }, [
                  n(a(i), { name: "xiangshang2" })
                ]),
                r("span", {
                  onClick: x,
                  class: "arrowRight"
                }, [
                  n(a(i), { name: "xiangxia1" })
                ])
              ]),
              r("div", Z, [
                n(a(i), {
                  onClick: e[0] || (e[0] = (o) => v("zoomOut")),
                  name: "zoomOut"
                }),
                n(a(i), {
                  onClick: e[1] || (e[1] = (o) => v("zoomIn")),
                  name: "zoomIn"
                }),
                n(a(i), {
                  onClick: e[2] || (e[2] = (o) => v("reset")),
                  name: "fullScreen"
                }),
                n(a(i), {
                  onClick: e[3] || (e[3] = (o) => v("anticlockwise")),
                  name: "refreshLeft"
                }),
                n(a(i), {
                  onClick: e[4] || (e[4] = (o) => v("clockwise")),
                  name: "refreshRight"
                })
              ]),
              r("div", {
                class: "canvs",
                ref_key: "canvs",
                ref: l
              }, [
                (g(!0), p(S, null, E(s.urlList, (o, h) => N((g(), p("img", {
                  ref_for: !0,
                  ref: (V) => z.value[h] = V,
                  key: o,
                  src: o
                }, null, 8, j)), [
                  [O, h === u.value]
                ])), 128))
              ], 512)
            ]),
            D(s.$slots, "default")
          ])
        ]),
        _: 3
      }, 8, ["modelValue"])
    ]));
  }
});
export {
  W as default
};
