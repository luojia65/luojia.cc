// build time:Thu Jun 21 2018 10:47:06 GMT+0800 (GMT+08:00)
$(document).ready(function(){var e=$(".share-button"),a=$(".share-toggle-button"),s=false,n=e.length,t=n/2,c=75;function o(){TweenMax.to(a,.1,{scaleX:1.2,scaleY:.6,ease:Quad.easeOut,onComplete:function(){TweenMax.to(a,.8,{scale:.6,ease:Elastic.easeOut,easeParams:[1.1,.6]});TweenMax.to(a.children(".share-icon"),.8,{scale:1.4,ease:Elastic.easeOut,easeParams:[1.1,.6]})}});e.each(function(e){var a=$(this);var s=e-t;if(s>=0)s+=1;var n=Math.abs(s);a.css({zIndex:t-n});TweenMax.to(a,1.1*n,{x:s*c,scaleY:.6,scaleX:1.1,ease:Elastic.easeOut,easeParams:[1.01,.5]});TweenMax.to(a,.8,{delay:.2*n-.1,scale:.6,ease:Elastic.easeOut,easeParams:[1.1,.6]});TweenMax.fromTo(a.children(".share-icon"),.2,{scale:0},{delay:.2*n-.1,scale:1,ease:Quad.easeInOut})})}function l(){TweenMax.to([a,a.children(".share-icon")],1.4,{delay:.1,scale:1,ease:Elastic.easeOut,easeParams:[1.1,.3]});e.each(function(e){var a=$(this);var s=e-t;if(s>=0)s+=1;var n=Math.abs(s);a.css({zIndex:n});TweenMax.to(a,.4+(t-n)*.1,{x:0,scale:.95,ease:Quad.easeInOut});TweenMax.to(a.children(".share-icon"),.2,{scale:0,ease:Quad.easeIn})})}function i(){s=!s;s?o():l()}a.on("mousedown",function(){i()})});
//rebuild by neat 