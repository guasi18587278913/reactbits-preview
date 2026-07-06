(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28600,e=>{"use strict";var t=e.i(1950);e.s(["useThree",()=>t.C])},63178,e=>{"use strict";var t=e.i(71645),u=(e,t,u,o,r,a,i,l)=>{let n=document.documentElement,s=["light","dark"];function c(t){var u;(Array.isArray(e)?e:[e]).forEach(e=>{let u="class"===e,o=u&&a?r.map(e=>a[e]||e):r;u?(n.classList.remove(...o),n.classList.add(a&&a[t]?a[t]:t)):n.setAttribute(e,t)}),u=t,l&&s.includes(u)&&(n.style.colorScheme=u)}if(o)c(o);else try{let e=localStorage.getItem(t)||u,o=i&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;c(o)}catch(e){}},o=t.createContext(void 0),r={setTheme:e=>{},themes:[]};t.memo(({forcedTheme:e,storageKey:o,attribute:r,enableSystem:a,enableColorScheme:i,defaultTheme:l,value:n,themes:s,nonce:c,scriptProps:f})=>{let m=JSON.stringify([r,o,l,e,s,n,a,i]).slice(1,-1);return t.createElement("script",{...f,suppressHydrationWarning:!0,nonce:"u"<typeof window?c:"",dangerouslySetInnerHTML:{__html:`(${u.toString()})(${m})`}})}),e.s(["useTheme",0,()=>{var e;return null!=(e=t.useContext(o))?e:r}])},54055,e=>{"use strict";var t=e.i(43476),u=e.i(71645),o=e.i(75056),r=e.i(25234),a=e.i(28600),i=e.i(90072),l=e.i(63178),n=e.i(75157);let s=`
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
uniform int u_iterations;
uniform float u_waveFrequency;
uniform float u_depthStep;
uniform float u_lineThickness;
uniform float u_waveAmplitude;
uniform vec3 u_lineColor;
uniform vec3 u_backgroundColor;
uniform float u_brightness;
uniform float u_contrast;
uniform float u_offsetX;
uniform float u_offsetY;
uniform float u_scale;
uniform float u_opacity;

varying vec2 vUv;

void main() {
  float time = u_time * u_speed;
  vec2 resolution = u_resolution;

  vec3 accumulator = vec3(0.0);
  float depth = time;
  float magnitude = 0.0;

  vec2 baseCoord = (vUv - 0.5) * 2.0;
  baseCoord.x *= resolution.x / resolution.y;
  baseCoord *= u_scale;
  baseCoord += vec2(u_offsetX, u_offsetY);

  for (int i = 0; i < 100; i++) {
    if (i >= u_iterations) break;

    vec2 coord = baseCoord;
    vec2 waveCoord = coord;

    coord -= waveCoord.x + 0.1;
    coord.x *= resolution.x / resolution.y;

    depth += u_depthStep;
    magnitude = length(coord);

    float phase1 = depth * 0.7;
    float phase2 = depth * 1.3;
    float wave1 = sin(phase1) * 0.5 + cos(phase2) * 0.5 + 1.5;
    float wave2 = sin(magnitude * u_waveFrequency - depth) * 0.7 + cos(magnitude * u_waveFrequency * 0.5 + depth * 0.3) * 0.3;
    waveCoord += coord / max(magnitude, 0.01) * wave1 * wave2 * u_waveAmplitude;

    vec2 gridPos = mod(waveCoord, 1.0) - 0.5;
    float lineIntensity = u_lineThickness / length(gridPos);

    if (i == 0) accumulator.r = lineIntensity;
    else if (i == 1) accumulator.g = lineIntensity;
    else if (i == 2) accumulator.b = lineIntensity;
    else {
      accumulator += vec3(lineIntensity) * 0.01;
    }
  }

  accumulator = accumulator / max(magnitude, 0.001);

  accumulator = (accumulator - 0.5) * u_contrast + 0.5;
  accumulator *= u_brightness;

  vec3 finalColor = accumulator * u_lineColor;

  float alpha = clamp(length(accumulator) * u_opacity, 0.0, 1.0);
  finalColor = mix(u_backgroundColor, finalColor, alpha);

  gl_FragColor = vec4(finalColor, 1.0);
}
`,f=({speed:e,iterations:o,waveFrequency:l,depthStep:n,lineThickness:f,waveAmplitude:m,lineColor:v,backgroundColor:d,brightness:h,contrast:_,offsetX:p,offsetY:g,scale:y,opacity:w})=>{let C=(0,u.useRef)(null),b=(0,u.useRef)(null),{viewport:x}=(0,a.useThree)(),T=(0,u.useMemo)(()=>({u_time:{value:0},u_resolution:{value:new i.Vector2(100*x.width,100*x.height)},u_speed:{value:e},u_iterations:{value:o},u_waveFrequency:{value:l},u_depthStep:{value:n},u_lineThickness:{value:f},u_waveAmplitude:{value:m},u_lineColor:{value:new i.Color(v)},u_backgroundColor:{value:new i.Color(d)},u_brightness:{value:h},u_contrast:{value:_},u_offsetX:{value:p},u_offsetY:{value:g},u_scale:{value:y},u_opacity:{value:w}}),[]);return(0,r.useFrame)(t=>{b.current&&(b.current.uniforms.u_time.value=t.clock.elapsedTime,b.current.uniforms.u_resolution.value.set(100*x.width,100*x.height),b.current.uniforms.u_speed.value=e,b.current.uniforms.u_iterations.value=o,b.current.uniforms.u_waveFrequency.value=l,b.current.uniforms.u_depthStep.value=n,b.current.uniforms.u_lineThickness.value=f,b.current.uniforms.u_waveAmplitude.value=m,b.current.uniforms.u_lineColor.value.set(v),b.current.uniforms.u_backgroundColor.value.set(d),b.current.uniforms.u_brightness.value=h,b.current.uniforms.u_contrast.value=_,b.current.uniforms.u_offsetX.value=p,b.current.uniforms.u_offsetY.value=g,b.current.uniforms.u_scale.value=y,b.current.uniforms.u_opacity.value=w)}),(0,t.jsxs)("mesh",{ref:C,scale:[x.width,x.height,1],children:[(0,t.jsx)("planeGeometry",{args:[1,1]}),(0,t.jsx)("shaderMaterial",{ref:b,vertexShader:s,fragmentShader:c,uniforms:T})]})},m=({width:e="100%",height:u="100%",className:r="",speed:a=.4,iterations:i=3,waveFrequency:s=49,depthStep:c=.05,lineThickness:m=.009,waveAmplitude:v=.6,lineColor:d="#ffffff",lightBackground:h="#ffffff",darkBackground:_="#000000",brightness:p=2.5,contrast:g=1.1,offsetX:y=0,offsetY:w=0,scale:C=.3,opacity:b=1})=>{let{resolvedTheme:x}=(0,l.useTheme)(),T="number"==typeof e?`${e}px`:e,k="number"==typeof u?`${u}px`:u;return(0,t.jsx)("div",{className:(0,n.cn)("relative overflow-hidden",r),style:{width:T,height:k},children:(0,t.jsx)(o.Canvas,{className:"absolute inset-0 h-full w-full",gl:{antialias:!0,alpha:!1},camera:{position:[0,0,1],fov:75},children:(0,t.jsx)(f,{speed:a,iterations:i,waveFrequency:s,depthStep:c,lineThickness:m,waveAmplitude:v,lineColor:d,backgroundColor:"dark"===x?_:h,brightness:p,contrast:g,offsetX:y,offsetY:w,scale:C,opacity:b})})})};m.displayName="LiquidLines",e.s(["default",0,m])},88272,e=>{e.n(e.i(54055))}]);