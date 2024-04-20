function checkGuess() {
  // Generate a random number between 1 and 100
  let randomNumber = Math.floor(Math.random() * 11);
  const result = document.getElementById("result");
  // Get the user's guess from the input field
  const userGuess = parseInt(document.getElementById("guessInput").value);

  // Compare the user's guess with the random number
  if (userGuess === randomNumber) {
    document.getElementById("result").textContent =
      "Congratulations! You guessed the correct number!";
    result.classList.add("celebrate");
  } else if (userGuess < randomNumber) {
    document.getElementById("result").textContent = "Too low! Try again.";
    result.classList.add("sad");
  } else {
    document.getElementById("result").textContent = "Too high! Try again.";
    result.classList.add("sad");
  }
  document.getElementById("guessInput").value = "";
}
// function clear() {
//   const clearInput = document.getElementById("guessInput");
//   clearInput.value = "";
// }
