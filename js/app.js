document.querySelector('.entry button').addEventListener('click', () => {
    document.querySelector('.entry').style.display = 'none';
    document.querySelector('.slideshow').style.cssText = 'opacity: 1; visibility: visible';
    document.querySelector('.slides-container').style.animation = 'sliding 24s infinite'; 
    //la animación (keyframe sliding) se escribe en el css pero se ejecuta aquí mediante js
})