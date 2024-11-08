let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.remove('active');

    currentSlide = (currentSlide + direction + slides.length) % slides.length;

    slides[currentSlide].classList.add('active');
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}
$(document).ready(function(){
    $('#project-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        smartSpeed:1000,
        margin:24,
        responsive:{
            0:{
               
            },
            768:{
               center:true,
            },
            1140:{
                  items:2,
            }
        }
    })
});
