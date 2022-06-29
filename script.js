// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  // Ask user for password character length

var password ="";

var lowerCase = "abcdefghijklmnopqrstuvwxyz";  
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "123456789";
var specialCharacters = "!@#$%^&*()";

var passwordLength = prompt("Password must be between 8 Characters and 128. How many characters?");
  if (passwordLength >= 8 && passwordLength <= 128)   {
    var passwordLowerCase = confirm("Lowercase?");
      // Ask user if there should be upper case characters
    var passwordUpperCase = confirm("Uppercase?");
      // Ask user if there should be numbers
    var passwordNumbers = confirm("Numbers?");
      // Ask user if there should be special characters
    var passwordSpecialCharacters = confirm("Special characters?");
  // Compare confirm data
     if (passwordLowerCase === true || passwordUpperCase === true || passwordNumbers === true || passwordSpecialCharacters === true) {
      //Store confirm criteria
      var passwordContains = passwordLength + passwordUpperCase + passwordNumbers + passwordSpecialCharacters;
      console.log(passwordContains);
      // Loop through password length
      for (var i = 0; i <= passwordLength; i++) {
        // generate the random password
        var randomPassword = Math.floor(Math.random() * passwordContains.length);
        password += passwordContains.substring(randomPassword, randomPassword +1);
          
        }
        return(password);
      } else {
        alert("Your password criteria cannot be blank");
      }
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

