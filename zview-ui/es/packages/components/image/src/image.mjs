import { definePropType as e } from "../../../utils/vue/definePropType.mjs";
const A = {
  src: {
    type: String,
    default: ""
  },
  width: {
    type: String,
    default: ""
  },
  height: {
    type: String,
    default: ""
  },
  fit: {
    type: e(String),
    default: "cover"
  },
  // 是否懒加载
  lazy: {
    type: Boolean,
    default: !1
  },
  // 未加载图片时的占位图
  altImg: {
    type: String,
    default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdj+P///38ACfsD/QVDRcoAAAAASUVORK5CYII="
  },
  // 开启懒加载功能后，监听 scroll 事件的容器
  scrollContainer: {
    type: e(null)
  },
  // 懒加载的图片地址列表
  lazyList: {
    type: Array,
    default: []
  },
  // 开启预览功能的图片地址列表
  previewSrcList: {
    type: Array,
    default: []
  },
  // 初始预览图像索引
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
  A as ImageProps
};
