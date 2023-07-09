import { h, shallowRef, computed, defineComponent } from "vue";
import type { VNode } from "vue"
import { SpaceProps } from "./space-props"


const Space = defineComponent({
  name: "ZSpace",
  props: SpaceProps,
  setup(props, { slots }) {
    const slotList = shallowRef<VNode[]>([]);
    // gap 用于设置 grid 布局或 flex 布局中项目之间的间距的
    // 第一个值为行间距，第二个值为列间距；只传一个值则行列间距相同
    const hStyle = computed(() => {
      return {
        display: props.inline ? "inline-flex" : "flex",
        gap: props.size.length === 1
          ? `${props.size[0]}px`
          : `${props.size[0]}px ${props.size[1]}px`,
        "flex-direction": props.direction === 'horizontal' ? "row" : "column",
        "flex-wrap": props.wrap ? "wrap" : "nowrap",
        "align-items": props.alignment
      };
    });

    if (slots.default) {
      slots.default().forEach((item) => {
        if (typeof item.type === "symbol" && typeof item.children !== "string") {  // v-for 情况
          (item.children as VNode[]).forEach((child) => {
            slotList.value.push(
              h(
                "div",
                {
                  className: "z-space-item"
                },
                child
              )
            );
          })
        }
        else {  // 普通情况
          slotList.value.push(
            h(
              "div",
              {
                className: "z-space-item"
              },
              item
            )
          );
        }
      })
    }

    return () => {
      return h(
        "div",
        {
          className: "z-space",
          style: hStyle.value,
        },
        slotList.value,
      )
    }
  }
})


export default Space;
export type SpaceInstance = InstanceType<typeof Space>;