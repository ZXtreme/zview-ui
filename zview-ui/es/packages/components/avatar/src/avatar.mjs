const t = (e) => e, r = {
  // 头像尺寸
  size: {
    type: [Number, String],
    values: ["", "default", "small", "large"],
    default: "default"
  },
  // 头像形状
  shape: {
    type: String,
    values: ["circle", "square"],
    default: "circle"
  },
  // 头像边框
  border: {
    type: String,
    value: ["none", "solid", "dot"],
    default: "solid"
  },
  // 图标类型
  icon: {
    type: String
  },
  // 图片源地址
  src: {
    type: String,
    default: ""
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
    type: t(String),
    default: "cover"
  }
}, a = {
  error: (e) => e instanceof Event
};
export {
  a as avatarEmits,
  r as avatarProps
};
