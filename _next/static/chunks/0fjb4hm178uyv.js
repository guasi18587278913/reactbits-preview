(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,51384,e=>{"use strict";var t=e.i(43476),o=e.i(71645),i=e.i(8560),a=e.i(90072),n=e.i(75157);let l=({width:e=400,height:l=500,borderRadius:r="12px",speed:s=1,className:f="",fragmentShader:u,autoPlay:c=!0,color:m="#FF9FFC",positionY:d=.1,scale:p=3,effectRadius:v=.9,effectBoost:x=.5,edgeMin:h=0,edgeMax:g=.5,falloffPower:w=2,noiseScale:C=1.5,widthFactor:y=.5,waveAmount:F=.5,branchIntensity:E=.5,verticalExtent:S=1.5,horizontalExtent:B=1.5,blur:R=0,opacity:P=1,children:b})=>{let I=(0,o.useRef)(null),V=(0,o.useRef)(0),A=(0,o.useRef)(0),M=(0,o.useRef)(!c);return(0,o.useEffect)(()=>{let e;if(!I.current)return;let t=I.current,o=(e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(m))?{r:parseInt(e[1],16)/255,g:parseInt(e[2],16)/255,b:parseInt(e[3],16)/255}:{r:0,g:1,b:1},n=t.getBoundingClientRect(),l=n.width,r=n.height,f=new i.WebGLRenderer({antialias:!0,alpha:!0,powerPreference:"high-performance"});f.setClearColor(0,0);let c=Math.min(window.devicePixelRatio,2);f.setSize(l,r,!1),f.setPixelRatio(c),f.domElement.style.width="100%",f.domElement.style.height="100%",f.domElement.style.display="block",t.appendChild(f.domElement);let R=new a.Scene,P=new a.OrthographicCamera(-1,1,1,-1,0,1),b={iTime:{value:0},iResolution:{value:new a.Vector3(l*c,r*c,1)},uColor:{value:new a.Vector3(o.r,o.g,o.b)},uPositionY:{value:d},uScale:{value:p},uEffectRadius:{value:v},uEffectBoost:{value:x},uEdgeMin:{value:h},uEdgeMax:{value:g},uFalloffPower:{value:w},uNoiseScale:{value:C},uWidthFactor:{value:y},uWaveAmount:{value:F},uBranchIntensity:{value:E},uVerticalExtent:{value:S},uHorizontalExtent:{value:B}},N=`
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `,z=`
      uniform float iTime;
      uniform vec3 iResolution;
      uniform vec3 uColor;
      uniform float uPositionY;
      uniform float uScale;
      uniform float uEffectRadius;
      uniform float uEffectBoost;
      uniform float uEdgeMin;
      uniform float uEdgeMax;
      uniform float uFalloffPower;
      uniform float uNoiseScale;
      uniform float uWidthFactor;
      uniform float uWaveAmount;
      uniform float uBranchIntensity;
      uniform float uVerticalExtent;
      uniform float uHorizontalExtent;

      vec3 random3(vec3 c) {
        float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
        vec3 r;
        r.z = fract(512.0*j);
        j *= .125;
        r.x = fract(512.0*j);
        j *= .125;
        r.y = fract(512.0*j);
        return r-0.5;
      }

      /* skew constants for 3d simplex functions */
      const float F3 =  0.3333333;
      const float G3 =  0.1666667;

      /* 3d simplex noise */
      float simplex3d(vec3 p) {
        /* calculate s and x */
        vec3 s = floor(p + dot(p, vec3(F3)));
        vec3 x = p - s + dot(s, vec3(G3));

        /* calculate i1 and i2 */
        vec3 e = step(vec3(0.0), x - x.yzx);
        vec3 i1 = e*(1.0 - e.zxy);
        vec3 i2 = 1.0 - e.zxy*(1.0 - e);

        /* x1, x2, x3 */
        vec3 x1 = x - i1 + G3;
        vec3 x2 = x - i2 + 2.0*G3;
        vec3 x3 = x - 1.0 + 3.0*G3;

        /* 2. find four surflets and store them in d */
        vec4 w, d;

        /* calculate surflet weights */
        w.x = dot(x, x);
        w.y = dot(x1, x1);
        w.z = dot(x2, x2);
        w.w = dot(x3, x3);

        /* w fades from 0.6 at the center of the surflet to 0.0 at the margin */
        w = max(0.6 - w, 0.0);

        /* calculate surflet components */
        d.x = dot(random3(s), x);
        d.y = dot(random3(s + i1), x1);
        d.z = dot(random3(s + i2), x2);
        d.w = dot(random3(s + 1.0), x3);

        /* multiply d by w^4 */
        w *= w;
        w *= w;
        d *= w;

        /* 3. return the sum of the four surflets */
        return dot(d, vec4(52.0));
      }

      /* const matrices for 3d rotation */
      const mat3 rot1 = mat3(-0.37, 0.36, 0.85,-0.14,-0.93, 0.34,0.92, 0.01,0.4);
      const mat3 rot2 = mat3(-0.55,-0.39, 0.74, 0.33,-0.91,-0.24,0.77, 0.12,0.63);
      const mat3 rot3 = mat3(-0.71, 0.52,-0.47,-0.08,-0.72,-0.68,-0.7,-0.45,0.56);

      /* directional artifacts can be reduced by rotating each octave */
      float simplex3d_fractal(vec3 m) {
        return   0.5333333*simplex3d(m*rot1)
          +0.2666667*simplex3d(2.0*m*rot2)
          +0.1333333*simplex3d(4.0*m*rot3)
          +0.0666667*simplex3d(8.0*m);
      }

      #define NIGHTSPEEDBONUS 1.25
      #define SHAPE 0
      #define BREATHWILDNESS 1
      #define PI 3.14159265359

      void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
        float time = 28.22+NIGHTSPEEDBONUS*iTime;
        float bignessScale = 1.0/uNoiseScale;

        vec2 uv = (fragCoord.xy / iResolution.xy) * 2.0 - 1.0;
        float aspect = iResolution.x / iResolution.y;
        uv.x *= aspect;

        float effectiveScale = max(uScale, 0.5);
        uv = uv / effectiveScale;

        float yOffset = mix(-0.3, 0.8, uPositionY);
        uv.y -= yOffset;

        uv.y *= uVerticalExtent;
        uv.x *= uHorizontalExtent;

        vec2 p = (uv / aspect + 1.0) * 0.5 * iResolution.y / iResolution.y;
        p.x *= aspect;

        vec2 positionFromCenter = uv;
        positionFromCenter/=uEffectRadius;
        positionFromCenter.x /= uWidthFactor;
        float positionFromBottom = 0.5*(positionFromCenter.y+1.0);

        vec2 waveOffset = vec2(0.);
        waveOffset.x += positionFromBottom*sin(4.0*positionFromCenter.y-4.0*time);
        waveOffset.x += 0.1*positionFromBottom*sin(4.0*positionFromCenter.x-1.561*time);

        waveOffset.x += uBranchIntensity * 0.15 * sin(8.0*positionFromCenter.y + time * 2.0);
        waveOffset.x += uBranchIntensity * 0.1 * sin(12.0*positionFromCenter.y - time * 1.5);
        waveOffset.y += uBranchIntensity * 0.08 * sin(6.0*positionFromCenter.x + time * 1.8);

        positionFromCenter += uWaveAmount*waveOffset;

        float outerMask = length(positionFromCenter);
        if(SHAPE == 0) {
          positionFromCenter.x += positionFromCenter.x / (1.0-(positionFromCenter.y));
        }
        else if(SHAPE == 1) {
          positionFromCenter.x += positionFromCenter.x * positionFromBottom;
        }
        else if(SHAPE == 2) {
          positionFromCenter.x += sign(positionFromCenter.x) * positionFromBottom;
        }

        float effectMask = clamp(1.0-length(positionFromCenter), 0.0, 1.0);
        effectMask = 1.0-pow(1.0-effectMask, uFalloffPower);

        vec3 p3 = bignessScale*0.25*vec3(p.x, p.y, 0.0) + vec3(0.0, -time*0.1, time*0.025);
        float noise = simplex3d(p3*32.0);

        noise += 0.3 * simplex3d(p3*64.0 + vec3(time*0.05, time*0.03, 0.0));
        noise += 0.15 * simplex3d(p3*128.0 - vec3(time*0.08, 0.0, time*0.04));

        noise = 0.5 + 0.5*noise;

        vec3 finalColor;
        float finalAlpha = 0.0;

        float value = effectMask*noise;
        value += uEffectBoost*effectMask;

        if(BREATHWILDNESS == 1) {
          float edge = mix(uEdgeMin, uEdgeMax, pow(0.5*(positionFromCenter.y+1.0), 1.2) );
          float edgedValue = clamp(value-edge, 0.0 , 1.0);
          float steppedValue = smoothstep(edge,edge+0.1, value);
          float highlight = 1.0-edgedValue;
          float repeatedValue = highlight;

          p3 = bignessScale*0.1*vec3(p.x, p.y, 0.0) + vec3(0.0, -time*0.01, time*0.025);
          noise = simplex3d(p3*32.0);
          noise = 0.5 + 0.5*noise;
          repeatedValue = mix(repeatedValue, noise, 0.65);

          repeatedValue = 0.5*sin(6.0*PI*(1.0-pow(1.0-repeatedValue,1.8)) - 0.5*PI)+0.5;
          float steppedLines = smoothstep(0.95, 1.0, pow(repeatedValue, 8.0));
          steppedLines = mix(steppedLines, 0.0, 0.8-noise);
          highlight = max(steppedLines, highlight);

          highlight = pow(highlight, 2.0);

          vec3 effectHighlightColor = mix(uColor * 0.8, uColor * 1.5, p.y);

          float whiteFlash =  sin(time*3.0);
          whiteFlash = pow(whiteFlash, 4.0);
          effectHighlightColor += vec3(0.3,0.2,0.2) * whiteFlash;

          vec3 effectBodyColor = mix(uColor * 0.7, uColor * 1.0, p.y);

          finalColor = effectHighlightColor*(steppedValue*highlight);
          finalColor += effectBodyColor*steppedValue;

          float brightness = dot(finalColor, vec3(0.299, 0.587, 0.114));
          float alphaBoost = smoothstep(0.0, 0.3, brightness);
          finalAlpha = steppedValue * mix(0.4, 0.95, alphaBoost);
        }

        fragColor = vec4(finalColor, finalAlpha);
      }

      void main() {
        vec4 color = vec4(0.0);
        mainImage(color, gl_FragCoord.xy);
        gl_FragColor = color;
      }
    `,H=new a.ShaderMaterial({uniforms:b,vertexShader:N,fragmentShader:u||z,transparent:!0,blending:a.NormalBlending,depthTest:!1,depthWrite:!1}),O=new a.PlaneGeometry(2,2),T=new a.Mesh(O,H);R.add(T),A.current=performance.now();let j=()=>{if(V.current=requestAnimationFrame(j),!M.current){let e=(performance.now()-A.current)/1e3;b.iTime.value=e*s}f.render(R,P)};j();let W=()=>{let e=t.getBoundingClientRect(),o=e.width,i=e.height;f.setSize(o,i,!1),b.iResolution.value.set(o*c,i*c,1)};return window.addEventListener("resize",W),()=>{window.removeEventListener("resize",W),cancelAnimationFrame(V.current),R.remove(T),O.dispose(),H.dispose(),f.dispose(),f.domElement&&f.domElement.parentNode===t&&t.removeChild(f.domElement)}},[e,l,s,u,c,m,d,p,v,x,h,g,w,C,y,F,E,S,B,R,P]),(0,t.jsxs)("div",{className:(0,n.cn)("relative overflow-hidden shadow-lg border bg-card rounded-xl",f),style:{width:`${e}px`,height:`${l}px`,..."12px"!==r&&{borderRadius:r}},children:[(0,t.jsx)("div",{ref:I,className:"absolute inset-0",style:{filter:R>0?`blur(${R}px)`:void 0,opacity:P}}),b&&(0,t.jsx)("div",{className:"relative z-10 w-full h-full flex flex-col",children:b})]})};l.displayName="ShaderCard",e.s(["default",0,l])},45242,e=>{e.n(e.i(51384))}]);