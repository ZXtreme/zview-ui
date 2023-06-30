import run from './utils/run'
import { series, src, dest } from 'gulp'
import { rootPath, compPath } from './utils/path'


// 发布任务
const publish = async () => {
  // pnpm version major 版本号（第一个 +1）
  // pnpm version minor 版本号（第二个 +1）
  // pnpm version patch 版本号（第三个 +1）
  await run('pnpm version patch', `${compPath}/transitpkg`)
  //复制到zview-ui目录
  await src(`${compPath}/transitpkg/**`).pipe(dest(`${rootPath}/zview-ui/`));
  //在dist下执行发布命令
  await run('npm publish', `${rootPath}/zview-ui/`)
}
export default series(
  () => publish()
)