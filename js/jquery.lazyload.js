// build time:Thu Jun 21 2018 11:14:48 GMT+0800 (GMT+08:00)
(function(e,r){if(typeof define==="function"&&define.amd){define(["jquery"],r)}else{r(e["jQuery"])}})(this,function(e){e.fn.lazyload=function(r){return this.each(function(){r=r||{};var a={};var i=e.extend({},a,r);var n=e(this);var t=this;var o=r.srcSign||"lazy-src";var c=r.errCallBack||function(){};var f=r.container||e(window);var g=function(e,r){};var l=function(e,r,a,i){if(r[0].src&&(r[0].src.indexOf("img-err.png")>0||r[0].src.indexOf("img-err2.png")>0)){return}var n=r.width();var t=r.height();r[0].src=yiliaConfig.rootUrl+"img/img-err.png";a()};var s=function(e){var r=e.width();var a=e.height();var i=e.offset().top;var n=e.offset().left;var t=e.clone().addClass("lazy-loding").insertBefore(e);t[0].src=yiliaConfig.rootUrl+"img/img-loading.png";e.hide()};var v=function(e,a,i){if(e.attr("src"))return;if(r.cache==true){console.log(e);var n=document.getElementById("canvas1");var t=n.getContext("2d");var o;image=new Image;image.src=e.attr(a);image.onload=function(){t.drawImage(image,0,0);o=t.getImageData(0,0,500,250);console.log(o)}}else{s(e);var c=e.attr(a);e[0].onerror=function(r){l(r,e,i,c)};e[0].onload=function(r){e.parent().find(".lazy-loding").remove();e.show();g(r,e)};e[0].src=c}};i.cache=[];if(t.tagName=="IMG"){var d={obj:n,tag:"img",url:n.attr(o)};i.cache.push(d)}else{var u=n.find("img");u.each(function(r){var a=this.nodeName.toLowerCase(),n=e(this).attr(o);var t={obj:u.eq(r),tag:a,url:n};i.cache.push(t)})}var h=function(){var r=f.height();var a;if(e(window).get(0)===window){a=e(window).scrollTop()}else{a=f.offset().top}e.each(i.cache,function(e,i){var n=i.obj,t=i.tag,f=i.url,g,l;if(n){g=n.offset().top-a,g+n.height();if(g>=0&&g<r||l>0&&l<=r){if(f){if(t==="img"){v(n,o,c)}}i.obj=null}}})};h();f.bind("scroll",h);f.bind("resize",h)})}});
//rebuild by neat 