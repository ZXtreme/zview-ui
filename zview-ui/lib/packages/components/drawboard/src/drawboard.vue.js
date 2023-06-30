"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),R=require("./drawboard.js"),i=require("../../button/index.js"),U=require("../../scrollbar/index.js"),C=require("../../slider/index.js"),$=require("../../divider/index.js"),q={class:"z-board-item1"},I=e.createTextVNode("回退"),L=e.createTextVNode("清空"),X=e.createTextVNode("保存"),Y=e.createTextVNode("橡皮大小"),P=e.createTextVNode("线条颜色"),F=e.createTextVNode("线条宽度"),j=e.createTextVNode("背景颜色"),H={key:0,class:"z-board-item2"},J=e.createTextVNode("橡皮大小"),O={key:1,class:"z-board-item2"},Z=e.createTextVNode("线条颜色"),A={key:2,class:"z-board-item2"},G=e.createTextVNode("线条宽度"),K={key:3,class:"z-board-item2"},Q=e.createTextVNode("背景颜色"),ee=["width","height"],te={name:"ZDrawboard"},oe=e.defineComponent({...te,props:R.DrawboardProps,setup(_){const r=_,n=e.ref(null);let l=null;e.onMounted(()=>{l=n.value.getContext("2d")});const g=o=>{f.value=o},k=o=>{u.value=o},m=e.ref(""),c=e.ref(""),u=e.ref(0),f=e.ref(0),d=e.ref(0),p=e.ref(!1);let h=0,w=0;const v=e.ref(!1),s=[],N=e.computed(()=>({width:r.width+"px"})),b=e.computed(()=>({cursor:v.value?`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="15" fill="none" stroke="%23000" stroke-width="2"/><circle cx="16" cy="16" r="2" fill="black"/></svg>') 16 16, auto`:"crosshair",backgroundColor:c.value})),B=o=>{p.value&&(l.beginPath(),v.value?l.clearRect(o.offsetX-u.value/2,o.offsetY-u.value/2,u.value,u.value):(l.strokeStyle=m.value,l.lineWidth=f.value,l.lineCap="round",l.lineJoin="round",l.moveTo(h,w),l.lineTo(o.offsetX,o.offsetY),l.stroke(),h=o.offsetX,w=o.offsetY))},V=()=>{s.push(n.value.toDataURL())},T=()=>{if(s.length>1){s.pop();let o=new Image;o.src=s[s.length-1],o.onload=()=>{l.clearRect(0,0,n.value.width,n.value.height),l.drawImage(o,0,0)}}else l.clearRect(0,0,n.value.width,n.value.height),s.length=0},z=()=>{l.clearRect(0,0,n.value.width,n.value.height),V()},S=async()=>new Promise(o=>{const t=document.createElement("canvas");t.width=n.value.width,t.height=n.value.height;const a=t.getContext("2d");a.fillStyle=c.value,a.fillRect(0,0,t.width,t.height);let y=new Image;y.src=s[s.length-1],y.onload=()=>{a.drawImage(y,0,0),o(t.toDataURL(r.pictureFormat))}}),E=async()=>{let o;r.reserveBackgroundColor?o=await S():o=n.value.toDataURL(r.pictureFormat);const t=document.createElement("a");t.href=o,t.download=r.pictureName,t.target="_blank",t.click()},M=o=>{p.value=!0,h=o.offsetX,w=o.offsetY},x=o=>{p.value=!1,V()},W=o=>{p.value&&x()},D=()=>{m.value=r.lineColor,c.value=r.backgroundColor,u.value=r.eraserWidth,f.value=r.lineWidth};return e.watch([()=>r.backgroundColor,()=>r.lineColor,()=>r.lineWidth,()=>r.eraserWidth],()=>{D()},{immediate:!0}),(o,t)=>(e.openBlock(),e.createElementBlock("div",{class:"z-board",style:e.normalizeStyle(e.unref(N))},[e.createVNode(e.unref(U.default),null,{default:e.withCtx(()=>[e.createElementVNode("div",q,[e.createVNode(e.unref(i.default),{type:"primary",plain:"",ref:"eraseBtn",onClick:t[0]||(t[0]=a=>v.value=!v.value)},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(v.value?"画笔":"橡皮"),1)]),_:1},512),e.createVNode(e.unref(i.default),{type:"primary",plain:"",ref:"undoBtn",onClick:T},{default:e.withCtx(()=>[I]),_:1},512),e.createVNode(e.unref(i.default),{type:"primary",plain:"",ref:"clearBtn",onClick:z},{default:e.withCtx(()=>[L]),_:1},512),o.isSave?(e.openBlock(),e.createBlock(e.unref(i.default),{key:0,type:"primary",plain:"",id:"save-btn",ref:"saveBtn",onClick:E},{default:e.withCtx(()=>[X]),_:1},512)):e.createCommentVNode("",!0),e.createVNode(e.unref(i.default),{type:"primary",plain:"",onClick:t[1]||(t[1]=a=>d.value=0)},{default:e.withCtx(()=>[Y]),_:1}),e.createVNode(e.unref(i.default),{type:"primary",plain:"",onClick:t[2]||(t[2]=a=>d.value=1)},{default:e.withCtx(()=>[P]),_:1}),e.createVNode(e.unref(i.default),{type:"primary",plain:"",onClick:t[3]||(t[3]=a=>d.value=2)},{default:e.withCtx(()=>[F]),_:1}),e.createVNode(e.unref(i.default),{type:"primary",plain:"",onClick:t[4]||(t[4]=a=>d.value=3)},{default:e.withCtx(()=>[j]),_:1})])]),_:1}),d.value===0?(e.openBlock(),e.createElementBlock("div",H,[e.createVNode(e.unref(i.default),{type:"primary",plain:"",class:"z-item2-right"},{default:e.withCtx(()=>[J]),_:1}),e.createVNode(e.unref(C.default),{modelValue:u.value,"onUpdate:modelValue":t[5]||(t[5]=a=>u.value=a),"show-input":"",onChange:k,onInput:k,min:3,max:48},null,8,["modelValue"])])):e.createCommentVNode("",!0),d.value===1?(e.openBlock(),e.createElementBlock("div",O,[e.createVNode(e.unref(i.default),{type:"primary",plain:"",class:"z-item2-right"},{default:e.withCtx(()=>[Z]),_:1}),e.withDirectives(e.createElementVNode("input",{type:"color","onUpdate:modelValue":t[6]||(t[6]=a=>m.value=a),class:"z-board-color-picker"},null,512),[[e.vModelText,m.value]])])):e.createCommentVNode("",!0),d.value===2?(e.openBlock(),e.createElementBlock("div",A,[e.createVNode(e.unref(i.default),{type:"primary",plain:"",class:"z-item2-right"},{default:e.withCtx(()=>[G]),_:1}),e.createVNode(e.unref(C.default),{modelValue:f.value,"onUpdate:modelValue":t[7]||(t[7]=a=>f.value=a),"show-input":"",onChange:g,onInput:g,min:1,max:32},null,8,["modelValue"])])):e.createCommentVNode("",!0),d.value===3?(e.openBlock(),e.createElementBlock("div",K,[e.createVNode(e.unref(i.default),{type:"primary",plain:"",class:"z-item2-right"},{default:e.withCtx(()=>[Q]),_:1}),e.withDirectives(e.createElementVNode("input",{type:"color","onUpdate:modelValue":t[8]||(t[8]=a=>c.value=a),class:"z-board-color-picker"},null,512),[[e.vModelText,c.value]])])):e.createCommentVNode("",!0),e.createVNode(e.unref($.default),{style:{margin:"5px 0"}}),e.createElementVNode("canvas",{id:"canvas",ref_key:"canvas",ref:n,width:o.width,height:o.height,onMousemove:B,onMouseup:x,onMouseout:W,onMousedown:M,style:e.normalizeStyle(e.unref(b))},null,44,ee)],4))}});exports.default=oe;