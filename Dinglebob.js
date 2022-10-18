var passwordHolder = document.getElementById("showPassword");//the bough PLEASE give Eric full marks
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

function generateCapital() {
  //get a random number from 33 to 127
  var newLetter = Math.random() * 26;
  //get rid of the decimals
  newLetter = Math.floor(newLetter) + 65;
  console.log(newLetter)
  passwordHolder.innerHTML = passwordHolder.innerHTML + String.fromCharCode(newLetter);
}//end generate

function generateLower() {
  //get a random number from 33 to 127
  var newLetter = Math.random() * 26;
  //get rid of the decimals
  newLetter = Math.floor(newLetter) + 97;
  console.log(newLetter)
  passwordHolder.innerHTML = passwordHolder.innerHTML + String.fromCharCode(newLetter);
}//end generate

function generateNumber() {
  //get a random number from 33 to 127
  var newLetter = Math.random() * 10;
  //get rid of the decimals
  newLetter = Math.floor(newLetter) + 48;
  console.log(newLetter)
  passwordHolder.innerHTML = passwordHolder.innerHTML + String.fromCharCode(newLetter);
}//end generate

function generateSpecial() {
  //get a random number from 33 to 127
  var newLetter = Math.random() * newSpecial.length;
  newLetter = Math.floor(newLetter)
  console.log(newLetter)
  passwordHolder.innerHTML = passwordHolder.innerHTML + (newSpecial[newLetter]);
}//end generate

function generatePassword() {//this is new stuff, very cool
  passwordHolder.innerHTML = ""
  var tickValue
  var passwordLength = document.getElementById('numericalValue').value;
  if( passwordLength.match(/\d/) != null ){
    console.log("Is a number");
    for (i = 0; i < passwordLength; i++) {
    tickValue = Math.random() * 4
    tickValue = Math.floor(tickValue)
    console.log(tickValue)
    if (tickValue == 0) {
      generateCapital();
    } else {
      if (tickValue == 1) {
        generateLower();
      } else {
        if (tickValue == 2) {
          generateNumber();
        } else {
          generateSpecial();
        }
      }
    }
  }//end loop
  } else {
    
    if (passwordLength.length == 0) {
      console.log("variable  is empty");
    } else {
      console.log("Invalid");
      //end of if
    }//end of else2
  }//else1
}//end generatePassword
