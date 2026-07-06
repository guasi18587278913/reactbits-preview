(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,67998,e=>{"use strict";var t=e.i(43476),i=e.i(71645),r=e.i(90072),s=e.i(8560),o=e.i(75157);let n=({image:e,pixelSize:n=20,cursorRadius:a=200,falloff:h=.5,mode:u="reveal",smoothing:c=.15,autoDemo:l=!0,autoSpeed:d=.5,autoResumeDelay:v=1500,style:m,className:p=""})=>{let g=(0,i.useRef)(null),f=(0,i.useRef)(null),w=(0,i.useRef)(null),T=(0,i.useRef)(null),y=(0,i.useRef)(null),M=(0,i.useRef)(null),x=(0,i.useRef)(!0),R=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let t=g.current;if(!t)return;let i=!1;class o{width=0;height=0;aspect=1;pixelRatio=1;container=null;renderer=null;clock=new r.Clock;time=0;delta=0;init(e){this.container=e,this.renderer=new s.WebGLRenderer({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.resize()}resize(){if(!this.container||!this.renderer)return;let e=this.container.getBoundingClientRect();this.width=e.width,this.height=e.height,this.aspect=this.width/this.height,this.renderer.setSize(this.width,this.height)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}let m=new o;class p{coords=new r.Vector2(.5,.5);coords_old=new r.Vector2(.5,.5);diff=new r.Vector2(0,0);target=new r.Vector2(.5,.5);smoothing=.15;container=null;docTarget=null;listenerTarget=null;isHoverInside=!1;hasUserControl=!1;isAutoActive=!1;takeoverActive=!1;takeoverStartTime=0;takeoverDuration=.25;takeoverFrom=new r.Vector2;takeoverTo=new r.Vector2;onInteract;_onMouseMove;_onTouchStart;_onTouchMove;_onTouchEnd;_onDocumentLeave;init(e){this.container=e;let t=(e.ownerDocument||document).defaultView;this.docTarget=e.ownerDocument||document,this.listenerTarget=t||window,this.smoothing=c,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this),this.listenerTarget.addEventListener("mousemove",this._onMouseMove,{passive:!0}),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget.addEventListener("mouseleave",this._onDocumentLeave)}dispose(){this.listenerTarget&&this._onMouseMove&&this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget&&this._onTouchStart&&this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget&&this._onTouchMove&&this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget&&this._onTouchEnd&&this.listenerTarget.removeEventListener("touchend",this._onTouchEnd),this.docTarget&&this._onDocumentLeave&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave)}isPointInside(e,t){if(!this.container)return!1;let i=this.container.getBoundingClientRect();return e>=i.left&&e<=i.right&&t>=i.top&&t<=i.bottom}updateHoverState(e,t){this.isHoverInside=this.isPointInside(e,t)}setCoordsFromClient(e,t){if(!this.container)return;let i=this.container.getBoundingClientRect(),r=(e-i.left)/i.width,s=(t-i.top)/i.height;this.setNormalized(r,s)}setNormalized(e,t){this.target.set(e,1-t)}onDocumentMouseMove(e){let t=e.clientX,i=e.clientY;if(this.updateHoverState(t,i),this.isHoverInside&&this.container){if(this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){let e=this.container.getBoundingClientRect(),r=(t-e.left)/e.width,s=(i-e.top)/e.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(r,1-s),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1,this.onInteract&&this.onInteract();return}this.setCoordsFromClient(t,i),this.hasUserControl=!0,this.isAutoActive=!1,this.takeoverActive=!1,this.onInteract&&this.onInteract()}}onDocumentTouchStart(e){if(0===e.touches.length)return;let t=e.touches[0];this.updateHoverState(t.clientX,t.clientY),this.isHoverInside&&(this.setCoordsFromClient(t.clientX,t.clientY),this.onInteract&&this.onInteract())}onDocumentTouchMove(e){if(0===e.touches.length)return;let t=e.touches[0];this.updateHoverState(t.clientX,t.clientY),this.isHoverInside&&(this.setCoordsFromClient(t.clientX,t.clientY),this.hasUserControl=!0,this.isAutoActive=!1,this.takeoverActive=!1,this.onInteract&&this.onInteract())}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){let e=(performance.now()-this.takeoverStartTime)/(1e3*this.takeoverDuration);e>=1?(this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.target.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0)):this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,e*e*(3-2*e))}else this.coords.lerp(this.target,this.smoothing);this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords)}}let _=new p;class D{mouse;manager;enabled;speed;resumeDelay;rampDurationMs;active=!1;current=new r.Vector2(.5,.5);target=new r.Vector2(.5,.5);lastTime=0;activationTime=0;margin=.15;_tmpDir=new r.Vector2;constructor(e,t,i){if(this.mouse=e,this.manager=t,this.enabled=i.enabled,this.speed=i.speed,this.resumeDelay=i.resumeDelay,this.rampDurationMs=1e3*i.rampDuration,this.enabled){this.active=!0,this.activationTime=performance.now();const e=Math.random();e<.25?this.current.set(this.margin,.5):e<.5?this.current.set(1-this.margin,.5):e<.75?this.current.set(.5,this.margin):this.current.set(.5,1-this.margin);const t=new r.Vector2(Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(.15);this.target.copy(this.current).add(t),this.target.x=Math.max(this.margin,Math.min(1-this.margin,this.target.x)),this.target.y=Math.max(this.margin,Math.min(1-this.margin,this.target.y)),this.mouse.coords.copy(this.current),this.mouse.coords_old.copy(this.current),this.mouse.isAutoActive=!0}}pickNewTarget(){let e=Math.random()*Math.PI*2,t=.2+.2*Math.random();this.target.set(Math.cos(e)*t,Math.sin(e)*t).add(this.current),this.target.x=Math.max(this.margin,Math.min(1-this.margin,this.target.x)),this.target.y=Math.max(this.margin,Math.min(1-this.margin,this.target.y))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1,this.lastTime=performance.now()}update(){if(!this.enabled)return;let e=performance.now();if(e-this.manager.lastUserInteraction<this.resumeDelay||this.mouse.isHoverInside){this.active&&this.forceStop();return}this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=e,this.activationTime=e,this.pickNewTarget(),this.mouse.takeoverActive=!0,this.mouse.takeoverStartTime=e,this.mouse.takeoverFrom.copy(this.mouse.coords),this.mouse.takeoverTo.copy(this.target)),this.mouse.isAutoActive=!0;let t=(e-this.lastTime)/1e3;this.lastTime=e,t>.2&&(t=.016);let i=this._tmpDir.subVectors(this.target,this.current),r=i.length();if(r<.01)return void this.pickNewTarget();i.normalize();let s=1;if(this.rampDurationMs>0){let t=Math.min(1,(e-this.activationTime)/this.rampDurationMs);s=t*t*(3-2*t)}let o=Math.min(this.speed*t*s,r);this.current.addScaledVector(i,o),this.mouse.setNormalized(this.current.x,this.current.y)}}let b=`
      precision highp float;
      attribute vec3 position;
      attribute vec2 uv;
      varying vec2 vUv;

      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,C=`
      precision highp float;
      varying vec2 vUv;

      uniform sampler2D uTexture;
      uniform vec2 uMouse;
      uniform vec2 uResolution;
      uniform vec2 uImageResolution;
      uniform float uCursorRadius;
      uniform float uFalloff;
      uniform float uPixelSize;
      uniform float uMode;

      vec2 getCoverUv(vec2 uv, vec2 texRes, vec2 canvasRes) {
        vec2 ratio = vec2(
          min((canvasRes.x / canvasRes.y) / (texRes.x / texRes.y), 1.0),
          min((canvasRes.y / canvasRes.x) / (texRes.y / texRes.x), 1.0)
        );

        vec2 newUv = vec2(
          uv.x * ratio.x + (1.0 - ratio.x) * 0.5,
          uv.y * ratio.y + (1.0 - ratio.y) * 0.5
        );

        return newUv;
      }

      void main() {
        vec2 pixelCoord = vUv * uResolution;
        vec2 mousePixel = uMouse * uResolution;
        float dist = distance(pixelCoord, mousePixel);

        float radius = uCursorRadius;
        float innerRadius = radius * (1.0 - uFalloff);
        float blend = smoothstep(innerRadius, radius, dist);

        if (uMode < 0.5) {
          blend = 1.0 - blend;
        }

        vec2 coverUv = getCoverUv(vUv, uImageResolution, uResolution);

        vec4 normalColor = texture2D(uTexture, coverUv);

        vec2 pixelatedUv = coverUv;
        if (blend < 1.0) {
          vec2 gridSize = uImageResolution / uPixelSize;
          vec2 gridUv = floor(coverUv * gridSize) / gridSize;
          gridUv += 0.5 / gridSize;
          pixelatedUv = gridUv;
        }

        vec4 pixelatedColor = texture2D(uTexture, pixelatedUv);

        vec4 finalColor = mix(pixelatedColor, normalColor, blend);

        gl_FragColor = finalColor;
      }
    `;class S{scene;camera;mesh;uniforms;constructor(e){this.scene=new r.Scene,this.camera=new r.Camera,this.uniforms={uTexture:{value:e},uMouse:{value:new r.Vector2(.5,.5)},uResolution:{value:new r.Vector2(m.width,m.height)},uImageResolution:{value:new r.Vector2(e.image?.width||e.source?.data?.width||1,e.image?.height||e.source?.data?.height||1)},uCursorRadius:{value:a},uFalloff:{value:h},uPixelSize:{value:n},uMode:{value:+("pixelate"===u)}};const t=new r.RawShaderMaterial({vertexShader:b,fragmentShader:C,transparent:!0,uniforms:this.uniforms});this.mesh=new r.Mesh(new r.PlaneGeometry(2,2),t),this.scene.add(this.mesh)}resize(){this.uniforms.uResolution.value.set(m.width,m.height)}update(){this.uniforms.uMouse.value.copy(_.coords)}render(){m.renderer&&(m.renderer.setRenderTarget(null),m.renderer.render(this.scene,this.camera))}}class A{props;output;autoDriver;lastUserInteraction=performance.now()-1e4;running=!1;_loop=this.loop.bind(this);_resize=this.resize.bind(this);_onVisibility;constructor(e){this.props=e,m.init(e.$wrapper),_.init(e.$wrapper),_.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.init(),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():x.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility)}init(){if(m.renderer){if(this.props.$wrapper.prepend(m.renderer.domElement),this.output=new S(this.props.texture),this.autoDriver=new D(_,this,{enabled:l,speed:d,resumeDelay:v,rampDuration:.6}),this.autoDriver&&this.autoDriver.enabled)for(let e=0;e<3;e++)this.autoDriver.update(),_.update(),this.output.update();this.start()}}resize(){m.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),_.update(),m.update(),this.output.update(),this.output.render()}loop(){this.running&&(this.render(),y.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,null!=y.current&&(cancelAnimationFrame(y.current),y.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),this._onVisibility&&document.removeEventListener("visibilitychange",this._onVisibility),_.dispose(),m.renderer){let e=m.renderer.domElement;e&&e.parentNode&&e.parentNode.removeChild(e),m.renderer.dispose()}this.output.mesh.geometry.dispose(),this.output.mesh.material.dispose()}catch{}}}t.style.position=t.style.position||"relative",t.style.overflow=t.style.overflow||"hidden";let k=new r.TextureLoader;return k.crossOrigin="anonymous",(async()=>{try{let s=await new Promise((t,i)=>{k.load(e,e=>{e.wrapS=r.ClampToEdgeWrapping,e.wrapT=r.ClampToEdgeWrapping,e.minFilter=r.LinearFilter,e.magFilter=r.LinearFilter,t(e)},void 0,e=>i(e))});if(i)return void s.dispose();R.current=s;let o=new A({$wrapper:t,texture:s});o.start(),f.current=o;let n=new IntersectionObserver(e=>{let t=e[0],i=t.isIntersecting&&t.intersectionRatio>0;x.current=i,f.current&&(i&&!document.hidden?f.current.start():f.current.pause())},{threshold:[0,.01,.1]});n.observe(t),T.current=n;let a=new ResizeObserver(()=>{f.current&&(M.current&&cancelAnimationFrame(M.current),M.current=requestAnimationFrame(()=>{f.current&&f.current.resize()}))});a.observe(t),w.current=a}catch{}})(),()=>{if(i=!0,null!=y.current&&cancelAnimationFrame(y.current),w.current)try{w.current.disconnect()}catch{}if(T.current)try{T.current.disconnect()}catch{}f.current&&f.current.dispose(),f.current=null,R.current&&(R.current.dispose(),R.current=null)}},[e,n,a,h,u,c,l,d,v]),(0,t.jsx)("div",{ref:g,className:(0,o.cn)("relative w-full h-full overflow-hidden",p),style:m})};e.s(["default",0,n])},73947,e=>{e.n(e.i(67998))}]);