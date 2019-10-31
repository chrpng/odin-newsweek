$(function () {
    $(".header-bottom").hide();
    $(".toggle-mobile-menu").click(function() {
        $(this).toggleClass("active");
        // $(".header-bottom").slideToggle(500);
        $(".header-bottom").toggle();
    });
});