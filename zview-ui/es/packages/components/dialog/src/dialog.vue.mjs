import { defineComponent as S, ref as $, computed as a, useSlots as T, onMounted as B, watchEffect as D, watch as N, nextTick as X, openBlock as l, createBlock as h, Teleport as Y, createVNode as x, Transition as M, withCtx as O, createElementBlock as d, normalizeClass as r, createElementVNode as u, unref as t, normalizeStyle as I, renderSlot as f, toDisplayString as P, createCommentVNode as i } from "vue";
import { dialogProps as Z } from "./dialog.mjs";
import { onClickOutside as j } from "../../../../node_modules/.pnpm/@vueuse_core@9.13.0_vue@3.2.47/node_modules/@vueuse/core/index.mjs";
import q from "../../icon/index.mjs";
const A = {
  key: 0,
  class: "z-dialog-header"
}, F = { key: 1 }, G = { class: "z-dialog-content" }, H = {
  name: "ZDialog"
}, U = /* @__PURE__ */ S({
  ...H,
  props: Z,
  emits: ["update:modelValue", "open", "close"],
  setup(C, { emit: n }) {
    const o = C, s = $(null), m = a(() => ({
      [`z-dialog-text--${o.align}`]: o.align
    })), k = a(() => ({
      "z-dialog-contentbox-center": o.alignCenter
    })), b = a(() => o.alignCenter ? {
      width: o.width,
      backgroundColor: o.bgColor
    } : {
      width: o.width,
      top: o.top,
      backgroundColor: o.bgColor
    }), w = a(() => ({
      "z-dialog-contentbox-draggable": o.draggable
    })), c = T(), z = () => {
      n("close"), n("update:modelValue", !1);
    };
    B(() => {
      D(() => {
        o.modelValue ? o.scrollLock && typeof document < "u" && (document.body.style.overflow = "hidden") : typeof document < "u" && (document.body.style.overflow = "initial");
      });
    }), j(s, (e) => {
      o.closeOnModal && (n("update:modelValue", !1), n("close"));
    }), N(
      () => o.modelValue,
      (e) => {
        e && (X(() => {
          s.value && E(s.value);
        }), n("open"));
      }
    );
    const E = (e) => {
      if (!o.draggable)
        return;
      let g = e.firstElementChild;
      const V = (p) => {
        let _ = p.clientX - e.offsetLeft, L = p.clientY - e.offsetTop;
        const y = (v) => {
          e.style.left = v.clientX - _ + "px", e.style.top = v.clientY - L + "px";
        };
        document.addEventListener("mousemove", y), document.addEventListener("mouseup", () => {
          document.removeEventListener("mousemove", y);
        });
      };
      g.addEventListener("mousedown", V);
    };
    return (e, g) => (l(), h(Y, { to: "body" }, [
      x(M, { name: "fade" }, {
        default: O(() => [
          e.modelValue ? (l(), d("div", {
            key: 0,
            class: r(["z-dialog-default", e.customClass])
          }, [
            u("div", {
              class: r(["z-dialog-contentbox", [t(k), t(w)]]),
              style: I(t(b)),
              ref_key: "dragEl",
              ref: s
            }, [
              t(c).header || e.title ? (l(), d("div", A, [
                u("p", {
                  class: r(["z-dialog-title", t(m)])
                }, [
                  t(c).header ? f(e.$slots, "header", { key: 0 }) : (l(), d("span", F, P(e.title), 1))
                ], 2),
                e.showClose ? (l(), h(t(q), {
                  key: 0,
                  class: "z-dialog-close",
                  name: "close1",
                  onClick: z
                })) : i("", !0)
              ])) : i("", !0),
              u("div", G, [
                f(e.$slots, "content")
              ]),
              t(c).footer ? (l(), d("div", {
                key: 1,
                class: r(["z-dialog-footer", t(m)])
              }, [
                f(e.$slots, "footer")
              ], 2)) : i("", !0)
            ], 6)
          ], 2)) : i("", !0)
        ]),
        _: 3
      })
    ]));
  }
});
export {
  U as default
};
