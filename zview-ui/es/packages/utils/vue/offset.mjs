const o = (f) => {
  let e = f.offsetLeft, t = f.offsetParent;
  for (; t !== null; )
    e += t.offsetLeft, t = t.offsetParent;
  return e;
}, s = (f) => {
  let e = f.offsetTop, t = f.offsetParent;
  for (; t !== null; )
    e += t.offsetTop, t = t.offsetParent;
  return e;
};
export {
  o as offsetLeft,
  s as offsetTop
};
