/*
  DOM EXAMPLE

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

*/

/*
  Selector Methods

  document.getElementById()
  document.getElementsByClassName()
  document.getElementsByTagName()
  document.querySelector()
  document.querySelectorAll()

*/

var list1 = document.getElementById("highlight"); // Return the element with ID

var tags = document.getElementsByClassName("bolded"); // Return a HTML Collection not a Array

var allList = document.getElementsByTagName("li"); // Return a HTML Collection

/* These to are the best Selectors to use */
var listIDStyle = document.querySelector("#highlight"); // Return first element matching the CSS Style selector

var allTagsStyle = document.querySelectorAll(".bolded"); // Return a HTML Collection with CSS Style selector

