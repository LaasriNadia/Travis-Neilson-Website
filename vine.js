const dives = document.querySelectorAll('.dives');
//const newPics = dives.querySelector('a')
const arr = [
    'img/ar1.jpg',
    'img/ar2.jpg',
    'img/ar3.jpg',
    'img/ar4.jpg',
    'img/ar5.jpg',
    'img/ar6.jpg'
];

dives.forEach(dive => {
    let newPics = dive.querySelectorAll('a');
    for (let j = 0; j < newPics.length; j++) {

        newPics[j].style.backgroundImage = ` url(${arr[j]})`;
    }
})