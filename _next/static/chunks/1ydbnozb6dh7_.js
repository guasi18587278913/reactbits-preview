(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28600,e=>{"use strict";var t=e.i(1950);e.s(["useThree",()=>t.C])},57184,e=>{"use strict";var t=e.i(43476),r=e.i(71645),n=e.i(75056),a=e.i(25234),u=e.i(28600),i=e.i(90072),l=e.i(75157);let s=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,o=`
precision highp float;

varying vec2 vUv;

uniform sampler2D uMap;
uniform vec2 uPlanePx;
uniform vec2 uTexPx;
uniform float uShift;
uniform float uIntensity;
uniform float uMaxShift;
uniform float uRadiusPx;
uniform float uHasTexture;

vec2 coverFit(vec2 uv, vec2 planeSize, vec2 texSize) {
  float planeAspect = planeSize.x / max(planeSize.y, 1.0);
  float texAspect = texSize.x / max(texSize.y, 1.0);
  vec2 ratio = vec2(
    min(planeAspect / max(texAspect, 0.0001), 1.0),
    min((1.0 / planeAspect) / max(1.0 / texAspect, 0.0001), 1.0)
  );
  return uv * ratio + (1.0 - ratio) * 0.5;
}

float roundedBoxAlpha(vec2 uv, vec2 sizePx, float radiusPx) {
  vec2 p = (uv - 0.5) * sizePx;
  vec2 half_ = sizePx * 0.5 - vec2(radiusPx);
  vec2 d = abs(p) - half_;
  float outside = length(max(d, 0.0));
  float inside = min(max(d.x, d.y), 0.0);
  float dist = outside + inside - radiusPx;
  return clamp(0.5 - dist, 0.0, 1.0);
}

void main() {
  vec2 uv = coverFit(vUv, uPlanePx, uTexPx);

  float zoom = 1.0 / (1.0 + 2.0 * uMaxShift);
  uv = (uv - 0.5) * zoom + 0.5;

  uv.x += uShift * uIntensity * zoom;

  vec4 tex;
  if (uHasTexture > 0.5) {
    tex = texture2D(uMap, uv);
  } else {
    tex = vec4(mix(vec3(0.07), vec3(0.12), vUv.y), 1.0);
  }

  float mask = uRadiusPx > 0.5 ? roundedBoxAlpha(vUv, uPlanePx, uRadiusPx) : 1.0;
  gl_FragColor = vec4(tex.rgb, tex.a * mask);
}
`;function c(e,t,r){return Math.max(t,Math.min(r,e))}function v(){return{uMap:{value:null},uPlanePx:{value:new i.Vector2(1,1)},uTexPx:{value:new i.Vector2(1,1)},uShift:{value:0},uIntensity:{value:.4},uMaxShift:{value:.2},uRadiusPx:{value:0},uHasTexture:{value:0}}}let d=({src:e,index:n,imageWidth:l,imageHeight:d,gap:f,parallaxIntensity:m,uvScale:p,borderRadius:x,loop:h,totalCount:g,scrollRef:P})=>{let y=(0,r.useRef)(null),S=(0,r.useRef)(null),{size:R}=(0,u.useThree)(),[w]=r.default.useState(v),b=(0,r.useRef)({parallaxIntensity:m,uvScale:p,borderRadius:x,imageWidth:l,imageHeight:d,gap:f,loop:h});return(0,r.useEffect)(()=>{b.current={parallaxIntensity:m,uvScale:p,borderRadius:x,imageWidth:l,imageHeight:d,gap:f,loop:h}},[m,p,x,l,d,f,h]),(0,r.useEffect)(()=>{if(!e)return;let t=!1,r=new i.TextureLoader;return r.setCrossOrigin("anonymous"),r.load(e,e=>{t?e.dispose():(e.colorSpace=i.SRGBColorSpace,e.minFilter=i.LinearFilter,e.magFilter=i.LinearFilter,e.wrapS=i.ClampToEdgeWrapping,e.wrapT=i.ClampToEdgeWrapping,S.current=e)},void 0,()=>{t||(S.current=null)}),()=>{t=!0,S.current&&(S.current.dispose(),S.current=null)}},[e]),(0,a.useFrame)(()=>{let e=y.current;if(!e)return;let t=e.material.uniforms,r=b.current,a=P.current;if(!a)return;let u=r.imageWidth+r.gap,i=n*u-a.current;if(r.loop&&g>0){let e=g*u,t=.5*e;i=((i+t)%e+e)%e-t}e.position.x=i,e.position.y=0,e.scale.set(r.imageWidth,r.imageHeight,1);let l=c(i/Math.max(R.width,1),-r.uvScale,r.uvScale);if(t.uShift.value=-l,t.uIntensity.value=r.parallaxIntensity,t.uMaxShift.value=r.uvScale*r.parallaxIntensity,t.uRadiusPx.value=r.borderRadius,t.uPlanePx.value.set(r.imageWidth,r.imageHeight),S.current?.image){t.uMap.value=S.current;let e=S.current.image;t.uTexPx.value.set(e.naturalWidth||e.width||1,e.naturalHeight||e.height||1),t.uHasTexture.value=1}else t.uHasTexture.value=0}),(0,t.jsxs)("mesh",{ref:y,children:[(0,t.jsx)("planeGeometry",{args:[1,1,1,1]}),(0,t.jsx)("shaderMaterial",{vertexShader:s,fragmentShader:o,uniforms:w,transparent:!0})]})},f=()=>{let e=(0,r.useRef)(null),{size:n,set:a}=(0,u.useThree)();return(0,r.useEffect)(()=>{let t=e.current;t&&(t.left=-n.width/2,t.right=n.width/2,t.top=n.height/2,t.bottom=-n.height/2,t.near=.1,t.far=1e3,t.position.set(0,0,10),t.updateProjectionMatrix(),a({camera:t}))},[n.width,n.height,a]),(0,t.jsx)("orthographicCamera",{ref:e})},m=r.default.forwardRef(({images:e,imageWidth:a=420,imageHeight:u=560,gap:i=32,parallaxIntensity:s=.4,uvScale:o=.85,lerp:v=.08,wheelSensitivity:m=1,dragSensitivity:p=1.4,loop:x=!1,borderRadius:h=16,autoplaySpeed:g=0,pauseOnHover:P=!0,showProgress:y=!0,className:S,style:R},w)=>{let b=(0,r.useRef)(null),E=(0,r.useRef)(null),M=(0,r.useRef)(!1),T=(0,r.useRef)(!1),L=(0,r.useRef)(0),C=(0,r.useRef)(null),z=(0,r.useRef)(null),A=(0,r.useRef)({current:0,target:0,limit:0}),j=(0,r.useRef)({lerp:v,wheelSensitivity:m,dragSensitivity:p,autoplaySpeed:g,loop:x,pauseOnHover:P,imageWidth:a,gap:i,count:e.length});(0,r.useEffect)(()=>{j.current={lerp:v,wheelSensitivity:m,dragSensitivity:p,autoplaySpeed:g,loop:x,pauseOnHover:P,imageWidth:a,gap:i,count:e.length}},[v,m,p,g,x,P,a,i,e.length]);let F=(0,r.useCallback)(()=>{let t=b.current;if(!t)return;let r=e.length*(a+i)-i,n=t.clientWidth;A.current.limit=x?1/0:Math.max(0,r-n)},[e.length,a,i,x]);(0,r.useEffect)(()=>{F();let e=b.current;if(!e||"u"<typeof ResizeObserver)return;let t=new ResizeObserver(F);return t.observe(e),()=>t.disconnect()},[F]);let H=(0,r.useRef)(null);(0,r.useEffect)(()=>{let e=t=>{let r=A.current,n=j.current,a=C.current??t,u=Math.max(0,(t-a)/1e3);C.current=t,0===n.autoplaySpeed||T.current||n.pauseOnHover&&M.current||(r.target+=n.autoplaySpeed*u),n.loop||(r.target=c(r.target,0,r.limit));let i=c(n.lerp,.001,1);if(r.current+=(r.target-r.current)*i,z.current&&!n.loop&&r.limit>0){let e=c(r.current/r.limit,0,1);z.current.style.transform=`scaleX(${e})`}E.current=requestAnimationFrame(e)};return H.current=e,E.current=requestAnimationFrame(e),()=>{null!==E.current&&cancelAnimationFrame(E.current),E.current=null,H.current=null,C.current=null}},[]),(0,r.useEffect)(()=>{let e=b.current;if(!e)return;let t=e=>{let t=j.current,r=Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY;A.current.target+=r*t.wheelSensitivity},r=t=>{T.current=!0,L.current=t.clientX,e.setPointerCapture(t.pointerId),e.style.cursor="grabbing"},n=e=>{if(!T.current)return;let t=j.current,r=e.clientX-L.current;L.current=e.clientX,A.current.target-=r*t.dragSensitivity},a=t=>{if(T.current){T.current=!1;try{e.releasePointerCapture(t.pointerId)}catch{}e.style.cursor="grab"}},u=()=>{M.current=!0},i=()=>{M.current=!1};return e.addEventListener("wheel",t,{passive:!0}),e.addEventListener("pointerdown",r),e.addEventListener("pointermove",n),e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a),e.addEventListener("pointerleave",a),e.addEventListener("mouseenter",u),e.addEventListener("mouseleave",i),()=>{e.removeEventListener("wheel",t),e.removeEventListener("pointerdown",r),e.removeEventListener("pointermove",n),e.removeEventListener("pointerup",a),e.removeEventListener("pointercancel",a),e.removeEventListener("pointerleave",a),e.removeEventListener("mouseenter",u),e.removeEventListener("mouseleave",i)}},[]);let I=(0,r.useCallback)(e=>{let t=j.current,r=e*(t.imageWidth+t.gap);A.current.target=t.loop?r:c(r,0,A.current.limit)},[]),W=(0,r.useCallback)(()=>{A.current.target=0,A.current.current=0},[]);(0,r.useImperativeHandle)(w,()=>({scrollToIndex:I,reset:W}),[I,W]);let U=(0,r.useMemo)(()=>e.map((e,t)=>`${t}-${e}`),[e]);return(0,t.jsxs)("div",{ref:b,className:(0,l.cn)("relative w-full h-full overflow-hidden select-none",S),style:{cursor:"grab",touchAction:"pan-y",...R},children:[(0,t.jsxs)(n.Canvas,{gl:{antialias:!0,alpha:!0},dpr:[1,2],className:"absolute! inset-0 w-full h-full",children:[(0,t.jsx)(f,{}),e.map((r,n)=>(0,t.jsx)(d,{src:r,index:n,imageWidth:a,imageHeight:u,gap:i,parallaxIntensity:s,uvScale:o,borderRadius:h,loop:x,totalCount:e.length,scrollRef:A},U[n]))]}),y&&!x&&(0,t.jsx)("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 h-[2px] w-32 bg-white/15 rounded-full overflow-hidden pointer-events-none","aria-hidden":!0,children:(0,t.jsx)("div",{ref:z,className:"h-full w-full bg-white/80 origin-left",style:{transform:"scaleX(0)"}})})]})});m.displayName="ParallaxCarousel",e.s(["default",0,m])},70671,e=>{e.n(e.i(57184))}]);