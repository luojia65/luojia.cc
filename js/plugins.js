// build time:Fri Jun 22 2018 07:27:02 GMT+0800 (GMT+08:00)
(function(){"use strict";var n=document.getElementsByClassName("plugin");var e=document.getElementById("plugin-list-count");var t=document.getElementById("plugin-search-input");var i=n.length;var a=lunr.Index.load(window.SEARCH_INDEX);function r(n){e.innerHTML=n+(n===1?" item":" items")}function o(n,e){var t=n.classList;if(!t.contains(e)){t.add(e)}}function s(n,e){var t=n.classList;if(t.contains(e)){t.remove(e)}}function u(e){var t=a.search(e);var u=t.length;var c={};var l=0;for(l=0;l<u;l++){c[t[l].ref]=true}for(l=0;l<i;l++){if(c[l]){o(n[l],"on")}else{s(n[l],"on")}}r(u)}function c(){for(var e=0;e<i;e++){o(n[e],"on")}r(n.length)}function l(){var n=location.hash.substring(1);t.value=n;if(n){u(n)}else{c()}}t.addEventListener("input",function(){var n=this.value;if(!n)return c();u(n)});window.addEventListener("hashchange",l);l()})();
//rebuild by neat 