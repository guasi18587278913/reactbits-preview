(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28600,e=>{"use strict";var r=e.i(1950);e.s(["useThree",()=>r.C])},52444,e=>{"use strict";var r=e.i(43476),t=e.i(71645),a=e.i(75056),u=e.i(25234),i=e.i(28600),n=e.i(90072),l=e.i(75157);let s=`
varying vec2 vUv;

uniform vec2 uContainerRes;
uniform vec2 uTexRes;

vec2 coverUv(vec2 uv, vec2 texSize, vec2 viewSize) {
  vec2 ratio = vec2(
    min((viewSize.x / viewSize.y) / (texSize.x / texSize.y), 1.0),
    min((viewSize.y / viewSize.x) / (texSize.y / texSize.x), 1.0)
  );
  return uv * ratio + (1.0 - ratio) * 0.5;
}

void main() {
  vUv = coverUv(uv, uTexRes, uContainerRes);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,o=`
precision highp float;

uniform sampler2D uTexture;
uniform vec2  uTexRes;
uniform vec2  uContainerRes;
uniform float uProgress;
uniform float uGridSize;
uniform float uEdgeHeight;
uniform vec3  uColor;
uniform int   uAxis;

varying vec2 vUv;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

vec2 squaresGrid(vec2 uv) {
  float texAspectX = uTexRes.x / uTexRes.y;
  float texAspectY = uTexRes.y / uTexRes.x;

  vec2 ratio = vec2(
    min(texAspectX / 1.0, 1.0),
    min(texAspectY / 1.0, 1.0)
  );

  return vec2(
    uv.x * ratio.x + (1.0 - ratio.x) * 0.5,
    uv.y * ratio.y + (1.0 - ratio.y) * 0.5
  );
}

void main() {
  vec2 squareUvs = squaresGrid(vUv);

  float shortSide = min(uContainerRes.x, uContainerRes.y);
  float cells = floor(shortSide / max(uGridSize, 1.0));
  cells = max(cells, 1.0);

  vec2 grid = vec2(
    floor(squareUvs.x * cells) / cells,
    floor(squareUvs.y * cells) / cells
  );

  float a;
  if (uAxis == 1) {
    a = grid.y;
  } else if (uAxis == 0) {
    a = 1.0 - grid.y - (1.0 / cells);
  } else if (uAxis == 2) {
    a = grid.x;
  } else {
    a = 1.0 - grid.x - (1.0 / cells);
  }

  float h = max(uEdgeHeight, 0.0001);
  float edge = (1.0 + h) - (uProgress * (1.0 + h + h));

  float dToEdge = distance(a, edge);
  float invDist = 1.0 - dToEdge;

  float clamped = smoothstep(h, 0.0, dToEdge);

  float rand = random(grid);
  float randDist = step(1.0 - h * rand, invDist);
  float dist = step(1.0 - h, invDist);

  float alpha = dist * (clamped + rand - 0.5 * (1.0 - randDist));
  alpha = clamp(alpha, 0.0, 1.0);

  vec4 gridColor = vec4(uColor, alpha);

  vec4 tex = texture2D(uTexture, vUv);
  tex.rgba *= step(edge, a);

  gl_FragColor = mix(tex, gridColor, gridColor.a);
}
`,c={up:0,down:1,left:2,right:3};function f(){return{uTexture:{value:null},uTexRes:{value:new n.Vector2(1,1)},uContainerRes:{value:new n.Vector2(1,1)},uProgress:{value:0},uGridSize:{value:20},uEdgeHeight:{value:.2},uColor:{value:new n.Color("#242424")},uAxis:{value:1}}}let d=({imageSrc:e,gridSize:a,transitionColor:l,edgeHeight:c,axis:d,controllerRef:v})=>{let m=(0,t.useRef)(null),{size:x,viewport:h}=(0,i.useThree)(),g=(0,t.useRef)(null),[p]=t.default.useState(f),R=(0,t.useRef)({gridSize:a,transitionColor:l,edgeHeight:c,axis:d});return(0,t.useEffect)(()=>{R.current={gridSize:a,transitionColor:l,edgeHeight:c,axis:d}},[a,l,c,d]),(0,t.useEffect)(()=>{if(!e)return;let r=!1,t=new n.TextureLoader;return t.setCrossOrigin("anonymous"),t.load(e,e=>{r?e.dispose():(e.colorSpace=n.SRGBColorSpace,e.minFilter=n.LinearFilter,e.magFilter=n.LinearFilter,g.current=e)},void 0,()=>{r||(g.current=null)}),()=>{r=!0,g.current&&(g.current.dispose(),g.current=null)}},[e]),(0,u.useFrame)(()=>{if(!m.current)return;let e=m.current.material.uniforms,r=R.current;if(e.uGridSize.value=r.gridSize,e.uEdgeHeight.value=r.edgeHeight,e.uColor.value.set(r.transitionColor),e.uAxis.value=r.axis,e.uContainerRes.value.set(Math.max(x.width,1)*h.dpr,Math.max(x.height,1)*h.dpr),g.current?.image){e.uTexture.value=g.current;let r=g.current.image;e.uTexRes.value.set(r.naturalWidth||r.width||1,r.naturalHeight||r.height||1)}v.current&&(e.uProgress.value=v.current.progress)}),(0,r.jsxs)("mesh",{ref:m,children:[(0,r.jsx)("planeGeometry",{args:[2,2]}),(0,r.jsx)("shaderMaterial",{vertexShader:s,fragmentShader:o,uniforms:p,transparent:!0})]})},v=t.default.forwardRef(({imageSrc:e,width:u="100%",height:i="100%",gridSize:n=20,transitionColor:s="#242424",edgeHeight:o=.2,duration:f=1.6,easing:v="linear",direction:m="up",autoTrigger:x=!0,triggerOnce:h=!1,triggerThreshold:g=0,paused:p=!1,borderRadius:R="0px",className:w,style:C,children:S,onRevealComplete:A},T)=>{let y=(0,t.useRef)(null),z=(0,t.useRef)(null),E=(0,t.useRef)(!1),M=(0,t.useRef)({progress:0,raw:0,startedAt:null,startRaw:0,completed:!1}),b=(0,t.useRef)(f),U=(0,t.useRef)(v),F=(0,t.useRef)(p),j=(0,t.useRef)(A);(0,t.useEffect)(()=>{b.current=f},[f]),(0,t.useEffect)(()=>{U.current=v},[v]),(0,t.useEffect)(()=>{F.current=p},[p]),(0,t.useEffect)(()=>{j.current=A},[A]);let q=(0,t.useCallback)(()=>{null!==z.current&&(cancelAnimationFrame(z.current),z.current=null)},[]),G=(0,t.useRef)(null);(0,t.useEffect)(()=>{let e=r=>{let t=M.current;if(null===t.startedAt){z.current=null;return}if(F.current){t.startedAt=r-(t.raw-t.startRaw)*b.current*1e3,z.current=requestAnimationFrame(e);return}let a=(r-t.startedAt)/1e3,u=Math.max(b.current,1e-4),i=Math.min(1,Math.max(0,t.startRaw+a/u));if(t.raw=i,t.progress=function(e,r){let t=Math.max(0,Math.min(1,e));switch(r){case"easeIn":return t*t;case"easeOut":return 1-(1-t)*(1-t);case"easeInOut":return t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;default:return t}}(i,U.current),i>=1){t.startedAt=null,t.completed||(t.completed=!0,j.current?.()),z.current=null;return}z.current=requestAnimationFrame(e)};return G.current=e,()=>{G.current=null}},[]);let H=(0,t.useCallback)(()=>{let e=M.current;if(e.raw>=1)return;let r=G.current;r&&(e.startedAt=performance.now(),e.startRaw=e.raw,e.completed=!1,q(),z.current=requestAnimationFrame(r))},[q]),P=(0,t.useCallback)(()=>{q();let e=M.current;e.raw=0,e.progress=0,e.startedAt=null,e.startRaw=0,e.completed=!1},[q]);(0,t.useImperativeHandle)(T,()=>({trigger:H,play:H,reset:P}),[H,P]),(0,t.useEffect)(()=>{let e=y.current;if(!e||!x)return;let r=Math.max(0,Math.min(1,g)),t=new IntersectionObserver(e=>{for(let t of e)if(t.isIntersecting&&t.intersectionRatio>=r)if(h){if(E.current)continue;E.current=!0,P(),H()}else P(),H();else h||P()},{threshold:r>0?[0,r,Math.min(1,r+.01)]:[0,.01]});return t.observe(e),()=>t.disconnect()},[x,h,g,H,P]),(0,t.useEffect)(()=>()=>q(),[q]);let D=c[m]??1,O="number"==typeof R?`${R}px`:R;return(0,r.jsxs)("div",{ref:y,className:(0,l.cn)("relative overflow-hidden",w),style:{width:u,height:i,borderRadius:O,...C},children:[(0,r.jsx)(a.Canvas,{orthographic:!0,camera:{position:[0,0,1],zoom:1,left:-1,right:1,top:1,bottom:-1},gl:{antialias:!0,alpha:!0},dpr:[1,2],className:"absolute! inset-0 w-full h-full",children:(0,r.jsx)(d,{imageSrc:e,gridSize:n,transitionColor:s,edgeHeight:o,axis:D,controllerRef:M})}),S&&(0,r.jsx)("div",{className:"relative z-10 pointer-events-none h-full w-full",children:S})]})});v.displayName="PixelReveal",e.s(["default",0,v])},96301,e=>{e.n(e.i(52444))}]);