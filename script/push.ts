import run from './utils/run'
import { series } from 'gulp'
import { rootPath } from './utils/path'

// 使用方式：npm run push 
const project = "zview-ui";
const remoteGH = "https://github.com/ZXtreme/zview-ui.git";
const branch = "main";
const description = process.argv.slice(2).find(arg => arg.startsWith('--description='))?.split('=')[1] ?? `deploy ${project} pages`;
console.log(description);


// 将所有文件推送到 GitHub
const push = async () => {
  await run("git init", rootPath);
  await run("git add .", rootPath);
  await run(`git commit -m "${description}"`, rootPath);
  await run(`git checkout -b ${branch}`, rootPath);
  await run(`git remote add origin ${remoteGH}`, rootPath);
  await run(`git push -f origin ${branch}`, rootPath);
}

export default series(
  () => push()
)