!function(){"use strict";document.querySelector(".gallery__slider");var e=document.querySelector(".gallery__slider-dots"),t=e.querySelectorAll(".gallery__slider-dot"),l=document.querySelectorAll(".gallery__slide"),r=(document.querySelector(".gallery__slider-menu"),document.querySelector(".gallery__slider-nav-button_to_prev")),n=document.querySelector(".gallery__slider-nav-button_to_next"),o=(document.querySelector(".gallery__slider-toggle"),document.querySelector(".gallery__text-toggle"),document.querySelector(".gallery__container"),1),c=(document.querySelector(".events__slider"),document.querySelector(".events__slider-dots")),s=c.querySelectorAll(".events__slider-dot"),i=document.querySelectorAll(".events__slide"),d=(document.querySelector(".events__slider-menu"),document.querySelector(".events__slider-nav-button_to_prev")),_=document.querySelector(".events__slider-nav-button_to_next"),a=(document.querySelector(".events__slider-toggle"),document.querySelector(".events__text-toggle"),document.querySelector(".events__container"),1);function u(e){e<1?a=i.length:e>i.length&&(a=1);for(var t=0;t<i.length;t++)i[t].classList.remove("events__slide_active");for(var l=0;l<s.length;l++)s[l].classList.remove("events__slider-dot_active");i[a-1].classList.add("events__slide_active"),s[a-1].classList.add("events__slider-dot_active")}function v(e){u(a+=e)}function g(e){e<1?o=l.length:e>l.length&&(o=1);for(var r=0;r<l.length;r++)l[r].classList.remove("gallery__slide_active");for(var n=0;n<t.length;n++)t[n].classList.remove("gallery__slider-dot_active");l[o-1].classList.add("gallery__slide_active"),t[o-1].classList.add("gallery__slider-dot_active")}d.addEventListener("click",(function(){v(-1)})),_.addEventListener("click",(function(){v(1)})),c.addEventListener("click",(function(e){for(var t=0;t<s.length+1;t++)e.target.classList.contains("events__slider-dot")&&e.target==s[t-1]&&u(a=t)}));var y=0;function m(){clearInterval(y),y=setInterval((function(){g(++o)}),4e3)}function f(e){g(o+=e)}m(),r.addEventListener("click",(function(){f(-1),m()})),n.addEventListener("click",(function(){f(1),m()})),e.addEventListener("click",(function(e){for(var l=0;l<t.length+1;l++)e.target.classList.contains("gallery__slider-dot")&&e.target==t[l-1]&&(g(o=l),m())})),document.querySelectorAll('a[href^="#"]').forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})}))}))}();