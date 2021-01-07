window.alert("프로젝트 페이지로 이동할 때 약간의 버벅임이 동반됩니다. 오류를 찾는 중이니 양해 부탁드립니다.😅")

$(function(){
	
	var n=0; //pageIndex
	var moving = false;
	
	layout();
	
	function layout(){
		
		var wiw = window.innerWidth;
		console.log("window-innerWidth : " + wiw)
		var wih = window.innerHeight;
		console.log("window-innerHeight : " + wih)
		var t = (-1) * n * window.innerHeight;
		$("#section").css({top: t + "px"});
		$("#section .page").css({width: wiw, height: wih})
	}
	
	
	function re_layout(){
		var wiw = window.innerWidth;
		console.log("resize-window-innerWidth : " + wiw)
		var wih = window.innerHeight;
		console.log("resize-window-innerHeight : " + wih)
		
		var t = (-1) * n * window.innerHeight;
		$("#section").css({top: t + "px"});
		$("#section .page").css({width: wiw, height: wih})
	}
	
	$(window).resize(function(){
		re_layout()
	})
	
	
	$("body, html").on("mousewheel DOMMouseScroll", function(e){
		var delta = e.originalEvent.wheelDelta;
			//console.log("delta : " + delta);
		var detail = e.originalEvent.detail;
			//console.log("detail : " + detail);
		var windowScroll = $(window).scrollTop();
			console.log("window-scroll : " + windowScroll)
		var introTop = $("#page0").offset().top;
			console.log("intro-offset-top : " + introTop)
		var aboutTop = $("#page1").offset().top;
			console.log("about-offset-top : " + aboutTop)
		var projectTop = $("#page2").offset().top;
			console.log("project-offset-top : " + projectTop)	
		var contactTop = $("#page3").offset().top;
			console.log("contact-offset-top : " + contactTop)	
		
		if(moving == false){
			moving = true;
			var t = $("#section").offset().top;
			//console.log("section-offset-top : " + t)
			
			if(delta>0 || detail<0){
				if(n>0){
					n--;
					t += window.innerHeight;
				}
			} else if(delta<0 || detail>0){
				if(n<3){
					n++;
					t -= window.innerHeight;
				}
			}
			
		} //if(moving == false)
		
		$("#section").animate({top: t}, 500, function(){
			moving = false;
			$(".aside .btn li").removeClass("on");
			$(".aside .btn li").eq(n).addClass("on")
		})
		
		if(introTop==windowScroll){
			
			$(".about_title").delay(300).stop().animate({paddingTop : "50px", opacity: 1}, 1000)
			
			
		} //about이 scrollTop에 닿을 때
		
		if(aboutTop==windowScroll){
			
			$(".project_title").delay(300).stop().animate({paddingTop : "50px", opacity: 1}, 1000)
			
			
		} //project가 scrollTop에 닿을 때
		
		if(projectTop==windowScroll){
			
			$(".contact_title").delay(300).stop().animate({paddingTop : "50px", opacity: 1}, 1000)
			
		} //about이 scrollTop에 닿을 때
		
		
		
	}) //html, body - mousewheel DOMMouseScroll
	
	
	$(".aside .btn li").click(function(){
		
		n = $(this).index();
		console.log("sideButton : " + n);
		$(".aside .btn li").removeClass("on");
		$(this).addClass("on");
		
		var t = (-1) * n * window.innerHeight;
		$("#section").animate({top: t + "px"},500);
		
		var windowScroll = $(window).scrollTop();
			console.log("window-scroll : " + windowScroll)
		var introTop = $("#page0").offset().top;
			console.log("intro-offset-top : " + introTop)
		var aboutTop = $("#page1").offset().top;
			console.log("about-offset-top : " + aboutTop)
		var projectTop = $("#page2").offset().top;
			console.log("project-offset-top : " + projectTop)	
		var contactTop = $("#page3").offset().top;
			console.log("contact-offset-top : " + contactTop)	
			
        switch(n){
            case 1 :
                $(".about_title").delay(300).stop().animate({paddingTop : "50px", opacity: 1}, 1000)
            
			console.log("introTop : " +introTop)
			console.log("windowScroll : " +windowScroll)
            break;
            case 2 :
                $(".project_title").delay(300).stop().animate({paddingTop : "50px", opacity: 1}, 1000)
			
			console.log("aboutTop : " +aboutTop)
			console.log("windowScroll : " +windowScroll)
            break;
            case 3 :
                $(".contact_title").delay(300).stop().animate({paddingTop : "50px", opacity: 1}, 1000)
			console.log("projectTop : " +projectTop)
			console.log("windowScroll : " +windowScroll)
            break;
            default :
            break;
              
        }
		
	}); //사이드 버튼 클릭
	
	$(".open_menu").click(function(){
		$(this).toggleClass("active");
		$(".full_nav").toggleClass("active");
		
		if($(".full_nav").hasClass("active")){
			$(".logo_black").css({opacity: 0});
			$(".logo_white").css({opacity: 1});
			$(".open_menu span").css({background: "#f1f1f1"});
		} else{
			$(".logo_black").css({opacity: 1});
			$(".logo_white").css({opacity: 0});
			$(".open_menu span").css({background: "#191919"});
		}
        
	});// full menu
	
	/*typing*/
	$(".intro_text").typed({
		startDelay: 1500,
		strings: ["HELLO, STRANGER!"],
		typeSpeed: 150,
		contentType: 'html',
		cursorChar: '_',
		loop: false
	})
	
	$(".full_nav_container ul li").click(function(){
		$(".full_nav").removeClass("active")
		
		$(".logo_black").css({opacity: 1});
		$(".logo_white").css({opacity: 0});
		$(".open_menu span").css({background: "#191919"});
		
		n = $(this).index()
		console.log("full-nav-list : " + n)
		
		t = (-1) * n * window.innerHeight;
		n =$(this).index()
		
		$("#section").css({top: t + "px"});
		$("#section .page").css({width: window.innerWidth, height: window.innerHeight})
		
		$("#section").animate({top: t}, 500, function(){
			moving = false;
			$(".aside .btn li").removeClass("on");
			$(".aside .btn li").eq(n).addClass("on")
		})
		
		var windowScroll = $(window).scrollTop();
			console.log("C-window-scroll : " + windowScroll)
		var introTop = $("#page0").offset().top;
			console.log("C-intro-offset-top : " + introTop)
		var aboutTop = $("#page1").offset().top;
			console.log("C-about-offset-top : " + aboutTop)
		var projectTop = $("#page2").offset().top;
			console.log("C-project-offset-top : " + projectTop)	
		var contactTop = $("#page3").offset().top;
			console.log("C-contact-offset-top : " + contactTop)
		
        switch(n){
            case 1 :
                $(".about_title").delay(300).stop().animate({paddingTop : "50px", opacity: 1}, 1000)
            
			console.log("introTop : " +introTop)
			console.log("windowScroll : " +windowScroll)
            break;
            case 2 :
                $(".project_title").delay(300).stop().animate({paddingTop : "50px", opacity: 1}, 1000)
			
			console.log("aboutTop : " +aboutTop)
			console.log("windowScroll : " +windowScroll)
            break;
            case 3 :
                $(".contact_title").delay(300).stop().animate({paddingTop : "50px", opacity: 1}, 1000)
			console.log("projectTop : " +projectTop)
			console.log("windowScroll : " +windowScroll)
            break;
            default :
            break;
            
        }
	})
	
	$(".button_hover").hover(function(){
		$(this).css({lineHeight: "4.15em"})
	}, function(){
		$(this).css({lineHeight: "1.1em"})
	}); //project_subtitle
	
	$(".button_hover").click(function(){
		var value = $(this).text().toLowerCase();
		if(value == "all"){
			$(".item_wrap").show()
		} else{
			$(".item_wrap").not("."+value).hide();
			$(".item_wrap").filter("."+value).show()
		}
		$(this).parent().siblings().removeClass("on_title")
		$(this).parent().addClass("on_title")
	}); //project 해당 항목 보이게 하기
	
	//project view more에서 아이콘 hover 시 explain 드러나게 하기
	$(".info_wrap").hover(function(){
		$(this).parent().parent().siblings().children("div:first").css({opacity: "1"})
	}, function(){
		$(this).parent().parent().siblings().children("div:first").css({opacity: "0"})
	})
	
	$(".view_more_wrap").hover(function(){
		$(this).parent().parent().siblings().children("div:nth-child(2)").css({opacity: "1"})
	}, function(){
		$(this).parent().parent().siblings().children("div:nth-child(2)").css({opacity: "0"})
	})
	
	$(".link_wrap").hover(function(){
		$(this).parent().parent().siblings().children("div:last").css({opacity: "1"})
	}, function(){
		$(this).parent().parent().siblings().children("div:last").css({opacity: "0"})
	})
	
	
	//project popup
	
	$(".project_pop_wrap, .project_pop_wrap_bg").hide(0);
	
	$(".view_more_wrap").click(function(e){
		e.preventDefault();
		
		var view_more_btn = $(this).parent().parent().parent().index()
		console.log("view_more_btn : " + view_more_btn)
		
		$(".project_pop_wrap, .project_pop_wrap_bg").stop().fadeIn();
		$(".project_pop_wrap>div").hide().eq(view_more_btn).show();
		
		//팝업슬라이드
        
		$(".popup_contents").eq(view_more_btn).children("div").eq(0).show().siblings().hide();
		console.log("AAAAA" + $(".popup_contents>div").first().index())
		
		//버튼 눌러서 다음 이미지 fadeIn
		var num = 0
		var div_num = $(".popup_contents").eq(view_more_btn).children("div").length-1;
		console.log("divnum : " + div_num)
		
		function next_btn_click(){
			$(".popup_contents").eq(view_more_btn).children("div").eq(num).fadeOut()
			
			if(num<div_num){
				num++;
				$(".popup_contents").eq(view_more_btn).children("div").eq(num).fadeIn()
				
			} else{
				num=0;
				$(".popup_contents").eq(view_more_btn).children("div").eq(num).fadeIn()	
				
			}
		}
		
		$(".next_btn").click(function(){
			next_btn_click();
		})
		
		function prev_btn_click(){
			$(".popup_contents").eq(view_more_btn).children("div").eq(num).fadeOut()
			
			if(num<div_num){
				num--;
				$(".popup_contents").eq(view_more_btn).children("div").eq(num).fadeIn()
				
			} else{
				num=0;
				$(".popup_contents").eq(view_more_btn).children("div").eq(num).fadeIn()	
				
			}
			
		}
		
		$(".prev_btn").click(function(){
			prev_btn_click();
		})
		
	})
	
	$(".project_pop_wrap_bg").click(function(){
		$(".project_pop_wrap, .project_pop_wrap_bg").stop().fadeOut();
	})
	
	$(".project_pop_wrap, .project_pop_wrap_bg, .full_nav").on("scroll touchmove mousewheel", function(e){
		e.preventDefault();
		e.stopPropagation();
		return false
	})
	
	
	
}); //전체 function