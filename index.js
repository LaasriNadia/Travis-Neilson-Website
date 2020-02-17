const links = document.querySelectorAll('a');

links.forEach(link => link.addEventListener('click', function () {
    const active = document.querySelector('.active');
    active.classList.remove('active');
    link.nextElementSibling.classList.add('active');
}))

const burger = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav');

function open() {
    mobileNav.classList.toggle('is-open');
    burger.classList.toggle('is-open');
}
burger.addEventListener('click', open);