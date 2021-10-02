// Assignment Code
var generateBtn = document.querySelector("#generate");
var cardBody = document.querySelector(".card-body");
console.log(cardBody);


// generate password calls the user to action by asking for password criteria and using the information to generate the password
var generatePassword = function() {

  var passwordLength = prompt("Enter a number between 8 and 128 to define your password's length.", "8-128");
    
    if (passwordLength < 8 || passwordLength > 128 ) {
      
      alert("Invalid response. Enter a number between 8 and 128 to define your password's length." );
      
      generatePassword();
    } if (passwordLength === null) {
      
    }
    console.dir(window.prompt);

};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



