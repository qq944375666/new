//banner图按钮控制
$(function(){
    $(".banner_imgn").hover(function(){
        $(this).find(".prev,.next").fadeTo("show",0.5);
    },function(){
        $(this).find(".prev,.next").hide();
    })
    /*鼠标移过某个按钮 高亮显示*/
    $(".prev,.next").hover(function(){
        $(this).stop().fadeTo("show",1);
    },function(){
        $(this).stop().fadeTo("show",0.5);
    })
    $(".banner_imgn").slide({ titCell:".num ul" , mainCell:".banner_ul" , effect:"fold", autoPlay:true, delayTime:700 , autoPage:true });

});
