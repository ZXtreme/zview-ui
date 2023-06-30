<div align="center">
  <img width="130px" style="margin-bottom:24px;" src="./docs/docs/public/logo.png">
<h1>ZVIEW UI</h1>

<p>基于 Vue3 的客户端组件库</p>

</div>

## 🎃 介绍

Zview UI 是一个基于 `Vue3` 开发的客户端组件库，全面拥抱 `Vue3` 生态，由 `ZXtreme` 进行维护。

项目简介：本项目是一个对标 Element-plus 的客户端组件库，具有 30+ 高质量通用组件，支持暗黑模式、主题色定制、按需引入等功能。

文档库简介：对标 Element-plus 风格文档库，支持暗黑模式、组件代码复制、在 Github 查看源码、组件代码高亮等功能。

未来方向：I18n国际化、线上调试（演武场）、更多组件的开发

- 项目核心：基于 vue3 + ts + less + vite 开发的客户端组件库
- 代码风格：eslint、prettier
- 文档库：vitepress
- CI/CD：gulp、github actions

更加详细的组件库开发介绍请见 [详细信息](DETAIL-README.md)


## ✨ 特性

- 🚀 提供 30+ 个高质量通用组件
- 🛠️ 支持按需引入，减少打包体积
- 🎯 使用 TypeScript 构建，提供完整的类型定义文件
- 🛠️ 支持暗黑模式

## 📦 安装

```bash
npm i zview-plus
```

## 🤹‍♀️ 使用

```js
// main.ts
import { createApp } from "vue";
import ZviewPlus from "zview-plus";
import "zview-plus/theme-chalk/index.css";

import App from "./App.vue";

const app = createApp(App);

app.use(ZviewPlus);
app.mount("#app");
```

组件库文档：[zxtreme.github.io/zview-ui](https://zxtreme.github.io/zview-ui/)


## 🎑 联系方式

QQ：1303878755

Email: zxtreme@qq.com

若有小伙伴发现项目中潜在的问题，欢迎与作者联系，万分感激。

最后希望各位小伙伴可以动动发财的小手，给我们点个免费的 star 再次感谢大家 😘


## 🌸 感谢

该项目主要借鉴于以下这些文章或项目。

- [Element Plus](https://element-plus.gitee.io/zh-CN/component/button.html)
- [摸鱼老萌新](https://blog.csdn.net/weixin_46463785/article/details/128730917?spm=1001.2014.3001.5502)

## 📄 License

[MIT License](https://opensource.org/licenses/MIT) © 2023-PRESENT [ZXtreme](https://github.com/ZXtreme/)
