import run from './utils/run'
import { series } from 'gulp'
import { rootPath } from './utils/path'

const project = "zview-ui";
const remoteGH = "https://github.com/ZXtreme/zview-ui.git";
const branch = "main";


// 将 dist 目录中的所有文件推送到 GitHub
const push = async () => {
  await run("git init", rootPath);
  await run("git add .", rootPath);
  await run(`git commit -m "deploy ${project} pages"`, rootPath);
  await run(`git checkout -b ${branch}`, rootPath);
  await run(`git remote add origin ${remoteGH}`, rootPath);
  await run(`git push -f origin ${branch}`, rootPath);
}

export default series(
  () => push()
)