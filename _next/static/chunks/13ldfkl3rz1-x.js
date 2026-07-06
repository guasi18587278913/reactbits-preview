(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28600,e=>{"use strict";var t=e.i(1950);e.s(["useThree",()=>t.C])},67335,35517,e=>{"use strict";var t=e.i(1950);e.s(["extend",()=>t.e],67335);var r=e.i(90072);e.s(["shaderMaterial",0,function(e,t,i,o){var n;return(n=class extends r.ShaderMaterial{constructor(n){for(const o in super({vertexShader:t,fragmentShader:i,...n}),e)this.uniforms[o]=new r.Uniform(e[o]),Object.defineProperty(this,o,{get(){return this.uniforms[o].value},set(e){this.uniforms[o].value=e}});this.uniforms=r.UniformsUtils.clone(this.uniforms),null==o||o(this)}}).key=r.MathUtils.generateUUID(),n}],35517)},44208,18050,e=>{"use strict";var t=e.i(1950);e.s(["createPortal",()=>t.o],44208);var r=e.i(71645),i=e.i(90072),o=e.i(28600);e.s(["useFBO",0,function(e,t,n){let u=(0,o.useThree)(e=>e.size),a=(0,o.useThree)(e=>e.viewport),s="number"==typeof e?e:u.width*a.dpr,l="number"==typeof t?t:u.height*a.dpr,c=("number"==typeof e?n:e)||{},{samples:v=0,depth:d,...m}=c,f=null!=d?d:c.depthBuffer,h=r.useMemo(()=>{let e=new i.WebGLRenderTarget(s,l,{minFilter:i.LinearFilter,magFilter:i.LinearFilter,type:i.HalfFloatType,...m});return f&&(e.depthTexture=new i.DepthTexture(s,l,i.FloatType)),e.samples=v,e},[]);return r.useLayoutEffect(()=>{h.setSize(s,l),v&&(h.samples=v)},[v,h,s,l]),r.useEffect(()=>()=>h.dispose(),[]),h}],18050)},45904,e=>{"use strict";var t=e.i(43476),r=e.i(71645),i=e.i(75056),o=e.i(25234),n=e.i(28600),u=e.i(67335),a=e.i(44208),s=e.i(18050),l=e.i(35517),c=e.i(90072),v=e.i(75157);let d=(0,l.shaderMaterial)({uTime:0,uMouse:new c.Vector2(0,0),uPreviousState:null,uResolution:new c.Vector2(0,0),uRadius:.1,uDecay:.01,uIntensity:1,uSpeed:0,uDirection:new c.Vector2(0,0)},`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,`
    uniform float uTime;
    uniform vec2 uMouse;
    uniform sampler2D uPreviousState;
    uniform vec2 uResolution;
    uniform float uRadius;
    uniform float uDecay;
    uniform float uIntensity;
    uniform float uSpeed;
    uniform vec2 uDirection;

    varying vec2 vUv;

    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
    float snoise(vec2 v) {
      const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod289(i);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    vec2 curl(vec2 p) {
      float eps = 0.1;
      float n1 = snoise(p + vec2(0, eps));
      float n2 = snoise(p - vec2(0, eps));
      float n3 = snoise(p + vec2(eps, 0));
      float n4 = snoise(p - vec2(eps, 0));
      float x = (n1 - n2) / (2.0 * eps);
      float y = (n3 - n4) / (2.0 * eps);
      return vec2(y, -x);
    }

    void main() {
      vec2 uv = vUv;
      vec2 texel = 1.0 / uResolution;

      vec2 noiseUV = uv * 0.5;
      vec2 velocity = curl(noiseUV + uTime * 0.1);

      float advectionStrength = 0.001;
      vec2 advectedUV = uv - velocity * advectionStrength;

      float prev = texture2D(uPreviousState, advectedUV).r;
      float top = texture2D(uPreviousState, advectedUV + vec2(0.0, texel.y)).r;
      float bottom = texture2D(uPreviousState, advectedUV - vec2(0.0, texel.y)).r;
      float left = texture2D(uPreviousState, advectedUV - vec2(texel.x, 0.0)).r;
      float right = texture2D(uPreviousState, advectedUV + vec2(texel.x, 0.0)).r;

      float diffused = (prev + top + bottom + left + right) / 5.0;

      float aspect = uResolution.x / uResolution.y;
      vec2 aspectCorrection = vec2(aspect, 1.0);
      vec2 mouseUV = uMouse;

      float dist = length((uv - mouseUV) * aspectCorrection);

      float brush = exp(-pow(dist / uRadius, 2.0));

      float speedFactor = smoothstep(0.0, 0.01, uSpeed);

      brush *= uIntensity * speedFactor * 0.5;

      float value = min(0.95, diffused + brush);

      value -= uDecay;

      gl_FragColor = vec4(vec3(max(0.0, value)), 1.0);
    }
  `),m=(0,l.shaderMaterial)({uSimulationState:null,uDitherSize:8,uExponent:2,uResolution:new c.Vector2(0,0),uColor:new c.Vector3(0,0,0)},`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,`
    uniform sampler2D uSimulationState;
    uniform float uDitherSize;
    uniform float uExponent;
    uniform vec2 uResolution;
    uniform vec3 uColor;

    varying vec2 vUv;

    float bayer8(vec2 uv) {
        int x = int(mod(uv.x, 8.0));
        int y = int(mod(uv.y, 8.0));

        int M[64];
        M[0]=0;  M[1]=32; M[2]=8;  M[3]=40; M[4]=2;  M[5]=34; M[6]=10; M[7]=42;
        M[8]=48; M[9]=16; M[10]=56;M[11]=24;M[12]=50;M[13]=18;M[14]=58;M[15]=26;
        M[16]=12;M[17]=44;M[18]=4; M[19]=36;M[20]=14;M[21]=46;M[22]=6; M[23]=38;
        M[24]=60;M[25]=28;M[26]=52;M[27]=20;M[28]=62;M[29]=30;M[30]=54;M[31]=22;
        M[32]=3; M[33]=35;M[34]=11;M[35]=43;M[36]=1; M[37]=33;M[38]=9; M[39]=41;
        M[40]=51;M[41]=19;M[42]=59;M[43]=27;M[44]=49;M[45]=17;M[46]=57;M[47]=25;
        M[48]=15;M[49]=47;M[50]=7; M[51]=39;M[52]=13;M[53]=45;M[54]=5; M[55]=37;
        M[56]=63;M[57]=31;M[58]=55;M[59]=23;M[60]=61;M[61]=29;M[62]=53;M[63]=21;

        int idx = y * 8 + x;
        return float(M[idx]) / 64.0;
    }

    void main() {
      vec2 uv = vUv;

      float signal = texture2D(uSimulationState, uv).r;

      signal = pow(signal, uExponent);

      float threshold = bayer8(gl_FragCoord.xy / uDitherSize);

      float mask = step(threshold, signal);

      if (signal < 0.01) mask = 0.0;

      vec3 finalColor = uColor;

      // Discard unlit pixels and render lit pixels fully opaque.
      // Previously this fragment shader output a vec4(finalColor, mask)
      // with non-premultiplied alpha, then relied on standard
      // alpha-blending against the page background. That blend happens
      // in the framebuffer's encoded color space (sRGB), which is
      // mathematically incorrect for alpha compositing and visibly
      // desaturates/darkens midtones — the rendered hex no longer
      // matches the authored hex. Switching to a hard discard means each
      // lit dot is the literal hex with no compositing math at all,
      // restoring fidelity to the color picker. Areas without dots are
      // fully transparent so the tile background still shows through.
      if (mask < 0.5) discard;

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `);(0,u.extend)({SimulationMaterial:d,DitherMaterial:m});let f=({simulationScene:e,ditherSize:i,radius:u,exponent:l,decay:v,intensity:d,color:m})=>{let{size:f,viewport:h,gl:x}=(0,n.useThree)(),p=(0,r.useRef)(new c.Vector2(0,0)),M=(0,r.useRef)(new c.Vector2(0,0)),g=(0,r.useRef)(0);(0,r.useEffect)(()=>{let e=e=>{let t=x.domElement;if(t){let r=t.getBoundingClientRect(),i=(e.clientX-r.left)/r.width,o=1-(e.clientY-r.top)/r.height;p.current.set(i,o)}};return window.addEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)},[x.domElement]);let y=(0,s.useFBO)({minFilter:c.NearestFilter,magFilter:c.NearestFilter}),w=(0,s.useFBO)({minFilter:c.NearestFilter,magFilter:c.NearestFilter}),S=(0,r.useRef)(null),b=(0,r.useRef)(null),R=(0,r.useRef)(0);return(0,o.useFrame)(t=>{let{gl:r,clock:o}=t,n=R.current%2==0?y:w,a=R.current%2==0?w:y;if(S.current){S.current.uTime=o.elapsedTime,S.current.uMouse=p.current,S.current.uPreviousState=a.texture,S.current.uResolution=new c.Vector2(f.width,f.height),S.current.uRadius=u,S.current.uDecay=v,S.current.uIntensity=d,S.current.uDecay=v,S.current.uIntensity=d;let e=p.current,t=M.current,r=e.distanceTo(t);g.current=c.MathUtils.lerp(g.current,r,.1),S.current.uSpeed=g.current;let i=new c.Vector2().subVectors(e,t).normalize();S.current.uDirection=i,M.current.copy(e)}if(r.setRenderTarget(n),r.render(e,t.camera),r.setRenderTarget(null),b.current){b.current.uSimulationState=n.texture,b.current.uDitherSize=i,b.current.uExponent=l,b.current.uResolution=new c.Vector2(f.width,f.height);let e=m.replace("#",""),t=parseInt(e.substring(0,2),16)/255,r=parseInt(e.substring(2,4),16)/255,o=parseInt(e.substring(4,6),16)/255;b.current.uColor=new c.Vector3(t,r,o)}R.current++}),(0,t.jsxs)(t.Fragment,{children:[(0,a.createPortal)((0,t.jsxs)("mesh",{children:[(0,t.jsx)("planeGeometry",{args:[h.width,h.height]}),(0,t.jsx)("simulationMaterial",{ref:S})]}),e),(0,t.jsxs)("mesh",{children:[(0,t.jsx)("planeGeometry",{args:[h.width,h.height]}),(0,t.jsx)("ditherMaterial",{ref:b,transparent:!0})]})]})};e.s(["default",0,({ditherSize:e=2,radius:o=.1,exponent:n=2,decay:u=.01,intensity:a=.5,color:s="#000000",className:l})=>{let d=(0,r.useMemo)(()=>new c.Scene,[]);return(0,t.jsx)("div",{className:(0,v.cn)("absolute top-0 left-0 w-full h-full pointer-events-none z-10",l),children:(0,t.jsx)(i.Canvas,{orthographic:!0,camera:{zoom:1,position:[0,0,1],near:.1,far:1e3},gl:{alpha:!0,antialias:!1},onCreated:({gl:e})=>{e.outputColorSpace=c.LinearSRGBColorSpace},className:"w-full h-full",children:(0,t.jsx)(f,{simulationScene:d,ditherSize:e,radius:o,exponent:n,decay:u,intensity:a,color:s})})})}])},49922,e=>{e.n(e.i(45904))}]);