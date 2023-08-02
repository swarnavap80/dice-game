var randomNumber = Math.floor(Math.random() * 6) + 1;// it will give a random number between 1 & 6

var randomDiceImage = "dice" + randomNumber + ".png"; // it will show random dice image from img 1 t 6

var randomImageSource = "images/" + randomDiceImage; // it is the source of the random image 

var image1 = document.querySelectorAll("img")[0];


image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;// it will give a random number between 1 & 6

var randomDiceImage = "dice" + randomNumber2 + ".png"; // it will show random dice image from img 1 t 6

var randomImageSource = "images/" + randomDiceImage; // it is the source of the random image 


var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource);

if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 wins🏆";
}
else if(randomNumber2>randomNumber){
    document.querySelector("h1").innerHTML = "player2 wins🏆";
}else{
    document.querySelector("h1").innerHTML = "Draw🌝";
}



