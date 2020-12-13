// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/lang dojo/on dojo/_base/html ../utils jimu/utils dojo/keys".split(" "),function(e,c,b,g,f,d){return{a11y_init:function(){b.setAttr(this.domNode,"aria-label",this.nls._widgetLabel);b.setAttr(this.closeBtn,"role","button");b.setAttr(this.closeBtn,"aria-label",window.jimuNls.common.close);b.setAttr(this.noTimeContentNode,"tabindex",0);b.setAttr(this.playBtn,"tabindex",0);b.setAttr(this.previousBtn,"tabindex",0);b.setAttr(this.nextBtn,"tabindex",0);b.setAttr(this.playBtn,"role","button");
b.setAttr(this.playBtn,"aria-label",this.nls.pause);b.setAttr(this.previousBtn,"role","button");b.setAttr(this.previousBtn,"aria-label",this.nls.previous);b.setAttr(this.nextBtn,"role","button");b.setAttr(this.nextBtn,"aria-label",this.nls.next);this.a11y_lastNode=this.a11y_firstNode=this.noTimeContentNode;f.initFirstFocusNode(this.domNode,this.a11y_firstNode);f.initLastFocusNode(this.domNode,this.a11y_lastNode);this.a11y_openForFirstTime=!0},a11y_update:function(){this.a11y_firstNode=this.previousBtn;
this.a11y_lastNode=this.speedMenu.speedLabelNode;f.initFirstFocusNode(this.domNode,this.a11y_firstNode);f.initLastFocusNode(this.domNode,this.a11y_lastNode);setTimeout(e.hitch(this,function(){this.a11y_openForFirstTime&&this.openAtStart&&(this.openAtStartAysn=!0);f.isAutoFocusFirstNodeWidget(this)&&this.asyncFocusPlayBtn();this.a11y_openForFirstTime=!1}),50)},asyncFocusPlayBtn:function(){this.playBtn.focus();this.openAtStartAysn=!1},a11y_open:function(a){this.a11y_openForFirstTime&&this.openAtStart||
setTimeout(e.hitch(this,function(){"none"!==b.getStyle(this.noTimeContentNode,"display")&&this.noTimeContentNode.focus()}),50);a||(this.a11y_openForFirstTime=!1);f.isInNavMode()&&!g.isRunInMobile()&&(this._clearMiniModeTimer(),this.a11y_shownBy508=!0)},a11y_initEvents:function(){this.own(c(this.domNode,"focus",e.hitch(this,function(a){b.hasClass(a.target,this.baseClass)&&(g.isRunInMobile()||this._clearMiniModeTimer())})));this.own(c(this.domNode,"blur",e.hitch(this,function(a){b.hasClass(a.target,
this.baseClass)&&!g.isRunInMobile()&&(this._setMiniModeTimer(),b.hasClass(this.domNode,"mini-mode")&&(b.removeClass(this.domNode,"mini-mode"),this._adaptResponsive()))})));this.own(c(this.domNode,"keydown",e.hitch(this,function(a){!b.hasClass(a.target,this.baseClass)||a.keyCode!==d.ENTER&&a.keyCode!==d.SPACE||this.a11y_firstNode&&this.a11y_firstNode.focus&&this.a11y_firstNode.focus();this.a11y_shownBy508=!0})));this.own(c(this.closeBtn,"keydown",e.hitch(this,function(a){a.keyCode===d.TAB&&this.a11y_firstNode&&
this.a11y_firstNode.focus&&(a.stopPropagation(),a.preventDefault(),this.a11y_firstNode.focus());if(a.keyCode===d.ENTER||a.keyCode===d.SPACE||a.keyCode===d.ESCAPE)a.stopPropagation(),c.emit(this.closeBtn,"click",{cancelable:!1,bubbles:!0})})));this.own(c(this.closeBtn,"focus",e.hitch(this,function(a){a.stopPropagation()})));this.own(c(this.timeContentNode,"keydown",e.hitch(this,function(a){a.keyCode===d.ESCAPE&&(a.stopPropagation(),this.closeBtn.focus())})));this.own(c(this.noTimeContentNode,"keydown",
e.hitch(this,function(a){a.keyCode===d.ESCAPE&&(a.stopPropagation(),this.closeBtn.focus())})));this.own(c(this.playBtn,"keydown",e.hitch(this,function(a){if(a.keyCode===d.ENTER||a.keyCode===d.SPACE)a.stopPropagation(),c.emit(this.playBtn,"click",{cancelable:!1,bubbles:!0})})));this.own(c(this.previousBtn,"keydown",e.hitch(this,function(a){if(a.keyCode===d.ENTER||a.keyCode===d.SPACE)a.stopPropagation(),c.emit(this.previousBtn,"click",{cancelable:!1,bubbles:!0})})));this.own(c(this.nextBtn,"keydown",
e.hitch(this,function(a){if(a.keyCode===d.ENTER||a.keyCode===d.SPACE)a.stopPropagation(),c.emit(this.nextBtn,"click",{cancelable:!1,bubbles:!0})})))}}});