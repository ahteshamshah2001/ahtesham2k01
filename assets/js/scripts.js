$(function(){"use strict";var e,t,s=$(window);function i(){window.scrollTo(0,0)}$.scrollIt({upKey:38,downKey:40,easing:"swing",scrollTime:600,activeClass:"active",onPageChange:null,topOffset:-80}),$(".navbar .dropdown").hover(function(){$(this).find(".dropdown-menu").addClass("show")},function(){$(this).find(".dropdown-menu").removeClass("show")}),$(".navbar .dropdown-item").hover(function(){$(this).find(".dropdown-side").addClass("show")},function(){$(this).find(".dropdown-side").removeClass("show")}),$(".navbar .search-form").on("click",".search-icon",function(){$(".navbar .search-form").toggleClass("open"),$(".navbar .search-form").hasClass("open")?$(".search-form .close-search").slideDown():$(".search-form .close-search").slideUp()}),$(".navbar").on("click",".navbar-toggler",function(){$(".navbar .navbar-collapse").toggleClass("show")}),s.on("scroll",function(){var e=s.scrollTop(),t=$(".navbar"),i=$(".navbar.change .logo> img");e>300?(t.addClass("nav-scroll"),i.attr("src","assets/imgs/logo-dark.png")):(t.removeClass("nav-scroll"),i.attr("src","assets/imgs/logo-light.png"))}),s.on("scroll",function(){var e=s.scrollTop(),t=$(".topnav");e>300?t.addClass("nav-scroll"):t.removeClass("nav-scroll")});var a=!1,n=$(".topnav.dark"),o=$(".topnav.dark .logo img");$(".topnav .menu-icon").on("click",function(){a=!a,$(".hamenu").toggleClass("open"),a?($(".hamenu").animate({left:0}),$(".topnav .menu-icon").addClass("open"),n.addClass("navlit"),o.attr("src","img/logo-light.png"),window.addEventListener("scroll",i)):($(".hamenu").delay(300).animate({left:"-100%"}),$(".topnav .menu-icon").removeClass("open"),$(".hamenu .menu-links .main-menu .sub-menu").slideUp(),$(".hamenu .menu-links .main-menu .dmenu").removeClass("dopen"),n.removeClass("navlit"),o.attr("src","img/logo-dark.png"),window.removeEventListener("scroll",i))}),$(".hamenu .menu-links .main-menu > li").on("mouseenter",function(){$(this).removeClass("hoverd").siblings().addClass("hoverd")}),$(".hamenu .menu-links .main-menu > li").on("mouseleave",function(){$(this).removeClass("hoverd").siblings().removeClass("hoverd")}),$(".main-menu > li .dmenu").on("click",function(){$(this).parent().parent().find(".sub-menu").toggleClass("sub-open").slideToggle(),$(this).toggleClass("dopen")}),e=new Swiper(".slider-prlx .parallax-slider",{speed:1500,autoplay:{delay:5e3},parallax:!0,loop:!0,on:{init:function(){for(var e=0;e<this.slides.length;e++)$(this.slides[e]).find(".bg-img").attr({"data-swiper-parallax":.75*this.width})},resize:function(){this.update()}},pagination:{el:".slider-prlx .parallax-slider .swiper-pagination",type:"fraction",clickable:!0},navigation:{nextEl:".slider-prlx .parallax-slider .next-ctrl",prevEl:".slider-prlx .parallax-slider .prev-ctrl"}}),t=new Swiper(".showcase-full .parallax-slider",{speed:1500,autoplay:{delay:5e3},parallax:!0,mousewheel:!0,loop:!0,on:{init:function(){for(var e=0;e<this.slides.length;e++)$(this.slides[e]).find(".bg-img").attr({"data-swiper-parallax":.75*this.width})},resize:function(){this.update()}},pagination:{el:".showcase-full .parallax-slider .swiper-pagination",clickable:!0},navigation:{nextEl:".showcase-full .parallax-slider .swiper-button-next",prevEl:".showcase-full .parallax-slider .swiper-button-prev"}}),$(".inter-links-center .links-text li").on("mouseenter",function(){var e=$(this).attr("data-tab");if($(".links-text li").removeClass("current"),$(this).addClass("current"),$(".links-img .img").removeClass("current"),$("#"+e).addClass("current"),$(this).hasClass("current"))return!1}),$(".inter-links-center .links-text li").on("mouseleave",function(){$(".links-text li").removeClass("current"),$(".links-img .img").removeClass("current")}),$(".inter-links-center .links-text li").on("mouseenter",function(){$(this).removeClass("no-active").siblings().addClass("no-active")}),$(".inter-links-center .links-text li").on("mouseleave",function(){$(".inter-links-center .links-text li").removeClass("no-active")}),$(".portfolio.changed-bg .item").on("mouseenter",".img",function(){var e=$(this).attr("data-bgcolor");$(".portfolio.changed-bg").css("background-color",e),$(this).hasClass("chang-text")&&$(".portfolio.changed-bg").addClass("chang-text")}),$(".portfolio.changed-bg .item").on("mouseleave",".img",function(){$(".portfolio.changed-bg").css("background-color","transparent"),$(".portfolio.changed-bg").removeClass("chang-text")}),$(".bg-img, section").each(function(e){$(this).attr("data-background")&&$(this).css("background-image","url("+$(this).data("background")+")")}),$(".bg-solid-color, section").each(function(e){var t=$(this).attr("data-solid-color");$(this).attr("data-solid-color")&&$(this).css("background-color",t)}),$("#tabs .tab-links").on("click",".item-link",function(){var e=$(this).attr("data-tab");$("#tabs .tab-links .item-link").removeClass("current"),$(this).addClass("current"),$(".tab-content").hide(),$("#"+e).show()}),$("#tabs-fade .tab-links").on("click",".item-link",function(){var e=$(this).attr("data-tab");$("#tabs-fade .tab-links .item-link").removeClass("current"),$(this).addClass("current"),$(".tab-content").fadeOut(),$("#"+e).fadeIn()}),$(".accordion").on("click",".title",function(){$(this).next().slideDown(),$(".accordion-info").not($(this).next()).slideUp()}),$(".accordion").on("click",".item",function(){$(this).addClass("active").siblings().removeClass("active")}),$("[data-tooltip-tit]").hover(function(){$('<div class="div-tooltip-tit"></div>').text($(this).attr("data-tooltip-tit")).appendTo("body").fadeIn("slow")},function(){$(".div-tooltip-tit").remove()}).mousemove(function(e){$(".div-tooltip-tit").css({top:e.pageY+10,left:e.pageX+20})}),$("[data-tooltip-sub]").hover(function(){$('<div class="div-tooltip-sub"></div>').text($(this).attr("data-tooltip-sub")).appendTo("body").fadeIn("slow")},function(){$(".div-tooltip-sub").remove()}).mousemove(function(e){$(".div-tooltip-sub").css({top:e.pageY+-15,left:e.pageX+30})});var r=$(".skills-circle .skill"),l=$(this).attr("data-value");$(".skills-circle .skill").each(function(){r.circleProgress({startAngle:-Math.PI/2*1,value:l,thickness:4,size:140,fill:{color:"#ff5e57"}})}),s.on("scroll",function(){$(".skill-progress .progres").each(function(){var e=$(this).offset().top+$(this).outerHeight(),t=$(window).scrollTop()+$(window).height(),s=$(this).attr("data-value");t>e&&$(this).css({width:s})})});let c=document.querySelectorAll(".parallax"),d=0,p=0;document.addEventListener("mousemove",function(e){d=e.clientX,p=e.clientY});let u=null;(function e(){c.forEach(e=>{let t=e.dataset.speed,s=(window.innerWidth/2-d)*t,i=(window.innerHeight/2-p)*t;e.style.transform=`translate3d(${s/10}rem, ${i/10}rem, 0)`}),u=requestAnimationFrame(e)})(),$("#sticky_item").stick_in_parent(),$("a.vid").YouTubePopUp(),$(".parallaxie").parallaxie({speed:.8,size:"cover"}),$(".my-paroller").paroller(),$(".popup-img , .gallery").magnificPopup({delegate:".popimg",type:"image",gallery:{enabled:!0}}),$(".justified-gallery").justifiedGallery({rowHeight:400,lastRow:"nojustify",margins:15}),$(".hover3d").hover3d({selector:".hover3d-child",invert:!0}),$(".number-sec .count").countUp({delay:10,time:500}),Splitting()}),function(){let e=document.querySelectorAll(".hover-this"),t=document.querySelector(".cursor"),s=function(e){let t=this.querySelector(".hover-anim"),{offsetX:s,offsetY:i}=e,{offsetWidth:a,offsetHeight:n}=this;t.style.transform=`translate(${s/a*50-25}px, ${i/n*50-25}px)`,"mouseleave"===e.type&&(t.style.transform="")},i=e=>{let{clientX:s,clientY:i}=e;t.style.left=s+"px",t.style.top=i+"px"};e.forEach(e=>e.addEventListener("mousemove",s)),e.forEach(e=>e.addEventListener("mouseleave",s)),window.addEventListener("mousemove",i),$("a, .cursor-pointer").hover(function(){$(".cursor").addClass("cursor-active")},function(){$(".cursor").removeClass("cursor-active")});let a=document.querySelectorAll(".rolling-text");a.forEach(e=>{let t=e.innerText;e.innerHTML="";let s=document.createElement("div");for(let i of(s.classList.add("block"),t)){let a=document.createElement("span");a.innerText=""===i.trim()?"\xa0":i,a.classList.add("letter"),s.appendChild(a)}e.appendChild(s),e.appendChild(s.cloneNode(!0))}),a.forEach(e=>{e.addEventListener("mouseover",()=>{e.classList.remove("play")})})}(),$(window).on("load",function(){var e=$("body");e.addClass("loaded"),setTimeout(function(){e.removeClass("loaded")},1500);var t=document.getElementsByClassName("thumparallax");new simpleParallax(t,{delay:1,scale:1.2});var s=document.getElementsByClassName("thumparallax-down");new simpleParallax(s,{orientation:"down",delay:1,scale:1.2}),$(".gallery").isotope({itemSelector:".items"});var i=$(".gallery").isotope();$(".filtering").on("click","span",function(){var e=$(this).attr("data-filter");i.isotope({filter:e})}),$(".filtering").on("click","span",function(){$(this).addClass("active").siblings().removeClass("active")}),$("#contact-form").validator(),$("#contact-form").on("submit",function(e){if(!e.isDefaultPrevented())return $.ajax({type:"POST",url:"contact.php",data:$(this).serialize(),success:function(e){var t="alert-"+e.type,s=e.message;t&&s&&($("#contact-form").find(".messages").html('<div class="alert '+t+' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+s+"</div>"),$("#contact-form")[0].reset())}}),!1})}),$(document).ready(function(){"use strict";var e=document.querySelector(".progress-wrap path"),t=e.getTotalLength();e.style.transition=e.style.WebkitTransition="none",e.style.strokeDasharray=t+" "+t,e.style.strokeDashoffset=t,e.getBoundingClientRect(),e.style.transition=e.style.WebkitTransition="stroke-dashoffset 10ms linear";var s=function(){var s=$(window).scrollTop(),i=$(document).height()-$(window).height();e.style.strokeDashoffset=t-s*t/i};s(),$(window).scroll(s),jQuery(window).on("scroll",function(){jQuery(this).scrollTop()>150?jQuery(".progress-wrap").addClass("active-progress"):jQuery(".progress-wrap").removeClass("active-progress")}),jQuery(".progress-wrap").on("click",function(e){return e.preventDefault(),jQuery("html, body").animate({scrollTop:0},550),!1})}),$(window).scroll(function(){var e=$(this).scrollTop();$(".fixed-slider .caption , .fixed-slider .capt .parlx").css({transform:"translate3d(0, "+-(.2*e)+"px, 0)",opacity:1-e/600})}),(wow=new WOW({animateClass:"animated",offset:100})).init(),$(function(){"use strict";var e=$(".fixed-slider").outerHeight();$(".main-content").css({marginTop:e}),$('[data-carousel="swiper"]').each(function(){var e=$(this).find('[data-swiper="container"]').attr("id"),t=$(this).find('[data-swiper="pagination"]').attr("id"),s=$(this).find('[data-swiper="prev"]').attr("id"),i=$(this).find('[data-swiper="next"]').attr("id"),a=$(this).data("items"),n=$(this).data("autoplay"),o=$(this).data("initial"),r=$(this).data("loop"),l=$(this).data("parallax"),c=$(this).data("space"),d=$(this).data("speed"),p=$(this).data("center"),u=$(this).data("effect"),h=$(this).data("direction"),v=$(this).data("mousewheel"),m={};if($(this).hasClass("swiper5"))var m={breakpoints:{0:{slidesPerView:2},640:{slidesPerView:3},768:{slidesPerView:3},1024:{slidesPerView:5}}};if($(this).hasClass("swiper4"))var m={breakpoints:{0:{slidesPerView:1,spaceBetween:10},640:{slidesPerView:2,spaceBetween:30},768:{slidesPerView:3},1024:{slidesPerView:4}}};if($(this).hasClass("blog-carsouel"))var m={breakpoints:{0:{slidesPerView:1},640:{slidesPerView:2},768:{slidesPerView:2},1024:{slidesPerView:3}},navigation:{nextEl:".blog-modern .swiper-button-next",prevEl:".blog-modern .swiper-button-prev"}};if($(this).hasClass("work-crus3"))var m={breakpoints:{0:{slidesPerView:1,spaceBetween:30},640:{slidesPerView:2,spaceBetween:60},768:{slidesPerView:2,spaceBetween:60},1024:{slidesPerView:3}},pagination:{el:".work-carsouel .swiper-pagination",clickable:!0},navigation:{nextEl:".work-carsouel .swiper-button-next",prevEl:".work-carsouel .swiper-button-prev"}};if($(this).hasClass("work-crus2"))var m={breakpoints:{0:{slidesPerView:1,spaceBetween:30},640:{slidesPerView:2,spaceBetween:60},768:{slidesPerView:2,spaceBetween:60},1024:{slidesPerView:2}},pagination:{el:".work-carsouel .swiper-pagination",clickable:!0},navigation:{nextEl:".work-carsouel .swiper-button-next",prevEl:".work-carsouel .swiper-button-prev"}};if($(this).hasClass("work-crsol-clum")||$(this).hasClass("testim-grid"))var m={breakpoints:{0:{slidesPerView:1},640:{slidesPerView:2},768:{slidesPerView:2},1024:{slidesPerView:4}}};if($(this).hasClass("serv-swiper"))var m={breakpoints:{0:{slidesPerView:1},640:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:5}},navigation:{nextEl:".services .swiper-button-next",prevEl:".services .swiper-button-prev"}};if($(this).hasClass("testim-swiper"))var m={pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".testim-controls .swiper-button-next",prevEl:".testim-controls .swiper-button-prev"}};if($(this).hasClass("testim-swiper2"))var m={pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".testim-controls .swiper-button-next",prevEl:".testim-controls .swiper-button-prev"},breakpoints:{0:{slidesPerView:1},640:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:2}}};if($(this).hasClass("testim-swiper3"))var m={pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".testim-controls .swiper-button-next",prevEl:".testim-controls .swiper-button-prev"},breakpoints:{0:{slidesPerView:1},640:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:3}}};if($(this).hasClass("pagination"))var m={pagination:{el:".swiper-pagination",clickable:!0}};a&&(m.slidesPerView=a),n&&(m.autoplay=n),o&&(m.initialSlide=o),p&&(m.centeredSlides=p),r&&(m.loop=r),l&&(m.parallax=l),c&&(m.spaceBetween=c),d&&(m.speed=d),v&&(m.mousewheel=v),u&&(m.effect=u),h&&(m.direction=h),s&&(m.prevButton="#"+s),i&&(m.nextButton="#"+i),t&&(m.pagination="#"+t,m.paginationClickable=!0),e&&new Swiper("#"+e,m)});let t=document.getElementById("svg"),s=gsap.timeline();s.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont",{delay:1.5,y:-100,opacity:0}),s.to(t,{duration:.5,attr:{d:"M0 502S175 272 500 272s500 230 500 230V0H0Z"},ease:"power2.easeIn"}).to(t,{duration:.5,attr:{d:"M0 2S175 1 500 1s500 1 500 1V0H0Z"},ease:"power2.easeOut"}),s.to(".loader-wrap",{y:-1500}),s.to(".loader-wrap",{zIndex:-1,display:"none"}),s.from("header",{y:200},"-=1.5"),s.from("header .container",{y:40,opacity:0,delay:.3},"-=1.5")}),$(function(){if($(window).width()>991){"use strict";var e=$(window);gsap.set(".footer-container",{yPercent:-50});let t=gsap.timeline({paused:!0});t.to(".footer-container",{yPercent:0,ease:"none"}),ScrollTrigger.create({trigger:"main",start:"bottom bottom",end:"+=50%",animation:t,scrub:!0}),e.on("scroll",function(){$(".portfolio-fixed .sub-bg .cont").each(function(){var e=$(this).offset().top+$(this).outerHeight(),t=$(window).scrollTop()+$(window).height(),s=$(this).attr("data-tab");t>e?($("#"+s).addClass("current"),$(this).addClass("current")):($("#"+s).removeClass("current"),$(this).removeClass("current"))})})}}),$(function(){if(991>$(window).width()){"use strict";$(".navbar .navbar-nav").on("click",".nav-link",function(){$(".navbar .navbar-nav .dropdown .dropdown-menu").removeClass("show"),$(this).parent().find(".dropdown-menu").addClass("show")})}});
