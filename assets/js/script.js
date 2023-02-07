let menu = document.querySelector('.menu-icon i');
let menubar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    menubar.classList.toggle('active');
});