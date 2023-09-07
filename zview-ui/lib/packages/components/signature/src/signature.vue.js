"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),y=require("./signature.js"),h=require("../../button/index.js"),S={class:"z-signature"},b={class:"z-signature__content"},x={class:"z-signature__footer"},E={name:"ZSignature"},L=e.defineComponent({...E,props:y.SignatureProps,emits:["submit","clear","start","end"],setup(m,{emit:s}){const n=m,t=e.ref(null);let r=null;e.onMounted(()=>{t.value.width=t.value.clientWidth,t.value.height=t.value.clientHeight,r=t.value.getContext("2d"),r.strokeStyle=n.lineColor,r.lineWidth=n.lineWidth,r.lineCap="round",r.lineJoin="round"});const u=e.ref(n.backgroundColor??"");let c,i;const g=e.computed(()=>({backgroundColor:u.value})),f=o=>{r.beginPath(),r.moveTo(c,i),r.lineTo(o.offsetX,o.offsetY),r.stroke(),c=o.offsetX,i=o.offsetY},p=()=>{r.clearRect(0,0,t.value.width,t.value.height),s("clear")},_=async()=>new Promise(o=>{const a=document.createElement("canvas");a.width=t.value.width,a.height=t.value.height;const l=a.getContext("2d");l.fillStyle=u.value,l.fillRect(0,0,a.width,a.height);let v=new Image;v.src=t.value.toDataURL(),v.onload=()=>{l.drawImage(v,0,0),o(a.toDataURL(n.pictureFormat))}}),C=async()=>{let o;n.reserveBackgroundColor?o=await _():o=t.value.toDataURL(n.pictureFormat),s("submit",{image:o,canvas:t.value})},k=o=>{var a,l;c=o.offsetX,i=o.offsetY,(a=t.value)==null||a.addEventListener("mousemove",f),(l=t.value)==null||l.addEventListener("mouseup",d),s("start")},d=()=>{var o,a;(o=t.value)==null||o.removeEventListener("mousemove",f),(a=t.value)==null||a.removeEventListener("mouseup",d),s("end")},w=()=>{u.value=n.backgroundColor??"",r.strokeStyle=n.lineColor,r.lineWidth=n.lineWidth};return e.watch([()=>n.backgroundColor,()=>n.lineColor,()=>n.lineWidth],()=>{w()}),(o,a)=>(e.openBlock(),e.createElementBlock("div",S,[e.createElementVNode("div",b,[e.createElementVNode("canvas",{id:"canvas",ref_key:"canvas",ref:t,onMousedown:k,onMouseout:d,style:e.normalizeStyle(e.unref(g))}," Your browser does not support the HTML5 canvas tag. ",36)]),e.createElementVNode("div",x,[e.createVNode(e.unref(h.default),{onClick:p},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(n.clear),1)]),_:1}),e.createVNode(e.unref(h.default),{onClick:C},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(n.confirm),1)]),_:1})])]))}});exports.default=L;