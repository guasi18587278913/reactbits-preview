(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,91156,e=>{"use strict";var t=e.i(43476),l=e.i(71645),o=e.i(75157),r=e.i(90072),a=e.i(8560);let i=({className:e,primaryColor:i="#C084FC",secondaryColor:n="#E879F9",centerColor:u="#F0ABFC",speed:s=1,density:c=1,layerCount:d=7,waveAmplitude:f=1,waveFrequency:m=.08,verticalDistortion:p=.2,depthIntensity:v=.2,brightness:h=1,scale:C=1,ballBgColor:g="transparent"})=>{let y=(0,l.useRef)(null),P=(0,l.useRef)(null),w=(0,l.useRef)(null),S=(0,l.useRef)(null),B=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let e,t=y.current;if(!t)return;let l=new r.Scene;w.current=l;let o=new r.OrthographicCamera(-1,1,1,-1,0,1);S.current=o;let F=new a.WebGLRenderer({antialias:!0,alpha:!0,premultipliedAlpha:!1});F.setPixelRatio(Math.min(window.devicePixelRatio,2)),P.current=F,t.appendChild(F.domElement);let b=`
      varying vec2 vUv;

      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,R=`
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec3 uPrimaryColor;
      uniform vec3 uSecondaryColor;
      uniform vec3 uCenterColor;
      uniform float uSpeed;
      uniform float uDensity;
      uniform int uLayerCount;
      uniform float uWaveAmplitude;
      uniform float uWaveFrequency;
      uniform float uVerticalDistortion;
      uniform float uDepthIntensity;
      uniform float uBrightness;
      uniform float uScale;
      uniform vec3 uBallBgColor;
      uniform float uBallBgAlpha;

      varying vec2 vUv;

      float generateParticleField(vec2 coord, float scale) {
        float timeOffset = uTime * uSpeed * 2.3;
        coord *= scale;
        coord.x += timeOffset;

        vec2 cellId = floor(coord);
        vec2 localPos = fract(coord);

        vec2 randomSeed = 0.5 + 0.35 * sin(
          11.0 * fract(
            sin((cellId + scale) * mat2(7, 3, 6, 5)) * 5.0
          )
        );

        vec2 particleOffset = randomSeed - localPos;
        float distToParticle = length(particleOffset);

        float particleIntensity = smoothstep(
          0.0,
          distToParticle,
          sin(localPos.x + localPos.y) * 0.003
        );

        return particleIntensity;
      }

      vec3 computePortalEffect(vec2 coord) {
        float depthGradient = 0.5 - length(coord);

        coord.x += sin(uTime * uWaveFrequency) * uWaveAmplitude;
        coord.y += sin(coord.x * 1.4) * uVerticalDistortion;
        coord.x *= 0.1;

        float particleSum = 0.0;

        if (uLayerCount > 0) particleSum += generateParticleField(coord, 30.0 * uDensity) * 0.3;
        if (uLayerCount > 1) particleSum += generateParticleField(coord, 20.0 * uDensity) * 0.5;
        if (uLayerCount > 2) particleSum += generateParticleField(coord, 15.0 * uDensity) * 0.8;
        if (uLayerCount > 3) particleSum += generateParticleField(coord, 10.0 * uDensity);
        if (uLayerCount > 4) particleSum += generateParticleField(coord, 8.0 * uDensity);
        if (uLayerCount > 5) particleSum += generateParticleField(coord, 6.0 * uDensity);
        if (uLayerCount > 6) particleSum += generateParticleField(coord, 5.0 * uDensity);

        particleSum *= uDepthIntensity / depthGradient;

        vec3 portalGlow = mix(uPrimaryColor, uSecondaryColor, 0.5) * particleSum * 30.0 * uBrightness;

        vec3 centerGlow = uCenterColor * 0.02 / depthGradient;

        return portalGlow + centerGlow;
      }

      void main() {
        vec2 coord = (vUv - 0.5) * 2.0;
        coord.x *= uResolution.x / uResolution.y;

        coord /= uScale;

        vec3 portalColor = computePortalEffect(coord);

        float distFromCenter = length(coord);

        float ballRadius = 0.5;
        float ballMaskHard = step(distFromCenter, ballRadius);

        float edgeWidth = fwidth(distFromCenter) * 0.5;
        float ballMaskSoft = smoothstep(ballRadius + edgeWidth, ballRadius - edgeWidth, distFromCenter);

        float portalBrightness = length(portalColor);

        float brightnessThreshold = 0.5;
        float showPortal = smoothstep(brightnessThreshold, brightnessThreshold + 0.4, portalBrightness);

        showPortal = pow(showPortal, 2.0);

        showPortal *= ballMaskHard;

        vec3 finalColor = vec3(0.0);
        float finalAlpha = 0.0;

        if (uBallBgAlpha > 0.0) {
          finalColor = uBallBgColor;
          finalAlpha = ballMaskHard * uBallBgAlpha;

          finalColor = mix(finalColor, portalColor, showPortal);
          finalAlpha = max(finalAlpha, showPortal * ballMaskSoft);
        } else {
          finalColor = portalColor;
          finalAlpha = showPortal * ballMaskSoft;
        }

        gl_FragColor = vec4(finalColor, finalAlpha);
      }
    `,A=e=>{let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?new r.Vector3(parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255):new r.Vector3(.7,.35,.9)},x=new r.Vector3(0,0,0),D=0;if(g&&"transparent"!==g){let e=/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/i.exec(g);e?(x=new r.Vector3(parseInt(e[1])/255,parseInt(e[2])/255,parseInt(e[3])/255),D=e[4]?parseFloat(e[4]):1):(x=A(g),D=1)}let T=new r.ShaderMaterial({vertexShader:b,fragmentShader:R,uniforms:{uTime:{value:0},uResolution:{value:new r.Vector2(1,1)},uPrimaryColor:{value:A(i)},uSecondaryColor:{value:A(n)},uCenterColor:{value:A(u)},uSpeed:{value:s},uDensity:{value:c},uLayerCount:{value:d},uWaveAmplitude:{value:f},uWaveFrequency:{value:m},uVerticalDistortion:{value:p},uDepthIntensity:{value:v},uBrightness:{value:h},uScale:{value:C},uBallBgColor:{value:x},uBallBgAlpha:{value:D}},transparent:!0});B.current=T;let I=new r.PlaneGeometry(2,2),M=new r.Mesh(I,T);l.add(M);let L=()=>{let e=t.getBoundingClientRect(),l=e.width,o=e.height;F.setSize(l,o),T.uniforms.uResolution.value.set(l,o)};L();let W=new ResizeObserver(L);W.observe(t);let G=new r.Clock,V=()=>{let t=G.getElapsedTime();T.uniforms.uTime.value=t,F.render(l,o),e=requestAnimationFrame(V)};return V(),()=>{cancelAnimationFrame(e),W.disconnect(),F.dispose(),I.dispose(),T.dispose(),t.removeChild(F.domElement)}},[i,n,u,s,c,d,f,m,p,v,h,C,g]),(0,t.jsx)("div",{ref:y,className:(0,o.cn)("absolute inset-0",e)})};e.s(["Portal",0,i,"default",0,i])},16742,e=>{e.n(e.i(91156))}]);