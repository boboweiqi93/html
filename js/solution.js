$(function(){
	//网站导航
	$("#web").click(function(){
	    $("#web>ul").toggleClass("webbox")
	})

	// 楼层跳转
	$(".goup").hide();
	$(window).on("scroll",function(){
		var tops=$(window).scrollTop();
		if(tops>=100){
			$(".goup").fadeIn(600);
		}else{
			$(".goup").fadeOut(600);
		}
		$(".goup").click(function(){
		    var newObj={st:tops};
		    $(newObj).animate({st:0},{
		        duration:600,
		        step:function(){
		        	$(window).scrollTop(newObj.st)
		        }
		    })
		})
	})
})