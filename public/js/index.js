/**
 * Created by wangxing on 2015/9/20.
 */
(function(){
    var wrapper=document.querySelector(".swiper-wrapper");
    var slideList=document.querySelectorAll(".swiper-slide");
    window.addEventListener("resize",resize);
    resize();
    function resize(){
        var winHeight=window.screen.availHeight;
        //var winHeight=screen.availHeight;
        for(var i=0;i<slideList.length;i++){
            //slideList[i].style.height=winHeight+"px";
        }
        wrapper.style.height=winHeight+"px";
        alert(winHeight)
        setTimeout(function(){
        },3000)
    }
    new Swiper('.swiper-container', {
        direction:"vertical",
        pagination:".swiper-pagination"
    });
})()