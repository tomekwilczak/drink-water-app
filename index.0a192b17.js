!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){},,function(e,t,n){"use strict";n.r(t);n(0);"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("service-worker.js").then((function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)}),(function(e){console.log("ServiceWorker registration failed: ",e)}))}));var o=document.querySelector(".button__add"),r=document.querySelector(".button__remove"),i=document.querySelector(".water-glass__counter"),c=document.querySelector(".info-icon--js"),l=document.querySelector(".info-text--js"),u=(new Date).toISOString().slice(0,10),a="";localStorage.getItem(u)?(a=localStorage.getItem(u),i.innerHTML=a):(localStorage.setItem(u,0),i.innerHTML="0",console.log("Ustawione 0")),o.addEventListener("click",(function(e){e.preventDefault(),a++,i.innerHTML=a,localStorage.setItem(u,a),console.log("Ustawiono ".concat(a))})),r.addEventListener("click",(function(e){a>0?(e.preventDefault(),a--,i.innerHTML=a,localStorage.setItem(u,a)):(a=0,i.innerHTML=a,e.preventDefault(),localStorage.setItem(u,a))})),c.addEventListener("mouseenter",(function(e){l.classList.toggle("info-closed")})),c.addEventListener("mouseleave",(function(e){l.classList.toggle("info-closed")}))}]);