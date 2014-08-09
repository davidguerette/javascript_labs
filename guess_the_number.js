// Generate a random number between 1 and 10
var target_num = Math.floor((Math.random() * 10) + 1)

// alert("The answer is " + target_num)
var name = prompt("What is your name?");

// Ask the user to enter a number
var guess = prompt("Alright " + name + ". What's your best guess?");

// If the number equals the random number let the user know that they've won, other wise let them know that they lost
if (guess == target_num) {
  alert("That's correct! You are made of win");
} else {
  alert("Sorry, incorrect guess. Refresh to try again.");
}
