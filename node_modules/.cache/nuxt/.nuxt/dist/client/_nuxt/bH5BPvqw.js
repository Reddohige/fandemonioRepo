import{_}from"./kKSd8ZA2.js";import{k as c,_ as k,f,o as x,w as g,b as v,j as y}from"./ih89ujjk.js";/**
 * @license lucide-vue-next v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),C=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,o)=>o?o.toUpperCase():r.toLowerCase()),A=t=>{const e=C(t);return e.charAt(0).toUpperCase()+e.slice(1)},B=(...t)=>t.filter((e,r,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===r).join(" ").trim(),p=t=>t==="";/**
 * @license lucide-vue-next v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=({name:t,iconNode:e,absoluteStrokeWidth:r,"absolute-stroke-width":o,strokeWidth:s,"stroke-width":l,size:n=a.width,color:w=a.stroke,...u},{slots:d})=>c("svg",{...a,...u,width:n,height:n,stroke:w,"stroke-width":p(r)||p(o)||r===!0||o===!0?Number(s||l||a["stroke-width"])*24/Number(n):s||l||a["stroke-width"],class:B("lucide",u.class,...t?[`lucide-${h(A(t))}-icon`,`lucide-${h(t)}`]:["lucide-icon"])},[...e.map(m=>c(...m)),...d.default?[d.default()]:[]]);/**
 * @license lucide-vue-next v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=(t,e)=>(r,{slots:o,attrs:s})=>c(H,{...s,...r,iconNode:e,name:t},o);/**
 * @license lucide-vue-next v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=i("house",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-vue-next v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=i("instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-vue-next v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=i("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),b={__name:"HomeButton",setup(t){return(e,r)=>{const o=_;return x(),f(o,{to:"/",class:"absolute left-4 top-4 transform rounded-full p-2 transition-transform hover:-rotate-6 hover:scale-110",title:"Torna alla Home"},{default:g(()=>[v(y(I),{class:"h-6 w-6 text-white"})]),_:1})}}},N=k(b,[["__scopeId","data-v-5973809d"]]);export{N as H,M as I,$ as X,i as c};
