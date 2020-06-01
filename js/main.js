const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-mobile');

const handleClick = () => {
   hamburger.classList.toggle('hamburger-active');
   nav.classList.toggle('nav-mobile-active');
    }


hamburger.addEventListener('click', handleClick);