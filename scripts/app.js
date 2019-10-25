// Select the H1
var h1 = document.querySelector("h1");

// Manipulate a property
h1.style.color = "red";

// Select the body
var body = document.querySelector("body");
var isBlue = false;

// Manipulate a property
setInterval(function () {
  if (isBlue) {
    body.style.background = "white";
  } else {
    body.style.background = "#3498db";
  }
  isBlue = !isBlue;
}, 2000);
