// button Play Game
document.getElementById("play").addEventListener("click", function(){


// Generate a random number and change the images with that number

// Random number and img Player 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png" );

// Random number and img Player2
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

// Change the h1 - win or draw depending the result of the random numbers.

if(randomNumber1 > randomNumber2){
     document.querySelector(".container h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1){
     document.querySelector(".container h1").innerHTML = "Player 2 Wins!"
}else{
     document.querySelector(".container h1").innerHTML = "⚔ Draw!"
}

})

