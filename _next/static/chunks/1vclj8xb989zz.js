(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28600,e=>{"use strict";var t=e.i(1950);e.s(["useThree",()=>t.C])},95479,e=>{"use strict";var t=e.i(43476),r=e.i(71645),u=e.i(75056),o=e.i(28600),a=e.i(25234),i=e.i(90072),n=e.i(89970),l=e.i(75157);let s=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,v=`
precision highp float;

uniform sampler2D u_texture;
uniform float u_imageAspectRatio;
uniform float u_aspectRatio;
uniform float u_opacity;
uniform float u_hover;
uniform float u_zoomLevel;
uniform float u_rgbShift;
uniform float u_pixelDisplace;
uniform float u_borderRadius;
uniform vec2 u_resolution;
varying vec2 vUv;

float exponentialInOut(float t) {
  return t == 0.0 || t == 1.0
    ? t
    : t < 0.5
      ? +0.5 * pow(2.0, (20.0 * t) - 10.0)
      : -0.5 * pow(2.0, 10.0 - (t * 20.0)) + 1.0;
}

float roundedBoxSDF(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
}

void main() {
  vec2 uv = vUv;

  vec2 pixelCoord = vUv * u_resolution;
  vec2 center = u_resolution * 0.5;
  vec2 halfSize = u_resolution * 0.5;
  float dist = roundedBoxSDF(pixelCoord - center, halfSize, u_borderRadius);

  if (dist > 0.0) {
    discard;
  }

  float alpha = 1.0 - smoothstep(-1.0, 1.0, dist);

  float u = u_imageAspectRatio / u_aspectRatio;
  if(u_imageAspectRatio > u_aspectRatio) {
    u = 1. / u;
  }

  uv.y *= u;
  uv.y -= (u) / 2. - .5;

  float hoverLevel = exponentialInOut(min(1., (distance(vec2(.5), uv) * u_hover) + u_hover));
  uv *= 1. - u_zoomLevel * hoverLevel;
  uv += u_zoomLevel / 2. * hoverLevel;
  uv = clamp(uv, 0., 1.);
  vec4 color = texture2D(u_texture, uv);

  if(hoverLevel > 0.) {
    hoverLevel = 1. - abs(hoverLevel - .5) * 2.;
    uv.y += color.r * hoverLevel * u_pixelDisplace;
    color = texture2D(u_texture, uv);
    color.r = texture2D(u_texture, uv + (hoverLevel) * u_rgbShift).r;
    color.g = texture2D(u_texture, uv - (hoverLevel) * u_rgbShift).g;
  }

  gl_FragColor = vec4(color.rgb, color.a * u_opacity * alpha);
}
`,c=({imageSrc:e,imageAspectRatio:u,cardWidth:l,cardHeight:c,zoomLevel:f,rgbShiftAmount:m,pixelDisplaceAmount:d,hoverDuration:p,rotationIntensity:h,scaleIntensity:_,positionIntensity:x,interactionDuration:g,opacity:y,borderRadius:b})=>{let R=(0,r.useRef)(null),L=(0,r.useRef)(null),{camera:D,gl:w}=(0,o.useThree)(),S=(0,r.useMemo)(()=>new i.Raycaster,[]),M=(0,r.useRef)(new i.Vector2),j=(0,r.useMemo)(()=>new i.TextureLoader().load(e),[e]),A=(0,r.useMemo)(()=>({u_texture:{value:j},u_imageAspectRatio:{value:u},u_aspectRatio:{value:l/c},u_opacity:{value:y},u_hover:{value:0},u_zoomLevel:{value:f},u_rgbShift:{value:m},u_pixelDisplace:{value:d},u_borderRadius:{value:b},u_resolution:{value:new i.Vector2(500,700)}}),[]);return(0,a.useFrame)(()=>{L.current&&(L.current.uniforms.u_texture.value=j,L.current.uniforms.u_imageAspectRatio.value=u,L.current.uniforms.u_aspectRatio.value=l/c,L.current.uniforms.u_opacity.value=y,L.current.uniforms.u_zoomLevel.value=f,L.current.uniforms.u_rgbShift.value=m,L.current.uniforms.u_pixelDisplace.value=d,L.current.uniforms.u_borderRadius.value=b)}),(0,r.useEffect)(()=>{let e=w.domElement,t=t=>{let r=e.getBoundingClientRect();if(M.current.x=(t.clientX-r.left)/r.width*2-1,M.current.y=-(2*((t.clientY-r.top)/r.height))+1,!R.current||!L.current)return;let u=R.current;S.setFromCamera(M.current,D);let o=S.intersectObject(u);n.default.to(L.current.uniforms.u_hover,{value:+(o.length>0),duration:p}),n.default.to(u.scale,{x:1-M.current.y*_,y:1-M.current.y*_,duration:g}),n.default.to(u.position,{x:M.current.x*x,duration:g}),n.default.to(u.rotation,{x:-M.current.y*(Math.PI/3)*h,y:M.current.x*(Math.PI/3)*h,duration:g})},r=()=>{L.current&&n.default.to(L.current.uniforms.u_hover,{value:0,duration:p})};return e.addEventListener("mousemove",t),e.addEventListener("mouseleave",r),()=>{e.removeEventListener("mousemove",t),e.removeEventListener("mouseleave",r)}},[w,D,S,p,h,_,x,g]),(0,t.jsxs)("mesh",{ref:R,children:[(0,t.jsx)("planeGeometry",{args:[l,c]}),(0,t.jsx)("shaderMaterial",{ref:L,vertexShader:s,fragmentShader:v,uniforms:A,transparent:!0})]})},f=({width:e="100%",height:r="100%",className:o="",children:a,imageSrc:n="https://images.unsplash.com/photo-1619961602105-16fa2a5465c2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",imageAspectRatio:s=.67,cardWidth:v=5,cardHeight:f=6,zoomLevel:m=.3,rgbShiftAmount:d=.02,pixelDisplaceAmount:p=.095,hoverDuration:h=3,rotationIntensity:_=.2,scaleIntensity:x=.1,positionIntensity:g=.5,interactionDuration:y=.4,opacity:b=1,cameraFov:R=50,cameraZ:L=7,borderRadius:D=30})=>{let w="number"==typeof e?`${e}px`:e,S="number"==typeof r?`${r}px`:r;return(0,t.jsxs)("div",{className:(0,l.cn)("relative overflow-hidden",o),style:{width:w,height:S},children:[(0,t.jsx)(u.Canvas,{className:"absolute inset-0 h-full w-full",gl:{antialias:!0,alpha:!0,toneMapping:i.NoToneMapping},camera:{fov:R,near:.1,far:100,position:[0,0,L]},children:(0,t.jsx)(c,{imageSrc:n,imageAspectRatio:s,cardWidth:v,cardHeight:f,zoomLevel:m,rgbShiftAmount:d,pixelDisplaceAmount:p,hoverDuration:h,rotationIntensity:_,scaleIntensity:x,positionIntensity:g,interactionDuration:y,opacity:b,borderRadius:D})},`camera-${R}-${L}`),a&&(0,t.jsx)("div",{className:"pointer-events-none absolute inset-0 flex items-center justify-center",children:a})]})};f.displayName="ChromaCard",e.s(["default",0,f])},79960,e=>{e.n(e.i(95479))}]);