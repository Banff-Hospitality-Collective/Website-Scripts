"use strict";(()=>{function Ze(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Kr(t,r,e){return r&&Ze(t.prototype,r),e&&Ze(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}var Je="(prefers-reduced-motion: reduce)",Rt=1,jr=2,Dt=3,Mt=4,$t=5,oe=6,fe=7,Zr={CREATED:Rt,MOUNTED:jr,IDLE:Dt,MOVING:Mt,SCROLLING:$t,DRAGGING:oe,DESTROYED:fe};function dt(t){t.length=0}function At(t,r,e){return Array.prototype.slice.call(t,r,e)}function W(t){return t.bind.apply(t,[null].concat(At(arguments,1)))}var vr=setTimeout,Ie=function(){};function Qe(t){return requestAnimationFrame(t)}function ge(t,r){return typeof r===t}function Ht(t){return!xe(t)&&ge("object",t)}var Me=Array.isArray,dr=W(ge,"function"),Et=W(ge,"string"),Kt=W(ge,"undefined");function xe(t){return t===null}function hr(t){try{return t instanceof(t.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function jt(t){return Me(t)?t:[t]}function rt(t,r){jt(t).forEach(r)}function Ve(t,r){return t.indexOf(r)>-1}function ue(t,r){return t.push.apply(t,jt(r)),t}function lt(t,r,e){t&&rt(r,function(n){n&&t.classList[e?"add":"remove"](n)})}function st(t,r){lt(t,Et(r)?r.split(" "):r,!0)}function Zt(t,r){rt(r,t.appendChild.bind(t))}function ke(t,r){rt(t,function(e){var n=(r||e).parentNode;n&&n.insertBefore(e,r)})}function Wt(t,r){return hr(t)&&(t.msMatchesSelector||t.matches).call(t,r)}function gr(t,r){var e=t?At(t.children):[];return r?e.filter(function(n){return Wt(n,r)}):e}function Jt(t,r){return r?gr(t,r)[0]:t.firstElementChild}var zt=Object.keys;function Tt(t,r,e){return t&&(e?zt(t).reverse():zt(t)).forEach(function(n){n!=="__proto__"&&r(t[n],n)}),t}function Bt(t){return At(arguments,1).forEach(function(r){Tt(r,function(e,n){t[n]=r[n]})}),t}function gt(t){return At(arguments,1).forEach(function(r){Tt(r,function(e,n){Me(e)?t[n]=e.slice():Ht(e)?t[n]=gt({},Ht(t[n])?t[n]:{},e):t[n]=e})}),t}function tr(t,r){rt(r||zt(t),function(e){delete t[e]})}function ot(t,r){rt(t,function(e){rt(r,function(n){e&&e.removeAttribute(n)})})}function V(t,r,e){Ht(r)?Tt(r,function(n,a){V(t,a,n)}):rt(t,function(n){xe(e)||e===""?ot(n,r):n.setAttribute(r,String(e))})}function Nt(t,r,e){var n=document.createElement(t);return r&&(Et(r)?st(n,r):V(n,r)),e&&Zt(e,n),n}function nt(t,r,e){if(Kt(e))return getComputedStyle(t)[r];xe(e)||(t.style[r]=""+e)}function Ut(t,r){nt(t,"display",r)}function Er(t){t.setActive&&t.setActive()||t.focus({preventScroll:!0})}function it(t,r){return t.getAttribute(r)}function er(t,r){return t&&t.classList.contains(r)}function tt(t){return t.getBoundingClientRect()}function bt(t){rt(t,function(r){r&&r.parentNode&&r.parentNode.removeChild(r)})}function mr(t){return Jt(new DOMParser().parseFromString(t,"text/html").body)}function ct(t,r){t.preventDefault(),r&&(t.stopPropagation(),t.stopImmediatePropagation())}function pr(t,r){return t&&t.querySelector(r)}function Fe(t,r){return r?At(t.querySelectorAll(r)):[]}function ft(t,r){lt(t,r,!1)}function Re(t){return t.timeStamp}function _t(t){return Et(t)?t:t?t+"px":""}var Qt="splide",Ge="data-"+Qt;function Ft(t,r){if(!t)throw new Error("["+Qt+"] "+(r||""))}var mt=Math.min,ve=Math.max,de=Math.floor,qt=Math.ceil,J=Math.abs;function Ar(t,r,e){return J(t-r)<e}function ce(t,r,e,n){var a=mt(r,e),v=ve(r,e);return n?a<t&&t<v:a<=t&&t<=v}function Ct(t,r,e){var n=mt(r,e),a=ve(r,e);return mt(ve(n,t),a)}function Ne(t){return+(t>0)-+(t<0)}function Oe(t,r){return rt(r,function(e){t=t.replace("%s",""+e)}),t}function He(t){return t<10?"0"+t:""+t}var rr={};function Jr(t){return""+t+He(rr[t]=(rr[t]||0)+1)}function Sr(){var t=[];function r(i,s,u,f){a(i,s,function(o,m,d){var h="addEventListener"in o,c=h?o.removeEventListener.bind(o,m,u,f):o.removeListener.bind(o,u);h?o.addEventListener(m,u,f):o.addListener(u),t.push([o,m,d,u,c])})}function e(i,s,u){a(i,s,function(f,o,m){t=t.filter(function(d){return d[0]===f&&d[1]===o&&d[2]===m&&(!u||d[3]===u)?(d[4](),!1):!0})})}function n(i,s,u){var f,o=!0;return typeof CustomEvent=="function"?f=new CustomEvent(s,{bubbles:o,detail:u}):(f=document.createEvent("CustomEvent"),f.initCustomEvent(s,o,!1,u)),i.dispatchEvent(f),f}function a(i,s,u){rt(i,function(f){f&&rt(s,function(o){o.split(" ").forEach(function(m){var d=m.split(".");u(f,d[0],d[1])})})})}function v(){t.forEach(function(i){i[4]()}),dt(t)}return{bind:r,unbind:e,dispatch:n,destroy:v}}var wt="mounted",nr="ready",pt="move",te="moved",yr="click",Qr="active",tn="inactive",en="visible",rn="hidden",X="refresh",Q="updated",Yt="resize",We="resized",nn="drag",an="dragging",sn="dragged",ze="scroll",xt="scrolled",on="overflow",_r="destroy",un="arrows:mounted",cn="arrows:updated",ln="pagination:mounted",fn="pagination:updated",Tr="navigation:mounted",br="autoplay:play",vn="autoplay:playing",Lr="autoplay:pause",wr="lazyload:loaded",Cr="sk",Ir="sh",he="ei";function U(t){var r=t?t.event.bus:document.createDocumentFragment(),e=Sr();function n(v,i){e.bind(r,jt(v).join(" "),function(s){i.apply(i,Me(s.detail)?s.detail:[])})}function a(v){e.dispatch(r,v,At(arguments,1))}return t&&t.event.on(_r,e.destroy),Bt(e,{bus:r,on:n,off:W(e.unbind,r),emit:a})}function Ee(t,r,e,n){var a=Date.now,v,i=0,s,u=!0,f=0;function o(){if(!u){if(i=t?mt((a()-v)/t,1):1,e&&e(i),i>=1&&(r(),v=a(),n&&++f>=n))return d();s=Qe(o)}}function m(p){p||c(),v=a()-(p?i*t:0),u=!1,s=Qe(o)}function d(){u=!0}function h(){v=a(),i=0,e&&e(i)}function c(){s&&cancelAnimationFrame(s),i=0,s=0,u=!0}function l(p){t=p}function A(){return u}return{start:m,rewind:h,pause:d,cancel:c,set:l,isPaused:A}}function dn(t){var r=t;function e(a){r=a}function n(a){return Ve(jt(a),r)}return{set:e,is:n}}function hn(t,r){var e=Ee(r||0,t,null,1);return function(){e.isPaused()&&e.start()}}function gn(t,r,e){var n=t.state,a=e.breakpoints||{},v=e.reducedMotion||{},i=Sr(),s=[];function u(){var c=e.mediaQuery==="min";zt(a).sort(function(l,A){return c?+l-+A:+A-+l}).forEach(function(l){o(a[l],"("+(c?"min":"max")+"-width:"+l+"px)")}),o(v,Je),m()}function f(c){c&&i.destroy()}function o(c,l){var A=matchMedia(l);i.bind(A,"change",m),s.push([c,A])}function m(){var c=n.is(fe),l=e.direction,A=s.reduce(function(p,E){return gt(p,E[1].matches?E[0]:{})},{});tr(e),h(A),e.destroy?t.destroy(e.destroy==="completely"):c?(f(!0),t.mount()):l!==e.direction&&t.refresh()}function d(c){matchMedia(Je).matches&&(c?gt(e,v):tr(e,zt(v)))}function h(c,l,A){gt(e,c),l&&gt(Object.getPrototypeOf(e),c),(A||!n.is(Rt))&&t.emit(Q,e)}return{setup:u,destroy:f,reduce:d,set:h}}var me="Arrow",pe=me+"Left",Ae=me+"Right",Rr=me+"Up",Nr=me+"Down";var ir="rtl",Se="ttb",be={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Rr,Ae],ArrowRight:[Nr,pe]};function En(t,r,e){function n(v,i,s){s=s||e.direction;var u=s===ir&&!i?1:s===Se?0:-1;return be[v]&&be[v][u]||v.replace(/width|left|right/i,function(f,o){var m=be[f.toLowerCase()][u]||f;return o>0?m.charAt(0).toUpperCase()+m.slice(1):m})}function a(v){return v*(e.direction===ir?1:-1)}return{resolve:n,orient:a}}var vt="role",Ot="tabindex",mn="disabled",at="aria-",ee=at+"controls",Or=at+"current",ar=at+"selected",et=at+"label",Be=at+"labelledby",Dr=at+"hidden",Ue=at+"orientation",Xt=at+"roledescription",sr=at+"live",or=at+"busy",ur=at+"atomic",qe=[vt,Ot,mn,ee,Or,et,Be,Dr,Ue,Xt],ut=Qt+"__",St="is-",Le=Qt,cr=ut+"track",pn=ut+"list",ye=ut+"slide",Pr=ye+"--clone",An=ye+"__container",Ye=ut+"arrows",_e=ut+"arrow",Mr=_e+"--prev",xr=_e+"--next",Te=ut+"pagination",Vr=Te+"__page",Sn=ut+"progress",yn=Sn+"__bar",Xe=ut+"toggle",di=Xe+"__play",hi=Xe+"__pause",_n=ut+"spinner",Tn=ut+"sr",bn=St+"initialized",Lt=St+"active",kr=St+"prev",Fr=St+"next",De=St+"visible",Pe=St+"loading",Gr=St+"focus-in",Hr=St+"overflow",Ln=[Lt,De,kr,Fr,Pe,Gr,Hr],wn={slide:ye,clone:Pr,arrows:Ye,arrow:_e,prev:Mr,next:xr,pagination:Te,page:Vr,spinner:_n};function Cn(t,r){if(dr(t.closest))return t.closest(r);for(var e=t;e&&e.nodeType===1&&!Wt(e,r);)e=e.parentElement;return e}var In=5,lr=200,Wr="touchstart mousedown",we="touchmove mousemove",Ce="touchend touchcancel mouseup click";function Rn(t,r,e){var n=U(t),a=n.on,v=n.bind,i=t.root,s=e.i18n,u={},f=[],o=[],m=[],d,h,c;function l(){g(),D(),E()}function A(){a(X,p),a(X,l),a(Q,E),v(document,Wr+" keydown",function(y){c=y.type==="keydown"},{capture:!0}),v(i,"focusin",function(){lt(i,Gr,!!c)})}function p(y){var I=qe.concat("style");dt(f),ft(i,o),ft(d,m),ot([d,h],I),ot(i,y?I:["style",Xt])}function E(){ft(i,o),ft(d,m),o=M(Le),m=M(cr),st(i,o),st(d,m),V(i,et,e.label),V(i,Be,e.labelledby)}function g(){d=C("."+cr),h=Jt(d,"."+pn),Ft(d&&h,"A track/list element is missing."),ue(f,gr(h,"."+ye+":not(."+Pr+")")),Tt({arrows:Ye,pagination:Te,prev:Mr,next:xr,bar:yn,toggle:Xe},function(y,I){u[I]=C("."+y)}),Bt(u,{root:i,track:d,list:h,slides:f})}function D(){var y=i.id||Jr(Qt),I=e.role;i.id=y,d.id=d.id||y+"-track",h.id=h.id||y+"-list",!it(i,vt)&&i.tagName!=="SECTION"&&I&&V(i,vt,I),V(i,Xt,s.carousel),V(h,vt,"presentation")}function C(y){var I=pr(i,y);return I&&Cn(I,"."+Le)===i?I:void 0}function M(y){return[y+"--"+e.type,y+"--"+e.direction,e.drag&&y+"--draggable",e.isNavigation&&y+"--nav",y===Le&&Lt]}return Bt(u,{setup:l,mount:A,destroy:p})}var Pt="slide",Vt="loop",re="fade";function Nn(t,r,e,n){var a=U(t),v=a.on,i=a.emit,s=a.bind,u=t.Components,f=t.root,o=t.options,m=o.isNavigation,d=o.updateOnMove,h=o.i18n,c=o.pagination,l=o.slideFocus,A=u.Direction.resolve,p=it(n,"style"),E=it(n,et),g=e>-1,D=Jt(n,"."+An),C;function M(){g||(n.id=f.id+"-slide"+He(r+1),V(n,vt,c?"tabpanel":"group"),V(n,Xt,h.slide),V(n,et,E||Oe(h.slideLabel,[r+1,t.length]))),y()}function y(){s(n,"click",W(i,yr,P)),s(n,"keydown",W(i,Cr,P)),v([te,Ir,xt],T),v(Tr,F),d&&v(pt,O)}function I(){C=!0,a.destroy(),ft(n,Ln),ot(n,qe),V(n,"style",p),V(n,et,E||"")}function F(){var N=t.splides.map(function(_){var R=_.splide.Components.Slides.getAt(r);return R?R.slide.id:""}).join(" ");V(n,et,Oe(h.slideX,(g?e:r)+1)),V(n,ee,N),V(n,vt,l?"button":""),l&&ot(n,Xt)}function O(){C||T()}function T(){if(!C){var N=t.index;b(),L(),lt(n,kr,r===N-1),lt(n,Fr,r===N+1)}}function b(){var N=k();N!==er(n,Lt)&&(lt(n,Lt,N),V(n,Or,m&&N||""),i(N?Qr:tn,P))}function L(){var N=q(),_=!N&&(!k()||g);if(t.state.is([Mt,$t])||V(n,Dr,_||""),V(Fe(n,o.focusableNodes||""),Ot,_?-1:""),l&&V(n,Ot,_?-1:0),N!==er(n,De)&&(lt(n,De,N),i(N?en:rn,P)),!N&&document.activeElement===n){var R=u.Slides.getAt(t.index);R&&Er(R.slide)}}function x(N,_,R){nt(R&&D||n,N,_)}function k(){var N=t.index;return N===r||o.cloneStatus&&N===e}function q(){if(t.is(re))return k();var N=tt(u.Elements.track),_=tt(n),R=A("left",!0),G=A("right",!0);return de(N[R])<=qt(_[R])&&de(_[G])<=qt(N[G])}function B(N,_){var R=J(N-r);return!g&&(o.rewind||t.is(Vt))&&(R=mt(R,t.length-R)),R<=_}var P={index:r,slideIndex:e,slide:n,container:D,isClone:g,mount:M,destroy:I,update:T,style:x,isWithin:B};return P}function On(t,r,e){var n=U(t),a=n.on,v=n.emit,i=n.bind,s=r.Elements,u=s.slides,f=s.list,o=[];function m(){d(),a(X,h),a(X,d)}function d(){u.forEach(function(T,b){l(T,b,-1)})}function h(){C(function(T){T.destroy()}),dt(o)}function c(){C(function(T){T.update()})}function l(T,b,L){var x=Nn(t,b,L,T);x.mount(),o.push(x),o.sort(function(k,q){return k.index-q.index})}function A(T){return T?M(function(b){return!b.isClone}):o}function p(T){var b=r.Controller,L=b.toIndex(T),x=b.hasFocus()?1:e.perPage;return M(function(k){return ce(k.index,L,L+x-1)})}function E(T){return M(T)[0]}function g(T,b){rt(T,function(L){if(Et(L)&&(L=mr(L)),hr(L)){var x=u[b];x?ke(L,x):Zt(f,L),st(L,e.classes.slide),I(L,W(v,Yt))}}),v(X)}function D(T){bt(M(T).map(function(b){return b.slide})),v(X)}function C(T,b){A(b).forEach(T)}function M(T){return o.filter(dr(T)?T:function(b){return Et(T)?Wt(b.slide,T):Ve(jt(T),b.index)})}function y(T,b,L){C(function(x){x.style(T,b,L)})}function I(T,b){var L=Fe(T,"img"),x=L.length;x?L.forEach(function(k){i(k,"load error",function(){--x||b()})}):b()}function F(T){return T?u.length:o.length}function O(){return o.length>e.perPage}return{mount:m,destroy:h,update:c,register:l,get:A,getIn:p,getAt:E,add:g,remove:D,forEach:C,filter:M,style:y,getLength:F,isEnough:O}}function Dn(t,r,e){var n=U(t),a=n.on,v=n.bind,i=n.emit,s=r.Slides,u=r.Direction.resolve,f=r.Elements,o=f.root,m=f.track,d=f.list,h=s.getAt,c=s.style,l,A,p;function E(){g(),v(window,"resize load",hn(W(i,Yt))),a([Q,X],g),a(Yt,D)}function g(){l=e.direction===Se,nt(o,"maxWidth",_t(e.width)),nt(m,u("paddingLeft"),C(!1)),nt(m,u("paddingRight"),C(!0)),D(!0)}function D(P){var N=tt(o);(P||A.width!==N.width||A.height!==N.height)&&(nt(m,"height",M()),c(u("marginRight"),_t(e.gap)),c("width",I()),c("height",F(),!0),A=N,i(We),p!==(p=B())&&(lt(o,Hr,p),i(on,p)))}function C(P){var N=e.padding,_=u(P?"right":"left");return N&&_t(N[_]||(Ht(N)?0:N))||"0px"}function M(){var P="";return l&&(P=y(),Ft(P,"height or heightRatio is missing."),P="calc("+P+" - "+C(!1)+" - "+C(!0)+")"),P}function y(){return _t(e.height||tt(d).width*e.heightRatio)}function I(){return e.autoWidth?null:_t(e.fixedWidth)||(l?"":O())}function F(){return _t(e.fixedHeight)||(l?e.autoHeight?null:O():y())}function O(){var P=_t(e.gap);return"calc((100%"+(P&&" + "+P)+")/"+(e.perPage||1)+(P&&" - "+P)+")"}function T(){return tt(d)[u("width")]}function b(P,N){var _=h(P||0);return _?tt(_.slide)[u("width")]+(N?0:k()):0}function L(P,N){var _=h(P);if(_){var R=tt(_.slide)[u("right")],G=tt(d)[u("left")];return J(R-G)+(N?0:k())}return 0}function x(P){return L(t.length-1)-L(0)+b(0,P)}function k(){var P=h(0);return P&&parseFloat(nt(P.slide,u("marginRight")))||0}function q(P){return parseFloat(nt(m,u("padding"+(P?"Right":"Left"))))||0}function B(){return t.is(re)||x(!0)>T()}return{mount:E,resize:D,listSize:T,slideSize:b,sliderSize:x,totalSize:L,getPadding:q,isOverflow:B}}var Pn=2;function Mn(t,r,e){var n=U(t),a=n.on,v=r.Elements,i=r.Slides,s=r.Direction.resolve,u=[],f;function o(){a(X,m),a([Q,Yt],h),(f=A())&&(c(f),r.Layout.resize(!0))}function m(){d(),o()}function d(){bt(u),dt(u),n.destroy()}function h(){var p=A();f!==p&&(f<p||!p)&&n.emit(X)}function c(p){var E=i.get().slice(),g=E.length;if(g){for(;E.length<p;)ue(E,E);ue(E.slice(-p),E.slice(0,p)).forEach(function(D,C){var M=C<p,y=l(D.slide,C);M?ke(y,E[0].slide):Zt(v.list,y),ue(u,y),i.register(y,C-p+(M?0:g),D.index)})}}function l(p,E){var g=p.cloneNode(!0);return st(g,e.classes.clone),g.id=t.root.id+"-clone"+He(E+1),g}function A(){var p=e.clones;if(!t.is(Vt))p=0;else if(Kt(p)){var E=e[s("fixedWidth")]&&r.Layout.slideSize(0),g=E&&qt(tt(v.track)[s("width")]/E);p=g||e[s("autoWidth")]&&t.length||e.perPage*Pn}return p}return{mount:o,destroy:d}}function xn(t,r,e){var n=U(t),a=n.on,v=n.emit,i=t.state.set,s=r.Layout,u=s.slideSize,f=s.getPadding,o=s.totalSize,m=s.listSize,d=s.sliderSize,h=r.Direction,c=h.resolve,l=h.orient,A=r.Elements,p=A.list,E=A.track,g;function D(){g=r.Transition,a([wt,We,Q,X],C)}function C(){r.Controller.isBusy()||(r.Scroll.cancel(),y(t.index),r.Slides.update())}function M(_,R,G,K){_!==R&&P(_>G)&&(T(),I(O(x(),_>G),!0)),i(Mt),v(pt,R,G,_),g.start(R,function(){i(Dt),v(te,R,G,_),K&&K()})}function y(_){I(L(_,!0))}function I(_,R){if(!t.is(re)){var G=R?_:F(_);nt(p,"transform","translate"+c("X")+"("+G+"px)"),_!==G&&v(Ir)}}function F(_){if(t.is(Vt)){var R=b(_),G=R>r.Controller.getEnd(),K=R<0;(K||G)&&(_=O(_,G))}return _}function O(_,R){var G=_-B(R),K=d();return _-=l(K*(qt(J(G)/K)||1))*(R?1:-1),_}function T(){I(x(),!0),g.cancel()}function b(_){for(var R=r.Slides.get(),G=0,K=1/0,$=0;$<R.length;$++){var ht=R[$].index,S=J(L(ht,!0)-_);if(S<=K)K=S,G=ht;else break}return G}function L(_,R){var G=l(o(_-1)-q(_));return R?k(G):G}function x(){var _=c("left");return tt(p)[_]-tt(E)[_]+l(f(!1))}function k(_){return e.trimSpace&&t.is(Pt)&&(_=Ct(_,0,l(d(!0)-m()))),_}function q(_){var R=e.focus;return R==="center"?(m()-u(_,!0))/2:+R*u(_)||0}function B(_){return L(_?r.Controller.getEnd():0,!!e.trimSpace)}function P(_){var R=l(O(x(),_));return _?R>=0:R<=p[c("scrollWidth")]-tt(E)[c("width")]}function N(_,R){R=Kt(R)?x():R;var G=_!==!0&&l(R)<l(B(!1)),K=_!==!1&&l(R)>l(B(!0));return G||K}return{mount:D,move:M,jump:y,translate:I,shift:O,cancel:T,toIndex:b,toPosition:L,getPosition:x,getLimit:B,exceededLimit:N,reposition:C}}function Vn(t,r,e){var n=U(t),a=n.on,v=n.emit,i=r.Move,s=i.getPosition,u=i.getLimit,f=i.toPosition,o=r.Slides,m=o.isEnough,d=o.getLength,h=e.omitEnd,c=t.is(Vt),l=t.is(Pt),A=W(x,!1),p=W(x,!0),E=e.start||0,g,D=E,C,M,y;function I(){F(),a([Q,X,he],F),a(We,O)}function F(){C=d(!0),M=e.perMove,y=e.perPage,g=P();var S=Ct(E,0,h?g:C-1);S!==E&&(E=S,i.reposition())}function O(){g!==P()&&v(he)}function T(S,H,Z){if(!ht()){var Y=L(S),j=B(Y);j>-1&&(H||j!==E)&&(G(j),i.move(Y,j,D,Z))}}function b(S,H,Z,Y){r.Scroll.scroll(S,H,Z,function(){var j=B(i.toIndex(s()));G(h?mt(j,g):j),Y&&Y()})}function L(S){var H=E;if(Et(S)){var Z=S.match(/([+\-<>])(\d+)?/)||[],Y=Z[1],j=Z[2];Y==="+"||Y==="-"?H=k(E+ +(""+Y+(+j||1)),E):Y===">"?H=j?N(+j):A(!0):Y==="<"&&(H=p(!0))}else H=c?S:Ct(S,0,g);return H}function x(S,H){var Z=M||($()?1:y),Y=k(E+Z*(S?-1:1),E,!(M||$()));return Y===-1&&l&&!Ar(s(),u(!S),1)?S?0:g:H?Y:B(Y)}function k(S,H,Z){if(m()||$()){var Y=q(S);Y!==S&&(H=S,S=Y,Z=!1),S<0||S>g?!M&&(ce(0,S,H,!0)||ce(g,H,S,!0))?S=N(_(S)):c?S=Z?S<0?-(C%y||y):C:S:e.rewind?S=S<0?g:0:S=-1:Z&&S!==H&&(S=N(_(H)+(S<H?-1:1)))}else S=-1;return S}function q(S){if(l&&e.trimSpace==="move"&&S!==E)for(var H=s();H===f(S,!0)&&ce(S,0,t.length-1,!e.rewind);)S<E?--S:++S;return S}function B(S){return c?(S+C)%C||0:S}function P(){for(var S=C-($()||c&&M?1:y);h&&S-- >0;)if(f(C-1,!0)!==f(S,!0)){S++;break}return Ct(S,0,C-1)}function N(S){return Ct($()?S:y*S,0,g)}function _(S){return $()?mt(S,g):de((S>=g?C-1:S)/y)}function R(S){var H=i.toIndex(S);return l?Ct(H,0,g):H}function G(S){S!==E&&(D=E,E=S)}function K(S){return S?D:E}function $(){return!Kt(e.focus)||e.isNavigation}function ht(){return t.state.is([Mt,$t])&&!!e.waitForTransition}return{mount:I,go:T,scroll:b,getNext:A,getPrev:p,getAdjacent:x,getEnd:P,setIndex:G,getIndex:K,toIndex:N,toPage:_,toDest:R,hasFocus:$,isBusy:ht}}var kn="http://www.w3.org/2000/svg",Fn="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",se=40;function Gn(t,r,e){var n=U(t),a=n.on,v=n.bind,i=n.emit,s=e.classes,u=e.i18n,f=r.Elements,o=r.Controller,m=f.arrows,d=f.track,h=m,c=f.prev,l=f.next,A,p,E={};function g(){C(),a(Q,D)}function D(){M(),g()}function C(){var b=e.arrows;b&&!(c&&l)&&F(),c&&l&&(Bt(E,{prev:c,next:l}),Ut(h,b?"":"none"),st(h,p=Ye+"--"+e.direction),b&&(y(),T(),V([c,l],ee,d.id),i(un,c,l)))}function M(){n.destroy(),ft(h,p),A?(bt(m?[c,l]:h),c=l=null):ot([c,l],qe)}function y(){a([wt,te,X,xt,he],T),v(l,"click",W(I,">")),v(c,"click",W(I,"<"))}function I(b){o.go(b,!0)}function F(){h=m||Nt("div",s.arrows),c=O(!0),l=O(!1),A=!0,Zt(h,[c,l]),!m&&ke(h,d)}function O(b){var L='<button class="'+s.arrow+" "+(b?s.prev:s.next)+'" type="button"><svg xmlns="'+kn+'" viewBox="0 0 '+se+" "+se+'" width="'+se+'" height="'+se+'" focusable="false"><path d="'+(e.arrowPath||Fn)+'" />';return mr(L)}function T(){if(c&&l){var b=t.index,L=o.getPrev(),x=o.getNext(),k=L>-1&&b<L?u.last:u.prev,q=x>-1&&b>x?u.first:u.next;c.disabled=L<0,l.disabled=x<0,V(c,et,k),V(l,et,q),i(cn,c,l,L,x)}}return{arrows:E,mount:g,destroy:M,update:T}}var Hn=Ge+"-interval";function Wn(t,r,e){var n=U(t),a=n.on,v=n.bind,i=n.emit,s=Ee(e.interval,t.go.bind(t,">"),y),u=s.isPaused,f=r.Elements,o=r.Elements,m=o.root,d=o.toggle,h=e.autoplay,c,l,A=h==="pause";function p(){h&&(E(),d&&V(d,ee,f.track.id),A||g(),M())}function E(){e.pauseOnHover&&v(m,"mouseenter mouseleave",function(F){c=F.type==="mouseenter",C()}),e.pauseOnFocus&&v(m,"focusin focusout",function(F){l=F.type==="focusin",C()}),d&&v(d,"click",function(){A?g():D(!0)}),a([pt,ze,X],s.rewind),a(pt,I)}function g(){u()&&r.Slides.isEnough()&&(s.start(!e.resetProgress),l=c=A=!1,M(),i(br))}function D(F){F===void 0&&(F=!0),A=!!F,M(),u()||(s.pause(),i(Lr))}function C(){A||(c||l?D(!1):g())}function M(){d&&(lt(d,Lt,!A),V(d,et,e.i18n[A?"play":"pause"]))}function y(F){var O=f.bar;O&&nt(O,"width",F*100+"%"),i(vn,F)}function I(F){var O=r.Slides.getAt(F);s.set(O&&+it(O.slide,Hn)||e.interval)}return{mount:p,destroy:s.cancel,play:g,pause:D,isPaused:u}}function zn(t,r,e){var n=U(t),a=n.on;function v(){e.cover&&(a(wr,W(s,!0)),a([wt,Q,X],W(i,!0)))}function i(u){r.Slides.forEach(function(f){var o=Jt(f.container||f.slide,"img");o&&o.src&&s(u,o,f)})}function s(u,f,o){o.style("background",u?'center/cover no-repeat url("'+f.src+'")':"",!0),Ut(f,u?"none":"")}return{mount:v,destroy:W(i,!1)}}var Bn=10,Un=600,qn=.6,Yn=1.5,Xn=800;function $n(t,r,e){var n=U(t),a=n.on,v=n.emit,i=t.state.set,s=r.Move,u=s.getPosition,f=s.getLimit,o=s.exceededLimit,m=s.translate,d=t.is(Pt),h,c,l=1;function A(){a(pt,D),a([Q,X],C)}function p(y,I,F,O,T){var b=u();if(D(),F&&(!d||!o())){var L=r.Layout.sliderSize(),x=Ne(y)*L*de(J(y)/L)||0;y=s.toPosition(r.Controller.toDest(y%L))+x}var k=Ar(b,y,1);l=1,I=k?0:I||ve(J(y-b)/Yn,Xn),c=O,h=Ee(I,E,W(g,b,y,T),1),i($t),v(ze),h.start()}function E(){i(Dt),c&&c(),v(xt)}function g(y,I,F,O){var T=u(),b=y+(I-y)*M(O),L=(b-T)*l;m(T+L),d&&!F&&o()&&(l*=qn,J(L)<Bn&&p(f(o(!0)),Un,!1,c,!0))}function D(){h&&h.cancel()}function C(){h&&!h.isPaused()&&(D(),E())}function M(y){var I=e.easingFunc;return I?I(y):1-Math.pow(1-y,4)}return{mount:A,destroy:D,scroll:p,cancel:C}}var It={passive:!1,capture:!0};function Kn(t,r,e){var n=U(t),a=n.on,v=n.emit,i=n.bind,s=n.unbind,u=t.state,f=r.Move,o=r.Scroll,m=r.Controller,d=r.Elements.track,h=r.Media.reduce,c=r.Direction,l=c.resolve,A=c.orient,p=f.getPosition,E=f.exceededLimit,g,D,C,M,y,I=!1,F,O,T;function b(){i(d,we,Ie,It),i(d,Ce,Ie,It),i(d,Wr,x,It),i(d,"click",B,{capture:!0}),i(d,"dragstart",ct),a([wt,Q],L)}function L(){var w=e.drag;je(!w),M=w==="free"}function x(w){if(F=!1,!O){var z=j(w);Y(w.target)&&(z||!w.button)&&(m.isBusy()?ct(w,!0):(T=z?d:window,y=u.is([Mt,$t]),C=null,i(T,we,k,It),i(T,Ce,q,It),f.cancel(),o.cancel(),P(w)))}}function k(w){if(u.is(oe)||(u.set(oe),v(nn)),w.cancelable)if(y){f.translate(g+Z($(w)));var z=ht(w)>lr,yt=I!==(I=E());(z||yt)&&P(w),F=!0,v(an),ct(w)}else R(w)&&(y=_(w),ct(w))}function q(w){u.is(oe)&&(u.set(Dt),v(sn)),y&&(N(w),ct(w)),s(T,we,k),s(T,Ce,q),y=!1}function B(w){!O&&F&&ct(w,!0)}function P(w){C=D,D=w,g=p()}function N(w){var z=G(w),yt=K(z),kt=e.rewind&&e.rewindByDrag;h(!1),M?m.scroll(yt,0,e.snap):t.is(re)?m.go(A(Ne(z))<0?kt?"<":"-":kt?">":"+"):t.is(Pt)&&I&&kt?m.go(E(!0)?">":"<"):m.go(m.toDest(yt),!0),h(!0)}function _(w){var z=e.dragMinThreshold,yt=Ht(z),kt=yt&&z.mouse||0,$r=(yt?z.touch:+z)||10;return J($(w))>(j(w)?$r:kt)}function R(w){return J($(w))>J($(w,!0))}function G(w){if(t.is(Vt)||!I){var z=ht(w);if(z&&z<lr)return $(w)/z}return 0}function K(w){return p()+Ne(w)*mt(J(w)*(e.flickPower||600),M?1/0:r.Layout.listSize()*(e.flickMaxPages||1))}function $(w,z){return H(w,z)-H(S(w),z)}function ht(w){return Re(w)-Re(S(w))}function S(w){return D===w&&C||D}function H(w,z){return(j(w)?w.changedTouches[0]:w)["page"+l(z?"Y":"X")]}function Z(w){return w/(I&&t.is(Pt)?In:1)}function Y(w){var z=e.noDrag;return!Wt(w,"."+Vr+", ."+_e)&&(!z||!Wt(w,z))}function j(w){return typeof TouchEvent<"u"&&w instanceof TouchEvent}function Xr(){return y}function je(w){O=w}return{mount:b,disable:je,isDragging:Xr}}var jn={Spacebar:" ",Right:Ae,Left:pe,Up:Rr,Down:Nr};function $e(t){return t=Et(t)?t:t.key,jn[t]||t}var fr="keydown";function Zn(t,r,e){var n=U(t),a=n.on,v=n.bind,i=n.unbind,s=t.root,u=r.Direction.resolve,f,o;function m(){d(),a(Q,h),a(Q,d),a(pt,l)}function d(){var p=e.keyboard;p&&(f=p==="global"?window:s,v(f,fr,A))}function h(){i(f,fr)}function c(p){o=p}function l(){var p=o;o=!0,vr(function(){o=p})}function A(p){if(!o){var E=$e(p);E===u(pe)?t.go("<"):E===u(Ae)&&t.go(">")}}return{mount:m,destroy:h,disable:c}}var Gt=Ge+"-lazy",le=Gt+"-srcset",Jn="["+Gt+"], ["+le+"]";function Qn(t,r,e){var n=U(t),a=n.on,v=n.off,i=n.bind,s=n.emit,u=e.lazyLoad==="sequential",f=[te,xt],o=[];function m(){e.lazyLoad&&(d(),a(X,d))}function d(){dt(o),h(),u?p():(v(f),a(f,c),c())}function h(){r.Slides.forEach(function(E){Fe(E.slide,Jn).forEach(function(g){var D=it(g,Gt),C=it(g,le);if(D!==g.src||C!==g.srcset){var M=e.classes.spinner,y=g.parentElement,I=Jt(y,"."+M)||Nt("span",M,y);o.push([g,E,I]),g.src||Ut(g,"none")}})})}function c(){o=o.filter(function(E){var g=e.perPage*((e.preloadPages||1)+1)-1;return E[1].isWithin(t.index,g)?l(E):!0}),o.length||v(f)}function l(E){var g=E[0];st(E[1].slide,Pe),i(g,"load error",W(A,E)),V(g,"src",it(g,Gt)),V(g,"srcset",it(g,le)),ot(g,Gt),ot(g,le)}function A(E,g){var D=E[0],C=E[1];ft(C.slide,Pe),g.type!=="error"&&(bt(E[2]),Ut(D,""),s(wr,D,C),s(Yt)),u&&p()}function p(){o.length&&l(o.shift())}return{mount:m,destroy:W(dt,o),check:c}}function ti(t,r,e){var n=U(t),a=n.on,v=n.emit,i=n.bind,s=r.Slides,u=r.Elements,f=r.Controller,o=f.hasFocus,m=f.getIndex,d=f.go,h=r.Direction.resolve,c=u.pagination,l=[],A,p;function E(){g(),a([Q,X,he],E);var O=e.pagination;c&&Ut(c,O?"":"none"),O&&(a([pt,ze,xt],F),D(),F(),v(ln,{list:A,items:l},I(t.index)))}function g(){A&&(bt(c?At(A.children):A),ft(A,p),dt(l),A=null),n.destroy()}function D(){var O=t.length,T=e.classes,b=e.i18n,L=e.perPage,x=o()?f.getEnd()+1:qt(O/L);A=c||Nt("ul",T.pagination,u.track.parentElement),st(A,p=Te+"--"+y()),V(A,vt,"tablist"),V(A,et,b.select),V(A,Ue,y()===Se?"vertical":"");for(var k=0;k<x;k++){var q=Nt("li",null,A),B=Nt("button",{class:T.page,type:"button"},q),P=s.getIn(k).map(function(_){return _.slide.id}),N=!o()&&L>1?b.pageX:b.slideX;i(B,"click",W(C,k)),e.paginationKeyboard&&i(B,"keydown",W(M,k)),V(q,vt,"presentation"),V(B,vt,"tab"),V(B,ee,P.join(" ")),V(B,et,Oe(N,k+1)),V(B,Ot,-1),l.push({li:q,button:B,page:k})}}function C(O){d(">"+O,!0)}function M(O,T){var b=l.length,L=$e(T),x=y(),k=-1;L===h(Ae,!1,x)?k=++O%b:L===h(pe,!1,x)?k=(--O+b)%b:L==="Home"?k=0:L==="End"&&(k=b-1);var q=l[k];q&&(Er(q.button),d(">"+k),ct(T,!0))}function y(){return e.paginationDirection||e.direction}function I(O){return l[f.toPage(O)]}function F(){var O=I(m(!0)),T=I(m());if(O){var b=O.button;ft(b,Lt),ot(b,ar),V(b,Ot,-1)}if(T){var L=T.button;st(L,Lt),V(L,ar,!0),V(L,Ot,"")}v(fn,{list:A,items:l},O,T)}return{items:l,mount:E,destroy:g,getAt:I,update:F}}var ei=[" ","Enter"];function ri(t,r,e){var n=e.isNavigation,a=e.slideFocus,v=[];function i(){t.splides.forEach(function(c){c.isParent||(f(t,c.splide),f(c.splide,t))}),n&&o()}function s(){v.forEach(function(c){c.destroy()}),dt(v)}function u(){s(),i()}function f(c,l){var A=U(c);A.on(pt,function(p,E,g){l.go(l.is(Vt)?g:p)}),v.push(A)}function o(){var c=U(t),l=c.on;l(yr,d),l(Cr,h),l([wt,Q],m),v.push(c),c.emit(Tr,t.splides)}function m(){V(r.Elements.list,Ue,e.direction===Se?"vertical":"")}function d(c){t.go(c.index)}function h(c,l){Ve(ei,$e(l))&&(d(c),ct(l))}return{setup:W(r.Media.set,{slideFocus:Kt(a)?n:a},!0),mount:i,destroy:s,remount:u}}function ni(t,r,e){var n=U(t),a=n.bind,v=0;function i(){e.wheel&&a(r.Elements.track,"wheel",s,It)}function s(f){if(f.cancelable){var o=f.deltaY,m=o<0,d=Re(f),h=e.wheelMinThreshold||0,c=e.wheelSleep||0;J(o)>h&&d-v>c&&(t.go(m?"<":">"),v=d),u(m)&&ct(f)}}function u(f){return!e.releaseWheel||t.state.is(Mt)||r.Controller.getAdjacent(f)!==-1}return{mount:i}}var ii=90;function ai(t,r,e){var n=U(t),a=n.on,v=r.Elements.track,i=e.live&&!e.isNavigation,s=Nt("span",Tn),u=Ee(ii,W(o,!1));function f(){i&&(d(!r.Autoplay.isPaused()),V(v,ur,!0),s.textContent="\u2026",a(br,W(d,!0)),a(Lr,W(d,!1)),a([te,xt],W(o,!0)))}function o(h){V(v,or,h),h?(Zt(v,s),u.start()):(bt(s),u.cancel())}function m(){ot(v,[sr,ur,or]),bt(s)}function d(h){i&&V(v,sr,h?"off":"polite")}return{mount:f,disable:d,destroy:m}}var si=Object.freeze({__proto__:null,Media:gn,Direction:En,Elements:Rn,Slides:On,Layout:Dn,Clones:Mn,Move:xn,Controller:Vn,Arrows:Gn,Autoplay:Wn,Cover:zn,Scroll:$n,Drag:Kn,Keyboard:Zn,LazyLoad:Qn,Pagination:ti,Sync:ri,Wheel:ni,Live:ai}),oi={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},ui={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:wn,i18n:oi,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function ci(t,r,e){var n=r.Slides;function a(){U(t).on([wt,X],v)}function v(){n.forEach(function(s){s.style("transform","translateX(-"+100*s.index+"%)")})}function i(s,u){n.style("transition","opacity "+e.speed+"ms "+e.easing),vr(u)}return{mount:a,start:i,cancel:Ie}}function li(t,r,e){var n=r.Move,a=r.Controller,v=r.Scroll,i=r.Elements.list,s=W(nt,i,"transition"),u;function f(){U(t).bind(i,"transitionend",function(h){h.target===i&&u&&(m(),u())})}function o(h,c){var l=n.toPosition(h,!0),A=n.getPosition(),p=d(h);J(l-A)>=1&&p>=1?e.useScroll?v.scroll(l,p,!1,c):(s("transform "+p+"ms "+e.easing),n.translate(l,!0),u=c):(n.jump(h),c())}function m(){s(""),v.cancel()}function d(h){var c=e.rewindSpeed;if(t.is(Pt)&&c){var l=a.getIndex(!0),A=a.getEnd();if(l===0&&h>=A||l>=A&&h===0)return c}return e.speed}return{mount:f,start:o,cancel:m}}var fi=function(){function t(e,n){this.event=U(),this.Components={},this.state=dn(Rt),this.splides=[],this._o={},this._E={};var a=Et(e)?pr(document,e):e;Ft(a,a+" is invalid."),this.root=a,n=gt({label:it(a,et)||"",labelledby:it(a,Be)||""},ui,t.defaults,n||{});try{gt(n,JSON.parse(it(a,Ge)))}catch{Ft(!1,"Invalid JSON")}this._o=Object.create(gt({},n))}var r=t.prototype;return r.mount=function(n,a){var v=this,i=this.state,s=this.Components;Ft(i.is([Rt,fe]),"Already mounted!"),i.set(Rt),this._C=s,this._T=a||this._T||(this.is(re)?ci:li),this._E=n||this._E;var u=Bt({},si,this._E,{Transition:this._T});return Tt(u,function(f,o){var m=f(v,s,v._o);s[o]=m,m.setup&&m.setup()}),Tt(s,function(f){f.mount&&f.mount()}),this.emit(wt),st(this.root,bn),i.set(Dt),this.emit(nr),this},r.sync=function(n){return this.splides.push({splide:n}),n.splides.push({splide:this,isParent:!0}),this.state.is(Dt)&&(this._C.Sync.remount(),n.Components.Sync.remount()),this},r.go=function(n){return this._C.Controller.go(n),this},r.on=function(n,a){return this.event.on(n,a),this},r.off=function(n){return this.event.off(n),this},r.emit=function(n){var a;return(a=this.event).emit.apply(a,[n].concat(At(arguments,1))),this},r.add=function(n,a){return this._C.Slides.add(n,a),this},r.remove=function(n){return this._C.Slides.remove(n),this},r.is=function(n){return this._o.type===n},r.refresh=function(){return this.emit(X),this},r.destroy=function(n){n===void 0&&(n=!0);var a=this.event,v=this.state;return v.is(Rt)?U(this).on(nr,this.destroy.bind(this,n)):(Tt(this._C,function(i){i.destroy&&i.destroy(n)},!0),a.emit(_r),a.destroy(),n&&dt(this.splides),v.set(fe)),this},Kr(t,[{key:"options",get:function(){return this._o},set:function(n){this._C.Media.set(n,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),t}(),ne=fi;ne.defaults={};ne.STATES=Zr;var ie=document,vi=ie.querySelector('[menu-button="jump-link-name"]'),zr={anchorLinksButton:vi},Ei=ie.querySelectorAll("[fs-cmsfilter-field]");var Br=t=>document.querySelector("["+t+"]"),ae=t=>document.querySelectorAll("["+t+"]");var Ur=t=>t.target.checked;var qr=(t,r)=>{t.addEventListener("click",e=>{e.preventDefault();let n=t.getAttribute(r);document?.getElementById(n)?.scrollIntoView({behavior:"smooth"})})};var Ke=t=>{let r=t.querySelector(".camera-icon"),e=t.closest(".menu-item-wrapper")?.querySelector(".food-image");e?.classList.toggle("show"),e?.classList.contains("show")?r.src="https://cdn.prod.website-files.com/672a5835c715ca6f0ce6d7f2/6733aa6f5579c05aed4d3579_camera-off.svg":r.src="https://cdn.prod.website-files.com/672a5835c715ca6f0ce6d7f2/6733aa6aa8fb6bdbaa4b38bf_camera.svg"};var Yr=t=>{let{top:r,bottom:e}=t.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight;return(r>0||e>0)&&r<n};window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{let t=ie.querySelectorAll('[slider="menu-images"]'),r=ie.querySelectorAll('[slider="menus"]');t.forEach(n=>{new ne(n,{type:"loop",perPage:3.5,perMove:1,gap:24,breakpoints:{640:{perPage:1.5,gap:12}}}).mount()}),r.forEach(n=>{new ne(n,{perPage:5,perMove:1,arrows:!1,drag:!1,gap:64,width:"100%",breakpoints:{640:{type:"loop",arrows:!1,drag:!0,perPage:2.5,gap:6},768:{type:"loop",arrows:!1,drag:!0,perPage:3},992:{type:"loop",arrows:!1,drag:!0,perPage:4}}}).mount()}),document.onscroll=()=>{ae("menu-name")?.forEach(a=>{Yr(a)&&(zr.anchorLinksButton.innerHTML=a.getAttribute("menu-name"))})},ae("data-scroll")?.forEach(n=>qr(n,"data-scroll")),window.fsAttributes=window.fsAttributes||[],window.fsAttributes.push(["cmsload",()=>{window.fsAttributes.cmsnest.init(),window.fsAttributes=window.fsAttributes||[],window.fsAttributes.push(["cmsnest",()=>{window.fsAttributes.cmsfilter.init()}]),ae("menu-item-trigger")?.forEach(s=>{s?.closest(".image-trigger")?.querySelector(".auto-open-trigger")?.innerHTML==="true"&&Ke(s),s?.addEventListener("click",()=>{Ke(s)})});let a=0,i=Br("filters-checked");ae("fs-cmsfilter-field")?.forEach(s=>{s.addEventListener("change",u=>{Ur(u)?a+=1:a-=1,i.innerText=a.toString()})})}])});})();
/*! Bundled license information:

@splidejs/splide/dist/js/splide.esm.js:
  (*!
   * Splide.js
   * Version  : 4.1.4
   * License  : MIT
   * Copyright: 2022 Naotoshi Fujita
   *)
*/
