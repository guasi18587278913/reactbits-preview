(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28600,e=>{"use strict";var a=e.i(1950);e.s(["useThree",()=>a.C])},14289,e=>{"use strict";var a=e.i(43476),t=e.i(71645),u=e.i(75056),l=e.i(25234),r=e.i(28600),o=e.i(75157),i=e.i(90072);let n=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,s=`
precision highp float;
varying vec2 vUv;

uniform float uTime;
uniform vec2 uRes;
uniform vec2 uPointer;
uniform float uSpeed;
uniform float uZoom;
uniform float uDotDensity;
uniform float uGridScale;
uniform float uSpiral;
uniform float uRadialWave;
uniform float uAngularWave;
uniform float uPatternDepth;
uniform float uFieldOffset;
uniform float uCutoff;
uniform vec3 uFg;
uniform vec3 uBg;
uniform bool uMono;
uniform float uAlpha;

const float TWO_PI = 6.2831853;
const float HALF_PI = 1.5707963;

float dots(float cx, float cy, float ang) {
  float invLen = 1.0 / sqrt(ang * ang + (1.0 - ang) * (1.0 - ang));
  float ru = cx * ang - cy * (1.0 - ang);
  float rv = cx * (1.0 - ang) + cy * ang;
  ru *= invLen;
  rv *= invLen;
  float density = uDotDensity * uRes.y;
  ru = fract(ru * density) - 0.5;
  rv = fract(rv * density) - 0.5;
  return 1.7 - sqrt(ru * ru + rv * rv) * 4.0;
}

void main() {
  float aspect = uRes.x / uRes.y;
  vec2 st = (vUv - uPointer) * vec2(aspect, 1.0) * uZoom;

  float t = uTime * uSpeed;
  float dist = length(st);
  float ang = atan(st.x, st.y) / TWO_PI + sin(dist + t) * uSpiral;

  float rWaveR = sin(dist * TWO_PI + t * 4.0) * uRadialWave;
  float aWaveR = sin(ang * TWO_PI * 11.0 + t * 4.0) * uAngularWave;
  float patR = sin(ang * TWO_PI * 6.0 + t) * uPatternDepth;
  float fieldR = dist - rWaveR - aWaveR + patR + uFieldOffset;
  float dR = dots(st.x * uGridScale, st.y * uGridScale, 0.12);
  float chR = (fieldR + dR) > uCutoff ? 1.0 : 0.0;

  float rWaveG = sin(dist * TWO_PI * 1.5 + t * 5.0) * uRadialWave;
  float aWaveG = sin(ang * TWO_PI * 13.0 + t * 5.0) * uAngularWave;
  float patG = sin(ang * TWO_PI * 4.0 - t) * uPatternDepth;
  float fieldG = dist - rWaveG - aWaveG - patG + uFieldOffset;
  float dG = dots(st.x * uGridScale, st.y * uGridScale, 0.34);
  float chG = (fieldG + dG) > uCutoff ? 1.0 : 0.0;

  float rWaveB = sin(dist * TWO_PI + t * 8.0) * uRadialWave;
  float aWaveB = sin(ang * TWO_PI * 12.0 + t * 6.0) * uAngularWave;
  float patB = sin(ang * TWO_PI * 5.0) * uPatternDepth;
  float fieldB = dist - rWaveB - aWaveB - patB + uFieldOffset;
  float dB = dots(st.x * uGridScale, st.y * uGridScale, 0.69);
  float chB = (fieldB + dB) > uCutoff ? 1.0 : 0.0;

  vec3 mask = uMono ? vec3(chR) : vec3(chR, chG, chB);
  vec3 result = mix(uBg, uFg, mask);

  gl_FragColor = vec4(result, uAlpha);
}
`;function f(e){let a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return a?[parseInt(a[1],16)/255,parseInt(a[2],16)/255,parseInt(a[3],16)/255]:[0,0,0]}let v=({speed:e,zoom:u,dotDensity:o,gridScale:v,spiralStrength:c,radialWave:d,angularWave:m,patternDepth:g,fieldOffset:p,threshold:h,color:W,backgroundColor:R,monochrome:y,opacity:x,pointer:P,dampening:S})=>{let G=(0,t.useRef)(null),{size:T}=(0,r.useThree)(),O=(0,t.useRef)(new i.Vector2(.5,.5)),B=(0,t.useMemo)(()=>({uTime:{value:0},uRes:{value:new i.Vector2(1,1)},uPointer:{value:new i.Vector2(.5,.5)},uSpeed:{value:.5},uZoom:{value:5},uDotDensity:{value:2e-4},uGridScale:{value:150},uSpiral:{value:.2},uRadialWave:{value:.1},uAngularWave:{value:.4},uPatternDepth:{value:.75},uFieldOffset:{value:-.6},uCutoff:{value:.5},uFg:{value:new i.Vector3(0,0,0)},uBg:{value:new i.Vector3(1,.624,.988)},uMono:{value:!0},uAlpha:{value:1}}),[]);return(0,l.useFrame)((a,t)=>{if(!G.current)return;let l=G.current.material;l.uniforms.uTime.value=a.clock.elapsedTime,l.uniforms.uRes.value.set(T.width,T.height);let r=1-Math.exp(-t/Math.max(S,.001));O.current.x+=(P[0]-O.current.x)*r,O.current.y+=(P[1]-O.current.y)*r,l.uniforms.uPointer.value.set(O.current.x,O.current.y),l.uniforms.uSpeed.value=e,l.uniforms.uZoom.value=u,l.uniforms.uDotDensity.value=o,l.uniforms.uGridScale.value=v,l.uniforms.uSpiral.value=c,l.uniforms.uRadialWave.value=d,l.uniforms.uAngularWave.value=m,l.uniforms.uPatternDepth.value=g,l.uniforms.uFieldOffset.value=p,l.uniforms.uCutoff.value=h,l.uniforms.uMono.value=y,l.uniforms.uAlpha.value=x;let[i,n,s]=f(W);l.uniforms.uFg.value.set(i,n,s);let[B,F,D]=f(R);l.uniforms.uBg.value.set(B,F,D)}),(0,a.jsxs)("mesh",{ref:G,children:[(0,a.jsx)("planeGeometry",{args:[2,2]}),(0,a.jsx)("shaderMaterial",{vertexShader:n,fragmentShader:s,uniforms:B,transparent:!0})]})},c=({width:e="100%",height:l="100%",className:r,children:i,speed:n=.5,zoom:s=5,dotDensity:f=2e-4,gridScale:c=150,spiralStrength:d=.2,radialWave:m=.1,angularWave:g=.4,patternDepth:p=.75,fieldOffset:h=-.6,threshold:W=.5,color:R="#000000",backgroundColor:y="#FF9FFC",monochrome:x=!0,dampening:P=.301,opacity:S=1})=>{let G=(0,t.useRef)(null),[T,O]=(0,t.useState)([.5,.5]),B=(0,t.useCallback)(e=>{let a=G.current?.getBoundingClientRect();a&&O([(e.clientX-a.left)/a.width,1-(e.clientY-a.top)/a.height])},[]);return(0,a.jsxs)("div",{ref:G,className:(0,o.cn)("relative overflow-hidden",r),style:{width:e,height:l},onPointerMove:B,children:[(0,a.jsx)(u.Canvas,{className:"absolute inset-0",gl:{antialias:!0,alpha:!0},orthographic:!0,camera:{position:[0,0,1],zoom:1,left:-1,right:1,top:1,bottom:-1},children:(0,a.jsx)(v,{speed:n,zoom:s,dotDensity:f,gridScale:c,spiralStrength:d,radialWave:m,angularWave:g,patternDepth:p,fieldOffset:h,threshold:W,color:R,backgroundColor:y,monochrome:x,opacity:S,pointer:T,dampening:P})}),i&&(0,a.jsx)("div",{className:"relative z-1",children:i})]})};c.displayName="HalftoneVortex",e.s(["default",0,c])},49684,e=>{e.n(e.i(14289))}]);