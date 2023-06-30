import { defineComponent as j, ref as m, onMounted as q, computed as R, watch as A, openBlock as f, createElementBlock as k, normalizeStyle as U, unref as o, createVNode as a, withCtx as i, createElementVNode as b, createTextVNode as d, toDisplayString as G, createBlock as K, createCommentVNode as _, withDirectives as M, vModelText as I } from "vue";
import { DrawboardProps as O } from "./drawboard.mjs";
import u from "../../button/index.mjs";
import Q from "../../scrollbar/index.mjs";
import E from "../../slider/index.mjs";
import ee from "../../divider/index.mjs";
const te = { class: "z-board-item1" }, oe = /* @__PURE__ */ d("回退"), le = /* @__PURE__ */ d("清空"), ae = /* @__PURE__ */ d("保存"), ne = /* @__PURE__ */ d("橡皮大小"), re = /* @__PURE__ */ d("线条颜色"), ie = /* @__PURE__ */ d("线条宽度"), se = /* @__PURE__ */ d("背景颜色"), ue = {
  key: 0,
  class: "z-board-item2"
}, de = /* @__PURE__ */ d("橡皮大小"), ce = {
  key: 1,
  class: "z-board-item2"
}, pe = /* @__PURE__ */ d("线条颜色"), ve = {
  key: 2,
  class: "z-board-item2"
}, me = /* @__PURE__ */ d("线条宽度"), fe = {
  key: 3,
  class: "z-board-item2"
}, he = /* @__PURE__ */ d("背景颜色"), ye = ["width", "height"], ge = {
  name: "ZDrawboard"
}, ze = /* @__PURE__ */ j({
  ...ge,
  props: O,
  setup(L) {
    const r = L, s = m(null);
    let n = null;
    q(() => {
      n = s.value.getContext("2d");
    });
    const V = (t) => {
      y.value = t;
    }, B = (t) => {
      c.value = t;
    }, w = m(""), h = m(""), c = m(0), y = m(0), p = m(0), C = m(!1);
    let x = 0, z = 0;
    const g = m(!1), v = [], N = R(() => ({
      width: r.width + "px"
    })), X = R(() => ({
      cursor: g.value ? `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="15" fill="none" stroke="%23000" stroke-width="2"/><circle cx="16" cy="16" r="2" fill="black"/></svg>') 16 16, auto` : "crosshair",
      backgroundColor: h.value
    })), Y = (t) => {
      C.value && (n.beginPath(), g.value ? n.clearRect(
        t.offsetX - c.value / 2,
        t.offsetY - c.value / 2,
        c.value,
        c.value
      ) : (n.strokeStyle = w.value, n.lineWidth = y.value, n.lineCap = "round", n.lineJoin = "round", n.moveTo(x, z), n.lineTo(t.offsetX, t.offsetY), n.stroke(), x = t.offsetX, z = t.offsetY));
    }, W = () => {
      v.push(s.value.toDataURL());
    }, $ = () => {
      if (v.length > 1) {
        v.pop();
        let t = new Image();
        t.src = v[v.length - 1], t.onload = () => {
          n.clearRect(0, 0, s.value.width, s.value.height), n.drawImage(t, 0, 0);
        };
      } else
        n.clearRect(0, 0, s.value.width, s.value.height), v.length = 0;
    }, T = () => {
      n.clearRect(0, 0, s.value.width, s.value.height), W();
    }, P = async () => new Promise((t) => {
      const e = document.createElement("canvas");
      e.width = s.value.width, e.height = s.value.height;
      const l = e.getContext("2d");
      l.fillStyle = h.value, l.fillRect(0, 0, e.width, e.height);
      let S = new Image();
      S.src = v[v.length - 1], S.onload = () => {
        l.drawImage(S, 0, 0), t(e.toDataURL(r.pictureFormat));
      };
    }), F = async () => {
      let t;
      r.reserveBackgroundColor ? t = await P() : t = s.value.toDataURL(r.pictureFormat);
      const e = document.createElement("a");
      e.href = t, e.download = r.pictureName, e.target = "_blank", e.click();
    }, H = (t) => {
      C.value = !0, x = t.offsetX, z = t.offsetY;
    }, D = (t) => {
      C.value = !1, W();
    }, J = (t) => {
      C.value && D();
    }, Z = () => {
      w.value = r.lineColor, h.value = r.backgroundColor, c.value = r.eraserWidth, y.value = r.lineWidth;
    };
    return A([
      () => r.backgroundColor,
      () => r.lineColor,
      () => r.lineWidth,
      () => r.eraserWidth
    ], () => {
      Z();
    }, {
      immediate: !0
    }), (t, e) => (f(), k("div", {
      class: "z-board",
      style: U(o(N))
    }, [
      a(o(Q), null, {
        default: i(() => [
          b("div", te, [
            a(o(u), {
              type: "primary",
              plain: "",
              ref: "eraseBtn",
              onClick: e[0] || (e[0] = (l) => g.value = !g.value)
            }, {
              default: i(() => [
                d(G(g.value ? "画笔" : "橡皮"), 1)
              ]),
              _: 1
            }, 512),
            a(o(u), {
              type: "primary",
              plain: "",
              ref: "undoBtn",
              onClick: $
            }, {
              default: i(() => [
                oe
              ]),
              _: 1
            }, 512),
            a(o(u), {
              type: "primary",
              plain: "",
              ref: "clearBtn",
              onClick: T
            }, {
              default: i(() => [
                le
              ]),
              _: 1
            }, 512),
            t.isSave ? (f(), K(o(u), {
              key: 0,
              type: "primary",
              plain: "",
              id: "save-btn",
              ref: "saveBtn",
              onClick: F
            }, {
              default: i(() => [
                ae
              ]),
              _: 1
            }, 512)) : _("", !0),
            a(o(u), {
              type: "primary",
              plain: "",
              onClick: e[1] || (e[1] = (l) => p.value = 0)
            }, {
              default: i(() => [
                ne
              ]),
              _: 1
            }),
            a(o(u), {
              type: "primary",
              plain: "",
              onClick: e[2] || (e[2] = (l) => p.value = 1)
            }, {
              default: i(() => [
                re
              ]),
              _: 1
            }),
            a(o(u), {
              type: "primary",
              plain: "",
              onClick: e[3] || (e[3] = (l) => p.value = 2)
            }, {
              default: i(() => [
                ie
              ]),
              _: 1
            }),
            a(o(u), {
              type: "primary",
              plain: "",
              onClick: e[4] || (e[4] = (l) => p.value = 3)
            }, {
              default: i(() => [
                se
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }),
      p.value === 0 ? (f(), k("div", ue, [
        a(o(u), {
          type: "primary",
          plain: "",
          class: "z-item2-right"
        }, {
          default: i(() => [
            de
          ]),
          _: 1
        }),
        a(o(E), {
          modelValue: c.value,
          "onUpdate:modelValue": e[5] || (e[5] = (l) => c.value = l),
          "show-input": "",
          onChange: B,
          onInput: B,
          min: 3,
          max: 48
        }, null, 8, ["modelValue"])
      ])) : _("", !0),
      p.value === 1 ? (f(), k("div", ce, [
        a(o(u), {
          type: "primary",
          plain: "",
          class: "z-item2-right"
        }, {
          default: i(() => [
            pe
          ]),
          _: 1
        }),
        M(b("input", {
          type: "color",
          "onUpdate:modelValue": e[6] || (e[6] = (l) => w.value = l),
          class: "z-board-color-picker"
        }, null, 512), [
          [I, w.value]
        ])
      ])) : _("", !0),
      p.value === 2 ? (f(), k("div", ve, [
        a(o(u), {
          type: "primary",
          plain: "",
          class: "z-item2-right"
        }, {
          default: i(() => [
            me
          ]),
          _: 1
        }),
        a(o(E), {
          modelValue: y.value,
          "onUpdate:modelValue": e[7] || (e[7] = (l) => y.value = l),
          "show-input": "",
          onChange: V,
          onInput: V,
          min: 1,
          max: 32
        }, null, 8, ["modelValue"])
      ])) : _("", !0),
      p.value === 3 ? (f(), k("div", fe, [
        a(o(u), {
          type: "primary",
          plain: "",
          class: "z-item2-right"
        }, {
          default: i(() => [
            he
          ]),
          _: 1
        }),
        M(b("input", {
          type: "color",
          "onUpdate:modelValue": e[8] || (e[8] = (l) => h.value = l),
          class: "z-board-color-picker"
        }, null, 512), [
          [I, h.value]
        ])
      ])) : _("", !0),
      a(o(ee), { style: { margin: "5px 0" } }),
      b("canvas", {
        id: "canvas",
        ref_key: "canvas",
        ref: s,
        width: t.width,
        height: t.height,
        onMousemove: Y,
        onMouseup: D,
        onMouseout: J,
        onMousedown: H,
        style: U(o(X))
      }, null, 44, ye)
    ], 4));
  }
});
export {
  ze as default
};
