/*! npm.im/object-fit-images */
var objectFitImages=function(){"use strict";function t(t){if(t.srcset&&!m&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function e(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=l.exec(i));)r[e[1]]=e[2];return r}function i(t,e,i){g.width=e||1,g.height=i||1,t[a].width===g.width&&t[a].height===g.height||(t[a].width=g.width,t[a].height=g.height,b.call(t,"src",g.toDataURL()))}function r(t,e){t.naturalWidth?e(t):setTimeout(r,100,t,e)}function n(n){var s=e(n),o=n[a];if(s["object-fit"]=s["object-fit"]||"fill",!o.img){if("fill"===s["object-fit"])return;if(!o.skipTest&&f&&!s["object-position"])return}if(!o.img){o.img=new Image(n.width,n.height),o.img.srcset=p.call(n,"data-ofi-srcset")||n.srcset,o.img.src=p.call(n,"data-ofi-src")||n.src,b.call(n,"data-ofi-src",n.src),b.call(n,"data-ofi-srcset",n.srcset),i(n,n.naturalWidth||n.width,n.naturalHeight||n.height),n.srcset&&(n.srcset="");try{c(n)}catch(t){window.console&&console.log("http://bit.ly/ofi-old-browser")}}t(o.img),n.style.backgroundImage="url("+(o.img.currentSrc||o.img.src).replace("(","%28").replace(")","%29")+")",n.style.backgroundPosition=s["object-position"]||"center",n.style.backgroundRepeat="no-repeat",/scale-down/.test(s["object-fit"])?r(o.img,function(){o.img.naturalWidth>n.width||o.img.naturalHeight>n.height?n.style.backgroundSize="contain":n.style.backgroundSize="auto"}):n.style.backgroundSize=s["object-fit"].replace("none","auto").replace("fill","100% 100%"),r(o.img,function(t){i(n,t.naturalWidth,t.naturalHeight)})}function c(t){var e={get:function(e){return t[a].img[e?e:"src"]},set:function(e,i){return t[a].img[i?i:"src"]=e,b.call(t,"data-ofi-"+i,e),n(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function s(){function t(t,e){return!t[a]||"src"!==e&&"srcset"!==e?t:t[a].img}d||(HTMLImageElement.prototype.getAttribute=function(e){return p.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return b.call(t(this,e),e,String(i))})}function o(t,e){var i=!w&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!h)return!1;"string"==typeof t?t=document.querySelectorAll("img"):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][a]=t[r][a]||{skipTest:e.skipTest},n(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&o(t.target,{skipTest:e.skipTest})},!0),w=!0,t="img"),e.watchMQ&&window.addEventListener("resize",o.bind(null,t,{skipTest:e.skipTest}))}var a="bfred-it:object-fit-images",l=/(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,u=new Image,g=document.createElement("canvas"),f="object-fit"in u.style,d="object-position"in u.style,h="background-size"in u.style&&window.HTMLCanvasElement,m="string"==typeof u.currentSrc,p=u.getAttribute,b=u.setAttribute,w=!1;return o.supportsObjectFit=f,o.supportsObjectPosition=d,s(),o}();