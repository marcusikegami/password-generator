// Assignment Code
var passLength = document.getElementById("passLength");
var passLengthNumber = document.getElementById("passLengthNumber")
var upperCase = document.getElementById("upperCase");
var numberChars = document.getElementById("numberChars");
var specialChars = document.getElementById("specialChars");


var LOWERCASE_CODES = arrayLowToHigh(97,122);
var UPPERASE_CODES = arrayLowToHigh(65,90);
var NUMBER_CODES = arrayLowToHigh(48,57);
var SYMBOL_CODES = arrayLowToHigh(33,47).concat(arrayLowToHigh(58,64)).concat(arrayLowToHigh(91,96)
).concat(arrayLowToHigh(123,126));


var generateBtn = document.querySelector("#generate");
var cardBody = document.querySelector(".card-body");

;
var form = document.getElementById("wrapper");
var passCriteria = []

passLength.addEventListener('input', syncCharacterAmount);
passLengthNumber.addEventListener('input', syncCharacterAmount);

generateBtn.addEventListener("click", event => {
  event.preventDefault()

  const passLength = passLength.value
  const upperCase = upperCase.checked
  const numberChars = numberChars.checked
  const specialChars = specialChars.checked

  const password = generatePassword(passLength, upperCase, numberChars, specialChars)
});
// this function comes with major pointers from webdevsimplified on YouTube https://www.youtube.com/watch?v=iKo9pDKKHnc
function generatePassword(passLength, upperCase, numberChars, specialChars) {
 console.log(UPPERASE_CODES);
};

function arrayLowToHigh(low, high) {
  const array = []
  for(let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
};


function syncCharacterAmount (event) {
  const value = event.target.value 
  passLength.value = value;
  passLengthNumber.value = value;
};


// generate password calls the user to action by asking for password criteria and using the information to generate the password
var checkPassCriteria = function(passCriteriaDiv) {

  
  
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  checkPassCriteria();
  
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




