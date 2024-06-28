document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav');
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;

    window.addEventListener('scroll', function() {
        if (window.scrollY >= headerHeight) {
            nav.classList.add('fixed');
        } else {
            nav.classList.remove('fixed');
        }
    });
});
