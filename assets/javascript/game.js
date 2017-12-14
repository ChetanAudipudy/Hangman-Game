var wordList = [
  ["P", "O", "K", "E", "M", "O", "N"],
  ["A", "R", "C", "E", "U", "S"],
  ["M", "I", "S", "S", "I", "N", "G", "N", "O"],
  ["C", "H", "A", "R", "I", "Z", "A", "R", "D"],
  ["M", "E", "W", "T", "W", "O"],
  ["G", "A", "R", "D", "E", "V", "O", "I", "R"],
  ["D", "I", "A", "L", "G", "A"],
  ["P", "A", "L", "K", "I", "A"],
  ["G", "I", "R", "A", "T", "I", "N", "A"],
  ["S", "N", "O", "R", "L", "A", "X"],
  ["A", "R", "C", "A", "N", "I", "N", "E"],
  ["S", "A", "L", "A", "M", "E", "N", "C", "E"]
];
var random = Math.floor(Math.random() * (wordList.length - 1));

var chosenWord = wordList[random];
var unkownWord = new Array(chosenWord.length);
var wrongLetter = 0;
var wrongCount = 6;

for (var i = 0; i < unkownWord.length; i++) {
  unkownWord[i] = "_ ";
}


function printUnderScore() {
  for (var i = 0; i < unkownWord.length; i++) {
    var inputField = document.getElementById("inputField");
    var letter = document.createTextNode(unkownWord[i]);
    inputField.appendChild(letter);
  }
}

document.onkeyup = function keyPress(event){ 
  var inputLetter = event.key;
  // console.log(inputLetter.toUpperCase());
 
    inputLetter = inputLetter.toUpperCase();
    for (var i = 0; i < chosenWord.length; i++) {
      if (chosenWord[i] === inputLetter) {
        unkownWord[i] = inputLetter + " ";
        var letterMatch = true;
        var keyInput = document.getElementById("keyInput");
      var letter = document.createTextNode(" " + inputLetter);
      keyInput.appendChild(letter);
      }
     
    }

    var inputField = document.getElementById("inputField");
    inputField.innerHTML = "";
    printUnderScore();

    if (!letterMatch) {
      var advisedLetters = document.getElementById("advisedLetters");
      var letter = document.createTextNode(" " + inputLetter);
      advisedLetters.appendChild(letter);
      wrongLetter++;
      wrongCount --;
      document.querySelector("#wrongCount").innerHTML = "Number of wrong letters left : " + wrongCount;
      var hangman = document.getElementById("hangman");
      hangman.src =
        "http://www.writteninpencil.de/Projekte/Hangman/hangman" +
        wrongLetter +
        ".png";
    }

    var endGame = true;
    for (var i = 0; i < unkownWord.length; i++) {
      if (unkownWord[i] === "_ ") {
        endGame = false;
      }
    }
    if (endGame) {
      window.alert("You're like a walking Pokedex!");
      var playSound = document.getElementById("winSound");
      
        playSound.play();
      

    }

    if (wrongLetter === 6) {
      window.alert("You need to improve on your knowledge about Pokemon!!");
      console.log(chosenWord);
      document.querySelector("#finalWord").innerHTML = "The word is : " + chosenWord;
      var playSound = document.getElementById("loseSound");
      
        playSound.play();
    }
  };


function init() {
  printUnderScore();
}

window.onload = init;
