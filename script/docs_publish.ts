import { series } from "gulp";
import run from "./utils/run";
import { docsDist } from "./utils/path";

const project = "zview-ui";
const remoteGH = "https://github.com/ZXtreme/zview-ui.git";
const branch = "site";

// 推送到 github 
export const pushGitHubPages = async () => {
  await run("git init", docsDist);
  await run("git add .", docsDist);
  await run(`git commit -m "deploy ${project} pages"`, docsDist);
  await run(`git checkout -b ${branch}`, docsDist);
  await run(`git remote add origin ${remoteGH}`, docsDist);
  await run(`git push -f origin ${branch}`, docsDist);
};

export default series(
  () => pushGitHubPages()
);