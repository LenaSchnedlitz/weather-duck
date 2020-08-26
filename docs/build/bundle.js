var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function l(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}let m;function $(t){m=t}function h(t){(function(){if(!m)throw new Error("Function called outside component initialization");return m})().$$.on_mount.push(t)}const x=[],w=[],y=[],v=[],b=Promise.resolve();let _=!1;function k(t){y.push(t)}let C=!1;const T=new Set;function E(){if(!C){C=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];$(e),A(e.$$)}for(x.length=0;w.length;)w.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];T.has(e)||(T.add(e),e())}y.length=0}while(x.length);for(;v.length;)v.pop()();_=!1,C=!1,T.clear()}}function A(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const D=new Set;let L;function M(t,e){t&&t.i&&(D.delete(t),t.i(e))}function N(t,e,n,r){if(t&&t.o){if(D.has(t))return;D.add(t),L.c.push(()=>{D.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function S(t){t&&t.c()}function H(t,n,c){const{fragment:s,on_mount:i,on_destroy:u,after_update:a}=t.$$;s&&s.m(n,c),k(()=>{const n=i.map(e).filter(o);u?u.push(...n):r(n),t.$$.on_mount=[]}),a.forEach(k)}function K(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function U(t,e){-1===t.$$.dirty[0]&&(x.push(t),_||(_=!0,b.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function O(e,o,c,s,i,a,l=[-1]){const f=m;$(e);const d=o.props||{},p=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:l};let g=!1;if(p.ctx=c?c(e,d,(t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&i(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),g&&U(e,t)),n}):[],p.update(),g=!0,r(p.before_update),p.fragment=!!s&&s(p.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);p.fragment&&p.fragment.l(t),t.forEach(u)}else p.fragment&&p.fragment.c();o.intro&&M(e.$$.fragment),H(e,o.target,o.anchor),E()}$(f)}class j{$destroy(){K(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function z(e){let n,r,o,c;return{c(){n=a("section"),r=a("h1"),r.textContent=""+e[0](),o=d(),c=a("form"),c.innerHTML='<input type="text" name="q" aria-label="Search on DuckDuckGo" autofocus="" class="svelte-xmcsun"> \n    <button class="svelte-xmcsun"><svg xmlns="http://www.w3.org/2000/svg" class="svelte-xmcsun"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>',p(r,"class","svelte-xmcsun"),p(c,"method","get"),p(c,"id","search-form"),p(c,"action","https://duckduckgo.com/"),p(c,"autocomplete","off"),p(c,"class","svelte-xmcsun"),p(n,"class","svelte-xmcsun")},m(t,e){i(t,n,e),s(n,r),s(n,o),s(n,c)},p:t,i:t,o:t,d(t){t&&u(n)}}}function B(t,e,n){let{greetings:r}=e;return t.$set=t=>{"greetings"in t&&n(1,r=t.greetings)},[function(){const t=(new Date).getHours();return t<5?r.night:t<11?r.morning:t<17?r.day:t<23?r.evening:r.night},r]}class G extends j{constructor(t){super(),O(this,t,B,z,c,{greetings:1})}}function q(e){let n,r,o,c=Math.round(e[0])+"";return{c(){n=a("div"),r=f(c),o=f("°"),g(n,"background-color",e[1]()),g(n,"color",e[2]()),p(n,"class","svelte-1n8166g")},m(t,e){i(t,n,e),s(n,r),s(n,o)},p(t,[e]){1&e&&c!==(c=Math.round(t[0])+"")&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(r,c)},i:t,o:t,d(t){t&&u(n)}}}function P(t,e,n){let{temperature:r}=e;return t.$set=t=>{"temperature"in t&&n(0,r=t.temperature)},[r,function(){return r>49?n(0,r=49):r<-50&&n(0,r=-50),`var(--color-${Math.round(r)})`},function(){return-32<=r<=-18||35<=r?"var(--white)":"var(--black)"}]}class F extends j{constructor(t){super(),O(this,t,P,q,c,{temperature:0})}}function I(e){let n,r,o,c,l=e[0]()+"";return{c(){n=a("span"),r=f(l),o=d(),c=a("sup"),c.textContent="00",p(c,"class","svelte-1p69b5i"),p(n,"class","svelte-1p69b5i")},m(t,e){i(t,n,e),s(n,r),s(n,o),s(n,c)},p:t,i:t,o:t,d(t){t&&u(n)}}}function J(t,e,n){let{unixTime:r}=e;return t.$set=t=>{"unixTime"in t&&n(1,r=t.unixTime)},[function(){return new Date(1e3*r).getHours()},r]}class Q extends j{constructor(t){super(),O(this,t,J,I,c,{unixTime:1})}}function R(e){let n,r,o;return{c(){var t,c,s;n=l("svg"),r=l("use"),t=r,c="xlink:href",s=o="weather.svg#"+e[0](),t.setAttributeNS("http://www.w3.org/1999/xlink",c,s),p(n,"viewBox","0 0 24 24"),p(n,"class","svelte-lu0fx3")},m(t,e){i(t,n,e),s(n,r)},p:t,i:t,o:t,d(t){t&&u(n)}}}function V(t,e,n){let{iconCode:r}=e;return t.$set=t=>{"iconCode"in t&&n(1,r=t.iconCode)},[function(){switch(r){case"01d":return"sun";case"01n":return"moon";case"02d":return"sun";case"02n":return"moon";case"03d":case"03n":case"04d":case"04n":return"cloud";case"09d":case"09n":return"cloud-drizzle";case"10d":case"10n":return"cloud-rain";case"11d":case"11n":return"cloud-lightning";case"13d":case"13n":return"cloud-snow";case"50d":case"50n":return"mist"}},r]}class W extends j{constructor(t){super(),O(this,t,V,R,c,{iconCode:1})}}function X(t,e,n){const r=t.slice();return r[2]=e[n],r[4]=n,r}function Y(t){let e,n,r,o,c,l,f,g;return n=new Q({props:{unixTime:t[2].dt}}),o=new W({props:{iconCode:t[2].weather[0].icon}}),l=new F({props:{temperature:t[2].feels_like}}),{c(){e=a("li"),S(n.$$.fragment),r=d(),S(o.$$.fragment),c=d(),S(l.$$.fragment),f=d(),p(e,"class","svelte-1dykhco")},m(t,u){i(t,e,u),H(n,e,null),s(e,r),H(o,e,null),s(e,c),H(l,e,null),s(e,f),g=!0},p(t,e){const r={};1&e&&(r.unixTime=t[2].dt),n.$set(r);const c={};1&e&&(c.iconCode=t[2].weather[0].icon),o.$set(c);const s={};1&e&&(s.temperature=t[2].feels_like),l.$set(s)},i(t){g||(M(n.$$.fragment,t),M(o.$$.fragment,t),M(l.$$.fragment,t),g=!0)},o(t){N(n.$$.fragment,t),N(o.$$.fragment,t),N(l.$$.fragment,t),g=!1},d(t){t&&u(e),K(n),K(o),K(l)}}}function Z(t){let e,n,o=t[0],c=[];for(let e=0;e<o.length;e+=1)c[e]=Y(X(t,o,e));const s=t=>N(c[t],1,1,()=>{c[t]=null});return{c(){e=a("ul");for(let t=0;t<c.length;t+=1)c[t].c();p(e,"class","svelte-1dykhco")},m(t,r){i(t,e,r);for(let t=0;t<c.length;t+=1)c[t].m(e,null);n=!0},p(t,[n]){if(1&n){let i;for(o=t[0],i=0;i<o.length;i+=1){const r=X(t,o,i);c[i]?(c[i].p(r,n),M(c[i],1)):(c[i]=Y(r),c[i].c(),M(c[i],1),c[i].m(e,null))}for(L={r:0,c:[],p:L},i=o.length;i<c.length;i+=1)s(i);L.r||r(L.c),L=L.p}},i(t){if(!n){for(let t=0;t<o.length;t+=1)M(c[t]);n=!0}},o(t){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)N(c[t]);n=!1},d(t){t&&u(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(c,t)}}}function tt(t,e,n){let{url:r}=e,o=[];return h(async()=>{const t=await fetch(r),e=(await t.json()).hourly,c=new Date(1e3*e[0].dt).getHours();n(0,o=e.slice(0,48-c+1))}),t.$set=t=>{"url"in t&&n(1,r=t.url)},[o,r]}class et extends j{constructor(t){super(),O(this,t,tt,Z,c,{url:1})}}function nt(t){let e,n,r,o;return e=new G({props:{greetings:t[3]}}),r=new et({props:{url:`${t[0]}&appid=${t[1]}&${t[2]}`}}),{c(){S(e.$$.fragment),n=d(),S(r.$$.fragment)},m(t,c){H(e,t,c),i(t,n,c),H(r,t,c),o=!0},p(t,[n]){const o={};8&n&&(o.greetings=t[3]),e.$set(o);const c={};7&n&&(c.url=`${t[0]}&appid=${t[1]}&${t[2]}`),r.$set(c)},i(t){o||(M(e.$$.fragment,t),M(r.$$.fragment,t),o=!0)},o(t){N(e.$$.fragment,t),N(r.$$.fragment,t),o=!1},d(t){K(e,t),t&&u(n),K(r,t)}}}function rt(t,e,n){let{apiUrl:r}=e,{apiKey:o}=e,{apiLocation:c}=e,{greetings:s}=e;return t.$set=t=>{"apiUrl"in t&&n(0,r=t.apiUrl),"apiKey"in t&&n(1,o=t.apiKey),"apiLocation"in t&&n(2,c=t.apiLocation),"greetings"in t&&n(3,s=t.greetings)},[r,o,c,s]}return new class extends j{constructor(t){super(),O(this,t,rt,nt,c,{apiUrl:0,apiKey:1,apiLocation:2,greetings:3})}}({target:document.body,props:{apiUrl:"https://api.openweathermap.org/data/2.5/onecall?exclude=current,minutely,daily&units=metric",apiKey:"5eacf9a2e596d202c9d14171bddf6e2b",apiLocation:"lat=48.210033&lon=16.363449",greetings:{morning:"Guten Morgen!",day:"Hi.",evening:"Schönen Abend!",night:"Gute Nacht."}}})}();
//# sourceMappingURL=bundle.js.map
