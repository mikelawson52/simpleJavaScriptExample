/*
Michael Lawson
lawsonm6@mail.uc.edu
Assignment 02
Due Date: 9/16/18
IT3049 Web Game Development
Javascript File that contains the logic for a higher/lower number guessing game.
*/
"use strict";
//Getting the various dom elements assigned to variables.
const startButton = document.getElementById("startButton")
const submitLower = document.getElementById("submitLower");
const submitSame = document.getElementById("submitSame");
const submitHigher = document.getElementById("submitHigher");
const submitReset = document.getElementById("submitReset");
//variables for the text boxes for later value updates.
const initialNumber = document.getElementById("initialNumber");
const nextNumber = document.getElementById("nextNumber");
//variable that tracks what the user has clicked for my code logic to tell the user what they can/cannot click next.
let clicked = 0;
//two placeholder variables that get are used to compare the two numbers and get reset after every game start.
let tempInitialNumber = -1;
let tempNextNumber = -1;
//function that generates and returns a random number from 0-9 inclusive.
function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 10);
  return randomNumber;
}
//Start button event listener that triggers on click.
startButton.addEventListener("click", function (startButtonClickEvent) {
  //prevent html default submit button usage.
  startButtonClickEvent.preventDefault();
  //if clicked == 1, the user has hit start once and the next start click will ask them to either hit reset or guess on the next number.
  if (clicked == 1) {
    return alert("You have already started! Press reset if you would like to start over and then press Start again, or take your guess at the next number now.");
  }
  //if clicked == 2, the user will be asked to hit reset because only the guess buttons can increment clicked from 1 to 2.
  if(clicked == 2) {
    return alert("Please hit reset to play again.");    
  }
  //if start or the guess buttons have not been clicked, increment clicked and generate the two random numbers. Show the user the first random number.
  else {
    clicked++;
    tempInitialNumber = generateRandomNumber();
    tempNextNumber = generateRandomNumber();
    return initialNumber.value = tempInitialNumber;
  }
});
//Lower guess button click event listener.
submitLower.addEventListener("click", function (submitLowerButtonClickEvent) {
  submitLowerButtonClickEvent.preventDefault();
//If start has been hit and the first number is revealed, increment clicked to two, show the next random number, and tell the user if they were right or wrong.
  if(clicked == 1){  
    clicked++;  
    nextNumber.value = tempNextNumber;

    if (tempNextNumber < tempInitialNumber) {
      return alert("You guessed correctly!");
   }
    else {
      return alert("You guessed wrong :(");
    }
  }
  //If the user has already completed the game, tell them to hit reset to play again.
  if(clicked == 2){
    return alert("Please hit reset to play again.");
  }
  //If the user has not hit start to see the first number, make them hit start before they can guess.
  else {
    return alert("Please hit start before guessing");
  }
});
//Same guess button click event listener.
submitSame.addEventListener("click", function (submitSameButtonClickEvent) {
  submitSameButtonClickEvent.preventDefault();
//If start has been hit and the first number is revealed, increment clicked to two, show the next random number, and tell the user if they were right or wrong.
  if(clicked == 1){  
    clicked++;  
    nextNumber.value = tempNextNumber;
  
    if (tempNextNumber == tempInitialNumber) {
      return alert("You guessed correctly!");
    }
    else {
      return alert("You guessed wrong :(");
    }
  }
    //If the user has already completed the game, tell them to hit reset to play again.
  if(clicked == 2){
    return alert("Please hit reset to play again.");
  }
    //If the user has not hit start to see the first number, make them hit start before they can guess.
  else {
    return alert("Please hit start before guessing");
  }
});
//higher guess button click event listener.
submitHigher.addEventListener("click", function (submitHigherButtonClickEvent) {
  submitHigherButtonClickEvent.preventDefault();
//If start has been hit and the first number is revealed, increment clicked to two, show the next random number, and tell the user if they were right or wrong.
  if(clicked == 1){
    clicked++;  
    nextNumber.value = tempNextNumber;
  
    if (tempNextNumber > tempInitialNumber) {
      return alert("You guessed correctly!");
    }
    else {
      return alert("You guessed wrong :(");
    }
  }
    //If the user has already completed the game, tell them to hit reset to play again.
  if(clicked == 2){
    return alert("Please hit reset to play again.");
  }
    //If the user has not hit start to see the first number, make them hit start before they can guess.
  else {
    return alert("Please hit start before guessing");
  }
});
//reset button click event listener.
submitReset.addEventListener("click", function (submitResetButtonClickEvent) {
  submitResetButtonClickEvent.preventDefault();
  //reset clicked to 0 so they can hit the buttons in the correct order.
  clicked = 0;
  //reset the temp numbers
  tempInitialNumber = -1;
  tempNextNumber = -1;
  //clear the text boxes.
  initialNumber.value = "";
  nextNumber.value = "";
});