var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var num = "#0123456789";
var sym = "#!*._-~/#";

function generatePassword(){

    var lengthOfPasswordRequested = prompt('How long would you like your password to be?');
    var lengthConvertedToNumber = parseInt(lengthOfPasswordRequested);

    if (lengthConvertedToNumber < 8){
        alert('Please provide a number greater than 7');
    }

    if (lengthConvertedToNumber > 128){
        alert('Please provide a number less than 129');
    }

    var upperCharRequested = confirm('Would you like upper case characters?');
    var lowerCaseCharReuqested = confirm('Would you like lower case characters?');

    if( upperCharRequested === false && lowerCaseCharReuqested === false){
        alert('You must provide at least one character type');
    }



    // i still need to declaring an empty string variable to add characters too and return 
    var passwordStringToPopulate = ''; 
    // also i still need to declare an empty string variable which will use all possible characters requested in order to fill password length
    var stringOfAllPossibleCharacters = '';


    // still need to checking what has been requested and populating the two strings above accordingly
    if (upperCharRequested === true){
        var upperCharacterToAdd = upperCase[Math.floor(Math.random() * upperCase.length)];
        passwordStringToPopulate += upperCharacterToAdd;
        stringOfAllPossibleCharacters += upperCase;
    }

    if (lowerCaseCharReuqested === true){
        var lowerCharacterToAdd = lowerCase[Math.floor(Math.random() * lowerCase.length)];
        passwordStringToPopulate += lowerCharacterToAdd;
        stringOfAllPossibleCharacters += lowerCase;
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



