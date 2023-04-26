import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

import "../common/header-inner";
import "../common/house-other";
import "../common/footer";

import "swiper/css/swiper.min.css";
import Swiper from "swiper";

const bannerSwiper = new Swiper(".banner-swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

$(".car-container").fadeIn();
popupClose(".car-container");

showToast(".wechat", ".wechat-container");
popupClose(".wechat-container");

showToast(".yusuan", ".yusuan-container");
popupClose(".yusuan-container");

showToast(".price-notice", ".price-notice-container");
popupClose(".price-notice-container");


function popupClose(dom) {
  $(`${dom} .close`).on("click", function () {
    $(dom).fadeOut();
    $(".popup-container").find(".mask").hide();
  });
}
function showToast(btn ,dom) {
  $(`.show-toast${btn}`).on("click", function () {
    $(".popup-container").find(".mask").show();
    $(dom).fadeIn();
  });
}
