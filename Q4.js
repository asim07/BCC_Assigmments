var sub = parseInt(prompt("Enter marks obtain in three subjects"));
var total = parseInt(prompt("Enter Total Marks"));

var percentage = (sub / total) * 100;
var grades, remarks;
if (percentage >= 80) {
  grades = "A - one";
  remarks = "Ecxellent";
} else if (percentage >= 70) {
  grades = "A";
  remarks = "good";
} else if (percentage >= 60) {
  grades = "B";
  remarks = "You need to improve";
} else if (percentage < 60) {
  grades = "Fail";
  remarks = "Sorry";
}

document.write(
  "<h1>Mark Sheet \n\n\n</h1>" + "<h3>Total marks : " + total + " </h3>"
);

document.write("<h3>\nMarks Obtain : " + sub + "</h3>");

document.write("<h3>percentage : " + parseInt(percentage) + "% </h3>");
document.write("<h3>Grade : " + grades + " </h3>");
document.write("<h3>Remarks : " + remarks + "</h3>");
