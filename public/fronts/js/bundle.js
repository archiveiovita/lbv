!function(e){var o={};function t(n){if(o[n])return o[n].exports;var s=o[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var s in e)t.d(n,s,function(o){return e[o]}.bind(null,s));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(e,o,t){t(1),e.exports=t(2)},function(e,o){let t=$("header").height(),n=$(".lightBox"),s=$(n).find(".item"),i=1,r=$(".submenu").height(),l=$(".submenu2").height(),a=$(".burger"),d=$(".buttHeader"),u=$(".menuMob").find("span.back");if(screen.width<768){var c=$("header"),p=$("main").offset().top,f=$(window);f.scroll(function(){f.scrollTop()!=p?$(c).addClass("top"):$(c).removeClass("top")}),$(a).click(function(){$(this).hasClass("burgerOpen")?($(this).removeClass("burgerOpen"),$(".menuMob").find("ul").css("left","-360px"),$("body").removeClass("bodyHidden")):($(this).addClass("burgerOpen"),$(".menuMob").children("ul").css("left","0"),$("body").addClass("bodyHidden"))}),$(document).mouseup(function(e){$(".menuMob").is(e.target)||$(a).is(e.target)||0!==$(".menuMob").has(e.target).length||($(".menuMob").find("ul").css("left","-360px"),$("body").removeClass("bodyHidden"),$(a).removeClass("burgerOpen"))}),$(u).click(function(){$(this).parent().parent().css("left","-360px")}),$(d).click(function(e){$(this).next("ul").css("left","0px"),$(this).next("ul").children("li").children("span.back").text($(this).text())}),$("footer").find("ul").children("li:first-child").click(function(e){$(this).parent().hasClass("open")?$(this).parent().removeClass("open"):($("footer").find("ul").removeClass("open"),$(this).parent().addClass("open"))})}screen.width>768&&(r>l?$(".submenu2").css("height",r+"px"):$(".submenu").css("height",l+"px")),$("main").css("padding-top",t+"px"),$(".slideParteners").slick({slidesToShow:5,slidesToScroll:1,infinite:!0,autoplay:!1,autoplaySpeed:2e3,centerMode:!0,arrows:!0,dots:!1,variableWidth:!0,speed:500}),$(n).slick({slidesToShow:3,slidesToScroll:1,infinite:!0,autoplay:!1,autoplaySpeed:5e3,centerMode:!0,arrows:!0,dots:!1,speed:500,draggable:!1,responsive:[{breakpoint:768,settings:{slidesToShow:1}}]}),$(".sliderHome").slick({slidesToShow:1,slidesToScroll:1,infinite:!0,autoplay:!0,autoplaySpeed:3e3,centerMode:!1,arrows:!0,dots:!1,speed:500,pauseOnHover:!1}),$(s).click(function(e){i=$(e.target).parents(".slick-slide").attr("data-slick-index"),$("#zoomModal").modal({show:!0})}),$("#zoomModal").on("show.bs.modal",function(e){console.log(i),$(".zoomSlider").slick({initialSlide:parseInt(i),slidesToShow:1,slidesToScroll:1,infinite:!0,autoplay:!0,autoplaySpeed:5e3,centerMode:!0,arrows:!0,dots:!1,speed:500})}),$("#zoomModal").on("hidden.bs.modal",function(e){$(".zoomSlider").slick("unslick")}),$(".modalContainer").click(function(e){$(this)===$(e.target)&&$("#zoomModal").modal("hide")})},function(e,o,t){}]);
//# sourceMappingURL=bundle.js.map