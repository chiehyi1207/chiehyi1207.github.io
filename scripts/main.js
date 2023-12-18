var myImage = document.querySelector("img");
myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/dog.jpg") {
        myImage.setAttribute("src", "images/dog2.jpg");
    } else {
        myImage.setAttribute("src", "images/dog.jpg");
    }
};
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
myButton.onclick = function () {
    setUserName();
  };
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.innerHTML = "Mozilla is cool, " + storedName;
  }

function setUserName() {
    let myName = prompt("Please enter your name.");
    if(!myName || myName === null) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
      }
  }