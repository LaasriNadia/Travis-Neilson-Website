const pics = document.querySelectorAll('.pic');
const faces = document.querySelector('.faces');

pics.forEach(pic =>
  pic.addEventListener('click', function () {
    let pos = this.offsetTop;
    let distance = -(pos - 230);
    let posL = this.offsetLeft;
    console.log(posL);
    let distanceL = 100 - posL;
    if (window.innerWidth > 640) {
      faces.style.transform = `translateY(${distance}px)`;
      const open = document.querySelector('.open');
      open.classList.remove('open');
      this.classList.add('open');
    } else {
      faces.style.transform = `translateX(${distanceL}px)`;
      const open = document.querySelector('.open');
      open.classList.remove('open');
      this.classList.add('open');
    }
  })
);

const mentoring = document.querySelector('.mentoring');
let classes = [];

function parallaxPic() {
  let vall = window.scrollY;
  if (
    mentoring.offsetTop - window.innerHeight / 2 < vall &&
    window.innerWidth > 640
  ) {
    faces.classList.add('launched');
  }
}

function narrowWindow() {
  faces.setAttribute('style', 'top: 230px; left: 0px;');
  open.classList.remove('remove');
  pics[0].classList.add('open').getElement;
}

function wideWindow() {
  faces.setAttribute('style', 'top: 0px; left: 0px;');
  open.classList.remove('remove');
  pics[2].classList.add('open').getElement;
}

window.addEventListener('scroll', parallaxPic);
window.addEventListener('resize', function () {
  if (window.innerWidth > 640) {
    wideWindow();
  } else {
    narrowWindow();
  }
});