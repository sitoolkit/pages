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