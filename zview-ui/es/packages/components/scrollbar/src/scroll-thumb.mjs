const e = {
  // 传入的height高度
  height: {
    type: [String, Number]
  },
  maxHeight: {
    type: Number
  },
  // 传入的width高度
  width: {
    type: [String, Number]
  },
  // 视口总体高度
  viewHeight: {
    type: Number
  },
  // 视口总体宽度
  viewWidth: {
    type: Number
  },
  // thumb高度
  thumbHeight: {
    type: Number
  },
  // thumb宽度
  thumbWidth: {
    type: Number
  },
  // 是否使用原生滚动条
  native: {
    type: Boolean
  },
  // 是否一直显示滚动条
  always: {
    type: Boolean
  },
  // 是否关闭监听容器响应式变化
  noresize: {
    type: Boolean
  },
  // 比例
  retio: {
    type: Number
  },
  // 移动的方向
  move: {
    type: String,
    values: ["moveX", "moveY"]
  }
};
export {
  e as ScrollThumbProps
};
