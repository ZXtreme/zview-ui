import { defineComponent as K, computed as m, openBlock as a, createElementBlock as c, normalizeClass as u, unref as e, withModifiers as d, createElementVNode as i, normalizeStyle as y, createBlock as g, Transition as k, withCtx as C, withDirectives as $, createVNode as I, vShow as b, createCommentVNode as p, Fragment as M, renderList as E } from "vue";
import { carouselProps as O, carouselEmits as Q } from "./carousel.mjs";
import { useCarousel as R } from "./utils.mjs";
import _ from "../../icon/index.mjs";
const U = { class: "z-carousel-item" }, W = ["src"], X = ["src"], Y = ["src"], x = ["onMouseenter", "onClick"], ee = {
  name: "ZCarousel"
}, ae = /* @__PURE__ */ K({
  ...ee,
  props: O,
  emits: Q,
  setup(B, { expose: N, emit: P }) {
    const t = B, {
      root: S,
      transitionItem: T,
      activeIndex: n,
      arrowDisplay: z,
      hover: v,
      animating: V,
      handleIndicatorClick: A,
      handleMouseEnter: f,
      handleMouseLeave: h,
      setActiveItem: D,
      prev: L,
      next: F,
      throttledArrowClick: w,
      throttledIndicatorHover: H
    } = R(t, P), Z = m(() => ({
      [`z-carousel--${t.direction}`]: t.direction
    })), j = m(() => ({
      [`z-carousel-indicators--${t.direction}`]: t.direction,
      ["z-carousel-indicators-outside"]: t.indicatorPosition === "outside"
    })), q = m(() => ({
      [`z-carousel-indicator-button--${t.indicatorType}`]: t.indicatorType
    })), G = m(() => t.direction === "horizontal" ? {
      left: `${-100 * (n.value + 1)}%`
    } : {
      top: `${-100 * (n.value + 1)}%`
    });
    return N({
      setActiveItem: D,
      prev: L,
      next: F
    }), (o, r) => (a(), c("div", {
      ref_key: "root",
      ref: S,
      class: u(["z-carousel", e(Z)]),
      onMouseenter: r[2] || (r[2] = d(
        //@ts-ignore
        (...s) => e(f) && e(f)(...s),
        ["stop"]
      )),
      onMouseleave: r[3] || (r[3] = d(
        //@ts-ignore
        (...s) => e(h) && e(h)(...s),
        ["stop"]
      ))
    }, [
      i("div", {
        class: "z-carousel-container",
        style: y({ height: o.height })
      }, [
        e(z) ? (a(), g(k, {
          key: 0,
          name: "carousel-arrow-left"
        }, {
          default: C(() => [
            $(i("button", {
              type: "button",
              class: "z-carousel-arrow z-carousel-arrow-left",
              onClick: r[0] || (r[0] = d((s) => e(w)(e(n) - 1), ["stop"]))
            }, [
              I(e(_), { name: "arrow-left2" })
            ], 512), [
              [b, (o.arrow === "always" || e(v)) && (t.loop || e(n) > 0)]
            ])
          ]),
          _: 1
        })) : p("", !0),
        e(z) ? (a(), g(k, {
          key: 1,
          name: "carousel-arrow-right"
        }, {
          default: C(() => [
            $(i("button", {
              type: "button",
              class: "z-carousel-arrow z-carousel-arrow-right",
              onClick: r[1] || (r[1] = d((s) => e(w)(e(n) + 1), ["stop"]))
            }, [
              I(e(_), { name: "arrow-right2" })
            ], 512), [
              [b, (o.arrow === "always" || e(v)) && (t.loop || e(n) < o.data.length - 1)]
            ])
          ]),
          _: 1
        })) : p("", !0),
        i("div", U, [
          i("div", {
            ref_key: "transitionItem",
            ref: T,
            class: u(["z-carousel-item-container", {
              ["z-carousel-item--animating"]: e(V),
              ["z-carousel-item-container-vertical"]: o.direction === "vertical"
            }]),
            style: y(e(G))
          }, [
            i("img", {
              class: "z-carousel-item-img",
              src: o.data[o.data.length - 1]
            }, null, 8, W),
            (a(!0), c(M, null, E(o.data, (s, l) => (a(), c("img", {
              class: "z-carousel-item-img",
              key: l,
              src: s
            }, null, 8, X))), 128)),
            i("img", {
              class: "z-carousel-item-img",
              src: o.data[0]
            }, null, 8, Y)
          ], 6)
        ])
      ], 4),
      o.indicatorPosition !== "none" ? (a(), c("ul", {
        key: 0,
        class: u(["z-carousel-indicators", e(j)])
      }, [
        (a(!0), c(M, null, E(o.data, (s, l) => (a(), c("li", {
          key: l,
          class: u(["z-carousel-indicator", {
            "z-carousel-indicator-active": l === e(n),
            [`z-carousel-indicator--${t.direction}`]: t.direction
          }]),
          onMouseenter: (J) => e(H)(l),
          onClick: d((J) => e(A)(l), ["stop"])
        }, [
          i("button", {
            class: u(["z-carousel-indicator-button", e(q)])
          }, null, 2)
        ], 42, x))), 128))
      ], 2)) : p("", !0)
    ], 34));
  }
});
export {
  ae as default
};
