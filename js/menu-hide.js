let lastScroll = 0;
const defaultOffset = 200;
const mobileMenu = document.getElementById('mobile-menu');
const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => mobileMenu.classList.contains('hide');
const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        // Scroll down
        mobileMenu.classList.add('hide');
        header.classList.add('hide'); // Optionally hide the main header as well
        console.log('down');
    } else if (scrollPosition() < lastScroll && containHide()) {
        // Scroll up
        console.log('up');
        mobileMenu.classList.remove('hide');
        header.classList.remove('hide'); // Optionally show the main header when scrolling up
    }
    lastScroll = scrollPosition();
});
