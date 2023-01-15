const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {  
    const isAsideClosed = aside.classList.contains('inactive');
    
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    } 
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    aside.classList.toggle('inactive'); 
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isasideClosed = aside.classList.contains('inactive');
    
    if (!ismobileMenuClosed) {
            mobileMenu.classList.add('inactive');  
    } 
    
    
}
