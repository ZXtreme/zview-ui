const a = (n) => (n.install = (t) => {
  const e = n.name || n.__name;
  t.component(e, n);
}, n);
export {
  a as withInstall
};
