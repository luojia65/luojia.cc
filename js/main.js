// build time:Thu Jun 21 2018 11:07:49 GMT+0800 (GMT+08:00)
require([],function(){var i=false;var e=function(){require([yiliaConfig.rootUrl+"js/mobile.js"],function(e){e.init();i=true})};var a=false;var n=function(){require([yiliaConfig.rootUrl+"js/pc.js"],function(i){i.init();a=true})};var r={versions:function(){var i=window.navigator.userAgent;return{trident:i.indexOf("Trident")>-1,presto:i.indexOf("Presto")>-1,webKit:i.indexOf("AppleWebKit")>-1,gecko:i.indexOf("Gecko")>-1&&i.indexOf("KHTML")==-1,mobile:!!i.match(/AppleWebKit.*Mobile.*/),ios:!!i.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:i.indexOf("Android")>-1||i.indexOf("Linux")>-1,iPhone:i.indexOf("iPhone")>-1||i.indexOf("Mac")>-1,iPad:i.indexOf("iPad")>-1,webApp:i.indexOf("Safari")==-1,weixin:i.indexOf("MicroMessenger")==-1}}()};$(window).bind("resize",function(){if(i&&a){$(window).unbind("resize");return}var r=$(window).width();if(r>=700){n()}else{e()}});if(r.versions.mobile===true||$(window).width()<700){e()}else{n()}if(yiliaConfig.fancybox===true){require([yiliaConfig.rootUrl+"fancybox/jquery.fancybox.js"],function(i){var e=$(".isFancy");if(e.length!=0){var a=$(".article-inner img");for(var n=0,r=a.length;n<r;n++){var t=a.eq(n).attr("src");var o=a.eq(n).attr("alt");a.eq(n).replaceWith("<a href='"+t+"' title='"+o+"' rel='fancy-group' class='fancy-ctn fancybox'><img src='"+t+"' title='"+o+"'></a>")}$(".article-inner .fancy-ctn").fancybox()}})}if(yiliaConfig.animate===true){require([yiliaConfig.rootUrl+"js/jquery.lazyload.js"],function(){$(".js-avatar").attr("src",$(".js-avatar").attr("lazy-src"));$(".js-avatar")[0].onload=function(){$(".js-avatar").addClass("show")}});if(yiliaConfig.isHome===true){require(["//cdn.bootcss.com/scrollReveal.js/3.0.5/scrollreveal.js"],function(i){var e=["pulse","fadeIn","fadeInRight","flipInX","lightSpeedIn","rotateInUpLeft","slideInUp","zoomIn"],a=e.length,n=e[Math.ceil(Math.random()*a)-1];if(!window.requestAnimationFrame){$(".body-wrap > article").css({opacity:1});if(navigator.userAgent.match(/Safari/i)){function r(){$(".article").each(function(){if($(this).offset().top<=$(window).scrollTop()+$(window).height()&&!$(this).hasClass("show")){$(this).removeClass("hidden").addClass("show");$(this).addClass("is-hiddened")}else{if(!$(this).hasClass("is-hiddened")){$(this).addClass("hidden")}}})}$(window).on("scroll",function(){r()});r()}return}i({duration:0,afterReveal:function(i){$(i).addClass("animated "+n).css({opacity:1})}}).reveal(".body-wrap > article")})}else{$(".body-wrap > article").css({opacity:1})}}if(yiliaConfig.open_in_new==true){$(".article a[href]").attr("target","_blank")}$(".archive-article-title").attr("target","_blank")});
//rebuild by neat 