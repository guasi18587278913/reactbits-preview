(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28600,e=>{"use strict";var a=e.i(1950);e.s(["useThree",()=>a.C])},63178,e=>{"use strict";var a=e.i(71645),t=(e,a,t,o,l,r,u,i)=>{let s=document.documentElement,c=["light","dark"];function n(a){var t;(Array.isArray(e)?e:[e]).forEach(e=>{let t="class"===e,o=t&&r?l.map(e=>r[e]||e):l;t?(s.classList.remove(...o),s.classList.add(r&&r[a]?r[a]:a)):s.setAttribute(e,a)}),t=a,i&&c.includes(t)&&(s.style.colorScheme=t)}if(o)n(o);else try{let e=localStorage.getItem(a)||t,o=u&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;n(o)}catch(e){}},o=a.createContext(void 0),l={setTheme:e=>{},themes:[]};a.memo(({forcedTheme:e,storageKey:o,attribute:l,enableSystem:r,enableColorScheme:u,defaultTheme:i,value:s,themes:c,nonce:n,scriptProps:d})=>{let f=JSON.stringify([l,o,i,e,c,s,r,u]).slice(1,-1);return a.createElement("script",{...d,suppressHydrationWarning:!0,nonce:"u"<typeof window?n:"",dangerouslySetInnerHTML:{__html:`(${t.toString()})(${f})`}})}),e.s(["useTheme",0,()=>{var e;return null!=(e=a.useContext(o))?e:l}])},74316,e=>{"use strict";var a=e.i(43476),t=e.i(71645),o=e.i(75056),l=e.i(25234),r=e.i(28600),u=e.i(63178),i=e.i(90072);let s=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,c=`
uniform float u_time;
uniform vec2 u_resolution;
uniform float u_radius;
uniform float u_narrow;
uniform float u_length;
uniform float u_hazeSpeed;
uniform float u_dustSpeed;
uniform float u_hazeStrength;
uniform float u_hazeFrequency;
uniform float u_dustDensity;
uniform float u_dustSize;
uniform float u_dustOpacity;
uniform float u_edgeFade;
uniform float u_spiralTight;
uniform float u_rotSpeed;
uniform vec3 u_baseColor;
uniform float u_cameraDistance;
uniform bool u_lightMode;

varying vec2 vUv;

bool clipped(in vec3 pos, float clipY, float clipZ) {
  return abs(pos.y) < clipY && abs(pos.z) < clipZ;
}

float iQuadricTypeA(in vec3 ro, in vec3 rd, in vec4 abcd, in float clipY, in float clipZ, out vec3 oNor) {
  vec3 r2 = abcd.xyz * abs(abcd.xyz);
  float k2 = dot(rd, rd * r2);
  float k1 = dot(rd, ro * r2);
  float k0 = dot(ro, ro * r2) - abcd.w;

  float h = k1 * k1 - k2 * k0;
  float nh = step(0.0, h);
  h = sqrt(max(h, 0.0)) * sign(k2);

  float t1 = (-k1 - h) / k2;
  float t2 = (-k1 + h) / k2;

  vec3 pos1 = ro + t1 * rd;
  vec3 pos2 = ro + t2 * rd;

  float v1 = float(clipped(pos1, clipY, clipZ)) * step(0.0, t1);
  float v2 = float(clipped(pos2, clipY, clipZ)) * step(0.0, t2);
  float s = step(0.0, v1);

  float t = mix(t2, t1, s) * nh;

  vec3 nor1 = normalize(pos1 * r2);
  vec3 nor2 = normalize(pos2 * r2);
  oNor = mix(nor2, nor1, s);

  return mix(-1.0, t, step(0.0, v1 + v2));
}

float hash21(vec2 p) {
  p = fract(p * vec2(345.42, 137.25));
  p += dot(p, p + 34.19);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);

  float a = hash21(i);
  float b = hash21(i + vec2(1, 0));
  float c = hash21(i + vec2(0, 1));
  float d = hash21(i + vec2(1, 1));

  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float s = 0.0;
  float a = 0.4;
  for (int i = 0; i < 3; i++) {
    s += noise(p) * a;
    p *= 1.28;
    a *= 0.512;
  }
  return s;
}

void main() {
  vec4 kShape = vec4(1.0 / u_radius, -1.0 / u_narrow, 1.0 / u_radius, 1.0);

  vec2 ndc = (vUv - 0.5) * 2.0;
  ndc.x *= u_resolution.x / u_resolution.y;

  vec3 ro = vec3(0.0, 0.0, u_cameraDistance);
  vec3 ta = vec3(0.0, 0.0, 0.0);

  vec3 ww = normalize(ta - ro);
  vec3 uu = normalize(cross(ww, vec3(0, 1, 0)));
  vec3 vv = cross(uu, ww);

  vec3 rd = normalize(ndc.x * uu + ndc.y * vv + 3.0 * ww);

  float ang = 1.5707963;
  float c = cos(ang), s = sin(ang);
  ro = vec3(c * ro.x - s * ro.y, s * ro.x + c * ro.y, ro.z);
  rd = vec3(c * rd.x - s * rd.y, s * rd.x + c * rd.y, rd.z);

  vec3 nor;
  float t = iQuadricTypeA(ro, rd, kShape, u_length, u_length, nor);
  float valid = step(0.0, t);

  vec3 pos = ro + t * rd;

  float angle = atan(pos.z, pos.x);
  float cy = pos.y;
  float angle01 = angle * 0.15915494 + 0.5;
  float flow = cy - u_time * u_hazeSpeed;

  float swirl = angle + cy * u_spiralTight + u_time * u_rotSpeed;
  vec2 cyc = vec2(cos(swirl), sin(swirl));

  vec2 h1 = vec2(cyc.x * u_hazeFrequency, flow * 2.0 + cyc.y * 0.75);
  vec2 h2 = vec2(cyc.y * (u_hazeFrequency * 0.7), flow * 1.37 - cyc.x * 0.5);
  float haze = pow(mix(fbm(h1), fbm(h2), 0.5), 2.0) * u_hazeStrength;

  float u = cyc.x * 0.5 + 0.5;
  float v = cyc.y * 0.5 + 0.5;

  vec2 uid = vec2(
    floor(u * u_dustDensity),
    floor(v * u_dustDensity + flow * 0.1)
  );

  float r1 = hash21(uid * 1.373 + 1.7);
  float r2 = hash21(uid * 2.911 + 3.1);
  float r3 = hash21(uid * 4.277 + 5.9);

  float local = cy + (r1 - 0.5) - u_time * u_dustSpeed * 0.5;
  float d = abs(fract(local) - 0.5);

  float size = mix(u_dustSize * 0.6, u_dustSize * 1.4, r2);
  float opacity = mix(u_dustOpacity * 0.4, u_dustOpacity * 0.8, r3);

  float core = exp(-d * size);
  float halo = exp(-d * size * 0.35);
  float dust = (core * 0.1 + halo * 0.8) * opacity;

  float seamFade = smoothstep(0.0, 0.2, min(angle01, 1.0 - angle01));
  dust *= seamFade;

  float fres = pow(1.0 - abs(dot(nor, -rd)), 1.35);
  float edgeFadeVal = smoothstep(0.0, 0.9, fres);
  float fadeLen = smoothstep(u_length * 0.55, 0.25, length(pos));

  vec3 col = (vec3(haze) + vec3(dust)) * fadeLen * valid;
  col *= 1.0 - edgeFadeVal * u_edgeFade;
  col *= u_baseColor;
  col = sqrt(col);

  float alpha = max(max(col.r, col.g), col.b);
  alpha = clamp(alpha * 2.0, 0.0, 1.0);

  if (u_lightMode) {
    float luminance = dot(col, vec3(0.299, 0.587, 0.114));
    col = mix(vec3(luminance), col, 2.5);
    col = pow(col, vec3(0.7));
    col = clamp(col * 2.0, 0.0, 1.0);
    alpha = clamp(luminance * 6.0, 0.0, 1.0);
  }

  gl_FragColor = vec4(col, alpha);
}
`,n=({radius:e,narrow:o,length:u,hazeSpeed:n,dustSpeed:d,hazeStrength:f,hazeFrequency:v,dustDensity:h,dustSize:p,dustOpacity:m,edgeFade:_,spiralTight:g,rotSpeed:y,baseColor:x,cameraDistance:z,lightMode:S})=>{let w=(0,t.useRef)(null),b=(0,t.useRef)(null),{viewport:T,size:k}=(0,r.useThree)(),F=(0,t.useMemo)(()=>({u_time:{value:0},u_resolution:{value:new i.Vector2},u_radius:{value:.5},u_narrow:{value:2},u_length:{value:8},u_hazeSpeed:{value:3},u_dustSpeed:{value:2},u_hazeStrength:{value:.1},u_hazeFrequency:{value:32},u_dustDensity:{value:128},u_dustSize:{value:64},u_dustOpacity:{value:.1},u_edgeFade:{value:1.28},u_spiralTight:{value:.32},u_rotSpeed:{value:.32},u_baseColor:{value:new i.Vector3},u_cameraDistance:{value:8},u_lightMode:{value:!1}}),[]);return(0,l.useFrame)(a=>{if(!b.current)return;let t=b.current.uniforms;t.u_time.value=a.clock.elapsedTime,t.u_resolution.value.set(k.width,k.height),t.u_radius.value=e,t.u_narrow.value=o,t.u_length.value=u,t.u_hazeSpeed.value=n,t.u_dustSpeed.value=d,t.u_hazeStrength.value=f,t.u_hazeFrequency.value=v,t.u_dustDensity.value=h,t.u_dustSize.value=p,t.u_dustOpacity.value=m,t.u_edgeFade.value=_,t.u_spiralTight.value=g,t.u_rotSpeed.value=y,t.u_baseColor.value.set(...x),t.u_cameraDistance.value=z,t.u_lightMode.value=S}),(0,a.jsxs)("mesh",{ref:w,children:[(0,a.jsx)("planeGeometry",{args:[T.width,T.height]}),(0,a.jsx)("shaderMaterial",{ref:b,vertexShader:s,fragmentShader:c,uniforms:F,transparent:!0})]})},d=({radius:e=1.5,narrow:t=1.8,length:l=10,hazeSpeed:r=.5,dustSpeed:i=1,hazeStrength:s=.25,hazeFrequency:c=100,dustDensity:d=300,dustSize:f=100,dustOpacity:v=.1,edgeFade:h=2,spiralTight:p=.5,rotSpeed:m=0,baseColor:_=[.753,.518,.988],baseColorLight:g=[.267,0,.667],cameraDistance:y=8.5,className:x})=>{let{resolvedTheme:z}=(0,u.useTheme)(),S="light"===z;return(0,a.jsx)("div",{className:x,style:{width:"100%",height:"100%",background:S?"#fff":"#0b0b0b"},children:(0,a.jsx)(o.Canvas,{className:"w-full h-full",gl:{antialias:!0,alpha:!0},children:(0,a.jsx)(n,{radius:e,narrow:t,length:l,hazeSpeed:r,dustSpeed:i,hazeStrength:s,hazeFrequency:c,dustDensity:d,dustSize:f,dustOpacity:v,edgeFade:h,spiralTight:p,rotSpeed:m,baseColor:S?g:_,cameraDistance:y,lightMode:S})})})};d.displayName="WarpTwister",e.s(["default",0,d])},29344,e=>{e.n(e.i(74316))}]);