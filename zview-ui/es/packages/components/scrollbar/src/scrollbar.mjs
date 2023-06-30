const e = (t) => t, a = {
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  // 是否使用原生滚动条样式
  native: {
    type: Boolean,
    default: !1
  },
  wrapStyle: {
    type: e([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: String,
    default: ""
  },
  viewStyle: {
    type: e([String, Object, Array]),
    default: ""
  },
  viewClass: {
    type: String,
    default: ""
  },
  // 不响应容器尺寸变化，如果容器尺寸不会发生变化，最好设置它可以优化性能
  noresize: {
    type: Boolean,
    default: !1
  },
  tag: {
    type: String,
    default: "div"
  },
  always: {
    // 滚动条总是显示
    type: Boolean,
    default: !1
  },
  minSize: {
    // 滚动条最小尺寸
    type: Number,
    default: 20
  }
};
export {
  a as ScrollBarProps
};
