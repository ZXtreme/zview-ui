const t = [
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
  "bottom-end"
], o = {
  placement: {
    // 文字提示的位置
    type: String,
    values: t,
    default: "bottom"
  },
  // modelValue: {
  //   type: Boolean,
  //   default: null,
  // },
  content: {
    // 内容
    type: [String, Number],
    default: ""
  },
  width: {
    // 文字提示框的宽度，如"180px"、"80%"
    type: String
  }
};
export {
  o as TooltipProps,
  t as TooltipType
};
