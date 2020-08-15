$(document).ready(function(){
    toggleMobileMenu()
    animateToSection()
    testimonialCarousel()
    masonryLayout()
})

function toggleMobileMenu(){
    $('#mobile-menu-toggler').on(click,function(){
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

function testimonialCarousel(){
    $('.testimonial-cont').owlCarousel({
        item: 1,
        autoplay:true,
        loop: true,
        autoplaySpeed: 1000
    })
}

function masonryLayout(){
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth:360,
        layoutMode: 'fitRows',
        fitRows:{
            gutter: 10
        }
    })
}