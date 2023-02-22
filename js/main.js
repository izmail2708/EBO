const menuBtn = document.querySelector('.header__btn');
const menuMobile = document.querySelector('.header__menu');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('header__menu--mobile');
    menuBtn.classList.toggle('header__btn--mobile');
});