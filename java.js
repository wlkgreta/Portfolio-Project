//Gives Nav Bar a background color when scrolling//
const navEl = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navEl.classList.add('nav-scrolled');
    } else if (window.scrollY <= 50) {
        navEl.classList.remove('nav-scrolled');
    }
});

const mobileNavEl = document.querySelector('.mobile-nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        mobileNavEl.classList.add('nav-scrolled');
    } else if (window.scrollY <= 50) {
        mobileNavEl.classList.remove('nav-scrolled');
    }
});
