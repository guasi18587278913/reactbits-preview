(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28600,e=>{"use strict";var o=e.i(1950);e.s(["useThree",()=>o.C])},63178,e=>{"use strict";var o=e.i(71645),r=(e,o,r,a,t,u,n,l)=>{let i=document.documentElement,s=["light","dark"];function c(o){var r;(Array.isArray(e)?e:[e]).forEach(e=>{let r="class"===e,a=r&&u?t.map(e=>u[e]||e):t;r?(i.classList.remove(...a),i.classList.add(u&&u[o]?u[o]:o)):i.setAttribute(e,o)}),r=o,l&&s.includes(r)&&(i.style.colorScheme=r)}if(a)c(a);else try{let e=localStorage.getItem(o)||r,a=n&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;c(a)}catch(e){}},a=o.createContext(void 0),t={setTheme:e=>{},themes:[]};o.memo(({forcedTheme:e,storageKey:a,attribute:t,enableSystem:u,enableColorScheme:n,defaultTheme:l,value:i,themes:s,nonce:c,scriptProps:v})=>{let f=JSON.stringify([t,a,l,e,s,i,u,n]).slice(1,-1);return o.createElement("script",{...v,suppressHydrationWarning:!0,nonce:"u"<typeof window?c:"",dangerouslySetInnerHTML:{__html:`(${r.toString()})(${f})`}})}),e.s(["useTheme",0,()=>{var e;return null!=(e=o.useContext(a))?e:t}])},84820,e=>{"use strict";var o=e.i(43476),r=e.i(71645),a=e.i(75056),t=e.i(25234),u=e.i(28600),n=e.i(90072),l=e.i(63178),i=e.i(75157);let s=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,c=`
precision highp float;

uniform float u_time;
uniform vec2 u_resolution;
uniform float u_speed;
uniform float u_waveCount;
uniform float u_waveAmplitude;
uniform float u_waveFrequency;
uniform float u_lineThickness;
uniform float u_grainIntensity;
uniform vec3 u_startColor;
uniform vec3 u_endColor;
uniform vec3 u_backgroundColor;
uniform float u_brightness;
uniform float u_speedVariation;
uniform float u_waveWidth;
uniform float u_scale;

varying vec2 vUv;

float generateNoise(vec2 position) {
  vec2 seed = vec2(12.9898, 78.233);
  float dotProduct = dot(position, seed);
  return fract(sin(dotProduct) * 43758.5453);
}

float applyGrain(vec2 position) {
  return (generateNoise(position) * 2.0 - 1.0) / 256.0;
}

vec4 calculateWaveLine(vec2 coord, float animSpeed, float horizontalScale, vec3 color) {
  float waveOffset = sin(u_time * animSpeed + coord.x * horizontalScale * u_waveFrequency) * u_waveAmplitude;
  float edgeFalloff = smoothstep(1.0, 0.0, abs(coord.x));
  coord.y += waveOffset * edgeFalloff;

  float lineIntensity = smoothstep(u_lineThickness, 0.0, abs(coord.y));

  float yFade = smoothstep(1.0, 0.2, abs(coord.y));
  float xFade = smoothstep(1.0, 0.3, abs(coord.x));
  float combinedFade = yFade * xFade;

  return vec4(color * lineIntensity * combinedFade, 1.0);
}

void main() {
  vec2 coord = vUv * 2.0 - 1.0;
  coord.x *= u_resolution.x / u_resolution.y;

  coord /= u_scale;

  coord.x /= u_waveWidth;

  vec4 colorAccumulator = vec4(0.0);

  for (float i = 0.0; i <= 50.0; i += 1.0) {
    if (i >= u_waveCount) break;

    float progress = i / u_waveCount * 2.0;

    float lineSpeed = u_speed + progress * u_speedVariation;

    float colorMix = i / u_waveCount;
    vec3 waveColor = mix(u_startColor, u_endColor, colorMix);

    colorAccumulator += calculateWaveLine(coord, lineSpeed, progress, waveColor);
  }

  vec3 waveColor = colorAccumulator.rgb * u_brightness;

  float waveIntensity = clamp(length(waveColor), 0.0, 1.0);
  float grain = applyGrain(coord) * u_grainIntensity * waveIntensity;
  waveColor += vec3(grain);

  float bgLuminance = dot(u_backgroundColor, vec3(0.299, 0.587, 0.114));
  vec3 finalColor;
  if (bgLuminance > 0.5) {
    float waveAlpha = clamp(length(waveColor), 0.0, 1.0);
    finalColor = mix(u_backgroundColor, waveColor, waveAlpha);
  } else {
    finalColor = u_backgroundColor + waveColor;
  }

  gl_FragColor = vec4(finalColor, 1.0);
}
`,v=({speed:e,waveCount:a,waveAmplitude:l,waveFrequency:i,lineThickness:v,grainIntensity:f,startColor:d,endColor:m,backgroundColor:h,brightness:_,speedVariation:p,waveWidth:g,scale:w})=>{let C=(0,r.useRef)(null),y=(0,r.useRef)(null),{viewport:b}=(0,u.useThree)(),x=(0,r.useMemo)(()=>({u_time:{value:0},u_resolution:{value:new n.Vector2(100*b.width,100*b.height)},u_speed:{value:e},u_waveCount:{value:a},u_waveAmplitude:{value:l},u_waveFrequency:{value:i},u_lineThickness:{value:v},u_grainIntensity:{value:f},u_startColor:{value:new n.Color(d)},u_endColor:{value:new n.Color(m)},u_backgroundColor:{value:new n.Color(h)},u_brightness:{value:_},u_speedVariation:{value:p},u_waveWidth:{value:g},u_scale:{value:w}}),[]);return(0,t.useFrame)(o=>{y.current&&(y.current.uniforms.u_time.value=o.clock.elapsedTime,y.current.uniforms.u_resolution.value.set(100*b.width,100*b.height),y.current.uniforms.u_speed.value=e,y.current.uniforms.u_waveCount.value=a,y.current.uniforms.u_waveAmplitude.value=l,y.current.uniforms.u_waveFrequency.value=i,y.current.uniforms.u_lineThickness.value=v,y.current.uniforms.u_grainIntensity.value=f,y.current.uniforms.u_startColor.value.set(d),y.current.uniforms.u_endColor.value.set(m),y.current.uniforms.u_backgroundColor.value.set(h),y.current.uniforms.u_brightness.value=_,y.current.uniforms.u_speedVariation.value=p,y.current.uniforms.u_waveWidth.value=g,y.current.uniforms.u_scale.value=w)}),(0,o.jsxs)("mesh",{ref:C,scale:[b.width,b.height,1],children:[(0,o.jsx)("planeGeometry",{args:[1,1]}),(0,o.jsx)("shaderMaterial",{ref:y,vertexShader:s,fragmentShader:c,uniforms:x})]})},f=({width:e="100%",height:r="100%",className:t="",speed:u=.5,waveCount:n=25,waveAmplitude:s=.85,waveFrequency:c=4,lineThickness:f=.2,grainIntensity:d=50,startColor:m="#ff6666",endColor:h="#6666ff",lightBackground:_="#ffffff",darkBackground:p="#000000",brightness:g=1,speedVariation:w=.006,waveWidth:C=3.5,scale:y=.6})=>{let{resolvedTheme:b}=(0,l.useTheme)(),x="number"==typeof e?`${e}px`:e,k="number"==typeof r?`${r}px`:r;return(0,o.jsx)("div",{className:(0,i.cn)("relative overflow-hidden",t),style:{width:x,height:k},children:(0,o.jsx)(a.Canvas,{className:"absolute inset-0 h-full w-full",gl:{antialias:!0,alpha:!1},camera:{position:[0,0,1],fov:75},children:(0,o.jsx)(v,{speed:u,waveCount:n,waveAmplitude:s,waveFrequency:c,lineThickness:f,grainIntensity:d,startColor:m,endColor:h,backgroundColor:"dark"===b?p:_,brightness:g,speedVariation:w,waveWidth:C,scale:y})})})};f.displayName="GrainWave",e.s(["default",0,f])},83551,e=>{e.n(e.i(84820))}]);