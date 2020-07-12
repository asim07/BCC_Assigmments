var t = parseInt(prompt("Enter time"));

if (t >= 0000 && t <= 1200) {
  alert("Good Morning");
} else if (t >= 1200 && t <= 1700) {
  alert("Good afternoon");
} else if (t >= 1700 && t <= 2100) {
  alert("Good evening");
} else if (t >= 2100 && t <= 2359) {
  alert("Good Night");
}
