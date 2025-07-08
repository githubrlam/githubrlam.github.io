// // Store a reference to the <h1> in a variable
// const myHeding = document.querySelector("h1");
// // Update the text content of the <h1>
// myHeding.textContent = "Hello world";

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc == "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/rick.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  // prompt func: ask user to enter data
  let myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    // store in var
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla is cool," + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}

myButton.addEventListener("click", () => {
  setUserName();
});
