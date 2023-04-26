// 头部的js代码
import "./index.less";

$(window).scroll(function(){
    if($(window).scrollTop() > 50){
        $(".home-header").addClass("on")
    }else{
        $(".home-header").removeClass("on")
    }
})