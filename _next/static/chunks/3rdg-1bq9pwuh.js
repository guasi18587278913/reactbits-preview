(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28600,e=>{"use strict";var t=e.i(1950);e.s(["useThree",()=>t.C])},68877,e=>{"use strict";let t=(0,e.i(56420).default)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);e.s(["ArrowRight",0,t],68877)},60602,e=>{"use strict";var t=e.i(1950);e.s(["useLoader",()=>t.G])},47071,e=>{"use strict";var t=e.i(71645),r=e.i(90072),i=e.i(28600),o=e.i(60602);let s=e=>e===Object(e)&&!Array.isArray(e)&&"function"!=typeof e;function a(e,a){let l=(0,i.useThree)(e=>e.gl),n=(0,o.useLoader)(r.TextureLoader,s(e)?Object.values(e):e);return(0,t.useLayoutEffect)(()=>{null==a||a(n)},[a]),(0,t.useEffect)(()=>{if("initTexture"in l){let e=[];Array.isArray(n)?e=n:n instanceof r.Texture?e=[n]:s(n)&&(e=Object.values(n)),e.forEach(e=>{e instanceof r.Texture&&l.initTexture(e)})}},[l,n]),(0,t.useMemo)(()=>{if(!s(e))return n;{let t={},r=0;for(let i in e)t[i]=n[r++];return t}},[e,n])}a.preload=e=>o.useLoader.preload(r.TextureLoader,e),a.clear=e=>o.useLoader.clear(r.TextureLoader,e),e.s(["useTexture",0,a])},71205,e=>{"use strict";var t=e.i(43476),r=e.i(75056),i=e.i(25234),o=e.i(28600),s=e.i(47071),a=e.i(71645),l=e.i(90072),n=e.i(32181),d=e.i(68877);let u=`
  varying vec2 vUv;
  varying vec3 vWorldPosition;

  void main() {
    vUv = uv;
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPos.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPos;
  }
`,c=`
  uniform sampler2D uTexture;
  uniform vec2 uResolution;
  uniform float uBarWidth;

  varying vec2 vUv;
  varying vec3 vWorldPosition;

  float bayerDither(vec2 position) {
    int x = int(mod(position.x, 8.0));
    int y = int(mod(position.y, 8.0));

    int index = x + y * 8;
    float threshold = 0.0;

    if (index == 0) threshold = 0.0/64.0;
    else if (index == 1) threshold = 32.0/64.0;
    else if (index == 2) threshold = 8.0/64.0;
    else if (index == 3) threshold = 40.0/64.0;
    else if (index == 4) threshold = 2.0/64.0;
    else if (index == 5) threshold = 34.0/64.0;
    else if (index == 6) threshold = 10.0/64.0;
    else if (index == 7) threshold = 42.0/64.0;
    else if (index == 8) threshold = 48.0/64.0;
    else if (index == 9) threshold = 16.0/64.0;
    else if (index == 10) threshold = 56.0/64.0;
    else if (index == 11) threshold = 24.0/64.0;
    else if (index == 12) threshold = 50.0/64.0;
    else if (index == 13) threshold = 18.0/64.0;
    else if (index == 14) threshold = 58.0/64.0;
    else if (index == 15) threshold = 26.0/64.0;
    else if (index == 16) threshold = 12.0/64.0;
    else if (index == 17) threshold = 44.0/64.0;
    else if (index == 18) threshold = 4.0/64.0;
    else if (index == 19) threshold = 36.0/64.0;
    else if (index == 20) threshold = 14.0/64.0;
    else if (index == 21) threshold = 46.0/64.0;
    else if (index == 22) threshold = 6.0/64.0;
    else if (index == 23) threshold = 38.0/64.0;
    else if (index == 24) threshold = 60.0/64.0;
    else if (index == 25) threshold = 28.0/64.0;
    else if (index == 26) threshold = 52.0/64.0;
    else if (index == 27) threshold = 20.0/64.0;
    else if (index == 28) threshold = 62.0/64.0;
    else if (index == 29) threshold = 30.0/64.0;
    else if (index == 30) threshold = 54.0/64.0;
    else if (index == 31) threshold = 22.0/64.0;
    else threshold = mod(float(index) * 0.125, 1.0);

    return threshold;
  }

  float roundedRectSDF(vec2 p, vec2 b, float r) {
    vec2 d = abs(p) - b + vec2(r);
    return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - r;
  }

  void main() {
    vec4 texColor = texture2D(uTexture, vUv);

    float barTransition = smoothstep(-uBarWidth, uBarWidth, vWorldPosition.x);

    float gray = dot(texColor.rgb, vec3(0.299, 0.587, 0.114));
    vec3 grayscaleColor = vec3(gray);

    vec2 pixelPos = vUv * uResolution;
    float ditherThreshold = bayerDither(pixelPos);

    float levels = 4.0;
    float quantized = floor(gray * levels + ditherThreshold) / levels;
    vec3 ditheredGray = vec3(quantized);

    vec3 finalColor = mix(ditheredGray, texColor.rgb, barTransition);

    vec2 centeredUv = vUv * 2.0 - 1.0;
    float cornerRadius = 0.1;
    float dist = roundedRectSDF(centeredUv, vec2(1.0, 1.0), cornerRadius);
    float alpha = 1.0 - smoothstep(-0.02, 0.02, dist);

    gl_FragColor = vec4(finalColor, alpha * texColor.a);
  }
`,h=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,f=`
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    float centerDist = abs(vUv.x - 0.5) * 2.0;

    float coreGlow = exp(-centerDist * 60.0) * 2.5;
    float midGlow = exp(-centerDist * 12.0) * 1.2;
    float outerGlow = exp(-centerDist * 4.0) * 0.5;
    float glow = coreGlow + midGlow + outerGlow;

    float pulse = sin(uTime * 1.5) * 0.08 + 0.92;
    glow *= pulse;

    float scanLine = sin(vUv.y * 60.0 + uTime * 2.0) * 0.02 + 0.98;
    glow *= scanLine;

    vec3 glowColor = vec3(1.0, 0.624, 0.988);

    float edgeDist = abs(vUv.y - 0.5) * 2.0;
    float vertFade = 1.0 - smoothstep(0.2, 0.95, edgeDist);
    glow *= vertFade;

    gl_FragColor = vec4(glowColor * glow, glow);
  }
`,m=["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80","https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80","https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80","https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80","https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80","https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80","https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80","https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"];function x({texture:e,index:r,totalItems:o,rotationRef:s,radius:n}){let d=(0,a.useRef)(null),h=(0,a.useRef)(null),f=(0,a.useMemo)(()=>({uTexture:{value:e},uResolution:{value:new l.Vector2(400,300)},uBarWidth:{value:.1}}),[e]);return(0,i.useFrame)(()=>{if(!d.current)return;let e=((2*Math.PI/o*r+s.current)%(2*Math.PI)+3*Math.PI)%(2*Math.PI)-Math.PI,t=Math.sin(e)*n,i=-Math.cos(e)*n+.1*n;d.current.position.set(t,0,i),d.current.rotation.y=-e;let a=Math.abs(e)>.7*Math.PI;d.current.visible=!a}),(0,t.jsxs)("mesh",{ref:d,children:[(0,t.jsx)("planeGeometry",{args:[3,2]}),(0,t.jsx)("shaderMaterial",{ref:h,vertexShader:u,fragmentShader:c,uniforms:f,transparent:!0,side:l.DoubleSide})]})}function p(){let e=(0,a.useRef)(null),r=(0,a.useRef)(new Float32Array(240)),o=(0,a.useRef)(new Float32Array(80)),s=(0,a.useMemo)(()=>{let e=new Float32Array(240);for(let t=0;t<80;t++){let r=(t/80-.5)*1.2;e[3*t]=0,e[3*t+1]=r,e[3*t+2]=(.618*t%1-.5)*.1}return e},[80]);(0,a.useEffect)(()=>{let e=r.current,t=o.current;for(let r=0;r<80;r++){let i=r%2==0?1:-1;e[3*r]=i*(.382*r%1*.012+.004),e[3*r+1]=(.786*r%1-.4)*.006,e[3*r+2]=(.214*r%1-.5)*.003,t[r]=.123*r%1}},[80]);let n=(0,a.useMemo)(()=>{let e=new l.BufferGeometry;e.setAttribute("position",new l.BufferAttribute(s,3));let t=new Float32Array(80);for(let e=0;e<80;e++)t[e]=1;return e.setAttribute("aOpacity",new l.BufferAttribute(t,1)),e},[s]),d=(0,a.useMemo)(()=>new l.ShaderMaterial({uniforms:{uColor:{value:new l.Color("#FF9FFC")},uFadeDistance:{value:.4}},vertexShader:`
        attribute float aOpacity;
        varying float vOpacity;
        varying float vDistance;

        void main() {
          vOpacity = aOpacity;
          vDistance = abs(position.x);

          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = 20.0 * (1.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        uniform float uFadeDistance;
        varying float vOpacity;
        varying float vDistance;

        void main() {
          float fade = 1.0 - smoothstep(0.0, uFadeDistance, vDistance);

          vec2 center = gl_PointCoord - 0.5;
          float dist = length(center);
          float alpha = 1.0 - smoothstep(0.3, 0.5, dist);

          gl_FragColor = vec4(uColor, alpha * fade * vOpacity * 0.8);
        }
      `,transparent:!0,blending:l.AdditiveBlending,depthWrite:!1}),[.4]);return(0,i.useFrame)(t=>{if(!e.current)return;let i=e.current.geometry.attributes.position,s=e.current.geometry.attributes.aOpacity,a=i.array,l=s.array,n=r.current,d=o.current;for(let e=0;e<80;e++){let r=d[e]+.012,i=r>1?0:r;if(d[e]=i,r>1){a[3*e]=0,a[3*e+1]=((e+10*t.clock.elapsedTime)%80/80-.5)*1.2,a[3*e+2]=((.618*e+t.clock.elapsedTime)%1-.5)*.1;let r=e%2==0?1:-1;n[3*e]=r*((e+t.clock.elapsedTime)*.382%1*.012+.004),n[3*e+1]=((e+t.clock.elapsedTime)*.786%1-.4)*.006}a[3*e]+=n[3*e],a[3*e+1]+=n[3*e+1]+8e-4*Math.sin(2*t.clock.elapsedTime+.5*e),a[3*e+2]+=n[3*e+2];let o=Math.abs(a[3*e]);l[e]=Math.max(0,1-o/.4)}i.needsUpdate=!0,s.needsUpdate=!0}),(0,t.jsx)("points",{ref:e,geometry:n,material:d})}function v(){let e=(0,a.useRef)(null),r=(0,a.useMemo)(()=>({uTime:{value:0}}),[]);return(0,i.useFrame)(t=>{e.current&&(e.current.uniforms.uTime.value=t.clock.elapsedTime)}),(0,t.jsxs)("group",{position:[0,0,2],children:[(0,t.jsxs)("mesh",{children:[(0,t.jsx)("planeGeometry",{args:[.7,2]}),(0,t.jsx)("shaderMaterial",{ref:e,vertexShader:h,fragmentShader:f,uniforms:r,transparent:!0,depthWrite:!1})]}),(0,t.jsx)(p,{})]})}function g(){let e=(0,a.useRef)(null),t=(0,a.useRef)(null),{gl:r,camera:i}=(0,o.useThree)();return(0,a.useEffect)(()=>{e.current=r,t.current=i},[r,i]),(0,a.useEffect)(()=>{let i=r.domElement.parentElement;if(!i)return;let o=()=>{let r=e.current,o=t.current;if(!r||!o)return;let s=i.clientWidth,a=i.clientHeight;s>0&&a>0&&(r.setSize(s,a),o instanceof l.PerspectiveCamera&&(o.aspect=s/a,o.updateProjectionMatrix()))};o();let s=new ResizeObserver(o);s.observe(i);let a=setInterval(o,500);return setTimeout(o,100),setTimeout(o,300),setTimeout(o,1e3),()=>{s.disconnect(),clearInterval(a)}},[r]),null}function y(){let e=(0,s.useTexture)(m),r=(0,a.useRef)(0);return(0,i.useFrame)(e=>{r.current=.15*e.clock.elapsedTime}),(0,t.jsxs)("group",{children:[e.map((i,o)=>(0,t.jsx)(x,{texture:i,index:o,totalItems:e.length,rotationRef:r,radius:4.5},o)),(0,t.jsx)(v,{})]})}function w(){return(0,t.jsx)("group",{scale:1,children:(0,t.jsx)(y,{})})}function b(){return(0,t.jsxs)("mesh",{children:[(0,t.jsx)("planeGeometry",{args:[2,2]}),(0,t.jsx)("meshBasicMaterial",{color:"#1a1a1a"})]})}e.s(["Hero7",0,function(){return(0,t.jsxs)("section",{className:"relative w-full min-h-screen bg-white dark:bg-neutral-950 overflow-hidden",children:[(0,t.jsxs)("div",{className:"absolute top-0 left-0 right-0 z-20 flex flex-col items-start sm:items-center text-left sm:text-center pt-12 sm:pt-16 md:pt-20 px-4",children:[(0,t.jsxs)(n.motion.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-neutral-900 dark:text-white tracking-tight leading-[1.1] max-w-4xl",children:["Transform Your Vision",(0,t.jsx)("br",{}),"Into Reality"]}),(0,t.jsxs)(n.motion.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},className:"mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed",children:["Bring your creative ideas to life with powerful tools.",(0,t.jsx)("br",{className:"hidden sm:block"}),"No experience required, just imagination."]}),(0,t.jsxs)(n.motion.button,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},whileHover:{scale:1.02},whileTap:{scale:.98},className:"w-full sm:w-auto mt-6 sm:mt-8 px-5 sm:px-6 py-2.5 sm:py-3 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-300 dark:border-neutral-700 rounded-full text-neutral-900 dark:text-white text-sm sm:text-base font-medium flex items-center justify-center sm:justify-start gap-2 transition-colors cursor-pointer",children:["Get Started",(0,t.jsx)(d.ArrowRight,{className:"w-4 h-4"})]})]}),(0,t.jsx)("div",{className:"absolute inset-0 z-10 translate-y-[50px] sm:translate-y-[150px] xl:translate-y-[100px]",children:(0,t.jsxs)(r.Canvas,{camera:{position:[0,0,8],fov:45},dpr:[1,2],frameloop:"always",gl:{alpha:!0,antialias:!0,powerPreference:"high-performance"},style:{background:"transparent"},children:[(0,t.jsx)(g,{}),(0,t.jsx)(a.Suspense,{fallback:(0,t.jsx)(b,{}),children:(0,t.jsx)(w,{})})]})})]})}])},53560,e=>{e.n(e.i(71205))}]);