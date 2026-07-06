(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,82729,e=>{"use strict";var t=e.i(43476),o=e.i(71645),r=e.i(90072),i=e.i(8560),a=e.i(75157);let n=({width:e="100%",height:n="100%",speed:l=1,primaryColor:c="#5227FF",secondaryColor:s="#FF9FFC",accentColor:u="#B19EEF",baseColor:m="#27C5FF",size:f=1,morphIntensity:d=.5,enableCursorMorph:v=!0,breathe:h=!1,breatheDuration:p=2,breatheDelay:y=.5,parallax:g=!1,parallaxStrength:w=.5,metallic:C=0,opacity:x=1,rotationSpeed:P=1,autoRotate:S=!0,touchEnabled:R=!0,quality:b="medium",maxFPS:D=60,pauseWhenOffscreen:T=!0,className:B,children:E})=>{let M=(0,o.useRef)(null),O=(0,o.useRef)(0),A=(0,o.useRef)(0),N=(0,o.useRef)(0),I=(0,o.useRef)(new r.Vector2(.5,.5)),z=(0,o.useRef)(new r.Vector2(0,0)),F=(0,o.useRef)(new r.Vector2(0,0)),X=(0,o.useRef)(!0);(0,o.useEffect)(()=>{if(!M.current)return;let e=M.current,t=e=>{let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16)/255,g:parseInt(t[2],16)/255,b:parseInt(t[3],16)/255}:{r:1,g:1,b:1}},o=t(c),a=t(s),n=t(u),B=t(m),E=e.getBoundingClientRect(),V=E.width,k=E.height,L={low:{pixelRatio:1,marchSteps:32,antialias:!1},medium:{pixelRatio:Math.min(window.devicePixelRatio,2),marchSteps:64,antialias:!0},high:{pixelRatio:Math.min(window.devicePixelRatio,3),marchSteps:96,antialias:!0}}[b],_=new i.WebGLRenderer({antialias:L.antialias,alpha:!0,powerPreference:"high-performance",stencil:!1,depth:!1});_.setClearColor(0,0);let Z=L.pixelRatio;_.setSize(V,k,!1),_.setPixelRatio(Z),_.domElement.style.width="100%",_.domElement.style.height="100%",_.domElement.style.display="block",e.appendChild(_.domElement);let G=new r.Scene,H=new r.OrthographicCamera(-1,1,1,-1,0,1),j=V*Z,U=k*Z,Y={iTime:{value:0},iResolution:{value:new r.Vector3(j,U,1)},iMouse:{value:new r.Vector2(.5*j,.5*U)},uPrimaryColor:{value:new r.Vector3(o.r,o.g,o.b)},uSecondaryColor:{value:new r.Vector3(a.r,a.g,a.b)},uAccentColor:{value:new r.Vector3(n.r,n.g,n.b)},uBaseColor:{value:new r.Vector3(B.r,B.g,B.b)},uBlobSize:{value:3*f},uMorphIntensity:{value:d},uEnableCursorMorph:{value:+!!v},uBreathe:{value:+!!h},uBreatheDuration:{value:p},uBreatheDelay:{value:y},uParallaxOffset:{value:new r.Vector2(0,0)},uMetallic:{value:C},uOpacity:{value:x},uRotationSpeed:{value:P},uAutoRotate:{value:+!!S},uMaxSteps:{value:L.marchSteps}},$=`
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `,K=`
      uniform float iTime;
      uniform vec3 iResolution;
      uniform vec2 iMouse;
      uniform vec3 uPrimaryColor;
      uniform vec3 uSecondaryColor;
      uniform vec3 uAccentColor;
      uniform vec3 uBaseColor;
      uniform float uBlobSize;
      uniform float uMorphIntensity;
      uniform float uEnableCursorMorph;
      uniform float uBreathe;
      uniform float uBreatheDuration;
      uniform float uBreatheDelay;
      uniform vec2 uParallaxOffset;
      uniform float uMetallic;
      uniform float uOpacity;
      uniform float uRotationSpeed;
      uniform float uAutoRotate;
      uniform int uMaxSteps;

      const vec3 LIGHT_POSITION = vec3(0.0, -5.0, -5.0);
      const vec3 CAMERA_POSITION = vec3(0.0, 0.0, 5.0);
      const float MAX_DISTANCE = 100.0;
      const float SURFACE_THRESHOLD = 0.001;

      float distanceToSphere(vec3 point, float radius) {
        return length(point) - radius;
      }

      vec3 rotatePoint(vec3 point, float timeValue) {
        if (uAutoRotate < 0.5) {
          return point;
        }

        float angleX = sin(timeValue * uRotationSpeed) * 0.3;
        float angleZ = angleX * 2.0;

        float cosX = cos(angleX);
        float sinX = sin(angleX);
        float cosZ = cos(angleZ);
        float sinZ = sin(angleZ);

        float rotatedX = point.x * cosX - point.y * sinX;
        float rotatedY = point.x * sinX + point.y * cosX;

        float rotatedZ = point.y * sinZ + point.z * cosZ;

        return vec3(rotatedX, rotatedY, rotatedZ);
      }

      float sceneDistance(vec3 point) {
        float baseDist = distanceToSphere(point, uBlobSize);

        vec2 normalizedMouse = iMouse / iResolution.xy;
        vec2 center = vec2(0.5, 0.5);
        float distanceFromCenter = length(normalizedMouse - center);

        float cursorInfluence = uEnableCursorMorph * clamp(
          distanceFromCenter * 0.5,
          0.05,
          0.25
        );

        vec3 scaledPoint = point * 2.0;
        float wave1 = cos(scaledPoint.x + iTime) * sin(scaledPoint.y + iTime * 0.5);
        float wave2 = sin(scaledPoint.z + iTime * 0.7) * cos(scaledPoint.x - iTime);
        float wave3 = cos(scaledPoint.y - iTime * 0.3) * sin(scaledPoint.z + iTime * 0.9);
        float displacement = (wave1 + wave2 + wave3) * 0.33 * cursorInfluence * uMorphIntensity;

        if (uBreathe > 0.5) {
          float cycleTime = uBreatheDuration + uBreatheDelay;
          float breathePhase = mod(iTime, cycleTime);
          float breatheAmount = 0.0;

          if (breathePhase < uBreatheDuration) {
            breatheAmount = sin(breathePhase / uBreatheDuration * 3.14159) * 0.15;
          }

          displacement += breatheAmount * uMorphIntensity;
        }

        return baseDist + displacement;
      }

      vec3 calculateNormal(vec3 point) {
        vec3 rotated = rotatePoint(point, iTime);

        const float h = 0.001;
        const vec2 k = vec2(1.0, -1.0);

        vec3 normal = normalize(
          k.xyy * sceneDistance(rotated + k.xyy * h) +
          k.yyx * sceneDistance(rotated + k.yyx * h) +
          k.yxy * sceneDistance(rotated + k.yxy * h) +
          k.xxx * sceneDistance(rotated + k.xxx * h)
        );

        return normal;
      }

      vec3 blendColorByNormal(vec3 normal) {
        vec3 color = mix(
          uPrimaryColor,
          uSecondaryColor,
          smoothstep(0.3, 0.7, normal.x + 0.45)
        );

        color = mix(
          color,
          uAccentColor,
          smoothstep(0.3, 0.7, normal.y + 0.3)
        );

        color = mix(
          color,
          uBaseColor,
          smoothstep(0.9, 1.2, normal.y + 0.3)
        );

        return color;
      }

      vec3 calculateGlowColor(vec3 samplePoint) {
        vec3 surfaceNormal = calculateNormal(samplePoint);

        vec3 glow = mix(
          uPrimaryColor,
          uSecondaryColor,
          smoothstep(-1.0, 1.0, surfaceNormal.x)
        );

        vec3 highlightBlend = mix(
          uAccentColor,
          uBaseColor,
          smoothstep(1.0, 3.0, surfaceNormal.y)
        );

        glow = mix(
          glow,
          highlightBlend,
          smoothstep(-1.0, 1.0, surfaceNormal.y)
        );

        return glow;
      }

      vec3 raymarch(vec3 rayOrigin, vec3 rayDirection) {
        vec3 glowSamplePoint = rayOrigin + rayDirection * 3.0;
        vec3 glowColor = calculateGlowColor(glowSamplePoint);

        float totalDistance = 0.0;
        float minStepSize = 0.001;

        for (int i = 0; i < uMaxSteps; i++) {
          vec3 currentPoint = rayOrigin + rayDirection * totalDistance;
          float dist = sceneDistance(currentPoint);

          if (dist < SURFACE_THRESHOLD) {
            vec3 surfaceNormal = calculateNormal(currentPoint);
            vec3 baseColor = blendColorByNormal(surfaceNormal);

            vec3 lightDirection = normalize(currentPoint - LIGHT_POSITION);
            float diffuse = max(0.0, dot(surfaceNormal, lightDirection));

            vec3 viewDirection = normalize(rayOrigin - currentPoint);
            vec3 reflectDirection = reflect(-lightDirection, surfaceNormal);
            float specular = pow(max(dot(viewDirection, reflectDirection), 0.0), 32.0);

            vec3 litColor = mix(
              baseColor * diffuse,
              baseColor * (diffuse + specular),
              uMetallic
            );

            float distanceToCenter = length(currentPoint.xy);
            if (distanceToCenter > 1.0) {
              return mix(
                litColor,
                glowColor,
                smoothstep(1.0, 2.3, distanceToCenter)
              );
            }

            return litColor;
          }

          totalDistance += max(dist, minStepSize);

          if (totalDistance > MAX_DISTANCE) break;
        }

        return glowColor;
      }

      void main() {
        vec2 uv = (2.0 * gl_FragCoord.xy - iResolution.xy) / iResolution.y;

        uv += uParallaxOffset * 0.5;

        vec3 rayDirection = normalize(vec3(uv, -1.0));

        vec3 color = raymarch(CAMERA_POSITION, rayDirection);

        gl_FragColor = vec4(color, uOpacity);
      }
    `,W=new r.ShaderMaterial({uniforms:Y,vertexShader:$,fragmentShader:K,transparent:x<1,depthTest:!1,depthWrite:!1}),q=new r.PlaneGeometry(2,2),J=new r.Mesh(q,W);G.add(J);let Q=(t,o)=>{let r=e.getBoundingClientRect(),i=t-r.left,a=o-r.top;if(v&&(I.current.set(i,a),Y.iMouse.value.set(i,a)),g){let e=r.width/2,t=r.height/2,o=(i-e)/r.width*w,n=(a-t)/r.height*w;F.current.set(o,-n)}},ee=e=>{Q(e.clientX,e.clientY)},et=e=>{e.touches.length>0&&Q(e.touches[0].clientX,e.touches[0].clientY)};(v||g)&&(e.addEventListener("mousemove",ee),R&&e.addEventListener("touchmove",et,{passive:!0}));let eo=null;T&&(eo=new IntersectionObserver(e=>{X.current=e[0].isIntersecting},{threshold:0})).observe(e),A.current=performance.now(),N.current=performance.now();let er=()=>{if(O.current=requestAnimationFrame(er),T&&!X.current)return;let e=performance.now(),t=1e3/D;if(e-N.current<t)return;N.current=e;let o=(e-A.current)/1e3;Y.iTime.value=o*l,g&&(z.current.lerp(F.current,.1),Y.uParallaxOffset.value.copy(z.current)),_.render(G,H)};er();let ei=()=>{let t=e.getBoundingClientRect(),o=t.width,r=t.height;_.setSize(o,r,!1),Y.iResolution.value.set(o*Z,r*Z,1)};return window.addEventListener("resize",ei),()=>{window.removeEventListener("resize",ei),(v||g)&&(e.removeEventListener("mousemove",ee),R&&e.removeEventListener("touchmove",et)),eo&&eo.disconnect(),cancelAnimationFrame(O.current),G.remove(J),q.dispose(),W.dispose(),_.dispose(),_.domElement&&_.domElement.parentNode===e&&e.removeChild(_.domElement)}},[l,c,s,u,m,f,d,v,h,p,y,g,w,C,x,P,S,R,b,D,T]);let V="number"==typeof e?`${e}px`:e,k="number"==typeof n?`${n}px`:n;return(0,t.jsxs)("div",{className:(0,a.cn)("relative overflow-hidden",B),style:{width:V,height:k},children:[(0,t.jsx)("div",{ref:M,className:"absolute inset-0"}),E&&(0,t.jsx)("div",{className:"relative z-10 w-full h-full pointer-events-none",children:E})]})};n.displayName="GradientBlob",e.s(["default",0,n])},78107,e=>{e.n(e.i(82729))}]);