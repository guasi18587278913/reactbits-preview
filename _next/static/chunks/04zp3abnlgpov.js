(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28600,e=>{"use strict";var a=e.i(1950);e.s(["useThree",()=>a.C])},28951,e=>{"use strict";var a=e.i(43476),u=e.i(71645),t=e.i(75056),o=e.i(25234),i=e.i(28600),r=e.i(75157),l=e.i(90072);let s=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,n=`
precision highp float;

uniform float uTime;
uniform vec2  uRes;
uniform float uSpeed;
uniform float uWidth;
uniform float uCurve;
uniform float uNoiseScale;
uniform float uNoiseAmt;
uniform int   uOctaves;
uniform vec3  uColor;
uniform vec3  uBg;
uniform float uIntensity;
uniform float uGamma;
uniform float uAlpha;

vec2 hash22(vec2 p) {
  vec3 v = fract(p.xyx * vec3(213.897, 371.253, 517.029));
  v += dot(v, v.yzx + 97.53);
  return fract(vec2(v.x * v.z, v.y * v.z)) * 2.0 - 1.0;
}

float gnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);

  vec2 g00 = hash22(i);
  vec2 g10 = hash22(i + vec2(1.0, 0.0));
  vec2 g01 = hash22(i + vec2(0.0, 1.0));
  vec2 g11 = hash22(i + vec2(1.0, 1.0));

  float n00 = dot(g00, f);
  float n10 = dot(g10, f - vec2(1.0, 0.0));
  float n01 = dot(g01, f - vec2(0.0, 1.0));
  float n11 = dot(g11, f - vec2(1.0, 1.0));

  return mix(mix(n00, n10, u.x), mix(n01, n11, u.x), u.y);
}

float fbm(vec2 p) {
  float sum = 0.0;
  float amp = 0.5;
  float angle = 0.62;
  float ca = cos(angle), sa = sin(angle);
  mat2 rot = mat2(ca, -sa, sa, ca);

  for (int i = 0; i < 6; i++) {
    if (i >= uOctaves) break;
    sum += amp * gnoise(p);
    p = rot * p * 2.13 + 147.3;
    amp *= 0.5;
  }
  return sum;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float aspect = uRes.x / uRes.y;
  float t = uTime * uSpeed;

  float bw = uWidth;
  float bh = uWidth * aspect;

  float fx = (0.5 - abs(uv.x - 0.5)) / bw;
  float fy = (0.5 - abs(uv.y - 0.5)) / bh;

  float edge = max(1.0 - min(fx, fy), 0.0);
  edge = pow(edge, max(uCurve, 1.0));

  vec2 np = uv * uNoiseScale * vec2(1.0, 1.0 / aspect);
  float q = fbm(np + t * 0.31);
  float n = 0.5 + 0.5 * fbm(np + q * 1.7 + t * 0.17);
  n = mix(1.0, n, min(uNoiseAmt, 1.0));

  float strength = edge * n * uIntensity;
  strength = pow(max(strength, 0.0), 1.0 / uGamma);

  vec3 result = mix(uBg, uColor, clamp(strength, 0.0, 1.0));

  gl_FragColor = vec4(result, uAlpha);
}
`;function f(e){let a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return a?[parseInt(a[1],16)/255,parseInt(a[2],16)/255,parseInt(a[3],16)/255]:[0,0,0]}let v=({speed:e,borderWidth:t,falloff:r,noiseScale:f,noiseStrength:v,noiseOctaves:m,colorRgb:c,bgRgb:p,intensity:h,gamma:d,opacity:g})=>{let x=(0,u.useRef)(null),{size:y,viewport:b}=(0,i.useThree)(),C=(0,u.useMemo)(()=>({uTime:{value:0},uRes:{value:new l.Vector2(1,1)},uSpeed:{value:1},uWidth:{value:.125},uCurve:{value:6},uNoiseScale:{value:4},uNoiseAmt:{value:.8},uOctaves:{value:4},uColor:{value:new l.Vector3(.9,.9,.1)},uBg:{value:new l.Vector3(0,0,0)},uIntensity:{value:1},uGamma:{value:2.2},uAlpha:{value:1}}),[]);return(0,o.useFrame)(a=>{if(!x.current)return;let u=x.current.material;u.uniforms.uTime.value=a.clock.elapsedTime,u.uniforms.uRes.value.set(y.width*b.dpr,y.height*b.dpr),u.uniforms.uSpeed.value=e,u.uniforms.uWidth.value=t,u.uniforms.uCurve.value=r,u.uniforms.uNoiseScale.value=f,u.uniforms.uNoiseAmt.value=v,u.uniforms.uOctaves.value=m,u.uniforms.uColor.value.set(...c),u.uniforms.uBg.value.set(...p),u.uniforms.uIntensity.value=h,u.uniforms.uGamma.value=d,u.uniforms.uAlpha.value=g}),(0,a.jsxs)("mesh",{ref:x,children:[(0,a.jsx)("planeGeometry",{args:[2,2]}),(0,a.jsx)("shaderMaterial",{vertexShader:s,fragmentShader:n,uniforms:C,transparent:!0})]})},m=({width:e="100%",height:o="100%",className:i,children:l,speed:s=.1,borderWidth:n=.22,falloff:m=6,noiseScale:c=3,noiseStrength:p=1,noiseOctaves:h=5,color:d="#FF9FFC",backgroundColor:g="#000000",intensity:x=1,gamma:y=2,opacity:b=1})=>{let C=(0,u.useMemo)(()=>f(d),[d]),S=(0,u.useMemo)(()=>f(g),[g]);return(0,a.jsxs)("div",{className:(0,r.cn)("relative overflow-hidden",i),style:{width:e,height:o},children:[(0,a.jsx)(t.Canvas,{className:"absolute inset-0 h-full w-full",orthographic:!0,camera:{position:[0,0,1],zoom:1,left:-1,right:1,top:1,bottom:-1},gl:{antialias:!0,alpha:!0},children:(0,a.jsx)(v,{speed:s,borderWidth:n,falloff:m,noiseScale:c,noiseStrength:p,noiseOctaves:h,colorRgb:C,bgRgb:S,intensity:x,gamma:y,opacity:b})}),l&&(0,a.jsx)("div",{className:"pointer-events-none relative z-1",children:l})]})};m.displayName="FrameBorder",e.s(["default",0,m])},63395,e=>{e.n(e.i(28951))}]);