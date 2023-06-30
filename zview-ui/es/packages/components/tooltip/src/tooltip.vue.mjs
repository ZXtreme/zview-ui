import { defineComponent as w, getCurrentInstance as H, toRefs as E, ref as m, onMounted as T, watchEffect as W, nextTick as _, onUnmounted as z, openBlock as C, createElementBlock as $, renderSlot as b } from "vue";
import { TooltipProps as L } from "./tooltip.mjs";
const k = {
  name: "ZTooltip"
}, c = /* @__PURE__ */ w({
  ...k,
  props: L,
  setup(y) {
    const p = y, f = H(), { placement: i, content: a, width: n } = E(p), d = m(!1);
    let s = null;
    function g(e) {
      e && e.classList.remove("z-tooltip-show");
    }
    function x(e) {
      e && e.classList.add("z-tooltip-show");
    }
    function v(e, t, h) {
      let o = document.documentElement.scrollTop, l = 0;
      return {
        "top-start": () => {
          l += e.x, o += e.y - t.offsetHeight;
        },
        top: () => {
          l += e.x + (e.width - t.offsetWidth) * 0.5, o += e.y - t.offsetHeight;
        },
        "top-end": () => {
          l += e.x + e.width - t.offsetWidth, o += e.y - t.offsetHeight;
        },
        "left-start": () => {
          l += e.x - t.offsetWidth, o += e.y;
        },
        left: () => {
          l += e.x - t.offsetWidth, o += e.y + (e.height - t.offsetHeight) * 0.5;
        },
        "left-end": () => {
          l += e.x - t.offsetWidth, o += e.y + e.height - t.offsetHeight;
        },
        "right-start": () => {
          l += e.x + e.width, o += e.y;
        },
        right: () => {
          l += e.x + e.width, o += e.y + (e.height - t.offsetHeight) * 0.5;
        },
        "right-end": () => {
          l += e.x + e.width, o += e.y + e.height - t.offsetHeight;
        },
        "bottom-start": () => {
          l += e.x, o += e.y + e.height;
        },
        bottom: () => {
          l += e.x + (e.width - t.offsetWidth) * 0.5, o += e.y + e.height;
        },
        "bottom-end": () => {
          l += e.x + e.width - t.offsetWidth, o += e.y + e.height;
        }
      }[h](), { x: l, y: o };
    }
    return T(() => {
      var h;
      const e = (h = f == null ? void 0 : f.proxy) == null ? void 0 : h.$el;
      s = document.createElement("div"), s.className = `z-tooltip z-tooltip-${i.value}`, n != null && n.value && (s.style.width = n.value), document.body.appendChild(s), W(() => {
        s.innerHTML = `<span>${a == null ? void 0 : a.value}</span>` || "", _(() => {
          var u;
          const o = (u = f == null ? void 0 : f.proxy) == null ? void 0 : u.$el.firstElementChild.getBoundingClientRect(), { x: l, y: r } = v(o, s, i.value);
          s.style.top = r + "px", s.style.left = l + "px";
        }), s.className = `z-tooltip z-tooltip-${i.value}`, n != null && n.value && (s.style.width = n.value), d.value ? x(s) : g(s);
      }), z(() => {
        s && document.body.removeChild(s);
      });
      const t = m(null);
      e && e.addEventListener("mouseenter", () => {
        clearTimeout(t.value), d.value = !0;
      }), e && e.addEventListener("mouseleave", () => {
        t.value = setTimeout(() => {
          d.value = !1;
        }, 500);
      });
    }), (e, t) => (C(), $("span", null, [
      b(e.$slots, "default")
    ]));
  }
});
export {
  c as default
};
