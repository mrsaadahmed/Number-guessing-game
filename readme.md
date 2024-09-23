### 1. **HTML (index.html)**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="game-container">
        <h1>Number Guessing Game</h1>
        <p>Guess a number between 1 and 100</p>
        
        <input type="number" id="guessInput" placeholder="Enter your guess" />
        <button id="submitGuess">Submit Guess</button>
        <button id="restartGame" style="display: none;">Restart Game</button>
        
        <p id="feedback"></p>
        <p>Number of attempts: <span id="attempts">0</span></p>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

#### Key Points:
- **`<!DOCTYPE html>`**: This tells the browser that this is an HTML5 document.
- **`<html lang="en">`**: The `lang="en"` attribute specifies that the content is in English.
- **`<head>`**: Contains metadata about the document. 
  - **`<meta charset="UTF-8">`** ensures that the document uses the UTF-8 character encoding (handling all languages).
  - **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`** ensures the page displays correctly on mobile devices.
  - **`<title>`**: Sets the title for the browser tab.
  - **`<link rel="stylesheet" href="style.css">`**: Links an external CSS file for styling.
  
- **`<body>`**: Contains all the visible content of the web page.
  - **`<div class="game-container">`**: This is the main container for the game’s content. Everything related to the game is wrapped inside this div.
  
- **`<h1>Number Guessing Game</h1>`**: The main heading for the game.

- **`<p>Guess a number between 1 and 100</p>`**: A simple paragraph explaining the range of numbers.

- **`<input type="number" id="guessInput" placeholder="Enter your guess">`**:
  - This creates an input field where users can enter their guess.
  - The `type="number"` ensures that only numbers can be entered.
  - The `id="guessInput"` helps us reference this element in the JavaScript code.
  - `placeholder="Enter your guess"` gives a hint to the user about what to do.

- **`<button id="submitGuess">Submit Guess</button>`**: A button that submits the guess. We will reference it in JavaScript using the `id="submitGuess"`.

- **`<button id="restartGame" style="display: none;">Restart Game</button>`**: A button that restarts the game. It is initially hidden (`style="display: none;"`).

- **`<p id="feedback"></p>`**: This is where the feedback (e.g., "too high", "too low") will be displayed. It is initially empty.

- **`<p>Number of attempts: <span id="attempts">0</span></p>`**: A paragraph that keeps track of how many attempts the user has made, with the attempts counter starting at 0 (`<span id="attempts">0</span>`).

- **`<script src="script.js"></script>`**: This includes the JavaScript file (script.js) where all the game logic is implemented.

---

### 2. **CSS (style.css)**

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.game-container {
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    width: 300px;
    text-align: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

h1 {
    font-size: 24px;
}

input[type="number"] {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px 0;
    width: 100%;
}

button:hover {
    background-color: #45a049;
}

#feedback {
    font-size: 18px;
    margin-top: 20px;
}

#attempts {
    font-weight: bold;
}
```

#### Key Points:

- **`body` styling**:
  - **`display: flex`**: Makes the body a flex container, which makes centering content easy.
  - **`justify-content: center` and `align-items: center`**: Centers the content horizontally and vertically within the viewport.
  - **`height: 100vh`**: Ensures the content takes up the full height of the browser window.
  - **`margin: 0`**: Removes any default margin around the body.

- **`.game-container` styling**:
  - **`background-color: white`**: Gives the container a white background.
  - **`border-radius: 10px`**: Rounds the corners of the container.
  - **`box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1)`**: Adds a subtle shadow for a card-like appearance.
  - **`padding: 30px`**: Adds space inside the container around its contents.
  - **`width: 300px`**: Sets a fixed width of 300px for the container.
  - **`text-align: center`**: Centers the text inside the container.

- **`h1` styling**:
  - **`font-size: 24px`**: Increases the font size of the main heading.

- **`input[type="number"]` styling**:
  - **`width: 100%`**: Ensures the input takes up the full width of the container.
  - **`padding: 10px`**: Adds space inside the input field.
  - **`border-radius: 5px`**: Rounds the corners of the input.
  - **`margin-top: 10px` and `margin-bottom: 10px`**: Adds space above and below the input field.

- **`button` styling**:
  - **`background-color: #4CAF50`**: Adds a green background color to buttons.
  - **`color: white`**: Makes the text on the buttons white.
  - **`padding: 10px 20px`**: Adds space inside the button.
  - **`border-radius: 5px`**: Rounds the corners of the buttons.
  - **`cursor: pointer`**: Changes the cursor to a pointer when hovering over the buttons.
  - **`width: 100%`**: Ensures the button takes up the full width of the container.
  - **`button:hover`**: Changes the background color slightly on hover.

- **`#feedback` styling**:
  - **`font-size: 18px`**: Increases the font size of feedback text.
  - **`margin-top: 20px`**: Adds space above the feedback text.

- **`#attempts` styling**:
  - **`font-weight: bold`**: Makes the attempts counter bold.

---

### 3. **JavaScript (script.js)**

```javascript
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const feedback = document.getElementById("feedback");
const attemptsDisplay = document.getElementById("attempts");
const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");
const restartGame = document.getElementById("restartGame");

submitGuess.addEventListener("click", checkGuess);
restartGame.addEventListener("click", resetGame);

function checkGuess() {
    const userGuess = Number(guessInput.value);
    
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        feedback.textContent = "Please enter a valid number between 1 and 100!";
        return;
    }

    attempts++;
    attemptsDisplay.textContent = attempts;

    if (userGuess === randomNumber) {
        feedback.textContent = `Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts!`;
        endGame();
    } else if (userGuess > randomNumber) {
        feedback.textContent = "Your guess is too high. Try again!";
    } else {
       

 feedback.textContent = "Your guess is too low. Try again!";
    }

    guessInput.value = "";
}

function endGame() {
    guessInput.disabled = true;
    submitGuess.style.display = "none";
    restartGame.style.display = "inline";
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsDisplay.textContent = attempts;
    feedback.textContent = "";
    guessInput.value = "";
    guessInput.disabled = false;
    submitGuess.style.display = "inline";
    restartGame.style.display = "none";
}
```

#### Key Points:

1. **Variables**:
   - **`let randomNumber = Math.floor(Math.random() * 100) + 1;`**: Generates a random number between 1 and 100.
     - **`Math.random()`** returns a random decimal between 0 and 1.
     - **`Math.floor()`** rounds down to the nearest integer.
     - We multiply by 100 to get a range between 0 and 99, then add 1 to shift it to 1-100.
   
   - **`let attempts = 0;`**: Tracks the number of guesses the user has made.

   - **`const feedback = document.getElementById("feedback");`**: Gets the `feedback` element by its ID and stores it in the `feedback` variable. This allows us to update the feedback text.

   - **`const attemptsDisplay = document.getElementById("attempts");`**: Gets the `attempts` span, which shows the number of attempts made by the user.

   - **`const guessInput = document.getElementById("guessInput");`**: Gets the input field where the user types their guess.

   - **`const submitGuess = document.getElementById("submitGuess");`**: Gets the "Submit Guess" button.

   - **`const restartGame = document.getElementById("restartGame");`**: Gets the "Restart Game" button.

2. **Event Listeners**:
   - **`submitGuess.addEventListener("click", checkGuess);`**: Adds an event listener to the "Submit Guess" button. When the button is clicked, the `checkGuess()` function is called.
   
   - **`restartGame.addEventListener("click", resetGame);`**: Adds an event listener to the "Restart Game" button. When the button is clicked, the `resetGame()` function is called.

3. **checkGuess() Function**:
   - **`const userGuess = Number(guessInput.value);`**: Gets the user's input from the `guessInput` field and converts it to a number using `Number()`.
   
   - **Validation**: 
     - **`if (!userGuess || userGuess < 1 || userGuess > 100) {`**: This checks if the input is invalid.
       - **`!userGuess`** checks if the input is empty or non-numeric.
       - **`userGuess < 1 || userGuess > 100`** ensures the input is between 1 and 100.
       - If the input is invalid, it shows an error message in the feedback.
     
   - **Increment Attempts**:
     - **`attempts++`** increments the attempts counter by 1 after every valid guess.
     - **`attemptsDisplay.textContent = attempts;`** updates the number of attempts on the screen.

   - **Check Guess**:
     - **`if (userGuess === randomNumber)`**: If the guess is correct, a congratulations message is shown, and the game ends by calling `endGame()`.
     - **`else if (userGuess > randomNumber)`**: If the guess is higher than the random number, the feedback tells the user the guess is too high.
     - **`else`**: If the guess is lower than the random number, the feedback tells the user the guess is too low.
   
   - **Clear Input**:
     - **`guessInput.value = "";`** clears the input field after each guess, so the user doesn’t have to manually delete their previous input.

4. **endGame() Function**:
   - **`guessInput.disabled = true;`**: Disables the input field so the user can't enter more guesses after the game ends.
   - **`submitGuess.style.display = "none";`**: Hides the "Submit Guess" button after the game ends.
   - **`restartGame.style.display = "inline";`**: Shows the "Restart Game" button, allowing the user to restart the game.

5. **resetGame() Function**:
   - **`randomNumber = Math.floor(Math.random() * 100) + 1;`**: Generates a new random number between 1 and 100.
   - **`attempts = 0;`**: Resets the number of attempts to 0.
   - **`attemptsDisplay.textContent = attempts;`**: Updates the attempts display to show 0.
   - **`feedback.textContent = "";`**: Clears the feedback message.
   - **`guessInput.value = "";`**: Clears the input field.
   - **`guessInput.disabled = false;`**: Enables the input field so the user can guess again.
   - **`submitGuess.style.display = "inline";`**: Shows the "Submit Guess" button.
   - **`restartGame.style.display = "none";`**: Hides the "Restart Game" button, as it is only needed after the game ends.

---

### Flow of the Game:
1. The game starts by generating a random number between 1 and 100.
2. The user guesses a number by entering it in the input field and clicking "Submit Guess".
3. The JavaScript checks if the guess is correct, too high, or too low, and provides feedback.
4. The number of attempts is updated after each valid guess.
5. If the guess is correct, the game ends, and the user is given the option to restart the game by clicking "Restart Game".
6. When the user clicks "Restart Game", the game resets, and the user can play again with a new random number.

This game demonstrates core JavaScript concepts like variables, functions, conditionals, DOM manipulation, and event handling.