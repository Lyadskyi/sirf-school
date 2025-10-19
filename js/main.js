const menuBtn = document.querySelector('.menu__btn');
const headerMenu = document.querySelector('.header__menu');

menuBtn.addEventListener('click', () => {
	headerMenu.classList.toggle('menu--open');
});
