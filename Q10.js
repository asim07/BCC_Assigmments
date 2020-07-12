var pass = "12345";

var getpass = prompt("Enter password");
if (getpass == "") {
  alert("Plz enter your password");
} else if (pass === getpass) {
  alert("Correct! The password you entered matches the original password.");
} else {
  alert("incorrect password");
}
