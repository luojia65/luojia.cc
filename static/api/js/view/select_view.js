// build time:Thu Jun 21 2018 10:39:10 GMT+0800 (GMT+08:00)
window._bd_share_main.F.module("view/select_view",function(e,t,n){var a=e("base/tangram").T,s=e("base/class").Class,i=e("conf/const"),r=e("view/view_base"),o,d,c,l,h=function(e){var t="";return document.selection?t=document.selection.createRange().text:t=document.getSelection(),a.string(t.toString()).trim()},_="getSelection"in document?function(){document.getSelection().removeAllRanges(),l=""}:function(){document.selection.empty(),l=""};t.View=s.create(function(e){function t(){if(e.bdCustomStyle){var t=document.createElement("link");t.href=e.bdCustomStyle,t.rel="styleSheet",t.type="text/css",document.getElementsByTagName("head")[0].appendChild(t)}else window._bd_share_main.F.use("share_style"+u+"_"+b+".css")}function n(e,t){var n=t.bdMini||2,s=t.bdSelectMiniList||r._partnerSort.slice(0,4),i=[];a.each(s,function(e,t){i[e]='<a href="#" class="bds_'+t+'" data-cmd="'+t+'"></a>'}),c.find(".bdselect_share_partners").html(i.join(""))}function s(e,t){var n=e.pageY,s=e.pageX;n+=5,s-=18;var i=o.outerHeight(),r=a(window).scrollTop();if(n+i>a("body").height()&&n+i>a(window).height()||n+i>r+a(window).height())n=e.pageY-i-5,n=n<r?r:n;var d=t.bdPopupOffsetLeft,c=t.bdPopupOffsetTop;if(d||c)n+=c|0,s+=d|0;return{top:n,left:s}}function i(e,t){var n=s(e,t);if(l.length<5){r.hide("less");return}a.each([o,d],function(e,a){a.css({top:n.top,left:n.left}).show(),t.bdText=h()});var i=c.find("a").length,_=a(c.find("a")).outerWidth(!0),u=_*i+20,b=parseInt(o.css("max-width"));b&&u>b&&(u=b),o.width(u),o.find(".bdselect_share_head").width(u),d.width(u),d.height(o.height());var p=o.find(".bdselect_share_dialog_search");p.attr("href","http://www.baidu.com/s?wd="+t.bdText+"&tn=SE_hldp08010_vurs2xrp");var g=m(function(){f("http://s.share.baidu.com/select?"+a.ajax.param({log_type:"click",content:encodeURIComponent(t.bdText)}))},100);p.click(g),u<220?o.find(".bdselect_share_dialog_search_span").hide():o.find(".bdselect_share_dialog_search_span").show(),f("http://s.share.baidu.com/select?"+a.ajax.param({log_type:"show",content:encodeURIComponent(t.bdText)}))}var r=this;r._container=null;var u=e.bdStyle||0,b="|16|24|32|".indexOf("|"+e.bdSize+"|")>-1?e.bdSize:16,p=!1;r._buttonType=0,r.render=function(){var t="bdSharePopup_selectshare"+ +new Date,n=['<iframe frameborder="0" id="'+t+'bg" class="bdselect_share_bg" style="display:none;"></iframe>'].join(""),s=['<div id="'+t+'box" style="display:none;" share-type="selectshare" class="bdselect_share_box">','<div class="selectshare-mod-triangle"><div class="triangle-border"></div><div class="triangle-inset"></div></div>','<div  class="bdselect_share_head" ><span>分享到</span>','<a href="http://www.baidu.com/s?wd='+e.bdText+'&tn=SE_hldp08010_vurs2xrp"',' class="bdselect_share_dialog_search" target="_blank">','<i class="bdselect_share_dialog_search_i"></i>','<span class="bdselect_share_dialog_search_span">百度一下</span></a>','<a class="bdselect_share_dialog_close"></a></div>','<div class="bdselect_share_content" >','<ul class="bdselect_share_list">','<div class="bdselect_share_partners"></div>','<a href="#" class="bds_more"  data-cmd="more"></a>',"</ul>","</div>","</div>"].join("");a("body").insertHTML("beforeEnd",n+s),r._container=o=a("#"+t+"box"),c=o.find(".bdselect_share_list").addClass("bdshare-button-style"+u+"-"+b),d=a("#"+t+"bg"),r._entities.push(o),a(".bdselect_share_dialog_close").click(r.hide)},r.hide=function(e){e||_(),d&&d.hide(),o&&o.hide()},r._init=function(){var n;e.bdContainerClass?n=a("."+e.bdContainerClass):n=a("body").children(),a("body").on("mouseup",function(s){n.each(function(n,i){i==s.target||a(i).contains(s.target)||!e.bdContainerClass&&s.target==document.body?setTimeout(function(){l=h(),t(),r.show(s,e)},10):o.css("display")=="block"&&r.hide()})})},r.show=function(e,t){window._bd_share_main.F.use(["component/partners","share_popup.css","select_share.css"],function(a){r._partnerSort=a.partnerSort,p||(n(r._container,t),p=!0),i(e,t)})};var f=function(){var e={};return function(t){var n="bdsharelog__"+(new Date).getTime(),a=e[n]=new Image;a.onload=a.onerror=function(){e[n]=null},a.src=t+"&t="+(new Date).getTime(),a=null}}(),m=function(e,t,n){var a,s,i,r=null,o=0;n||(n={});var d=function(){o=n.leading===!1?0:new Date,r=null,i=e.apply(a,s),r||(a=s=null)};return function(){var c=new Date;!o&&n.leading===!1&&(o=c);var l=t-(c-o);return a=this,s=arguments,l<=0||l>t?(clearTimeout(r),r=null,o=c,i=e.apply(a,s),r||(a=s=null)):!r&&n.trailing!==!1&&(r=setTimeout(d,l)),i}};r._distory=function(){o.remove(),d.remove()}},r.ViewBase)});
//rebuild by neat 