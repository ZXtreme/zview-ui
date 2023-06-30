function u(t) {
  const r = Object.prototype.toString, e = {
    "[object Boolean]": "boolean",
    "[object Number]": "number",
    "[object String]": "string",
    "[object Function]": "function",
    "[object Array]": "array",
    "[object Date]": "date",
    "[object RegExp]": "regExp",
    "[object Undefined]": "undefined",
    "[object Null]": "null",
    "[object Object]": "object"
  }, n = r.call(t);
  return e[n];
}
function i(t) {
  const r = u(t);
  if (r === "array") {
    const e = [];
    for (let n = 0; n < t.length; n++)
      e.push(i(t[n]));
    return e;
  } else if (r === "object") {
    const e = {};
    for (const n in t)
      e[n] = i(t[n]);
    return e;
  } else
    return t;
}
function f(t) {
  return u(t) === "string" && t.constructor === String;
}
const p = (t, r, e) => Math.min(Math.max(t, r), e), c = (t) => !t && t !== 0 ? "" : t < 10 ? `0${t}` : t, j = (t, r) => {
  const e = /[^\d]+/g, n = (b) => b.replace(e, ""), s = parseInt(n(t.join("")), 10) || 0, o = parseInt(n(r.join("")), 10) || 0;
  return s > o;
};
function g(t, r) {
  if (!t || !t.length)
    return "";
  const e = (o) => o >= 12 ? o - 12 : o, n = {
    HH: c(t[0]),
    // 24时制，2位展示
    H: t[0],
    // 24时制，1位展示
    hh: c(e(t[0])),
    // 12时制，2位展示
    h: e(t[0]),
    // 12时制，1位展示
    mm: c(t[1]),
    // 分钟，2位展示
    m: t[1],
    // 分钟，1位展示
    ss: c(t[2]),
    // 秒，2位展示
    s: t[2]
    // 秒，1位展示
  }, s = /(HH)|(H)|(hh)|(h)|(mm)|(m)|(ss)|(s)/g;
  return r.replace(s, (o) => n[o]);
}
export {
  j as compareArrJoined,
  i as deepCopy,
  c as fillZero,
  g as formatOutputValue,
  f as isString,
  p as withinNum
};
