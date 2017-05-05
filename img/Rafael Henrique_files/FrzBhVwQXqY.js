if (self.CavalryLogger) { CavalryLogger.start_js(["5yzdt"]); }

__d("NavigationMetricsEnumJS",[],(function a(b,c,d,e,f,g){f.exports={NAVIGATION_START:"navigationStart",UNLOAD_EVENT_START:"unloadEventStart",UNLOAD_EVENT_END:"unloadEventEnd",REDIRECT_START:"redirectStart",REDIRECT_END:"redirectEnd",FETCH_START:"fetchStart",DOMAIN_LOOKUP_START:"domainLookupStart",DOMAIN_LOOKUP_END:"domainLookupEnd",CONNECT_START:"connectStart",CONNECT_END:"connectEnd",SECURE_CONNECTION_START:"secureConnectionStart",REQUEST_START:"requestStart",RESPONSE_START:"responseStart",RESPONSE_END:"responseEnd",DOM_LOADING:"domLoading",DOM_INTERACTIVE:"domInteractive",DOM_CONTENT_LOADED_EVENT_START:"domContentLoadedEventStart",DOM_CONTENT_LOADED_EVENT_END:"domContentLoadedEventEnd",DOM_COMPLETE:"domComplete",LOAD_EVENT_START:"loadEventStart",LOAD_EVENT_END:"loadEventEnd"};}),null);
__d("ResourceTimingMetricsEnumJS",[],(function a(b,c,d,e,f,g){f.exports={START_TIME:"startTime",REDIRECT_START:"redirectStart",REDIRECT_END:"redirectEnd",FETCH_START:"fetchStart",DOMAIN_LOOKUP_START:"domainLookupStart",DOMAIN_LOOKUP_END:"domainLookupEnd",CONNECT_START:"connectStart",SECURE_CONNECTION_START:"secureConnectionStart",CONNECT_END:"connectEnd",REQUEST_START:"requestStart",RESPONSE_START:"responseStart",RESPONSE_END:"responseEnd"};}),null);
__d('ImageTimingHelper',['Arbiter','BigPipe','URI'],(function a(b,c,d,e,f,g){var h={},i={};c('Arbiter').subscribe(c('BigPipe').Events.init,function(j,k){if(k.lid&&k.lid!=='0')k.arbiter.subscribe('images_displayed',function(l,m){var n=h[m.lid];if(!n)n=h[m.lid]=[];m.images.forEach(function(o){try{var p=new (c('URI'))(o);o=p.setFragment('').toString();}catch(q){return;}if(i[o])return;i[o]=true;n.push({pagelet:m.pagelet,timeslice:m.timeslice,ts:m.ts,uri:o});});});});f.exports.getImageTimings=function(j){return h[j]||[];};}),null);
__d('PageletEventsHelper',['Arbiter','PageletEventConstsJS'],(function a(b,c,d,e,f,g){var h='BigPipe/init',i='pagelet_event',j='phase_begin',k={},l=[],m=false;function n(){return {pagelets:{},categories:{},phase_start:{},display_resources:{},all_resources:{}};}function o(r,s,t,u){if(k[u].pagelets[s]==undefined)k[u].pagelets[s]={};k[u].pagelets[s][r]=t;}function p(r){r.subscribe(i,function(s,t){var event=t.event,u=t.ts,v=t.id,w=t.lid,x=t.phase,y=t.categories,z=t.allResources,aa=t.displayResources;o(event,v,u,w);var ba=k[w],ca=ba.pagelets[v];if(event===c('PageletEventConstsJS').ARRIVE_END){ca.phase=x;ba.all_resources[v]=z;ba.display_resources[v]=aa;}if((event===c('PageletEventConstsJS').ONLOAD_END||event===c('PageletEventConstsJS').DISPLAY_END)&&y)y.forEach(function(fa){if(ba.categories[fa]==undefined)ba.categories[fa]={};ba.categories[fa][event]=u;});for(var da=0,ea=l.length;da<ea;da++)l[da](v,event,u,w);});r.subscribe(j,function(event,s){k[s.lid].phase_start[s.phase]=s.ts;});}var q={init:function r(){if(m)return;c('Arbiter').subscribe(h,function(event,s){var t=s.lid,u=s.arbiter;k[t]=n();p(u);});m=true;},getMetrics:function r(s){if(k[s])return JSON.parse(JSON.stringify(k[s]));return null;},subscribeToPageletEvents:function r(s){l.push(s);return {remove:function t(){l.splice(0,l.indexOf(s));}};}};f.exports=q;}),null);
__d('SimpleFBAuthenticatedXHRRequest',['invariant','CurrentUser','DTSG','ServerJSDefine','XHRRequest','isFacebookURI'],(function a(b,c,d,e,f,g,h){var i,j,k=1;i=babelHelpers.inherits(l,c('XHRRequest'));j=i&&i.prototype;function l(m,n){'use strict';j.constructor.call(this,m);var o={__dyn:c('ServerJSDefine').getLoadedModuleHash(),__req:(k++).toString(36),__ajax__:1,__a:1,__user:c('CurrentUser').getID()};j.setData.call(this,babelHelpers['extends']({},n,o));}l.prototype.send=function(){'use strict';if(!c('isFacebookURI')(this.getURI()))return j.send.call(this);if(c('DTSG').getCachedToken){var m=c('DTSG').getCachedToken();if(m){return this.sendOnDTSGToken(m);}else{c('DTSG').getToken().done(function(n){return this.sendOnDTSGToken(n);}.bind(this));return this;}}else this.sendOnDTSGToken(c('DTSG').getToken());};l.prototype.sendOnDTSGToken=function(m){'use strict';if(m)j.setData.call(this,babelHelpers['extends']({},this.getData(),{fb_dtsg:m}));return j.send.call(this);};l.prototype.setData=function(m){'use strict';h(0);};l.parseResponse=function(m){'use strict';return JSON.parse(m.substr(9));};l.getPayload=function(m){'use strict';var n=l.parseResponse(m).payload;return n.payload?n.payload:n;};f.exports=l;}),null);
__d("XFantailLogController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/ajax\/fantail\/",{service:{type:"String",required:true}});}),null);
__d('FantailLogQueue',['ChannelClientID','CircularBuffer','destroyOnUnload','FantailConfig','PHPQuerySerializer','setIntervalAcrossTransitions','SimpleFBAuthenticatedXHRRequest','sprintf','XFantailLogController'],(function a(b,c,d,e,f,g){var h={DEBUG:'debug',INFO:'info',WARN:'warn',ERROR:'error'};function i(j){'use strict';this.$FantailLogQueue2=j;this.$FantailLogQueue3=new (c('CircularBuffer'))(c('FantailConfig').queueSize||200);c('setIntervalAcrossTransitions')(this.$FantailLogQueue4.bind(this),c('FantailConfig').flushInterval||30*1000);c('destroyOnUnload')(this.$FantailLogQueue4.bind(this));}i.get=function(j){'use strict';i.$FantailLogQueue1=i.$FantailLogQueue1||{};i.$FantailLogQueue1[j]=i.$FantailLogQueue1[j]||new i(j);return i.$FantailLogQueue1[j];};i.prototype.debug=function(j){'use strict';for(var k=arguments.length,l=Array(k>1?k-1:0),m=1;m<k;m++)l[m-1]=arguments[m];this.$FantailLogQueue5.apply(this,[h.DEBUG,j].concat(l));};i.prototype.info=function(j){'use strict';for(var k=arguments.length,l=Array(k>1?k-1:0),m=1;m<k;m++)l[m-1]=arguments[m];this.$FantailLogQueue5.apply(this,[h.INFO,j].concat(l));};i.prototype.warn=function(j){'use strict';for(var k=arguments.length,l=Array(k>1?k-1:0),m=1;m<k;m++)l[m-1]=arguments[m];this.$FantailLogQueue5.apply(this,[h.WARN,j].concat(l));};i.prototype.error=function(j){'use strict';for(var k=arguments.length,l=Array(k>1?k-1:0),m=1;m<k;m++)l[m-1]=arguments[m];this.$FantailLogQueue5.apply(this,[h.ERROR,j].concat(l));};i.prototype.$FantailLogQueue5=function(j,k){'use strict';for(var l=arguments.length,m=Array(l>2?l-2:0),n=2;n<l;n++)m[n-2]=arguments[n];var o=c('sprintf').apply(undefined,[k].concat(m));this.$FantailLogQueue3.write({log_time:Date.now(),log:o,severity:j,device_id:c('ChannelClientID').getID()});};i.prototype.$FantailLogQueue4=function(){'use strict';var j=this.$FantailLogQueue3.read();if(j.length>0){var k={log_time:[],log:[],severity:[],device_id:[]};j.forEach(function(m){k.log_time.push(m.log_time);k.log.push(m.log);k.severity.push(m.severity);k.device_id.push(m.device_id);});this.$FantailLogQueue3.clear();var l=c('XFantailLogController').getURIBuilder().setString('service',this.$FantailLogQueue2).getURI();new (c('SimpleFBAuthenticatedXHRRequest'))(l,k).setMethod('POST').setDataSerializer(c('PHPQuerySerializer').serialize).setRequestHeader('Content-Type','application/x-www-form-urlencoded').send();}};f.exports=i;}),null);
__d('ReactSpeedHelper',['LogBuffer','ReactDOM'],(function a(b,c,d,e,f,g){var h={enableRenderMeasurements:function i(){if(!c('ReactDOM').enableRenderMeasurements)return;c('ReactDOM').enableRenderMeasurements();},getMetrics:function i(j,k){return c('LogBuffer').read('react_speed').filter(function(l){return (j==null||l.begin>=j)&&(k==null||l.end<=k);});}};f.exports=h;}),null);
__d('sourceMetaToString',[],(function a(b,c,d,e,f,g){function h(i,j){var k;if(i.name){k=i.name;if(i.module)k=i.module+'.'+k;}else if(i.module)k=i.module+'.<anonymous>';if(j&&i.line){k=(k?k:'<anonymous>')+':'+i.line;if(i.column)k+=':'+i.column;}return k;}f.exports=h;}),null);
__d('NavigationTimingHelper',['NavigationMetricsEnumJS','forEachObject','performance'],(function a(b,c,d,e,f,g){function h(j,k){var l={};c('forEachObject')(c('NavigationMetricsEnumJS'),function(m){var n=k[m];if(n)l[m]=n+j;});return l;}var i={getAsyncRequestTimings:function j(k){if(!k||!c('performance').timing||!c('performance').getEntriesByName)return undefined;var l=c('performance').getEntriesByName(k);if(l.length===0)return undefined;return h(c('performance').timing.navigationStart,l[0]);},getNavTimings:function j(){if(!c('performance').timing)return undefined;return h(0,c('performance').timing);}};f.exports=i;}),null);
__d('ResourceTimingBootloaderHelper',['Bootloader','ResourceTimingMetricsEnumJS','ImageTimingHelper','URI','forEachObject','isEmpty','performance','Map','Set'],(function a(b,c,d,e,f,g){var h=500,i=[],j={},k={},l={},m=['.mp4','.m4v','.mpd','m4a'],n=new (c('Set'))(['bootload','js_exec','start_bootload','tag_bootload']);function o(w){for(var x=m,y=Array.isArray(x),z=0,x=y?x:x[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var aa;if(y){if(z>=x.length)break;aa=x[z++];}else{z=x.next();if(z.done)break;aa=z.value;}var ba=aa;if(w.endsWith(ba))return true;}return false;}function p(w,x,y,z,aa,ba){if(!c('performance').timing||!c('performance').getEntriesByType)return;var ca={};if(y)ca=c('ImageTimingHelper').getImageTimings(z).sort(function(wa,xa){return wa.ts-xa.ts;}).reduce(function(wa,xa){if(wa[xa.uri])return wa;wa[xa.uri]=xa.pagelet;return wa;},{});var da=c('performance').getEntriesByType('resource'),ea=0,fa=0,ga=0,ha=0;for(var ia=0;ia<da.length;ia++){var ja=da[ia];if(ja.duration<=0||ja.startTime<x||aa!=null&&ja.responseEnd!=null&&aa<ja.responseEnd)continue;var ka='',la='',ma='',na='',oa='',pa=ja.initiatorType;switch(pa){case 'css':case 'link':case 'script':var qa=t(ja.name);la=qa[0];ka=qa[1];if(!la||!ka)continue;if(ka==='css'||ka==='js'){na=ka;var ra=l[ja.name]||fa++;ma=ra+'_'+la;}else{var sa=s(ja.name);oa=sa[0];na=sa[1];ma=ea+++'_'+oa;}break;case 'img':ma=ea+++'_'+q(ja.name);na='img';break;case 'iframe':ma=ga+++'_'+q(ja.name)+r(ja.name);na='iframe';break;case 'xmlhttprequest':if(ba){var ta=q(ja.name),ua=r(ja.name);if(o(ua)){ma=ha+++'_'+ta+ua;na='video';break;}}default:continue;}if(w[ja.name]==undefined)w[ja.name]=[];var va={};c('forEachObject')(c('ResourceTimingMetricsEnumJS'),function(wa){var xa=ja[wa];if(xa)va[wa]=xa+c('performance').timing.navigationStart;});va.type=na;va.desc=ma;if(na=='img'&&Object.prototype.hasOwnProperty.call(ca,ja.name))va.pagelet=ca[ja.name];va.transferSize=ja.transferSize;va.encodedBodySize=ja.encodedBodySize;w[ja.name].push(va);}}function q(w){var x=new (c('URI'))(w).getDomain();return x;}function r(w){var x=new (c('URI'))(w).getPath();return x;}function s(w){return [q(w),'img'];}function t(w){var x=w.match(/\/rsrc\.php\/.*\/([^\?]+)/);if(!x)return [];var y=x[1],z='',aa=y.match(/\.(\w+)$/);if(aa)z=aa[1];return [y,z];}function u(w){var x=Object.keys(w).filter(function(z){return z.startsWith('start_bootload/');}).sort(function(z,aa){return w[z]-w[aa];}).map(function(z){return z.substring(z.indexOf('/')+1);});x.forEach(function(z){return n.forEach(function(aa){var ba=aa+'/'+z;if(w[ba]!=null)j[ba]=w[ba];});});i=i.concat(x);if(i.length>h){var y=i.splice(0,i.length-h);y.forEach(function(z){return n.forEach(function(aa){if(j[aa+'/'+z])delete j[aa+'/'+z];});});}}var v={addPastBootloaderMetricsToResourceTimings:function w(){var x=arguments.length<=0||arguments[0]===undefined?{}:arguments[0],y=arguments.length<=1||arguments[1]===undefined?{}:arguments[1],z=c('Bootloader').getURLToHashMap();c('forEachObject')(x,function(aa,ba){var ca=z[ba];if(!ca)return;var da=new (c('Map'))();da.set('bootloader_hash',ca);n.forEach(function(ea){var fa=ea+'/'+ca,ga=y[fa]||j[fa];if(ga!=null)da.set(ea,ga);});if(da.size>0)aa.forEach(function(ea){return da.forEach(function(fa,ga){return ea[ga]=fa;});});});},mergeBootloaderMetricsAndResourceTimings:function w(){var x=arguments.length<=0||arguments[0]===undefined?{}:arguments[0],y=arguments.length<=1||arguments[1]===undefined?{}:arguments[1],z=arguments.length<=2||arguments[2]===undefined?true:arguments[2];if(c('isEmpty')(l))l=c('Bootloader').getURLToHashMap();var aa=new (c('Map'))();c('forEachObject')(l,function(ca,da){aa.set(ca,da);});var ba=[];c('forEachObject')(y,function(ca,da){var ea=da.indexOf('/');if(ea===-1)return;var fa=da.substring(0,ea);if(!n.has(fa))return;ba.push(da);var ga=da.substring(ea+1),ha=aa.get(ga);if(!ha){ha=ga;ga=l[ha];if(!ga)return;}if(ha.startsWith('data:'))ha='inlined resource: '+ga;if(x[ha]==null)x[ha]=[{}];x[ha].forEach(function(ia){ia.bootloader_hash=ga;ia[fa]=ca;});});if(!z){u(y);ba.forEach(function(ca){return delete y[ca];});}return x;},getLastTTIAndE2EImageResponseEnds:function w(x,y,z){var aa={TTI:x,E2E:y};if(!c('performance').timing)return aa;var ba=z.filter(function(ea){return ea.ts<=x;}).map(function(ea){return ea.uri;}).reduce(function(ea,fa){ea[fa]=true;return ea;},{}),ca=z.map(function(ea){return ea.uri;}).reduce(function(ea,fa){ea[fa]=true;return ea;},{});for(var da in k)k[da].forEach(function(ea){if(ea.type==='img'){if(ba[da])aa.TTI=Math.max(aa.TTI,ea.responseEnd);if(ca[da])aa.E2E=Math.max(aa.E2E,ea.responseEnd);}});return aa;},getMetrics:function w(x,y,z,aa,ba){k={};if(c('isEmpty')(l))l=c('Bootloader').getURLToHashMap();p(k,x,y,z,aa,ba);return k;}};f.exports=v;}),null);
__d('TimeSliceHelper',['LogBuffer','Map','ProfilingCounters','ReactSpeedHelper','sourceMetaToString'],(function a(b,c,d,e,f,g){var h=function k(l,m){return Math.round((l-m)*1000);},i={shouldIncludeRefTreeIds:false,counterFunction:function k(l){return l.getNestedTotals();}},j={formatMetricsForTransport:function k(l){var m=[],n=[],o=[],p=[],q=new (c('Map'))(),r=new (c('Map'))(),s=0,t=function v(w,x,y){var z=void 0;if(x.has(w)){z=x.get(w);}else{z=y.length;x.set(w,z);y.push(w);}return z;},u=[];if(l!=null)l.forEach(function(v){var w=h(v.begin,s),x=h(v.end,v.begin);s=v.end;var y=t(v.name,q,m),z=[w,x,y];if(v.activeRefTreeIds!=null){var aa=v.activeRefTreeIds.slice();aa.unshift(u.length);p.push(aa);}var ba=v.counters||{},ca=Object.keys(ba).filter(function(ga){return ba[ga]!==0;}).sort(),da=void 0;if(ca.length>0){var ea=ca.join(),fa=t(ea,r,o);da=ca.map(function(ga){return ba[ga];});da.unshift(fa);}else da=[];if(v.id)z.push(v.id);if(v.parentID)z.push(v.parentID);u.push(z);n.push(da);});return {version:'compact',items:u,names:m,counters:n,counterSchemas:o,allActiveRefTreeIds:p};},getMetrics:function k(l,m,n,o,p){if(p==null){p=i;}else p=babelHelpers['extends']({},i,p);var q=p,r=q.counterFunction,s=q.shouldIncludeRefTreeIds,t=c('LogBuffer').read('time_slice'),u=c('LogBuffer').read('time_slice_heartbeat'),v=c('ReactSpeedHelper').getMetrics().map(function(ba){return babelHelpers['extends']({},ba,{desc:'React['+ba.name+']'});}),w=t.concat(u,v),x=void 0,y=[],z=function ba(ca){var da=void 0;if(ca.guard!=null){var ea=c('sourceMetaToString')(ca),fa=ca.guard.toString();da=ea?fa+' at '+ea:fa;}else if(ca.desc){da=ca.desc;}else da='JS['+ca.count+']';var ga=ca.counters!=null?r(ca.counters):null,ha={begin:ca.begin,end:ca.end,name:da,counters:ga,activeRefTreeIds:s?ca.activeRefTreeIds:[]};ha.id=ca.id;ha.parentID=ca.parentID;y.push(ha);},aa=function ba(){if(x)if(x.count>1){var ca=babelHelpers['extends']({},x,{counters:c('ProfilingCounters').wrapInSingleContext(x.contextsToBeMerged)});z(ca);}else z(x.first);x=null;};w.sort(function(ba,ca){if(ba.begin!==ca.begin){return ba.begin-ca.begin;}else if(ba.end!==ca.end){return ba.end-ca.end;}else return 0;}).forEach(function(ba){if(l&&ba.end<l||m&&ba.begin>m)return;if(ba.end-ba.begin<n){if(x&&ba.begin-x.end<o){x.end=ba.end;x.count++;if(ba.counters!=null)x.contextsToBeMerged.push(ba.counters);if(ba.activeRefTreeIds)x.activeRefTreeIds.concat(ba.activeRefTreeIds);}else{aa();x={begin:ba.begin,end:ba.end,count:1,first:ba,guard:false,id:undefined,parentID:undefined,contextsToBeMerged:[],activeRefTreeIds:[],counters:null};}}else{aa();z(ba);}});aa();return y;}};f.exports=j;}),null);
__d('PerfXFlusher',['invariant','Banzai'],(function a(b,c,d,e,f,g,h){var i='perfx_custom_logger_endpoint',j=['perfx_page','perfx_page_type','lid'];function k(m){j.forEach(function(n){return h(n in m,'PerfXFlusher: Field "%s" missing in the PerfX payload',n);});}var l={flush:function m(n){k(n);c('Banzai').post(i,n,{signal:true});},registerToSendWithBeacon:function m(n){c('Banzai').registerToSendWithBeacon(i,n);}};f.exports=l;}),null);
__d("pageLoadedViaSWCache",[],(function a(b,c,d,e,f,g){function h(){return self.__SW_CACHE__===1;}f.exports=h;}),null);
__d('PerfXLogger',['DataAttributeUtils','PerfXFlusher','NavigationMetrics','NavigationTimingHelper','Set','forEachObject','performanceAbsoluteNow','setTimeoutAcrossTransitions','pageLoadedViaSWCache'],(function a(b,c,d,e,f,g){var h={},i={},j=65*1000,k=['e2e','tti','all_pagelets_displayed','all_pagelets_loaded'],l={},m={_listenersSetUp:false,_setupListeners:function n(){if(this._listenersSetUp)return;this._subscribeToNavigationMetrics();c('PerfXFlusher').registerToSendWithBeacon(function(){var o=[];c('forEachObject')(h,function(p,q){if(!h[q].sent){var r=this.getPayload(q,'unload fired');if(r!=null)o.push(r);}}.bind(this));h={};return o;}.bind(this));this._listenersSetUp=true;},_init:function n(o){var p=o.lid;if(p==null)return;var q=i[p]||[];delete i[p];if(o.sw_controlled_tags){if(navigator.serviceWorker&&navigator.serviceWorker.controller)for(var r=0;r<o.sw_controlled_tags.length;r++)q.push(o.sw_controlled_tags[r]);delete o.sw_controlled_tags;}h[p]=babelHelpers['extends']({tags:new (c('Set'))(q),sent:false},o);this._registerTimeoutSendback(p);this._setupListeners();},initWithNavigationMetricsLID:function n(o,p){var q=c('NavigationMetrics').getFullPageLoadLid();if(!q)return;this._init(babelHelpers['extends']({},p,{lid:q}));if(o&&o.always)for(var r=0;r<o.always.length;r++)m.addTag(q,o.always[r]);if(o&&o.swCache&&c('pageLoadedViaSWCache')())for(var s=0;s<o.swCache.length;s++)m.addTag(q,o.swCache[s]);},init:function n(o,p){if(p!=null&&o.lid!=null)l[o.lid]=p;this._init(o);},addTag:function n(o,p){var q=h[o];if(q){q.tags.add(p);return;}if(!i[o])i[o]=[];i[o].push(p);},addTagWithNavigationMetricsLID:function n(o){var p=c('NavigationMetrics').getFullPageLoadLid();if(!p)return;m.addTag(p,o);},_registerTimeoutSendback:function n(o){var p=this._getFetchStart(o),q=j;if(p!=null)q-=c('performanceAbsoluteNow')()-p;c('setTimeoutAcrossTransitions')(function(){return this._uploadPayload(o,'sendback time out');}.bind(this),q);},_subscribeToNavigationMetrics:function n(){c('NavigationMetrics').addRetroactiveListener(c('NavigationMetrics').Events.EVENT_OCCURRED,function(o,p){if(!(o in h))return;if(k.includes(p.event)&&Object.prototype.hasOwnProperty.call(p,'timestamp')&&p.timestamp!=null){h[o][p.event]=p.timestamp;if(p.visibilityState)h[o][p.event+'_page_visibility']=p.visibilityState;}});c('NavigationMetrics').addRetroactiveListener(c('NavigationMetrics').Events.NAVIGATION_DONE,function(o,p){var q=p.serverLID;if(!(q in h))return;k.forEach(function(event){if(Object.prototype.hasOwnProperty.call(p,event)&&p[event]!=null)h[q][event]=p[event];});this._uploadPayload(q);}.bind(this));},_getPayloadWithOffset:function n(o,p,q){var r=h[o];if(r==null)return null;var s=Object.assign({},r),t=document.querySelector('[id^="hyperfeed_story_id"]');if(t){var u=JSON.parse(c('DataAttributeUtils').getDataFt(t));if(u)s.mf_query_id=u.qid;}s.tags=Array.from(r.tags);this._adjustValues(s,p);s.fetch_start=p;if(s.perfx_page_type==='normal'){var v=c('NavigationTimingHelper').getNavTimings();if(v!=null&&v.navigationStart!=null)s.nav_to_fetch=p-v.navigationStart;}if(q!=null)s.sendback_reason=q;delete s.sent;return s;},_uploadPayload:function n(o,p){if(h[o]!=null&&!h[o].sent){var q=this.getPayload(o,p);if(q!=null){c('PerfXFlusher').flush(q);h[o].sent=true;}}},getPayload:function n(o,p){return this._getPayloadWithOffset(o,this._getFetchStart(o),p);},_getFetchStart:function n(o){if(!(o in h))return null;var p=void 0,q=h[o].perfx_page_type;if(q=='quickling'){if(!(o in l)){return null;}else p=c('NavigationTimingHelper').getAsyncRequestTimings(l[o]);}else p=c('NavigationTimingHelper').getNavTimings();if(!p||!p.fetchStart)return null;return p.fetchStart;},_adjustValues:function n(o,p){k.forEach(function(q){if(Object.prototype.hasOwnProperty.call(o,q))o[q]-=p;});}};f.exports=m;}),null);