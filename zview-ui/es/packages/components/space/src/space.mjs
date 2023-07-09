import { defineComponent as c, shallowRef as o, computed as r, h as i } from "vue";
import { SpaceProps as f } from "./space-props.mjs";
const d = c({
  name: "ZSpace",
  props: f,
  setup(e, { slots: t }) {
    const l = o([]), n = r(() => ({
      display: e.inline ? "inline-flex" : "flex",
      gap: e.size.length === 1 ? `${e.size[0]}px` : `${e.size[0]}px ${e.size[1]}px`,
      "flex-direction": e.direction === "horizontal" ? "row" : "column",
      "flex-wrap": e.wrap ? "wrap" : "nowrap",
      "align-items": e.alignment
    }));
    return t.default && t.default().forEach((a) => {
      typeof a.type == "symbol" && typeof a.children != "string" ? a.children.forEach((s) => {
        l.value.push(
          i(
            "div",
            {
              className: "z-space-item"
            },
            s
          )
        );
      }) : l.value.push(
        i(
          "div",
          {
            className: "z-space-item"
          },
          a
        )
      );
    }), () => i(
      "div",
      {
        className: "z-space",
        style: n.value
      },
      l.value
    );
  }
});
export {
  d as default
};
