"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=require("./button.js"),u=["disabled"],a={name:"ZButton"},d=e.defineComponent({...a,props:r.ButtonProps,emits:["click"],setup(o,{emit:s}){const t=o,l=()=>{s("click")},{icon:n}=e.toRefs(t),c=e.computed(()=>({[`z-button--${t.type}`]:t.type,[`z-button--${t.size}`]:t.size,"is-plain":t.plain,"is-round":t.round,"is-disabled":t.disabled}));return(i,p)=>(e.openBlock(),e.createElementBlock("button",{class:e.normalizeClass(["z-button",e.unref(c)]),disabled:t.disabled,onClick:l},[e.createElementVNode("span",null,[e.unref(n)!==""?(e.openBlock(),e.createElementBlock("i",{key:0,class:e.normalizeClass(`z-icon-${e.unref(n)}`)},null,2)):e.createCommentVNode("",!0)]),e.renderSlot(i.$slots,"default")],10,u))}});exports.default=d;