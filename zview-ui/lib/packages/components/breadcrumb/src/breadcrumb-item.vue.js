"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),s=require("../../icon/index.js"),a=require("./breadcrumb-item.js"),c={class:"z-breadcrumb__item"},u={class:"item__separator"},l={key:1},d={name:"ZBreadcrumbItem"},p=e.defineComponent({...d,props:a.BreadcrumbItemProps,setup(m){const t=e.inject("breadcrumbProps",{separator:void 0,separatorIcon:void 0}),{separator:o,separatorIcon:r}=e.toRefs(t);return(n,_)=>(e.openBlock(),e.createElementBlock("span",c,[e.createElementVNode("span",null,[e.renderSlot(n.$slots,"default")]),e.createElementVNode("span",u,[e.unref(r)?(e.openBlock(),e.createBlock(e.unref(s.default),{key:0,name:e.unref(r)},null,8,["name"])):(e.openBlock(),e.createElementBlock("span",l,e.toDisplayString(e.unref(o)),1))])]))}});exports.default=p;