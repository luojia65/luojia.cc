// build time:Fri Jun 22 2018 08:03:37 GMT+0800 (GMT+08:00)
define([],function(){var e=false;var t,n,i;var a,d,s,o,l;var r=function(){d=document.body.scrollHeight/document.body.scrollWidth;s=document.body.scrollWidth;o=0};var c=function(){if(t){document.getElementById("js-mobile-tagcloud").innerHTML=t.innerHTML}if(n){document.getElementById("js-mobile-aboutme").innerHTML=n.innerHTML}if(i){document.getElementById("js-mobile-friends").innerHTML=i.innerHTML}};var m=function(){var e=document.createElement("div");e.id="viewer";e.className="hide";t=document.getElementById("js-tagcloud");n=document.getElementById("js-aboutme");i=document.getElementById("js-friends");var a=t?'<span class="viewer-title">标签</span><div class="viewer-div tagcloud" id="js-mobile-tagcloud"></div>':"";var d=i?'<span class="viewer-title">友情链接</span><div class="viewer-div friends" id="js-mobile-friends"></div>':"";var s=n?'<span class="viewer-title">关于我</span><div class="viewer-div aboutme" id="js-mobile-aboutme"></div>':"";e.innerHTML='<div id="viewer-box">        <div class="viewer-box-l">            <div class="viewer-box-wrap">'+s+d+a+'</div>        </div>        <div class="viewer-box-r"></div>        </div>';document.getElementsByTagName("body")[0].appendChild(e);var o=document.getElementById("viewer-box");l=o;o.style.height=document.body.scrollHeight+"px"};var v=function(t,n){document.getElementById("viewer").className="";setTimeout(function(){l.className="anm-swipe"},0);e=true;document.ontouchstart=function(e){if(e.target.tagName!="A"){return false}}};var u=function(){document.getElementById("viewer-box").className="";e=false;document.ontouchstart=function(){return true}};var f=function(){var t=t;document.getElementById("viewer-box").addEventListener("webkitTransitionEnd",function(){if(e==false){document.getElementById("viewer").className="hide";e=true}else{}},false);a.addEventListener("touchend",function(){v()},false);var n=document.getElementsByClassName("viewer-box-r")[0];var i;var d;n.addEventListener("touchstart",function(){i=+new Date},false);n.addEventListener("touchend",function(){d=+new Date;if(d-i<300){u()}i=0;d=0},false);var s=$("#mobile-nav .overlay");var o=$(".js-mobile-header");window.onscroll=function(){var e=document.documentElement.scrollTop+document.body.scrollTop;if(e>=69){s.addClass("fixed")}else{s.removeClass("fixed")}if(e>=160){o.removeClass("hide").addClass("fixed")}else{o.addClass("hide").removeClass("fixed")}};o[0].addEventListener("touchstart",function(){$("html, body").animate({scrollTop:0},"slow")},false)};var g=function(){var e=$(".tagcloud a");e.css({"font-size":"12px"});for(var t=0,n=e.length;t<n;t++){var i=e.eq(t).html().length%5+1;e[t].className="";e.eq(t).addClass("color"+i)}};return{init:function(){a=document.getElementsByClassName("slider-trigger")[0];r();m();c();f();g()}}});
//rebuild by neat 