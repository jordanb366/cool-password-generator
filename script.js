// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  // Ask user for password character length

var password = "";
var characterCriteriaPool = [""];

var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomLowerCase = Math.floor(Math.random()* lowerCaseArray.length);
console.log(lowerCaseArray[randomLowerCase]);

var upperCaseArray = ["A" , "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var randomUpperCase= Math.floor(Math.random()* upperCaseArray.length);
console.log(upperCaseArray[randomUpperCase]);


var specialCharactersArray = ["!",  "@",  "#",  "$",  "%",  "^",  "&",  "*", "(",  ")"];
var randomSpecialCharacter = Math.floor(Math.random()* specialCharactersArray.length);
console.log(specialCharactersArray[randomSpecialCharacter]);

var numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var randomNumbers = Math.floor(Math.random()* numbersArray.length);
console.log(numbersArray[randomNumbers]);

// Ask the user how many characters between 8 and 128 they would like the password to be
var passwordLength = prompt("Password must be between 8 Characters and 128. How many characters?");
  if (passwordLength >= 8 && passwordLength <= 128)   {
    // Asks user if there should be upper case characters in the password
    var passwordLowerCase = confirm("Lowercase?");
    if (passwordLowerCase == true) {
      var lowerCase = "abcdefghijklmnopqrstuvwxyz";  
    } else {
      lowerCase = "";
    }
    
    // Asks user if there should be upper case characters in the password
    var passwordUpperCase = confirm("Uppercase?");
    if (passwordUpperCase == true) {
      var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }  else {
      upperCase = "";
    }
    
    // Asks user if there should be numbers in the password
    var passwordNumbers = confirm("Numbers?");
    if (passwordNumbers == true) {
      var numbers = "123456789";
    }  else {
      numbers = "";
    }

    // Asks user if there should be special characters in the password
    var passwordSpecialCharacters = confirm("Special characters?");
    if (passwordSpecialCharacters == true) {
      var specialCharacters = "!@#$%^&*()";
    }  else {
      specialCharacters = "";
    }
    
  // Compare confirm data
     if (passwordLowerCase === true || passwordUpperCase === true || passwordNumbers === true || passwordSpecialCharacters === true) {
      //Store confirm criteria
     characterCriteriaPool = lowerCase + upperCase + numbers + specialCharacters;
      console.log(characterCriteriaPool);
            
 //Loop through password length
  for (var i = 0; i <= passwordLength; i++) {
   //generate the random password
  var randomPassword = Math.floor(Math.random() * characterCriteriaPool.length);
 password += characterCriteriaPool.substring(randomPassword, randomPassword +1);
}
  return(password);      
  // If no criteria is selected an alert will pop up
      } else {
        alert("Your password criteria cannot be blank");
      }
   // If password length is not between 8 and 128an alert will pop up
  } else {
    alert("Your password length must be between 8 and 128 characters!!");
    
  }
};

// for (var i = 0; i <= passwordLength; i++) {
  // generate the random password
 // var randomPassword = Math.floor(Math.random() * characterCriteriaPool.length);
 // password += characterCriteriaPool.substring(randomPassword, randomPassword +1);
 //}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

