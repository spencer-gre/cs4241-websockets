var K=Object.defineProperty;var R=(e,t,n)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var b=(e,t,n)=>(R(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const o of c)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(c){const o={};return c.integrity&&(o.integrity=c.integrity),c.referrerPolicy&&(o.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?o.credentials="include":c.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(c){if(c.ep)return;c.ep=!0;const o=n(c);fetch(c.href,o)}})();function _(){}function B(e){return e()}function A(){return Object.create(null)}function y(e){e.forEach(B)}function q(e){return typeof e=="function"}function T(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function U(e){return Object.keys(e).length===0}function V(e,t){e.appendChild(t)}function $(e,t,n){e.insertBefore(t,n||null)}function m(e){e.parentNode&&e.parentNode.removeChild(e)}function W(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function M(e){return document.createElement(e)}function E(e){return document.createTextNode(e)}function z(){return E(" ")}function D(){return E("")}function G(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function H(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function J(e){return Array.from(e.childNodes)}function Q(e,t){t=""+t,e.data!==t&&(e.data=t)}let O;function g(e){O=e}const h=[],k=[];let p=[];const P=[],X=Promise.resolve();let x=!1;function Y(){x||(x=!0,X.then(F))}function v(e){p.push(e)}const w=new Set;let a=0;function F(){if(a!==0)return;const e=O;do{try{for(;a<h.length;){const t=h[a];a++,g(t),Z(t.$$)}}catch(t){throw h.length=0,a=0,t}for(g(null),h.length=0,a=0;k.length;)k.pop()();for(let t=0;t<p.length;t+=1){const n=p[t];w.has(n)||(w.add(n),n())}p.length=0}while(h.length);for(;P.length;)P.pop()();x=!1,w.clear(),g(e)}function Z(e){if(e.fragment!==null){e.update(),y(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(v)}}function ee(e){const t=[],n=[];p.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),p=t}const te=new Set;function ne(e,t){e&&e.i&&(te.delete(e),e.i(t))}function j(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function re(e,t,n){const{fragment:r,after_update:c}=e.$$;r&&r.m(t,n),v(()=>{const o=e.$$.on_mount.map(B).filter(q);e.$$.on_destroy?e.$$.on_destroy.push(...o):y(o),e.$$.on_mount=[]}),c.forEach(v)}function ce(e,t){const n=e.$$;n.fragment!==null&&(ee(n.after_update),y(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function oe(e,t){e.$$.dirty[0]===-1&&(h.push(e),Y(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function se(e,t,n,r,c,o,l=null,i=[-1]){const s=O;g(e);const u=e.$$={fragment:null,ctx:[],props:o,update:_,not_equal:c,bound:A(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:A(),dirty:i,skip_bound:!1,root:t.target||s.$$.root};l&&l(u.root);let f=!1;if(u.ctx=n?n(e,t.props||{},(d,N,...L)=>{const S=L.length?L[0]:N;return u.ctx&&c(u.ctx[d],u.ctx[d]=S)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](S),f&&oe(e,d)),N}):[],u.update(),f=!0,y(u.before_update),u.fragment=r?r(u.ctx):!1,t.target){if(t.hydrate){const d=J(t.target);u.fragment&&u.fragment.l(d),d.forEach(m)}else u.fragment&&u.fragment.c();t.intro&&ne(e.$$.fragment),re(e,t.target,t.anchor),F()}g(s)}class ue{constructor(){b(this,"$$");b(this,"$$set")}$destroy(){ce(this,1),this.$destroy=_}$on(t,n){if(!q(n))return _;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}$set(t){this.$$set&&!U(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const fe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(fe);function C(e,t,n){const r=e.slice();return r[3]=t[n],r}function I(e){let t,n=e[3]+"",r;return{c(){t=M("h3"),r=E(n)},m(c,o){$(c,t,o),V(t,r)},p(c,o){o&1&&n!==(n=c[3]+"")&&Q(r,n)},d(c){c&&m(t)}}}function ie(e){let t,n,r,c,o,l=j(e[0]),i=[];for(let s=0;s<l.length;s+=1)i[s]=I(C(e,l,s));return{c(){t=M("input"),n=z();for(let s=0;s<i.length;s+=1)i[s].c();r=D(),H(t,"type","text")},m(s,u){$(s,t,u),$(s,n,u);for(let f=0;f<i.length;f+=1)i[f]&&i[f].m(s,u);$(s,r,u),c||(o=G(t,"change",e[1]),c=!0)},p(s,[u]){if(u&1){l=j(s[0]);let f;for(f=0;f<l.length;f+=1){const d=C(s,l,f);i[f]?i[f].p(d,u):(i[f]=I(d),i[f].c(),i[f].m(r.parentNode,r))}for(;f<i.length;f+=1)i[f].d(1);i.length=l.length}},i:_,o:_,d(s){s&&(m(t),m(n),m(r)),W(i,s),c=!1,o()}}}function le(e,t,n){let r=[];const c=new WebSocket("ws://127.0.0.1:3000");return c.onopen=()=>{c.send("a new client has connected."),c.onmessage=async l=>{const i=await l.data.text();n(0,r=r.concat(["them: "+i]))}},[r,function(){const l=document.querySelector("input").value;c.send(l),n(0,r=r.concat(["me: "+l]))}]}class de extends ue{constructor(t){super(),se(this,t,le,ie,T,{})}}new de({target:document.getElementById("app")});
