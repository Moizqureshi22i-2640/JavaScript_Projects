// <!--JS File of Pig game using JavaScript Made by Abdul Moiz Qureshi -->

'use strict';
//---Symbolic Representation => ----------------PLAYER 1 = '0'  ________________ PLAYER 2 ='1------------------------

// Variables that hold the classes of different attributes like score, dice, rolling, button etc...
let player0El = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');
let score0El = document.querySelector('#score--0');
let score1El = document.querySelector('#score--1');
let diceEl = document.querySelector('.dice');
let current0El = document.querySelector('#current--0');
let current1El = document.querySelector('#current--1');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let btnNew = document.querySelector('.btn--new');

// Variables for holding different values like score playing etc...
let currentScore, activePlayer, scores, playing;

// Initial Function that sets initial conditions in order to start the game
let init = function () {
  playing = true; // enabling game to play
  currentScore = 0;
  activePlayer = 0; //initially player 1 turns
  scores = [0, 0]; // initially both have 0 Total score this contains total score (score[0]=PLAYER 1 && score[1]=PLAYER 2)

  diceEl.classList.add('hidden'); //initially dice is hidden

  // setting all values to 0
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  // Removing all active and winner styling classes and set active status to player 1
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};

// Rolling Function that roll the dice when click on roll button
let rollingDice = function () {
  //if playing mode is on then game will played otherwise not
  if (playing) {
    const dice = Math.trunc(Math.random() * 6 + 1); //generating random number
    diceEl.classList.remove('hidden'); // appearing dice
    diceEl.src = `dice-${dice}.png`; // Showing Dice with number accordingly

    //checking whether dice is equal to 1 or not
    if (dice !== 1) {
      currentScore += dice; //adding dice number to current score
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; //setting and displaying current score accordingly
    } else {
      changeTurn(); //changing turn by calling turn function
    }
  }
};

// ChangeTurn Function that change turn automatically whenever the dice shows 1
let changeTurn = function () {
  currentScore = 0; //seeting current score to 0
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore; //setting and displaying current score accordingly

  //changing player
  activePlayer = activePlayer === 1 ? 0 : 1;
  // setting styling of active player accordingly
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// switchPlayer Function that switch player on pressing Hold Button
let switchPlayer = function () {
  //if playing mode is on then game will played otherwise not
  if (playing) {
    scores[activePlayer] += currentScore; // current score is added to array of total score accordingly
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer]; //setting and displaying total score accordingly

    //checking whether any player wins or not if win then playing mode will be of
    if (scores[activePlayer] >= 100) {
      playing = false; //playing mode off
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner'); //adding style to highlight winner

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active'); //removing activeness of player as game is ended

      diceEl.classList.add('hidden'); //also hide dice when game is ended
    } else {
      changeTurn(); //changing turn by calling turn function
    }
  }
};

//calling init function in order to set game environment and enable playing mode
init();

//Handling events when clicked on buttons accordingly
btnRoll.addEventListener('click', rollingDice); //ROLLING DICE

btnHold.addEventListener('click', switchPlayer); //SWITCHING PLAYER

btnNew.addEventListener('click', init); //SETTING INITIAL ENVIRONMENT FOR PLAYING AGAIN
