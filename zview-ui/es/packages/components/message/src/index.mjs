import d from "./message.vue.mjs";
import { createVNode as m, render as s } from "vue";
function a(e) {
  typeof e == "string" && (e = {
    message: e
  });
  const t = e.onClose, r = {
    ...e,
    onClose: () => {
      t && t();
    }
  }, o = document.createElement("div"), n = m(d, r);
  n.props.onDestroy = () => {
    s(null, o);
  }, s(n, o), document.body.appendChild(o.firstElementChild);
}
export {
  a as default
};
