var passwordHolder = document.getElementById("showPassword");
  var newSpecial = [
    "`",
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "[",
    "{",
    "]",
    "}",
    "|",
    ";",
    ":",
    "'",
    ",",
    "<",
    ".",
    ">",
    "/",
    "?",
  ]

function generateCapital(){
  //get a random number from 33 to 127
  var newLetter = Math.random()*26;
  //get rid of the decimals
  newLetter = Math.floor(newLetter)+65;
  console.log(newLetter)
  passwordHolder.innerHTML = String.fromCharCode(newLetter);
  }//end generate

function generateLower(){
  //get a random number from 33 to 127
  var newLetter = Math.random()*26;
  //get rid of the decimals
  newLetter = Math.floor(newLetter)+97;
  console.log(newLetter)
  passwordHolder.innerHTML = String.fromCharCode(newLetter);
  }//end generate

function generateNumber(){
  //get a random number from 33 to 127
  var newLetter = Math.random()*10;
  //get rid of the decimals
  newLetter = Math.floor(newLetter)+48;
  console.log(newLetter)
  passwordHolder.innerHTML = String.fromCharCode(newLetter);
  }//end generate

function generateSpecial(){
  //get a random number from 33 to 127
  var newLetter = Math.random()*newSpecial.length;
  newLetter = Math.floor(newLetter)
  console.log(newLetter)
  passwordHolder.innerHTML = (newSpecial[newLetter])
  }//end generate
