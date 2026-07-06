(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28600,e=>{"use strict";var t=e.i(1950);e.s(["useThree",()=>t.C])},66829,e=>{"use strict";var t=e.i(43476),a=e.i(71645),o=e.i(75056),l=e.i(25234),n=e.i(28600),i=e.i(90072),r=e.i(75157);let u=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,c=`
precision highp float;

varying vec2 vUv;

uniform float uTime;
uniform vec2  uRes;

uniform float uLineCount;
uniform float uLineThickness;
uniform float uLineSharpness;
uniform float uAngleRad;
uniform float uZoom;
uniform float uRadialStrength;
uniform float uRadialSpeed;
uniform float uContrast;

uniform vec3  uColorA;
uniform vec3  uColorB;
uniform vec3  uColorC;

uniform vec3  uBg;
uniform float uAlpha;
uniform float uClickBoost;

vec3 cosinePalette(in float t) {
  vec3 a = (uColorA + uColorB + uColorC) / 3.0;
  vec3 x = uColorA - a;
  vec3 y = uColorB - a;
  vec3 bSin = -(x + 2.0 * y) / 1.73205080757;
  vec3 phase = vec3(
    atan(bSin.x, x.x),
    atan(bSin.y, x.y),
    atan(bSin.z, x.z)
  );
  vec3 amp = sqrt(x * x + bSin * bSin);
  return a + amp * cos(6.28318530718 * t + phase);
}

void main() {
  vec2 uv = (vUv * 2.0 - 1.0) * vec2(uRes.x / max(uRes.y, 1.0), 1.0);
  uv *= max(uZoom, 0.0001);

  float ca = cos(uAngleRad);
  float sa = sin(uAngleRad);
  vec2 rotated = vec2(ca * uv.x - sa * uv.y, sa * uv.x + ca * uv.y);

  float stripe = rotated.x * uLineCount * 1.41421356 + uTime * 0.8;
  float wave = sin(stripe);

  float dist = abs(wave);
  float glow = uLineThickness / pow(max(dist, 0.0001), max(uLineSharpness, 0.05));

  float radial = length(uv) * uRadialStrength + uTime * uRadialSpeed;
  vec3 paletteCol = cosinePalette(radial);
  vec3 col = paletteCol * glow * uClickBoost;

  col = smoothstep(vec3(0.0), vec3(max(uContrast, 0.001)), col);

  float bgLuma = dot(uBg, vec3(0.2126, 0.7152, 0.0722));
  float lightMix = smoothstep(0.35, 0.75, bgLuma);

  float coverage = clamp(
    dot(col, vec3(0.2126, 0.7152, 0.0722)),
    0.0,
    1.0
  );

  vec3 painted = mix(uBg, paletteCol, coverage);
  vec3 finalCol = mix(col, painted, lightMix);

  gl_FragColor = vec4(finalCol, uAlpha);
}
`;function s(e){let t=e.replace("#",""),a=parseInt((3===t.length?t.split("").map(e=>e+e).join(""):t.padEnd(6,"0")).slice(0,6),16);return[(a>>16&255)/255,(a>>8&255)/255,(255&a)/255]}let v=e=>{let{gl:t,size:o}=(0,n.useThree)(),r=(0,a.useRef)(null);if(null===r.current){let e=new i.PlaneGeometry(2,2),t=new i.ShaderMaterial({vertexShader:u,fragmentShader:c,transparent:!0,uniforms:{uTime:{value:0},uRes:{value:new i.Vector2(1,1)},uLineCount:{value:8},uLineThickness:{value:.3},uLineSharpness:{value:.7},uAngleRad:{value:Math.PI/4},uZoom:{value:.75},uRadialStrength:{value:.5},uRadialSpeed:{value:.2},uContrast:{value:1.2},uColorA:{value:new i.Vector3(.318,.024,.475)},uColorB:{value:new i.Vector3(.878,.082,.706)},uColorC:{value:new i.Vector3(.612,.631,.949)},uBg:{value:new i.Vector3(0,0,0)},uAlpha:{value:1},uClickBoost:{value:1}}}),a=new i.Mesh(e,t),o=new i.Scene;o.add(a);let l=new i.OrthographicCamera(-1,1,1,-1,0,1);l.position.z=1,r.current={mat:t,geom:e,mesh:a,scene:o,cam:l,pointer:{active:!1,nx:.5,ny:.5,smoothedAngle:0,initialized:!1,click:0}}}let v=e.onPointerReady;(0,a.useEffect)(()=>{let e=r.current;e&&v(e.pointer)},[v]),(0,a.useEffect)(()=>()=>{let e=r.current;e&&(e.mat.dispose(),e.geom.dispose())},[]);let d=(0,a.useRef)(0);return(0,l.useFrame)((a,l)=>{let n=r.current;if(!n)return;let i=n.mat.uniforms;e.paused||(d.current+=l*Math.max(e.speed,0)),i.uTime.value=d.current,i.uRes.value.set(o.width,o.height),i.uLineCount.value=e.lineCount,i.uLineThickness.value=e.lineThickness,i.uLineSharpness.value=e.lineSharpness,i.uZoom.value=e.zoom,i.uRadialStrength.value=e.radialPulseStrength,i.uRadialSpeed.value=e.radialPulseSpeed,i.uContrast.value=e.contrast,i.uAlpha.value=e.opacity;let u=s(e.colorA);i.uColorA.value.set(u[0],u[1],u[2]);let c=s(e.colorB);i.uColorB.value.set(c[0],c[1],c[2]);let v=s(e.colorC);i.uColorC.value.set(v[0],v[1],v[2]);let h=s(e.backgroundColor);i.uBg.value.set(h[0],h[1],h[2]);let m=e.angle*Math.PI/180,p=n.pointer,f=m;if(e.cursorInteraction&&p.active){let t=p.nx-.5,a=.5-p.ny,o=Math.min(1,2*Math.sqrt(t*t+a*a)),l=-Math.sin(m)*t+Math.cos(m)*a;f=m+(l>=0?1:-1)*o*(e.cursorAngleStrength*Math.PI)/180}let g=Math.min(Math.max(e.cursorLerp,0),1);p.initialized?p.smoothedAngle+=(f-p.smoothedAngle)*g:(p.smoothedAngle=f,p.initialized=!0),i.uAngleRad.value=p.smoothedAngle,p.click=Math.max(0,p.click-l*e.clickBurstDecay),i.uClickBoost.value=1+p.click*(e.clickBurstStrength-1),t.setRenderTarget(null),t.render(n.scene,n.cam)},1),null};e.s(["default",0,({width:e="100%",height:l="100%",className:n,children:i,lineCount:u=10,lineThickness:c=.3,lineSharpness:s=.5,speed:d=1,angle:h=45,zoom:m=.75,radialPulseStrength:p=.5,radialPulseSpeed:f=.2,contrast:g=1.2,colorA:C="#510679",colorB:x="#E015B4",colorC:S="#9CA1F2",backgroundColor:R="#000000",opacity:A=1,dpr:B=1.5,paused:y=!1,cursorInteraction:k=!0,cursorAngleStrength:w=5,cursorLerp:P=.05,clickBurstStrength:M=1.6,clickBurstDecay:T=2.5})=>{let L=(0,a.useRef)(null),b=(0,a.useRef)(null),z=e=>{let t=L.current,a=b.current;if(!t||!a)return;let o=t.getBoundingClientRect();a.nx=(e.clientX-o.left)/Math.max(o.width,1),a.ny=(e.clientY-o.top)/Math.max(o.height,1),a.active=!0};return(0,t.jsxs)("div",{ref:L,className:(0,r.cn)("relative overflow-hidden",n),style:{width:e,height:l},onPointerMove:k?z:void 0,onPointerEnter:k?z:void 0,onPointerLeave:k?()=>{let e=b.current;e&&(e.active=!1)}:void 0,onPointerDown:k?e=>{z(e);let t=b.current;t&&(t.click=1)}:void 0,children:[(0,t.jsx)(o.Canvas,{className:"absolute inset-0",dpr:[1,B],gl:{antialias:!1,alpha:!0,powerPreference:"high-performance"},orthographic:!0,camera:{position:[0,0,1],zoom:1,left:-1,right:1,top:1,bottom:-1},children:(0,t.jsx)(v,{lineCount:u,lineThickness:c,lineSharpness:s,speed:d,angle:h,zoom:m,radialPulseStrength:p,radialPulseSpeed:f,contrast:g,colorA:C,colorB:x,colorC:S,backgroundColor:R,opacity:A,paused:y,cursorInteraction:k,cursorAngleStrength:w,cursorLerp:P,clickBurstStrength:M,clickBurstDecay:T,onPointerReady:e=>{b.current=e}})}),i&&(0,t.jsx)("div",{className:"relative z-10",children:i})]})}])},52209,e=>{e.n(e.i(66829))}]);