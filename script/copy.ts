import { series, src, dest } from 'gulp'
import { rootPath, tempPushPath } from './utils/path'

// 定义文件路径常量
const paths = {
  src: [`${rootPath}/**/*`, `!${rootPath}/**/node_modules/**`, `!${rootPath}/fixed.txt`]
};

// 复制除 node_modules 目录外所有文件
const copy = async () => {
  return src(paths.src)
    .pipe(dest(tempPushPath))
}

export default series(
  () => copy()
)