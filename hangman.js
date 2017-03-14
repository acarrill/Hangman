//Hangman Game||Html||CSS

var gameWords = new Array("hola");
var maxTrieds = 6;
var indexWord = 0;
var hiddenWord = ""; // Se inicializan al utilizar startGame
var numFailures = 0;
var hangman = new Image();

function startGame(){
  indexWord = Math.floor(Math.random() * gameWords.length);
  hiddenWord = gameWords[indexWord].toUpperCase();
  numTrieds = 0;
  numFailures = 0;
  hangman = document.getElementById("hangmanImage")
  hangman.src = "0.jpg";
}

function processWords(){
  var wordState;
  for (var i=0; i < hiddenWord.length; i++){
    wordState += "_" //PROGRAMAR MAS TARDE PARA QUE ACEPTE ESPACIOS
  }
  function proccesTrieds(tried){
    /*
    Actualize the game state after introduce the new tried (letter or word)
    and return the visible part of the hidden word
    */
    var found = false;
    if (tried.length == 1) {
      for (var i=0; i < hiddenWord.length; i++) {
        if (tried == hiddenWord[i]) {
          console.log("rrrrr")
          wordState[i] = tried;
          found = true;
        }
      }
    } else if (tried.length > 1) {
      if (tried == hiddenWord) {
        wordState = hiddenWord;
        found = true;
      }
    }
    if (found == false) {
      numFailures = numFailures + 1;
    }
    return wordState;
  }
  return proccesTrieds;
}

var reloadGame = processWords();

function gameControl() {
  var tried = document.getElementById("try").value.toUpperCase();
  visibleWord = reloadGame(tried);
  hangman.src = numFailures + ".jpg";
  var informacionJuego = "<div id='informacionJuego'> ";
informacionJuego += "<table>";
informacionJuego += "   <tr>";
informacionJuego += "      <td> Max. Numero de Intentos </td>";
informacionJuego += "      <td><strong>" + maxTrieds + "</strong></td>";
informacionJuego += "   </tr>";
informacionJuego += "   <tr>";
informacionJuego += "      <td> Intentos </td>";
informacionJuego += "      <td><strong>" + numFailures + "</strong></td>";
informacionJuego += "   </tr>";
informacionJuego += "   <tr>";
informacionJuego += "      <td> Palabra Visible </td>";
informacionJuego += "      <td>" + visibleWord + "</td>";
informacionJuego += "   </tr>";
informacionJuego += "   <tr>";
informacionJuego += "      <td> Letras Utilizadas </td>";
informacionJuego += "   </tr>";
informacionJuego += "</table>";
informacionJuego += "</div>";

document.getElementById("GameState").innerHTML = informacionJuego;
}
