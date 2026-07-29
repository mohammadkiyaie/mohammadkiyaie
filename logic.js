const hamburger = document.querySelector('.header__hamburger');
const nav = document.querySelector('.header__nav');
const navLinks = document.querySelectorAll('.header__nav-list a');

hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    nav.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove('active');
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});