//set up password variables
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var sym = "!*._-~/#";

function generatePassword(){
//promts added for requesting password
    var lengthOfPasswordRequested = prompt('How long would you like your password to be?');
    var lengthConvertedToNumber = parseInt(lengthOfPasswordRequested);

    if (lengthConvertedToNumber < 8){
        alert('Please provide a number greater than 7');
    }

    if (lengthConvertedToNumber > 128){
        alert('Please provide a number less than 129');
    }

    var upperCharRequested = confirm('Would you like upper case characters?');
    var lowerCaseCharRequested = confirm('Would you like lower case characters?');
    var numRequested = confirm('Would you like to use a number?');
    var symRequested = confirm('would you like to use a symbol?');
//boolean added here for prompting correct password mix of numbers, letters, symbols, uper & lower case.
    if( upperCharRequested === false && lowerCaseCharRequested === false){
        alert('You must provide at least one character type');
    }
    if( numRequested === false && symRequested === false){
        alert('you must provide at least one number character or one symbol character');
    }
 //  
    var passwordStringToPopulate = '' ; 
    // also i still need to declare an empty string variable which will use all possible characters requested in order to fill password length
    var stringOfAllPossibleCharacters = '';
 // 
    if (upperCharRequested === true){
        var upperCharacterToAdd = upperCase[Math.floor(Math.random() * upperCase.length)];
        passwordStringToPopulate += upperCharacterToAdd;
        stringOfAllPossibleCharacters += upperCase;
    }
    if (lowerCaseCharRequested === true){
        var lowerCharacterToAdd = lowerCase[Math.floor(Math.random() * lowerCase.length)];
        passwordStringToPopulate += lowerCharacterToAdd;
        stringOfAllPossibleCharacters += lowerCase;
    }
    if (numRequested === true){
        var numCharacterToAdd = num[Math.floor(Math.random() * num.length)];
        passwordStringToPopulate += numCharacterToAdd;
        stringOfAllPossibleCharacters += num;
    }
    if (symRequested === true){
        var symCharacterToAdd = sym[Math.floor(Math.random() * sym.length)];
        passwordStringToPopulate += symCharacterToAdd;
        stringOfAllPossibleCharacters += sym;
    }
// do loops from zero to the requested password length and checks if the password length is less than the requested length and adds a character every time it isnt
for (var i = 0; i <= lengthConvertedToNumber; i++){
    if (passwordStringToPopulate.length < lengthConvertedToNumber){
        var characterToAdd = stringOfAllPossibleCharacters[Math.floor(Math.random() * stringOfAllPossibleCharacters.length)];
        passwordStringToPopulate += characterToAdd;
    }
}

  //returning the string - this was initially empty and will have gone through the population process...
     return passwordStringToPopulate;
}

function writePassword() {
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
var generateBtn = document.querySelector('#generate');
generateBtn.addEventListener('click', writePassword);



