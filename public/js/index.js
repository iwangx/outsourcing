/**
 * Created by wangxing on 2015/9/20.
 */
(function(){
    var wrapper=document.querySelector(".swiper-wrapper");
    window.addEventListener("resize",resize);
    resize();
    function resize(){
        var winHeight=window.screen.availHeight*window.dpr;;
        wrapper.style.height=winHeight+"px";
    }
    var mySwiper = new Swiper('.swiper-container', {
        speed: 400,
        direction:"vertical",
        pagination:".swiper-pagination"
    });
})()