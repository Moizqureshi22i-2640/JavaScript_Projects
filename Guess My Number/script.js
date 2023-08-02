// <!--JavaScript File of Guess my Number using JavaScript Made by Abdul Moiz Qureshi -->

"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1; //any secret Number
let score = 20; //Total turns are 20
let Highscore = 0; //initially highscore is zero

//Function for showing message that give hint to approaches secret number
let DisplayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//When click on check button then this handler will catch the event
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value); //storing enter number in guess variable

  //handling empty or no iput
  if (!guess) {
    DisplayMessage("⛔ No Number !");
  }

  //Handling if guess number is correct
  else if (guess === secretNumber) {
    DisplayMessage("✅ Correct");
    document.querySelector(".number").textContent = secretNumber;

    //setting Highscore
    if (score > Highscore) {
      Highscore = score;
      document.querySelector(".highscore").textContent = Highscore;
    }

    //setting style on giving correct answer
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".check").addEventListener("click", function () {});
  }

  // Handling if guess number is not correct
  else if (guess !== secretNumber) {
    //Handling score uncertainty
    if (score > 1) {
      guess > secretNumber
        ? DisplayMessage("📈 Too High !")
        : DisplayMessage("📉 Too Low ! ");
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💣 You Lost !";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Restore all initial settings in order to start game again by clicking on again button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  DisplayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});
