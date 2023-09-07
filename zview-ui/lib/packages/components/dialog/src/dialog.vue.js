"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),h=require("./dialog.js"),b=require("../../../../node_modules/.pnpm/@vueuse_core@9.13.0_vue@3.2.47/node_modules/@vueuse/core/index.js"),E=require("../../icon/index.js"),z={key:0,class:"z-dialog-header"},V={key:1},w={class:"z-dialog-content"},B={name:"ZDialog"},_=e.defineComponent({...B,props:h.dialogProps,emits:["update:modelValue","open","close"],setup(u,{emit:l}){const t=u,n=e.ref(null),s=e.computed(()=>({[`z-dialog-text--${t.align}`]:t.align})),m=e.computed(()=>({"z-dialog-contentbox-center":t.alignCenter})),f=e.computed(()=>t.alignCenter?{width:t.width,backgroundColor:t.bgColor}:{width:t.width,top:t.top,backgroundColor:t.bgColor}),g=e.computed(()=>({"z-dialog-contentbox-draggable":t.draggable})),r=e.useSlots(),p=()=>{l("close"),l("update:modelValue",!1)};e.onMounted(()=>{e.watchEffect(()=>{t.modelValue?t.scrollLock&&typeof document<"u"&&(document.body.style.overflow="hidden"):typeof document<"u"&&(document.body.style.overflow="initial")})}),b.onClickOutside(n,o=>{t.closeOnModal&&(l("update:modelValue",!1),l("close"))}),e.watch(()=>t.modelValue,o=>{o&&(e.nextTick(()=>{n.value&&k(n.value)}),l("open"))});const k=o=>{if(!t.draggable)return;let a=o.firstElementChild;const C=d=>{let v=d.clientX-o.offsetLeft,y=d.clientY-o.offsetTop;const c=i=>{o.style.left=i.clientX-v+"px",o.style.top=i.clientY-y+"px"};document.addEventListener("mousemove",c),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",c)})};a.addEventListener("mousedown",C)};return(o,a)=>(e.openBlock(),e.createBlock(e.Teleport,{to:"body"},[e.createVNode(e.Transition,{name:"fade"},{default:e.withCtx(()=>[o.modelValue?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(["z-dialog-default",o.customClass])},[e.createElementVNode("div",{class:e.normalizeClass(["z-dialog-contentbox",[e.unref(m),e.unref(g)]]),style:e.normalizeStyle(e.unref(f)),ref_key:"dragEl",ref:n},[e.unref(r).header||o.title?(e.openBlock(),e.createElementBlock("div",z,[e.createElementVNode("p",{class:e.normalizeClass(["z-dialog-title",e.unref(s)])},[e.unref(r).header?e.renderSlot(o.$slots,"header",{key:0}):(e.openBlock(),e.createElementBlock("span",V,e.toDisplayString(o.title),1))],2),o.showClose?(e.openBlock(),e.createBlock(e.unref(E.default),{key:0,class:"z-dialog-close",name:"close1",onClick:p})):e.createCommentVNode("",!0)])):e.createCommentVNode("",!0),e.createElementVNode("div",w,[e.renderSlot(o.$slots,"content")]),e.unref(r).footer?(e.openBlock(),e.createElementBlock("div",{key:1,class:e.normalizeClass(["z-dialog-footer",e.unref(s)])},[e.renderSlot(o.$slots,"footer")],2)):e.createCommentVNode("",!0)],6)],2)):e.createCommentVNode("",!0)]),_:3})]))}});exports.default=_;