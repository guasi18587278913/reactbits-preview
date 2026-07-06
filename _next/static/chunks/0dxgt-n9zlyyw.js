(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28600,e=>{"use strict";var t=e.i(1950);e.s(["useThree",()=>t.C])},64569,e=>{"use strict";let t=(0,e.i(56420).default)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);e.s(["Zap",0,t],64569)},9584,e=>{"use strict";let t=(0,e.i(56420).default)("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);e.s(["Database",0,t],9584)},31214,e=>{"use strict";let t=(0,e.i(56420).default)("cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);e.s(["Cloud",0,t],31214)},4139,e=>{"use strict";let t=(0,e.i(56420).default)("terminal",[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]);e.s(["Terminal",0,t],4139)},10170,e=>{"use strict";var t=e.i(43476),a=e.i(75056),l=e.i(25234),r=e.i(28600),s=e.i(71645),i=e.i(90072),n=e.i(32181),o=e.i(4139),c=e.i(31214),d=e.i(9584),u=e.i(52330),m=e.i(56420);let x=(0,m.default)("circle-play",[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);var p=e.i(64569);let h=(0,m.default)("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),f=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,v=`
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    float centerDist = abs(vUv.x - 0.5) * 2.0;

    float coreGlow = exp(-centerDist * 180.0) * 2.5;
    float midGlow = exp(-centerDist * 66.0) * 1.2;
    float outerGlow = exp(-centerDist * 6.0) * 0.5;
    float glow = coreGlow + midGlow + outerGlow;

    float pulse = sin(uTime * 1.5) * 0.08 + 0.92;
    glow *= pulse;

    float scanLine = sin(vUv.y * 60.0 + uTime * 2.0) * 0.02 + 0.98;
    glow *= scanLine;

    vec3 glowColor = vec3(1.0, 0.624, 0.988);

    float edgeDist = abs(vUv.y - 0.5) * 2.0;
    float vertFade = 1.0 - smoothstep(0.2, 0.95, edgeDist);
    glow *= vertFade;

    vec3 colorOut = glowColor * glow;
    float alpha = max(max(colorOut.r, colorOut.g), colorOut.b);
    vec3 normalizedColor = colorOut / max(alpha, 0.001);
    alpha = smoothstep(0.0, 1.0, alpha);

    gl_FragColor = vec4(normalizedColor, alpha);
  }
`,g=`
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    float centerDist = abs(vUv.x - 0.5) * 2.0;

    float wideGlow = exp(-centerDist * 3.0) * 0.8;
    float softGlow = exp(-centerDist * 1.0) * 0.4;
    float glow = wideGlow + softGlow;

    float pulse = sin(uTime * 1.2) * 0.1 + 0.9;
    glow *= pulse;

    vec3 glowColor = vec3(1.0, 0.624, 0.988);

    float edgeDistY = abs(vUv.y - 0.5) * 2.0;
    float vertFade = 1.0 - smoothstep(0.0, 1.0, edgeDistY);
    glow *= vertFade;

    float edgeDistX = abs(vUv.x - 0.5) * 2.0;
    float horizFade = 1.0 - smoothstep(0.4, 0.9, edgeDistX);
    glow *= horizFade;

    vec3 colorOut = glowColor * glow;
    float alpha = max(max(colorOut.r, colorOut.g), colorOut.b);
    vec3 normalizedColor = colorOut / max(alpha, 0.001);
    alpha = smoothstep(0.0, 1.0, alpha) * 0.6;

    gl_FragColor = vec4(normalizedColor, alpha);
  }
`;function y(){let e=(0,r.useThree)(),t=(0,s.useRef)(e.gl),a=(0,s.useRef)(e.camera);return(0,s.useEffect)(function(){t.current=e.gl,a.current=e.camera},[e.gl,e.camera]),(0,s.useEffect)(function(){let l=e.gl.domElement.parentElement;if(!l)return;function r(){let e=t.current,r=a.current;if(!e||!r)return;let s=l.clientWidth,n=l.clientHeight;s>0&&n>0&&(e.setSize(s,n),r instanceof i.PerspectiveCamera&&(r.aspect=s/n,r.updateProjectionMatrix()))}r();let s=new ResizeObserver(r);s.observe(l);let n=setInterval(r,500);return setTimeout(r,100),setTimeout(r,300),setTimeout(r,1e3),function(){s.disconnect(),clearInterval(n)}},[e.gl]),null}function b(){let{viewport:e}=(0,r.useThree)(),a=Math.min(e.width/7.5,1);return(0,t.jsx)("group",{scale:[a,1,1],children:(0,t.jsx)(w,{})})}function w(){let e=(0,s.useRef)(null),a=(0,s.useRef)(null),r=(0,s.useMemo)(()=>({uTime:{value:0}}),[]),i=(0,s.useMemo)(()=>({uTime:{value:0}}),[]);return(0,l.useFrame)(t=>{e.current&&(e.current.uniforms.uTime.value=t.clock.elapsedTime),a.current&&(a.current.uniforms.uTime.value=t.clock.elapsedTime)}),(0,t.jsxs)("group",{position:[0,0,2],children:[(0,t.jsxs)("mesh",{position:[0,0,-.1],children:[(0,t.jsx)("planeGeometry",{args:[4,3]}),(0,t.jsx)("shaderMaterial",{ref:a,vertexShader:f,fragmentShader:g,uniforms:i,transparent:!0,depthWrite:!1})]}),(0,t.jsxs)("mesh",{children:[(0,t.jsx)("planeGeometry",{args:[.7,2]}),(0,t.jsx)("shaderMaterial",{ref:e,vertexShader:f,fragmentShader:v,uniforms:r,transparent:!0,depthWrite:!1})]}),(0,t.jsx)(j,{})]})}function j(){let e=(0,s.useRef)(null),a=(0,s.useRef)(new Float32Array(120)),r=(0,s.useRef)(new Float32Array(40)),n=(0,s.useMemo)(()=>{let e=new Float32Array(120);for(let t=0;t<40;t++){let a=(t/40-.5)*1.2;e[3*t]=0,e[3*t+1]=a,e[3*t+2]=(.618*t%1-.5)*.1}return e},[40]);(0,s.useEffect)(()=>{let e=a.current,t=r.current;for(let a=0;a<40;a++){let l=a%2==0?1:-1;e[3*a]=l*(.382*a%1*.012+.004),e[3*a+1]=(.786*a%1-.4)*.006,e[3*a+2]=(.214*a%1-.5)*.003,t[a]=.123*a%1}},[40]);let o=(0,s.useMemo)(()=>{let e=new i.BufferGeometry;e.setAttribute("position",new i.BufferAttribute(n,3));let t=new Float32Array(40);for(let e=0;e<40;e++)t[e]=1;return e.setAttribute("aOpacity",new i.BufferAttribute(t,1)),e},[n,40]),c=(0,s.useMemo)(()=>new i.ShaderMaterial({uniforms:{uColor:{value:new i.Color("#FF9FFC")},uFadeDistance:{value:1}},vertexShader:`
        attribute float aOpacity;
        varying float vOpacity;
        varying float vDistance;

        void main() {
          vOpacity = aOpacity;
          vDistance = abs(position.x);

          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = 7.0 * (1.0 / -mvPosition.z);
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

          float finalAlpha = alpha * fade * vOpacity * 1.5;
          gl_FragColor = vec4(uColor * 1.3, finalAlpha);
        }
      `,transparent:!0,blending:i.AdditiveBlending,depthWrite:!1}),[1]);return(0,l.useFrame)(t=>{if(!e.current)return;let l=e.current.geometry.attributes.position,s=e.current.geometry.attributes.aOpacity,i=l.array,n=s.array,o=a.current,c=r.current;for(let e=0;e<40;e++){let a=c[e]+.012,l=a>1?0:a;if(c[e]=l,a>1){i[3*e]=0,i[3*e+1]=((e+10*t.clock.elapsedTime)%40/40-.5)*1.2,i[3*e+2]=((.618*e+t.clock.elapsedTime)%1-.5)*.1;let a=e%2==0?1:-1;o[3*e]=a*((e+t.clock.elapsedTime)*.382%1*.012+.004),o[3*e+1]=((e+t.clock.elapsedTime)*.786%1-.4)*.006}i[3*e]+=o[3*e],i[3*e+1]+=o[3*e+1]+8e-4*Math.sin(2*t.clock.elapsedTime+.5*e),i[3*e+2]+=o[3*e+2];let r=Math.abs(i[3*e]);n[e]=Math.max(0,1-r/1)}l.needsUpdate=!0,s.needsUpdate=!0}),(0,t.jsx)("points",{ref:e,geometry:o,material:c})}function k(){let e=[{Icon:o.Terminal,color:"text-neutral-900 dark:text-white",bg:"bg-white dark:bg-neutral-800",x:"65%",xMob:"20%",y:"25%",delay:0},{Icon:c.Cloud,color:"text-neutral-900 dark:text-white",bg:"bg-white dark:bg-neutral-800",x:"80%",xMob:"25%",y:"45%",delay:.2},{Icon:d.Database,color:"text-neutral-900 dark:text-white",bg:"bg-white dark:bg-neutral-800",x:"60%",xMob:"15%",y:"60%",delay:.4},{Icon:u.Code2,color:"text-neutral-900 dark:text-white",bg:"bg-white dark:bg-neutral-800",x:"45%",xMob:"10%",y:"40%",delay:.3}];return(0,t.jsx)("div",{className:"absolute inset-y-0 left-0 w-full sm:w-1/2 pointer-events-none overflow-hidden",children:e.map((e,a)=>(0,t.jsx)(n.motion.div,{className:`absolute p-4 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700 ${e.bg} left-(--x-mob) sm:left-(--x-desk)`,style:{top:e.y,"--x-mob":e.xMob,"--x-desk":e.x},animate:{y:[0,-8,0],rotate:[0,5,-5,0]},transition:{duration:4+.5*a,repeat:1/0,ease:"easeInOut",delay:e.delay},children:(0,t.jsx)(e.Icon,{className:`w-5 h-5 sm:w-6 sm:h-6 ${e.color}`})},a))})}function N(){return(0,t.jsx)("div",{className:"absolute inset-y-0 right-0 w-1/2 pointer-events-none flex items-center pl-8 sm:pl-12",children:(0,t.jsxs)("div",{className:"relative w-full max-w-sm space-y-3",children:[(0,t.jsxs)(n.motion.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.5,duration:.6},className:"bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 pointer-events-auto scale-90 sm:scale-100 origin-left",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,t.jsx)("div",{className:"p-1 min-w-6 bg-neutral-200 dark:bg-neutral-700 rounded-md",children:(0,t.jsx)(p.Zap,{className:"w-4 h-4 text-neutral-900 dark:text-white"})}),(0,t.jsx)("span",{className:"text-xs font-semibold text-neutral-800 dark:text-white truncate",children:"API Response Time Optimization"})]}),(0,t.jsx)("p",{className:"text-[10px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-2 line-clamp-2",children:"Reduced latency by 47% using edge caching and query optimization."})]}),(0,t.jsxs)(n.motion.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.7,duration:.6},className:"bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 pointer-events-auto ml-4 sm:ml-6 scale-90 sm:scale-100 origin-left",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,t.jsx)("div",{className:"p-1 min-w-6 bg-neutral-200 dark:bg-neutral-700 rounded-md",children:(0,t.jsx)(h,{className:"w-4 h-4 text-neutral-900 dark:text-white"})}),(0,t.jsx)("span",{className:"text-xs font-semibold text-neutral-800 dark:text-white truncate",children:"System Health Check"})]}),(0,t.jsxs)("ul",{className:"space-y-1 mb-2",children:[(0,t.jsxs)("li",{className:"text-[10px] text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5",children:[(0,t.jsx)("span",{className:"w-1 h-1 rounded-full bg-neutral-300"})," All services operational"]}),(0,t.jsxs)("li",{className:"text-[10px] text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5",children:[(0,t.jsx)("span",{className:"w-1 h-1 rounded-full bg-neutral-300"})," 99.9% uptime"]})]})]})]})})}e.s(["Hero13",0,function(){return(0,t.jsx)("section",{className:"w-full flex items-start lg:items-center bg-white dark:bg-neutral-950",children:(0,t.jsx)("div",{className:"max-w-[1400px] mx-auto w-full py-12",children:(0,t.jsxs)("div",{className:"relative w-full flex flex-col items-center justify-start overflow-hidden",children:[(0,t.jsxs)("div",{className:"relative z-20 text-left sm:text-center max-w-3xl px-4 mb-12 pointer-events-auto",children:[(0,t.jsx)(n.motion.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"text-4xl sm:text-6xl md:text-6xl text-neutral-900 dark:text-white mb-4 tracking-tight",children:"Ship faster, build better."}),(0,t.jsx)(n.motion.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},className:"text-base tracking-tight sm:text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-lg mx-0 sm:mx-auto",children:"Transform your development workflow with intelligent automation and real-time insights that help teams deploy with confidence."}),(0,t.jsxs)(n.motion.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},className:"flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-center gap-4 w-full",children:[(0,t.jsxs)("button",{className:"flex items-center gap-2 text-neutral-900 dark:text-white font-medium hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors text-sm sm:text-base cursor-pointer",children:["View Demo ",(0,t.jsx)(x,{className:"w-4 h-4 sm:w-5 sm:h-5"})]}),(0,t.jsx)("button",{className:"w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-sm sm:text-base cursor-pointer",children:"Start Building"})]}),(0,t.jsxs)(n.motion.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.8},className:"mt-6 flex items-center justify-start sm:justify-center gap-2",children:[(0,t.jsx)("div",{className:"flex -space-x-2",children:[1,2,3,4].map(e=>(0,t.jsx)("div",{className:"w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white dark:border-neutral-950 bg-neutral-300 dark:bg-neutral-700 flex items-center justify-center",children:(0,t.jsx)("span",{className:"text-[8px] sm:text-xs text-neutral-600 dark:text-neutral-400",children:e})},e))}),(0,t.jsxs)("div",{className:"text-xs sm:text-sm text-neutral-600 dark:text-neutral-400",children:[(0,t.jsx)("span",{className:"text-yellow-500",children:"★★★★★"})," trusted by 5,000+ developers"]})]})]}),(0,t.jsxs)("div",{className:"relative w-full max-w-5xl mx-auto h-[400px] sm:h-[500px] -mt-10 sm:-mt-[60px]",children:[(0,t.jsx)("div",{className:"absolute inset-0 z-20 pointer-events-none",children:(0,t.jsxs)(a.Canvas,{camera:{position:[0,0,5],fov:45},children:[(0,t.jsx)(y,{}),(0,t.jsx)(s.Suspense,{fallback:null,children:(0,t.jsx)(b,{})})]})}),(0,t.jsxs)("div",{className:"absolute inset-0 z-10 pointer-events-none",children:[(0,t.jsx)(k,{}),(0,t.jsx)(N,{})]})]}),(0,t.jsx)("div",{className:"absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white dark:from-neutral-950 to-transparent z-30 sm:hidden"})]})})})}],10170)},32577,e=>{e.n(e.i(10170))}]);