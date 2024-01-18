// Side bar Button functions
 

// Button Open Close
function openNav(){
     document.getElementById("navbar").style.width = "300px";
     document.getElementById("main-doc").style.left = "300px";
}
function closeNav(){
     document.getElementById("navbar").style.width = "0";
     document.getElementById("main-doc").style.left = "0";
}

document.getElementById("button").addEventListener("click", button);

function button(){

     if(document.getElementById("navbar").style.width == "0px"){
          openNav(); 
     } else{
          closeNav();          
     }
}

// Button After Media Query

document.getElementById("button-query").addEventListener("click", buttonQuery);

function buttonQuery(){

     if(document.getElementById("navbar").style.width == "0px"){
          document.getElementById("navbar").style.width = "300px";
          document.getElementById("main-doc").style.left = "0px"; 
     } else{
          document.getElementById("navbar").style.width = "0px";
          document.getElementById("main-doc").style.left = "0px";             
     }
     
}

// Small Screens side bar links close bar after click.

let maxWidth = window.matchMedia("(max-width: 730px)");

maxWidth.addListener(function (){

  let navLinks = document.querySelectorAll(".nav-link").length;
 
  for(let i = 0; i < navLinks; i++){

  document.querySelectorAll(".nav-link")[i].addEventListener("click", closeNav);
}

});