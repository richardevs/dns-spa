import{s as q,n as v,p as A,r as F,q as R,v as B,e as E,b as I,w as C,d as j,x as D,j as N,f as M,i as _,y as H,k as g,l as k,z as P,A as G,t as O,h as S}from"../chunks/scheduler.-gP7ZxVZ.js";import{S as J,i as Q,c as V,b as W,m as Z,t as $,a as ee,d as te}from"../chunks/index.DcxVHqMU.js";function X(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function ne(l){let t,u;return{c:v,l:v,m(e,n){t||(u=[A(document.body,"keyup",l[8]),A(document.body,"keyup",l[10]),A(document.body,"keydown",l[9]),A(document.body,"keydown",l[11])],t=!0)},p:v,i:v,o:v,d(e){t=!1,F(u)}}}function le(l,t,u){let e,n,{paused:i=!1}=t,{pauseOnInput:c=!1}=t,{separator:o="-"}=t;const s=R();let f=[],a=[];function p(h){B.call(this,l,h)}function d(h){B.call(this,l,h)}const b=({key:h})=>{u(4,a=a.filter(w=>w!==h)),!(a.length>0)&&u(2,f=[])},T=({key:h,target:w})=>{c&&w.tagName!=="BODY"||(u(4,a=[...a,h]),i||(h in n?s("combo",e):u(2,f=[...f,h]),s(h===" "?"Space":h),s("key",h)))};return l.$$set=h=>{"paused"in h&&u(0,i=h.paused),"pauseOnInput"in h&&u(1,c=h.pauseOnInput),"separator"in h&&u(7,o=h.separator)},l.$$.update=()=>{l.$$.dirty&132&&u(3,e=f.join(o)),l.$$.dirty&4&&u(5,n=f.reduce((h,w)=>({...h,[w]:!0}),{})),l.$$.dirty&12&&f.length>0&&s("combo",e)},[i,c,f,e,a,n,s,o,p,d,b,T]}class oe extends J{constructor(t){super(),Q(this,t,le,ne,q,{paused:0,pauseOnInput:1,separator:7})}}function z(l,t,u){const e=l.slice();return e[8]=t[u][0],e[9]=t[u][1],e}function K(l,t,u){const e=l.slice();return e[12]=t[u],e}function L(l){let t,u=l[12].TTL+"",e,n,i=l[12].data+"",c;return{c(){t=E("li"),e=O(u),n=O(", "),c=O(i)},l(o){t=j(o,"LI",{});var s=M(t);e=S(s,u),n=S(s,", "),c=S(s,i),s.forEach(_)},m(o,s){g(o,t,s),k(t,e),k(t,n),k(t,c)},p:v,d(o){o&&_(t)}}}function U(l){let t,u=l[8]+"",e,n,i,c=X(l[9]),o=[];for(let s=0;s<c.length;s+=1)o[s]=L(K(l,c,s));return{c(){t=E("h1"),e=O(u),n=I();for(let s=0;s<o.length;s+=1)o[s].c();i=C()},l(s){t=j(s,"H1",{});var f=M(t);e=S(f,u),f.forEach(_),n=N(s);for(let a=0;a<o.length;a+=1)o[a].l(s);i=C()},m(s,f){g(s,t,f),k(t,e),g(s,n,f);for(let a=0;a<o.length;a+=1)o[a]&&o[a].m(s,f);g(s,i,f)},p(s,f){if(f&1){c=X(s[9]);let a;for(a=0;a<c.length;a+=1){const p=K(s,c,a);o[a]?o[a].p(p,f):(o[a]=L(p),o[a].c(),o[a].m(i.parentNode,i))}for(;a<o.length;a+=1)o[a].d(1);o.length=c.length}},d(s){s&&(_(t),_(n),_(i)),G(o,s)}}}function x(l){let t,u=X([...l[0]]),e=[];for(let n=0;n<u.length;n+=1)e[n]=U(z(l,u,n));return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=C()},l(n){for(let i=0;i<e.length;i+=1)e[i].l(n);t=C()},m(n,i){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(n,i);g(n,t,i)},p(n,i){if(i&1){u=X([...n[0]]);let c;for(c=0;c<u.length;c+=1){const o=z(n,u,c);e[c]?e[c].p(o,i):(e[c]=U(o),e[c].c(),e[c].m(t.parentNode,t))}for(;c<e.length;c+=1)e[c].d(1);e.length=u.length}},d(n){n&&_(t),G(e,n)}}}function se(l){let t,u="This site is built with Svelte as a playground project, which sends request to a DoH server.",e,n,i,c,o,s="Summarize",f,a,p,d=l[2],b,T,h,w;a=new oe({}),a.$on("Enter",l[5]);let y=x(l);return{c(){t=E("p"),t.textContent=u,e=I(),n=E("h1"),i=E("input"),c=I(),o=E("button"),o.textContent=s,f=I(),V(a.$$.fragment),p=I(),y.c(),b=C(),this.h()},l(r){t=j(r,"P",{"data-svelte-h":!0}),D(t)!=="svelte-eipg5o"&&(t.textContent=u),e=N(r),n=j(r,"H1",{});var m=M(n);i=j(m,"INPUT",{placeholder:!0}),c=N(m),o=j(m,"BUTTON",{id:!0,"data-svelte-h":!0}),D(o)!=="svelte-w2llk"&&(o.textContent=s),m.forEach(_),f=N(r),W(a.$$.fragment,r),p=N(r),y.l(r),b=C(),this.h()},h(){H(i,"placeholder","enter desired domain"),H(o,"id","sum")},m(r,m){g(r,t,m),g(r,e,m),g(r,n,m),k(n,i),P(i,l[1]),k(n,c),k(n,o),g(r,f,m),Z(a,r,m),g(r,p,m),y.m(r,m),g(r,b,m),T=!0,h||(w=[A(i,"input",l[4]),A(o,"click",l[3])],h=!0)},p(r,[m]){m&2&&i.value!==r[1]&&P(i,r[1]),m&4&&q(d,d=r[2])?(y.d(1),y=x(r),y.c(),y.m(b.parentNode,b)):y.p(r,m)},i(r){T||($(a.$$.fragment,r),T=!0)},o(r){ee(a.$$.fragment,r),T=!1},d(r){r&&(_(t),_(e),_(n),_(f),_(p),_(b)),te(a,r),y.d(r),h=!1,F(w)}}}let Y="https://cloudflare-dns.com/dns-query?";function ce(l,t,u){let e="",n=0;const i=new Map;let c=["SOA","A","AAAA","TXT","MX","NS"];const o={_dmarc:"TXT",_spf:"TXT","_mta-sts":"TXT","_smtp._tls":"TXT"};async function s(){i.clear();for(const p of c)await fetch(Y+"name="+e+"&type="+p,{headers:{accept:"application/dns-json"}}).then(d=>d.json()).then(d=>{d.Answer&&(i.set(p,d.Answer),console.log("setting",p))}).catch(d=>(console.log(d),[]));for(let p in o)await fetch(Y+"name="+p+"."+e+"&type="+o[p],{headers:{accept:"application/dns-json"}}).then(d=>d.json()).then(d=>{d.Answer&&(i.set(p,d.Answer),console.log("setting",p))}).catch(d=>(console.log(d),[]));u(2,n++,n),console.log("returning.")}function f(){e=this.value,u(1,e)}return[i,e,n,s,f,()=>{var p;(p=document.getElementById("sum"))==null||p.click()}]}class ue extends J{constructor(t){super(),Q(this,t,ce,se,q,{apiMap:0})}get apiMap(){return this.$$.ctx[0]}}export{ue as component};
