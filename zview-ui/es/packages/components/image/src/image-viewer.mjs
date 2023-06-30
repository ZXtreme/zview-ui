const e = {
  //预览图片
  visable: {
    type: Boolean
  },
  // 用于预览的图片链接列表
  urlList: {
    type: Array,
    default: []
  },
  initialIndex: {
    type: Number,
    default: 0
  },
  // 是否可以无限循环预览
  infinite: {
    type: Boolean,
    default: !0
  },
  // 缩放事件的缩放速度
  zoomRate: {
    type: Number,
    default: 1.2
  }
};
export {
  e as imageViewerProps
};
