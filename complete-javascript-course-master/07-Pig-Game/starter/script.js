'use strict';
//Selecting Elements

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const currScore0El = document.querySelector('#current--0');
const currScore1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const win0El = document.querySelector('#win1');
const win1El = document.querySelector('#win2');
let playing = true;
let currentScore = 0;
let activePlayer = 0;
const score = [0, 0];

const init = function () {
  //Starting conditions
  score0El.textContent = 0;
  score1El.textContent = 0;
  currScore0El.textContent = 0;
  currScore1El.textContent = 0;
  currentScore = 0;
  diceEl.classList.add('hidden');
  win0El.classList.add('hidden');
  win1El.classList.add('hidden');
  for (let i = 0; i < score.length; i++) score[i] = 0;

  win0El.classList.add('hidden');
  win1El.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  playing = true;
};
init();

//diceEl.classList.remove('hidden');
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
const rollDice = function () {
  if (playing) {
    //1. Generating random number dice
    const randNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randNumber);
    //debugger;
    //2. Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${randNumber}.png`;

    //3. If is 1 switch to next player
    if (randNumber !== 1) {
      //Add to current score
      currentScore += randNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
};

const holdBtn = function () {
  if (playing) {
    // 1. Add current Score to Total score of active player
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    // 2.  If Score > 100 ---> Player Wins
    if (score[activePlayer] >= 10) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player-active');
      if (activePlayer === 0) win0El.classList.remove('hidden');
      if (activePlayer === 1) win1El.classList.remove('hidden');
      diceEl.classList.add('hidden');
      playing = false;
    } else switchPlayer();
    // 3. Else Switch player
  }
};

const newBtn = function () {
  init();
};
btnNew.addEventListener('click', newBtn);
btnRollDice.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdBtn);
