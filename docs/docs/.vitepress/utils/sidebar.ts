import { addSidebarPrefix } from "./route";

const sidebar = {
  "/docs/": [
    {
      text: "基础",
      items: [
        { text: "安装", link: "/docs/installation" },
        { text: "快速上手", link: "/docs/quickstart" },
        { text: "自定义主题", link: "/docs/theme" },
      ],
    },
    {
      text: "进阶",
      items: [
        { text: "暗黑模式", link: "/docs/dark" },
      ],
    },
    {
      text: "开发",
      items: [
        { text: "开发指南", link: "/docs/guide" },
        { text: "开发常见问题", link: "/docs/faq" },
      ],
    },
  ],
  "/components/": [
    {
      text: "基础组件",
      items: [
        { text: "Button 按钮", link: "/components/button" },
        { text: "Color 色彩", link: "/components/color" },
        { text: "Icon 图标", link: "/components/icon" },
        { text: "Link 链接", link: "/components/link" },
        { text: "Container 布局容器", link: "/components/container" },
        { text: "ScrollBar 滚动条", link: "/components/scrollbar" },
        { text: "Divider 分割线", link: "/components/divider" },
        { text: "Space 间距", link: "/components/space" }
      ],
    },
    {
      text: "Form 表单组件",
      items: [
        { text: "Input 输入框", link: "/components/input" },
        { text: "Input Number 数字输入框", link: "/components/input-number" },
        { text: "Radio 单选框", link: "/components/radio" },
        { text: "Slider 滑块", link: "/components/slider" },
        { text: "Checkbox 复选框", link: "/components/checkbox" },
        { text: "Switch 开关", link: "/components/switch" },
        { text: "TimePicker 时间选择器", link: "/components/time-picker" },
      ],
    },
    {
      text: "Data 数据展示",
      items: [
        { text: "Avatar 头像", link: "/components/avatar" },
        { text: "Card 卡片", link: "/components/card" },
        { text: "Carousel 走马灯", link: "/components/carousel" },
        { text: "Empty 空状态", link: "/components/empty" },
        { text: "Message 消息", link: "/components/message" },
        { text: "Progress 进度条", link: "/components/progress" },
        { text: "Result 结果", link: "/components/result" },
        { text: "Tag 标签", link: "/components/tag" },
        { text: "Timeline 时间线", link: "/components/timeline" },
        { text: "Badge 徽章", link: "/components/badge" },
        { text: "Image 图片", link: "/components/image" },
      ],
    },
    {
      text: "Navigation 导航",
      items: [
        { text: "Backtop 回到顶部", link: "/components/backtop" },
        { text: "Breadcrumb 面包屑", link: "/components/breadcrumb" },
      ],
    },
    {
      text: "Feedback 反馈组件",
      items: [
        { text: "Alert 提示", link: "/components/alert" },
        { text: "Tooltip 文字提示", link: "/components/tooltip" },
        { text: "Popover 弹出框", link: "/components/popover" },
        { text: "Dialog 对话框", link: "/components/dialog" },
      ],
    },
    {
      text: "Others 其他",
      items: [
        { text: "TimeAxis 时间轴", link: "/components/timeaxis" },
        { text: "Signature 签名", link: "/components/signature" }
      ],
    },
  ],
};

export const getSidebarRouter = (langPrefix: string = "/") => {
  return addSidebarPrefix(langPrefix, sidebar)
};
