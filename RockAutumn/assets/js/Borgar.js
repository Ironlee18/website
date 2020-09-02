$(document).ready(function(){
    toggleMobileMenu()
    animateToSection()
})

function toggleMobileMenu(){
    $('#MobileMenu').on(click,function(){
        $(this).toggleClass('is-active')
        $(".header-nav").toggleClass("visible")
        $('html, body').toggleClass('disable')
        console.log("test2")
    })
}

function animateToSection(){

    $('.header-nav a').on('click', function(){

        if($(window).width <991){
            toggleMobileMenu();
        }
        var goToSec =$(this).attr("href")

        setTimeout(function(){
        $('html, body').animate({
            scrollTop: goToSec.offset().top
        }, 1000)
    },1000)
    })

}