//JAVASCRIPT FOR NAV BAR
//DECLARING VARIABLES

const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-btn');
const navLinksContainer = document.querySelector('.nav-links-container');
const navLinks = document.querySelector('.nav-links');


//TO REMOVE PRELOAD
window.onload = function () {
    document.body.className = "";
}

//ADD EVENT LISTENERS TO HAMBURGER BUTTONS

hamburger.addEventListener('click', () => {
    //open nav bar
    navLinksContainer.style.transform = 'translateX(0%)';
});

closeBtn.addEventListener('click', () => {
    //close nav bar
    navLinksContainer.style.transform = 'translateX(-100%)';
});
