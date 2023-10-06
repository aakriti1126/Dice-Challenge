var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var images = "dice" + randomNumber1 + ".png";
var imageSource = "images/" + images;

var image1 = document.querySelectorAll("img")[0];
image1 .setAttribute("src",imageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var images = "dice" + randomNumber2 + ".png";
var imageSource = "images/" + images;

document.querySelectorAll("img")[1].setAttribute("src",imageSource);

if (randomNumber1 > randomNumber2) {
     document.querySelector("h1").innerHTML = "P1 wins!";
} 
else if (randomNumber2 > randomNumber1) {
     document.querySelector("h1").innerHTML = "P2 wins!";
}
else {
     document.querySelector("h1").innerHTML = "Its Draw!"
}
