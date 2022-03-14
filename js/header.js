$(document).ready(function() {
    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".nav").toggleClass("nav--active")
    })


})