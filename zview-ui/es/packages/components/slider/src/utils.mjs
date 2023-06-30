const c = (t, n, o) => {
  if (t > o || t < n)
    throw new Error("不能超出限定范围(默认0~100)");
  return !0;
}, i = (t, n, o) => {
  if (!t)
    return [];
  const r = Math.floor(o / n), s = t / r, u = [];
  for (let e = 1; e <= r; e++)
    u.push(s * e);
  return u;
}, d = (t, n, o) => {
  const r = (o - n) / 2;
  return t > n + r ? "end" : "start";
};
export {
  i as cutChunk,
  c as isOutBounds,
  d as judgeLocation
};
