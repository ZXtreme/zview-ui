const t = {
  // 画板的宽度和高度，由于canvas的限制，仅限数字
  width: {
    type: String,
    default: "500"
  },
  height: {
    type: String,
    default: "500"
  },
  // 绘制时画板背景色，不支持black等名称，支持#000、rgb、rgba、hsv、hsva、hsl、hsla
  backgroundColor: {
    type: String,
    default: "#fff"
  },
  // 线条的颜色
  lineColor: {
    type: String,
    default: "#000"
  },
  // 线条的宽度
  lineWidth: {
    type: Number,
    default: 3,
    validators: (e) => e >= 1 && e <= 32
  },
  // 橡皮擦的大小
  eraserWidth: {
    type: Number,
    default: 15,
    validators: (e) => e >= 3 && e <= 48
  },
  // 是否有保存功能
  isSave: {
    type: Boolean,
    default: !1
  },
  // 保存时是否保留背景色，注意 jpeg 不支持透明效果，显示黑色背景色
  reserveBackgroundColor: {
    type: Boolean,
    default: !1
  },
  // 保存的图片名称
  pictureName: {
    type: String,
    default: "drawboard"
  },
  // 保存图片的格式 
  pictureFormat: {
    type: String,
    values: ["image/png", "image/jpeg", "image/webp"],
    default: "image/png"
  }
};
export {
  t as DrawboardProps
};
