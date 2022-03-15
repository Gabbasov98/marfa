$(document).ready(function() {
    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".nav").toggleClass("nav--active")
        $("body").toggleClass("fixed-body")
    })

    $(".nav__item").click(function() {
        $(".header__burger").removeClass("header__burger--active")
        $(".nav").removeClass("nav--active")
        $("body").removeClass("fixed-body")
    })
})