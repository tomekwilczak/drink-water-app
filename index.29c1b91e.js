!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){},,function(e,t,n){"use strict";n.r(t);n(0);"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("service-worker.js").then((function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)}),(function(e){console.log("ServiceWorker registration failed: ",e)}))}));var r=document.querySelector(".button-add--js"),o=document.querySelector(".button-remove--js"),i=document.querySelector(".glass__counter--js"),c=document.querySelector(".info-icon--js"),u=document.querySelector(".info-text--js"),l=(new Date).toLocaleString().slice(0,10),s="",a=localStorage.getItem(l);a?(s=a,i.innerHTML=s):localStorage.setItem(l,0),r.addEventListener("click",(function(e){e.preventDefault(),s++,i.innerHTML=s,localStorage.setItem(l,s)})),o.addEventListener("click",(function(e){s>0&&(e.preventDefault(),s--,i.innerHTML=s,localStorage.setItem(l,s))})),c.addEventListener("mouseenter",(function(e){u.classList.toggle("info-closed")})),c.addEventListener("mouseleave",(function(e){u.classList.toggle("info-closed")}))}]);