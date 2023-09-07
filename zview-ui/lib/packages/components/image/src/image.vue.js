"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),V=require("./image.js"),N=require("./image-viewer.vue.js"),I=require("../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/throttle.js"),b=["src"],q={class:"content"},F=["data-src","src"],A={key:2,class:"wrapper"},H=e.createElementVNode("div",{class:"placeholder"},"Loading..",-1),$=e.createElementVNode("div",{class:"error"},"Fail",-1),P={key:0},M={name:"ZImage"},R=e.defineComponent({...M,props:V.ImageProps,emits:["load","error","switch","close"],setup(h,{emit:i}){const r=h,u=e.ref(""),l=e.ref(!1),a=e.ref(!0),s=e.ref(!1),k=e.ref(null),w=e.ref(null),v=e.computed(()=>{const{fit:t,width:o,height:n}=r;return{width:o,height:n,objectFit:t}}),m=e.computed(()=>{const{previewSrcList:t}=r;return Array.isArray(t)&&t.length>0}),f=e.computed(()=>{const{previewSrcList:t,initialIndex:o}=r;let n=o;return o>=t.length&&(n=0),n}),_=t=>{a.value=!1,l.value=!1,i("load",t)},B=t=>{a.value=!1,l.value=!0,i("error",t)},C=()=>{m.value&&(document.body.style.overflow="hidden",s.value=!s.value)},E=t=>Array.from(document.querySelectorAll(t)),y=I.default(p,200);function p(){var c,g;const t=((c=r.scrollContainer)==null?void 0:c.offsetHeight)??window.innerHeight,o=E(".z-image .lazyImg img[data-src]"),n=((g=r.scrollContainer)==null?void 0:g.getBoundingClientRect().top)??0;if(o.length===0){(r.scrollContainer??window).removeEventListener("scroll",y);return}o.forEach(d=>{d.getBoundingClientRect().top-n<t&&(d.src=d.dataset.src,d.removeAttribute("data-src"))})}const z=t=>{t.addEventListener("scroll",y)};e.watch(()=>r.scrollContainer,()=>{const t=r.scrollContainer??window;z(t)},{immediate:!0});const L=()=>{s.value=!1,document.body.style.overflow="auto",i("close")},S=()=>{i("switch")};return e.onMounted(()=>{a.value=!0,l.value=!1,u.value=r.src,m.value&&(u.value=r.previewSrcList[f.value]),p()}),(t,o)=>(e.openBlock(),e.createElementBlock("div",{ref_key:"container",ref:k,class:"z-image"},[u.value!==""&&!l.value&&!t.lazy?(e.openBlock(),e.createElementBlock("img",e.mergeProps({key:0,src:u.value},t.$attrs,{style:e.unref(v),onClick:C,onLoad:_,onError:B,class:"main-img"}),null,16,b)):e.createCommentVNode("",!0),t.lazy?(e.openBlock(),e.createElementBlock("div",{key:1,class:"lazy-imgs",ref_key:"scrollContainer",ref:w},[e.createElementVNode("div",q,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.lazyList,(n,c)=>(e.openBlock(),e.createElementBlock("div",{key:c,class:"lazyImg"},[e.createElementVNode("img",{"data-src":n,alt:"加载中...",src:t.altImg,style:e.normalizeStyle(e.unref(v))},null,12,F)]))),128))])],512)):e.createCommentVNode("",!0),(a.value||l.value)&&!t.lazy?(e.openBlock(),e.createElementBlock("div",A,[a.value?e.renderSlot(t.$slots,"placeholder",{key:0},()=>[H]):l.value?e.renderSlot(t.$slots,"error",{key:1},()=>[$]):e.createCommentVNode("",!0)])):e.createCommentVNode("",!0),e.unref(m)?(e.openBlock(),e.createElementBlock(e.Fragment,{key:3},[s.value?(e.openBlock(),e.createBlock(N.default,{key:0,visable:s.value,"initial-index":e.unref(f),infinite:t.infinite,"zoom-rate":t.zoomRate,"url-list":t.previewSrcList,onClosePreview:L,onSwitch:S},{default:e.withCtx(()=>[t.$slots.viewer?(e.openBlock(),e.createElementBlock("div",P,[e.renderSlot(t.$slots,"viewer")])):e.createCommentVNode("",!0)]),_:3},8,["visable","initial-index","infinite","zoom-rate","url-list"])):e.createCommentVNode("",!0)],64)):e.createCommentVNode("",!0)],512))}});exports.default=R;