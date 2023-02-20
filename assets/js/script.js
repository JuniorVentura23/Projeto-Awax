let menu = document.querySelector('.menu-icon i');
let menubar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    menubar.classList.toggle('active');

    window.onscroll = () => {
        menu.classList.remove('fa-times');
        menubar = classList.remove('active');
    }
});