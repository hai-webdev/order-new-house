// 首页使用的js

// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";
import "../common/nav";
import swiper from "swiper";

const newSwiper = new swiper(".news-swiper",{
    direction: "vertical",
    loop:true,
    autoplay:{
        delay:3000
    }
})
$(".product-container .tab-item").on("click", function(){
    const index = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".pro-content .product-list").eq(index).show().siblings().hide();
})
$(".article-container .tab-item").on("click", function(){
    const index = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".article-content .article-list").eq(index).show().siblings().hide();
})