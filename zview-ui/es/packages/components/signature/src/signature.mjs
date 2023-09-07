const t = {
  // 绘制时画板背景色，不支持black等名称，支持#000、rgb、rgba、hsv、hsva、hsl、hsla
  backgroundColor: {
    type: String
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
  // 保存时是否保留背景色，注意 jpeg 不支持透明效果，显示黑色背景色
  reserveBackgroundColor: {
    type: Boolean,
    default: !0
  },
  // 保存图片的格式 
  pictureFormat: {
    type: String,
    values: ["image/png", "image/jpeg", "image/webp"],
    default: "image/png"
  },
  clear: {
    type: String,
    default: "清空"
  },
  confirm: {
    type: String,
    default: "确认"
  }
};
export {
  t as SignatureProps
};
