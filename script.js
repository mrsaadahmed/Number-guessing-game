let randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let attempts = 0;
const feedback = document.getElementById("feedback");
const attemptsDisplay = document.getElementById("attempts");
const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");
const restartGame = document.getElementById("restartGame");

submitGuess.addEventListener("click", checkGuess);
restartGame.addEventListener("click", resetGame);

function checkGuess() {
    const userGuess = Number(guessInput.value); // Get the user's input as a number

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        feedback.textContent = "Please enter a valid number between 1 and 100!";
        return;
    }

    attempts++; // Increment the number of attempts
    attemptsDisplay.textContent = attempts; // Update the display for number of attempts

    if (userGuess === randomNumber) {
        feedback.textContent = `Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts!`;
        endGame();
    } else if (userGuess > randomNumber) {
        feedback.textContent = "Your guess is too high. Try again!";
    } else {
        feedback.textContent = "Your guess is too low. Try again!";
    }

    guessInput.value = ""; // Clear the input field after each guess
}

function endGame() {
    // Disable the guess input and hide the submit button
    guessInput.disabled = true;
    submitGuess.style.display = "none";
    restartGame.style.display = "inline"; // Show the restart button
}

function resetGame() {
    // Reset everything to start the game over
    randomNumber = Math.floor(Math.random() * 100) + 1; // New random number
    attempts = 0;
    attemptsDisplay.textContent = attempts;
    feedback.textContent = "";
    guessInput.value = "";
    guessInput.disabled = false;
    submitGuess.style.display = "inline";
    restartGame.style.display = "none";
}
