(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,79723,e=>{"use strict";var o=e.i(43476),t=e.i(71645),l=e.i(90072),n=e.i(8560),a=e.i(75157);e.s(["default",0,({size:e=400,animationSpeed:r=1,glowIntensity:i=.8,noiseScale:s=3,innerScale:c=1,resolution:u=1,colors:f=["#ff006e","#8338ec","#3a86ff","#06ffa5"],className:d,style:m})=>{let v=(0,t.useRef)(null),p=(0,t.useRef)(null);return(0,t.useEffect)(()=>{let o,t,a,d;if(!v.current)return;let m=v.current,g=e=>{let o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return o?new l.Vector3(parseInt(o[1],16)/255,parseInt(o[2],16)/255,parseInt(o[3],16)/255):new l.Vector3(1,1,1)},h=g(f[0]||"#ff006e"),C=g(f[1]||"#8338ec"),P=g(f[2]||"#3a86ff"),x=g(f[3]||"#06ffa5"),y=new n.WebGLRenderer({antialias:!0,alpha:!0,powerPreference:"high-performance",premultipliedAlpha:!1,stencil:!1,depth:!1});y.setClearColor(0,0);let w=Math.min(window.devicePixelRatio,2)*u;y.setPixelRatio(w),y.setSize(e,e);let S=e*w,b=e*w,E=y.getContext();E&&(E.enable(E.BLEND),E.blendFunc(E.SRC_ALPHA,E.ONE_MINUS_SRC_ALPHA)),y.domElement.style.backgroundColor="transparent",y.domElement.style.background="transparent",y.domElement.style.display="block",y.domElement.style.position="absolute",y.domElement.style.top="0",y.domElement.style.left="0",y.domElement.style.margin="0",y.domElement.style.padding="0",m.appendChild(y.domElement);let I=new l.Scene,R=new l.OrthographicCamera(-1,1,1,-1,0,1);p.current={uTime:{value:0},uResolution:{value:new l.Vector2(S,b)},uSpeed:{value:r},uGlowIntensity:{value:i},uNoiseScale:{value:s},uInnerScale:{value:c},uColor1:{value:h},uColor2:{value:C},uColor3:{value:P},uColor4:{value:x}};let N=`
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `,_=`
      precision mediump float;

      uniform float uTime;
      uniform vec2 uResolution;
      uniform float uSpeed;
      uniform float uGlowIntensity;
      uniform float uNoiseScale;
      uniform float uInnerScale;
      uniform vec3 uColor1;
      uniform vec3 uColor2;
      uniform vec3 uColor3;
      uniform vec3 uColor4;

      #define PI_TWO 6.28318530718

      float rng(vec2 n) {
        return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
      }

      float perlin(vec2 p) {
        vec2 ip = floor(p);
        vec2 u = fract(p);
        u = u*u*(3.0-2.0*u);
        float res = mix(
          mix(rng(ip),rng(ip+vec2(1.0,0.0)),u.x),
          mix(rng(ip+vec2(0.0,1.0)),rng(ip+vec2(1.0,1.0)),u.x),u.y);
        return res*res;
      }

      float fractal(vec2 p, int octaves) {
        float s = 0.0;
        float m = 0.0;
        float a = 0.5;

        s += a * perlin(p);
        m += a;
        a *= 0.5;
        p *= 2.0;

        if (octaves >= 2)
        {
          s += a * perlin(p);
          m += a;
        }

        return s / m;
      }

      vec3 palette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
        return a + b * cos(PI_TWO * (c * t + d));
      }

      float brightness(vec3 color) {
        return dot(color, vec3(0.299, 0.587, 0.114));
      }

      mat3 rotateX(float angle) {
        float s = sin(angle);
        float c = cos(angle);
        return mat3(
          1.0, 0.0, 0.0,
          0.0, c, -s,
          0.0, s, c
        );
      }

      mat3 rotateY(float angle) {
        float s = sin(angle);
        float c = cos(angle);
        return mat3(
          c, 0.0, s,
          0.0, 1.0, 0.0,
          -s, 0.0, c
        );
      }

      mat3 rotateZ(float angle) {
        float s = sin(angle);
        float c = cos(angle);
        return mat3(
          c, -s, 0.0,
          s, c, 0.0,
          0.0, 0.0, 1.0
        );
      }

      void main() {
        float min_res = min(uResolution.x, uResolution.y);
        vec2 uv = (gl_FragCoord.xy * 2.0 - uResolution.xy) / min_res * 1.5;
        float t = uTime * uSpeed;

        float l = dot(uv, uv);
        if (l > 2.5) {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
          return;
        }

        float sm = smoothstep(1.04, 0.96, l);

        float z = sqrt(max(0.0, 1.0 - min(l, 1.0)));
        vec3 noisePos = normalize(vec3(uv.x, uv.y, z));

        float angleX = sin(t * 0.23) * 1.5 + cos(t * 0.37) * 0.6;
        float angleY = sin(t * 0.19) * 1.3 + cos(t * 0.41) * 0.7;
        float angleZ = sin(t * 0.31) * 1.1 + cos(t * 0.29) * 0.5;

        noisePos = rotateX(angleX) * noisePos;
        noisePos = rotateY(angleY) * noisePos;
        noisePos = rotateZ(angleZ) * noisePos;

        float d = sm * l * l * l * 2.0;
        vec3 norm = normalize(vec3(uv.x, uv.y, .7 - d));

        float nx = fractal(noisePos.xy * 2.0 * uNoiseScale / 3.0 + t * 0.4 + 25.69, 2);
        float ny = fractal(noisePos.xy * 2.0 * uNoiseScale / 3.0 + t * 0.4 + 86.31, 2);
        float n = fractal(noisePos.xy * uNoiseScale + 2.0 * vec2(nx, ny), 2);
        vec3 col = vec3(n * 0.5 + 0.25);
        float a = atan(noisePos.y, noisePos.x) / PI_TWO + t * 0.1;

        float gradPos = fract(a);
        vec3 gradientColor;
        if (gradPos < 0.25) {
          gradientColor = mix(uColor1, uColor2, gradPos * 4.0);
        } else if (gradPos < 0.5) {
          gradientColor = mix(uColor2, uColor3, (gradPos - 0.25) * 4.0);
        } else if (gradPos < 0.75) {
          gradientColor = mix(uColor3, uColor4, (gradPos - 0.5) * 4.0);
        } else {
          gradientColor = mix(uColor4, uColor1, (gradPos - 0.75) * 4.0);
        }

        col *= gradientColor;
        col *= 2.0 * uGlowIntensity * 1.25;
        vec3 cd = abs(col);
        vec3 c = col * d;

        float lightDot = max(0.0, dot(norm, vec3(0, 0, -1)));
        c += (c * 0.5 + vec3(1.0) - brightness(c)) * vec3(lightDot * lightDot * lightDot * lightDot * lightDot * 3.0);

        col = c + col * pow(
          (1.0 - smoothstep(1.0, 0.98, l) - pow(max(0.0, length(uv) - 1.0), 0.2)) * 2.0,
          4.0
        );

        float f = fractal(noisePos.xy * 2. + t, 2) + 0.1;
        vec2 innerUV = uv * (f + 0.1) * 0.5 / uInnerScale;
        float innerL = dot(innerUV, innerUV);
        vec3 ins = normalize(cd) + 0.1;
        float ind = 0.2 + pow(smoothstep(0.0, 1.5, sqrt(innerL)) * 48.0, 0.25);
        ind *= ind * ind * ind;
        ind = 1.0 / ind;
        ins *= ind;
        col += ins * ins * sm * smoothstep(0.7, 1.0, ind) * uGlowIntensity;
        col += abs(norm) * (1.0 - d) * sm * 0.25;

        float colBrightness = brightness(col);
        float alpha = sm * pow(colBrightness, 2.5) * 2.0;
        alpha = clamp(alpha, 0.0, 1.0);

        float edgeDist = length(uv);
        float edgeFalloff = smoothstep(1.0, 0.95, edgeDist);
        alpha *= edgeFalloff;

        col = pow(col, vec3(0.95));

        gl_FragColor = vec4(col, alpha);
      }
    `,T=new l.ShaderMaterial({uniforms:p.current,vertexShader:N,fragmentShader:_,transparent:!0,blending:l.NormalBlending,depthTest:!1,depthWrite:!1}),A=new l.PlaneGeometry(2,2),D=new l.Mesh(A,T);I.add(D),t=Math.min(window.devicePixelRatio,2)*u,y.setSize(e,e),a=e*t,d=e*t,p.current.uResolution.value.set(a,d);let F=e=>{o=requestAnimationFrame(F),p.current&&(p.current.uTime.value=.001*e),y.render(I,R)};return F(0),()=>{cancelAnimationFrame(o),I.remove(D),A.dispose(),T.dispose(),y.dispose(),y.domElement.parentNode===m&&m.removeChild(y.domElement)}},[e,r,i,s,c,u,f]),(0,t.useEffect)(()=>{p.current&&(p.current.uSpeed.value=r)},[r]),(0,t.useEffect)(()=>{p.current&&(p.current.uGlowIntensity.value=i)},[i]),(0,t.useEffect)(()=>{p.current&&(p.current.uNoiseScale.value=s)},[s]),(0,t.useEffect)(()=>{p.current&&(p.current.uInnerScale.value=c)},[c]),(0,t.useEffect)(()=>{if(p.current){let e=e=>{let o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return o?new l.Vector3(parseInt(o[1],16)/255,parseInt(o[2],16)/255,parseInt(o[3],16)/255):new l.Vector3(1,1,1)};p.current.uColor1.value=e(f[0]||"#ff006e"),p.current.uColor2.value=e(f[1]||"#8338ec"),p.current.uColor3.value=e(f[2]||"#3a86ff"),p.current.uColor4.value=e(f[3]||"#06ffa5")}},[f]),(0,o.jsx)("div",{className:(0,a.cn)("relative",d),style:{width:e,height:e,...m},children:(0,o.jsx)("div",{ref:v,className:"w-full h-full bg-transparent pointer-events-none select-none"})})}])},5753,e=>{e.n(e.i(79723))}]);