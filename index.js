document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.nav__mobile-list');
    const mobileButton = document.querySelector('.button__mobile');

    mobileButton.addEventListener('click', function () {
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            mobileButton.classList.remove('active');
        } else {
            mobileMenu.classList.add('active');
            mobileButton.classList.add('active');
        }
       
    })
});