import type { ExtractPropTypes, PropType } from "vue";
const definePropType = <T>(val: any): PropType<T> => val;

type FitProperty = "contain" | "cover" | "fill" | "none" | "scale-down";
// img 的 object-fit 属性
// fill: 默认值。将图片拉伸至填满容器，可能会导致图片变形。
// contain: 将图片的宽度或高度缩小到容器的宽度或高度，以保持图片的纵横比，可能会留出空白。
// cover: 将图片的宽度或高度增加到容器的宽度或高度，以保持图片的纵横比，超出容器部分被裁剪。
// none: 不进行缩放或裁剪，保持原有尺寸，可能会导致图片部分显示或者留有空白。
// scale-down: 如果媒体元素的原始大小小于容器的尺寸，则等同于 none
//             而如果媒体元素的原始大小大于容器的尺寸，则等同于 contain。

export const avatarProps = {
  // 头像尺寸
  size: {
    type: [Number, String],
    values: ["", "default", "small", "large"],
    default: "default",
  },
  // 头像形状
  shape: {
    type: String,
    values: ["circle", "square"],
    default: "circle",
  },
  // 头像边框
  border: {
    type: String,
    value: ["none", "solid", "dot"],
    default: "solid",
  },
  // 图标类型
  icon: {
    type: String,
  },
  // 图片源地址
  src: {
    type: String,
    default: "",
  },
  // img标签原生属性，srcSet属性
  // 用于指定一组备选图像的地址和对应的宽度，以帮助浏览器根据不同的设备分辨率和宽度加载最合适的图像
  // 例子：srcset="example.jpg 1280w, example-medium.jpg 640w, example-small.jpg 320w"
  // 指定了三个备选图像的 URL 和对应的宽度，
  // 分别是 example.jpg（宽度为 1280 像素）、
  // example-medium.jpg（宽度为 640 像素）、 
  // example-small.jpg（宽度为 320 像素）
  srcSet: String,
  // img标签原生属性，alt属性，用于指定在无法加载图像时显示的替代文本
  alt: String,
  // 设置图片适应方案
  fit: {
    type: definePropType<FitProperty>(String),
    default: "cover",
  },
};
export type AvatarProps = ExtractPropTypes<typeof avatarProps>;

export const avatarEmits = {
  error: (evt: Event) => evt instanceof Event,
};
export type AvatarEmits = typeof avatarEmits;
