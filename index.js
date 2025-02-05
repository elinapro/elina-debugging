const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset");
const messages = document.getElementsByClassName("message");
const tooHighMessage = document.getElementById("too-high");
const tooLowMessage = document.getElementById("too-low");
const maxGuessesMessage = document.getElementById("max-guesses");
const numberOfGuessesMessage = document.getElementById("number-of-guesses");
const correctMessage = document.getElementById("correct");

let targetNumber;
let attempts = 0;
let maxNumberOfAttempts = 5;

hideAllMessages();

// Returns a random number from min (inclusive) to max (exclusive)
// Usage:
// > getRandomNumber(1, 50)
// <- 32
// > getRandomNumber(1, 50)
// <- 11
// let min >= 1;
// let max <= 99;
// making a change

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function checkGuess() {
  // Get value from guess input element
  const guess = parseInt(guessInput.value, 10);
  attempts = attempts + 1;

  hideAllMessages();

  let remainingAttempts = maxNumberOfAttempts - attempts;

  if (guess === targetNumber) {
    numberOfGuessesMessage.style.display = "";
    numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;

    correctMessage.style.display = "";

    submitButton.disabled = true;
    guessInput.disabled = true;
  } else {
    if (guess < targetNumber) {
      tooLowMessage.style.display = "";
    } else {
      tooHighMessage.style.display = "";
    }
    console.log(remainingAttempts);

    if (remainingAttempts > 0) {
      numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
    }
  }
}
//guesses if theyre not the same- continue 5 guesses until 0,

//low or high message

// if (guess < targetNumber) {
//   tooLowMessage.style.display = "";
// } else {
//   tooHighMessage.style.display = "";
// }

// numberOfGuessesMessage.style.display = "";

// if (remainingAttempts > 0) {
//   numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
// } else {
//   numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> 0 guesses remaining`;
//   submitButton.disabled = true; // no guesses left
//   guessInput.disabled = true;
// }

// if (attempts === maxNumberOfAttempts) {
//   submitButton.disabled = true;
//   guessInput.disabled = true;
// }

guessInput.value = "";
hideAllMessages();
resetButton.style.display = "";

// messages = [m1, m2, m3, m4, m5]
//elementIndex = 0 = m1, 1 = m2, 2 = m3, 3= m4, 4= m5, 5 =
function hideAllMessages() {
  for (let elementIndex = 0; elementIndex < messages.length; elementIndex++) {
    messages[elementIndex].style.display = "none";
  }
}

function setup() {
  // Get random number
  targetNumber = getRandomNumber(1, 99);
  console.log(`target number: ${targetNumber}`);

  // Reset number of attempts
  maxNumberOfAttempts = 5;
  hideAllMessages();

  // Enable the input and submit button
  submitButton.disabled = false;
  guessInput.disabled = false;
}

submitButton.addEventListener("click", checkGuess);
resetButton.addEventListener("click", setup);

setup();
