# 自定义主题

Zview UI 默认提供一套主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。我们提供了可以进行主题色自定义的方法。

## 替换主题色

Zview UI 默认的主题色是鲜艳、友好的蓝色。通过替换主题色，能够让 Zview UI 的视觉更加符合具体项目的定位。

### 引入自定义主题

可以直接覆盖 Zview UI 中的样式变量。例如 zview-variables.css，写入以下内容：

```CSS
:root {
  /* 改变主题色变量 */
  --hv-color-primary: skyblue;
}
```

之后，在项目的入口文件中，直接引入以上样式文件即可：

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import ZviewPlus from "zview-ui";
import "zview-plus/theme-chalk/style.css";

// 对 zview-plus/theme-chalk/style.css 中的样式变量进行覆盖
import "./zview-variables.css" 

const app = createApp(App)
app.use(ZviewPlus);
app.mount('#app')
```

如果你的项目使用了 less 或 scss 等，也可以直接引入对应的 .less 或 .scss 样式文件。

::: tip

注意，自定义的样式文件需要在 Zview UI 的样式文件之后进行引入。

:::

### Zview UI 默认的主题色

下面给出 Zview UI 中使用的主题色，方便读者修改。如果觉得阅读不便，也可以在 [github](https://github.com/ZXtreme/zview-ui/blob/main/packages/theme-chalk/src/common/color.less) 中进行浏览。

```less
:root {
  color-scheme: light;
  // 基本数值
  --hv-font-size-extra-large: 20px;
  --hv-font-size-large: 18px;
  --hv-font-size-medium: 16px;
  --hv-font-size-base: 14px;
  --hv-font-size-small: 13px;
  --hv-font-size-extra-small: 12px;
  --hv-font-family: "Helvetica Neue", helvetica, "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", "\5fae\8f6f\96c5\9ed1", arial,
    sans-serif;
  --hv-font-weight-primary: 500;
  --hv-font-line-height-primary: 24px;
  --hv-index-normal: 1;
  --hv-index-top: 1000;
  --hv-index-popper: 2000;
  --hv-border-radius-base: 4px;
  --hv-border-radius-small: 2px;
  --hv-border-radius-round: 20px;
  --hv-border-radius-circle: 100%;
  --hv-transition-duration: 0.3s;
  --hv-transition-duration-fast: 0.2s;
  --hv-transition-function-ease-in-out-bezier: cubic-bezier(
    0.645,
    0.045,
    0.355,
    1
  );

  // 基本颜色
  --hv-color-white: #fff;
  --hv-color-black: #000;
  --hv-color-primary: #5d80f4;
  --hv-color-primary-light-3: #7998ff;
  --hv-color-primary-light-5: #91aaff;
  --hv-color-primary-light-7: #abbfff;
  --hv-color-primary-light-8: #c6d3ff;
  --hv-color-primary-light-9: #e0e7ff;
  --hv-color-primary-dark-2: #4f6bc9;
  --hv-color-success: #67c23a;
  --hv-color-success-light-3: #95d475;
  --hv-color-success-light-5: #b3e19d;
  --hv-color-success-light-7: #d1edc4;
  --hv-color-success-light-8: #e1f3d8;
  --hv-color-success-light-9: #f0f9eb;
  --hv-color-success-dark-2: #529b2e;
  --hv-color-warning: #e6a23c;
  --hv-color-warning-light-3: #eebe77;
  --hv-color-warning-light-5: #f3d19e;
  --hv-color-warning-light-7: #f8e3c5;
  --hv-color-warning-light-8: #faecd8;
  --hv-color-warning-light-9: #fdf6ec;
  --hv-color-warning-dark-2: #b88230;
  --hv-color-danger: #f56c6c;
  --hv-color-danger-light-3: #f89898;
  --hv-color-danger-light-5: #fab6b6;
  --hv-color-danger-light-7: #fcd3d3;
  --hv-color-danger-light-8: #fde2e2;
  --hv-color-danger-light-9: #fef0f0;
  --hv-color-danger-dark-2: #c45656;
  --hv-color-error: #f56c6c;
  --hv-color-error-light-3: #f89898;
  --hv-color-error-light-5: #fab6b6;
  --hv-color-error-light-7: #fcd3d3;
  --hv-color-error-light-8: #fde2e2;
  --hv-color-error-light-9: #fef0f0;
  --hv-color-error-dark-2: #c45656;
  --hv-color-info: #909399;
  --hv-color-info-light-3: #b1b3b8;
  --hv-color-info-light-5: #c8c9cc;
  --hv-color-info-light-7: #dedfe0;
  --hv-color-info-light-8: #e9e9eb;
  --hv-color-info-light-9: #f4f4f5;
  --hv-color-info-dark-2: #73767a;
  --hv-bg-color: #fff;
  --hv-bg-color-page: #f2f3f5;
  --hv-bg-color-overlay: #fff;
  --hv-text-color-primary: #303133;
  --hv-text-color-ordinary: #434549;
  --hv-text-color-regular: #606266;
  --hv-text-color-secondary: #909399;
  --hv-text-color-placeholder: #a8abb2;
  --hv-text-color-disabled: #c0c4cc;
  --hv-border-color: #dcdfe6;
  --hv-border-color-light: #e4e7ed;
  --hv-border-color-lighter: #ebeef5;
  --hv-border-color-extra-light: #f2f6fc;
  --hv-border-color-dark: #d4d7de;
  --hv-border-color-darker: #cdd0d6;
  --hv-fill-color: #f0f2f5;
  --hv-fill-color-light: #f5f7fa;
  --hv-fill-color-lighter: #fafafa;
  --hv-fill-color-extra-light: #fafcff;
  --hv-fill-color-dark: #ebedf0;
  --hv-fill-color-darker: #e6e8eb;
  --hv-fill-color-blank: #fff;
  --hv-box-shadow: 0 12px 32px 4px rgb(0 0 0 / 4%), 0 8px 20px rgb(0 0 0 / 8%);
  --hv-box-shadow-light: 0 0 12px rgb(0 0 0 / 12%);
  --hv-box-shadow-lighter: 0 0 6px rgb(0 0 0 / 12%);
  --hv-box-shadow-dark: 0 16px 48px 16px rgb(0 0 0 / 8%),
    0 12px 32px rgb(0 0 0 / 12%), 0 8px 16px -8px rgb(0 0 0 / 16%);
  --hv-disabled-bg-color: var(--hv-fill-color-light);
  --hv-disabled-text-color: var(--hv-text-color-placeholder);
  --hv-disabled-border-color: var(--hv-border-color-light);
  --hv-overlay-color: rgb(0 0 0 / 80%);
  --hv-overlay-color-light: rgb(0 0 0 / 70%);
  --hv-overlay-color-lighter: rgb(0 0 0 / 50%);
  --hv-mask-color: rgb(255 255 255 / 90%);
  --hv-mask-color-extra-light: rgb(255 255 255 / 30%);
  --hv-border-width: 1px;
  --hv-border-style: solid;
  --hv-border-color-hover: var(--hv-text-color-disabled);
  --hv-border: var(--hv-border-width) var(--hv-border-style)
    var(--hv-border-color);
  --hv-svg-monochrome-grey: var(--hv-border-color);

  // button
  --hv-button-border-color: var(--hv-border-color);
  --hv-button-bg-color: var(--hv-color-white);
  --hv-button-disabled-text-color: var(--hv-text-color-regular);
  --hv-button-primary-plain: var(--hv-border-color-lighter);
  --hv-button-primary-plain-border: var(--hv-color-primary-light-7);
  --hv-button-success-plain: var(--hv-color-success-light-9);
  --hv-button-success-plain-border: var(--hv-color-success);
  --hv-button-info-plain: var(--hv-color-info-light-9);
  --hv-button-info-plain-border: var(--hv-color-info-light-9);
  --hv-button-warning-plain: var(--hv-color-warning-light-9);
  --hv-button-warning-plain-border: var(--hv-color-warning-light-5);
  --hv-button-danger-plain: var(--hv-color-error-light-9);
  --hv-button-danger-plain-border: var(--hv-color-error-light-8);

  // input-number
  --hv-input-number-bg-color: var(--hv-fill-color-light);
  --hv-input-number-bg-color-disabled: var(--hv-bg-color-page);

  // switch
  --hv-switch-lable-color: var(--hv-text-color-primary);

  // scrollbar
  --hv-scrollbar-thumb-hover: var(--hv-text-color-placeholder);

  // time-picker
  --hv-time-picker-spinner-li: var(--hv-fill-color-light);
  --hv-time-picker-spinner-active: var(--hv-fill-color);
  --hv-time-picker-spinner-border: var(--hv-border-color-light);
  --hv-time-picker-body-border: var(--hv-border-color);
  --hv-time-picker-body-color: var(--hv-fill-color-blank);
  --hv-tiem-picker-text-color: var(--hv-text-color-primary);
  --hv-time-picker-panel-color: var(--hv-fill-color-blank);
  --hv-time-picker-disabled-color: var(--hv-fill-color-light);
}
```

