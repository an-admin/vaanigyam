const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()

let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-container img");
const totalSlides = slides.length;
const carousel = document.querySelector(".carousel-container");

// Clone first and last slide for infinite loop effect
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[totalSlides - 1].cloneNode(true);

carousel.appendChild(firstClone);
carousel.insertBefore(lastClone, slides[0]);

const updatedSlides = document.querySelectorAll(".carousel-container img");
const newTotalSlides = updatedSlides.length;

// Adjust initial position
carousel.style.transform = `translateX(-100%)`;
currentIndex = 1;

function showSlide(index) {
    carousel.style.transition = "transform 0.5s ease-in-out";
    carousel.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
    
    // Reset transition for infinite loop effect
    setTimeout(() => {
        if (currentIndex >= newTotalSlides - 1) {
            carousel.style.transition = "none";
            currentIndex = 1;
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        if (currentIndex <= 0) {
            carousel.style.transition = "none";
            currentIndex = newTotalSlides - 2;
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }, 500);
}

function moveSlide(step) {
    showSlide(currentIndex + step);
}


setInterval(() => moveSlide(1), 5000);