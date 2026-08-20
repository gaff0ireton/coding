const btn = document.querySelector('.header__btn');
const nav = document.querySelector('.header__nav');


btn.addEventListener('click', () => {
 btn.classList.toggle('is-click');
 nav.classList.toggle('is-click');
});

