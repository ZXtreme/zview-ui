"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),A=require("./slider.js"),E=require("./marker.vue.js"),w=require("../../../../node_modules/.pnpm/registry.npmmirror.com_@vue_shared@3.2.36/node_modules/@vue/shared/dist/shared.esm-bundler.js"),S=require("./utils.js"),C=require("../../../utils/math/tofixed.js"),M=require("../../../utils/vue/offset.js"),j=require("../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/throttle.js"),L={class:"z-slider__stop_label_box"},O={name:"ZSliderRunway"},P=e.defineComponent({...O,props:A.SliderProps,emits:["input","change"],setup(V,{expose:x,emit:_}){const t=V,h=e.ref(null),i=e.ref(null),d=e.ref(null),o=e.ref(0),s=e.ref(0),v=e.ref(0),m=e.ref(0),k=e.ref(0),f=e.ref(0),c=e.ref([]),b=e.ref(!1),y=e.ref(0),I=e.computed(()=>t.marks?Object.keys(t.marks):[]),T=e.computed(()=>c.value.filter((a,n)=>I.value.includes(String(n+1)))),z=a=>{let n=0;const l=JSON.parse(JSON.stringify(c.value));l.unshift(0),l.push(Number.MAX_SAFE_INTEGER);for(let r=0;r<l.length;r++)if(a<=l[r]){n=S.judgeLocation(a,l[r-1],l[r])==="end"?r:r-1;break}return[l,n]},N=e.computed(()=>t.vertical?{bottom:`${k.value}%`,height:`${f.value}%`}:{left:`${k.value}%`,width:`${f.value}%`}),p=(a,n)=>{let l=0,[r,u]=z(a);u===-1&&(u=0),l=Number(C.toFixed(String(r[u]/t.width*100),0)),n==="btn1"?(o.value=l,v.value=u*t.step+t.min,i.value.btnIndex=u-(u===0?0:1)):(s.value=l,m.value=u*t.step+t.min,d.value.btnIndex=u-(u===0?0:1)),$(),_("input",v.value,m.value),t.formatTooltip&&(v.value=t.formatTooltip(v.value),m.value=t.formatTooltip(m.value))},$=()=>{t.range&&w.isArray(t.modelValue)?(k.value=Math.min(s.value,o.value),f.value=Math.max(s.value,o.value)-Math.min(s.value,o.value)):f.value=o.value},q=a=>{if(t.disabled||b.value)return!1;let n="btn1";if(t.vertical?y.value=M.offsetTop(h.value)+h.value.offsetHeight-a.pageY:y.value=a.pageX-M.offsetLeft(h.value),t.range){let l=i.value.btnIndex>d.value.btnIndex?"start":"end",r=i.value.btnIndex>d.value.btnIndex?i.value.btnIndex:d.value.btnIndex,u=l==="start"?"end":"start",D=l==="start"?d.value.btnIndex:i.value.btnIndex;S.judgeLocation(y.value,c.value[D],c.value[r])===u?n="btn1":n="btn2"}return p(y.value,n),_("change",v.value,m.value),!1},g=e.computed(()=>t.width/(t.max-t.min)),B=()=>{c.value=S.cutChunk(t.width,t.step,t.max-t.min),t.range&&w.isArray(t.modelValue)?(p(g.value*(t.modelValue[0]-t.min),"btn1"),p(g.value*(t.modelValue[1]-t.min),"btn2"),k.value=Math.min(s.value,o.value),f.value=Math.max(s.value,o.value)-Math.min(s.value,o.value)):p(g.value*(t.modelValue-t.min),"btn1")};return e.watch([()=>t.modelValue,()=>t.width,()=>t.step,()=>t.max,()=>t.min],j.default(()=>{B()},20)),x({update:B}),(a,n)=>(e.openBlock(),e.createElementBlock("div",{class:"z-slider__runway",ref_key:"slider_runway",ref:h,onClick:q,style:e.normalizeStyle({height:`${a.height}px`})},[e.createElementVNode("div",{class:"z-slider__bar",style:e.normalizeStyle(e.unref(N))},null,4),a.showStops?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(["z-slider__stop",{showEffect:a.marks}])},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(T),(l,r)=>(e.openBlock(),e.createElementBlock("div",{class:"z-slider__stop_item",key:r,style:e.normalizeStyle([a.vertical?`bottom: ${l}px`:`left: ${l}px`])},null,4))),128)),e.createElementVNode("div",L,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(a.marks,(l,r)=>(e.openBlock(),e.createElementBlock("div",{class:"z-slider__stop_label",key:r,style:e.normalizeStyle([{left:c.value[r-1]+"px"},l.style])},e.toDisplayString(e.unref(w.isObject)(l)?l.label:l),5))),128))])],2)):e.createCommentVNode("",!0),e.createVNode(E.default,e.mergeProps({ref_key:"btn1",ref:i},a.$attrs,{"model-value":o.value,placement:a.placement,tip:v.value,isDraw:b.value,"onUpdate:isDraw":n[0]||(n[0]=l=>b.value=l),disabled:a.disabled,showTooltip:a.showTooltip,vertical:a.vertical,yname:"btn1",onSetMarkerSite:p}),null,16,["model-value","placement","tip","isDraw","disabled","showTooltip","vertical"]),a.range?(e.openBlock(),e.createBlock(E.default,e.mergeProps({key:1,ref_key:"btn2",ref:d},a.$attrs,{yname:"btn2",isDraw:b.value,"onUpdate:isDraw":n[1]||(n[1]=l=>b.value=l),placement:a.placement,showTooltip:a.showTooltip,disabled:a.disabled,"model-value":s.value,vertical:a.vertical,tip:m.value,onSetMarkerSite:p}),null,16,["isDraw","placement","showTooltip","disabled","model-value","vertical","tip"])):e.createCommentVNode("",!0)],4))}});exports.default=P;