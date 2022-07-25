'use strict';

const btnSubmit = document.querySelector('.btn__submit');
const btnRate = document.querySelector('.rate');

btnSubmit.addEventListener('click', function () {
  console.log('Submitted');
});

// btnRate.forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     console.log(e.target);
//   });
// });

btnRate.addEventListener('click', function (e) {
  e.target.style.background = 'orange';
  e.target.style.opacity = 1;
  console.log(e.target);

  // Matching strategy Containing the child Class
  //   if (e.target.classList.contains('btn__rate')) {
  //     console.log('LINKED');
  //   }
});
