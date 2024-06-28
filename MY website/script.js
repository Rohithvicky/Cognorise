// script.js
const menuIconLabel = document.getElementById('menu-icon-label');
const navbar = document.getElementById('navbar');

menuIconLabel.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// JavaScript for sticky header
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll down
        header.classList.remove('visible');
    } else {
        // Scroll up
        header.classList.add('visible');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

document.addEventListener('DOMContentLoaded', function() {
    const imageText = document.querySelector('.personal-training-section .image-text');
    imageText.style.opacity = '1'; // Ensure text is visible on page load
});


document.addEventListener("DOMContentLoaded", function() {
    const logoLink = document.querySelector(".logo");

    if (logoLink) {
        logoLink.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default anchor behavior

            // Scroll to the top of the page smoothly
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});