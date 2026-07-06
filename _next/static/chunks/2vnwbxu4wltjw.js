(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28600,e=>{"use strict";var a=e.i(1950);e.s(["useThree",()=>a.C])},23001,e=>{"use strict";var a=e.i(43476),t=e.i(71645),l=e.i(75056),i=e.i(25234),r=e.i(28600),u=e.i(90072),n=e.i(75157);let o=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,s=`
precision highp float;

varying vec2 vUv;

uniform vec2  uRes;
uniform float uTime;
uniform float uGrid;
uniform vec2  uDir;
uniform float uFalloff;
uniform float uFadeStart;
uniform float uFadeEnd;
uniform float uSquareSize;
uniform float uMinBright;
uniform float uTwinkleSpeed;
uniform float uTwinkleStrength;
uniform float uIntensity;
uniform float uAlpha;
uniform vec3  uSquare;
uniform vec3  uBg;

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

void main() {
  float aspect = uRes.x / max(uRes.y, 1.0);
  vec2 cellsXY = vec2(uGrid * aspect, uGrid);
  if (aspect < 1.0) cellsXY = vec2(uGrid, uGrid / max(aspect, 0.0001));

  vec2 gridUv = vUv * cellsXY;
  vec2 cellId = floor(gridUv);
  vec2 cellUv = fract(gridUv) - 0.5;

  vec2 cellCenter = (cellId + 0.5) / cellsXY;
  vec2 centered = cellCenter * 2.0 - 1.0;
  float t = clamp(dot(centered, uDir) * 0.5 + 0.5, 0.0, 1.0);

  float fs = clamp(uFadeStart, 0.0, 0.999);
  float fe = clamp(uFadeEnd, fs + 0.001, 1.0);
  float remap = clamp((t - fs) / (fe - fs), 0.0, 1.0);
  float density = pow(remap, max(uFalloff, 0.0001));

  float gate = hash21(cellId + 11.7);
  float bRnd = hash21(cellId + 47.3);
  float pRnd = hash21(cellId + 91.1);

  float lit = step(gate, density);

  float half_ = clamp(uSquareSize, 0.05, 0.98) * 0.5;
  float inside = step(abs(cellUv.x), half_) * step(abs(cellUv.y), half_);

  float baseBright = mix(clamp(uMinBright, 0.0, 1.0), 1.0, bRnd);

  float phase = pRnd * 6.2831853;
  float speed = uTwinkleSpeed * (0.6 + 0.8 * bRnd);
  float pulse = 0.5 + 0.5 * sin(uTime * speed + phase);
  float twinkle = mix(1.0 - uTwinkleStrength, 1.0, pulse);

  float mask = inside * lit * baseBright * twinkle * uIntensity;

  vec3 col = mix(uBg, uSquare, clamp(mask, 0.0, 1.0));
  gl_FragColor = vec4(col, uAlpha);
}
`;function f(e){let a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return a?[parseInt(a[1],16)/255,parseInt(a[2],16)/255,parseInt(a[3],16)/255]:[0,0,0]}let c=e=>{let l=(0,t.useRef)(null),{size:n}=(0,r.useThree)();(0,i.useFrame)(a=>{if(!l.current)return;let t=l.current.material.uniforms;t.uTime.value=a.clock.elapsedTime,t.uRes.value.set(n.width,n.height),t.uGrid.value=Math.max(4,Math.min(400,e.gridSize));let[i,r]=function(e){switch(e){case"left":return[-1,0];case"top":return[0,1];case"bottom":return[0,-1];default:return[1,0]}}(e.direction);t.uDir.value.set(i,r),t.uFalloff.value=e.falloff,t.uFadeStart.value=e.fadeStart,t.uFadeEnd.value=e.fadeEnd,t.uSquareSize.value=e.squareSize,t.uMinBright.value=e.minBrightness,t.uTwinkleSpeed.value=e.twinkleSpeed,t.uTwinkleStrength.value=e.twinkleStrength,t.uIntensity.value=e.intensity,t.uAlpha.value=e.opacity;let u=f(e.squareColor);t.uSquare.value.set(u[0],u[1],u[2]);let o=f(e.backgroundColor);t.uBg.value.set(o[0],o[1],o[2])});let c=(0,t.useMemo)(()=>({uTime:{value:0},uRes:{value:new u.Vector2(1,1)},uGrid:{value:80},uDir:{value:new u.Vector2(1,0)},uFalloff:{value:1.6},uFadeStart:{value:.05},uFadeEnd:{value:1},uSquareSize:{value:.7},uMinBright:{value:.25},uTwinkleSpeed:{value:1.4},uTwinkleStrength:{value:.7},uIntensity:{value:1},uAlpha:{value:1},uSquare:{value:new u.Vector3(.32,.05,.85)},uBg:{value:new u.Vector3(.04,.02,.06)}}),[]);return(0,a.jsxs)("mesh",{ref:l,children:[(0,a.jsx)("planeGeometry",{args:[2,2]}),(0,a.jsx)("shaderMaterial",{vertexShader:o,fragmentShader:s,uniforms:c,transparent:!0})]})},d=({width:e="100%",height:t="100%",className:i,children:r,direction:u="right",gridSize:o=52,squareColor:s="#BB29FF",backgroundColor:f="#000000",falloff:d=1.25,fadeStart:v=.65,fadeEnd:p=1,squareSize:m=.57,minBrightness:h=.55,twinkleSpeed:g=1.4,twinkleStrength:S=.94,intensity:w=1,opacity:k=1,dpr:x=1.5})=>(0,a.jsxs)("div",{className:(0,n.cn)("relative overflow-hidden",i),style:{width:e,height:t},children:[(0,a.jsx)(l.Canvas,{className:"absolute inset-0",dpr:[1,x],gl:{antialias:!1,alpha:!0,powerPreference:"high-performance"},orthographic:!0,camera:{position:[0,0,1],zoom:1,left:-1,right:1,top:1,bottom:-1},children:(0,a.jsx)(c,{direction:u,gridSize:o,squareColor:s,backgroundColor:f,falloff:d,fadeStart:v,fadeEnd:p,squareSize:m,minBrightness:h,twinkleSpeed:g,twinkleStrength:S,intensity:w,opacity:k})}),r&&(0,a.jsx)("div",{className:"relative z-10",children:r})]});d.displayName="BlinkingSquares",e.s(["default",0,d])},28334,e=>{e.n(e.i(23001))}]);