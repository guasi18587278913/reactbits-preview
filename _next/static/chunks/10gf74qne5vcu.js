(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28600,e=>{"use strict";var o=e.i(1950);e.s(["useThree",()=>o.C])},63178,e=>{"use strict";var o=e.i(71645),t=(e,o,t,i,l,r,n,a)=>{let s=document.documentElement,u=["light","dark"];function c(o){var t;(Array.isArray(e)?e:[e]).forEach(e=>{let t="class"===e,i=t&&r?l.map(e=>r[e]||e):l;t?(s.classList.remove(...i),s.classList.add(r&&r[o]?r[o]:o)):s.setAttribute(e,o)}),t=o,a&&u.includes(t)&&(s.style.colorScheme=t)}if(i)c(i);else try{let e=localStorage.getItem(o)||t,i=n&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;c(i)}catch(e){}},i=o.createContext(void 0),l={setTheme:e=>{},themes:[]};o.memo(({forcedTheme:e,storageKey:i,attribute:l,enableSystem:r,enableColorScheme:n,defaultTheme:a,value:s,themes:u,nonce:c,scriptProps:v})=>{let m=JSON.stringify([l,i,a,e,u,s,r,n]).slice(1,-1);return o.createElement("script",{...v,suppressHydrationWarning:!0,nonce:"u"<typeof window?c:"",dangerouslySetInnerHTML:{__html:`(${t.toString()})(${m})`}})}),e.s(["useTheme",0,()=>{var e;return null!=(e=o.useContext(i))?e:l}])},36619,e=>{"use strict";var o=e.i(43476),t=e.i(71645),i=e.i(75056),l=e.i(25234),r=e.i(28600),n=e.i(63178),a=e.i(90072);let s=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,u=`
uniform float u_time;
uniform vec2 u_resolution;
uniform int u_columns;
uniform bool u_invertColumns;
uniform bool u_fuzzNoise;
uniform bool u_gridProximityColor;
uniform vec3 u_baseColor;
uniform vec3 u_proximityColor;
uniform float u_speed;
uniform float u_noiseScale;
uniform float u_fuzzIntensity;
uniform float u_edgeSharpness;
uniform float u_noisePower;
uniform float u_colorBleed;
uniform bool u_lightMode;

varying vec2 vUv;

float mapRange(float minIn, float maxIn, float val, float minOut, float maxOut) {
  float rangeIn = maxIn - minIn;
  float rangeOut = maxOut - minOut;
  return ((val - minIn) * rangeOut / rangeIn) + minOut;
}

float mapSin(float val, float minOut, float maxOut) {
  return mapRange(-1.0, 1.0, sin(val), minOut, maxOut);
}

float snapFloor(float val, float snapSize) {
  return floor(val / snapSize) * snapSize;
}

vec4 permute(vec4 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

  i = mod(i, 289.0);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 1.0 / 7.0;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

void main() {
  float aspectRatio = u_resolution.x / u_resolution.y;
  vec2 coord = vUv - 0.5;
  coord.x *= aspectRatio;

  float time = u_time * u_speed;
  float columnWidth = 1.0 / float(u_columns);
  vec3 finalColor = vec3(1.0);

  vec2 noiseScaleVec = vec2(
    5.5 + mapSin(time / 5.0, -0.4, 0.3),
    2.2 + mapSin(time / 5.0, -0.05, 0.05)
  ) * u_noiseScale;
  float noiseTimeScale = 0.2;
  vec2 noiseOffset = vec2(
    mapSin(sin(time / 3.5), -0.2, 0.1),
    time / 90.0
  );

  vec3 noiseInputVec = vec3(coord + noiseOffset, time * noiseTimeScale);
  float sphereStrength = snoise(noiseInputVec * vec3(noiseScaleVec, 1.0));
  sphereStrength = pow(max(sphereStrength, 0.0), u_noisePower);
  sphereStrength *= 2.1;

  vec2 fuzzNoiseScale = vec2(750.0 * u_fuzzIntensity);
  vec2 fuzzNoiseOffset = vec2(time / 500.0);
  vec3 fuzzNoiseInputVec = vec3(coord + fuzzNoiseOffset, time * noiseTimeScale);
  float fuzzNoiseValue = snoise(fuzzNoiseInputVec * vec3(fuzzNoiseScale, 1.0));

  float column = snapFloor(coord.x, columnWidth);
  float rawDist = abs(coord.x - column - columnWidth / 2.0) * u_edgeSharpness;
  float distFromColCenter = exp(-pow(rawDist, 0.85));
  distFromColCenter = pow(distFromColCenter, 1.0 / max(u_colorBleed, 0.1));

  vec3 colorOffset = vec3(
    0.55 * snoise(noiseInputVec * vec3(noiseScaleVec * 0.8, 1.0)),
    0.02 * snoise(noiseInputVec * vec3(noiseScaleVec, 1.0)),
    0.02 * snoise(noiseInputVec * vec3(noiseScaleVec, 1.0))
  );

  float gridProximityStrength = 0.0;
  if (u_gridProximityColor) {
    gridProximityStrength = distFromColCenter;
    colorOffset += u_proximityColor * gridProximityStrength;
  }

  finalColor *= sphereStrength * (u_baseColor + colorOffset);

  float colDist = distFromColCenter;

  if (u_invertColumns) {
    colDist = 1.0 - colDist;
  }

  finalColor *= vec3(colDist);

  if (u_fuzzNoise) {
    float fuzz = 1.0 - fuzzNoiseValue;
    fuzz = mix(1.0, fuzz, exp(-gridProximityStrength * 3.0));
    finalColor *= vec3(fuzz);
  }

  if (u_lightMode) {
    float luminance = dot(finalColor, vec3(0.299, 0.587, 0.114));
    float satBoost = 3.0;
    finalColor = mix(vec3(luminance), finalColor, satBoost);
    finalColor = pow(finalColor, vec3(0.6));
    finalColor = clamp(finalColor * 1.8, 0.0, 1.0);
    float alpha = clamp(luminance * 4.0, 0.0, 1.0);
    gl_FragColor = vec4(finalColor, alpha);
  } else {
    gl_FragColor = vec4(finalColor, 1.0);
  }
}
`,c=({columns:e,invertColumns:i,fuzzNoise:n,gridProximityColor:c,baseColor:v,proximityColor:m,speed:f,noiseScale:x,fuzzIntensity:d,edgeSharpness:p,noisePower:h,colorBleed:y,lightMode:z})=>{let _=(0,t.useRef)(null),g=(0,t.useRef)(null),{viewport:C,size:S}=(0,r.useThree)(),w=(0,t.useMemo)(()=>({u_time:{value:0},u_resolution:{value:new a.Vector2},u_columns:{value:6},u_invertColumns:{value:!1},u_fuzzNoise:{value:!0},u_gridProximityColor:{value:!0},u_baseColor:{value:new a.Vector3},u_proximityColor:{value:new a.Vector3},u_speed:{value:1},u_noiseScale:{value:1},u_fuzzIntensity:{value:1},u_edgeSharpness:{value:40},u_noisePower:{value:1.5},u_colorBleed:{value:1},u_lightMode:{value:!1}}),[]);return(0,l.useFrame)(o=>{if(!g.current)return;let t=g.current.uniforms;t.u_time.value=o.clock.elapsedTime,t.u_resolution.value.set(S.width,S.height),t.u_columns.value=e,t.u_invertColumns.value=i,t.u_fuzzNoise.value=n,t.u_gridProximityColor.value=c,t.u_baseColor.value.set(...v),t.u_proximityColor.value.set(...m),t.u_speed.value=f,t.u_noiseScale.value=x,t.u_fuzzIntensity.value=d,t.u_edgeSharpness.value=p,t.u_noisePower.value=h,t.u_colorBleed.value=y,t.u_lightMode.value=z}),(0,o.jsxs)("mesh",{ref:_,children:[(0,o.jsx)("planeGeometry",{args:[C.width,C.height]}),(0,o.jsx)("shaderMaterial",{ref:g,vertexShader:s,fragmentShader:u,uniforms:w,transparent:!0})]})},v=({columns:e=3,invertColumns:t=!1,fuzzNoise:l=!0,gridProximityColor:r=!1,baseColor:a=[.7882,.2,1],baseColorLight:s=[.6824,0,1],proximityColor:u=[1,0,0],proximityColorLight:v=[.8,.3,.3],speed:m=.5,noiseScale:f=.4,fuzzIntensity:x=.5,edgeSharpness:d=50,noisePower:p=1.5,colorBleed:h=1,className:y})=>{let{resolvedTheme:z}=(0,n.useTheme)(),_="light"===z;return(0,o.jsx)("div",{className:y,style:{width:"100%",height:"100%",background:_?"#fff":"#0b0b0b"},children:(0,o.jsx)(i.Canvas,{className:"w-full h-full",gl:{antialias:!0,alpha:!0},children:(0,o.jsx)(c,{columns:e,invertColumns:t,fuzzNoise:l,gridProximityColor:r,baseColor:_?s:a,proximityColor:_?v:u,speed:m,noiseScale:f,fuzzIntensity:x,edgeSharpness:d,noisePower:p,colorBleed:h,lightMode:_})})})};v.displayName="ShadowBars",e.s(["default",0,v])},15559,e=>{e.n(e.i(36619))}]);