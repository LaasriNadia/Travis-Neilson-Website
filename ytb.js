//ytb  section 
const videoBg = document.querySelector('.videoBg')

function parallaxVid() {
    let val = window.scrollY;
    videoBg.style.backgroundPosition = `center -${val}px`;

}
window.addEventListener('scroll', parallaxVid)