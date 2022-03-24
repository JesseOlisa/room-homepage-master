//DECLARING VARIABLES 
const sliderControl = document.querySelector('.slider-control');
const slides = Array.from(sliderControl.children);

const textControl = document.querySelector('.text-control');
const textInfo = Array.from(textControl.children);

const leftBtn = document.querySelector('.carousel-left');
const rightBtn = document.querySelector('.carousel-right');
const btnContainer = document.querySelector('.btn-container');


//getting width of the first image to set them side by side
const imageWidth = slides[0].getBoundingClientRect().width;

//for pratice sake
// slides[0].style.left = imageWidth * 0 + 'px';
// slides[1].style.left = imageWidth * 1 + 'px';
// slides[2].style.left = imageWidth * 2 + 'px';

//function to move content to right
const moveContent = (slide, index)=> {
    slide.style.left = imageWidth * index + 'px';
}
//use loop instead to make it dynamic
slides.forEach(moveContent);
textInfo.forEach(moveContent);

//function to animate to left

const moveSlide = (currentBg, targetBg, currentText, targetinfo)=> {
    sliderControl.style.transform = `translateX(-${targetBg.style.left})`;
    currentBg.classList.remove('current-bg');
    targetBg.classList.add('current-bg');

    textControl.style.transform = `translateX(-${targetinfo.style.left})`;
    currentText.classList.remove('current-text');
    targetinfo.classList.add('current-text'); 
}


//ADDING EVENT LISTENERS TO BUTTONS
leftBtn.addEventListener('click', ()=> {
    //WHEN CLICKED MOVE  ELEMENT TO LEFT
    const currentBg = document.querySelector('.current-bg');
    const prevBg = currentBg.previousElementSibling;

    const currentText = document.querySelector('.current-text');
    const prevText = currentBg.previousElementSibling;
   
    if(prevBg == sliderControl.firstElementChild) {
        leftBtn.classList.remove('carousel-hover'); //this removes the hover effect from the first image
    }
    if(prevText == null && prevBg == null) {
        return //removes error message from console
    }
    else {
        moveSlide(currentBg, prevBg, currentText, prevText);
        rightBtn.classList.add('carousel-hover');
    }
      
});

rightBtn.addEventListener('click', ()=> {
    //WHEN CLICKED MOVE ELEMENT TO RIGHT
    const currentBg = document.querySelector('.current-bg');
    const nextBg = currentBg.nextElementSibling;

    const currentText = document.querySelector('.current-text');
    const nextText = currentBg.nextElementSibling;
    
    if(nextBg == sliderControl.lastElementChild) {
        rightBtn.classList.remove('carousel-hover'); //this removes the hover effect from the last image
    }
    if(nextText == null && nextBg == null) {
        return; //removes error message from console
    }
    else {
        moveSlide(currentBg, nextBg, currentText, nextText);
        leftBtn.classList.add('carousel-hover');
    }
    
});



