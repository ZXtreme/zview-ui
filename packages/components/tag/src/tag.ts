import type { ExtractPropTypes } from "vue";

export const tagProps = {
  // 是否可关闭
  closable: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", "primary"],
    default: "primary",
  },
  // 背景色
  color: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    values: ["medium", "small", "large"],
    default: "medium",
  },
  theme: {
    type: String,
    values: ["dark", "plain"],
    default: "plain",
  },
  // 是否圆角
  round: {
    type: Boolean,
    default: false
  }
};
export type TagProps = ExtractPropTypes<typeof tagProps>;

export const tagEmits = {
  close: (evt: MouseEvent) => evt instanceof MouseEvent,
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
};
export type TagEmits = typeof tagEmits;
