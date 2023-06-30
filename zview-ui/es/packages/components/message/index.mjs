import e from "./src/index.mjs";
e.install = function(o) {
  o.config.globalProperties.$message = e;
};
export {
  e as default
};
