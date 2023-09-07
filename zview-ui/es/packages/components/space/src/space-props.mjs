const e = {
  // 容器是否为 inline 元素
  inline: {
    type: Boolean,
    default: !1
  },
  // 排列的方向
  direction: {
    type: String,
    values: ["vertical", "horizontal"],
    default: "horizontal"
  },
  // 间隔大小
  size: {
    type: Array,
    default: () => [10, 10]
  },
  // 设置是否自动折行
  wrap: {
    type: Boolean,
    default: !1
  },
  // 所有子节点在容器内部侧轴方向上的对齐方式
  alignment: {
    type: String,
    values: ["stretch", "center", "flex-start", "flex-end", "baseline", "initial", "inherit"],
    default: "center"
  }
};
export {
  e as SpaceProps
};
