   
   var numberOfPianoButtons = document.querySelectorAll(".piano").length;

   for (var i = 0; i<numberOfPianoButtons; i++){
   
   document.querySelectorAll(".piano")[i].addEventListener("click", function () {

      var buttonInnerHTML = this.innerHTML;

      makesound (buttonInnerHTML)     
    

      
   });
}


document.addEventListener("keypress", function(event){

makesound (event.key);

});

function makesound(key) {

switch (key) {

case "a":
      var A = new Audio("music/A.mp3");
      A.play();
      break;

    case "s":
      var S = new Audio("music/S.mp3");
      S.play();
      break;

    case "d":
      var D = new Audio("music/D.mp3");
      D.play();
      break;

    case "f":
      var F = new Audio("music/F.mp3");
      F.play();
      break;

    case "g":
      var G = new Audio("music/G.mp3");
      G.play();
      break;

    case "h":
      var H = new Audio("music/H.mp3");
      H.play();
      break;

    case "j":
      var J = new Audio("music/J.mp3");
      J.play();
      break;

case "k":
      var K = new Audio("music/K.mp3");
      K.play();
      break;

      case "l":
      var F = new Audio("music/F.mp3");
      F.play();
      break;

      case "c":
      var G = new Audio("music/G.mp3");
      G.play();
      break;

      case "v":
      var H = new Audio("music/H.mp3");
      H.play();
      break;

      case "b":
      var F = new Audio("music/F.mp3");
      F.play();
      break;

      case "n":
      var G = new Audio("music/G.mp3");
      G.play();
      break;

    default:
      console.log(key);


}

}


   

      

    


