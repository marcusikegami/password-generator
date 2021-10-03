// Assignment Code
var passLength = document.getElementById("passLength");
var passLengthNumber = document.getElementById("passLengthNumber")
var uppercase = document.getElementById("upperCase");
var numberChars = document.getElementById("numberChars");
var specialChars = document.getElementById("specialChars");


var generateBtn = document.querySelector("#generate");
var cardBody = document.querySelector(".card-body");

;
var passCriteriaDiv = document.getElementById("cta");
var passCriteria = []

passLength.addEventListener('input', syncCharacterAmount);
passLengthNumber.addEventListener('input', syncCharacterAmount);

function syncCharacterAmount (event) {
  const value = event.target.value 
  passLength.value = value;
  passLengthNumber.value = value;
};


// generate password calls the user to action by asking for password criteria and using the information to generate the password
var checkPassCriteria = function(passCriteriaDiv) {

  
  
}


var generatePassword = function() {

  

};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  checkPassCriteria();
  
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




