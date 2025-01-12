import{s as U,n as C,A as q,B as W,C as te,D as R,e as T,a as I,c as k,b as j,E as B,g as S,f as g,v as A,i as M,h as f,F as V,k as ne,r as se,p as H,G as Z,t as O,d as X}from"../chunks/scheduler.qgu3jX-3.js";import{S as $,i as ee,b as le,d as oe,m as ae,t as ce,a as re,e as ie}from"../chunks/index.1MBy2nZE.js";import{p as ue}from"../chunks/stores.C5bSfAhR.js";function N(o){return(o==null?void 0:o.length)!==void 0?o:Array.from(o)}function he(o){let t,e;return{c:C,l:C,m(n,s){t||(e=[q(document.body,"keyup",o[8]),q(document.body,"keyup",o[10]),q(document.body,"keydown",o[9]),q(document.body,"keydown",o[11])],t=!0)},p:C,i:C,o:C,d(n){t=!1,W(e)}}}function me(o,t,e){let n,s,{paused:i=!1}=t,{pauseOnInput:l=!1}=t,{separator:r="-"}=t;const a=te();let h=[],c=[];function v(u){R.call(this,o,u)}function _(u){R.call(this,o,u)}const m=({key:u})=>{e(4,c=c.filter(b=>b!==u)),!(c.length>0)&&e(2,h=[])},d=({key:u,target:b})=>{l&&b.tagName!=="BODY"||(e(4,c=[...c,u]),i||(u in s?a("combo",n):e(2,h=[...h,u]),a(u===" "?"Space":u),a("key",u)))};return o.$$set=u=>{"paused"in u&&e(0,i=u.paused),"pauseOnInput"in u&&e(1,l=u.pauseOnInput),"separator"in u&&e(7,r=u.separator)},o.$$.update=()=>{o.$$.dirty&132&&e(3,n=h.join(r)),o.$$.dirty&4&&e(5,s=h.reduce((u,b)=>({...u,[b]:!0}),{})),o.$$.dirty&12&&h.length>0&&a("combo",n)},[i,l,h,n,c,s,a,r,v,_,m,d]}class de extends ${constructor(t){super(),ee(this,t,me,he,U,{paused:0,pauseOnInput:1,separator:7})}}function x(o,t,e){const n=o.slice();return n[10]=t[e][0],n[11]=t[e][1],n}function z(o,t,e){const n=o.slice();return n[14]=t[e],n}function G(o){let t,e=o[14].TTL+"",n,s,i=o[14].data+"",l;return{c(){t=T("li"),n=O(e),s=O(", "),l=O(i),this.h()},l(r){t=k(r,"LI",{class:!0});var a=j(t);n=X(a,e),s=X(a,", "),l=X(a,i),a.forEach(g),this.h()},h(){A(t,"class","svelte-echm0m")},m(r,a){M(r,t,a),f(t,n),f(t,s),f(t,l)},p:C,d(r){r&&g(t)}}}function Y(o){let t,e=o[10]+"",n,s,i,l=N(o[11]),r=[];for(let a=0;a<l.length;a+=1)r[a]=G(z(o,l,a));return{c(){t=T("h1"),n=O(e),s=I();for(let a=0;a<r.length;a+=1)r[a].c();i=H(),this.h()},l(a){t=k(a,"H1",{class:!0});var h=j(t);n=X(h,e),h.forEach(g),s=S(a);for(let c=0;c<r.length;c+=1)r[c].l(a);i=H(),this.h()},h(){A(t,"class","svelte-echm0m")},m(a,h){M(a,t,h),f(t,n),M(a,s,h);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(a,h);M(a,i,h)},p(a,h){if(h&1){l=N(a[11]);let c;for(c=0;c<l.length;c+=1){const v=z(a,l,c);r[c]?r[c].p(v,h):(r[c]=G(v),r[c].c(),r[c].m(i.parentNode,i))}for(;c<r.length;c+=1)r[c].d(1);r.length=l.length}},d(a){a&&(g(t),g(s),g(i)),Z(r,a)}}}function J(o){let t,e=N([...o[0]]),n=[];for(let s=0;s<e.length;s+=1)n[s]=Y(x(o,e,s));return{c(){for(let s=0;s<n.length;s+=1)n[s].c();t=H()},l(s){for(let i=0;i<n.length;i+=1)n[i].l(s);t=H()},m(s,i){for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(s,i);M(s,t,i)},p(s,i){if(i&1){e=N([...s[0]]);let l;for(l=0;l<e.length;l+=1){const r=x(s,e,l);n[l]?n[l].p(r,i):(n[l]=Y(r),n[l].c(),n[l].m(t.parentNode,t))}for(;l<n.length;l+=1)n[l].d(1);n.length=e.length}},d(s){s&&g(t),Z(n,s)}}}function pe(o){let t,e,n,s='This site is built with Svelte as a playground project, which sends request to a DoH server. <a href="https://github.com/richardevs/dns-spa" target="_blank">Source</a>',i,l,r="It queries the common record types for the domain. Format: TTL, value",a,h,c,v,_,m="Summarize",d,u,b,F=o[2],D,P,K;u=new de({}),u.$on("Enter",o[5]);let w=J(o);return{c(){t=T("div"),e=T("div"),n=T("p"),n.innerHTML=s,i=I(),l=T("p"),l.textContent=r,a=I(),h=T("h1"),c=T("input"),v=I(),_=T("button"),_.textContent=m,d=I(),le(u.$$.fragment),b=I(),w.c(),this.h()},l(p){t=k(p,"DIV",{class:!0});var E=j(t);e=k(E,"DIV",{class:!0});var y=j(e);n=k(y,"P",{"data-svelte-h":!0}),B(n)!=="svelte-2mkrq9"&&(n.innerHTML=s),i=S(y),l=k(y,"P",{"data-svelte-h":!0}),B(l)!=="svelte-e6nsjt"&&(l.textContent=r),a=S(y),h=k(y,"H1",{class:!0});var L=j(h);c=k(L,"INPUT",{placeholder:!0,class:!0}),v=S(L),_=k(L,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),B(_)!=="svelte-w2llk"&&(_.textContent=m),L.forEach(g),d=S(y),oe(u.$$.fragment,y),b=S(y),w.l(y),y.forEach(g),E.forEach(g),this.h()},h(){A(c,"placeholder","enter desired domain"),A(c,"class","svelte-echm0m"),A(_,"id","sum"),A(_,"class","svelte-echm0m"),A(h,"class","svelte-echm0m"),A(e,"class","card svelte-echm0m"),A(t,"class","container svelte-echm0m")},m(p,E){M(p,t,E),f(t,e),f(e,n),f(e,i),f(e,l),f(e,a),f(e,h),f(h,c),V(c,o[1]),f(h,v),f(h,_),f(e,d),ae(u,e,null),f(e,b),w.m(e,null),D=!0,P||(K=[q(c,"input",o[4]),q(_,"click",o[3])],P=!0)},p(p,[E]){E&2&&c.value!==p[1]&&V(c,p[1]),E&4&&U(F,F=p[2])?(w.d(1),w=J(p),w.c(),w.m(e,null)):w.p(p,E)},i(p){D||(ce(u.$$.fragment,p),D=!0)},o(p){re(u.$$.fragment,p),D=!1},d(p){p&&g(t),ie(u),w.d(p),P=!1,W(K)}}}let Q="https://dns.google/resolve?";function fe(o,t,e){let n;ne(o,ue,m=>e(6,n=m));let s="",i=0;const l=new Map;se(()=>{const m=n.url.searchParams.get("query");m&&e(1,s=m)});let r=["SOA","A","AAAA","TXT","MX","NS","CAA"];const a={_dmarc:"TXT",_spf:"TXT","mta-sts":"A","_mta-sts":"TXT","_smtp._tls":"TXT","google._domainkey":"TXT"};async function h(){c(),l.clear();for(const m of r)await fetch(Q+"name="+s+"&type="+m,{headers:{accept:"application/dns-json"}}).then(d=>d.json()).then(d=>{d.Answer&&(l.set(m,d.Answer),console.log("setting",m))}).catch(d=>(console.log(d),[]));for(let m in a)await fetch(Q+"name="+m+"."+s+"&type="+a[m],{headers:{accept:"application/dns-json"}}).then(d=>d.json()).then(d=>{d.Answer&&(l.set(m,d.Answer),console.log("setting",m))}).catch(d=>(console.log(d),[]));e(2,i++,i),console.log("returning.")}function c(){const m=new URL(window.location);m.searchParams.set("query",s),window.history.pushState({},"",m)}function v(){s=this.value,e(1,s)}return[l,s,i,h,v,()=>{var m;(m=document.getElementById("sum"))==null||m.click()}]}class ye extends ${constructor(t){super(),ee(this,t,fe,pe,U,{apiMap:0})}get apiMap(){return this.$$.ctx[0]}}export{ye as component};