/*!
 * Javascript Cookie v1.5.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */

!function(e){var n;if("function"==typeof define&&define.amd)define(["jquery"],e);else if("object"==typeof exports){try{n=require("jquery")}catch(o){}module.exports=e(n)}else{var r=window.Cookies,t=window.Cookies=e(window.jQuery);t.noConflict=function(){return window.Cookies=r,t}}}(function(e){function n(e){return f.raw?e:encodeURIComponent(e)}function o(e){return f.raw?e:decodeURIComponent(e)}function r(e){return n(f.json?JSON.stringify(e):String(e))}function t(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(s," ")),f.json?JSON.parse(e):e}catch(n){}}function i(e,n){var o=f.raw?e:t(e);return c(n)?n(o):o}function u(){for(var e,n,o=0,r={};o<arguments.length;o++){n=arguments[o];for(e in n)r[e]=n[e]}return r}function c(e){return"[object Function]"===Object.prototype.toString.call(e)}var s=/\+/g,f=function(e,t,s){if(arguments.length>1&&!c(t)){if(s=u(f.defaults,s),"number"==typeof s.expires){var a=s.expires,d=s.expires=new Date;d.setMilliseconds(d.getMilliseconds()+864e5*a)}return document.cookie=[n(e),"=",r(t),s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}for(var p=e?void 0:{},l=document.cookie?document.cookie.split("; "):[],m=0,g=l.length;g>m;m++){var v=l[m].split("="),w=o(v.shift()),j=v.join("=");if(e===w){p=i(j,t);break}e||void 0===(j=i(j))||(p[w]=j)}return p};return f.get=f.set=f,f.defaults={},f.remove=function(e,n){return f(e,"",u(n,{expires:-1})),!f(e)},e&&(e.cookie=f,e.removeCookie=f.remove),f});
