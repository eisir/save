function shareTool(){document.write('<script src="'+share_url+'" type="text/javascript" charset="utf-8"></script>')}function active(){$(function(){var t=window.location.pathname.split("/");"article"==t[1]&&$("ul.nav-link>li a").each(function(){var n=$(this).attr("href").split("/");t[1]==n[1]&&$(this).parent().addClass("active")})})}var share_url="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-56d548931737db96",share_url_jiathis="http://v3.jiathis.com/code_mini/jia.js";$(function(){if($(".fixedbar a[data-gtc]")){$(".fixedbar a[data-gtc]").each(function(){{var t=$(this).data("gtc");$(this)}$(this).click(function(){if("0"==t)$("html,body").stop().animate({scrollTop:0},500);else{var n=$(".wrap [data-gtc="+t+"]").offset().top-60;$("html,body").stop().animate({scrollTop:n},500)}})});var t=$(".wrap [data-gtc]");$(window).scroll(function(){for(var n=$(window).scrollTop(),i=0;i<t.length;i++)t.eq(i).offset().top-310<=n&&($(".fixedbar a[data-gtc="+t.eq(i).data("gtc")+"]").addClass("current").siblings().removeClass("current"),$(".fixedbar a[data-gtc="+t.eq(i).data("gtc")+"]").prev().hasClass("fore-para")&&$(".fixedbar a[data-gtc="+t.eq(i).data("gtc")+"]").prev().addClass("current"));var e=$(window).height();e>n?$(".fixedbar").hide():$(".fixedbar").show()})}}),$(function(){$(".grid-right").css("min-height",$(".slider").height()+20+"px");var t;$(".catebox").hover(function(){t=$(this).index(),t>2?$(".category-layer").addClass("bottom"):$(".category-layer").removeClass("bottom"),$(".category-layer").show().find(".item-sub").eq(t).show(),$(".category-layer .layer-bg").height($(".category-layer").height()+40+"px"),$(".category-layer .item-sub dl dd").each(function(){$(this).css("padding-left",$(this).parent().children("dt").width()+10+"px")})},function(){$(".category-layer").hide().find(".item-sub").hide(),$(this).removeClass("hover")}),$(".category-layer").hover(function(){$(this).show().find(".item-sub").eq(t).show(),$(".catebox").eq(t).addClass("hover")},function(){$(this).hide().find(".item-sub").hide(),$(".catebox").eq(t).removeClass("hover")}),$(".count-box .btns>a").click(function(){var t=$(this).parent().siblings(".buy_count");1==$(this).attr("data-id")?(t.val(parseInt(t.val())+1),$(this).parent().siblings(".buy_count").change()):t.val()>1&&(t.val(t.val()-1),$(this).parent().siblings(".buy_count").change())})}),$(function(){var t;$(".info-r .foot a").mousedown(function(){function n(){o.scrollTop(o.scrollTop()-1)}function i(){o.scrollTop(o.scrollTop()+1)}{var e=$(this),o=e.parents(".info-r").find(".bd");o.scrollTop(),o.find(".bd-box").height()}t="down"==e.data("id")?setInterval(i,1):setInterval(n,1)}),$(".info-r .foot a").mouseup(function(){clearInterval(t)})}),function(t){t.fn.bannerEffect=function(n){function i(){p=w.complete?{width:w.width,height:w.height}:{width:1920,height:400};var n=t(document).width(),i=n*p.height/p.width;a.find("ul li img").width(n),a.find("ul li img").height(i),a.find("ul").height(i)}function e(){var n=null;return a.find("ul li").each(function(i){"none"!==t(this).css("display")&&(n=i)}),n}function o(n){h&&i(),a.find("ul li").stop(!0,!0);var o=null;if(o=e(),winWidth=a.width(),nextIndex=void 0==n?o==f-1?0:o+1:n,o!==nextIndex)switch(a.find(".control-box span").css("color",u.color),a.find(".control-box span").eq(nextIndex).css("color",u.activeColor).addClass("on").siblings().removeClass("on"),c){case 0:nextIndex>o&&(0!=o||nextIndex!=f-1)||o==f-1&&0==nextIndex?(a.find("ul li").eq(nextIndex).css({left:winWidth,opacity:1,display:"block"}),a.find("ul li").eq(o).animate({left:"-"+winWidth},d,function(){t(this).css("display","none")}),a.find("ul li").eq(nextIndex).animate({left:0},d)):(a.find("ul li").eq(nextIndex).css({left:-winWidth,opacity:1,display:"block"}),a.find("ul li").eq(o).animate({left:winWidth},d,function(){t(this).css("display","none")}),a.find("ul li").eq(nextIndex).animate({left:0},d));break;case 1:a.find("ul li").eq(o).css({"z-index":"1"}),a.find("ul li").eq(nextIndex).css({"z-index":"2"}),a.find("ul li").eq(o).fadeOut(d),a.find("ul li").eq(nextIndex).fadeIn(d);break;default:console.log("please give effct a correct number!")}}var a=t(this),n=jQuery.extend({effect:0,tim:3e3,switchTime:500,eventB:"hover",auto:!0,resize:!1,controlBtnColor:{color:"#fff",activeColor:"#f60"}},n||{}),l=n.auto,c=n.effect,r=n.tim,d=n.switchTime,s=n.eventB,f=a.find("ul li").length,h=n.resize,u=n.controlBtnColor;if(a.find(".control-box span").eq(0).css("color",u.activeColor).addClass("on"),a.find("ul li").eq(0).css({left:0,opacity:1,display:"block"}),h){var w=new Image;w.src=t(".banner .bannerBox ul li").eq(0).find("img").attr("src");var p;i(),t(window).resize(function(){i()})}if(l)var v=window.setInterval(o,r);a.find(".control-btn").hover(function(){a.find(".control-btn").stop().fadeTo(500,.3)},function(){a.find(".control-btn").stop().fadeTo(500,0)}),a.find("ul li img").hover(function(){a.find(".control-btn").show(),a.find(".control-btn").show().stop().fadeTo(500,.3)},function(){a.find(".control-btn").stop().fadeTo(500,0)}),a.find(".control-btn").each(function(n){t(this).click(function(){var t=e();window.clearInterval(v),o(0==n?t?t-1:f-1:t==f-1?0:t+1),l&&(v=window.setInterval(o,r))})}),a.find(".control-box span").each(function(n){"hover"==s?t(this).hover(function(){window.clearInterval(v),o(n)},function(){v=window.setInterval(o,r)}):t(this).click(function(){o(n),window.clearInterval(v),v=window.setInterval(o,r)})})}}(jQuery),$(function(){$(".navtop-right li.lang a.lang").click(function(){if($(this).hasClass("on"))return!1;var t=$(this).data("type");return"zh-tw"!=t&&"en-us"!=t?!1:(document.cookie=COOKIE_PREFIX+"think_language="+t+"; path=/",void("/hmv/tw/index.html"!=window.location.pathname&&(window.location.href.indexOf("/tw/")>0||window.location.href.indexOf("/en/")>0)?window.location.href="zh-tw"==t?window.location.href.replace("/en/","/tw/"):window.location.href.replace("/tw/","/en/"):"/"==window.location.pathname||"/index.html"==window.location.pathname?window.location.href="/hmv/tw/index.html":"/hmv/tw/index.html"==window.location.pathname?window.location.href="/":window.location.reload()))})}),$(function(){$.ajax({url:"/index.php?g=Portal&m=index&a=navTopUser",type:"post",dataType:"json",success:function(t){t.hasOwnProperty("data")&&($("#nav-top-user").html(t.data.nav_top_user),$(".nav-main .counts-txt").text(t.data.cart_num),$(".navtop_nickname").text(t.data.nickname))}})});