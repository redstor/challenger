"use strict";(self.webpackChunkchallenger=self.webpackChunkchallenger||[]).push([[902],{5626:(_,v,l)=>{l.d(v,{K:()=>I});var s=l(6895),g=l(3546),E=l(3683),y=l(7392),d=l(4859),S=l(9671),h=l(9549),m=l(4006),M=l(4144),C=l(4650);let I=(()=>{class p{}return p.\u0275fac=function(P){return new(P||p)},p.\u0275mod=C.oAB({type:p}),p.\u0275inj=C.cJS({imports:[s.ez,g.QW,E.g0,d.ot,y.Ps,S.ae,h.lN,m.UX,M.c]}),p})()},3940:(_,v,l)=>{l.d(v,{o:()=>y});var s=l(4650),g=l(3546);const E=["*"];let y=(()=>{class d{constructor(){this.photo_url="",this.photo_description=""}}return d.\u0275fac=function(h){return new(h||d)},d.\u0275cmp=s.Xpm({type:d,selectors:[["app-photo-list-item"]],inputs:{photo_url:"photo_url",photo_description:"photo_description"},ngContentSelectors:E,decls:4,vars:2,consts:[[1,"gallery-item","thumbnails"],["mat-card-image","",3,"src","alt"]],template:function(h,m){1&h&&(s.F$t(),s.TgZ(0,"mat-card",0),s._UZ(1,"img",1),s.TgZ(2,"mat-card-content"),s.Hsn(3),s.qZA()()),2&h&&(s.xp6(1),s.Q6J("src",m.photo_url,s.LSH)("alt",m.photo_description))},dependencies:[g.a8,g.dn,g.G2],encapsulation:2}),d})()},7296:(_,v,l)=>{l.d(v,{Ry:()=>ft,Rq:()=>ut});var s=l(4650),g=l(9646),E=l(4968),y=l(4986),d=l(4482),S=l(5403),h=l(8421);const m={leading:!0,trailing:!1};var C=l(2805);var p=l(5577),w=l(4004),P=l(8505),x=l(9300);function F(t,o,e,n){const i=window&&!!window.document&&window.document.documentElement;let r=i&&o?window:e;if(t&&(r=t&&i&&"string"==typeof t?function z(t,o,e){return(e?window.document:o).querySelector(t)}(t,e.nativeElement,n):t,!r))throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");return r}function W(t){return t&&!t.firstChange}const b={clientHeight:"clientHeight",offsetHeight:"offsetHeight",scrollHeight:"scrollHeight",pageYOffset:"pageYOffset",offsetTop:"offsetTop",scrollTop:"scrollTop",top:"top"},V={clientHeight:"clientWidth",offsetHeight:"offsetWidth",scrollHeight:"scrollWidth",pageYOffset:"pageXOffset",offsetTop:"offsetLeft",scrollTop:"scrollLeft",top:"left"};class X{constructor(o=!0){this.vertical=o,this.propsMap=o?b:V}clientHeightKey(){return this.propsMap.clientHeight}offsetHeightKey(){return this.propsMap.offsetHeight}scrollHeightKey(){return this.propsMap.scrollHeight}pageYOffsetKey(){return this.propsMap.pageYOffset}offsetTopKey(){return this.propsMap.offsetTop}scrollTopKey(){return this.propsMap.scrollTop}topKey(){return this.propsMap.top}}function J(t){return["Window","global"].some(e=>Object.prototype.toString.call(t).includes(e))}function K(t,o){return t?o.document.documentElement:null}function U(t,o){const e=function k({container:t,isWindow:o,axis:e}){const{offsetHeightKey:n,clientHeightKey:i}=R(e);return N(t,o,n,i)}(o);return o.isWindow?function Q(t,o,e){const{axis:n,container:i,isWindow:r}=e,{offsetHeightKey:c,clientHeightKey:u}=R(n),a=t+A(K(r,i),n,r),f=N(o.nativeElement,r,c,u),T=function q(t,o,e){const n=o.topKey();if(t.getBoundingClientRect)return t.getBoundingClientRect()[n]+A(t,o,e)}(o.nativeElement,n,r)+f;return{height:t,scrolled:a,totalToScroll:T,isWindow:r}}(e,t,o):function $(t,o,e){const{axis:n,container:i}=e;return{height:t,scrolled:i[n.scrollTopKey()],totalToScroll:i[n.scrollHeightKey()],isWindow:!1}}(e,0,o)}function R(t){return{offsetHeightKey:t.offsetHeightKey(),clientHeightKey:t.clientHeightKey()}}function N(t,o,e,n){if(isNaN(t[e])){const i=K(o,t);return i?i[n]:0}return t[e]}function A(t,o,e){const n=o.pageYOffsetKey(),i=o.scrollTopKey(),r=o.offsetTopKey();return isNaN(window.pageYOffset)?K(e,t)[i]:t.ownerDocument?t.ownerDocument.defaultView[n]:t[r]}function tt(t,o={down:0,up:0},e){let n,i;if(t.totalToScroll<=0)return!1;const r=t.isWindow?t.scrolled:t.height+t.scrolled;return e?(n=(t.totalToScroll-r)/t.totalToScroll,i=(o?.down?o.down:0)/10):(n=t.scrolled/(t.scrolled+(t.totalToScroll-r)),i=(o?.up?o.up:0)/10),n<=i}class it{constructor({totalToScroll:o}){this.lastScrollPosition=0,this.lastTotalToScroll=0,this.totalToScroll=0,this.triggered={down:0,up:0},this.totalToScroll=o}updateScrollPosition(o){return this.lastScrollPosition=o}updateTotalToScroll(o){this.lastTotalToScroll!==o&&(this.lastTotalToScroll=this.totalToScroll,this.totalToScroll=o)}updateScroll(o,e){this.updateScrollPosition(o),this.updateTotalToScroll(e)}updateTriggeredFlag(o,e){e?this.triggered.down=o:this.triggered.up=o}isTriggeredScroll(o,e){return e?this.triggered.down===o:this.triggered.up===o}}function rt(t){const{scrollContainer:o,scrollWindow:e,element:n,fromRoot:i}=t,r=function G({windowElement:t,axis:o}){return function Z(t,o){const e=t.isWindow||o&&!o.nativeElement?o:o.nativeElement;return{...t,container:e}}({axis:o,isWindow:J(t)},t)}({axis:new X(!t.horizontal),windowElement:F(o,e,n,i)}),c=new it({totalToScroll:U(n,r)}),a={up:t.upDistance,down:t.downDistance};return function st(t){let o=(0,E.R)(t.container,"scroll");return t.throttle&&(o=o.pipe(function I(t,o=y.z,e=m){const n=(0,C.H)(t,o);return function M(t,o=m){return(0,d.e)((e,n)=>{const{leading:i,trailing:r}=o;let c=!1,u=null,a=null,f=!1;const T=()=>{a?.unsubscribe(),a=null,r&&(B(),f&&n.complete())},H=()=>{a=null,f&&n.complete()},L=D=>a=(0,h.Xf)(t(D)).subscribe((0,S.x)(n,T,H)),B=()=>{if(c){c=!1;const D=u;u=null,n.next(D),!f&&L(D)}};e.subscribe((0,S.x)(n,D=>{c=!0,u=D,(!a||a.closed)&&(i?B():L(D))},()=>{f=!0,(!(r&&c&&a)||a.closed)&&n.complete()}))})}(()=>n,e)}(t.throttle,void 0,{leading:!0,trailing:!0}))),o}({container:r.container,throttle:t.throttle}).pipe((0,p.z)(()=>(0,g.of)(U(n,r))),(0,w.U)(f=>function ct(t,o,e){const{scrollDown:n,fire:i}=function et(t,o,e){const n=function ot(t,o){return t<o.scrolled}(t,o);return{fire:tt(o,e,n),scrollDown:n}}(t,o,e);return{scrollDown:n,fire:i,stats:o}}(c.lastScrollPosition,f,a)),(0,P.b)(({stats:f})=>c.updateScroll(f.scrolled,f.totalToScroll)),(0,x.h)(({fire:f,scrollDown:T,stats:{totalToScroll:H}})=>function j(t,o,e){return!!(t&&o||!e&&o)}(t.alwaysCallback,f,c.isTriggeredScroll(H,T))),(0,P.b)(({scrollDown:f,stats:{totalToScroll:T}})=>{c.updateTriggeredFlag(T,f)}),(0,w.U)(at))}function at(t){const{scrollDown:o,stats:{scrolled:e}}=t;return{type:o?"[NGX_ISE] DOWN":"[NGX_ISE] UP",payload:{currentScrollPosition:e}}}let ft=(()=>{class t{constructor(e,n){this.element=e,this.zone=n,this.scrolled=new s.vpe,this.scrolledUp=new s.vpe,this.infiniteScrollDistance=2,this.infiniteScrollUpDistance=1.5,this.infiniteScrollThrottle=150,this.infiniteScrollDisabled=!1,this.infiniteScrollContainer=null,this.scrollWindow=!0,this.immediateCheck=!1,this.horizontal=!1,this.alwaysCallback=!1,this.fromRoot=!1}ngAfterViewInit(){this.infiniteScrollDisabled||this.setup()}ngOnChanges({infiniteScrollContainer:e,infiniteScrollDisabled:n,infiniteScrollDistance:i}){const r=W(e),c=W(n),u=W(i),a=!c&&!this.infiniteScrollDisabled||c&&!n.currentValue||u;(r||c||u)&&(this.destroyScroller(),a&&this.setup())}setup(){(function Y(){return typeof window<"u"})()&&this.zone.runOutsideAngular(()=>{this.disposeScroller=rt({fromRoot:this.fromRoot,alwaysCallback:this.alwaysCallback,disable:this.infiniteScrollDisabled,downDistance:this.infiniteScrollDistance,element:this.element,horizontal:this.horizontal,scrollContainer:this.infiniteScrollContainer,scrollWindow:this.scrollWindow,throttle:this.infiniteScrollThrottle,upDistance:this.infiniteScrollUpDistance}).subscribe(e=>this.zone.run(()=>this.handleOnScroll(e)))})}handleOnScroll({type:e,payload:n}){switch(e){case"[NGX_ISE] DOWN":return this.scrolled.emit(n);case"[NGX_ISE] UP":return this.scrolledUp.emit(n);default:return}}ngOnDestroy(){this.destroyScroller()}destroyScroller(){this.disposeScroller&&this.disposeScroller.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(s.SBq),s.Y36(s.R0b))},t.\u0275dir=s.lG2({type:t,selectors:[["","infiniteScroll",""],["","infinite-scroll",""],["","data-infinite-scroll",""]],inputs:{infiniteScrollDistance:"infiniteScrollDistance",infiniteScrollUpDistance:"infiniteScrollUpDistance",infiniteScrollThrottle:"infiniteScrollThrottle",infiniteScrollDisabled:"infiniteScrollDisabled",infiniteScrollContainer:"infiniteScrollContainer",scrollWindow:"scrollWindow",immediateCheck:"immediateCheck",horizontal:"horizontal",alwaysCallback:"alwaysCallback",fromRoot:"fromRoot"},outputs:{scrolled:"scrolled",scrolledUp:"scrolledUp"},features:[s.TTD]}),t})(),ut=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({}),t})()}}]);