'use strict';

//console.log(document.querySelector('.message').textContent);
let getRandomNumber = function (start, range) {
  let getRandomNumber = Math.floor(Math.random() * range + start);
  return getRandomNumber;
};

let number = getRandomNumber(1, 5);
let score = 20;
let high = 0;
console.log(number);

function x() {
  const guess = Number(document.querySelector('.guess').value);
  let el = (document.querySelector('.number').textContent = guess);

  // if dont input number guess will be 0
  if (!guess) {
    document.querySelector('.message').textContent =
      'Write in the Box ! \n  Or dont put 0';
  } else if (guess == number) {
    (document.querySelector('.message').textContent = 'You Win! :)'),
      (el = guess),
      (document.querySelector('.highscore').textContent = high),
      (document.querySelector('body').style.backgroundColor = ' #60b347'),
      (document.querySelector('.number').style.width = '15rem');
    if (score > high) {
      high = score;
      document.querySelector('.highscore').textContent = high;
    }
  } else if (guess !== number) {
    if (score > 0) {
      (document.querySelector('.message').textContent =
        guess > number ? 'Maybe Lower' : 'Maybe Upper'),
        (el = guess),
        score--,
        (document.querySelector('.score').textContent = score);
    } else {
      document.querySelector('.message').textContent = 'You Lost';
    }
  }
}

function y() {
  score = 20;
  number = getRandomNumber(1, 5);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  (document.querySelector('body').style.backgroundColor = '#222'),
    (document.querySelector('.number').style.width = '15rem');
}
document.querySelector('.again').addEventListener('click', y);
//document.querySelector('.number').textContent = number;
document.querySelector('.check').addEventListener('click', x);
