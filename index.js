!function(t){"function"==typeof define&&define.amd?define(t):t()}(function(){"use strict";var t=function(t,e,i,n,o,s,r,a,l,h){"boolean"!=typeof r&&(l=a,a=r,r=!1);var c,u="function"==typeof i?i.options:i;if(t&&t.render&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0,o&&(u.functional=!0)),n&&(u._scopeId=n),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):e&&(c=r?function(){e.call(this,h(this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),c)if(u.functional){var d=u.render;u.render=function(t,e){return c.call(e),d(t,e)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,c):[c]}return i},e=t({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("k-field",t._b({staticClass:"k-files-field"},"k-field",t.$props,!1),[t.more?i("k-button",{attrs:{slot:"options",icon:"add"},on:{click:t.open},slot:"options"},[t._v("\n        "+t._s(t.$t("select"))+"\n    ")]):t._e(),t._v(" "),t.selected.length?[i("k-draggable",{attrs:{element:t.elements.list,list:t.selected,"data-size":t.size,handle:!0},on:{end:t.onInput}},t._l(t.selected,function(e,n){return i(t.elements.item,{key:e.filename,tag:"component",attrs:{sortable:t.selected.length>1,text:e.text,link:e.link,info:e.info,image:e.image,icon:e.icon,id:e.id,resizable:e.resizable},on:{openclipdialog:t.openClipDialog}},[i("k-button",{attrs:{slot:"options",tooltip:t.$t("remove"),icon:"remove"},on:{click:function(e){return t.remove(n)}},slot:"options"})],1)}),1)]:i("k-empty",{attrs:{layout:t.layout,icon:"image"},on:{click:t.open}},[t._v("\n        "+t._s(t.empty||t.$t("field.files.empty"))+"\n    ")]),t._v(" "),i("k-files-dialog",{ref:"selector",on:{submit:t.select}}),t._v(" "),i("k-clip-dialog",{ref:"clip",attrs:{size:"large",image:t.clip_image,minwidth:t.minwidth,minheight:t.minheight},on:{submit:t.clippedArea}})],2)},staticRenderFns:[]},void 0,{extends:"k-files-field",mounted:function(){console.log(this.$props)},props:{minwidth:{type:Number,default:null},minheight:{type:Number,default:null}},data:function(){return{clip_image:{}}},computed:{elements:function(){var t={cards:{list:"k-cards",item:"k-clip-card"},list:{list:"k-list",item:"k-list-item"}};return t[this.layout]?t[this.layout]:t.list}},methods:{openClipDialog:function(t){this.clip_image=this.value.find(function(e){return e.id===t}),this.$refs.clip.open()},clippedArea:function(t){this.clip_image.clip=t.clip,this.onInput(),this.$emit("submit")}}},void 0,!1,void 0,void 0,void 0),i=t({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("figure",t._g({staticClass:"k-card"},t.$listeners),[t.sortable?i("k-sort-handle",{staticClass:"native"}):t._e(),t._v(" "),t.resizable?i("k-clip-handle",{on:{clicked:t.openClipDialog}}):t._e(),t._v(" "),i(t.wrapper,{tag:"component",attrs:{to:t.link,target:t.target}},[t.image&&t.image.url?i("k-image",{staticClass:"k-card-image",attrs:{src:t.image.url,ratio:t.image.ratio||"3/2",back:t.image.back||"black",cover:t.image.cover}}):i("span",{staticClass:"k-card-icon",style:"padding-bottom:"+t.ratioPadding},[i("k-icon",t._b({},"k-icon",t.icon,!1))],1),t._v(" "),i("figcaption",{staticClass:"k-card-content"},[i("span",{staticClass:"k-card-text",attrs:{"data-noinfo":!t.info}},[t._v(t._s(t.text))]),t._v(" "),t.info?i("span",{staticClass:"k-card-info",domProps:{innerHTML:t._s(t.info)}}):t._e()])],1),t._v(" "),i("nav",{staticClass:"k-card-options"},[t.flag?i("k-button",t._b({staticClass:"k-card-options-button",on:{click:t.flag.click}},"k-button",t.flag,!1)):t._e(),t._v(" "),t._t("options",[t.options?i("k-button",{staticClass:"k-card-options-button",attrs:{tooltip:t.$t("options"),icon:"dots"},on:{click:function(e){return e.stopPropagation(),t.$refs.dropdown.toggle()}}}):t._e(),t._v(" "),i("k-dropdown-content",{ref:"dropdown",staticClass:"k-card-options-dropdown",attrs:{options:t.options,align:"right"},on:{action:function(e){return t.$emit("action",e)}}})])],2)],1)},staticRenderFns:[]},void 0,{extends:"k-card",props:{id:String,resizable:Boolean},methods:{openClipDialog:function(){this.$emit("openclipdialog",this.id)}}},"data-v-20c0b1c3",!1,void 0,void 0,void 0),n=t({render:function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"k-sort-handle clip",attrs:{"aria-hidden":"true"}},[e("img",{attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAfxJREFUeNrs3dFNwlAUgGExvusIbKAPvKMT6Aa6gW4gTqAbiBPoBuJ7E3WDjsAGeGquCSEEKwi9he9PTirFBjh/7zm9NFc7k8lkD82xLwUEEAACCAABBIAAAkAAASCAABBAAAggAOvlYJMv1uv1BrG5ndr1VhTFqREAAggAAQSAAAJAAAFo10w4ZrhHsTmp8avdmcdHcWxuM+EyZudlqwSk5L8ucdzxksetk7uIgRKkB4AATbge0bRGsenUaNZVbZ3+Ovoz4qbhHDykXtReASswTvIaI06KsRKkB4AAAkAAASCAABBAAAggIC/SXTcCmkh8xEv8WMb2goDNJr+61TmKOI84jHiOfaOILgHrT/5FSv7sd/X9iI94/oaA9SV/UJ3t6ayfR7X/fhtGw35mif+p97c1D1k4GqpRVN1wibgioB7DVO//wvRoOJkR+TOKHnOVkJuAVS41q9HwHomu7vGWc0RmKWEbJ2LXC3pHdhJ2cSb8SAAIIADfHGT2foZp9ktAExRFMVSCsNMlKAe6NVftfMSIHbddQD8+bG5/P/8yxW+c/Ue/UoL0AAKwQ004x+v82RUyT+l9/tqEWycgrb8tc8r+nBUy5SZX7ShBegABIIAAEEAACCAAG6bjv6kaAQSAAAJAAAEggAAQQAAIIAAEEAACCAABW82XAAMAAfVlmZsSR/gAAAAASUVORK5CYII=",alt:"Clip"},on:{click:this.open}})])},staticRenderFns:[]},void 0,{extends:"k-sort-handle",methods:{open:function(){this.$emit("clicked")}}},"data-v-6eacbe84",!1,void 0,void 0,void 0);function o(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var s,r=(function(t,e){t.exports=function(){(function(){for(var t=0,e=["ms","moz","webkit","o"],i=0;i<e.length&&!window.requestAnimationFrame;++i)window.requestAnimationFrame=window[e[i]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[i]+"CancelAnimationFrame"]||window[e[i]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,i){var n=(new Date).getTime(),o=Math.max(0,16-(n-t)),s=window.setTimeout(function(){e(n+o)},o);return t=n+o,s}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})})(),function(){if("function"==typeof window.CustomEvent)return!1;function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var i=document.createEvent("CustomEvent");return i.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),i}t.prototype=window.Event.prototype,window.CustomEvent=t}(),function(t){try{return new CustomEvent("test"),!1}catch(t){}function e(e,i){i=i||{bubbles:!1,cancelable:!1};var n=document.createEvent("MouseEvent");return n.initMouseEvent(e,i.bubbles,i.cancelable,t,0,0,0,0,0,!1,!1,!1,!1,0,null),n}e.prototype=Event.prototype,t.MouseEvent=e}(window);var t=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},e=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),i=function t(e,i,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,i);if(void 0===o){var s=Object.getPrototypeOf(e);return null===s?void 0:t(s,i,n)}if("value"in o)return o.value;var r=o.get;return void 0!==r?r.call(n):void 0},n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},o=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var i=[],n=!0,o=!1,s=void 0;try{for(var r,a=t[Symbol.iterator]();!(n=(r=a.next()).done)&&(i.push(r.value),!e||i.length!==e);n=!0);}catch(t){o=!0,s=t}finally{try{!n&&a.return&&a.return()}finally{if(o)throw s}}return i}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},s=function e(i,n,o,s){t(this,e);var r=this;function a(t){t.stopPropagation(),document.removeEventListener("mouseup",a),document.removeEventListener("mousemove",l),r.eventBus.dispatchEvent(new CustomEvent("handleend",{detail:{handle:r}}))}function l(t){t.stopPropagation(),r.eventBus.dispatchEvent(new CustomEvent("handlemove",{detail:{mouseX:t.clientX,mouseY:t.clientY}}))}this.position=i,this.constraints=n,this.cursor=o,this.eventBus=s,this.el=document.createElement("div"),this.el.className="croppr-handle",this.el.style.cursor=o,this.el.addEventListener("mousedown",function(t){t.stopPropagation(),document.addEventListener("mouseup",a),document.addEventListener("mousemove",l),r.eventBus.dispatchEvent(new CustomEvent("handlestart",{detail:{handle:r}}))})},r=function(){function i(e,n,o,s){t(this,i),this.x1=e,this.y1=n,this.x2=o,this.y2=s}return e(i,[{key:"set",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return this.x1=null==t?this.x1:t,this.y1=null==e?this.y1:e,this.x2=null==i?this.x2:i,this.y2=null==n?this.y2:n,this}},{key:"width",value:function(){return Math.abs(this.x2-this.x1)}},{key:"height",value:function(){return Math.abs(this.y2-this.y1)}},{key:"resize",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0,0],n=this.x1+this.width()*i[0],o=this.y1+this.height()*i[1];return this.x1=n-t*i[0],this.y1=o-e*i[1],this.x2=this.x1+t,this.y2=this.y1+e,this}},{key:"scale",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0],i=this.width()*t,n=this.height()*t;return this.resize(i,n,e),this}},{key:"move",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=this.width(),n=this.height();return t=null===t?this.x1:t,e=null===e?this.y1:e,this.x1=t,this.y1=e,this.x2=t+i,this.y2=e+n,this}},{key:"getRelativePoint",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[0,0],e=this.width()*t[0],i=this.height()*t[1];return[e,i]}},{key:"getAbsolutePoint",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[0,0],e=this.x1+this.width()*t[0],i=this.y1+this.height()*t[1];return[e,i]}},{key:"constrainToRatio",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"height";if(null!==t){switch(this.width(),this.height(),i){case"height":this.resize(this.width(),this.width()*t,e);break;case"width":this.resize(1*this.height()/t,this.height(),e);break;default:this.resize(this.width(),this.width()*t,e)}return this}}},{key:"constrainToBoundary",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0,0],n=this.getAbsolutePoint(i),s=o(n,2),r=s[0],a=s[1],l=r,h=a,c=t-r,u=e-a,d=-2*i[0]+1,p=-2*i[1]+1,v=null,m=null;switch(d){case-1:v=l;break;case 0:v=2*Math.min(l,c);break;case 1:v=c}switch(p){case-1:m=h;break;case 0:m=2*Math.min(h,u);break;case 1:m=u}if(this.width()>v){var f=v/this.width();this.scale(f,i)}if(this.height()>m){var g=m/this.height();this.scale(g,i)}return this}},{key:"constrainToSize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[0,0],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;if(s&&(s>1?(t=1*e/s,n*=s):s<1&&(e=t*s,i=1*n/s)),t&&this.width()>t){var r=t,a=null===s?this.height():e;this.resize(r,a,o)}if(e&&this.height()>e){var l=null===s?this.width():t,h=e;this.resize(l,h,o)}if(i&&this.width()<i){var c=i,u=null===s?this.height():n;this.resize(c,u,o)}if(n&&this.height()<n){var d=null===s?this.width():i,p=n;this.resize(d,p,o)}return this}}]),i}();function a(t){t.preventDefault();var e=t.changedTouches[0];e.target.dispatchEvent(new MouseEvent({touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup"}[t.type],{bubbles:!0,cancelable:!0,view:window,clientX:e.clientX,clientY:e.clientY,screenX:e.screenX,screenY:e.screenY}))}var l=[{position:[0,0],constraints:[1,0,0,1],cursor:"nw-resize"},{position:[.5,0],constraints:[1,0,0,0],cursor:"n-resize"},{position:[1,0],constraints:[1,1,0,0],cursor:"ne-resize"},{position:[1,.5],constraints:[0,1,0,0],cursor:"e-resize"},{position:[1,1],constraints:[0,1,1,0],cursor:"se-resize"},{position:[.5,1],constraints:[0,0,1,0],cursor:"s-resize"},{position:[0,1],constraints:[0,0,1,1],cursor:"sw-resize"},{position:[0,.5],constraints:[0,0,0,1],cursor:"w-resize"}];function h(t,e){return Number(Math.round(t+"e"+e)+"e-"+e)}return function(o){function s(e,i){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(this,s),n(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,e,i,o))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(s,o),e(s,[{key:"getValue",value:function(t){return i(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"getValue",this).call(this,t)}},{key:"setImage",value:function(t){return i(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"setImage",this).call(this,t)}},{key:"destroy",value:function(){return i(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"destroy",this).call(this)}},{key:"moveTo",value:function(t,e){return this.box.move(t,e),this.redraw(),null!==this.options.onCropEnd&&this.options.onCropEnd(this.getValue()),this}},{key:"resizeTo",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[.5,.5];return this.box.resize(t,e,i),this.redraw(),null!==this.options.onCropEnd&&this.options.onCropEnd(this.getValue()),this}},{key:"scaleBy",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[.5,.5];return this.box.scale(t,e),this.redraw(),null!==this.options.onCropEnd&&this.options.onCropEnd(this.getValue()),this}},{key:"reset",value:function(){return this.box=this.initializeBox(this.options),this.redraw(),null!==this.options.onCropEnd&&this.options.onCropEnd(this.getValue()),this}}]),s}(function(){function i(e,n){var o=this,s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t(this,i),this.options=i.parseOptions(n||{}),!e.nodeName&&null==(e=document.querySelector(e)))throw"Unable to find element.";if(!e.getAttribute("src"))throw"Image src not provided.";this._initialized=!1,this._restore={parent:e.parentNode,element:e},s||(0===e.width||0===e.height?e.onload=function(){o.initialize(e)}:this.initialize(e))}return e(i,[{key:"initialize",value:function(t){this.createDOM(t),this.options.convertToPixels(this.cropperEl),this.attachHandlerEvents(),this.attachRegionEvents(),this.attachOverlayEvents(),this.box=this.initializeBox(this.options),this.redraw(),this._initialized=!0,null!==this.options.onInitialize&&this.options.onInitialize(this)}},{key:"createDOM",value:function(t){var e;this.containerEl=document.createElement("div"),this.containerEl.className="croppr-container",this.eventBus=this.containerEl,(e=this.containerEl).addEventListener("touchstart",a),e.addEventListener("touchend",a),e.addEventListener("touchmove",a),this.cropperEl=document.createElement("div"),this.cropperEl.className="croppr",this.imageEl=document.createElement("img"),this.imageEl.setAttribute("src",t.getAttribute("src")),this.imageEl.setAttribute("alt",t.getAttribute("alt")),this.imageEl.className="croppr-image",this.imageClippedEl=this.imageEl.cloneNode(),this.imageClippedEl.className="croppr-imageClipped",this.regionEl=document.createElement("div"),this.regionEl.className="croppr-region",this.overlayEl=document.createElement("div"),this.overlayEl.className="croppr-overlay";var i=document.createElement("div");i.className="croppr-handleContainer",this.handles=[];for(var n=0;n<l.length;n++){var o=new s(l[n].position,l[n].constraints,l[n].cursor,this.eventBus);this.handles.push(o),i.appendChild(o.el)}this.cropperEl.appendChild(this.imageEl),this.cropperEl.appendChild(this.imageClippedEl),this.cropperEl.appendChild(this.regionEl),this.cropperEl.appendChild(this.overlayEl),this.cropperEl.appendChild(i),this.containerEl.appendChild(this.cropperEl),t.parentElement.replaceChild(this.containerEl,t)}},{key:"setImage",value:function(t){var e=this;return this.imageEl.onload=function(){e.box=e.initializeBox(e.options),e.redraw()},this.imageEl.src=t,this.imageClippedEl.src=t,this}},{key:"destroy",value:function(){this._restore.parent.replaceChild(this._restore.element,this.containerEl)}},{key:"initializeBox",value:function(t){var e=t.startSize.width,i=t.startSize.height,n=new r(0,0,e,i);n.constrainToRatio(t.aspectRatio,[.5,.5]);var o=t.minSize,s=t.maxSize;n.constrainToSize(s.width,s.height,o.width,o.height,[.5,.5],t.aspectRatio);var a=this.cropperEl.offsetWidth,l=this.cropperEl.offsetHeight;n.constrainToBoundary(a,l,[.5,.5]);var h=this.cropperEl.offsetWidth/2-n.width()/2,c=this.cropperEl.offsetHeight/2-n.height()/2;return n.move(h,c),n}},{key:"redraw",value:function(){var t=this,e=Math.round(this.box.width()),i=Math.round(this.box.height()),n=Math.round(this.box.x1),o=Math.round(this.box.y1),s=Math.round(this.box.x2),r=Math.round(this.box.y2);window.requestAnimationFrame(function(){t.regionEl.style.transform="translate("+n+"px, "+o+"px)",t.regionEl.style.width=e+"px",t.regionEl.style.height=i+"px",t.imageClippedEl.style.clip="rect("+o+"px, "+s+"px, "+r+"px, "+n+"px)";for(var a=t.box.getAbsolutePoint([.5,.5]),l=a[0]-t.cropperEl.offsetWidth/2>>31,h=a[1]-t.cropperEl.offsetHeight/2>>31,c=(l^h)+h+h+4,u=-2*c+8,d=0;d<t.handles.length;d++){var p=t.handles[d],v=p.el.offsetWidth,m=p.el.offsetHeight,f=n+e*p.position[0]-v/2,g=o+i*p.position[1]-m/2;p.el.style.transform="translate("+Math.round(f)+"px, "+Math.round(g)+"px)",p.el.style.zIndex=u==d?5:4}})}},{key:"attachHandlerEvents",value:function(){var t=this.eventBus;t.addEventListener("handlestart",this.onHandleMoveStart.bind(this)),t.addEventListener("handlemove",this.onHandleMoveMoving.bind(this)),t.addEventListener("handleend",this.onHandleMoveEnd.bind(this))}},{key:"attachRegionEvents",value:function(){var t=this.eventBus;function e(e){e.stopPropagation(),t.dispatchEvent(new CustomEvent("regionmove",{detail:{mouseX:e.clientX,mouseY:e.clientY}}))}function i(n){n.stopPropagation(),document.removeEventListener("mouseup",i),document.removeEventListener("mousemove",e),t.dispatchEvent(new CustomEvent("regionend",{detail:{mouseX:n.clientX,mouseY:n.clientY}}))}this.regionEl.addEventListener("mousedown",function(n){n.stopPropagation(),document.addEventListener("mouseup",i),document.addEventListener("mousemove",e),t.dispatchEvent(new CustomEvent("regionstart",{detail:{mouseX:n.clientX,mouseY:n.clientY}}))}),t.addEventListener("regionstart",this.onRegionMoveStart.bind(this)),t.addEventListener("regionmove",this.onRegionMoveMoving.bind(this)),t.addEventListener("regionend",this.onRegionMoveEnd.bind(this))}},{key:"attachOverlayEvents",value:function(){var t=4,e=this,i=null;function n(t){t.stopPropagation(),e.eventBus.dispatchEvent(new CustomEvent("handlemove",{detail:{mouseX:t.clientX,mouseY:t.clientY}}))}function o(t){t.stopPropagation(),document.removeEventListener("mouseup",o),document.removeEventListener("mousemove",n),1!==e.box.width()||1!==e.box.height()?e.eventBus.dispatchEvent(new CustomEvent("handleend",{detail:{mouseX:t.clientX,mouseY:t.clientY}})):e.box=i}this.overlayEl.addEventListener("mousedown",function(s){s.stopPropagation(),document.addEventListener("mouseup",o),document.addEventListener("mousemove",n);var a=e.cropperEl.getBoundingClientRect(),l=s.clientX-a.left,h=s.clientY-a.top;i=e.box,e.box=new r(l,h,l+1,h+1),e.eventBus.dispatchEvent(new CustomEvent("handlestart",{detail:{handle:e.handles[t]}}))})}},{key:"onHandleMoveStart",value:function(t){var e=t.detail.handle,i=[1-e.position[0],1-e.position[1]],n=this.box.getAbsolutePoint(i),s=o(n,2),r=s[0],a=s[1];this.activeHandle={handle:e,originPoint:i,originX:r,originY:a},null!==this.options.onCropStart&&this.options.onCropStart(this.getValue())}},{key:"onHandleMoveMoving",value:function(t){var e=t.detail,i=e.mouseX,n=e.mouseY,o=this.cropperEl.getBoundingClientRect();i-=o.left,n-=o.top,i<0?i=0:i>o.width&&(i=o.width),n<0?n=0:n>o.height&&(n=o.height);var s=this.activeHandle.originPoint.slice(),a=this.activeHandle.originX,l=this.activeHandle.originY,h=this.activeHandle.handle,c=1===h.constraints[0],u=1===h.constraints[1],d=1===h.constraints[2],p=1===h.constraints[3],v=(p||u)&&(c||d),m=p||u?a:this.box.x1,f=p||u?a:this.box.x2,g=c||d?l:this.box.y1,w=c||d?l:this.box.y2;m=p?i:m,f=u?i:f,g=c?n:g,w=d?n:w;var b=!1,E=!1;if((p||u)&&(b=p?i>a:i<a),(c||d)&&(E=c?n>l:n<l),b){var y=m;m=f,f=y,s[0]=1-s[0]}if(E){var A=g;g=w,w=A,s[1]=1-s[1]}var x=new r(m,g,f,w);if(this.options.aspectRatio){var k=this.options.aspectRatio,C=!1;v?C=n>x.y1+k*x.width()||n<x.y2-k*x.width():(c||d)&&(C=!0);var _=C?"width":"height";x.constrainToRatio(k,s,_)}var z=this.options.minSize,S=this.options.maxSize;x.constrainToSize(S.width,S.height,z.width,z.height,s,this.options.aspectRatio);var M=this.cropperEl.offsetWidth,R=this.cropperEl.offsetHeight;x.constrainToBoundary(M,R,s),this.box=x,this.redraw(),null!==this.options.onCropMove&&this.options.onCropMove(this.getValue())}},{key:"onHandleMoveEnd",value:function(t){null!==this.options.onCropEnd&&this.options.onCropEnd(this.getValue())}},{key:"onRegionMoveStart",value:function(t){var e=t.detail,i=e.mouseX,n=e.mouseY,o=this.cropperEl.getBoundingClientRect();i-=o.left,n-=o.top,this.currentMove={offsetX:i-this.box.x1,offsetY:n-this.box.y1},null!==this.options.onCropStart&&this.options.onCropStart(this.getValue())}},{key:"onRegionMoveMoving",value:function(t){var e=t.detail,i=e.mouseX,n=e.mouseY,o=this.currentMove,s=o.offsetX,r=o.offsetY,a=this.cropperEl.getBoundingClientRect();i-=a.left,n-=a.top,this.box.move(i-s,n-r),this.box.x1<0&&this.box.move(0,null),this.box.x2>a.width&&this.box.move(a.width-this.box.width(),null),this.box.y1<0&&this.box.move(null,0),this.box.y2>a.height&&this.box.move(null,a.height-this.box.height()),this.redraw(),null!==this.options.onCropMove&&this.options.onCropMove(this.getValue())}},{key:"onRegionMoveEnd",value:function(t){null!==this.options.onCropEnd&&this.options.onCropEnd(this.getValue())}},{key:"getValue",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null===t&&(t=this.options.returnMode),"real"==t){var e=this.imageEl.naturalWidth,i=this.imageEl.naturalHeight,n=this.imageEl.getBoundingClientRect(),o=n.width,s=n.height,r=e/o,a=i/s;return{x:Math.round(this.box.x1*r),y:Math.round(this.box.y1*a),width:Math.round(this.box.width()*r),height:Math.round(this.box.height()*a)}}if("ratio"==t){var l=this.imageEl.getBoundingClientRect(),c=l.width,u=l.height;return{x:h(this.box.x1/c,3),y:h(this.box.y1/u,3),width:h(this.box.width()/c,3),height:h(this.box.height()/u,3)}}if("raw"==t)return{x:Math.round(this.box.x1),y:Math.round(this.box.y1),width:Math.round(this.box.width()),height:Math.round(this.box.height())}}}],[{key:"parseOptions",value:function(t){var e={aspectRatio:null,maxSize:{width:null,height:null},minSize:{width:null,height:null},startSize:{width:100,height:100,unit:"%"},returnMode:"real",onInitialize:null,onCropStart:null,onCropMove:null,onCropEnd:null},i=null;void 0!==t.aspectRatio&&("number"==typeof t.aspectRatio?i=t.aspectRatio:t.aspectRatio instanceof Array&&(i=t.aspectRatio[1]/t.aspectRatio[0]));var n=null;void 0!==t.maxSize&&null!==t.maxSize&&(n={width:t.maxSize[0]||null,height:t.maxSize[1]||null,unit:t.maxSize[2]||"px"});var o=null;void 0!==t.minSize&&null!==t.minSize&&(o={width:t.minSize[0]||null,height:t.minSize[1]||null,unit:t.minSize[2]||"px"});var s=null;void 0!==t.startSize&&null!==t.startSize&&(s={width:t.startSize[0]||null,height:t.startSize[1]||null,unit:t.startSize[2]||"%"});var r=null;"function"==typeof t.onInitialize&&(r=t.onInitialize);var a=null;"function"==typeof t.onCropStart&&(a=t.onCropStart);var l=null;"function"==typeof t.onCropEnd&&(l=t.onCropEnd);var h=null;"function"==typeof t.onUpdate&&(console.warn("Croppr.js: `onUpdate` is deprecated and will be removed in the next major release. Please use `onCropMove` or `onCropEnd` instead."),h=t.onUpdate),"function"==typeof t.onCropMove&&(h=t.onCropMove);var c=null;if(void 0!==t.returnMode){var u=t.returnMode.toLowerCase();if(-1===["real","ratio","raw"].indexOf(u))throw"Invalid return mode.";c=u}var d=function(t,e){return null!==t?t:e};return{aspectRatio:d(i,e.aspectRatio),maxSize:d(n,e.maxSize),minSize:d(o,e.minSize),startSize:d(s,e.startSize),returnMode:d(c,e.returnMode),onInitialize:d(r,e.onInitialize),onCropStart:d(a,e.onCropStart),onCropMove:d(h,e.onCropMove),onCropEnd:d(l,e.onCropEnd),convertToPixels:function(t){for(var e=t.offsetWidth,i=t.offsetHeight,n=["maxSize","minSize","startSize"],o=0;o<n.length;o++){var s=n[o];null!==this[s]&&("%"==this[s].unit&&(null!==this[s].width&&(this[s].width=this[s].width/100*e),null!==this[s].height&&(this[s].height=this[s].height/100*i)),delete this[s].unit)}}}}}]),i}())}()}(s={exports:{}},s.exports),s.exports),a=function(){function t(e){var i=e.el,n=e.saved,o=e.min_width,s=e.min_height;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cropInstance=null,this.el=i,this.saved=n,this.min_width=o,this.min_height=s,this.init()}var e,i,n;return e=t,(i=[{key:"init",value:function(){var t=this,e={returnMode:"raw",onInitialize:function(e){document.getElementsByClassName("croppr-image")[0].addEventListener("load",function(e){t.image=e.target,t.factor_w=e.target.naturalWidth/e.target.clientWidth,t.factor_h=e.target.naturalHeight/e.target.clientHeight,t.setStartPosition()})}};this.min_width&&this.min_height&&(e.aspectRatio=this.min_height/this.min_width,e.minSize=[this.min_width,this.min_height,"px"]),this.cropInstance=new r(this.el,e)}},{key:"getCropArea",value:function(){var t=this.cropInstance.getValue();return{width:Math.floor(t.width*this.factor_w),height:Math.floor(t.height*this.factor_h),left:Math.floor(t.x*this.factor_w),top:Math.floor(t.y*this.factor_h)}}},{key:"setStartPosition",value:function(){var t={width:this.min_width/this.factor_w,height:this.min_height/this.factor_h};if(this.cropInstance.options.minSize=t,this.saved){var e={width:Math.floor(this.saved.width/this.factor_w),height:Math.floor(this.saved.height/this.factor_h),left:Math.floor(this.saved.left/this.factor_w),top:Math.floor(this.saved.top/this.factor_h)};this.cropInstance.resizeTo(e.width,e.height),this.cropInstance.moveTo(e.left,e.top)}else this.cropInstance.resizeTo(t.width,t.height),this.cropInstance.moveTo(0,0)}}])&&o(e.prototype,i),n&&o(e,n),t}(),l=t({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isOpen?i("div",{staticClass:"k-dialog",on:{click:t.cancel}},[i("div",{staticClass:"k-dialog-box",attrs:{"data-size":t.size},on:{click:function(t){t.stopPropagation()}}},[t.notification?i("div",{staticClass:"k-dialog-notification",attrs:{"data-theme":t.notification.type}},[i("p",[t._v(t._s(t.notification.message))]),t._v(" "),i("k-button",{attrs:{icon:"cancel"},on:{click:function(e){t.notification=null}}})],1):t._e(),t._v(" "),t.image?i("div",{staticClass:"k-dialog-body"},[i("img",{attrs:{src:t.image.url,id:"croppr"}})]):t._e(),t._v(" "),i("footer",{staticClass:"k-dialog-footer"},[t._t("footer",[i("k-button-group",[i("k-button",{staticClass:"k-dialog-button-cancel",attrs:{icon:"cancel"},on:{click:t.cancel}},[t._v("\n                        "+t._s(t.$t("cancel"))+"\n                    ")]),t._v(" "),i("k-button",{staticClass:"k-dialog-button-submit",attrs:{icon:t.icon,theme:t.theme},on:{click:t.submit}},[t._v("\n                        "+t._s(t.button||t.$t("confirm"))+"\n                    ")])],1)])],2)])]):t._e()},staticRenderFns:[]},void 0,{extends:"k-dialog",props:{image:{type:Object,default:null},minwidth:{type:Number,default:null},minheight:{type:Number,default:null}},data:function(){return{cropprInstance:null}},watch:{isOpen:function(t,e){var i=this;!0===t&&this.$nextTick(function(){var t=document.getElementById("croppr");i.cropprInstance=new a({el:t,min_width:i.minwidth,min_height:i.minheight,saved:i.image.clip})})}},methods:{submit:function(){this.$emit("submit",{id:this.image.id,clip:this.cropprInstance.getCropArea()}),this.close()}}},"data-v-3b0f5ddc",!1,void 0,void 0,void 0);panel.plugin("mullema/image-clip",{fields:{"image-clip":e},components:{"k-clip-card":i,"k-clip-handle":n,"k-clip-dialog":l}})});
