$(function(){

var num=0;
  var next=0;
  $(".imgbox>a:gt(0)").css("left",$(".imgbox>a").width()+"px");
  var flag=true;
  function move(type){
    type=type||"next";
    if(!flag){
      return;
    }
    flag=false;
    $(".imgbox>a").stop(false,false)
    if(type=="pre"){
      next--;
      if(next<0){
        next=$(".imgbox>a").length-1;
      }
      $(".imgbox>a").eq(next).css("left","-"+$(".imgbox>a").width()+"px").animate({left:0});
      $(".imgbox>a").eq(num).animate({left:1349},function(){
        flag=true;
      });
    }
    else if(type=="next"){
      next++;
      if(next>=$(".imgbox>a").length){
        next=0;
      }
      $(".imgbox>a").eq(next).css("left",$(".imgbox>a").width()+"px").animate({left:0});
      $(".imgbox>a").eq(num).animate({left:"-"+$(".imgbox>a").width()},function(){
        flag=true;
      });
    }
    $(".banner>.btn>li").eq(next).addClass("active");
    $(".banner>.btn>li").eq(num).removeClass("active")
    num=next;
  }
  var t =  setInterval(move,2000)
 $(".banner").mouseover(function(){
  clearInterval(t)
 }).mouseout(function(){
  t =  setInterval(move,2000)
 })
$(".leftbtn").click(function(){
  move("pre");
})
$(".rightbtn").click(function(){
  move("next");
})
$(".banner>.btn li").click(function(){
  next=$(this).index()
  if(num>next){
    next=$(this).index()-1
    move("next")
  }else if(num<next){
    next=$(this).index()+1
    move("pre")
  }
})

     
	//网站导航
	$("#web").click(function(){
	    $("#web>ul").toggleClass("webbox")
	})
  // 第二种方法  代码参照下方
  // var flag=true;
  //   $("#web").click(function(){
  //       if(flag){
  //           $("#web ul").css("display","block"); 
  //           flag=false;
  //       }else if(!flag){
  //            $("#web ul").css("display","none");
  //           flag=true;
  //       }

  //   })

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