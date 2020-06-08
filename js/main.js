const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-mobile');
const arrow = document.querySelector('.arrow');
const dropdownListMobile = document.querySelector('.dropdown-list-mobile');

const handleArrowClick = () => {
    arrow.classList.toggle('arrow-active');
    dropdownListMobile.classList.toggle('dropdown-active');

}



const handleClick = () => {
   hamburger.classList.toggle('hamburger-active');
   nav.classList.toggle('nav-mobile-active');
    }


hamburger.addEventListener('click', handleClick);
arrow.addEventListener('click', handleArrowClick);