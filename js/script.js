let login = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () =>{
    login.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector(".header .navbar");

document.querySelector('#menu-btn').onclick = () =>{
    login.classList.remove('active');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    login.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".gallery-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween:20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0:{
            slidesPerView:1,
        },
        700:{
            slidesPerView:2,
        },
    }
})



// darkmode.js

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeStyles = document.getElementById('dark-mode-styles');

    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        
        if (darkModeStyles.hasAttribute('disabled')) {
            darkModeStyles.removeAttribute('disabled');
        } else {
            darkModeStyles.setAttribute('disabled', 'true');
        }
    });
});


function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }