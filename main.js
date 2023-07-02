import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'


function fizzBuff(a) {
  for (let i = 0; i < a; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
      console.log("Fizz");
    }
    else if (i % 5 == 0) {
      console.log("Buzz");
    }
    else
      console.log(i);
  }
}

fizzBuff(50);

const choiceMenu = ["rock", "paper", "scissors"];
const resultMenu = [
  ["t", "c", "u"],
  ["u", "t", "c"],
  ["c", "u", "t"]
];
const resultMap = {
  't': "Tie!",
  'u': "You win!",
  'c': "You lose, hehe"
};

const resultText = document.getElementById("result");
let resultEmoji = document.querySelector("#resultEmoji span");

const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const resultButton = document.getElementById("resultEmoji")
const btnArr = [rockButton, paperButton, scissorsButton, resultButton]

const emojiArray = ["🗿", "🧻", "✂️"];
const textArray = ["Rock", "Paper", "Scissors"]

function wait(milis) {
  return new Promise(resolve => setTimeout(resolve, milis))
}

function getComputerChoice() {
  let choice = choiceMenu[Math.floor(Math.random() * choiceMenu.length)];
  return choiceMenu.indexOf(choice);
}

function emojiChange(emoji) {
  resultEmoji.innerHTML = emoji;
}

function reset() {
  setTimeout(() => {
    btnArr.forEach(e => e.classList.remove("selected"));
    resultEmoji.innerHTML = "❓";
    resultText.innerHTML = "Choose your weapon.";
  }, 2000);
}

function RPSgame(playerChoice) {
  let computerChoice = getComputerChoice();
  let result = resultMenu[playerChoice][computerChoice];

  resultButton.classList.add("selected");

  resultEmoji.innerHTML = emojiArray[computerChoice];
  resultText.innerHTML = resultMap[result];

  reset();
}

function sracka(choice, tim, index) {
  setTimeout(() => {
    if (tim != 2000) {
      emojiChange(emojiArray[index])
      resultText.innerHTML = textArray[index]
      return
    }
    RPSgame(choice)
  }, tim);
}

function animateEmoji(choice) {
  let time = 0;

  for (let index = 0; index < 4; index++) {
    time += 500;
    sracka(choice, time, index)
  }
}

rockButton.addEventListener("click", () => {
  rockButton.classList.add("selected");
  animateEmoji(0)
});
paperButton.addEventListener("click", () => {
  paperButton.classList.add("selected");
  animateEmoji(1);
});
scissorsButton.addEventListener("click", () => {
  scissorsButton.classList.add("selected");
  animateEmoji(2);
});
