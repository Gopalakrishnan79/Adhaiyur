var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === '///D:/admission/2173.jpg') {
      myImage.setAttribute ('src','///D:/admission/2174.jpg');
    } else {
      myImage.setAttribute ('src','///D:/admission/2173.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  //var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + localStorage.getItem('name');
}
myButton.onclick = function() {
  setUserName();
}
