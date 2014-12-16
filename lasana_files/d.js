(function(){ACDParams=function(){this.initialize.apply(this,arguments)};ACDParams.prototype={str:"",initialize:function(){this.str=""},getStr:function(){return this.str},addParams:function(b,i){if(this.str!=""){this.str+="|"}kv=encodeURIComponent(b)+":"+encodeURIComponent(i);this.str+=kv}};ACDServer=function(){this.initialize.apply(this,arguments)};ACDServer.prototype={dmids:"",domain:"",pcUrls:"",spUrl:"",times:"",initialize:function(q,i,b,p){this.dmids=[];this.domain=q;this.pcUrls=i;this.spUrl=b;this.times=p},pushDmid:function(q){var p=false;for(var r in this.dmids){if(this.dmids.hasOwnProperty(r)&&this.dmids[r]===q){p=true}}if(!p){this.dmids.push(q)}},getDmids:function(){return this.dmids},getDomain:function(){return this.domain},getPcUrls:function(){return this.pcUrls},getSpUrl:function(){return this.spUrl},getTimes:function(){return this.times}};ACDServerManager=function(){this.initialize.apply(this,arguments)};ACDServerManager.prototype={svrs:{},initialize:function(){},getServers:function(){return this.svrs},getServerByDomain:function(b){return this.svrs[b]},addDefault:function(b,i){this.svrs[b]=i},addClient:function(q,b,p){var i=this.svrs[p];i.pushDmid(b);this.svrs[p]=i},fixedDmid:function(b,q){for(var p in this.svrs){if(this.svrs.hasOwnProperty(p)===false){break}var i=this.svrs[p];if(i.getDomain()==q){i.pushDmid(b)}}}};bindAcCookie=function(b){var p=b.acDmName;var i=b.acDmSegs;var s=b.acDmDom;var r=b.acDmExp;var q="";for(x=0;x<i.length;++x){q+="|"+i[x]}document.cookie=p+"="+(q.length>0?q.substr(1):"")+";expires="+r.toGMTString()+";path=/;domain="+s};var j=function(){return(/iPhone|iPod|iPad/).test(navigator.userAgent)?true:false};var d=function(b){var i="8762a9ccfe5307e2";return i===b?true:false};var k=function(){return(j())?500:300};var a=function(i){var b=document.createElement("script");b.src=i;b.type="text/javascript";b.charset="UTF-8";document.body.appendChild(b)};var o=function(q){var p=(("https:"==document.location.protocol)?"https://":"http://");var b=(("https:"==document.location.protocol)?"s-spstatic.ameba.jp":"spstatic.ameba.jp");var i=p+b;if(q.origin==(i)){var r=window.localStorage;if(typeof r!="undefined"){r.setItem(q.data.bind_cookie_name,q.data.ac_segs)}}window.removeEventListener("message",o,false)};var n=function(){var z=(("https:"==document.location.protocol)?"https://":"http://");var u=(("https:"==document.location.protocol)?"s-spstatic.ameba.jp":"spstatic.ameba.jp");var w=z+u;var p=w+"/js/dcookie.html";var G={};var H={};var F="c.ameba.d.ad-cloud.jp";if(typeof acdManager=="undefined"){acdManager=new ACDServerManager()}var y=new ACDServer(u,G,p,H);acdManager.addDefault(u,y);if(typeof dmids!="undefined"){for(var D in dmids){if(d(D)){G[D]=z+F+"/seg/";H[D]=k();continue}if(typeof n_dm_id!="undefined"){var C=F.split(".");var A=C[0]+n_dm_id;G[D]=z+A+"."+C.slice(1).join(".")+"/seg/";H[D]=k();continue}if(typeof n_dm_ids!="undefined"&&typeof n_dm_ids[D]!="undefined"){var C=F.split(".");var A=C[0]+n_dm_ids[D];G[D]=z+A+"."+C.slice(1).join(".")+"/seg/";H[D]=k();continue}G[D]=z+F+"/seg/";H[D]=0}}if(typeof dmid!="undefined"&&typeof dmidSingleFixed=="undefined"){dmidSingleFixed=1;acdManager.fixedDmid(dmid,u);G[dmid]=z+F+"/seg/";H[D]=0}if(typeof dmids!="undefined"){for(var B in dmids){var q=dmids[B];if(q==u){acdManager.addClient(y,B,dmids[B])}}}y=acdManager.getServerByDomain(u);var t=y.getDmids();t=t.join(",");var r=t.split(",");var i=y.getPcUrls();var E=y.getSpUrl();var b=y.getTimes();var v;var I=function(){if(v){clearTimeout(v)}var J;if(typeof t_urlAmeba!=="undefined"&&t_urlAmeba!==null){J=encodeURIComponent(t_urlAmeba)}else{J=encodeURIComponent(window.location)}var L;if(typeof t_refAmeba!=="undefined"&&t_refAmeba!==null){L=encodeURIComponent(t_refAmeba)}else{L=document.referrer?encodeURIComponent(document.referrer):""}var R=r.shift();if(R==null){return}if(typeof dc_ids!=="undefined"&&typeof dc_ids[R]!=="undefined"&&j()){return}var N="?dmid="+R+"&ac_df_mode=2&url="+J+"&ref="+L;if(typeof setACDParamsAmeba!="undefined"){var K=new ACDParams();setACDParamsAmeba(K);dparams=K.getStr();N+="&ac_params="+encodeURIComponent(dparams)}else{if(typeof setACDParams!="undefined"){var K=new ACDParams();setACDParams(K);dparams=K.getStr();N+="&ac_params="+encodeURIComponent(dparams)}}if(j()){if(d(R)){}else{var M;if(typeof n_dm_ids!="undefined"&&n_dm_ids[R]!="undefined"){M=n_dm_ids[R];N+="&n_dm_id="+M}if(typeof n_dm_id!="undefined"&&typeof M==="undefined"){N+="&n_dm_id="+n_dm_id}}var J=E;if(window.addEventListener){window.addEventListener("message",o,false)}else{if(win.attachEvent){win.attachEvent("onmessage",o)}}var Q=document.createElement("iframe");var P=Q.style;P.position="absolute";P.left=P.top="-999px";J+=N;Q.src=J;document.body.appendChild(Q)}else{var O=1;if(/Android/.test(navigator.userAgent)==true){O=6}N+="&carriertype="+O;var J=i[R];var T=document.createElement("script");J+=N;T.src=J;document.body.appendChild(T)}var S=b[R];if(S!=="undefine"&&S>0){v=setTimeout(I,S)}else{I()}};I()};if(typeof jss=="undefined"){jss=new Array()}var m=false;var l=(("https:"==document.location.protocol)?"s-spstatic.ameba.jp":"spstatic.ameba.jp");for(var e in jss){if(jss.hasOwnProperty(e)&&jss[e]===l){m=true}}if(m==false){jss.push(l);if(typeof doNotACDActionAmeba=="undefined"||doNotACDActionAmeba==0){if(!!(window.attachEvent&&!window.opera)){(function(){if(document.body==null){document.onreadystatechange=function(){if(document.readyState=="complete"||document.readyState=="loaded"){n()}};return}try{document.documentElement.doScroll("left")}catch(b){setTimeout(arguments.callee,50);return}n()})()}else{if(!!window.opera){var h=parseFloat(window.opera.version());var f=h<9?"load":"DOMContentLoaded";var c=h<9.5?false:true;var g=h<9?window:h<9.5?document:window;g.addEventListener("DOMContentLoaded",n,c)}else{if(!!document.addEventListener){document.addEventListener("DOMContentLoaded",n,true)}}}}}doACDAmeba=function(){n()};if(typeof acDMPAmeba!="undefined"&&acDMPAmeba===1){n()}})();