import { defineComponent as W, ref as f, onMounted as R, computed as B, watch as Y, openBlock as z, createElementBlock as D, createElementVNode as v, normalizeStyle as M, unref as m, createVNode as g, withCtx as p, createTextVNode as _, toDisplayString as C } from "vue";
import { SignatureProps as T } from "./signature.mjs";
import k from "../../button/index.mjs";
const U = { class: "z-signature" }, X = { class: "z-signature__content" }, N = { class: "z-signature__footer" }, P = {
  name: "ZSignature"
}, I = /* @__PURE__ */ W({
  ...P,
  props: T,
  emits: ["submit", "clear", "start", "end"],
  setup(w, { emit: r }) {
    const o = w, e = f(null);
    let a = null;
    R(() => {
      e.value.width = e.value.clientWidth, e.value.height = e.value.clientHeight, a = e.value.getContext("2d"), a.strokeStyle = o.lineColor, a.lineWidth = o.lineWidth, a.lineCap = "round", a.lineJoin = "round";
    });
    const s = f(o.backgroundColor ?? "");
    let c, i;
    const y = B(() => ({
      backgroundColor: s.value
    })), h = (t) => {
      a.beginPath(), a.moveTo(c, i), a.lineTo(t.offsetX, t.offsetY), a.stroke(), c = t.offsetX, i = t.offsetY;
    }, b = () => {
      a.clearRect(0, 0, e.value.width, e.value.height), r("clear");
    }, L = async () => new Promise((t) => {
      const n = document.createElement("canvas");
      n.width = e.value.width, n.height = e.value.height;
      const l = n.getContext("2d");
      l.fillStyle = s.value, l.fillRect(0, 0, n.width, n.height);
      let d = new Image();
      d.src = e.value.toDataURL(), d.onload = () => {
        l.drawImage(d, 0, 0), t(n.toDataURL(o.pictureFormat));
      };
    }), S = async () => {
      let t;
      o.reserveBackgroundColor ? t = await L() : t = e.value.toDataURL(o.pictureFormat), r("submit", {
        image: t,
        canvas: e.value
      });
    }, x = (t) => {
      var n, l;
      c = t.offsetX, i = t.offsetY, (n = e.value) == null || n.addEventListener("mousemove", h), (l = e.value) == null || l.addEventListener("mouseup", u), r("start");
    }, u = () => {
      var t, n;
      (t = e.value) == null || t.removeEventListener("mousemove", h), (n = e.value) == null || n.removeEventListener("mouseup", u), r("end");
    }, E = () => {
      s.value = o.backgroundColor ?? "", a.strokeStyle = o.lineColor, a.lineWidth = o.lineWidth;
    };
    return Y([
      () => o.backgroundColor,
      () => o.lineColor,
      () => o.lineWidth
    ], () => {
      E();
    }), (t, n) => (z(), D("div", U, [
      v("div", X, [
        v("canvas", {
          id: "canvas",
          ref_key: "canvas",
          ref: e,
          onMousedown: x,
          onMouseout: u,
          style: M(m(y))
        }, " Your browser does not support the HTML5 canvas tag. ", 36)
      ]),
      v("div", N, [
        g(m(k), { onClick: b }, {
          default: p(() => [
            _(C(o.clear), 1)
          ]),
          _: 1
        }),
        g(m(k), { onClick: S }, {
          default: p(() => [
            _(C(o.confirm), 1)
          ]),
          _: 1
        })
      ])
    ]));
  }
});
export {
  I as default
};
