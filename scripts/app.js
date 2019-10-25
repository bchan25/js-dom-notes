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

/*
  Manipulation

  changing and elements style
  adding / removing classes
  changing the content of a tag
  changing attributes(src, href etc)
*/

// Bad idea change css better by adding / removing classes
list1.style.color = "#2ecc71";
list1.style.textDecoration = "line-through";

// Higthligth h1 by adding the .highlight class
var h1 = document.querySelector("h1");
h1.classList.add("highlight");

// Remove a Class
allTagsStyle[1].classList.remove("bolded");

// Fancy
var pTag = document.querySelector("p");


// Manipulate a property
setInterval(function () {

  if (pTag.classList.value === "unfancy") {
    pTag.classList.remove("unfancy");
    pTag.classList.add("fancy");
  } else {
    pTag.classList.remove("fancy");
    pTag.classList.add("unfancy");
  }

}, 1000);
