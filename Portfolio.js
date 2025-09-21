// Menu icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll sections active link
let sections= document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav a');
Window.onscroll= () =>{
    Sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop – 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        If(top >= offset && top < offset+height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=’ + id + ‘]’).classList.add(‘active’);
            });
        };
    });

    // Sticky Navbar
let header = document.querySelector('.header');

Header.classList.toggle('sticky',window.scrollY > 100);

//Remove Menu icon navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


};

//dark light mode
Let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

// scroll reveal 
ScrollReveal({
    Reset: true,
    Distance:'80px',
    Duration: 2000,
    Delay:200
});

ScrollReveal().reveal('.home-content, .heading, .skill-box h2', { origin: top });
ScrollReveal().reveal('.home-img img, .skill, portfolio-box, .contact form', { origin: bottom });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin:left });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin:right });