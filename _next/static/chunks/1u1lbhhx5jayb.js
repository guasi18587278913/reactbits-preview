(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,20743,e=>{"use strict";var t=e.i(43476),i=e.i(71645),s=e.i(8560),r=e.i(90072);let o=({frontImage:e,backImage:o,mouseForce:n=50,cursorSize:a=250,resolution:l=.5,isViscous:u=!0,viscous:c=30,iterationsViscous:h=24,iterationsPoisson:v=28,dt:d=.014,BFECC:p=!0,isBounce:m=!1,autoDemo:f=!0,autoSpeed:y=.55,autoIntensity:x=2.2,takeoverDuration:g=.25,autoResumeDelay:w=1200,autoRampDuration:S=.6,revealStrength:b=.75,revealSoftness:_=1,style:D,className:T=""})=>{let U=(0,i.useRef)(null),C=(0,i.useRef)(null),z=(0,i.useRef)(null),R=(0,i.useRef)(null),k=(0,i.useRef)(null),F=(0,i.useRef)(null),M=(0,i.useRef)(!0),V=(0,i.useRef)(null),E=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let t=U.current;if(!t)return;let i=!1,D=new class{width=0;height=0;aspect=1;pixelRatio=1;container=null;renderer=null;clock=null;time=0;delta=0;init(e){this.container=e,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new s.WebGLRenderer({antialias:!0,alpha:!0}),this.renderer.autoClear=!0,this.renderer.setClearColor(0,0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height);let t=this.renderer.domElement;t.style.width="100%",t.style.height="100%",t.style.display="block",t.style.borderRadius="inherit",this.clock=new r.Clock,this.clock.start()}resize(){if(!this.container)return;let e=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(e.width)),this.height=Math.max(1,Math.floor(e.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.clock&&(this.delta=this.clock.getDelta(),this.time+=this.delta)}};class T{coords=new r.Vector2(0,0);coords_old=new r.Vector2(0,0);diff=new r.Vector2(0,0);container=null;docTarget=null;listenerTarget=null;isHoverInside=!1;hasUserControl=!1;isAutoActive=!1;autoIntensity=2;takeoverActive=!1;takeoverStartTime=0;takeoverDuration=.25;takeoverFrom=new r.Vector2;takeoverTo=new r.Vector2;onInteract=null;_onMouseMove=this.onDocumentMouseMove.bind(this);_onTouchStart=this.onDocumentTouchStart.bind(this);_onTouchMove=this.onDocumentTouchMove.bind(this);_onTouchEnd=this.onTouchEnd.bind(this);_onDocumentLeave=this.onDocumentLeave.bind(this);init(e){this.container=e,this.docTarget=e.ownerDocument||null;let t=this.docTarget?.defaultView||window;t&&(this.listenerTarget=t,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget?.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(e,t){if(!this.container)return!1;let i=this.container.getBoundingClientRect();return 0!==i.width&&0!==i.height&&e>=i.left&&e<=i.right&&t>=i.top&&t<=i.bottom}updateHoverState(e,t){return this.isHoverInside=this.isPointInside(e,t),this.isHoverInside}setCoordsFromClient(e,t){if(!this.container)return;let i=this.container.getBoundingClientRect();if(0===i.width||0===i.height)return;let s=(e-i.left)/i.width,r=(t-i.top)/i.height;this.coords.set(2*s-1,-(2*r-1))}setNormalized(e,t){this.coords.set(e,t)}onDocumentMouseMove(e){if(this.updateHoverState(e.clientX,e.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;let t=this.container.getBoundingClientRect(),i=(e.clientX-t.left)/t.width,s=(e.clientY-t.top)/t.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(2*i-1,-(2*s-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoordsFromClient(e.clientX,e.clientY),this.hasUserControl=!0}}onDocumentTouchStart(e){if(1!==e.touches.length)return;let t=e.touches[0];this.updateHoverState(t.clientX,t.clientY)&&(this.onInteract&&this.onInteract(),this.setCoordsFromClient(t.clientX,t.clientY),this.hasUserControl=!0)}onDocumentTouchMove(e){if(1!==e.touches.length)return;let t=e.touches[0];this.updateHoverState(t.clientX,t.clientY)&&(this.onInteract&&this.onInteract(),this.setCoordsFromClient(t.clientX,t.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){let e=(performance.now()-this.takeoverStartTime)/(1e3*this.takeoverDuration);e>=1?(this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0)):this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,e*e*(3-2*e))}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords)}}let A=new T;class L{mouse;manager;enabled;speed;resumeDelay;rampDurationMs;active=!0;current=new r.Vector2;target=new r.Vector2;lastTime=performance.now();activationTime=performance.now();margin=.2;_tmpDir=new r.Vector2;constructor(e,t,i){this.mouse=e,this.manager=t,this.enabled=i.enabled,this.speed=i.speed,this.resumeDelay=i.resumeDelay||3e3,this.rampDurationMs=1e3*(i.rampDuration||0);const s=Math.random;this.current.set((2*s()-1)*(1-this.margin),(2*s()-1)*(1-this.margin)),this.pickNewTarget();const r=this._tmpDir.subVectors(this.target,this.current).normalize();this.mouse.coords_old.set(this.current.x-.05*r.x,this.current.y-.05*r.y),this.mouse.setNormalized(this.current.x,this.current.y),this.mouse.isAutoActive=!0}pickNewTarget(){let e=Math.random;this.target.set((2*e()-1)*(1-this.margin),(2*e()-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;let e=performance.now();if(e-this.manager.lastUserInteraction<this.resumeDelay||this.mouse.isHoverInside){this.active&&this.forceStop();return}this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=e,this.activationTime=e,this.pickNewTarget()),this.mouse.isAutoActive=!0;let t=(e-this.lastTime)/1e3;this.lastTime=e,t>.2&&(t=.016);let i=this._tmpDir.subVectors(this.target,this.current),s=i.length();if(s<.01)return void this.pickNewTarget();i.normalize();let r=1;if(this.rampDurationMs>0){let t=Math.min(1,(e-this.activationTime)/this.rampDurationMs);r=t*t*(3-2*t)}let o=Math.min(this.speed*t*r,s);this.current.addScaledVector(i,o),this.mouse.setNormalized(this.current.x,this.current.y)}}let P=`
      precision highp float;
      attribute vec3 position;
      varying vec2 vUv;
      uniform vec2 boundarySpace;
      void main() {
        vec3 pos = position;
        vec2 scale = 1.0 - boundarySpace * 2.0;
        pos.xy = pos.xy * scale;
        vUv = vec2(0.5) + pos.xy * 0.5;
        gl_Position = vec4(pos, 1.0);
      }
    `,I=`
      precision highp float;
      attribute vec3 position;
      attribute vec2 uv;
      varying vec2 vUv;
      uniform vec2 center;
      uniform vec2 scale;
      uniform vec2 px;
      void main() {
        vec2 pos = position.xy * scale * 2.0 * px + center;
        vUv = uv;
        gl_Position = vec4(pos, 0.0, 1.0);
      }
    `,B=`
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D velocity;
      uniform float dt;
      uniform bool isBFECC;
      uniform vec2 fboSize;
      uniform vec2 px;

      void main() {
        vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;

        if (!isBFECC) {
          vec2 vel = texture2D(velocity, vUv).xy;
          vec2 uv2 = vUv - vel * dt * ratio;
          vec2 newVel = texture2D(velocity, uv2).xy;
          gl_FragColor = vec4(newVel, 0.0, 0.0);
        } else {
          vec2 spot_new = vUv;
          vec2 vel_old = texture2D(velocity, vUv).xy;
          vec2 spot_old = spot_new - vel_old * dt * ratio;
          vec2 vel_new1 = texture2D(velocity, spot_old).xy;
          vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
          vec2 error = spot_new2 - spot_new;
          vec2 spot_new3 = spot_new - error / 2.0;
          vec2 vel_2 = texture2D(velocity, spot_new3).xy;
          vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
          vec2 newVel2 = texture2D(velocity, spot_old2).xy;
          gl_FragColor = vec4(newVel2, 0.0, 0.0);
        }
      }
    `,H=`
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D velocity;
      uniform float dt;
      uniform vec2 px;

      void main() {
        float x0 = texture2D(velocity, vUv - vec2(px.x, 0.0)).x;
        float x1 = texture2D(velocity, vUv + vec2(px.x, 0.0)).x;
        float y0 = texture2D(velocity, vUv - vec2(0.0, px.y)).y;
        float y1 = texture2D(velocity, vUv + vec2(0.0, px.y)).y;
        float divergence = (x1 - x0 + y1 - y0) * 0.5;
        gl_FragColor = vec4(divergence / dt);
      }
    `,N=`
      precision highp float;
      varying vec2 vUv;
      uniform vec2 force;
      uniform vec2 center;
      uniform vec2 scale;
      uniform vec2 px;

      void main() {
        vec2 circle = (vUv - 0.5) * 2.0;
        float d = 1.0 - min(length(circle), 1.0);
        d *= d;
        gl_FragColor = vec4(force * d, 0.0, 1.0);
      }
    `,O=`
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D pressure;
      uniform sampler2D divergence;
      uniform vec2 px;

      void main() {
        float p0 = texture2D(pressure, vUv + vec2(px.x * 2.0, 0.0)).r;
        float p1 = texture2D(pressure, vUv - vec2(px.x * 2.0, 0.0)).r;
        float p2 = texture2D(pressure, vUv + vec2(0.0, px.y * 2.0)).r;
        float p3 = texture2D(pressure, vUv - vec2(0.0, px.y * 2.0)).r;
        float div = texture2D(divergence, vUv).r;
        float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
        gl_FragColor = vec4(newP);
      }
    `,W=`
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D pressure;
      uniform sampler2D velocity;
      uniform vec2 px;
      uniform float dt;

      void main() {
        float step = 1.0;
        float p0 = texture2D(pressure, vUv + vec2(px.x * step, 0.0)).r;
        float p1 = texture2D(pressure, vUv - vec2(px.x * step, 0.0)).r;
        float p2 = texture2D(pressure, vUv + vec2(0.0, px.y * step)).r;
        float p3 = texture2D(pressure, vUv - vec2(0.0, px.y * step)).r;
        vec2 v = texture2D(velocity, vUv).xy;
        vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
        v = v - gradP * dt;
        gl_FragColor = vec4(v, 0.0, 1.0);
      }
    `,X=`
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D velocity;
      uniform sampler2D velocity_new;
      uniform float v;
      uniform vec2 px;
      uniform float dt;

      void main() {
        vec2 old = texture2D(velocity, vUv).xy;
        vec2 new0 = texture2D(velocity_new, vUv + vec2(px.x * 2.0, 0.0)).xy;
        vec2 new1 = texture2D(velocity_new, vUv - vec2(px.x * 2.0, 0.0)).xy;
        vec2 new2 = texture2D(velocity_new, vUv + vec2(0.0, px.y * 2.0)).xy;
        vec2 new3 = texture2D(velocity_new, vUv - vec2(0.0, px.y * 2.0)).xy;
        vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
        newv /= 4.0 * (1.0 + v * dt);
        gl_FragColor = vec4(newv, 0.0, 0.0);
      }
    `,Y=`
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D tDye;
      uniform sampler2D tVelocity;
      uniform float dt;
      uniform vec2 fboSize;
      uniform float dissipation;

      void main() {
        vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
        vec2 vel = texture2D(tVelocity, vUv).xy;
        vec2 coord = vUv - vel * dt * ratio;
        vec4 dye = texture2D(tDye, coord);
        dye *= dissipation;
        gl_FragColor = dye;
      }
    `,G=`
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D tDye;
      uniform vec2 center;
      uniform float radius;
      uniform float strength;

      void main() {
        vec4 base = texture2D(tDye, vUv);

        float dist = length(vUv - center);
        float r = radius;
        float falloff = exp(- (dist * dist) / (r * r + 1e-6));

        float added = strength * falloff;
        float v = clamp(base.r + added, 0.0, 1.0);

        gl_FragColor = vec4(v, v, v, 1.0);
      }
    `,$=`
      precision highp float;
      varying vec2 vUv;

      uniform sampler2D frontTex;
      uniform sampler2D backTex;
      uniform sampler2D tDye;

      uniform float revealStrength;
      uniform float revealSoftness;

      uniform vec2 frontTexResolution;
      uniform vec2 backTexResolution;
      uniform vec2 canvasResolution;

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
        float dye = texture2D(tDye, vUv).r;

        float m = dye * revealStrength;
        float mask = smoothstep(0.0, revealSoftness, m);
        mask = clamp(mask, 0.0, 1.0);

        vec2 frontUv = getCoverUv(vUv, frontTexResolution, canvasResolution);
        vec2 backUv = getCoverUv(vUv, backTexResolution, canvasResolution);

        vec4 front = texture2D(frontTex, frontUv);
        vec4 back = texture2D(backTex, backUv);

        vec4 color = mix(front, back, mask);
        float alpha = max(color.a, max(front.a, back.a));

        gl_FragColor = vec4(color.rgb, alpha);
      }
    `;class j{props;uniforms;scene=null;camera=null;material=null;geometry=null;plane=null;constructor(e){this.props=e||{},this.uniforms=this.props.material?.uniforms}init(){this.scene=new r.Scene,this.camera=new r.Camera,this.uniforms&&(this.material=new r.RawShaderMaterial(this.props.material),this.geometry=new r.PlaneGeometry(2,2),this.plane=new r.Mesh(this.geometry,this.material),this.scene.add(this.plane))}update(){D.renderer&&this.scene&&this.camera&&(D.renderer.setRenderTarget(this.props.output||null),D.renderer.render(this.scene,this.camera),D.renderer.setRenderTarget(null))}}class q extends j{constructor(e){super({material:{vertexShader:P,fragmentShader:B,uniforms:{boundarySpace:{value:e.cellScale},px:{value:e.cellScale},fboSize:{value:e.fboSize},velocity:{value:e.src.texture},dt:{value:e.dt},isBFECC:{value:!0}}},output:e.dst}),this.uniforms=this.props.material.uniforms,this.init()}update(e){e?this.uniforms&&("number"==typeof e.dt&&(this.uniforms.dt.value=e.dt),"boolean"==typeof e.BFECC&&(this.uniforms.isBFECC.value=e.BFECC),super.update()):super.update()}}class K extends j{mouseMesh;constructor(e){super({output:e.dst}),this.init(e)}init(e){this.scene=new r.Scene,this.camera=new r.Camera;let t=new r.PlaneGeometry(1,1),i=new r.RawShaderMaterial({vertexShader:I,fragmentShader:N,blending:r.AdditiveBlending,depthWrite:!1,uniforms:{px:{value:e.cellScale},force:{value:new r.Vector2(0,0)},center:{value:new r.Vector2(0,0)},scale:{value:new r.Vector2(e.cursor_size,e.cursor_size)}}});this.mouseMesh=new r.Mesh(t,i),this.scene.add(this.mouseMesh)}update(e){if(!e)return;let t=this.mouseMesh.material.uniforms,i=e.mouse_force||20,s=e.cellScale||new r.Vector2,o=e.cursor_size||100,n=A.diff.x/2*i,a=A.diff.y/2*i,l=o*s.x,u=o*s.y,c=Math.min(Math.max(A.coords.x,-1+l+2*s.x),1-l-2*s.x),h=Math.min(Math.max(A.coords.y,-1+u+2*s.y),1-u-2*s.y);t.force.value.set(n,a),t.center.value.set(c,h),t.scale.value.set(o,o),super.update()}}class J extends j{constructor(e){super({material:{vertexShader:P,fragmentShader:X,uniforms:{boundarySpace:{value:e.boundarySpace},velocity:{value:e.src.texture},velocity_new:{value:e.dst_.texture},v:{value:e.viscous},px:{value:e.cellScale},dt:{value:e.dt}}},output:e.dst,output0:e.dst_,output1:e.dst}),this.init()}update(e){if(!e)return null;if(!this.uniforms)return;let t=e.viscous??30,i=e.iterations??32,s=e.dt??.014;this.uniforms.v.value=t;let r=null,o=null;for(let e=0;e<i;e++)e%2==0?(r=this.props.output0,o=this.props.output1):(r=this.props.output1,o=this.props.output0),r&&(this.uniforms.velocity_new.value=r.texture,this.props.output=o,this.uniforms.dt.value=s,super.update());return o}}class Q extends j{constructor(e){super({material:{vertexShader:P,fragmentShader:H,uniforms:{boundarySpace:{value:e.boundarySpace},velocity:{value:e.src.texture},px:{value:e.cellScale},dt:{value:e.dt}}},output:e.dst}),this.init()}update(e){e&&e.vel&&(this.uniforms&&(this.uniforms.velocity.value=e.vel.texture),super.update())}}class Z extends j{constructor(e){super({material:{vertexShader:P,fragmentShader:O,uniforms:{boundarySpace:{value:e.boundarySpace},pressure:{value:e.dst_.texture},divergence:{value:e.src.texture},px:{value:e.cellScale}}},output:e.dst,output0:e.dst_,output1:e.dst}),this.init()}update(e){let t,i;if(!e)return null;let s=e.iterations??32;t=this.props.output0,i=this.props.output1;for(let e=0;e<s;e++)e%2==0?(t=this.props.output0,i=this.props.output1):(t=this.props.output1,i=this.props.output0),t&&(this.uniforms&&(this.uniforms.pressure.value=t.texture),this.props.output=i,super.update());return i||null}}class ee extends j{constructor(e){super({material:{vertexShader:P,fragmentShader:W,uniforms:{boundarySpace:{value:e.boundarySpace},pressure:{value:e.src_p.texture},velocity:{value:e.src_v.texture},px:{value:e.cellScale},dt:{value:e.dt}}},output:e.dst}),this.init()}update(e){e&&e.vel&&e.pressure&&(this.uniforms&&(this.uniforms.velocity.value=e.vel.texture,this.uniforms.pressure.value=e.pressure.texture),super.update())}}class et extends j{constructor(e){super({material:{vertexShader:P,fragmentShader:Y,uniforms:{boundarySpace:{value:e.cellScale},tDye:{value:e.src.texture},tVelocity:{value:e.velocity.texture},dt:{value:e.dt},fboSize:{value:e.fboSize},dissipation:{value:e.dissipation}}},output:e.dst}),this.init()}update(e){e&&e.src&&e.velocity&&this.uniforms&&(this.uniforms.tDye.value=e.src.texture,this.uniforms.tVelocity.value=e.velocity.texture,this.uniforms.dt.value=e.dt,this.uniforms.dissipation.value=e.dissipation,super.update())}}class ei extends j{constructor(e){super({material:{vertexShader:P,fragmentShader:G,uniforms:{boundarySpace:{value:e.cellScale},tDye:{value:e.src.texture},center:{value:new r.Vector2(.5,.5)},radius:{value:e.radius},strength:{value:e.strength}}},output:e.dst}),this.init()}update(e){if(!e||!e.src||!this.uniforms)return;let t=this.uniforms;t.tDye.value=e.src.texture;let i=new r.Vector2((A.coords.x+1)*.5,(A.coords.y+1)*.5);t.center.value.copy(i),t.radius.value=e.radius,t.strength.value=e.strength,super.update()}}class es{options;fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null,dye_0:null,dye_1:null};fboSize=new r.Vector2;cellScale=new r.Vector2;boundarySpace=new r.Vector2;advection;externalForce;viscousPass;divergence;poisson;pressure;dyeAdvection;dyeSplat;dyeDissipation=.985;constructor(e){this.options={iterations_poisson:v,iterations_viscous:h,mouse_force:n,resolution:l,cursor_size:a,viscous:c,isBounce:m,dt:d,isViscous:u,BFECC:p,...e},this.init()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?r.HalfFloatType:r.FloatType}calcSize(){let e=Math.max(1,Math.round(this.options.resolution*D.width)),t=Math.max(1,Math.round(this.options.resolution*D.height));this.cellScale.set(1/e,1/t),this.fboSize.set(e,t)}createAllFBO(){let e={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:r.LinearFilter,magFilter:r.LinearFilter,wrapS:r.ClampToEdgeWrapping,wrapT:r.ClampToEdgeWrapping};for(let t of Object.keys(this.fbos))this.fbos[t]=new r.WebGLRenderTarget(this.fboSize.x,this.fboSize.y,e)}createShaderPasses(){this.advection=new q({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new K({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscousPass=new J({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Q({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new Z({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new ee({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt}),this.dyeAdvection=new et({cellScale:this.cellScale,src:this.fbos.dye_0,velocity:this.fbos.vel_0,dt:this.options.dt,fboSize:this.fboSize,dissipation:this.dyeDissipation,dst:this.fbos.dye_1}),this.dyeSplat=new ei({cellScale:this.cellScale,src:this.fbos.dye_1,radius:.25,strength:1,dst:this.fbos.dye_0})}init(){this.calcSize(),this.createAllFBO(),this.createShaderPasses()}resize(){for(let e of(this.calcSize(),Object.keys(this.fbos)))this.fbos[e].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,BFECC:this.options.BFECC}),this.externalForce.update({mouse_force:this.options.mouse_force,cellScale:this.cellScale,cursor_size:this.options.cursor_size});let e=this.fbos.vel_1;this.options.isViscous&&(e=this.viscousPass.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:e||this.fbos.vel_1});let t=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:e||this.fbos.vel_1,pressure:t||this.fbos.pressure_0}),this.dyeAdvection.update({src:this.fbos.dye_0,velocity:this.fbos.vel_0,dt:this.options.dt,dissipation:this.dyeDissipation});let i=A.diff.length(),s=.3*r.MathUtils.clamp(1.8*i,.4,3);this.dyeSplat.update({src:this.fbos.dye_1,radius:a/120*.08,strength:s,cellScale:this.cellScale})}}class er{simulation;scene;camera;mesh;uniforms;constructor(e,t){this.simulation=new es,this.scene=new r.Scene,this.camera=new r.Camera,this.uniforms={frontTex:{value:e},backTex:{value:t},tDye:{value:this.simulation.fbos.dye_0.texture},boundarySpace:{value:new r.Vector2},revealStrength:{value:b},revealSoftness:{value:_},frontTexResolution:{value:new r.Vector2(e.image?.width||e.source?.data?.width||1,e.image?.height||e.source?.data?.height||1)},backTexResolution:{value:new r.Vector2(t.image?.width||t.source?.data?.width||1,t.image?.height||t.source?.data?.height||1)},canvasResolution:{value:new r.Vector2(D.width,D.height)}};const i=new r.RawShaderMaterial({vertexShader:P,fragmentShader:$,transparent:!0,depthWrite:!1,uniforms:this.uniforms});this.mesh=new r.Mesh(new r.PlaneGeometry(2,2),i),this.scene.add(this.mesh)}resize(){this.simulation.resize(),this.uniforms.canvasResolution.value.set(D.width,D.height)}update(){this.simulation.update()}render(){D.renderer&&(D.renderer.setRenderTarget(null),D.renderer.render(this.scene,this.camera))}}class eo{props;output;autoDriver;lastUserInteraction=performance.now()-1e4;running=!1;_loop=this.loop.bind(this);_resize=this.resize.bind(this);_onVisibility;constructor(e){this.props=e,D.init(e.$wrapper),A.init(e.$wrapper),A.autoIntensity=x,A.takeoverDuration=g,A.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.init(),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():M.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility)}init(){if(D.renderer){if(this.props.$wrapper.prepend(D.renderer.domElement),this.output=new er(this.props.frontTex,this.props.backTex),this.autoDriver=new L(A,this,{enabled:f,speed:y,resumeDelay:w,rampDuration:S}),this.autoDriver&&this.autoDriver.enabled)for(let e=0;e<3;e++)this.autoDriver.update(),A.update(),this.output.update();this.start()}}resize(){D.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),A.update(),D.update(),this.output.update(),this.output.render()}loop(){this.running&&(this.render(),k.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,null!=k.current&&(cancelAnimationFrame(k.current),k.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),this._onVisibility&&document.removeEventListener("visibilitychange",this._onVisibility),A.dispose(),D.renderer){let e=D.renderer.domElement;e&&e.parentNode&&e.parentNode.removeChild(e),D.renderer.dispose()}this.output.mesh.geometry.dispose(),this.output.mesh.material.dispose()}catch{}}}t.style.position=t.style.position||"relative",t.style.overflow=t.style.overflow||"hidden";let en=new r.TextureLoader;en.crossOrigin="anonymous";let ea=e=>new Promise((t,i)=>{en.load(e,e=>{e.wrapS=r.ClampToEdgeWrapping,e.wrapT=r.ClampToEdgeWrapping,e.minFilter=r.LinearFilter,e.magFilter=r.LinearFilter,t(e)},void 0,e=>i(e))});return(async()=>{try{let[s,r]=await Promise.all([ea(e),ea(o)]);if(i){s.dispose(),r.dispose();return}V.current=s,E.current=r;let n=new eo({$wrapper:t,frontTex:s,backTex:r});n.start(),C.current=n;let a=new IntersectionObserver(e=>{let t=e[0],i=t.isIntersecting&&t.intersectionRatio>0;M.current=i,C.current&&(i&&!document.hidden?C.current.start():C.current.pause())},{threshold:[0,.01,.1]});a.observe(t),R.current=a;let l=new ResizeObserver(()=>{C.current&&(F.current&&cancelAnimationFrame(F.current),F.current=requestAnimationFrame(()=>{C.current&&C.current.resize()}))});l.observe(t),z.current=l}catch{}})(),()=>{if(i=!0,null!=k.current&&cancelAnimationFrame(k.current),z.current)try{z.current.disconnect()}catch{}if(R.current)try{R.current.disconnect()}catch{}C.current&&C.current.dispose(),C.current=null,V.current&&(V.current.dispose(),V.current=null),E.current&&(E.current.dispose(),E.current=null)}},[e,o,n,a,l,u,c,h,v,d,p,m,f,y,x,g,w,S,b,_]),(0,t.jsx)("div",{ref:U,className:`relative w-full h-full overflow-hidden ${T||""}`,style:D})};e.s(["default",0,o])},36376,e=>{e.n(e.i(20743))}]);