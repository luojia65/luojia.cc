// build time:Fri Jun 22 2018 08:03:37 GMT+0800 (GMT+08:00)
(function(){var e,t,n,r,s,i,o,u,a,l,c,f,p,h,d,g,m,y,v,w,b,k,S,q,L,x,P,T,R,j,E,O,M,A,N,_,F,C,U,W,X,D,H,I,z,G,B,J,K,Q=[].slice,V={}.hasOwnProperty,Y=function(e,t){for(var n in t){if(V.call(t,n))e[n]=t[n]}function r(){this.constructor=e}r.prototype=t.prototype;e.prototype=new r;e.__super__=t.prototype;return e},Z=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++){if(t in this&&this[t]===e)return t}return-1};b={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:true,restartOnPushState:true,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:true,ignoreURLs:[]}};R=function(){var e;return(e=typeof performance!=="undefined"&&performance!==null?typeof performance.now==="function"?performance.now():void 0:void 0)!=null?e:+new Date};E=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;w=window.cancelAnimationFrame||window.mozCancelAnimationFrame;if(E==null){E=function(e){return setTimeout(e,50)};w=function(e){return clearTimeout(e)}}M=function(e){var t,n;t=R();n=function(){var r;r=R()-t;if(r>=33){t=R();return e(r,function(){return E(n)})}else{return setTimeout(n,33-r)}};return n()};O=function(){var e,t,n;n=arguments[0],t=arguments[1],e=3<=arguments.length?Q.call(arguments,2):[];if(typeof n[t]==="function"){return n[t].apply(n,e)}else{return n[t]}};k=function(){var e,t,n,r,s,i,o;t=arguments[0],r=2<=arguments.length?Q.call(arguments,1):[];for(i=0,o=r.length;i<o;i++){n=r[i];if(n){for(e in n){if(!V.call(n,e))continue;s=n[e];if(t[e]!=null&&typeof t[e]==="object"&&s!=null&&typeof s==="object"){k(t[e],s)}else{t[e]=s}}}}return t};m=function(e){var t,n,r,s,i;n=t=0;for(s=0,i=e.length;s<i;s++){r=e[s];n+=Math.abs(r);t++}return n/t};q=function(e,t){var n,r,s;if(e==null){e="options"}if(t==null){t=true}s=document.querySelector("[data-pace-"+e+"]");if(!s){return}n=s.getAttribute("data-pace-"+e);if(!t){return n}try{return JSON.parse(n)}catch(i){r=i;return typeof console!=="undefined"&&console!==null?console.error("Error parsing inline pace options",r):void 0}};o=function(){function e(){}e.prototype.on=function(e,t,n,r){var s;if(r==null){r=false}if(this.bindings==null){this.bindings={}}if((s=this.bindings)[e]==null){s[e]=[]}return this.bindings[e].push({handler:t,ctx:n,once:r})};e.prototype.once=function(e,t,n){return this.on(e,t,n,true)};e.prototype.off=function(e,t){var n,r,s;if(((r=this.bindings)!=null?r[e]:void 0)==null){return}if(t==null){return delete this.bindings[e]}else{n=0;s=[];while(n<this.bindings[e].length){if(this.bindings[e][n].handler===t){s.push(this.bindings[e].splice(n,1))}else{s.push(n++)}}return s}};e.prototype.trigger=function(){var e,t,n,r,s,i,o,u,a;n=arguments[0],e=2<=arguments.length?Q.call(arguments,1):[];if((o=this.bindings)!=null?o[n]:void 0){s=0;a=[];while(s<this.bindings[n].length){u=this.bindings[n][s],r=u.handler,t=u.ctx,i=u.once;r.apply(t!=null?t:this,e);if(i){a.push(this.bindings[n].splice(s,1))}else{a.push(s++)}}return a}};return e}();l=window.Pace||{};window.Pace=l;k(l,o.prototype);j=l.options=k({},b,window.paceOptions,q());B=["ajax","document","eventLag","elements"];for(H=0,z=B.length;H<z;H++){F=B[H];if(j[F]===true){j[F]=b[F]}}a=function(e){Y(t,e);function t(){J=t.__super__.constructor.apply(this,arguments);return J}return t}(Error);t=function(){function e(){this.progress=0}e.prototype.getElement=function(){var e;if(this.el==null){e=document.querySelector(j.target);if(!e){throw new a}this.el=document.createElement("div");this.el.className="pace pace-active";document.body.className=document.body.className.replace(/pace-done/g,"");document.body.className+=" pace-running";this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>';if(e.firstChild!=null){e.insertBefore(this.el,e.firstChild)}else{e.appendChild(this.el)}}return this.el};e.prototype.finish=function(){var e;e=this.getElement();e.className=e.className.replace("pace-active","");e.className+=" pace-inactive";document.body.className=document.body.className.replace("pace-running","");return document.body.className+=" pace-done"};e.prototype.update=function(e){this.progress=e;return this.render()};e.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(e){a=e}return this.el=void 0};e.prototype.render=function(){var e,t,n,r,s,i,o;if(document.querySelector(j.target)==null){return false}e=this.getElement();r="translate3d("+this.progress+"%, 0, 0)";o=["webkitTransform","msTransform","transform"];for(s=0,i=o.length;s<i;s++){t=o[s];e.children[0].style[t]=r}if(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0){e.children[0].setAttribute("data-progress-text",""+(this.progress|0)+"%");if(this.progress>=100){n="99"}else{n=this.progress<10?"0":"";n+=this.progress|0}e.children[0].setAttribute("data-progress",""+n)}return this.lastRenderedProgress=this.progress};e.prototype.done=function(){return this.progress>=100};return e}();u=function(){function e(){this.bindings={}}e.prototype.trigger=function(e,t){var n,r,s,i,o;if(this.bindings[e]!=null){i=this.bindings[e];o=[];for(r=0,s=i.length;r<s;r++){n=i[r];o.push(n.call(this,t))}return o}};e.prototype.on=function(e,t){var n;if((n=this.bindings)[e]==null){n[e]=[]}return this.bindings[e].push(t)};return e}();D=window.XMLHttpRequest;X=window.XDomainRequest;W=window.WebSocket;S=function(e,t){var n,r,s;s=[];for(r in t.prototype){try{if(e[r]==null&&typeof t[r]!=="function"){if(typeof Object.defineProperty==="function"){s.push(Object.defineProperty(e,r,{get:function(){return t.prototype[r]},configurable:true,enumerable:true}))}else{s.push(e[r]=t.prototype[r])}}else{s.push(void 0)}}catch(i){n=i}}return s};P=[];l.ignore=function(){var e,t,n;t=arguments[0],e=2<=arguments.length?Q.call(arguments,1):[];P.unshift("ignore");n=t.apply(null,e);P.shift();return n};l.track=function(){var e,t,n;t=arguments[0],e=2<=arguments.length?Q.call(arguments,1):[];P.unshift("track");n=t.apply(null,e);P.shift();return n};_=function(e){var t;if(e==null){e="GET"}if(P[0]==="track"){return"force"}if(!P.length&&j.ajax){if(e==="socket"&&j.ajax.trackWebSockets){return true}else if(t=e.toUpperCase(),Z.call(j.ajax.trackMethods,t)>=0){return true}}return false};c=function(e){Y(t,e);function t(){var e,n=this;t.__super__.constructor.apply(this,arguments);e=function(e){var t;t=e.open;return e.open=function(r,s,i){if(_(r)){n.trigger("request",{type:r,url:s,request:e})}return t.apply(e,arguments)}};window.XMLHttpRequest=function(t){var n;n=new D(t);e(n);return n};try{S(window.XMLHttpRequest,D)}catch(r){}if(X!=null){window.XDomainRequest=function(){var t;t=new X;e(t);return t};try{S(window.XDomainRequest,X)}catch(r){}}if(W!=null&&j.ajax.trackWebSockets){window.WebSocket=function(e,t){var r;if(t!=null){r=new W(e,t)}else{r=new W(e)}if(_("socket")){n.trigger("request",{type:"socket",url:e,protocols:t,request:r})}return r};try{S(window.WebSocket,W)}catch(r){}}}return t}(u);I=null;L=function(){if(I==null){I=new c}return I};N=function(e){var t,n,r,s;s=j.ajax.ignoreURLs;for(n=0,r=s.length;n<r;n++){t=s[n];if(typeof t==="string"){if(e.indexOf(t)!==-1){return true}}else{if(t.test(e)){return true}}}return false};L().on("request",function(t){var n,r,s,i,o;i=t.type,s=t.request,o=t.url;if(N(o)){return}if(!l.running&&(j.restartOnRequestAfter!==false||_(i)==="force")){r=arguments;n=j.restartOnRequestAfter||0;if(typeof n==="boolean"){n=0}return setTimeout(function(){var t,n,o,u,a,c;if(i==="socket"){t=s.readyState<2}else{t=0<(u=s.readyState)&&u<4}if(t){l.restart();a=l.sources;c=[];for(n=0,o=a.length;n<o;n++){F=a[n];if(F instanceof e){F.watch.apply(F,r);break}else{c.push(void 0)}}return c}},n)}});e=function(){function e(){var e=this;this.elements=[];L().on("request",function(){return e.watch.apply(e,arguments)})}e.prototype.watch=function(e){var t,n,r,s;r=e.type,t=e.request,s=e.url;if(N(s)){return}if(r==="socket"){n=new h(t)}else{n=new d(t)}return this.elements.push(n)};return e}();d=function(){function e(e){var t,n,r,s,i,o,u=this;this.progress=0;if(window.ProgressEvent!=null){n=null;e.addEventListener("progress",function(e){if(e.lengthComputable){return u.progress=100*e.loaded/e.total}else{return u.progress=u.progress+(100-u.progress)/2}},false);o=["load","abort","timeout","error"];for(r=0,s=o.length;r<s;r++){t=o[r];e.addEventListener(t,function(){return u.progress=100},false)}}else{i=e.onreadystatechange;e.onreadystatechange=function(){var t;if((t=e.readyState)===0||t===4){u.progress=100}else if(e.readyState===3){u.progress=50}return typeof i==="function"?i.apply(null,arguments):void 0}}}return e}();h=function(){function e(e){var t,n,r,s,i=this;this.progress=0;s=["error","open"];for(n=0,r=s.length;n<r;n++){t=s[n];e.addEventListener(t,function(){return i.progress=100},false)}}return e}();r=function(){function e(e){var t,n,r,i;if(e==null){e={}}this.elements=[];if(e.selectors==null){e.selectors=[]}i=e.selectors;for(n=0,r=i.length;n<r;n++){t=i[n];this.elements.push(new s(t))}}return e}();s=function(){function e(e){this.selector=e;this.progress=0;this.check()}e.prototype.check=function(){var e=this;if(document.querySelector(this.selector)){return this.done()}else{return setTimeout(function(){return e.check()},j.elements.checkInterval)}};e.prototype.done=function(){return this.progress=100};return e}();n=function(){e.prototype.states={loading:0,interactive:50,complete:100};function e(){var e,t,n=this;this.progress=(t=this.states[document.readyState])!=null?t:100;e=document.onreadystatechange;document.onreadystatechange=function(){if(n.states[document.readyState]!=null){n.progress=n.states[document.readyState]}return typeof e==="function"?e.apply(null,arguments):void 0}}return e}();i=function(){function e(){var e,t,n,r,s,i=this;this.progress=0;e=0;s=[];r=0;n=R();t=setInterval(function(){var o;o=R()-n-50;n=R();s.push(o);if(s.length>j.eventLag.sampleCount){s.shift()}e=m(s);if(++r>=j.eventLag.minSamples&&e<j.eventLag.lagThreshold){i.progress=100;return clearInterval(t)}else{return i.progress=100*(3/(e+3))}},50)}return e}();p=function(){function e(e){this.source=e;this.last=this.sinceLastUpdate=0;this.rate=j.initialRate;this.catchup=0;this.progress=this.lastProgress=0;if(this.source!=null){this.progress=O(this.source,"progress")}}e.prototype.tick=function(e,t){var n;if(t==null){t=O(this.source,"progress")}if(t>=100){this.done=true}if(t===this.last){this.sinceLastUpdate+=e}else{if(this.sinceLastUpdate){this.rate=(t-this.last)/this.sinceLastUpdate}this.catchup=(t-this.progress)/j.catchupTime;this.sinceLastUpdate=0;this.last=t}if(t>this.progress){this.progress+=this.catchup*e}n=1-Math.pow(this.progress/100,j.easeFactor);this.progress+=n*this.rate*e;this.progress=Math.min(this.lastProgress+j.maxProgressPerFrame,this.progress);this.progress=Math.max(0,this.progress);this.progress=Math.min(100,this.progress);this.lastProgress=this.progress;return this.progress};return e}();C=null;A=null;y=null;U=null;g=null;v=null;l.running=false;x=function(){if(j.restartOnPushState){return l.restart()}};if(window.history.pushState!=null){G=window.history.pushState;window.history.pushState=function(){x();return G.apply(window.history,arguments)}}if(window.history.replaceState!=null){K=window.history.replaceState;window.history.replaceState=function(){x();return K.apply(window.history,arguments)}}f={ajax:e,elements:r,document:n,eventLag:i};(T=function(){var e,n,r,s,i,o,u,a;l.sources=C=[];o=["ajax","elements","document","eventLag"];for(n=0,s=o.length;n<s;n++){e=o[n];if(j[e]!==false){C.push(new f[e](j[e]))}}a=(u=j.extraSources)!=null?u:[];for(r=0,i=a.length;r<i;r++){F=a[r];C.push(new F(j))}l.bar=y=new t;A=[];return U=new p})();l.stop=function(){l.trigger("stop");l.running=false;y.destroy();v=true;if(g!=null){if(typeof w==="function"){w(g)}g=null}return T()};l.restart=function(){l.trigger("restart");l.stop();return l.start()};l.go=function(){var e;l.running=true;y.render();e=R();v=false;return g=M(function(t,n){var r,s,i,o,u,a,c,f,h,d,g,m,w,b,k,S;f=100-y.progress;s=g=0;i=true;for(a=m=0,b=C.length;m<b;a=++m){F=C[a];d=A[a]!=null?A[a]:A[a]=[];u=(S=F.elements)!=null?S:[F];for(c=w=0,k=u.length;w<k;c=++w){o=u[c];h=d[c]!=null?d[c]:d[c]=new p(o);i&=h.done;if(h.done){continue}s++;g+=h.tick(t)}}r=g/s;y.update(U.tick(t,r));if(y.done()||i||v){y.update(100);l.trigger("done");return setTimeout(function(){y.finish();l.running=false;return l.trigger("hide")},Math.max(j.ghostTime,Math.max(j.minTime-(R()-e),0)))}else{return n()}})};l.start=function(e){k(j,e);l.running=true;try{y.render()}catch(t){a=t}if(!document.querySelector(".pace")){return setTimeout(l.start,50)}else{l.trigger("start");return l.go()}};if(typeof define==="function"&&define.amd){define(["pace"],function(){return l})}else if(typeof exports==="object"){module.exports=l}else{if(j.startOnPageLoad){l.start()}}}).call(this);
//rebuild by neat 