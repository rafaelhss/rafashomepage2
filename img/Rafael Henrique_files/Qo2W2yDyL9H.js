if (self.CavalryLogger) { CavalryLogger.start_js(["0x4o4"]); }

__d("ActorSelectorNuxTypes",[],(function a(b,c,d,e,f,g){f.exports={COMPOSER:"composer_seen_count",COMPOSER_COVERED:"composer_covered_seen_count",M_COMPOSER:"m_composer_seen_count",M_UFI:"m_ufi_seen_count",UFI:"ufi_seen_count",UFI_TIMELINE:"ufi_timeline_seen_count",UFI_TIMELINE_COVERED:"ufi_timeline_covered_seen_count"};}),null);
__d("XJavaScriptLogviewSiteCategory",[],(function a(b,c,d,e,f,g){f.exports={MBASIC:"m_basic",MTOUCH:"m_touch",WWW:"www"};}),null);
__d("XAYMTPanelSaveSettingsController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/ads\/growth\/aymt\/homepage_panel\/save_settings\/",{time_range:{type:"Enum",enumType:1},ad_account_id:{type:"Int"},promoted_object:{type:"Int"},collapsed:{type:"Int"},dismiss_nux:{type:"Bool",defaultValue:false},flash_insights_dismiss_nux:{type:"Bool",defaultValue:false},refresh_panel:{type:"Bool",defaultValue:false},app_nux_dimissed:{type:"Bool",defaultValue:false}});}),null);
__d('AdvertiserHomePagelet',['AsyncRequest','DOM','URI','XAYMTPanelSaveSettingsController','$'],(function a(b,c,d,e,f,g){var h={init:function i(j,k){var l=c('XAYMTPanelSaveSettingsController').getURIBuilder().setBool('refresh_panel',true).getURI();l.addQueryData(c('URI').getRequestURI().getQueryData());new (c('AsyncRequest'))().setURI(l).setStatusElement(k).setErrorHandler(function(m){c('DOM').setContent(c('$')('pagelet_advertiser_panel_content'),'');}).send();}};f.exports=h;}),null);
__d("XActorSelectorNuxSeenWriteController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/actor_selector\/nux\/mark_seen\/",{nux_type:{type:"Enum",required:true,enumType:1}});}),null);
__d('UFIActorSelector.react',['csx','fbt','ActorSelector.react','ActorSelectorNuxTypes','Arbiter','AsyncRequest','Parent','React','ReactDOM','SubscriptionsHandler','UFICentralUpdates','UFIFeedbackTargets','UFIUserActions','XActorSelectorNuxSeenWriteController'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=c('React').PropTypes,m='ufi_actor_selector_nux_disabled_event';j=babelHelpers.inherits(n,c('React').Component);k=j&&j.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=k.constructor).call.apply(o,[this].concat(r)),this.state={loading:false,nuxEnabled:!!this.props.nuxEnabled,nuxHoverContext:null,selectedActorID:null},this.$UFIActorSelector3=function(t){this.setState({loading:true});c('UFIUserActions').changeActor(this.props.ftEntIdentifier,t.value);}.bind(this),this.$UFIActorSelector5=function(){var t=this.props.isTimeline?c('ActorSelectorNuxTypes').UFI_TIMELINE:c('ActorSelectorNuxTypes').UFI,u=c('XActorSelectorNuxSeenWriteController').getURIBuilder().setEnum('nux_type',t).getURI();new (c('AsyncRequest'))().setURI(u).send();}.bind(this),p;}n.prototype.render=function(){return c('React').createElement(c('ActorSelector.react'),{actorIDs:this.props.actorIDs,loading:this.props.loading||this.state.loading,nuxBody:this.$UFIActorSelector2(),nuxEnabled:this.state.nuxEnabled,nuxHoverContext:this.state.nuxHoverContext,onChange:this.$UFIActorSelector3,onShowNux:this.$UFIActorSelector4,onCompleteNux:this.$UFIActorSelector5,selectedActorID:this.state.selectedActorID,settingsURI:this.props.settingsURI,tooltipConstructor:this.$UFIActorSelector6,syncEnabled:this.props.syncEnabled});};n.prototype.componentDidMount=function(){this.$UFIActorSelector7();this.$UFIActorSelector1=new (c('SubscriptionsHandler'))();this.$UFIActorSelector1.addSubscriptions(c('UFICentralUpdates').subscribe('feedback-updated',function(p,q){if(this.props.ftEntIdentifier in q.updates)this.$UFIActorSelector7();}.bind(this)),c('Arbiter').subscribe(m,function(){this.setState({nuxEnabled:false});}.bind(this)));var o=c('Parent').bySelector(c('ReactDOM').findDOMNode(this),"._5pcr");if(o)this.setState({nuxHoverContext:o});};n.prototype.componentWillUnmount=function(){this.$UFIActorSelector1.release();};n.prototype.$UFIActorSelector7=function(){c('UFIFeedbackTargets').getFeedbackTarget(this.props.ftEntIdentifier,function(o){this.setState({loading:false,selectedActorID:o.actorforpost});}.bind(this));};n.prototype.$UFIActorSelector2=function(){return i._("Like, comment or share as yourself or as one of the Pages you manage.");};n.prototype.$UFIActorSelector6=function(o){return i._("Liking and commenting as {actorName}",[i.param('actorName',o)]);};n.prototype.$UFIActorSelector4=function(){c('Arbiter').inform(m);};n.propTypes={actorIDs:l.array.isRequired,ftEntIdentifier:l.string.isRequired,isTimeline:l.bool,loading:l.bool,nuxEnabled:l.bool,settingsURI:l.string,syncEnabled:l.bool};f.exports=n;}),null);
__d('BlueBarFixedBehaviorController',['Arbiter','Bootloader'],(function a(b,c,d,e,f,g){f.exports={init:function h(i){if(!('getBoundingClientRect' in i))return;var j=void 0,k=document.documentElement;function l(){var m=i.getBoundingClientRect(),n=m.top,o=Math.round(n)-k.clientTop<=0;if(j!==o){j=o;c('Arbiter').inform('bluebarFixedBehaviorController/isfixed',j,c('Arbiter').BEHAVIOR_STATE);}}l();c('Bootloader').loadModules(["Event"],function(m){m.listen(window,'scroll',l);},'BlueBarFixedBehaviorController');}};}),null);
__d('FeedImageErrorEventLogger',['Arbiter','BanzaiLogger','Bootloader','DataStore','DOMQuery','Event','Parent','Run','URI','ge','getCrossOriginTransport'],(function a(b,c,d,e,f,g){'use strict';var h=2;function i(s,t){return {containerId:t,errorCount:0,numErrorUrlsLogged:0,retryAttemptCount:0,retrySuccessCount:0,surface:s};}var j=false,k=0,l=[i('feed','stream_pagelet'),i('profile','pagelet_timeline_main_column')];function m(s){return !!s&&Object.prototype.hasOwnProperty.call(s.getQueryData(),'theater');}function n(s){c('BanzaiLogger').log('WebFeedImageErrorEventLoggerConfig',s);}function o(){l.forEach(function(s){var t=c('ge')(s.containerId);if(t){n({event_name:'IMAGE_LOAD_SUMMARY',error_count:s.errorCount,retry_attempt_count:s.retryAttemptCount,retry_success_count:s.retrySuccessCount,surface:s.surface,total_image_count:c('DOMQuery').scry(t,'img').length});s.errorCount=0;s.numErrorUrlsLogged=0;s.retryAttemptCount=0;s.retrySuccessCount=0;}});}function p(s){if(!s||!s.target||s.target.nodeName!=='IMG')return;if(k>0&&Math.random()<1/k)n({src:s.target.src,event_name:'IMAGE_LOAD'});}function q(s){var t;if(!s||!s.target||s.target.nodeName!=='IMG')return;var u=s.target,v=u.src,w=l.find(function(y){return c('Parent').bySelector(u,'#'+y.containerId);});if(!w)return;var x=w.surface;if(!c('DataStore').get(u,'retry')){(function(){w.retryAttemptCount++;c('DataStore').set(u,'retry',true);var y=c('Event').listen(u,'load',function(){y.remove();w.retrySuccessCount++;});u.src=v;})();}else{w.errorCount++;if(w.numErrorUrlsLogged>=h)return;w.numErrorUrlsLogged++;c('Bootloader').loadModules(["XHRRequest"],function(y){if(y)new y(v).setTransportBuilder(c('getCrossOriginTransport')).setMethod('GET').setResponseHandler(function(){n({error_type:'SUCCESS',src:v,surface:x});}).setErrorHandler(function(z){if(z){var aa=z.errorMsg;if(aa.indexOf('id="facebook"')>0)aa='FB ERROR PAGE';n({error_code:z.errorCode,error_type:z.errorType,error_message:aa,src:v,surface:x});}}).setTimeoutHandler(function(z){n({error_type:'TIMEOUT',src:z,surface:x});}).send();},'FeedImageErrorEventLogger');}}var r={init:function s(t){if(j)return;j=true;k=t&&t.loadSampleRate||0;window.addEventListener('error',q,true);if(k)document.addEventListener('load',p,true);if(t&&t.alwaysLogCounts){c('Run').onUnload(function(){return o();});c('Arbiter').subscribe(['pre_page_transition'],function(u,v){if(m(c('URI').getMostRecentURI())||m(c('URI').getNextURI()))return;o();});}}};f.exports=r;}),18);
__d('AbstractErrorSignal',['invariant','BanzaiODS','SessionName','ScriptPath','SiteData'],(function a(b,c,d,e,f,g,h){'use strict';var i=true;function j(){this.constructor!==j||h(0);}j.prototype.logJSError=function(k,l){l=l||{};l.svn_rev=c('SiteData').revision;l.push_phase=c('SiteData').push_phase;l.script_path=c('ScriptPath').getScriptPath();l.extra=l.extra||{};l.extra.hrm=c('SiteData').be_mode;var m=l.extra.type||'error';if(i&&k==='onerror'&&m==='error'){l.extra.extra=l.extra.extra||[];l.extra.extra.push('first_error');i=false;}var n=(c('SessionName').getName()||'-')+'/-';this.sendErrorSignal('javascript_error',JSON.stringify({c:k,a:n,m:l}));};j.prototype.sendBeaconErrorSignal=function(){var k='beacon_error',l=(c('SessionName').getName()||'-')+'/-',m={};m.error=k;m.svn_rev=c('SiteData').revision;m.push_phase=c('SiteData').push_phase;m.script_path=c('ScriptPath').getScriptPath();m.extra={message:k,type:'info'};this.sendErrorSignal(k,JSON.stringify({c:k,a:l,m:m}));};j.prototype.sendErrorSignal=function(k,l){this.performCounterLogging(k);switch(k){case 'async_error':var m=JSON.parse(l),n=m.err_code,o=m.path;if(n in {'1004':1,'12029':1,'12031':1,'12152':1}&&o.indexOf('scribe_endpoint.php')==-1)this.performSignalLogging(k,l);break;default:this.performSignalLogging(k,l);}};j.prototype.performCounterLogging=function(k){c('BanzaiODS').bumpEntityKey('js_error_reporting','error_signal.category.'+k);switch(k){case 'beacon_error':c('BanzaiODS').bumpEntityKey('js_error_reporting','beacon_error_signal.sent');break;case 'javascript_error':c('BanzaiODS').bumpEntityKey('js_error_reporting','error_signal.sent');break;}};j.prototype.performSignalLogging=function(k,l){h(0);};f.exports=j;}),null);
__d('ErrorSignal',['AbstractErrorSignal','AsyncRequest','AsyncSignal','BanzaiODS','ErrorSignalConfig','XJavaScriptLogviewSiteCategory','emptyFunction'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('AbstractErrorSignal'));i=h&&h.prototype;j.prototype.performCounterLogging=function(l){'use strict';i.performCounterLogging.call(this,l);switch(l){case 'javascript_error':c('BanzaiODS').bumpEntityKey('js_error_reporting','error_signal.'+c('XJavaScriptLogviewSiteCategory').WWW+'.sent');break;}};j.prototype.performSignalLogging=function(l,m){'use strict';switch(l){case 'async_error':new (c('AsyncRequest'))().setURI(c('ErrorSignalConfig').uri).setData({c:'async_error',m:m}).setMethod('GET').setReadOnly(true).setOption('suppressEvaluation',true).setOption('suppressErrorAlerts',true).setHandler(c('emptyFunction')).setErrorHandler(c('emptyFunction')).send(true);break;default:new (c('AsyncSignal'))(c('ErrorSignalConfig').uri,{c:l,m:m}).send();break;}};function j(){'use strict';h.apply(this,arguments);}var k=new j();f.exports=k;b.ErrorSignal=k;}),null);
__d('FeedLoadEventWWWLogger',['Arbiter','BanzaiLogger','ErrorSignal','ErrorUtils','LitestandMessages','PageletEventConstsJS','URI'],(function a(b,c,d,e,f,g){var h=['substream_','more_pager_pagelet_','pagelet_composer','pagelet_navigation','pagelet_rhc_footer'],i=[c('PageletEventConstsJS').ARRIVE_END,c('PageletEventConstsJS').DISPLAY_END,c('PageletEventConstsJS').ONLOAD_END],j=['pre_page_transition','page_transition'],k=[c('LitestandMessages').NEWSFEED_LOAD,c('LitestandMessages').STORIES_REQUESTED,c('LitestandMessages').STORIES_INSERTED,c('LitestandMessages').NEWER_STORIES_REQUESTED,c('LitestandMessages').NEWER_STORIES_INSERTED,c('LitestandMessages').STREAM_LOAD_ERROR,c('LitestandMessages').STREAM_LOAD_RETRY,c('LitestandMessages').DUPLICATE_CURSOR_ERROR],l=false;function m(q){return q&&(q.getPath()==='/'||q.getPath()==='/home.php');}function n(q){c('BanzaiLogger').log('WebFeedLoadLoggerConfig',q);}function o(q){if(!q)return null;if(q.indexOf('more_pager_pagelet_')===0)return 'more_pager_pagelet_n';if(q.indexOf('substream_')===0&&q!=='substream_0'&&q!=='substream_1')return 'substream_n';return q;}var p={init:function q(){if(l)return;c('Arbiter').subscribe('BigPipe/init',function(r,s){if(!s||!s.arbiter)return;s.arbiter.subscribe('pagelet_event',function(t,u){if(u&&i.indexOf(u.event)>=0&&h.some(function(v){return u.id.indexOf(v)===0;})&&m(c('URI').getNextURI()))n({event:'pagelet',pagelet_id:o(u.id),pagelet_event_type:u.event,pagelet_phase:u.phase.toString()});});});c('Arbiter').subscribe(j,function(r,s){if(s){var t=s.to||s.uri;if(m(t))n({event:'page_transition',transition_event_type:r});}});c('Arbiter').subscribe(k,function(r,s){var t=null,u=null;if(r===c('LitestandMessages').STREAM_LOAD_ERROR){t=s;}else if(r===c('LitestandMessages').DUPLICATE_CURSOR_ERROR)u=s;n({event:'stream_load',stream_event_type:r,stream_cursor:u,stream_substream_id:o(s&&s.substream_id),error_name:t&&t.name,error_message:t&&t.message,error_stack:t&&t.stack});});c('ErrorUtils').addListener(function(r){if(r&&m(c('URI').getNextURI())){c('ErrorSignal').logJSError('feedloaderror',{error:r.name||r.message,extra:r});n({event:'js_error',error_name:r.name,error_message:r.message,error_stack:r.stack});}});l=true;}};f.exports=p;}),null);
__d('ReactComposerDraftTypes',[],(function a(b,c,d,e,f,g){var h={NONE:'none',AUTO:'auto',AUTOMSG:'automsg'};f.exports=h;}),18);
__d('ReactComposerFocusScrollLockUtils',['csx','cx','CSS','DOMQuery','Style','getDocumentScrollElement','getElementRect','getUnboundedScrollPosition','getViewportDimensions'],(function a(b,c,d,e,f,g,h,i){'use strict';var j=300,k=400,l={_interval:0,_pageRoot:null,enable:function m(n){var o=c('getUnboundedScrollPosition')(c('getDocumentScrollElement')());c('CSS').addClass(this._getPageRoot(),"_ihc");var p=c('getElementRect')(n),q=p.top,r=function(){var s=q+n.offsetHeight+k,t=Math.max(c('getViewportDimensions')().height,s)+'px';if(c('Style').get(this._getPageRoot(),'height')!==t)c('Style').set(this._getPageRoot(),'height',t);}.bind(this);this._interval=setInterval(r,j);r();requestAnimationFrame(function(){window.scrollTo(o.x,0);});},disable:function m(){c('CSS').removeClass(this._getPageRoot(),"_ihc");c('Style').set(this._getPageRoot(),'height',null);clearInterval(this._interval);},_getPageRoot:function m(){if(!this._pageRoot)this._pageRoot=c('DOMQuery').scry(document.body,"._li")[0];return this._pageRoot;}};f.exports=l;}),null);
__d('ReactComposerFocusModalWithP2PNewAdminsDialog.react',['fbt','BootloadOnRender.react','ReactComposerDraftTypes','ReactComposerFocusScrollLockUtils','ReactComposerFocusWrapperCore.react','ReactComposerLoggingActions','Arbiter','Bootloader','JSResource','LazyComponent.react','React','ReactDOM'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes,l=null,m=null,n=null;i=babelHelpers.inherits(o,c('React').PureComponent);j=i&&i.prototype;function o(){var p,q;'use strict';for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=j.constructor).call.apply(p,[this].concat(s)),this.state={focused:false,showDiscardDialog:false,showP2PAdminsDialog:false},this.$ReactComposerFocusModalWithP2PNewAdminsDialog2=function(){var u=this.props.ReactComposerFocusExtraConfigData;if(u&&u.showDialogForP2PAdminsMetadata&&u.showDialogForP2PAdminsMetadata.showDialogForP2PAdmins===true)this.$ReactComposerFocusModalWithP2PNewAdminsDialog7();if(this.props.gks.draftType==c('ReactComposerDraftTypes').AUTO||this.props.gks.draftType==c('ReactComposerDraftTypes').AUTOMSG){c('Bootloader').loadModules(["ReactComposerHandleUnsavedChanges","ReactComposerFocusSaveAsDraftDialog.react","ReactComposerInit"],function(v,w,x){n=v;m=w;l=x;},'ReactComposerFocusModalWithP2PNewAdminsDialog.react');}else c('Bootloader').loadModules(["ReactComposerHandleUnsavedChanges","ReactComposerFocusDiscardDialog.react","ReactComposerInit"],function(v,w,x){n=v;m=w;l=x;},'ReactComposerFocusModalWithP2PNewAdminsDialog.react');}.bind(this),this.$ReactComposerFocusModalWithP2PNewAdminsDialog4=function(u){if(u)return this.$ReactComposerFocusModalWithP2PNewAdminsDialog1();if(m&&n&&n.hasUnsavedChanges(this.$ReactComposerFocusModalWithP2PNewAdminsDialog8())){this.$ReactComposerFocusModalWithP2PNewAdminsDialog9();}else this.$ReactComposerFocusModalWithP2PNewAdminsDialog10();}.bind(this),this.$ReactComposerFocusModalWithP2PNewAdminsDialog10=function(){c('ReactComposerLoggingActions').composerCancel(this.$ReactComposerFocusModalWithP2PNewAdminsDialog8());this.$ReactComposerFocusModalWithP2PNewAdminsDialog11();try{if(l)l.resetComposer(this.$ReactComposerFocusModalWithP2PNewAdminsDialog8());}catch(u){}c('Arbiter').inform('ReactComposerFocus/reset/'+this.$ReactComposerFocusModalWithP2PNewAdminsDialog8());this.$ReactComposerFocusModalWithP2PNewAdminsDialog1();}.bind(this),this.$ReactComposerFocusModalWithP2PNewAdminsDialog3=function(){var u=c('ReactDOM').findDOMNode(this.refs.focus.getComposer());c('ReactComposerFocusScrollLockUtils').enable(u);this.setState({focused:true});}.bind(this),this.$ReactComposerFocusModalWithP2PNewAdminsDialog11=function(){this.setState({showDiscardDialog:false});}.bind(this),this.$ReactComposerFocusModalWithP2PNewAdminsDialog8=function(){return this.refs.focus.getComposerID();}.bind(this),this.$ReactComposerFocusModalWithP2PNewAdminsDialog12=function(){this.setState({showP2PAdminsDialog:false});}.bind(this),q;}o.prototype.componentWillUnmount=function(){'use strict';this.$ReactComposerFocusModalWithP2PNewAdminsDialog1();};o.prototype.render=function(){'use strict';return c('React').createElement('div',null,c('React').createElement(c('ReactComposerFocusWrapperCore.react'),{composerID:this.props.composerID,ariaLabel:h._("Create a Post"),focused:this.state.focused,fixHeight:true,onFirstFocus:this.$ReactComposerFocusModalWithP2PNewAdminsDialog2,onFocus:this.$ReactComposerFocusModalWithP2PNewAdminsDialog3,onDismiss:this.$ReactComposerFocusModalWithP2PNewAdminsDialog4,gks:this.props.gks,ref:'focus'},this.props.children),this.$ReactComposerFocusModalWithP2PNewAdminsDialog5(),this.$ReactComposerFocusModalWithP2PNewAdminsDialog6());};o.prototype.$ReactComposerFocusModalWithP2PNewAdminsDialog1=function(){'use strict';c('ReactComposerFocusScrollLockUtils').disable();this.setState({focused:false});};o.prototype.$ReactComposerFocusModalWithP2PNewAdminsDialog9=function(){'use strict';this.setState({showDiscardDialog:true});};o.prototype.$ReactComposerFocusModalWithP2PNewAdminsDialog7=function(){'use strict';this.setState({showP2PAdminsDialog:true});};o.prototype.$ReactComposerFocusModalWithP2PNewAdminsDialog6=function(){'use strict';var p=null;if(this.state.showP2PAdminsDialog){var q=this.props.ReactComposerFocusExtraConfigData,r=q.showDialogForP2PAdminsMetadata.pageID,s=q.showDialogForP2PAdminsMetadata.pageName;p=c('React').createElement(c('BootloadOnRender.react'),{loader:c('JSResource')('ReactComposerP2PNewAdminsPostToPageDialog.react').__setRef('ReactComposerFocusModalWithP2PNewAdminsDialog.react'),placeholder:c('React').createElement('div',null),component:c('React').createElement(c('LazyComponent.react'),{id:'redirectdialog',onCancel:this.$ReactComposerFocusModalWithP2PNewAdminsDialog12,pageName:s,pageID:r})});}return p;};o.prototype.$ReactComposerFocusModalWithP2PNewAdminsDialog5=function(){'use strict';var p=null;if(this.state.showDiscardDialog&&m)if(this.props.gks.draftType==c('ReactComposerDraftTypes').AUTO||this.props.gks.draftType==c('ReactComposerDraftTypes').AUTOMSG){p=c('React').createElement(m,{getComposerID:this.$ReactComposerFocusModalWithP2PNewAdminsDialog8,actorID:this.props.actorID,gks:this.props.gks,onResetComposer:this.$ReactComposerFocusModalWithP2PNewAdminsDialog10,onCancel:this.$ReactComposerFocusModalWithP2PNewAdminsDialog11});}else p=c('React').createElement(m,{onConfirm:this.$ReactComposerFocusModalWithP2PNewAdminsDialog10,onCancel:this.$ReactComposerFocusModalWithP2PNewAdminsDialog11});return p;};o.propTypes={composerID:k.string.isRequired,actorID:k.string.isRequired,gks:k.object.isRequired,ReactComposerFocusExtraConfigData:k.object};f.exports=o;}),null);
__d('ReactComposerFocusModal.react',['fbt','ReactComposerDraftTypes','ReactComposerFocusScrollLockUtils','ReactComposerFocusWrapperCore.react','ReactComposerLoggingActions','Arbiter','Bootloader','React','ReactDOM'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes,l=null,m=null,n=null;i=babelHelpers.inherits(o,c('React').PureComponent);j=i&&i.prototype;function o(){var p,q;'use strict';for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=j.constructor).call.apply(p,[this].concat(s)),this.state={focused:false,showDiscardDialog:false},this.$ReactComposerFocusModal2=function(){if(this.props.gks.draftType==c('ReactComposerDraftTypes').AUTO||this.props.gks.draftType==c('ReactComposerDraftTypes').AUTOMSG){c('Bootloader').loadModules(["ReactComposerHandleUnsavedChanges","ReactComposerFocusSaveAsDraftDialog.react","ReactComposerInit"],function(u,v,w){n=u;m=v;l=w;},'ReactComposerFocusModal.react');}else c('Bootloader').loadModules(["ReactComposerHandleUnsavedChanges","ReactComposerFocusDiscardDialog.react","ReactComposerInit"],function(u,v,w){n=u;m=v;l=w;},'ReactComposerFocusModal.react');}.bind(this),this.$ReactComposerFocusModal4=function(u){if(u)return this.$ReactComposerFocusModal1();if(m&&n&&n.hasUnsavedChanges(this.$ReactComposerFocusModal6())){this.$ReactComposerFocusModal7();}else this.$ReactComposerFocusModal8();}.bind(this),this.$ReactComposerFocusModal8=function(){c('ReactComposerLoggingActions').composerCancel(this.$ReactComposerFocusModal6());this.$ReactComposerFocusModal9();try{if(l)l.resetComposer(this.$ReactComposerFocusModal6());}catch(u){}c('Arbiter').inform('ReactComposerFocus/reset/'+this.$ReactComposerFocusModal6());this.$ReactComposerFocusModal1();}.bind(this),this.$ReactComposerFocusModal3=function(){var u=c('ReactDOM').findDOMNode(this.refs.focus.getComposer());c('ReactComposerFocusScrollLockUtils').enable(u);this.setState({focused:true});}.bind(this),this.$ReactComposerFocusModal1=function(){c('ReactComposerFocusScrollLockUtils').disable();this.setState({focused:false});}.bind(this),this.$ReactComposerFocusModal7=function(){this.setState({showDiscardDialog:true});}.bind(this),this.$ReactComposerFocusModal9=function(){this.setState({showDiscardDialog:false});}.bind(this),this.$ReactComposerFocusModal6=function(){return this.refs.focus.getComposerID();}.bind(this),q;}o.prototype.componentWillUnmount=function(){'use strict';this.$ReactComposerFocusModal1();};o.prototype.render=function(){'use strict';return c('React').createElement('div',null,c('React').createElement(c('ReactComposerFocusWrapperCore.react'),{composerID:this.props.composerID,ariaLabel:h._("Create a Post"),focused:this.state.focused,fixHeight:true,onFirstFocus:this.$ReactComposerFocusModal2,onFocus:this.$ReactComposerFocusModal3,onDismiss:this.$ReactComposerFocusModal4,gks:this.props.gks,ref:'focus'},this.props.children),this.$ReactComposerFocusModal5());};o.prototype.$ReactComposerFocusModal5=function(){'use strict';var p=null;if(this.state.showDiscardDialog&&m)if(this.props.gks.draftType==c('ReactComposerDraftTypes').AUTO||this.props.gks.draftType==c('ReactComposerDraftTypes').AUTOMSG){p=c('React').createElement(m,{getComposerID:this.$ReactComposerFocusModal6,actorID:this.props.actorID,gks:this.props.gks,onResetComposer:this.$ReactComposerFocusModal8,onCancel:this.$ReactComposerFocusModal9});}else p=c('React').createElement(m,{onConfirm:this.$ReactComposerFocusModal8,onCancel:this.$ReactComposerFocusModal9});return p;};o.propTypes={composerID:k.string.isRequired,actorID:k.string.isRequired,gks:k.object.isRequired};f.exports=o;}),null);