const t = (e) => e, a = {
  // 头部标题
  header: {
    type: String,
    default: ""
  },
  // 操作区域
  handle: {
    type: String,
    default: ""
  },
  // 给卡片的body添加的样式
  bodyStyle: {
    type: t([String, Object, Array]),
    default: ""
  },
  // 是否展示卡片阴影
  shadow: {
    type: String,
    values: ["always", "hover", "never"],
    default: "always"
  }
};
export {
  a as cardProps
};
