(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,29778,e=>{"use strict";var r=e.i(43476),t=e.i(71645),i=e.i(90072),o=e.i(8560),a=e.i(89970),u=e.i(75157);let n=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,l=`
  uniform sampler2D uTex1;
  uniform sampler2D uTex2;
  uniform float uMix;
  uniform vec2 uSize;
  uniform vec2 uTex1Dims;
  uniform vec2 uTex2Dims;
  uniform vec2 uOrigin;
  uniform float uRefract;
  uniform float uChroma;
  uniform float uClarity;
  uniform float uGlow;
  uniform float uFlow;

  varying vec2 vUv;

  vec2 fitCover(vec2 coord, vec2 texDims) {
    vec2 ratio = uSize / texDims;
    float scale = max(ratio.x, ratio.y);
    vec2 scaled = texDims * scale;
    vec2 delta = (uSize - scaled) * 0.5;
    return (coord * uSize - delta) / scaled;
  }

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float interpolatedNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
      f.y
    );
  }

  vec4 transition(vec2 coord, float t) {
    float intensity = 0.08 * uRefract;
    float chromaOffset = 0.02 * uChroma;
    float waveAmount = 0.025;
    float centerClear = 0.3 * uClarity;
    float rippleSize = 0.004;
    float flowSpeed = 0.015 * uFlow;
    float edgeWidth = 0.05;
    float borderWidth = 0.025;

    float fadePhase = smoothstep(0.8, 1.0, t);
    float edgeIntensity = 0.08 * (1.0 - fadePhase) * uGlow;
    float borderAlpha = 0.06 * (1.0 - fadePhase) * uGlow;

    vec2 pixelPos = coord * uSize;
    vec2 baseCoord1 = fitCover(coord, uTex1Dims);
    vec2 baseCoord2 = fitCover(coord, uTex2Dims);

    vec2 centerPixel = uOrigin * uSize;

    vec2 cornerA = vec2(0.0, 0.0) - centerPixel;
    vec2 cornerB = vec2(uSize.x, 0.0) - centerPixel;
    vec2 cornerC = vec2(0.0, uSize.y) - centerPixel;
    vec2 cornerD = vec2(uSize.x, uSize.y) - centerPixel;

    float maxDist = max(
      max(length(cornerA), length(cornerB)),
      max(length(cornerC), length(cornerD))
    );

    float radius = t * maxDist;
    float dist = length(pixelPos - centerPixel);
    float norm = dist / max(radius, 0.001);
    vec2 dir = (dist > 0.0) ? (pixelPos - centerPixel) / dist : vec2(0.0);
    float mask = smoothstep(radius + 3.0, radius - 3.0, dist);

    float distFactor = smoothstep(centerClear, 1.0, norm);
    float elapsed = t * 5.0;

    vec2 surface = vec2(
      interpolatedNoise(coord * 100.0 + elapsed * 0.3),
      interpolatedNoise(coord * 100.0 + elapsed * 0.2 + 50.0)
    ) - 0.5;
    surface *= rippleSize * distFactor;

    vec2 distorted = baseCoord2;
    if (mask > 0.0) {
      float bend = intensity * pow(distFactor, 1.5);
      vec2 flowDir = normalize(dir + vec2(sin(elapsed), cos(elapsed * 0.7)) * 0.3);
      distorted -= flowDir * bend;

      float w1 = sin(norm * 22.0 - elapsed * 3.5);
      float w2 = sin(norm * 35.0 + elapsed * 2.8) * 0.7;
      float w3 = sin(norm * 50.0 - elapsed * 4.2) * 0.5;
      float combined = (w1 + w2 + w3) / 3.0;

      float shift = combined * waveAmount * distFactor;
      distorted -= dir * shift + surface;

      vec2 motion = vec2(
        sin(elapsed + norm * 10.0),
        cos(elapsed * 0.8 + norm * 8.0)
      ) * flowSpeed * distFactor * mask;
      distorted += motion;
    }

    vec4 result;
    if (mask > 0.0) {
      float aberration = chromaOffset * pow(distFactor, 1.2);

      vec2 rCoord = distorted + dir * aberration * 1.2;
      vec2 gCoord = distorted + dir * aberration * 0.2;
      vec2 bCoord = distorted - dir * aberration * 0.8;

      float r = texture2D(uTex2, rCoord).r;
      float g = texture2D(uTex2, gCoord).g;
      float b = texture2D(uTex2, bCoord).b;
      result = vec4(r, g, b, 1.0);
    } else {
      result = texture2D(uTex2, baseCoord2);
    }

    if (mask > 0.0 && edgeIntensity > 0.0) {
      float rim = smoothstep(1.0 - edgeWidth, 1.0, norm) *
                  (1.0 - smoothstep(1.0, 1.01, norm));
      result.rgb += rim * edgeIntensity;

      float edge = smoothstep(1.0 - borderWidth, 1.0, norm) *
                   (1.0 - smoothstep(1.0, 1.01, norm));
      result.rgb = mix(result.rgb, vec3(1.0), edge * borderAlpha);
    }

    vec4 prevImg = texture2D(uTex1, baseCoord1);

    if (t > 0.95) {
      vec4 cleanResult = texture2D(uTex2, baseCoord2);
      float endFade = (t - 0.95) / 0.05;
      result = mix(result, cleanResult, endFade);
    }

    return mix(prevImg, result, mask);
  }

  void main() {
    if (uMix <= 0.0) {
      vec2 uv = fitCover(vUv, uTex1Dims);
      gl_FragColor = texture2D(uTex1, uv);
      return;
    }
    gl_FragColor = transition(vUv, uMix);
  }
`,s=({images:e,transitionDuration:s=2.5,glassRefractionStrength:c=1,glassChromaticAberration:d=0,glassBubbleClarity:f=1,glassEdgeGlow:m=1,glassLiquidFlow:v=1,startAtCursor:x=!1,autoCycle:h=!1,autoCycleDelay:p=3e3,className:g=""})=>{let w=(0,t.useRef)(null),b=(0,t.useRef)(null),C=(0,t.useRef)(null),D=(0,t.useRef)(null),T=(0,t.useRef)(null),y=(0,t.useRef)([]),[S,P]=(0,t.useState)(0),[R,F]=(0,t.useState)(!1),[z,M]=(0,t.useState)(!1);(0,t.useEffect)(()=>{(async()=>{let r=new i.TextureLoader,t=[];for(let o of e)try{let e=await new Promise((e,t)=>{r.load(o,r=>{r.minFilter=r.magFilter=i.LinearFilter,r.userData={dims:new i.Vector2(r.image.width,r.image.height)},e(r)},void 0,t)});t.push(e)}catch{console.warn(`Failed to load: ${o}`)}y.current=t,t.length>=2&&M(!0)})()},[e]),(0,t.useEffect)(()=>{if(!w.current||y.current.length<2)return;let e=w.current,r=e.parentElement;if(!r)return;let t=new i.Scene,a=new i.OrthographicCamera(-1,1,1,-1,0,1),u=new o.WebGLRenderer({canvas:e,antialias:!1,alpha:!1}),s=()=>{if(!r||!u||!T.current)return;let e=r.getBoundingClientRect(),t=e.width,i=e.height;u.setSize(t,i),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),T.current.uniforms.uSize.value.set(t,i)},x=new i.ShaderMaterial({uniforms:{uTex1:{value:y.current[0]},uTex2:{value:y.current[1]},uMix:{value:0},uSize:{value:new i.Vector2(1,1)},uTex1Dims:{value:y.current[0].userData.dims},uTex2Dims:{value:y.current[1].userData.dims},uOrigin:{value:new i.Vector2(.5,.5)},uRefract:{value:c},uChroma:{value:d},uClarity:{value:f},uGlow:{value:m},uFlow:{value:v}},vertexShader:n,fragmentShader:l}),h=new i.PlaneGeometry(2,2),p=new i.Mesh(h,x);t.add(p),b.current=t,C.current=a,D.current=u,T.current=x,s();let g=()=>{D.current&&b.current&&C.current&&D.current.render(b.current,C.current),requestAnimationFrame(g)};g();let S=new ResizeObserver(()=>{s()});return S.observe(r),()=>{S.disconnect(),u.dispose(),h.dispose(),x.dispose()}},[z]),(0,t.useEffect)(()=>{T.current&&(T.current.uniforms.uRefract.value=c,T.current.uniforms.uChroma.value=d,T.current.uniforms.uClarity.value=f,T.current.uniforms.uGlow.value=m,T.current.uniforms.uFlow.value=v)},[c,d,f,m,v]);let k=(0,t.useCallback)(e=>{if(R||!T.current||y.current.length<2||!w.current)return;if(x&&e){let r=w.current.getBoundingClientRect(),t=(e.clientX-r.left)/r.width,i=(e.clientY-r.top)/r.height,o=Math.max(0,Math.min(1,t)),a=Math.max(0,Math.min(1,1-i));T.current.uniforms.uOrigin.value.set(o,a)}else T.current.uniforms.uOrigin.value.set(.5,.5);let r=(S+1)%y.current.length,t=y.current[S],i=y.current[r];F(!0),T.current.uniforms.uTex1.value=t,T.current.uniforms.uTex2.value=i,T.current.uniforms.uTex1Dims.value=t.userData.dims,T.current.uniforms.uTex2Dims.value=i.userData.dims,a.default.fromTo(T.current.uniforms.uMix,{value:0},{value:1,duration:s,ease:"power2.inOut",onComplete:()=>{T.current&&(T.current.uniforms.uMix.value=0,T.current.uniforms.uTex1.value=i,T.current.uniforms.uTex1Dims.value=i.userData.dims),P(r),F(!1)}})},[S,R,s,x]);(0,t.useEffect)(()=>{if(!h||!z||R)return;let e=setTimeout(()=>{k()},p);return()=>clearTimeout(e)},[h,p,z,R,k]);let O=(0,t.useCallback)(e=>{("Enter"===e.key||" "===e.key)&&k()},[k]);return(0,r.jsxs)("div",{className:(0,u.cn)("relative w-full h-full overflow-hidden cursor-pointer",g),onClick:k,role:"button",tabIndex:0,onKeyDown:O,children:[(0,r.jsx)("canvas",{ref:w,className:"block w-full h-full",style:{opacity:+!!z,transition:"opacity 0.3s"}}),!z&&(0,r.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-black",children:(0,r.jsx)("div",{className:"text-white text-sm",children:"Loading..."})})]})};e.s(["LiquidSwap",0,s,"default",0,s])},51195,e=>{e.n(e.i(29778))}]);