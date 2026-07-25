const hamburgerBtn = document.getElementById('hamburger-btn');
const headerNav = document.querySelector('.header__nav');

hamburgerBtn.addEventListener('click', () => {
    headerNav.classList.toggle('active');
});