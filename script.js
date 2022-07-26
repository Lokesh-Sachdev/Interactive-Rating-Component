'use strict';

const btnSubmit = document.querySelector('.btn__submit');
const btnRate = document.querySelectorAll('.btn__rate');
const content = document.querySelector('.content');
const thankYou = document.querySelector('.ty__content');
const score = document.querySelector('.score');
let star_score = 3; // Default value

// console.log(btnRate);

btnSubmit.addEventListener('click', onSubmit);
btnRate.forEach(btn => {
  btn.addEventListener('click', handleRateBtn);
});

function onSubmit() {
  // console.log('click');
  content.classList.add('hidden');
  score.textContent = star_score;
  thankYou.classList.remove('hidden');
}

function handleRateBtn(e) {
  btnRate.forEach(btn => {
    btn.classList.remove('active');
  });

  if (e.target.classList.contains('btn__rate')) {
    e.target.classList.add('active');
  } else {
    e.target.parentElement.classList.add('active');
  }

  star_score = e.target.textContent;
  console.log(star_score);
}

// btnRate.forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     console.log(e.target);
//   });
// });
