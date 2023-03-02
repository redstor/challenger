"use strict";(self.webpackChunkchallenger=self.webpackChunkchallenger||[]).push([[994],{6994:(F,C,n)=>{n.r(C),n.d(C,{CollectionsModule:()=>Zt});var r=n(6895),u=n(8317),O=n(2236),_=n(9653),d=n(2101),m=n(2295),t=n(4650),b=n(3940),h=n(9671),f=n(3238),M=n(4859),v=n(5113),L=n(8184),D=n(2687),B=n(5589),k=n(445),y=n(1281),Y=n(9521),U=n(2289),N=n(3353),$=n(4080),S=n(7579),T=n(2722),V=n(5698);n(7340);const X=["tooltip"],G="tooltip-panel",J=(0,N.i$)({passive:!0}),Q=new t.OlP("mat-tooltip-scroll-strategy"),q={provide:Q,deps:[L.aV],useFactory:function W(o){return()=>o.scrollStrategies.reposition({scrollThrottle:20})}},tt=new t.OlP("mat-tooltip-default-options",{providedIn:"root",factory:function et(){return{showDelay:0,hideDelay:0,touchendHideDelay:1500}}});let it=(()=>{class o{constructor(e,i,s,l,p,g,P,z,Z,E,x,R){this._overlay=e,this._elementRef=i,this._scrollDispatcher=s,this._viewContainerRef=l,this._ngZone=p,this._platform=g,this._ariaDescriber=P,this._focusMonitor=z,this._dir=E,this._defaultOptions=x,this._position="below",this._disabled=!1,this._viewInitialized=!1,this._pointerExitEventsInitialized=!1,this._viewportMargin=8,this._cssClassPrefix="mat",this._showDelay=this._defaultOptions.showDelay,this._hideDelay=this._defaultOptions.hideDelay,this.touchGestures="auto",this._message="",this._passiveListeners=[],this._destroyed=new S.x,this._scrollStrategy=Z,this._document=R,x&&(x.position&&(this.position=x.position),x.touchGestures&&(this.touchGestures=x.touchGestures)),E.change.pipe((0,T.R)(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})}get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get disabled(){return this._disabled}set disabled(e){this._disabled=(0,y.Ig)(e),this._disabled?this.hide(0):this._setupPointerEnterEventsIfNeeded()}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=(0,y.su)(e)}get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=(0,y.su)(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}get message(){return this._message}set message(e){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this._message,"tooltip"),this._message=null!=e?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage(),this._ngZone.runOutsideAngular(()=>{Promise.resolve().then(()=>{this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")})}))}get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe((0,T.R)(this._destroyed)).subscribe(e=>{e?"keyboard"===e&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){const e=this._elementRef.nativeElement;clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._passiveListeners.forEach(([i,s])=>{e.removeEventListener(i,s,J)}),this._passiveListeners.length=0,this._destroyed.next(),this._destroyed.complete(),this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay){if(this.disabled||!this.message||this._isTooltipVisible()&&!this._tooltipInstance._showTimeoutId&&!this._tooltipInstance._hideTimeoutId)return;const i=this._createOverlay();this._detach(),this._portal=this._portal||new $.C5(this._tooltipComponent,this._viewContainerRef);const s=this._tooltipInstance=i.attach(this._portal).instance;s._triggerElement=this._elementRef.nativeElement,s._mouseLeaveHideDelay=this._hideDelay,s.afterHidden().pipe((0,T.R)(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),s.show(e)}hide(e=this.hideDelay){this._tooltipInstance&&this._tooltipInstance.hide(e)}toggle(){this._isTooltipVisible()?this.hide():this.show()}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(){if(this._overlayRef)return this._overlayRef;const e=this._scrollDispatcher.getAncestorScrollContainers(this._elementRef),i=this._overlay.position().flexibleConnectedTo(this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(e);return i.positionChanges.pipe((0,T.R)(this._destroyed)).subscribe(s=>{this._updateCurrentPositionClass(s.connectionPair),this._tooltipInstance&&s.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=this._overlay.create({direction:this._dir,positionStrategy:i,panelClass:`${this._cssClassPrefix}-${G}`,scrollStrategy:this._scrollStrategy()}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe((0,T.R)(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe((0,T.R)(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe((0,T.R)(this._destroyed)).subscribe(s=>{this._isTooltipVisible()&&s.keyCode===Y.hY&&!(0,Y.Vb)(s)&&(s.preventDefault(),s.stopPropagation(),this._ngZone.run(()=>this.hide(0)))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){const i=e.getConfig().positionStrategy,s=this._getOrigin(),l=this._getOverlayPosition();i.withPositions([this._addOffset({...s.main,...l.main}),this._addOffset({...s.fallback,...l.fallback})])}_addOffset(e){return e}_getOrigin(){const e=!this._dir||"ltr"==this._dir.value,i=this.position;let s;"above"==i||"below"==i?s={originX:"center",originY:"above"==i?"top":"bottom"}:"before"==i||"left"==i&&e||"right"==i&&!e?s={originX:"start",originY:"center"}:("after"==i||"right"==i&&e||"left"==i&&!e)&&(s={originX:"end",originY:"center"});const{x:l,y:p}=this._invertPosition(s.originX,s.originY);return{main:s,fallback:{originX:l,originY:p}}}_getOverlayPosition(){const e=!this._dir||"ltr"==this._dir.value,i=this.position;let s;"above"==i?s={overlayX:"center",overlayY:"bottom"}:"below"==i?s={overlayX:"center",overlayY:"top"}:"before"==i||"left"==i&&e||"right"==i&&!e?s={overlayX:"end",overlayY:"center"}:("after"==i||"right"==i&&e||"left"==i&&!e)&&(s={overlayX:"start",overlayY:"center"});const{x:l,y:p}=this._invertPosition(s.overlayX,s.overlayY);return{main:s,fallback:{overlayX:l,overlayY:p}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),this._ngZone.onMicrotaskEmpty.pipe((0,V.q)(1),(0,T.R)(this._destroyed)).subscribe(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e,this._tooltipInstance._markForCheck())}_invertPosition(e,i){return"above"===this.position||"below"===this.position?"top"===i?i="bottom":"bottom"===i&&(i="top"):"end"===e?e="start":"start"===e&&(e="end"),{x:e,y:i}}_updateCurrentPositionClass(e){const{overlayY:i,originX:s,originY:l}=e;let p;if(p="center"===i?this._dir&&"rtl"===this._dir.value?"end"===s?"left":"right":"start"===s?"left":"right":"bottom"===i&&"top"===l?"above":"below",p!==this._currentPosition){const g=this._overlayRef;if(g){const P=`${this._cssClassPrefix}-${G}-`;g.removePanelClass(P+this._currentPosition),g.addPanelClass(P+p)}this._currentPosition=p}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._passiveListeners.length||(this._platformSupportsMouseEvents()?this._passiveListeners.push(["mouseenter",()=>{this._setupPointerExitEventsIfNeeded(),this.show()}]):"off"!==this.touchGestures&&(this._disableNativeGesturesIfNecessary(),this._passiveListeners.push(["touchstart",()=>{this._setupPointerExitEventsIfNeeded(),clearTimeout(this._touchstartTimeout),this._touchstartTimeout=setTimeout(()=>this.show(),500)}])),this._addListeners(this._passiveListeners))}_setupPointerExitEventsIfNeeded(){if(this._pointerExitEventsInitialized)return;this._pointerExitEventsInitialized=!0;const e=[];if(this._platformSupportsMouseEvents())e.push(["mouseleave",i=>{const s=i.relatedTarget;(!s||!this._overlayRef?.overlayElement.contains(s))&&this.hide()}],["wheel",i=>this._wheelListener(i)]);else if("off"!==this.touchGestures){this._disableNativeGesturesIfNecessary();const i=()=>{clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions.touchendHideDelay)};e.push(["touchend",i],["touchcancel",i])}this._addListeners(e),this._passiveListeners.push(...e)}_addListeners(e){e.forEach(([i,s])=>{this._elementRef.nativeElement.addEventListener(i,s,J)})}_platformSupportsMouseEvents(){return!this._platform.IOS&&!this._platform.ANDROID}_wheelListener(e){if(this._isTooltipVisible()){const i=this._document.elementFromPoint(e.clientX,e.clientY),s=this._elementRef.nativeElement;i!==s&&!s.contains(i)&&this.hide()}}_disableNativeGesturesIfNecessary(){const e=this.touchGestures;if("off"!==e){const i=this._elementRef.nativeElement,s=i.style;("on"===e||"INPUT"!==i.nodeName&&"TEXTAREA"!==i.nodeName)&&(s.userSelect=s.msUserSelect=s.webkitUserSelect=s.MozUserSelect="none"),("on"===e||!i.draggable)&&(s.webkitUserDrag="none"),s.touchAction="none",s.webkitTapHighlightColor="transparent"}}}return o.\u0275fac=function(e){t.$Z()},o.\u0275dir=t.lG2({type:o,inputs:{position:["matTooltipPosition","position"],disabled:["matTooltipDisabled","disabled"],showDelay:["matTooltipShowDelay","showDelay"],hideDelay:["matTooltipHideDelay","hideDelay"],touchGestures:["matTooltipTouchGestures","touchGestures"],message:["matTooltip","message"],tooltipClass:["matTooltipClass","tooltipClass"]}}),o})(),ot=(()=>{class o extends it{constructor(e,i,s,l,p,g,P,z,Z,E,x,R){super(e,i,s,l,p,g,P,z,Z,E,x,R),this._tooltipComponent=nt}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(L.aV),t.Y36(t.SBq),t.Y36(B.mF),t.Y36(t.s_b),t.Y36(t.R0b),t.Y36(N.t4),t.Y36(D.$s),t.Y36(D.tE),t.Y36(Q),t.Y36(k.Is,8),t.Y36(tt,8),t.Y36(r.K0))},o.\u0275dir=t.lG2({type:o,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-tooltip-trigger"],exportAs:["matTooltip"],features:[t.qOj]}),o})(),st=(()=>{class o{constructor(e,i){this._changeDetectorRef=e,this._visibility="initial",this._closeOnInteraction=!1,this._isVisible=!1,this._onHide=new S.x,this._animationsDisabled="NoopAnimations"===i}show(e){clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){clearTimeout(this._showTimeoutId),clearTimeout(this._hideTimeoutId),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&this.hide(this._mouseLeaveHideDelay)}_onShow(){}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){const i=this._tooltip.nativeElement,s=this._showAnimation,l=this._hideAnimation;if(i.classList.remove(e?l:s),i.classList.add(e?s:l),this._isVisible=e,e&&!this._animationsDisabled&&"function"==typeof getComputedStyle){const p=getComputedStyle(i);("0s"===p.getPropertyValue("animation-duration")||"none"===p.getPropertyValue("animation-name"))&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(i.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.sBO),t.Y36(t.QbO,8))},o.\u0275dir=t.lG2({type:o}),o})(),nt=(()=>{class o extends st{constructor(e,i,s){super(e,s),this._breakpointObserver=i,this._isHandset=this._breakpointObserver.observe(U.u3.Handset),this._showAnimation="mat-tooltip-show",this._hideAnimation="mat-tooltip-hide"}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.sBO),t.Y36(U.Yg),t.Y36(t.QbO,8))},o.\u0275cmp=t.Xpm({type:o,selectors:[["mat-tooltip-component"]],viewQuery:function(e,i){if(1&e&&t.Gf(X,7),2&e){let s;t.iGM(s=t.CRH())&&(i._tooltip=s.first)}},hostAttrs:["aria-hidden","true"],hostVars:2,hostBindings:function(e,i){1&e&&t.NdJ("mouseleave",function(l){return i._handleMouseLeave(l)}),2&e&&t.Udp("zoom",i.isVisible()?1:null)},features:[t.qOj],decls:4,vars:6,consts:[[1,"mat-tooltip",3,"ngClass","animationend"],["tooltip",""]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0,1),t.NdJ("animationend",function(l){return i._handleAnimationEnd(l)}),t.ALo(2,"async"),t._uU(3),t.qZA()),2&e){let s;t.ekj("mat-tooltip-handset",null==(s=t.lcZ(2,4,i._isHandset))?null:s.matches),t.Q6J("ngClass",i.tooltipClass),t.xp6(3),t.Oqu(i.message)}},dependencies:[r.mk,r.Ov],styles:[".mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis;transform:scale(0)}.mat-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}.mat-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-tooltip-show{0%{opacity:0;transform:scale(0)}50%{opacity:.5;transform:scale(0.99)}100%{opacity:1;transform:scale(1)}}@keyframes mat-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(1)}}.mat-tooltip-show{animation:mat-tooltip-show 200ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-tooltip-hide{animation:mat-tooltip-hide 100ms cubic-bezier(0, 0, 0.2, 1) forwards}"],encapsulation:2,changeDetection:0}),o})(),at=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[q],imports:[D.rt,r.ez,L.U8,f.BQ,f.BQ,B.ZD]}),o})();var lt=n(9549);function rt(o,a){if(1&o&&(t.TgZ(0,"mat-option",19),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function pt(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"mat-form-field",16)(1,"mat-select",17),t.NdJ("selectionChange",function(s){t.CHM(e);const l=t.oxw(2);return t.KtG(l._changePageSize(s.value))}),t.YNc(2,rt,2,2,"mat-option",18),t.qZA()()}if(2&o){const e=t.oxw(2);t.Q6J("appearance",e._formFieldAppearance)("color",e.color),t.xp6(1),t.Q6J("value",e.pageSize)("disabled",e.disabled)("panelClass",e.selectConfig.panelClass||"")("disableOptionCentering",e.selectConfig.disableOptionCentering)("aria-label",e._intl.itemsPerPageLabel),t.xp6(1),t.Q6J("ngForOf",e._displayedPageSizeOptions)}}function ht(o,a){if(1&o&&(t.TgZ(0,"div",20),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.pageSize)}}function ct(o,a){if(1&o&&(t.TgZ(0,"div",12)(1,"div",13),t._uU(2),t.qZA(),t.YNc(3,pt,3,8,"mat-form-field",14),t.YNc(4,ht,2,1,"div",15),t.qZA()),2&o){const e=t.oxw();t.xp6(2),t.hij(" ",e._intl.itemsPerPageLabel," "),t.xp6(1),t.Q6J("ngIf",e._displayedPageSizeOptions.length>1),t.xp6(1),t.Q6J("ngIf",e._displayedPageSizeOptions.length<=1)}}function dt(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"button",21),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.firstPage())}),t.O4$(),t.TgZ(1,"svg",7),t._UZ(2,"path",22),t.qZA()()}if(2&o){const e=t.oxw();t.Q6J("matTooltip",e._intl.firstPageLabel)("matTooltipDisabled",e._previousButtonsDisabled())("matTooltipPosition","above")("disabled",e._previousButtonsDisabled()),t.uIk("aria-label",e._intl.firstPageLabel)}}function gt(o,a){if(1&o){const e=t.EpF();t.O4$(),t.kcU(),t.TgZ(0,"button",23),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.lastPage())}),t.O4$(),t.TgZ(1,"svg",7),t._UZ(2,"path",24),t.qZA()()}if(2&o){const e=t.oxw();t.Q6J("matTooltip",e._intl.lastPageLabel)("matTooltipDisabled",e._nextButtonsDisabled())("matTooltipPosition","above")("disabled",e._nextButtonsDisabled()),t.uIk("aria-label",e._intl.lastPageLabel)}}let A=(()=>{class o{constructor(){this.changes=new S.x,this.itemsPerPageLabel="Items per page:",this.nextPageLabel="Next page",this.previousPageLabel="Previous page",this.firstPageLabel="First page",this.lastPageLabel="Last page",this.getRangeLabel=(e,i,s)=>{if(0==s||0==i)return`0 of ${s}`;const l=e*i;return`${l+1} \u2013 ${l<(s=Math.max(s,0))?Math.min(l+i,s):l+i} of ${s}`}}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const _t={provide:A,deps:[[new t.FiY,new t.tp0,A]],useFactory:function ut(o){return o||new A}},ft=new t.OlP("MAT_PAGINATOR_DEFAULT_OPTIONS"),vt=(0,f.Id)((0,f.dB)(class{}));let yt=(()=>{class o extends vt{constructor(e,i,s){if(super(),this._intl=e,this._changeDetectorRef=i,this._pageIndex=0,this._length=0,this._pageSizeOptions=[],this._hidePageSize=!1,this._showFirstLastButtons=!1,this.selectConfig={},this.page=new t.vpe,this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),s){const{pageSize:l,pageSizeOptions:p,hidePageSize:g,showFirstLastButtons:P}=s;null!=l&&(this._pageSize=l),null!=p&&(this._pageSizeOptions=p),null!=g&&(this._hidePageSize=g),null!=P&&(this._showFirstLastButtons=P)}}get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max((0,y.su)(e),0),this._changeDetectorRef.markForCheck()}get length(){return this._length}set length(e){this._length=(0,y.su)(e),this._changeDetectorRef.markForCheck()}get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max((0,y.su)(e),0),this._updateDisplayedPageSizeOptions()}get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(i=>(0,y.su)(i)),this._updateDisplayedPageSizeOptions()}get hidePageSize(){return this._hidePageSize}set hidePageSize(e){this._hidePageSize=(0,y.Ig)(e)}get showFirstLastButtons(){return this._showFirstLastButtons}set showFirstLastButtons(e){this._showFirstLastButtons=(0,y.Ig)(e)}ngOnInit(){this._initialized=!0,this._updateDisplayedPageSizeOptions(),this._markInitialized()}ngOnDestroy(){this._intlChanges.unsubscribe()}nextPage(){if(!this.hasNextPage())return;const e=this.pageIndex;this.pageIndex=this.pageIndex+1,this._emitPageEvent(e)}previousPage(){if(!this.hasPreviousPage())return;const e=this.pageIndex;this.pageIndex=this.pageIndex-1,this._emitPageEvent(e)}firstPage(){if(!this.hasPreviousPage())return;const e=this.pageIndex;this.pageIndex=0,this._emitPageEvent(e)}lastPage(){if(!this.hasNextPage())return;const e=this.pageIndex;this.pageIndex=this.getNumberOfPages()-1,this._emitPageEvent(e)}hasPreviousPage(){return this.pageIndex>=1&&0!=this.pageSize}hasNextPage(){const e=this.getNumberOfPages()-1;return this.pageIndex<e&&0!=this.pageSize}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){const s=this.pageIndex;this.pageIndex=Math.floor(this.pageIndex*this.pageSize/e)||0,this.pageSize=e,this._emitPageEvent(s)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){!this._initialized||(this.pageSize||(this._pageSize=0!=this.pageSizeOptions.length?this.pageSizeOptions[0]:50),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),-1===this._displayedPageSizeOptions.indexOf(this.pageSize)&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,i)=>e-i),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}}return o.\u0275fac=function(e){t.$Z()},o.\u0275dir=t.lG2({type:o,inputs:{color:"color",pageIndex:"pageIndex",length:"length",pageSize:"pageSize",pageSizeOptions:"pageSizeOptions",hidePageSize:"hidePageSize",showFirstLastButtons:"showFirstLastButtons",selectConfig:"selectConfig"},outputs:{page:"page"},features:[t.qOj]}),o})(),Pt=(()=>{class o extends yt{constructor(e,i,s){super(e,i,s),s&&null!=s.formFieldAppearance&&(this._formFieldAppearance=s.formFieldAppearance)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(A),t.Y36(t.sBO),t.Y36(ft,8))},o.\u0275cmp=t.Xpm({type:o,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-paginator"],inputs:{disabled:"disabled"},exportAs:["matPaginator"],features:[t.qOj],decls:14,vars:14,consts:[[1,"mat-paginator-outer-container"],[1,"mat-paginator-container"],["class","mat-paginator-page-size",4,"ngIf"],[1,"mat-paginator-range-actions"],[1,"mat-paginator-range-label"],["mat-icon-button","","type","button","class","mat-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click",4,"ngIf"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-previous",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["viewBox","0 0 24 24","focusable","false",1,"mat-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-next",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["mat-icon-button","","type","button","class","mat-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click",4,"ngIf"],[1,"mat-paginator-page-size"],[1,"mat-paginator-page-size-label"],["class","mat-paginator-page-size-select",3,"appearance","color",4,"ngIf"],["class","mat-paginator-page-size-value",4,"ngIf"],[1,"mat-paginator-page-size-select",3,"appearance","color"],[3,"value","disabled","panelClass","disableOptionCentering","aria-label","selectionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"mat-paginator-page-size-value"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,ct,5,3,"div",2),t.TgZ(3,"div",3)(4,"div",4),t._uU(5),t.qZA(),t.YNc(6,dt,3,5,"button",5),t.TgZ(7,"button",6),t.NdJ("click",function(){return i.previousPage()}),t.O4$(),t.TgZ(8,"svg",7),t._UZ(9,"path",8),t.qZA()(),t.kcU(),t.TgZ(10,"button",9),t.NdJ("click",function(){return i.nextPage()}),t.O4$(),t.TgZ(11,"svg",7),t._UZ(12,"path",10),t.qZA()(),t.YNc(13,gt,3,5,"button",11),t.qZA()()()),2&e&&(t.xp6(2),t.Q6J("ngIf",!i.hidePageSize),t.xp6(3),t.hij(" ",i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length)," "),t.xp6(1),t.Q6J("ngIf",i.showFirstLastButtons),t.xp6(1),t.Q6J("matTooltip",i._intl.previousPageLabel)("matTooltipDisabled",i._previousButtonsDisabled())("matTooltipPosition","above")("disabled",i._previousButtonsDisabled()),t.uIk("aria-label",i._intl.previousPageLabel),t.xp6(3),t.Q6J("matTooltip",i._intl.nextPageLabel)("matTooltipDisabled",i._nextButtonsDisabled())("matTooltipPosition","above")("disabled",i._nextButtonsDisabled()),t.uIk("aria-label",i._intl.nextPageLabel),t.xp6(3),t.Q6J("ngIf",i.showFirstLastButtons))},dependencies:[r.sg,r.O5,M.lW,lt.KE,v.gD,f.ey,ot],styles:[".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-paginator-icon{fill:CanvasText}"],encapsulation:2,changeDetection:0}),o})(),Tt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[_t],imports:[r.ez,M.ot,v.LD,at,f.BQ]}),o})();function xt(o,a){if(1&o&&(t.ynx(0),t.TgZ(1,"app-photo-list-item",4)(2,"p",5),t._uU(3),t.qZA(),t.TgZ(4,"div",6),t._uU(5),t.ALo(6,"date"),t.qZA(),t.TgZ(7,"div",7),t._uU(8),t.qZA()(),t.BQk()),2&o){const e=a.$implicit;t.xp6(1),t.Q6J("photo_url",e.cover_photo.urls.small)("photo_description",e.cover_photo.description)("routerLink","/collections/collection/"+e.id),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.hij("Created: ",t.lcZ(6,6,e.published_at),""),t.xp6(3),t.hij("Images: ",e.total_photos,"")}}let bt=(()=>{class o{constructor(e){this.store=e,this.collections$=this.store.pipe((0,_.Ys)(d.Rm.Z2)),this.total$=this.store.pipe((0,_.Ys)(d.Rm.mS)),this.pageSize=O.Y.perPage}ngOnInit(){this.store.dispatch(m.C1.loadCollections({}))}loadCollection({pageIndex:e,pageSize:i}){this.store.dispatch(m.C1.loadCollections({page:e+1,perPage:i}))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_.yh))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-collection-list"]],decls:6,vars:7,consts:[[1,"layout-container"],[3,"length","pageSize","page"],["fxLayout","column","fxLayout.gt-sm","row wrap",1,"gallery"],[4,"ngFor","ngForOf"],["fxFlex","","fxFlex.gt-sm","28","fxFlex.gt-lg","20",3,"photo_url","photo_description","routerLink"],[1,"title"],[1,"published"],[1,"total-photos"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"mat-paginator",1),t.NdJ("page",function(l){return i.loadCollection(l)}),t.ALo(2,"async"),t.qZA(),t.TgZ(3,"div",2),t.YNc(4,xt,9,8,"ng-container",3),t.ALo(5,"async"),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("length",t.lcZ(2,3,i.total$))("pageSize",i.pageSize),t.xp6(3),t.Q6J("ngForOf",t.lcZ(5,5,i.collections$)))},dependencies:[r.sg,u.rH,b.o,h.xw,h.yH,Pt,r.Ov,r.uU],encapsulation:2}),o})();var Ct=n(5861),It=n(3905),w=n(7392);function Ot(o,a){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"app-photo-list-item",3),t.NdJ("click",function(){const l=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.handleGotoPhoto(l))}),t.TgZ(2,"div",4)(3,"h3"),t._uU(4),t.qZA()(),t.TgZ(5,"div",4)(6,"p")(7,"mat-icon",5),t._uU(8,"favorite"),t.qZA(),t._uU(9),t.qZA()()(),t.BQk()}if(2&o){const e=a.$implicit;t.xp6(1),t.Q6J("photo_url",e.urls.small)("photo_description",e.alt_description),t.xp6(3),t.AsE("",e.user.first_name," ",e.user.last_name,""),t.xp6(5),t.hij("",e.likes," likes")}}let Lt=(()=>{class o{constructor(e,i){this.store=e,this.router=i,this.photos$=this.store.select(d.jX._F)}ngOnInit(){this.store.dispatch(m.vb.loadPhotos())}handleGotoPhoto(e){var i=this;return(0,Ct.Z)(function*(){const s=yield(0,It.z)(i.store.select(d.jX.Ps));yield i.router.navigate(["collections/collection",s,"photo",e.id])})()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_.yh),t.Y36(u.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-collection"]],decls:4,vars:3,consts:[[1,"layout-container"],["fxLayout.sm","column","fxLayout.gt-sm","row wrap",1,"gallery"],[4,"ngFor","ngForOf"],["fxFlex","","fxFlex.gt-sm","28","fxFlex.gt-lg","20",3,"photo_url","photo_description","click"],["fxLayout","row","fxLayoutAlign","end","fxLayoutGap","12px"],["inline",""]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,Ot,10,5,"ng-container",2),t.ALo(3,"async"),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("ngForOf",t.lcZ(3,1,i.photos$)))},dependencies:[r.sg,b.o,w.Hw,h.xw,h.SQ,h.Wh,h.yH,r.Ov],encapsulation:2}),o})();var Dt=n(5626),Mt=n(4004),I=n(3546);function At(o,a){if(1&o&&(t.TgZ(0,"p")(1,"mat-icon",11),t._uU(2,"location_on"),t.qZA(),t._uU(3),t.qZA()),2&o){const e=t.oxw(2);t.xp6(3),t.hij(" ",e.photo.user.location,"")}}function Et(o,a){if(1&o&&(t.TgZ(0,"p")(1,"mat-icon",11),t._uU(2,"language"),t.qZA(),t.TgZ(3,"a",12),t._uU(4),t.qZA()()),2&o){const e=t.oxw(2);t.xp6(3),t.s9C("href",e.photo.user.portfolio_url,t.LSH),t.xp6(1),t.Oqu(e.photo.user.portfolio_url)}}function St(o,a){if(1&o&&(t.TgZ(0,"mat-card",1)(1,"mat-card-header"),t._UZ(2,"img",2),t.TgZ(3,"mat-card-title"),t._uU(4),t.qZA(),t.TgZ(5,"div"),t.YNc(6,At,4,1,"p",3),t.TgZ(7,"p"),t._uU(8),t.qZA(),t.YNc(9,Et,5,2,"p",3),t.qZA()(),t.TgZ(10,"mat-card-content")(11,"div",4)(12,"div",5)(13,"p"),t._uU(14),t.ALo(15,"titlecase"),t.qZA()(),t.TgZ(16,"div",6)(17,"p",7)(18,"mat-icon",8),t._uU(19,"favorite"),t.qZA(),t._uU(20),t.qZA(),t.TgZ(21,"p",9)(22,"mat-icon",8),t._uU(23,"visibility"),t.qZA(),t._uU(24),t.qZA()()()(),t._UZ(25,"img",10),t.qZA()),2&o){const e=t.oxw();t.xp6(2),t.Q6J("src",e.photo.user.profile_image.medium,t.LSH),t.xp6(2),t.AsE("",e.photo.user.first_name," ",e.photo.user.last_name,""),t.xp6(2),t.Q6J("ngIf",null!==e.photo.user.location),t.xp6(2),t.Oqu(e.photo.user.bio),t.xp6(1),t.Q6J("ngIf",null!==e.photo.user.portfolio_url),t.xp6(5),t.Oqu(t.lcZ(15,11,e.photo.description)),t.xp6(6),t.hij("\xa0 ",e.photo.likes," likes"),t.xp6(4),t.hij("\xa0 ",e.photo.views," views"),t.xp6(1),t.Q6J("src",e.photo.urls.full,t.LSH)("alt",e.photo.alt_description)}}let wt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-photo"]],inputs:{photo:"photo"},decls:1,vars:1,consts:[["fxFlex","","class","preview",4,"ngIf"],["fxFlex","",1,"preview"],["mat-card-avatar","",3,"src"],[4,"ngIf"],["fxFlex","","fxLayout","column","fxLayoutGap","24px"],["fxFlex","","fxLayoutAlign","start center"],["fxLayout","row","fxLayoutGap","12px","fxLayoutAlign","end"],[1,"like-count"],["inline",""],[1,"view-count"],["mat-card-image","",3,"src","alt"],["inline","",2,"font-size","x-large"],[3,"href"]],template:function(e,i){1&e&&t.YNc(0,St,26,13,"mat-card",0),2&e&&t.Q6J("ngIf",i.photo)},dependencies:[r.O5,I.a8,I.dk,I.dn,I.n5,I.G2,I.kc,w.Hw,h.xw,h.SQ,h.Wh,h.yH,r.rS],encapsulation:2,changeDetection:0}),o})(),H=(()=>{class o{constructor(e){this.store=e,this.photo$=this.store.select(d.vd.M).pipe((0,Mt.U)(i=>i.photo))}ngOnInit(){this.store.dispatch(m.$8.loadPhoto())}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_.yh))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-collection-photo"]],decls:4,vars:3,consts:[[1,"layout-container"],["fxLayout.sm","column",1,"gallery"],[3,"photo"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-photo",2),t.ALo(3,"async"),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("photo",t.lcZ(3,1,i.photo$)))},dependencies:[wt,h.xw,r.Ov],encapsulation:2}),o})();const zt=[{path:"",component:bt,data:{breadcrumb:"collections"}},{path:"photo/:photoId",component:H,data:{breadcrumb:"photo"}},{path:"collection/:collectionId",component:Lt,data:{breadcrumb:"collection"}},{path:"collection/:collectionId/photo/:photoId",component:H,data:{breadcrumb:"photo"}}];let Zt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[r.ez,u.Bz.forChild(zt),Dt.K,w.Ps,h.ae,Tt]}),o})()},5626:(F,C,n)=>{n.d(C,{K:()=>M});var r=n(6895),u=n(3546),O=n(3683),_=n(7392),d=n(4859),m=n(9671),t=n(9549),b=n(4006),h=n(4144),f=n(4650);let M=(()=>{class v{}return v.\u0275fac=function(D){return new(D||v)},v.\u0275mod=f.oAB({type:v}),v.\u0275inj=f.cJS({imports:[r.ez,u.QW,O.g0,d.ot,_.Ps,m.ae,t.lN,b.UX,h.c]}),v})()},3940:(F,C,n)=>{n.d(C,{o:()=>_});var r=n(4650),u=n(3546);const O=["*"];let _=(()=>{class d{constructor(){this.photo_url="",this.photo_description=""}}return d.\u0275fac=function(t){return new(t||d)},d.\u0275cmp=r.Xpm({type:d,selectors:[["app-photo-list-item"]],inputs:{photo_url:"photo_url",photo_description:"photo_description"},ngContentSelectors:O,decls:4,vars:2,consts:[[1,"gallery-item","thumbnails"],["mat-card-image","",3,"src","alt"]],template:function(t,b){1&t&&(r.F$t(),r.TgZ(0,"mat-card",0),r._UZ(1,"img",1),r.TgZ(2,"mat-card-content"),r.Hsn(3),r.qZA()()),2&t&&(r.xp6(1),r.Q6J("src",b.photo_url,r.LSH)("alt",b.photo_description))},dependencies:[u.a8,u.dn,u.G2],encapsulation:2}),d})()}}]);