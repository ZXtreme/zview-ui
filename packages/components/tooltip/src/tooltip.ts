import { ExtractPropTypes } from "vue";

export const TooltipType = [
  "left-start",
  "left",
  "left-end",
  "top-start",
  "top",
  "top-end",
  "right-start",
  "right",
  "right-end",
  "bottom-start",
  "bottom",
  "bottom-end",
];

export const TooltipProps = {
  placement: { // 文字提示的位置
    type: String,
    values: TooltipType,
    default: "bottom"
  },
  // modelValue: {
  //   type: Boolean,
  //   default: null,
  // },
  content: {  // 内容
    type: [String, Number],
    default: ""
  },
  width: {   // 文字提示框的宽度，如"180px"、"80%"
    type: String,
  }

};

export type TooltipProps = ExtractPropTypes<typeof TooltipProps>;
