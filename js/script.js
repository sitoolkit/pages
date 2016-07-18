$(function () {
    
    var navbarCollapseLink = $("#navbar-collapse-link");
    navbarCollapseLink.find("a").click(function () {
        navbarCollapseLink.collapse("hide");
    });
    

    
    var HEADER_HEIGHT = $("nav").height();
    $("a[href*=#]").click(function () {
        var target = $(this.hash);
        if (target) {
            var targetOffset = target.offset().top - HEADER_HEIGHT;
            $("html,body").animate({ scrollTop: targetOffset }, 400);
            return false;
        }
    });
});

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    touchRatio: 0.3,
    parallax: true,
    calculateHeight: true,
    autoResize: true,
    resizeReInit: true,
    speed: 700,
    loop: true,
    autoplay: 15000,
    spaceBetween : 50
});
