import r from "./components/index.mjs";
import { default as p } from "./components/button/index.mjs";
import { default as s } from "./components/icon/index.mjs";
import { default as d } from "./components/color/index.mjs";
import { default as i } from "./components/link/index.mjs";
import { Aside as c, Container as g, Footer as b, Header as C, Main as I } from "./components/container/index.mjs";
import { default as k } from "./components/scrollbar/index.mjs";
import { default as S } from "./components/backtop/index.mjs";
import { Breadcrumb as A, BreadcrumbItem as v } from "./components/breadcrumb/index.mjs";
import { default as D } from "./components/divider/index.mjs";
import { default as M } from "./components/alert/index.mjs";
import { default as w } from "./components/tooltip/index.mjs";
import { default as F } from "./components/popover/index.mjs";
import { default as H } from "./components/dialog/index.mjs";
import { default as N } from "./components/input/index.mjs";
import { default as q } from "./components/input-number/index.mjs";
import { default as J } from "./components/radio/index.mjs";
import { Checkbox as O, CheckboxGroup as Q } from "./components/checkbox-group/index.mjs";
import { default as V } from "./components/switch/index.mjs";
import { default as X } from "./components/slider/index.mjs";
import { default as Z } from "./components/time-picker/index.mjs";
import { default as $ } from "./components/signature/index.mjs";
import { default as oe } from "./components/time-axis/index.mjs";
import { default as te } from "./components/avatar/index.mjs";
import { default as fe } from "./components/card/index.mjs";
import { default as pe } from "./components/carousel/index.mjs";
import { default as se } from "./components/empty/index.mjs";
import { default as de } from "./components/message/src/index.mjs";
import { default as ie } from "./components/progress/index.mjs";
import { default as ce } from "./components/result/index.mjs";
import { default as be } from "./components/tag/index.mjs";
import { Timeline as Ie, TimelineItem as Te } from "./components/timeline/index.mjs";
import { default as Be } from "./components/badge/index.mjs";
import { default as he } from "./components/image/index.mjs";
import { default as ve } from "./components/space/index.mjs";
const a = {
  install: (e) => {
    r.forEach((o) => e.use(o));
  }
};
export {
  M as Alert,
  c as Aside,
  te as Avatar,
  S as Backtop,
  Be as Badge,
  A as Breadcrumb,
  v as BreadcrumbItem,
  p as Button,
  fe as Card,
  pe as Carousel,
  O as Checkbox,
  Q as CheckboxGroup,
  d as Color,
  g as Container,
  H as Dialog,
  D as Divider,
  se as Empty,
  b as Footer,
  C as Header,
  s as Icon,
  he as Image,
  N as Input,
  q as InputNumber,
  i as Link,
  I as Main,
  de as Message,
  F as Popover,
  ie as Progress,
  J as Radio,
  ce as Result,
  k as Scrollbar,
  $ as Signature,
  X as Slider,
  ve as Space,
  V as Switch,
  be as Tag,
  oe as TimeAxis,
  Z as TimePicker,
  Ie as Timeline,
  Te as TimelineItem,
  w as Tooltip,
  a as default
};
