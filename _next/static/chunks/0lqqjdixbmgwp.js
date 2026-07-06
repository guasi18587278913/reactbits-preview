(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28600,e=>{"use strict";var r=e.i(1950);e.s(["useThree",()=>r.C])},63178,e=>{"use strict";var r=e.i(71645),t=(e,r,t,n,o,i,l,u)=>{let a=document.documentElement,s=["light","dark"];function c(r){var t;(Array.isArray(e)?e:[e]).forEach(e=>{let t="class"===e,n=t&&i?o.map(e=>i[e]||e):o;t?(a.classList.remove(...n),a.classList.add(i&&i[r]?i[r]:r)):a.setAttribute(e,r)}),t=r,u&&s.includes(t)&&(a.style.colorScheme=t)}if(n)c(n);else try{let e=localStorage.getItem(r)||t,n=l&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;c(n)}catch(e){}},n=r.createContext(void 0),o={setTheme:e=>{},themes:[]};r.memo(({forcedTheme:e,storageKey:n,attribute:o,enableSystem:i,enableColorScheme:l,defaultTheme:u,value:a,themes:s,nonce:c,scriptProps:f})=>{let d=JSON.stringify([o,n,u,e,s,a,i,l]).slice(1,-1);return r.createElement("script",{...f,suppressHydrationWarning:!0,nonce:"u"<typeof window?c:"",dangerouslySetInnerHTML:{__html:`(${t.toString()})(${d})`}})}),e.s(["useTheme",0,()=>{var e;return null!=(e=r.useContext(n))?e:o}])},56415,e=>{"use strict";var r=e.i(43476),t=e.i(71645),n=e.i(75056),o=e.i(25234),i=e.i(28600),l=e.i(90072),u=e.i(63178),a=e.i(75157);let s=`
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
uniform int u_colorLayers;
uniform float u_gridFrequency;
uniform float u_gridIntensity;
uniform float u_waveSpeed;
uniform float u_waveIntensity;
uniform float u_spiralIntensity;
uniform float u_lineThickness;
uniform float u_falloff;
uniform float u_centerX;
uniform float u_centerY;
uniform vec3 u_colorTint;
uniform vec3 u_backgroundColor;
uniform float u_brightness;
uniform float u_phaseOffset;

varying vec2 vUv;

void main() {
  float animTime = u_time * u_speed;
  vec2 resolution = u_resolution;

  vec3 colorAccum = vec3(0.0);
  float dist = 0.0;
  float depth = animTime;

  for (int layer = 0; layer < 3; layer++) {
    if (layer >= u_colorLayers) break;

    vec2 normalizedPos = vUv;
    vec2 centeredPos = vUv;
    centeredPos.x *= resolution.x / resolution.y;
    centeredPos -= vec2(u_centerX, u_centerY);

    depth += 0.05;
    dist = length(centeredPos);

    float horizontalWave = sin(centeredPos.x * u_gridFrequency + depth);
    float verticalWave = cos(centeredPos.y * u_gridFrequency + depth + u_phaseOffset);
    float gridPattern = u_gridIntensity * horizontalWave * verticalWave;

    float oscillation = sin(depth) + 1.0;
    float radialPulse = abs(sin(dist * 7.0 - depth * u_waveSpeed));
    float waveDisplacement = oscillation * radialPulse * u_waveIntensity;

    normalizedPos += (centeredPos / max(dist, 0.001)) * waveDisplacement * gridPattern;
    normalizedPos = fract(normalizedPos);

    float polarAngle = atan(centeredPos.y, centeredPos.x);
    float polarRadius = dist * 2.0;
    vec2 spiralOffset = vec2(
      cos(polarAngle * polarRadius - depth),
      sin(polarAngle * polarRadius - depth)
    ) * gridPattern * u_spiralIntensity;
    normalizedPos += spiralOffset;

    vec2 gridCell = fract(normalizedPos) - 0.5;
    float intensity = u_lineThickness / length(gridCell);

    if (layer == 0) colorAccum.r = intensity;
    else if (layer == 1) colorAccum.g = intensity;
    else colorAccum.b = intensity;
  }

  colorAccum = colorAccum / (dist + u_falloff);

  colorAccum *= u_brightness;
  vec3 tintedColor = colorAccum * u_colorTint;

  float alpha = clamp(length(colorAccum) * 0.5, 0.0, 1.0);
  vec3 finalColor = mix(u_backgroundColor, tintedColor, alpha);

  gl_FragColor = vec4(finalColor, 1.0);
}
`,f=({speed:e,colorLayers:n,gridFrequency:u,gridIntensity:a,waveSpeed:f,waveIntensity:d,spiralIntensity:m,lineThickness:v,falloff:h,centerX:_,centerY:p,colorTint:y,backgroundColor:g,brightness:w,phaseOffset:T})=>{let P=(0,t.useRef)(null),b=(0,t.useRef)(null),{viewport:C}=(0,i.useThree)(),x=(0,t.useMemo)(()=>({u_time:{value:0},u_resolution:{value:new l.Vector2(100*C.width,100*C.height)},u_speed:{value:e},u_colorLayers:{value:n},u_gridFrequency:{value:u},u_gridIntensity:{value:a},u_waveSpeed:{value:f},u_waveIntensity:{value:d},u_spiralIntensity:{value:m},u_lineThickness:{value:v},u_falloff:{value:h},u_centerX:{value:_},u_centerY:{value:p},u_colorTint:{value:new l.Color(y)},u_backgroundColor:{value:new l.Color(g)},u_brightness:{value:w},u_phaseOffset:{value:T}}),[]);return(0,o.useFrame)(r=>{b.current&&(b.current.uniforms.u_time.value=r.clock.elapsedTime,b.current.uniforms.u_resolution.value.set(100*C.width,100*C.height),b.current.uniforms.u_speed.value=e,b.current.uniforms.u_colorLayers.value=n,b.current.uniforms.u_gridFrequency.value=u,b.current.uniforms.u_gridIntensity.value=a,b.current.uniforms.u_waveSpeed.value=f,b.current.uniforms.u_waveIntensity.value=d,b.current.uniforms.u_spiralIntensity.value=m,b.current.uniforms.u_lineThickness.value=v,b.current.uniforms.u_falloff.value=h,b.current.uniforms.u_centerX.value=_,b.current.uniforms.u_centerY.value=p,b.current.uniforms.u_colorTint.value.set(y),b.current.uniforms.u_backgroundColor.value.set(g),b.current.uniforms.u_brightness.value=w,b.current.uniforms.u_phaseOffset.value=T)}),(0,r.jsxs)("mesh",{ref:P,scale:[C.width,C.height,1],children:[(0,r.jsx)("planeGeometry",{args:[1,1]}),(0,r.jsx)("shaderMaterial",{ref:b,vertexShader:s,fragmentShader:c,uniforms:x})]})},d=({width:e="100%",height:t="100%",className:o="",speed:i=.3,colorLayers:l=3,gridFrequency:s=25,gridIntensity:c=1,waveSpeed:d=.2,waveIntensity:m=.1,spiralIntensity:v=1,lineThickness:h=.06,falloff:_=1,centerX:p=1,centerY:y=1,colorTint:g="#c084fc",lightBackground:w="#ffffff",darkBackground:T="#000000",brightness:P=1.5,phaseOffset:b=10})=>{let{resolvedTheme:C}=(0,u.useTheme)(),x="number"==typeof e?`${e}px`:e,A="number"==typeof t?`${t}px`:t;return(0,r.jsx)("div",{className:(0,a.cn)("relative overflow-hidden",o),style:{width:x,height:A},children:(0,r.jsx)(n.Canvas,{className:"absolute inset-0 h-full w-full",gl:{antialias:!0,alpha:!1},camera:{position:[0,0,1],fov:75},children:(0,r.jsx)(f,{speed:i,colorLayers:l,gridFrequency:s,gridIntensity:c,waveSpeed:d,waveIntensity:m,spiralIntensity:v,lineThickness:h,falloff:_,centerX:p,centerY:y,colorTint:g,backgroundColor:"dark"===C?T:w,brightness:P,phaseOffset:b})})})};d.displayName="SquircleShift",e.s(["default",0,d])},81554,e=>{e.n(e.i(56415))}]);