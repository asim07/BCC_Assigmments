var num = Math.floor(Math.random() * 11);
var guess = prompt("Guess no between 0 and 10");
console.log(num);
if (num - guess == 1 || num - guess == -1) {
  alert("Close enough to the correct answer");
} else if (num == guess) {
  alert("Bingo! Correct answer.");
}
