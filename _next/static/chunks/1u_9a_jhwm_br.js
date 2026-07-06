(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28600,e=>{"use strict";var t=e.i(1950);e.s(["useThree",()=>t.C])},84828,e=>{"use strict";var t=e.i(43476),o=e.i(71645),a=e.i(75056),i=e.i(25234),u=e.i(28600),l=e.i(90072),r=e.i(75157);let s=`
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
uniform float uComplexity;
uniform float uSwirl;
uniform float uZoom;
uniform vec3  uTint;
uniform float uHueRotation;
uniform float uSaturation;
uniform float uBrightness;
uniform vec3  uBg;
uniform float uAlpha;

varying vec2 vUv;

vec2 spin(vec2 v, float a) {
  return cos(a) * v + sin(a) * vec2(-v.y, v.x);
}

float sfrac(float x, float k) {
  float f = fract(x);
  return f * smoothstep(1.0, k, f);
}

vec3 hueRotate(vec3 col, float angle) {
  return mix(vec3(dot(vec3(0.333), col)), col, cos(angle))
       + cross(vec3(0.577), col) * sin(angle);
}

vec3 computeOrb(vec3 p, float t) {
  vec3 v = vec3(0);
  float x = 0.0;
  float y = 0.0;
  float it = uComplexity;
  float halo = smoothstep(0.5, 0.0, p.z);
  vec3 c = vec3(0);

  for (float i = 1.0; i < 9.0; i += 1.0) {
    if (i > it) break;

    p.xy = spin(p.xy, p.z * uSwirl + t / i * 0.4);
    v = v * 0.5 + 0.5;
    v.xz = spin(v.xz, v.y - x + t / i + p.y);
    p.xy = spin(p.xy, length(v.xy) - x);

    x += sfrac(v.z, 0.9 - sin(y * 1.5) * 0.2 + p.z * 0.1) / it / (1.0 + x + x * x);
    y += sfrac(-v.z, 0.9 + sin(x) * 0.1) / it;

    c += exp(vec3(0.7, 1.9, 4.0) * log(max(x, 1e-8)));
  }

  float xy = (x - y) * (x - y);
  c += xy * sqrt(max(c, 0.0));
  c = clamp(c, 0.0, 1.0);

  c = hueRotate(c, uHueRotation);

  c = mix(vec3(dot(c, vec3(0.2, 0.7, 0.1))), c, uSaturation * (1.0 + y));
  c = max(c, 0.0);

  float bgLum = dot(uBg, vec3(0.2, 0.7, 0.1));
  float rimLift = bgLum * 0.5;
  c = mix(c, sqrt(max(c, 0.0)) * 0.7 + rimLift * 0.6, halo);
  c = mix(c, sqrt(max(c, 0.0)) * 0.5 + rimLift, sqrt(halo));

  c *= uTint;

  return c;
}

void main() {
  vec4 bg = vec4(uBg, uAlpha);
  vec2 uv = (gl_FragCoord.xy * 2.0 - uRes) / min(uRes.x, uRes.y) * uZoom;
  float t = uTime * uSpeed;

  float l2 = dot(uv, uv);
  float l = sqrt(l2);

  if (l > 1.0) {
    gl_FragColor = bg;
    return;
  }

  vec3 sn = vec3(uv, sqrt(1.0 - l2));
  vec3 n = computeOrb(sn, t) * uBrightness;

  float f = length(vec2(dFdx(l), dFdy(l)));
  float edge = smoothstep(1.0 - f, 1.0 - f * 3.0, l);

  gl_FragColor = mix(bg, vec4(sqrt(max(n, 0.0)), uAlpha), edge);
}
`,c=({speed:e,complexity:a,swirl:r,zoom:c,tintRgb:v,hueRotation:f,saturation:m,brightness:p,bgRgb:x,opacity:g})=>{let h=(0,o.useRef)(null),{size:d,viewport:y}=(0,u.useThree)(),R=(0,o.useMemo)(()=>({uTime:{value:0},uRes:{value:new l.Vector2},uSpeed:{value:e},uComplexity:{value:a},uSwirl:{value:r},uZoom:{value:c},uTint:{value:new l.Vector3(...v)},uHueRotation:{value:f},uSaturation:{value:m},uBrightness:{value:p},uBg:{value:new l.Vector3(...x)},uAlpha:{value:g}}),[]);return(0,i.useFrame)(t=>{let o=h.current?.material;o&&(o.uniforms.uTime.value=t.clock.elapsedTime,o.uniforms.uRes.value.set(d.width*y.dpr,d.height*y.dpr),o.uniforms.uSpeed.value=e,o.uniforms.uComplexity.value=a,o.uniforms.uSwirl.value=r,o.uniforms.uZoom.value=c,o.uniforms.uTint.value.set(...v),o.uniforms.uHueRotation.value=f,o.uniforms.uSaturation.value=m,o.uniforms.uBrightness.value=p,o.uniforms.uBg.value.set(...x),o.uniforms.uAlpha.value=g)}),(0,t.jsxs)("mesh",{ref:h,children:[(0,t.jsx)("planeGeometry",{args:[2,2]}),(0,t.jsx)("shaderMaterial",{vertexShader:s,fragmentShader:n,uniforms:R,transparent:!0})]})},v=e=>{let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[0,0,0]},f=({width:e="100%",height:i="100%",className:u,children:l,speed:s=.5,complexity:n=3,swirl:f=2,zoom:m=1.75,color:p="#FFFFFF",hueRotation:x=4.3,saturation:g=0,brightness:h=2,backgroundColor:d="#000000",opacity:y=1})=>{let R=(0,o.useMemo)(()=>v(p),[p]),b=(0,o.useMemo)(()=>v(d),[d]);return(0,t.jsxs)("div",{className:(0,r.cn)("relative overflow-hidden",u),style:{width:e,height:i},children:[(0,t.jsx)(a.Canvas,{orthographic:!0,camera:{position:[0,0,1],zoom:1,left:-1,right:1,top:1,bottom:-1},gl:{antialias:!0,alpha:!0},className:"absolute! inset-0 w-full h-full",children:(0,t.jsx)(c,{speed:s,complexity:n,swirl:f,zoom:m,tintRgb:R,hueRotation:x,saturation:g,brightness:h,bgRgb:b,opacity:y})}),l&&(0,t.jsx)("div",{className:"relative z-1 pointer-events-none",children:l})]})};f.displayName="AgenticBall",e.s(["default",0,f])},44186,e=>{e.n(e.i(84828))}]);