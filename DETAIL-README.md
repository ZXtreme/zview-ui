# 详细开发介绍

Zview UI 是一个基于 `Vue3` 开发的客户端组件库，全面拥抱 `Vue3` 生态，由 `ZXtreme` 进行维护。

项目简介：本项目是一个对标 Element-plus 的客户端组件库，具有 30+ 高质量通用组件，支持暗黑模式、主题色定制、按需引入等功能。

文档库简介：对标 Element-plus 风格文档库，支持暗黑模式、组件代码复制、在 Github 查看源码、组件代码高亮等功能。

未来方向：I18n 国际化、线上调试（演武场）、更多组件的开发

- 项目核心：基于 `vue3 + ts + less + vite` 开发的客户端组件库
- 代码风格：`eslint`、`prettier`
- 文档库：`vitepress`
- CI/CD：`gulp`、`github actions`

## Monorepo 项目代码管理方式

通过 `pnpm workspace` 实现 `Monorepo`（一个仓库管理多个项目，实现多个项目的包可以相互引用，即安装在根目录下）
```
zview-ui
├─ examples               # 组件测试
├─ packages               # 组件开发
├─ docs                   # 文档库开发
├─ script                 # 组件打包
└─ zview-ui               # 打包后的组件
```
暗黑模式：所有的组件都是通过 `css` 变量赋予的颜色，只需要在根添加 dark 类名即可

主题色定制：引入自定义的 `css` 文件，覆盖自带的 `css` 变量

默认导入：`export default` 一个包含 `install` 方法的对象，方法中对组件列表进行循环依次 `app.use()`

按需导入：export 每个组件，每个组件都有对应的 `install` 方法，通过 `app.use()` 时自动注册

代码高亮：依赖于 `prismjs` 库：`prism.highlight(str, prism.languages[lang], lang)`

国际化：有待开发

PlayGround：有待开发

单元测试：有待开发

## gulp 自动化打包和发布

使用 gulp 实现组件和文档库的自动化打包和发布

### 组件打包
1. 移除上次打包的文件
2. 打包样式
  - 获取每个组件单独的 CSS 文件
    - 读取所有 less 
    - gulp-less 插件转化为 css
    - gulp-autoprefixer 插件添加浏览器前缀 
    - gulp-clean-css 插件压缩代码
    - 输出到 ./zview-ui 目录下
  - 获取所有组件的 CSS 文件
    - 在 theme-chalk 目录下通过 vite 进行打包
    - 将得到的 style.css 移到 ./zview-ui 目录下
3. 打包组件
  - 在 packages 目录下通过 vite 进行打包（es、commonjs、min.js）
  - 将得到的结果移到 ./zview-ui 目录下

### 组件发布
1. pnpm version patch 更新版本号
2. 将更新后的 package.json 移到 ./zview-ui 目录下
3. pnpm publish 发布组件

### 文档库发布
1. 对 vitepress 进行打包
2. 执行 git 命令将 vitepress 打包后的文件 push 到 github 的 site 分支上
 
### 整个项目 push 到 github
1. 配置项目的 .gitignore 文件，忽略所有的 node_modules
2. 执行 git 命令将文件 push 到 github 的 main 分支上