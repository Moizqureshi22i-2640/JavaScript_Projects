// <!-- JavaScript File of Modal Pop Up opening using JavaScript Made by Abdul Moiz Qureshi -->

"use strict";

const modal = document.querySelector(".modal"); //variable handle modal class
const overlay = document.querySelector(".overlay"); //variable handle overlay class
const btnCloseModal = document.querySelector(".close-modal"); // button variable for close popup window
const btnOpenModal = document.querySelectorAll(".show-modal"); // button variable for open popup window

// function for closing popup window
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// function for opening popup window
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//Loop for handling all buttuns withs ame class
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", openModal); //Event Handler

btnCloseModal.addEventListener("click", closeModal); //Event Handler

overlay.addEventListener("click", closeModal); //Event Handler

//Remove popup on pressing Escape key
document.addEventListener("keydown", function (e) {
  if (e.key == "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
