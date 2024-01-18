// Detecting buttons

let numberOfButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    let buttonInnerHtml = this.innerHTML;
    keyPress(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });

}

// Detecting keyboard press

document.addEventListener("keydown", function (event){
     keyPress(event.key);
     buttonAnimation(event.key);
})


function keyPress(key){
     
    switch (key) {
     case "w":
       var hiHat = new Audio("sounds/HiHat.mp3");
       hiHat.play();
       break;
     case "a":
       var snare = new Audio("sounds/snare.mp3");
       snare.play();
       break;
     case "s":
       var kick = new Audio("sounds/kick-bass.mp3");
       kick.play();
       break;
     case "d":
       var tom1 = new Audio("sounds/tom-1.mp3");
       tom1.play();
       break;
     case "j":
       var tom2 = new Audio("sounds/tom-2.mp3");
       tom2.play();
       break;
     case "k":
       var tom3 = new Audio("sounds/tom-3.mp3");
       tom3.play();
       break;
     case "l":
       var crash = new Audio("sounds/crash.mp3");
       crash.play();
       break;

     default: console.log(buttonInnerHtml)
   }

}

function buttonAnimation(currentKey){

    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
          activeButton.classList.remove("pressed");
     }, 100);

}