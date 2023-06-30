const e = {
  // 滚动达到此参数值才出现
  visibilityHeight: {
    type: Number,
    default: 200
  },
  // 距离页面右边距
  right: {
    type: Number,
    default: 40
  },
  // 距离页面底部距离
  bottom: {
    type: Number,
    default: 40
  }
}, o = {
  click: (t) => t instanceof MouseEvent
};
export {
  o as BacktopEmits,
  e as BacktopProps
};
