(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28600,e=>{"use strict";var t=e.i(1950);e.s(["useThree",()=>t.C])},29746,e=>{"use strict";var t=e.i(43476),r=e.i(71645),a=e.i(75056),u=e.i(25234),o=e.i(28600),i=e.i(90072),l=e.i(75157);let n=`
varying vec2 vPos;
void main() {
  vPos = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,s=`
precision highp float;
varying vec2 vPos;

#define MAX_TRAIL 40
#define INV_81 0.01234567901

uniform sampler2D uImage;
uniform vec2 uViewport;
uniform vec2 uInvViewport;
uniform float uImgRatio;
uniform vec2 uTrail[MAX_TRAIL];
uniform float uRadii[MAX_TRAIL];
uniform int uTrailCount;
uniform float uPresence;
uniform float uThreshold;
uniform float uRefract;
uniform float uSpread;
uniform float uRim;
uniform float uSpec;
uniform vec2 uBlobCenter;
uniform float uWarp;
uniform float uWarpScale;
uniform float uTime;
uniform float uAlpha;
uniform vec2 uBoundsMin;
uniform vec2 uBoundsMax;

vec2 coverScale;

void initCoverScale() {
  float vr = uViewport.x * uInvViewport.y;
  coverScale = vr > uImgRatio
    ? vec2(1.0, uImgRatio / vr)
    : vec2(vr / uImgRatio, 1.0);
}

vec2 coverFit(vec2 c) {
  return (c - 0.5) * coverScale + 0.5;
}

float capsule(vec2 p, vec2 a, vec2 b, float r) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / (dot(ba, ba) + 1e-8), 0.0, 1.0);
  float d = length(pa - ba * h);
  return (r * r) / (d * d + 1e-6);
}

float metafield(vec2 p) {
  float f = 0.0;
  float ar = uViewport.x * uInvViewport.y;
  vec2 asp = vec2(ar, 1.0);
  int n = min(uTrailCount, MAX_TRAIL);

  vec2 q = p;
  if (uWarp > 0.0) {
    float wk = uWarp * 0.0008;
    float px = p.x * uWarpScale;
    float py = p.y * uWarpScale;
    float t1 = uTime * 2.3;
    float t2 = uTime * 1.7;
    q.x += (sin(py + t1) * 0.6 + sin(py * 2.3 + px * 0.7 + t2) * 0.4) * wk;
    q.y += (cos(px + t2) * 0.6 + cos(px * 2.1 + py * 0.9 + t1) * 0.4) * wk;
  }
  q *= asp;

  for (int i = 0; i < MAX_TRAIL; i++) {
    if (i >= n) break;

    float r0 = uRadii[i];
    vec2 a = (uTrail[i] * uInvViewport) * asp;

    if (i < n - 1) {
      float r1 = uRadii[i + 1];
      vec2 b = (uTrail[i + 1] * uInvViewport) * asp;
      float rm = (r0 + r1) * 0.5;
      f += capsule(q, a, b, rm);
    } else {
      vec2 d = q - a;
      f += (r0 * r0) / (dot(d, d) + 1e-6);
    }
  }
  return f;
}

void main() {
  initCoverScale();

  vec2 st = vPos;

  if (st.x < uBoundsMin.x || st.x > uBoundsMax.x ||
      st.y < uBoundsMin.y || st.y > uBoundsMax.y) {
    gl_FragColor = vec4(texture2D(uImage, coverFit(st)).rgb, uAlpha);
    return;
  }

  float f = metafield(st);
  float nf = f / uThreshold;

  float fill = smoothstep(0.5, 1.0, nf);
  float edge = smoothstep(0.35, 0.55, nf) - smoothstep(0.7, 0.95, nf);
  float mask = smoothstep(0.0, 1.0, clamp(fill + edge * 0.5, 0.0, 1.0)) * uPresence;

  if (mask < 0.001) {
    gl_FragColor = vec4(texture2D(uImage, coverFit(st)).rgb, uAlpha);
    return;
  }

  vec2 bent = (st - uBlobCenter) * (1.0 - uRefract * fill) + uBlobCenter;

  vec2 baseFit = coverFit(bent);
  vec2 tapStep = coverScale * uSpread * uInvViewport;

  vec4 px = vec4(0.0);
  for (float i = -4.0; i <= 4.0; i++) {
    for (float j = -4.0; j <= 4.0; j++) {
      px += texture2D(uImage, baseFit + vec2(i, j) * tapStep);
    }
  }
  px *= INV_81;

  vec2 head = uTrail[0] * uInvViewport;
  vec2 dh = st - head;
  float glow = clamp((clamp(dh.y, 0.0, 0.15) + 0.06) * 2.5, 0.0, 1.0);

  vec4 lit = clamp(px + vec4(fill) * glow * uSpec + vec4(edge) * uRim, 0.0, 1.0);
  vec3 base = texture2D(uImage, coverFit(st)).rgb;

  gl_FragColor = vec4(mix(base, lit.rgb, mask), uAlpha);
}
`,c=({src:e,pointerRef:a,trailPool:l,trailCountRef:c,presenceRef:f,activeRef:m,dampening:v,blobSize:p,trailLength:h,tailFade:d,threshold:g,refraction:w,blurSpread:x,borderGlow:b,specularGain:R,blobWarpAmount:M,blobWarpScale:T,opacity:I})=>{let y=(0,r.useRef)(null),S=(0,r.useRef)(null),C=(0,r.useRef)(1),{size:V}=(0,o.useThree)(),A=(0,r.useRef)(new Float32Array(40));(0,r.useEffect)(()=>{let t=new i.TextureLoader;t.setCrossOrigin("anonymous"),t.load(e,e=>{e.minFilter=i.LinearFilter,e.magFilter=i.LinearFilter,e.wrapS=i.ClampToEdgeWrapping,e.wrapT=i.ClampToEdgeWrapping,S.current=e,e.image&&(C.current=e.image.width/e.image.height)})},[e]);let B=(0,r.useMemo)(()=>({uImage:{value:null},uViewport:{value:new i.Vector2(1,1)},uInvViewport:{value:new i.Vector2(1,1)},uImgRatio:{value:1},uTrail:{value:l},uRadii:{value:new Float32Array(40)},uTrailCount:{value:0},uPresence:{value:0},uThreshold:{value:1},uRefract:{value:.015},uSpread:{value:.5},uRim:{value:.3},uSpec:{value:1},uBlobCenter:{value:new i.Vector2(.5,.5)},uWarp:{value:0},uWarpScale:{value:12},uTime:{value:0},uAlpha:{value:1},uBoundsMin:{value:new i.Vector2(0,0)},uBoundsMax:{value:new i.Vector2(1,1)}}),[l]);return(0,u.useFrame)((e,t)=>{if(!y.current||!S.current)return;let r=y.current.material,u=a.current;if(u.target[0]>-999)if(m.current=!0,u.smooth[0]<-999){u.smooth[0]=u.target[0],u.smooth[1]=u.target[1];let e=u.smooth[0],t=V.height-u.smooth[1];for(let r=0;r<40;r++)l[r].set(e,t);c.current=Math.min(h,40)}else{let e=1-Math.pow(v,Math.min(60*t,4));u.smooth[0]+=(u.target[0]-u.smooth[0])*e,u.smooth[1]+=(u.target[1]-u.smooth[1])*e;for(let e=39;e>=1;e--)l[e].copy(l[e-1]);l[0].set(u.smooth[0],V.height-u.smooth[1]),c.current=Math.min((c.current??0)+1,Math.min(h,40))}else m.current=!1;let o=+!!m.current,i=m.current?8:3;if(f.current+=(o-f.current)*(1-Math.exp(-i*t)),f.current<.002&&(f.current=0),f.current>.998&&(f.current=1),!m.current&&f.current<=0){u.smooth[0]=-9999,u.smooth[1]=-9999,c.current=0;for(let e=0;e<40;e++)l[e].set(-9999,-9999)}let n=A.current,s=c.current??0,B=f.current,F=1/Math.max(s-1,1),P=1/V.width,W=1/V.height,j=0,L=0,k=0,_=1e9,q=1e9,E=-1e9,N=-1e9,X=0;for(let e=0;e<40;e++)if(e<s){let t=e*F,r=p*B*Math.pow(Math.max(1-t,.001),d);n[e]=r;let a=l[e].x*P,u=l[e].y*W,o=Math.pow(Math.max(1-t,.001),d);j+=a*o,L+=u*o,k+=o,a<_&&(_=a),a>E&&(E=a),u<q&&(q=u),u>N&&(N=u),r>X&&(X=r)}else n[e]=0;k>0?(j/=k,L/=k):(j=.5,L=.5);let D=V.width*W,z=.06*(M>0),G=x*Math.max(P,W)*5,O=12*X,K=O/D+z+G,U=O+z+G,$=r.uniforms.uBoundsMin.value,Y=r.uniforms.uBoundsMax.value;s>0&&B>0?($.set(Math.max(0,_-K),Math.max(0,q-U)),Y.set(Math.min(1,E+K),Math.min(1,N+U))):($.set(2,2),Y.set(-1,-1)),r.uniforms.uImage.value=S.current,r.uniforms.uViewport.value.set(V.width,V.height),r.uniforms.uInvViewport.value.set(P,W),r.uniforms.uImgRatio.value=C.current,r.uniforms.uTrail.value=l,r.uniforms.uRadii.value=n,r.uniforms.uTrailCount.value=s,r.uniforms.uPresence.value=B,r.uniforms.uThreshold.value=g,r.uniforms.uRefract.value=w,r.uniforms.uSpread.value=x,r.uniforms.uRim.value=b,r.uniforms.uSpec.value=R,r.uniforms.uBlobCenter.value.set(j,L),r.uniforms.uWarp.value=M,r.uniforms.uWarpScale.value=T,r.uniforms.uTime.value=e.clock.elapsedTime,r.uniforms.uAlpha.value=I}),(0,t.jsxs)("mesh",{ref:y,children:[(0,t.jsx)("planeGeometry",{args:[2,2]}),(0,t.jsx)("shaderMaterial",{vertexShader:n,fragmentShader:s,uniforms:B,transparent:!0})]})},f=({width:e="100%",height:u="100%",className:o,children:n,src:s="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",dampening:f=0,blobSize:m=.04,trailLength:v=40,tailFade:p=.3,threshold:h=.6,refraction:d=.3,blurSpread:g=.3,borderGlow:w=.15,specularGain:x=.2,blobWarpAmount:b=25,blobWarpScale:R=5,backgroundColor:M="#000000",opacity:T=1})=>{let I=(0,r.useRef)(null),y=(0,r.useRef)({target:[-9999,-9999],smooth:[-9999,-9999]}),S=(0,r.useRef)(0),C=(0,r.useRef)(0),V=(0,r.useRef)(!1),A=(0,r.useRef)(null);(0,r.useEffect)(()=>{let e=I.current;if(!e)return;let t=()=>{A.current=e.getBoundingClientRect()};t();let r=new ResizeObserver(t);return r.observe(e),window.addEventListener("scroll",t,{passive:!0}),()=>{r.disconnect(),window.removeEventListener("scroll",t)}},[]);let B=(0,r.useMemo)(()=>Array.from({length:40},()=>new i.Vector2(-9999,-9999)),[]),F=(0,r.useCallback)(e=>{let t=A.current;t&&(y.current.target=[e.clientX-t.left,e.clientY-t.top])},[]),P=(0,r.useCallback)(()=>{y.current.target=[-9999,-9999]},[]),W="number"==typeof e?`${e}px`:e,j="number"==typeof u?`${u}px`:u;return(0,t.jsxs)("div",{ref:I,className:(0,l.cn)("relative overflow-hidden",o),style:{width:W,height:j,background:M},onPointerMove:F,onPointerLeave:P,children:[(0,t.jsx)(a.Canvas,{className:"absolute inset-0 h-full w-full",dpr:[1,2],gl:{antialias:!1,alpha:!0,powerPreference:"high-performance"},orthographic:!0,camera:{position:[0,0,1],zoom:1,left:-1,right:1,top:1,bottom:-1},children:(0,t.jsx)(c,{src:s,pointerRef:y,trailPool:B,trailCountRef:S,presenceRef:C,activeRef:V,dampening:f,blobSize:m,trailLength:v,tailFade:p,threshold:h,refraction:d,blurSpread:g,borderGlow:w,specularGain:x,blobWarpAmount:b,blobWarpScale:R,opacity:T})}),n&&(0,t.jsx)("div",{className:"pointer-events-none relative z-10",children:n})]})};f.displayName="GlassCursor",e.s(["default",0,f])},72965,e=>{e.n(e.i(29746))}]);