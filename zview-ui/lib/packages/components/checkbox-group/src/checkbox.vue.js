"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),b=require("./checkbox.js"),p=e.createElementVNode("span",{class:"z-checkbox__inner"},null,-1),h=["disabled","value"],k={class:"z-checkbox__label"},v={name:"ZCheckbox"},f=e.defineComponent({...v,props:b.CheckBoxProps,emits:["update:modelValue","change"],setup(r,{emit:c}){const n=r,o=e.inject("checkboxGroup",{}),t=e.computed(()=>o.modelValue&&o.modelValue.value.length>0),a=e.computed({get(){return t.value?o.modelValue&&o.modelValue.value:n.modelValue},set(l){t.value?o.changeEvent&&o.changeEvent(l):c("update:modelValue",l)}}),u=e.computed(()=>t.value?a.value.includes(n.label):a.value),s=e.computed(()=>t.value&&o.disabled&&o.disabled.value||n.disabled),i=()=>{c("change",a.value)};return(l,d)=>(e.openBlock(),e.createElementBlock("label",{class:e.normalizeClass(["z-checkbox",[{"is-checked":e.unref(u)},{"is-disabled":e.unref(s)},{"is-bordered":l.border}]])},[e.createElementVNode("span",{class:e.normalizeClass(["z-checkbox__input",{"is-checked":e.unref(u),"is-disabled":e.unref(s),"is-indeterminate":l.indeterminate}])},[p,e.withDirectives(e.createElementVNode("input",{class:"z-checkbox__original",type:"checkbox","onUpdate:modelValue":d[0]||(d[0]=m=>e.isRef(a)?a.value=m:null),disabled:e.unref(s),value:l.label,onChange:i},null,40,h),[[e.vModelCheckbox,e.unref(a)]])],2),e.createElementVNode("span",k,[e.renderSlot(l.$slots,"default"),l.$slots.default?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.createTextVNode(e.toDisplayString(l.label),1)],64))])],2))}});exports.default=f;