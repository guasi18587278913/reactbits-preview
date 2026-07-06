(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,16015,(e,t,n)=>{},98547,(e,t,n)=>{var r=e.i(47167);e.r(16015);var l=e.r(71645),i=l&&"object"==typeof l&&"default"in l?l:{default:l},a=void 0!==r.default&&r.default.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(e){var t=void 0===e?{}:e,n=t.name,r=void 0===n?"stylesheet":n,l=t.optimizeForSpeed,i=void 0===l?a:l;c(o(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",c("boolean"==typeof i,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=i,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var s="u">typeof window&&document.querySelector('meta[property="csp-nonce"]');this._nonce=s?s.getAttribute("content"):null}var t,n=e.prototype;return n.setOptimizeForSpeed=function(e){c("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),c(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},n.isOptimizeForSpeed=function(){return this._optimizeForSpeed},n.inject=function(){var e=this;if(c(!this._injected,"sheet already injected"),this._injected=!0,"u">typeof window&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(a||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},n.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},n.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},n.insertRule=function(e,t){if(c(o(e),"`insertRule` accepts only strings"),"u"<typeof window)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return a||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},n.replaceRule=function(e,t){if(this._optimizeForSpeed||"u"<typeof window){var n="u">typeof window?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(r){a||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];c(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},n.deleteRule=function(e){if("u"<typeof window)return void this._serverSheet.deleteRule(e);if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];c(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},n.flush=function(){this._injected=!1,this._rulesCount=0,"u">typeof window?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},n.cssRules=function(){var e=this;return"u"<typeof window?this._serverSheet.cssRules:this._tags.reduce(function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},n.makeStyleTag=function(e,t,n){t&&c(o(t),"makeStyleTag accepts only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var l=document.head||document.getElementsByTagName("head")[0];return n?l.insertBefore(r,n):l.appendChild(r),r},t=[{key:"length",get:function(){return this._rulesCount}}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(e.prototype,t),e}();function c(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var h=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},u={};function g(e,t){if(!t)return"jsx-"+e;var n=String(t),r=e+n;return u[r]||(u[r]="jsx-"+h(e+"-"+n)),u[r]}function p(e,t){"u"<typeof window&&(t=t.replace(/\/style/gi,"\\/style"));var n=e+t;return u[n]||(u[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),u[n]}var f=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,l=t.optimizeForSpeed,i=void 0!==l&&l;this._sheet=r||new s({name:"styled-jsx",optimizeForSpeed:i}),this._sheet.inject(),r&&"boolean"==typeof i&&(this._sheet.setOptimizeForSpeed(i),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),"u">typeof window&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,l=n.rules;if(r in this._instancesCounts){this._instancesCounts[r]+=1;return}var i=l.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[r]=i,this._instancesCounts[r]=1},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,n;return t=this.cssRules(),void 0===(n=e)&&(n={}),t.map(function(e){var t=e[0],r=e[1];return i.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:r}})})},t.getIdAndRules=function(e){var t=e.children,n=e.dynamic,r=e.id;if(n){var l=g(r,n);return{styleId:l,rules:Array.isArray(t)?t.map(function(e){return p(l,e)}):[p(l,t)]}}return{styleId:g(r),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),d=l.createContext(null);function m(){return new f}function $(){return l.useContext(d)}d.displayName="StyleSheetContext";var b=i.default.useInsertionEffect||i.default.useLayoutEffect,y="u">typeof window?m():void 0;function x(e){var t=y||$();return t&&("u"<typeof window?t.add(e):b(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)])),null}x.dynamic=function(e){return e.map(function(e){return g(e[0],e[1])}).join(" ")},n.StyleRegistry=function(e){var t=e.registry,n=e.children,r=l.useContext(d),a=l.useState(function(){return r||t||m()})[0];return i.default.createElement(d.Provider,{value:a},n)},n.createStyleRegistry=m,n.style=x,n.useStyleRegistry=$},37902,(e,t,n)=>{t.exports=e.r(98547).style},54946,e=>{"use strict";var t=e.i(43476),n=e.i(37902),r=e.i(71645),l=e.i(75157);let i=({rows:e=[["https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop","https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"],["https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop","https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop","https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"],["https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop","https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop","https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop","https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"]],circleSize:i=64,baseRadius:a=120,orbitGap:o=100,rotationDuration:s=20,rowDelay:c=.5,direction:h="clockwise",alternateDirection:u=!1,fadeMode:g="none",fadeBlur:p=!1,showPaths:f=!0,animate:d=!0,animationDuration:m=.6,animationStagger:$=.15,staggerScaleFactor:b=0,className:y})=>{let x=(0,r.useMemo)(()=>e.map(e=>[...e]),[e]),v=(a+(x.length-1)*o+i)*2;return(0,t.jsxs)("div",{style:{width:`${v}px`,height:`${v}px`,animation:d?"circles-container-fade-in 0.8s ease-out":void 0},className:n.default.dynamic([["be10734a3fdf1dab",[x.map((e,t)=>`
          @keyframes circles-orbit-${t} {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          @keyframes circles-counter-orbit-${t} {
            0% {
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              opacity: ${"in"===g?.2+t/(x.length-1)*.8:"out"===g?.2+(x.length-t-1)/(x.length-1)*.8:1};
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"none"};
            }
            100% {
              transform: rotate(calc(-1 * var(--item-angle) - 360deg)) scale(1);
              opacity: ${"in"===g?.2+t/(x.length-1)*.8:"out"===g?.2+(x.length-t-1)/(x.length-1)*.8:1};
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"none"};
            }
          }

          @keyframes circles-entrance-${t} {
            0% {
              opacity: 0;
              transform: rotate(calc(-1 * var(--item-angle))) scale(0.6);
              filter: blur(10px) ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:""};
            }
            60% {
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"blur(0px)"};
            }
            100% {
              opacity: ${"in"===g?.2+t/(x.length-1)*.8:"out"===g?.2+(x.length-t-1)/(x.length-1)*.8:1};
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"blur(0px)"};
            }
          }
        `).join("\n")]]])+" "+((0,l.cn)("relative",y)||""),children:[(0,t.jsxs)("div",{className:n.default.dynamic([["be10734a3fdf1dab",[x.map((e,t)=>`
          @keyframes circles-orbit-${t} {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          @keyframes circles-counter-orbit-${t} {
            0% {
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              opacity: ${"in"===g?.2+t/(x.length-1)*.8:"out"===g?.2+(x.length-t-1)/(x.length-1)*.8:1};
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"none"};
            }
            100% {
              transform: rotate(calc(-1 * var(--item-angle) - 360deg)) scale(1);
              opacity: ${"in"===g?.2+t/(x.length-1)*.8:"out"===g?.2+(x.length-t-1)/(x.length-1)*.8:1};
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"none"};
            }
          }

          @keyframes circles-entrance-${t} {
            0% {
              opacity: 0;
              transform: rotate(calc(-1 * var(--item-angle))) scale(0.6);
              filter: blur(10px) ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:""};
            }
            60% {
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"blur(0px)"};
            }
            100% {
              opacity: ${"in"===g?.2+t/(x.length-1)*.8:"out"===g?.2+(x.length-t-1)/(x.length-1)*.8:1};
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"blur(0px)"};
            }
          }
        `).join("\n")]]])+" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",children:[f&&(0,t.jsx)("svg",{style:{width:`${v}px`,height:`${v}px`,transform:"translate(-50%, -50%)"},className:n.default.dynamic([["be10734a3fdf1dab",[x.map((e,t)=>`
          @keyframes circles-orbit-${t} {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          @keyframes circles-counter-orbit-${t} {
            0% {
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              opacity: ${"in"===g?.2+t/(x.length-1)*.8:"out"===g?.2+(x.length-t-1)/(x.length-1)*.8:1};
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"none"};
            }
            100% {
              transform: rotate(calc(-1 * var(--item-angle) - 360deg)) scale(1);
              opacity: ${"in"===g?.2+t/(x.length-1)*.8:"out"===g?.2+(x.length-t-1)/(x.length-1)*.8:1};
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"none"};
            }
          }

          @keyframes circles-entrance-${t} {
            0% {
              opacity: 0;
              transform: rotate(calc(-1 * var(--item-angle))) scale(0.6);
              filter: blur(10px) ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:""};
            }
            60% {
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"blur(0px)"};
            }
            100% {
              opacity: ${"in"===g?.2+t/(x.length-1)*.8:"out"===g?.2+(x.length-t-1)/(x.length-1)*.8:1};
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"blur(0px)"};
            }
          }
        `).join("\n")]]])+" absolute left-1/2 top-1/2 pointer-events-none",children:x.map((e,r)=>(0,t.jsx)("circle",{cx:"50%",cy:"50%",r:a+r*o,fill:"none",stroke:"currentColor",strokeWidth:"2",strokeDasharray:"8 8",style:{opacity:.5,animation:d?`circles-path-entrance ${m}s ease-out ${r*$}s backwards`:void 0},className:n.default.dynamic([["be10734a3fdf1dab",[x.map((e,t)=>`
          @keyframes circles-orbit-${t} {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          @keyframes circles-counter-orbit-${t} {
            0% {
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              opacity: ${"in"===g?.2+t/(x.length-1)*.8:"out"===g?.2+(x.length-t-1)/(x.length-1)*.8:1};
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"none"};
            }
            100% {
              transform: rotate(calc(-1 * var(--item-angle) - 360deg)) scale(1);
              opacity: ${"in"===g?.2+t/(x.length-1)*.8:"out"===g?.2+(x.length-t-1)/(x.length-1)*.8:1};
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"none"};
            }
          }

          @keyframes circles-entrance-${t} {
            0% {
              opacity: 0;
              transform: rotate(calc(-1 * var(--item-angle))) scale(0.6);
              filter: blur(10px) ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:""};
            }
            60% {
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"blur(0px)"};
            }
            100% {
              opacity: ${"in"===g?.2+t/(x.length-1)*.8:"out"===g?.2+(x.length-t-1)/(x.length-1)*.8:1};
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"blur(0px)"};
            }
          }
        `).join("\n")]]])+" stroke-gray-300 dark:stroke-gray-700"},r))}),x.map((e,r)=>{let l=a+r*o,f=s+r*c,y=h;u&&r%2==1&&(y="clockwise"===h?"counterclockwise":"clockwise");let v="clockwise"===y?"normal":"reverse";return(0,t.jsx)("ul",{style:{width:`${2*l}px`,height:`${2*l}px`,transform:"translate(-50%, -50%)",animation:`circles-orbit-${r} ${f}s linear infinite ${v}`},className:n.default.dynamic([["be10734a3fdf1dab",[x.map((e,t)=>`
          @keyframes circles-orbit-${t} {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          @keyframes circles-counter-orbit-${t} {
            0% {
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              opacity: ${"in"===g?.2+t/(x.length-1)*.8:"out"===g?.2+(x.length-t-1)/(x.length-1)*.8:1};
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"none"};
            }
            100% {
              transform: rotate(calc(-1 * var(--item-angle) - 360deg)) scale(1);
              opacity: ${"in"===g?.2+t/(x.length-1)*.8:"out"===g?.2+(x.length-t-1)/(x.length-1)*.8:1};
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"none"};
            }
          }

          @keyframes circles-entrance-${t} {
            0% {
              opacity: 0;
              transform: rotate(calc(-1 * var(--item-angle))) scale(0.6);
              filter: blur(10px) ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:""};
            }
            60% {
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"blur(0px)"};
            }
            100% {
              opacity: ${"in"===g?.2+t/(x.length-1)*.8:"out"===g?.2+(x.length-t-1)/(x.length-1)*.8:1};
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"blur(0px)"};
            }
          }
        `).join("\n")]]])+" absolute left-1/2 top-1/2 list-none p-0 m-0 rounded-full",children:e.map((a,o)=>{let s=(360/e.length*o-90)%360,c=i*(1+r*b);return(0,t.jsx)("li",{style:{width:`${c}px`,height:`${c}px`,margin:`-${c/2}px`,transform:`rotate(${s}deg) translateX(${l}px)`,"--item-angle":`${s}deg`,"--entrance-delay":`${r*$}s`,"--target-opacity":"in"===g?.2+r/(x.length-1)*.8:"out"===g?.2+(x.length-r-1)/(x.length-1)*.8:1,"--target-blur":p&&"none"!==g?"in"===g?`${(x.length-r-1)/(x.length-1)*8}px`:`${r/(x.length-1)*8}px`:"0px"},className:n.default.dynamic([["be10734a3fdf1dab",[x.map((e,t)=>`
          @keyframes circles-orbit-${t} {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          @keyframes circles-counter-orbit-${t} {
            0% {
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              opacity: ${"in"===g?.2+t/(x.length-1)*.8:"out"===g?.2+(x.length-t-1)/(x.length-1)*.8:1};
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"none"};
            }
            100% {
              transform: rotate(calc(-1 * var(--item-angle) - 360deg)) scale(1);
              opacity: ${"in"===g?.2+t/(x.length-1)*.8:"out"===g?.2+(x.length-t-1)/(x.length-1)*.8:1};
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"none"};
            }
          }

          @keyframes circles-entrance-${t} {
            0% {
              opacity: 0;
              transform: rotate(calc(-1 * var(--item-angle))) scale(0.6);
              filter: blur(10px) ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:""};
            }
            60% {
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"blur(0px)"};
            }
            100% {
              opacity: ${"in"===g?.2+t/(x.length-1)*.8:"out"===g?.2+(x.length-t-1)/(x.length-1)*.8:1};
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"blur(0px)"};
            }
          }
        `).join("\n")]]])+" absolute block left-1/2 top-1/2",children:(0,t.jsx)("div",{style:{animation:d?`circles-entrance-${r} ${m}s cubic-bezier(0.34, 1.56, 0.64, 1) ${r*$}s both, circles-counter-orbit-${r} ${f}s linear infinite ${r*$}s ${v}`:`circles-counter-orbit-${r} ${f}s linear infinite ${v}`},className:n.default.dynamic([["be10734a3fdf1dab",[x.map((e,t)=>`
          @keyframes circles-orbit-${t} {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          @keyframes circles-counter-orbit-${t} {
            0% {
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              opacity: ${"in"===g?.2+t/(x.length-1)*.8:"out"===g?.2+(x.length-t-1)/(x.length-1)*.8:1};
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"none"};
            }
            100% {
              transform: rotate(calc(-1 * var(--item-angle) - 360deg)) scale(1);
              opacity: ${"in"===g?.2+t/(x.length-1)*.8:"out"===g?.2+(x.length-t-1)/(x.length-1)*.8:1};
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"none"};
            }
          }

          @keyframes circles-entrance-${t} {
            0% {
              opacity: 0;
              transform: rotate(calc(-1 * var(--item-angle))) scale(0.6);
              filter: blur(10px) ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:""};
            }
            60% {
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"blur(0px)"};
            }
            100% {
              opacity: ${"in"===g?.2+t/(x.length-1)*.8:"out"===g?.2+(x.length-t-1)/(x.length-1)*.8:1};
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"blur(0px)"};
            }
          }
        `).join("\n")]]])+" w-full h-full rounded-full overflow-hidden shadow-lg border-2 border-white dark:border-gray-800",children:(0,t.jsx)("img",{src:a,alt:`Circle ${r}-${o}`,loading:"lazy",className:n.default.dynamic([["be10734a3fdf1dab",[x.map((e,t)=>`
          @keyframes circles-orbit-${t} {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          @keyframes circles-counter-orbit-${t} {
            0% {
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              opacity: ${"in"===g?.2+t/(x.length-1)*.8:"out"===g?.2+(x.length-t-1)/(x.length-1)*.8:1};
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"none"};
            }
            100% {
              transform: rotate(calc(-1 * var(--item-angle) - 360deg)) scale(1);
              opacity: ${"in"===g?.2+t/(x.length-1)*.8:"out"===g?.2+(x.length-t-1)/(x.length-1)*.8:1};
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"none"};
            }
          }

          @keyframes circles-entrance-${t} {
            0% {
              opacity: 0;
              transform: rotate(calc(-1 * var(--item-angle))) scale(0.6);
              filter: blur(10px) ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:""};
            }
            60% {
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"blur(0px)"};
            }
            100% {
              opacity: ${"in"===g?.2+t/(x.length-1)*.8:"out"===g?.2+(x.length-t-1)/(x.length-1)*.8:1};
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"blur(0px)"};
            }
          }
        `).join("\n")]]])+" w-full h-full object-cover"})})},o)})},r)})]}),(0,t.jsx)(n.default,{id:"be10734a3fdf1dab",dynamic:[x.map((e,t)=>`
          @keyframes circles-orbit-${t} {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          @keyframes circles-counter-orbit-${t} {
            0% {
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              opacity: ${"in"===g?.2+t/(x.length-1)*.8:"out"===g?.2+(x.length-t-1)/(x.length-1)*.8:1};
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"none"};
            }
            100% {
              transform: rotate(calc(-1 * var(--item-angle) - 360deg)) scale(1);
              opacity: ${"in"===g?.2+t/(x.length-1)*.8:"out"===g?.2+(x.length-t-1)/(x.length-1)*.8:1};
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"none"};
            }
          }

          @keyframes circles-entrance-${t} {
            0% {
              opacity: 0;
              transform: rotate(calc(-1 * var(--item-angle))) scale(0.6);
              filter: blur(10px) ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:""};
            }
            60% {
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"blur(0px)"};
            }
            100% {
              opacity: ${"in"===g?.2+t/(x.length-1)*.8:"out"===g?.2+(x.length-t-1)/(x.length-1)*.8:1};
              transform: rotate(calc(-1 * var(--item-angle))) scale(1);
              filter: ${p&&"none"!==g?"in"===g?`blur(${(x.length-t-1)/(x.length-1)*8}px)`:`blur(${t/(x.length-1)*8}px)`:"blur(0px)"};
            }
          }
        `).join("\n")],children:"@keyframes circles-container-fade-in{0%{opacity:0}to{opacity:1}}@keyframes circles-path-entrance{0%{opacity:0;stroke-dashoffset:100px}to{opacity:.5;stroke-dashoffset:0}}"})]})};i.displayName="Circles",e.s(["default",0,i])},74238,e=>{e.n(e.i(54946))}]);