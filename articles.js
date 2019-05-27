const square = document.querySelector('.square');
const squares = document.querySelector('.squares');
const squaresList = document.querySelectorAll('.square');
const articles = document.querySelector('.articles');

function articleTada() {
  let randNum = Math.floor(Math.random() * squares.childElementCount) + 1;
  let elem = document.querySelectorAll('.square')[randNum];
  [...squares.children].map(child => child.classList.remove('tada'));

  elem.classList.add('tada');
}

setInterval(function() {
  articleTada();
}, 4000);

const ar = [
  'img/ar1.jpg',
  'img/ar2.jpg',
  'img/ar3.jpg',
  'img/ar4.jpg',
  'img/ar5.jpg',
  'img/ar6.jpg',
  'img/ar7.jpg',
  'img/ar8.jpg',
  'img/ar9.jpg',
  'img/ar10.jpg',
  'img/ar11.jpg',
  'img/ar12.jpg'
];
for (let j = 0; j < squaresList.length; j++) {
  squaresList[j].style.backgroundImage = ` url(${ar[j]})`;
}

function startArticles() {
  let vall = window.scrollY;
  if (
    articles.offsetTop - window.innerHeight / 2 < vall &&
    window.innerWidth > 640
  ) {
    for (let i = 0; i < squaresList.length; i++) {
      setTimeout(function() {
        squaresList[i].classList.add('is-visible');
      }, 200 * i);
    }
  }
}
window.addEventListener('scroll', startArticles);
