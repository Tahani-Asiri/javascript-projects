'use strict';

// عناصر الصفحة
const scorePlayer0 = document.querySelector('#score--0');
const scorePlayer1 = document.querySelector('#score--1');
const currentPlayer0 = document.querySelector('#current--0');
const currentPlayer1 = document.querySelector('#current--1');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const diceElement = document.querySelector('.dice');
const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const newGameButton = document.querySelector('.btn--new');

// حالة اللعبة
let scores;
let currentScore;
let activePlayer;
let playing;

// بدء لعبة جديدة أو إعادة ضبطها
const newGame = function () {
document.querySelector('#name--0').textContent = 'PLAYER 1';
document.querySelector('#name--1').textContent = 'PLAYER 2';
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  scorePlayer0.textContent = 0;
  scorePlayer1.textContent = 0;
  currentPlayer0.textContent = 0;
  currentPlayer1.textContent = 0;

  diceElement.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};

// التبديل بين اللاعبين
const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;

  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

// رمي النرد
rollButton.addEventListener('click', function () {
  if (!playing) return;

  const dice = Math.trunc(Math.random() * 6) + 1;

  // عرض صورة النرد المناسبة للرقم
  diceElement.src = `dice-${dice}.png`;
  diceElement.alt = `Dice showing ${dice}`;
  diceElement.classList.remove('hidden');

  if (dice !== 1) {
    currentScore += dice;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

// تثبيت النقاط والانتقال للاعب الآخر
holdButton.addEventListener('click', function () {
  if (!playing) return;

  scores[activePlayer] += currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 100) {
    playing = false;
    document.querySelector(`#name--${activePlayer}`).textContent =
  'Winner 🏆';
    diceElement.classList.add('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    switchPlayer();
  }
});

// لعبة جديدة
newGameButton.addEventListener('click', newGame);

// تشغيل اللعبة عند فتح الصفحة
newGame();