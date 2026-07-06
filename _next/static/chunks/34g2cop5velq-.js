(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28600,e=>{"use strict";var u=e.i(1950);e.s(["useThree",()=>u.C])},77368,e=>{"use strict";var u=e.i(43476),a=e.i(71645),r=e.i(75056),t=e.i(25234),o=e.i(28600),l=e.i(75157),n=e.i(90072);let i=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,s=`
precision highp float;

uniform float uTime;
uniform vec2 uRes;
uniform float uSpeed;
uniform float uScroll;
uniform float uDensity;
uniform float uCurve;
uniform float uCurvePow;
uniform float uVanish;
uniform float uWaveScale;
uniform float uWaveAmp;
uniform float uWavePow;
uniform float uWaveEdge;
uniform float uStartY;
uniform float uEndY;
uniform float uLineGap;
uniform float uColorRate;
uniform float uColorFreq;
uniform vec3 uTone1;
uniform vec3 uTone2;
uniform vec3 uBg;
uniform float uAlpha;
uniform vec2 uPointer;
uniform float uCursorActive;

void main() {
  vec2 st = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;

  float pointerShiftX = (uPointer.x - 0.5) * 2.0 * uCursorActive;
  float radial = length(st + vec2(pointerShiftX, uVanish));
  float warp = pow(radial, uCurvePow) / uCurve;
  st /= warp;

  float span = (st.y - uStartY) / (uEndY - uStartY);
  span = 1.0 - span;
  float baseSpan = span;

  float cap = 0.9;
  span = mix(span, cap, step(cap, span) - step(1.0, span));
  span = clamp((1.0 - span) * 0.5, 0.0, 0.5);

  float elapsed = uTime * uSpeed;

  vec2 cell = vec2(
    fract(st.x * uDensity),
    fract(st.y * uDensity - uScroll * elapsed)
  );
  float grid = step(span, cell.x) - step(1.0 - span, cell.x);
  grid = min(grid, step(span, cell.y) - step(1.0 - span, cell.y));

  vec2 wc = vec2(st.x * uWaveScale * 0.7 / uLineGap, st.y * uWaveScale * 0.5);
  wc.x += uWaveAmp * sin(wc.y - elapsed);
  float ridge = pow(max(0.0, sin(wc.x)), uWavePow);
  ridge = smoothstep(uWaveEdge, 1.0, ridge);
  ridge *= step(uStartY, st.y) * grid;
  ridge = clamp(ridge, 0.0, 1.0);

  float phase = sin(-wc.x * uColorFreq + wc.y * uColorFreq - uColorRate * elapsed);
  vec3 tint = mix(uTone1, uTone2, smoothstep(-0.5, 0.5, phase));

  vec3 result = mix(uBg, tint, ridge);
  result = mix(uBg, result, smoothstep(uStartY, uStartY + 0.2, st.y));

  gl_FragColor = vec4(result, uAlpha);
}
`;function v(e){let u=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return u?[parseInt(u[1],16)/255,parseInt(u[2],16)/255,parseInt(u[3],16)/255]:[0,0,0]}let c=({speed:e,scrollSpeed:r,density:l,curvature:v,curveExponent:c,vanishPoint:f,waveScale:m,waveAmplitude:p,wavePower:d,waveThreshold:h,lineStart:g,lineEnd:w,lineGap:S,colorSpeed:x,colorFrequency:C,tone1Rgb:y,tone2Rgb:T,bgRgb:R,opacity:P,pointer:W,cursorInteraction:A})=>{let Y=(0,a.useRef)(null),{size:b,viewport:V}=(0,o.useThree)(),E=(0,a.useRef)(new n.Vector2(.5,.5)),j=(0,a.useMemo)(()=>({uTime:{value:0},uRes:{value:new n.Vector2(1,1)},uSpeed:{value:e},uScroll:{value:r},uDensity:{value:l},uCurve:{value:v},uCurvePow:{value:c},uVanish:{value:f},uWaveScale:{value:m},uWaveAmp:{value:p},uWavePow:{value:d},uWaveEdge:{value:h},uStartY:{value:g},uEndY:{value:w},uLineGap:{value:S},uColorRate:{value:x},uColorFreq:{value:C},uTone1:{value:new n.Vector3(...y)},uTone2:{value:new n.Vector3(...T)},uBg:{value:new n.Vector3(...R)},uAlpha:{value:P},uPointer:{value:new n.Vector2(.5,.5)},uCursorActive:{value:0}}),[]);return(0,t.useFrame)((u,a)=>{if(!Y.current)return;let t=Y.current.material;t.uniforms.uTime.value=u.clock.elapsedTime,t.uniforms.uRes.value.set(b.width*V.dpr,b.height*V.dpr),t.uniforms.uSpeed.value=e,t.uniforms.uScroll.value=r,t.uniforms.uDensity.value=l,t.uniforms.uCurve.value=v,t.uniforms.uCurvePow.value=c,t.uniforms.uVanish.value=f,t.uniforms.uWaveScale.value=m,t.uniforms.uWaveAmp.value=p,t.uniforms.uWavePow.value=d,t.uniforms.uWaveEdge.value=h,t.uniforms.uStartY.value=g,t.uniforms.uEndY.value=w,t.uniforms.uLineGap.value=S,t.uniforms.uColorRate.value=x,t.uniforms.uColorFreq.value=C,t.uniforms.uTone1.value.set(...y),t.uniforms.uTone2.value.set(...T),t.uniforms.uBg.value.set(...R),t.uniforms.uAlpha.value=P,t.uniforms.uCursorActive.value=+!!A;let o=1-Math.exp(-a/.15);E.current.x+=(W[0]-E.current.x)*o,E.current.y+=(W[1]-E.current.y)*o,t.uniforms.uPointer.value.set(E.current.x,E.current.y)}),(0,u.jsxs)("mesh",{ref:Y,children:[(0,u.jsx)("planeGeometry",{args:[2,2]}),(0,u.jsx)("shaderMaterial",{vertexShader:i,fragmentShader:s,uniforms:j,transparent:!0})]})},f=({width:e="100%",height:t="100%",className:o,children:n,speed:i=.5,scrollSpeed:s=2,density:f=150,curvature:m=60,curveExponent:p=4,vanishPoint:d=3.5,waveScale:h=50,waveAmplitude:g=2,wavePower:w=6,waveThreshold:S=.35,lineStart:x=-1,lineEnd:C=.5,lineGap:y=.3,colorSpeed:T=7,colorFrequency:R=2,color1:P="#290596",color2:W="#93229D",backgroundColor:A="#000000",opacity:Y=1,cursorInteraction:b=!1})=>{let V=(0,a.useMemo)(()=>v(P),[P]),E=(0,a.useMemo)(()=>v(W),[W]),j=(0,a.useMemo)(()=>v(A),[A]),F=(0,a.useRef)(null),[M,B]=(0,a.useState)([.5,.5]),q=(0,a.useCallback)(e=>{if(!b)return;let u=F.current?.getBoundingClientRect();u&&B([(e.clientX-u.left)/u.width,1-(e.clientY-u.top)/u.height])},[b]);return(0,u.jsxs)("div",{ref:F,className:(0,l.cn)("relative overflow-hidden",o),style:{width:e,height:t,backgroundColor:A},onPointerMove:q,children:[(0,u.jsx)(r.Canvas,{className:"absolute inset-0 h-full w-full",orthographic:!0,camera:{position:[0,0,1],zoom:1,left:-1,right:1,top:1,bottom:-1},gl:{antialias:!0,alpha:!0},children:(0,u.jsx)(c,{speed:i,scrollSpeed:s,density:f,curvature:m,curveExponent:p,vanishPoint:d,waveScale:h,waveAmplitude:g,wavePower:w,waveThreshold:S,lineStart:x,lineEnd:C,lineGap:y,colorSpeed:T,colorFrequency:R,tone1Rgb:V,tone2Rgb:E,bgRgb:j,opacity:Y,pointer:M,cursorInteraction:b})}),n&&(0,u.jsx)("div",{className:"pointer-events-none relative z-10",children:n})]})};f.displayName="RetroLines",e.s(["default",0,f])},43852,e=>{e.n(e.i(77368))}]);