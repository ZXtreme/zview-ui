import run from './utils/run'
import { series, src, dest, parallel } from 'gulp'
import less from "gulp-less"
import cleancss from 'gulp-clean-css'
import autoprefixer from 'gulp-autoprefixer'
import { themePath, rootPath, compPath } from './utils/path'

// refer: https://blog.csdn.net/weixin_46463785/article/details/128730917?spm=1001.2014.3001.5502

// 运行指令来删除上一次打包生成的dist文件夹
const removeAll = async () => {
  return await run('rimraf ./zview-ui', rootPath)
}

// 打包样式文件，获得整个组件库的CSS
const buildThemeDist = async () => {
  return await run("pnpm run build", themePath);
};

// 打包组件文件
const buildComponentDist = async () => {
  return await run("pnpm run build", compPath);
};

// 打包样式文件，CSS 每个组件分开
const buildStyle = async () => {
  return src(`${themePath}/src/*.less`)   // 读取所有 .less 文件
    .pipe(less())    // 通过 gulp-less 插件将 less 转换为 CSS
    .pipe(           // 通过 gulp-autoprefixer 插件自动添加 CSS 浏览器前缀，以保证在多种浏览器中都能正常显示
      autoprefixer({
        // @ts-ignore
        // 指定需要添加前缀的浏览器范围
        overrideBrowserslist: ["> 1%", "last 2 versions"],   // 使用比例超过 1% 、浏览器厂商发布的最近两个版本
        cascade: false,  // 生成的 CSS 样式表不需要按照层级关系显示，并且相同属性之间不需要空行分隔。这样可以减少文件大小，提高性能
      })
    )
    .pipe(cleancss())  // 通过 gulp-minify-css 插件压缩 CSS 文件体积
    .pipe(dest(`${rootPath}/zview-ui/theme-chalk`))  // 将处理好的 CSS 文件输出到指定目录中
};


// 将 buildThemeDist 后得到的 style.css 做浏览器兼容性处理，并移到输出目录
const deriveThemeDist = async () => {
  return src(`${themePath}/dist/style.css`)
    .pipe(
      autoprefixer({
        // @ts-ignore
        overrideBrowserslist: ["> 1%", "last 2 versions"],
        cascade: false,
      }),
    )
    .pipe(dest(`${rootPath}/zview-ui/theme-chalk`));
};

const removeThemeDist = async () => {
  return await run('rimraf ./dist', themePath)
}


export default series(
  () => removeAll(),
  () => buildThemeDist(),
  () => buildComponentDist(),
  parallel(
    () => buildStyle(),
    () => deriveThemeDist()
  ),
  () => removeThemeDist()
);