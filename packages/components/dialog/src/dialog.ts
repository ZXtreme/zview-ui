import { ExtractPropTypes } from "vue";

export const dialogProps = {
  // 对话框标题内容
  title: {
    type: String,
  },
  // modal层的显示与隐藏
  modelValue: Boolean,
  // 内容布局 
  // 不传值则从左到右布局，传值只能传center，表示居中
  align: {
    type: String,
    values: ["center"]
  },
  // 弹框背景颜色
  bgColor: {
    type: String,
  },
  // 是否弹框全屏居中
  alignCenter: {
    type: Boolean,
    default: false,
  },
  // 是否禁止页面滚动
  scrollLock: {
    type: Boolean,
    default: true,
  },
  width: {
    type: String,
    default: "30%",
  },
  // 距离顶部的距离
  top: {
    type: String,
    default: "15%",
  },
  // 是否显示关闭按钮
  showClose: {
    type: Boolean,
    default: true,
  },
  // 点击modal，关闭弹出框
  closeOnModal: {
    type: Boolean,
    default: true,
  },
  // 自定义弹框样式
  customClass: String,
  // 是否可拖拽
  draggable: {
    type: Boolean,
    default: false,
  },
};

export type DialogProps = ExtractPropTypes<typeof dialogProps>;
