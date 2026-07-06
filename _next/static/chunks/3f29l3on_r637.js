(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28600,e=>{"use strict";var r=e.i(1950);e.s(["useThree",()=>r.C])},27509,e=>{"use strict";var r=e.i(43476),t=e.i(71645),u=e.i(75056),a=e.i(25234),i=e.i(28600),n=e.i(90072),l=e.i(75157);let s=`
varying vec2 vUv;

uniform vec2 uRes;
uniform vec2 uTexRes;

vec2 coverUv(vec2 uv, vec2 texSize, vec2 viewSize) {
  vec2 ratio = vec2(
    min((viewSize.x / viewSize.y) / (texSize.x / texSize.y), 1.0),
    min((viewSize.y / viewSize.x) / (texSize.y / texSize.x), 1.0)
  );
  return uv * ratio + (1.0 - ratio) * 0.5;
}

void main() {
  vUv = coverUv(uv, uTexRes, uRes);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,o=`
precision highp float;

uniform sampler2D uTexture;
uniform vec2 uMouse;
uniform float uBulge;
uniform float uRadius;
uniform float uStrength;
uniform float uHasTexture;

varying vec2 vUv;

vec2 bulge(vec2 uv, vec2 center) {
  uv -= center;

  float dist = length(uv) / uRadius;
  float distPow = pow(dist, 4.0);
  float scale = uStrength / (1.0 + distPow);

  uv *= (1.0 - uBulge) + uBulge * scale;

  uv += center;
  return uv;
}

void main() {
  vec2 bulgeUV = bulge(vUv, uMouse);

  if (uHasTexture > 0.5) {
    vec4 tex = texture2D(uTexture, bulgeUV);
    gl_FragColor = vec4(tex.rgb, 1.0);
  } else {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
  }
}
`,c=({imageSrc:e,radius:u,strength:l,pointer:c,bulgeAmount:v,dampening:m})=>{let f=(0,t.useRef)(null),{size:x,viewport:d}=(0,i.useThree)(),h=(0,t.useRef)(new n.Vector2(.5,.5)),g=(0,t.useRef)(0),p=(0,t.useRef)(null),w=(0,t.useMemo)(()=>({uTexture:{value:null},uRes:{value:new n.Vector2(1,1)},uTexRes:{value:new n.Vector2(1,1)},uMouse:{value:new n.Vector2(.5,.5)},uBulge:{value:0},uRadius:{value:.95},uStrength:{value:1.1},uHasTexture:{value:0}}),[]);return(0,t.useEffect)(()=>{if(!e)return;let r=!1,t=new n.TextureLoader;return t.setCrossOrigin("anonymous"),t.load(e,e=>{r?e.dispose():p.current=e},void 0,t=>{r||(console.warn("WarpedCard: failed to load image",e,t),p.current=null)}),()=>{r=!0,p.current&&(p.current.dispose(),p.current=null)}},[e]),(0,a.useFrame)((e,r)=>{if(!f.current)return;let t=f.current.material;if(t.uniforms.uRes.value.set(x.width*d.dpr,x.height*d.dpr),p.current?.image){t.uniforms.uTexture.value=p.current;let e=p.current.image;t.uniforms.uTexRes.value.set(e.naturalWidth||e.width,e.naturalHeight||e.height),t.uniforms.uHasTexture.value=1}else t.uniforms.uHasTexture.value=0;let a=1-Math.exp(-r/Math.max(m,.001));h.current.x+=(c[0]-h.current.x)*a,h.current.y+=(c[1]-h.current.y)*a,t.uniforms.uMouse.value.set(h.current.x,h.current.y),g.current+=(v-g.current)*a,t.uniforms.uBulge.value=g.current,t.uniforms.uRadius.value=u,t.uniforms.uStrength.value=l}),(0,r.jsxs)("mesh",{ref:f,children:[(0,r.jsx)("planeGeometry",{args:[2,2]}),(0,r.jsx)("shaderMaterial",{vertexShader:s,fragmentShader:o,uniforms:w,transparent:!0})]})},v=({width:e="100%",height:a="100%",className:i,children:n,imageSrc:s="https://images.unsplash.com/photo-1773328781225-4d9f268510fa?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",cardWidth:o=360,aspectRatio:v=1.3,radius:m=.95,strength:f=1.1,dampening:x=.07,transitionDuration:d=.8,borderRadius:h="16px"})=>{let g=(0,t.useRef)(null),[p,w]=(0,t.useState)([.5,.5]),[b,R]=(0,t.useState)(0),S=(0,t.useRef)(0),M=(0,t.useRef)(null),T=(0,t.useCallback)(e=>{null!==M.current&&cancelAnimationFrame(M.current);let r=S.current,t=performance.now(),u=1e3*d,a=i=>{let n=Math.min((i-t)/u,1),l=r+(e-r)*(1-Math.pow(1-n,3));S.current=l,R(l),n<1&&(M.current=requestAnimationFrame(a))};M.current=requestAnimationFrame(a)},[d]),y=(0,t.useCallback)(e=>{let r=g.current?.getBoundingClientRect();r&&w([Math.max(0,Math.min(1,(e.clientX-r.left)/r.width)),Math.max(0,Math.min(1,1-(e.clientY-r.top)/r.height))])},[]),C=(0,t.useCallback)(()=>{T(1)},[T]),j=(0,t.useCallback)(()=>{T(0)},[T]);(0,t.useEffect)(()=>()=>{null!==M.current&&cancelAnimationFrame(M.current)},[]);let z="number"==typeof h?`${h}px`:h,B="number"==typeof o?`${o}px`:o;return(0,r.jsx)("div",{className:(0,l.cn)("flex items-center justify-center",i),style:{width:e,height:a},children:(0,r.jsxs)("div",{ref:g,className:"relative overflow-hidden",style:{width:B,maxWidth:"100%",aspectRatio:`1 / ${v}`,borderRadius:z,boxShadow:"0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.12)"},onPointerMove:y,onPointerEnter:C,onPointerLeave:j,children:[(0,r.jsx)(u.Canvas,{orthographic:!0,camera:{position:[0,0,1],zoom:1,left:-1,right:1,top:1,bottom:-1},gl:{antialias:!0,alpha:!0},className:"absolute! inset-0 w-full h-full",children:(0,r.jsx)(c,{imageSrc:s,radius:m,strength:f,pointer:p,bulgeAmount:b,dampening:x})}),n&&(0,r.jsx)("div",{className:"relative z-10 pointer-events-none",children:n})]})})};v.displayName="WarpedCard",e.s(["default",0,v])},3398,e=>{e.n(e.i(27509))}]);