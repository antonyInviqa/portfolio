!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var o,r,c,s,l;e.exports=(r=[],c=document,s=c.documentElement.doScroll,(l=(s?/^loaded|^c/:/^loaded|^i|^c/).test(c.readyState))||c.addEventListener("DOMContentLoaded",o=function(){for(c.removeEventListener("DOMContentLoaded",o),l=1;o=r.shift();)o()}),function(e){l?setTimeout(e,0):r.push(e)})},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);n(1);var o=n(0),r=function(){let e,t;window.onload=()=>{const n=document.querySelectorAll(".main-nav__link");e=document.documentElement,t=document.body,Array.from(n).forEach(n=>{n.addEventListener("click",o=>{const r=Math.round(t.scrollTop||e.scrollTop);if(""!==n.hash){o.preventDefault();let c=0,s=document.getElementById(n.hash.substring(1));for(;s.offsetParent;)c+=s.offsetTop,s=s.offsetParent;(function(n,o,r){let c;const s=o>n?10:-10,l=setInterval(()=>{const i=Math.round(t.scrollTop||e.scrollTop);c===i||o>n&&i>=o||o<n&&i<=o?(clearInterval(l),window.location.hash=r):(t.scrollTop+=s,e.scrollTop+=s,c=i)},1)})(r,c=Math.round(c),n.hash),function(e){[...document.querySelectorAll(".current")].forEach(e=>{e.className=e.className.replace("current","")}),e.target.className+=" current",document.getElementById(e.target.href.split("#")[1]).className+=" current"}(o)}})}),document.querySelector(".cover__inner").classList.add("fadeInUp")}},c=function(){const e=document.querySelector(".skills");window.addEventListener("scroll",()=>{if(function(){const t=e.getBoundingClientRect();return t.top>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)}()){const e=document.querySelectorAll(".bar__inner");if(!e.length)return;Array.from(e).forEach((e,t)=>{setTimeout(()=>{e.style.width=e.dataset.percent},400*t)})}},!1)};n.n(o)()(()=>{r(),function(){window.matchMedia("(min-width: 768px)").matches&&function(){let e=0;const t=document.querySelector(".site-header");window.addEventListener("scroll",((e,t=10,n=!0)=>()=>{let o;const r=this,c=arguments,s=n&&!o;clearTimeout(o),o=setTimeout(()=>{o=null,n||e.apply(r,c)},t),s&&e.apply(r,c)})(function(){const n=window.scrollY;n<e?(t.classList.add("js-site-header--visible"),t.classList.remove("js-site-header--hidden")):(t.classList.add("js-site-header--hidden"),t.classList.remove("js-site-header--visible")),e=n}))}()}(),function(){const e=document.querySelectorAll(".resume__list-item");if(!e.length)return;Array.from(e).forEach(e=>{const t=(e=>()=>{e.classList.toggle("js-expanded")})(e);["click","keypress"].forEach(n=>{e.addEventListener(n,t)})})}(),c(),(()=>{const e=document.querySelector(".handburger-menu"),t=document.querySelector(".main-nav"),n=document.querySelectorAll(".main-nav__links li");e.addEventListener("click",()=>{t.classList.toggle("js-nav-active"),Array.from(n).forEach((n,o)=>{const r=n;r.addEventListener("click",()=>{t.classList.remove("js-nav-active"),e.classList.toggle("js-toggle")}),r.style.animation=`navLinkFade 0.3s ease forwards ${o/7+.3}s`}),e.classList.toggle("js-toggle")})})(),function(){const e=document.querySelector(".site-footer .btn");let t=0;function n(){0===window.pageYOffset&&clearInterval(t),window.scroll(0,window.pageYOffset-50)}e.addEventListener("click",function(){t=setInterval(n,10)})}(),function(){const e=Array.prototype.slice.call(document.querySelectorAll(".js-slide-in"));window.addEventListener("scroll",function(e,t=20,n=!0){let o;return function(){const r=this,c=arguments,s=function(){o=null,n||e.apply(r,c)},l=n&&!o;clearTimeout(o),o=setTimeout(s,t),l&&e.apply(r,c)}}(function(){e.forEach(e=>{window.pageYOffset+window.innerHeight-e.getBoundingClientRect().height/2>e.offsetTop&&e.classList.add("active")})}))}()})}]);
//# sourceMappingURL=bundle.js.map