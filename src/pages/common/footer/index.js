// 页尾的js代码
import "./index.less";
$(".link-tab-item").on("click",function(){
    const index = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".link-container .link-list").eq(index).addClass("on").siblings().removeClass("on");
})