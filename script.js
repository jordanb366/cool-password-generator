// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  // Ask user for password character length

  // Empty password variable
var randomPassword = "";

// Empty password variable
var characterCriteriaPool = [];

// Lowercase Array
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// upper Case array
var upperCaseArray = ["A" , "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

// numbers array
var numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9",];

// special characters array
var specialCharactersArray = ["!",  "@",  "#",  "$",  "%",  "^",  "&",  "*", "(",  ")",];


// Ask the user how many characters between 8 and 128 they would like the password to be
var passwordLength = prompt("Password must be between 8 Characters and 128. How many characters?");
  if (passwordLength >= 8 && passwordLength <= 128)   {
    // Asks user if there should be upper case characters in the password
    var passwordLowerCase = confirm("Lowercase?");
     // If lowercase is confirmed then store a variable called for the criteria selected
    if (passwordLowerCase == true) {
      var lowerCase = lowerCaseArray; 
    } else {
      lowerCase = "";
    }
   
    
    // Asks user if there should be upper case characters in the password
    var passwordUpperCase = confirm("Uppercase?");
     // If uppercase is confirmed then store a variable called for the criteria selected
    if (passwordUpperCase == true) {
      var upperCase = upperCaseArray;
    }  else {
      upperCase = "";
    }
    
    // Asks user if there should be numbers in the password
    var passwordNumbers = confirm("Numbers?");
    // If numbers is confirmed then store a variable called for the criteria selected
    if (passwordNumbers == true) {
      var numbers = numbersArray;
    }  else {
      numbers = "";
    }

    // Asks user if there should be special characters in the password
    var passwordSpecialCharacters = confirm("Special characters?");
    if (passwordSpecialCharacters == true) {
    // If special characters is confirmed then store a variable called for the criteria selected
      var specialCharacters = specialCharactersArray;
    }  else {
      specialCharacters = "";
    }
    
    // Compare confirm data
     if (passwordLowerCase === true || passwordUpperCase === true || passwordNumbers === true || passwordSpecialCharacters === true) {
      // Add each criteria into one character pool by combining each selected
     characterCriteriaPool = characterCriteriaPool.concat(lowerCase, upperCase, numbers, specialCharacters);
  
            
  //Loop through password length
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characterCriteriaPool.length);
    randomPassword = randomPassword + characterCriteriaPool[randomIndex];
    
  }
  return(randomPassword);

  // If no criteria is selected an alert will pop up
      } else {
        alert("Your password criteria cannot be blank");
      }
   // If password length is not between 8 and 128an alert will pop up
  } else {
    alert("Your password length must be between 8 and 128 characters!!");
    
  }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

