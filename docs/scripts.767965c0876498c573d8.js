!function(){"use strict";var e,t;function n(t){return void 0===this||Object.getPrototypeOf(this)!==n.prototype?new n(t):((e=this).version="3.4.0",e.tools=new g,e.isSupported()?(e.tools.extend(e.defaults,t||{}),e.defaults.container=i(e.defaults),e.store={elements:{},containers:[]},e.sequences={},e.history=[],e.uid=0,e.initialized=!1):"undefined"!=typeof console&&null!==console&&console.log("ScrollReveal is not supported in this browser."),e)}function i(t){if(t&&t.container){if("string"==typeof t.container)return window.document.documentElement.querySelector(t.container);if(e.tools.isNode(t.container))return t.container;console.log('ScrollReveal: invalid container "'+t.container+'" provided.'),console.log("ScrollReveal: falling back to default container.")}return e.defaults.container}function o(){return++e.uid}function r(t,n,i){n.container&&(n.container=i),t.config=e.tools.extendClone(t.config?t.config:e.defaults,n),t.config.axis="top"===t.config.origin||"bottom"===t.config.origin?"Y":"X"}function s(e){var t=window.getComputedStyle(e.domEl);e.styles||(e.styles={transition:{},transform:{},computed:{}},e.styles.inline=e.domEl.getAttribute("style")||"",e.styles.inline+="; visibility: visible; ",e.styles.computed.opacity=t.opacity,e.styles.computed.transition=t.transition&&"all 0s ease 0s"!==t.transition?t.transition+", ":""),e.styles.transition.instant=a(e,0),e.styles.transition.delayed=a(e,e.config.delay),e.styles.transform.initial=" -webkit-transform:",e.styles.transform.target=" -webkit-transform:",l(e),e.styles.transform.initial+="transform:",e.styles.transform.target+="transform:",l(e)}function a(e,t){var n=e.config;return"-webkit-transition: "+e.styles.computed.transition+"-webkit-transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; transition: "+e.styles.computed.transition+"transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; "}function l(e){var t,n=e.config,i=e.styles.transform;t="top"===n.origin||"left"===n.origin?/^-/.test(n.distance)?n.distance.substr(1):"-"+n.distance:n.distance,parseInt(n.distance)&&(i.initial+=" translate"+n.axis+"("+t+")",i.target+=" translate"+n.axis+"(0)"),n.scale&&(i.initial+=" scale("+n.scale+")",i.target+=" scale(1)"),n.rotate.x&&(i.initial+=" rotateX("+n.rotate.x+"deg)",i.target+=" rotateX(0)"),n.rotate.y&&(i.initial+=" rotateY("+n.rotate.y+"deg)",i.target+=" rotateY(0)"),n.rotate.z&&(i.initial+=" rotateZ("+n.rotate.z+"deg)",i.target+=" rotateZ(0)"),i.initial+="; opacity: "+n.opacity+";",i.target+="; opacity: "+e.styles.computed.opacity+";"}function c(t){var n=t.config.container;n&&-1===e.store.containers.indexOf(n)&&e.store.containers.push(t.config.container),e.store.elements[t.id]=t}function d(){if(e.isSupported()){u();for(var t=0;t<e.store.containers.length;t++)e.store.containers[t].addEventListener("scroll",f),e.store.containers[t].addEventListener("resize",f);e.initialized||(window.addEventListener("scroll",f),window.addEventListener("resize",f),e.initialized=!0)}return e}function f(){t(u)}function u(){var t,n,i,o;e.tools.forOwn(e.sequences,function(t){o=e.sequences[t],i=!1;for(var n=0;n<o.elemIds.length;n++)p(e.store.elements[o.elemIds[n]])&&!i&&(i=!0);o.active=i}),e.tools.forOwn(e.store.elements,function(i){t=function(t){var n=t.config.useDelay;return"always"===n||"onload"===n&&!e.initialized||"once"===n&&!t.seen}(n=e.store.elements[i]),function(t){if(t.sequence){var n=e.sequences[t.sequence.id];return n.active&&!n.blocked&&!t.revealing&&!t.disabled}return p(t)&&!t.revealing&&!t.disabled}(n)?(n.config.beforeReveal(n.domEl),n.domEl.setAttribute("style",t?n.styles.inline+n.styles.transform.target+n.styles.transition.delayed:n.styles.inline+n.styles.transform.target+n.styles.transition.instant),y("reveal",n,t),n.revealing=!0,n.seen=!0,n.sequence&&function(t,n){var i=0,o=0,r=e.sequences[t.sequence.id];r.blocked=!0,n&&"onload"===t.config.useDelay&&(o=t.config.delay),t.sequence.timer&&(i=Math.abs(t.sequence.timer.started-new Date),window.clearTimeout(t.sequence.timer)),t.sequence.timer={started:new Date},t.sequence.timer.clock=window.setTimeout(function(){r.blocked=!1,t.sequence.timer=null,f()},Math.abs(r.interval)+o-i)}(n,t)):function(t){return t.sequence?!e.sequences[t.sequence.id].active&&t.config.reset&&t.revealing&&!t.disabled:!p(t)&&t.config.reset&&t.revealing&&!t.disabled}(n)&&(n.config.beforeReset(n.domEl),n.domEl.setAttribute("style",n.styles.inline+n.styles.transform.initial+n.styles.transition.instant),y("reset",n),n.revealing=!1)})}function y(e,t,n){var i=0,o=0,r="after";switch(e){case"reveal":o=t.config.duration,n&&(o+=t.config.delay),r+="Reveal";break;case"reset":o=t.config.duration,r+="Reset"}t.timer&&(i=Math.abs(t.timer.started-new Date),window.clearTimeout(t.timer.clock)),t.timer={started:new Date},t.timer.clock=window.setTimeout(function(){t.config[r](t.domEl),t.timer=null},o-i)}function m(e){var t=0,n=0,i=e.offsetHeight,o=e.offsetWidth;do{isNaN(e.offsetTop)||(t+=e.offsetTop),isNaN(e.offsetLeft)||(n+=e.offsetLeft),e=e.offsetParent}while(e);return{top:t,left:n,height:i,width:o}}function p(e){var t=m(e.domEl),n=function(e){return{width:e.clientWidth,height:e.clientHeight}}(e.config.container),i=function(e){if(e&&e!==window.document.documentElement){var t=m(e);return{x:e.scrollLeft+t.left,y:e.scrollTop+t.top}}return{x:window.pageXOffset,y:window.pageYOffset}}(e.config.container),o=e.config.viewFactor,r=t.height,s=t.width,a=t.top,l=t.left;return a+r*o<i.y-e.config.viewOffset.bottom+n.height&&a+r-r*o>i.y+e.config.viewOffset.top&&l+s*o<i.x-e.config.viewOffset.right+n.width&&l+s-s*o>i.x+e.config.viewOffset.left||"fixed"===window.getComputedStyle(e.domEl).position}function g(){}n.prototype.defaults={origin:"bottom",distance:"20px",duration:500,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:.9,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",container:window.document.documentElement,mobile:!0,reset:!1,useDelay:"always",viewFactor:.2,viewOffset:{top:0,right:0,bottom:0,left:0},beforeReveal:function(e){},beforeReset:function(e){},afterReveal:function(e){},afterReset:function(e){}},n.prototype.isSupported=function(){var e=document.documentElement.style;return"WebkitTransition"in e&&"WebkitTransform"in e||"transition"in e&&"transform"in e},n.prototype.reveal=function(t,n,a,l){var f,u,y,m,p,g;if(void 0!==n&&"number"==typeof n?(a=n,n={}):void 0!==n&&null!==n||(n={}),!(u=function(t,n){return"string"==typeof t?Array.prototype.slice.call(n.querySelectorAll(t)):e.tools.isNode(t)?[t]:e.tools.isNodeList(t)?Array.prototype.slice.call(t):Array.isArray(t)?t.filter(e.tools.isNode):[]}(t,f=i(n))).length)return console.log('ScrollReveal: reveal on "'+t+'" failed, no elements found.'),e;a&&"number"==typeof a&&(g=o(),p=e.sequences[g]={id:g,interval:a,elemIds:[],active:!1});for(var w=0;w<u.length;w++)(m=u[w].getAttribute("data-sr-id"))?y=e.store.elements[m]:(y={id:o(),domEl:u[w],seen:!1,revealing:!1}).domEl.setAttribute("data-sr-id",y.id),p&&(y.sequence={id:p.id,index:p.elemIds.length},p.elemIds.push(y.id)),r(y,n,f),s(y),c(y),e.tools.isMobile()&&!y.config.mobile||!e.isSupported()?(y.domEl.setAttribute("style",y.styles.inline),y.disabled=!0):y.revealing||y.domEl.setAttribute("style",y.styles.inline+y.styles.transform.initial);return!l&&e.isSupported()&&(function(t,n,i){e.history.push({target:t,config:n,interval:i})}(t,n,a),e.initTimeout&&window.clearTimeout(e.initTimeout),e.initTimeout=window.setTimeout(d,0)),e},n.prototype.sync=function(){if(e.history.length&&e.isSupported()){for(var t=0;t<e.history.length;t++){var n=e.history[t];e.reveal(n.target,n.config,n.interval,!0)}d()}else console.log("ScrollReveal: sync failed, no reveals found.");return e},g.prototype.isObject=function(e){return null!==e&&"object"==typeof e&&e.constructor===Object},g.prototype.isNode=function(e){return"object"==typeof window.Node?e instanceof window.Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},g.prototype.isNodeList=function(e){var t=Object.prototype.toString.call(e);return"object"==typeof window.NodeList?e instanceof window.NodeList:e&&"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(t)&&"number"==typeof e.length&&(0===e.length||this.isNode(e[0]))},g.prototype.forOwn=function(e,t){if(!this.isObject(e))throw new TypeError('Expected "object", but received "'+typeof e+'".');for(var n in e)e.hasOwnProperty(n)&&t(n)},g.prototype.extend=function(e,t){return this.forOwn(t,(function(n){this.isObject(t[n])?(e[n]&&this.isObject(e[n])||(e[n]={}),this.extend(e[n],t[n])):e[n]=t[n]}).bind(this)),e},g.prototype.extendClone=function(e,t){return this.extend(this.extend({},e),t)},g.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},t=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return n}):"undefined"!=typeof module&&module.exports?module.exports=n:window.ScrollReveal=n}();