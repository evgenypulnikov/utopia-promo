!function(){"use strict";var e=document.querySelector(".gallery__slider-dots"),t=e.querySelectorAll(".gallery__slider-dot"),l=document.querySelectorAll(".gallery__slide"),n=document.querySelector(".gallery__slider-nav-button_to_prev"),r=document.querySelector(".gallery__slider-nav-button_to_next"),s=1,i=document.querySelector(".events__slider-dots"),c=i.querySelectorAll(".events__slider-dot"),o=document.querySelectorAll(".events__slide"),a=document.querySelector(".events__slider-nav-button_to_prev"),_=document.querySelector(".events__slider-nav-button_to_next"),d=1;function v(e){e<1?d=o.length:e>o.length&&(d=1);for(var t=0;t<o.length;t++)o[t].classList.remove("events__slide_is_active");for(var l=0;l<c.length;l++)c[l].classList.remove("events__slider-dot_is_active");o[d-1].classList.add("events__slide_is_active"),c[d-1].classList.add("events__slider-dot_is_active")}function u(e){v(d+=e)}function f(e){e<1?s=l.length:e>l.length&&(s=1);for(var n=0;n<l.length;n++)l[n].classList.remove("gallery__slide_is_active");for(var r=0;r<t.length;r++)t[r].classList.remove("gallery__slider-dot_is_active");l[s-1].classList.add("gallery__slide_is_active"),t[s-1].classList.add("gallery__slider-dot_is_active")}a.addEventListener("click",(function(){u(-1)})),_.addEventListener("click",(function(){u(1)})),i.addEventListener("click",(function(e){for(var t=0;t<c.length+1;t++)e.target.classList.contains("events__slider-dot")&&e.target==c[t-1]&&v(d=t)}));var g=0;function y(){clearInterval(g),g=setInterval((function(){f(++s)}),4e3)}function L(e){f(s+=e)}y(),n.addEventListener("click",(function(){L(-1),y()})),r.addEventListener("click",(function(){L(1),y()})),e.addEventListener("click",(function(e){for(var l=0;l<t.length+1;l++)e.target.classList.contains("gallery__slider-dot")&&e.target==t[l-1]&&(f(s=l),y())})),document.querySelectorAll('a[href^="#"]').forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})}))}))}();