(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,31175,e=>{"use strict";var t=e.i(43476),n=e.i(71645),u=e.i(90072),r=e.i(8560),o=e.i(75157);let i=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,a=`
  uniform float uTime;
  uniform vec2 uResolution;
  uniform float uSpeed;
  uniform float uDensity;
  uniform float uStarCount;
  uniform vec3 uColor;
  uniform float uCenterX;
  uniform float uCenterY;
  uniform float uStarSize;
  uniform float uBrightness;
  uniform float uOpacity;
  uniform float uFlowerIntensity;
  uniform float uTwinkleSpeed;
  uniform float uWobbleAmount;
  uniform float uInnerLayerIntensity;
  uniform float uOuterLayerIntensity;
  uniform float uFadeHeight;

  varying vec2 vUv;

  const float PI = 3.14159265359;

  vec2 hash22(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973));
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.xx + p3.yz) * p3.zy);
  }

  float stars(vec2 uv, float radialOffset, float amount, float intensity) {
    float t = uTime * uSpeed;
    float rad = atan(uv.y, uv.x);
    float r = log(length(uv) + radialOffset) * amount - t;

    vec2 g = vec2(rad / PI * 0.5 + 0.5, r);
    g *= vec2(uStarCount, 1.0);

    vec2 s = vec2(1.0, 1.0);
    vec2 id = floor(g / s + 0.5);
    vec2 o = sign(g - s * id);

    float min_d = 100.0;
    for (int i = 0; i < 2; ++i) {
        for (int j = 0; j < 2; ++j) {
            vec2 nid = id + o * vec2(float(i), float(j));
            vec2 nh = hash22(nid) * 100.0;
            vec2 n = g - s * nid;

            float t2 = t * uTwinkleSpeed;
            vec2 np = vec2(cos(nh.x + t2), sin(nh.y + t2)) * uWobbleAmount;

            vec2 diff = n - np;
            diff.x *= (200.0 / uStarCount);

            float dt = dot(diff, diff);
            if (dt < min_d) {
                min_d = dt;
            }
        }
    }

    float d = sqrt(min_d);
    return (uStarSize * 0.05) / d * intensity;
  }

  float curve_mask(vec2 uv) {
    float x = uv.x;
    float y = 0.05 * x * x + 0.05;
    return smoothstep(-0.1, 0.1, abs(uv.y) - y);
  }

  float flower(vec2 uv) {
    float fade_out = smoothstep(1.5, 0.0, length(uv));
    float flower = smoothstep(1.2, 0.0, abs(sin(atan(uv.y * 4.0, uv.x) * 3.0)) * 0.7);
    return flower * fade_out * uFlowerIntensity;
  }

  void main() {
    vec2 uv = (vUv * uResolution - 0.5 * uResolution) / uResolution.y;
    vec2 centeredUv = vUv * 2.0 - 1.0;
    centeredUv.x *= uResolution.x / uResolution.y;

    vec2 centerOffset = vec2((uCenterX - 0.5) * 2.0, (uCenterY - 0.5) * 2.0);
    centerOffset.x *= uResolution.x / uResolution.y;

    vec2 pos = centeredUv - centerOffset;
    pos.y += 1.0;

    float s = stars(pos, 1.0, 20.0 * uDensity, uInnerLayerIntensity) * 0.5;
    float l = stars(pos, 5.0, 30.0 * uDensity, uOuterLayerIntensity) * 0.5;

    float f = flower(pos);
    float m = curve_mask(pos);

    float brightness = s + l + f;

    brightness *= m;

    float gradient = smoothstep(uFadeHeight, 0.0, abs(pos.y));
    brightness *= gradient;

    brightness *= uBrightness;

    float alpha = clamp(brightness, 0.0, 1.0) * uOpacity;

    gl_FragColor = vec4(uColor, alpha);
  }
`;e.s(["default",0,({speed:e=1,density:l=.5,starCount:s=100,color:f="#e3b3ea",centerX:v=.5,centerY:c=.5,starSize:m=.3,brightness:d=1,opacity:p=1,flowerIntensity:y=.5,twinkleSpeed:h=.2,wobbleAmount:g=1,innerLayerIntensity:w=1,outerLayerIntensity:C=1.5,fadeHeight:S=2.5,className:b})=>{let x=(0,n.useRef)(null),R=(0,n.useRef)(null),I=(0,n.useRef)(null),O=(0,n.useRef)(null);return(0,n.useEffect)(()=>{if(!x.current)return;let t=x.current,n=t.clientWidth,o=t.clientHeight,b=new u.Scene,T=new u.OrthographicCamera(-1,1,1,-1,0,1),F=new r.WebGLRenderer({antialias:!0,alpha:!0,powerPreference:"high-performance"});F.setClearColor(0,0),F.setSize(n,o),F.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.appendChild(F.domElement),R.current=F;let z=new u.ShaderMaterial({uniforms:{uTime:{value:0},uResolution:{value:new u.Vector2(n,o)},uSpeed:{value:e},uDensity:{value:l},uStarCount:{value:s},uColor:{value:new u.Color(f)},uCenterX:{value:v},uCenterY:{value:c},uStarSize:{value:m},uBrightness:{value:d},uOpacity:{value:p},uFlowerIntensity:{value:y},uTwinkleSpeed:{value:h},uWobbleAmount:{value:g},uInnerLayerIntensity:{value:w},uOuterLayerIntensity:{value:C},uFadeHeight:{value:S}},vertexShader:i,fragmentShader:a,transparent:!0,blending:u.NormalBlending,depthWrite:!1});I.current=z;let U=new u.PlaneGeometry(2,2),_=new u.Mesh(U,z);b.add(_);let L=new u.Clock,P=()=>{let e=L.getElapsedTime();z.uniforms.uTime.value=e,F.render(b,T),O.current=requestAnimationFrame(P)};P();let A=new ResizeObserver(()=>{let e=t.clientWidth,n=t.clientHeight;F.setSize(e,n),z.uniforms.uResolution.value.set(e,n)});return A.observe(t),()=>{O.current&&cancelAnimationFrame(O.current),A.disconnect(),F.dispose(),U.dispose(),z.dispose(),t.contains(F.domElement)&&t.removeChild(F.domElement)}},[]),(0,n.useEffect)(()=>{I.current&&(I.current.uniforms.uSpeed.value=e,I.current.uniforms.uDensity.value=l,I.current.uniforms.uStarCount.value=s,I.current.uniforms.uColor.value.set(f),I.current.uniforms.uCenterX.value=v,I.current.uniforms.uCenterY.value=c,I.current.uniforms.uStarSize.value=m,I.current.uniforms.uBrightness.value=d,I.current.uniforms.uOpacity.value=p,I.current.uniforms.uFlowerIntensity.value=y,I.current.uniforms.uTwinkleSpeed.value=h,I.current.uniforms.uWobbleAmount.value=g,I.current.uniforms.uInnerLayerIntensity.value=w,I.current.uniforms.uOuterLayerIntensity.value=C,I.current.uniforms.uFadeHeight.value=S)},[e,l,s,f,v,c,m,d,p,y,h,g,w,C,S]),(0,t.jsx)("div",{ref:x,className:(0,o.cn)("relative w-full h-full overflow-hidden bg-transparent",b),style:{minHeight:"inherit"}})}])},75358,e=>{e.n(e.i(31175))}]);