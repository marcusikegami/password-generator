// assign variable names to html element IDs
var passLength = document.getElementById("passLength");
var passLengthNumber = document.getElementById("passLengthNumber")
var upperCase = document.getElementById("upperCase");
var numberChars = document.getElementById("numberChars");
var specialChars = document.getElementById("specialChars");
var passwordDisplay = document.getElementById('password');

// assigning ASCII character codesets to variables to later use with String.fromCharCode()
var LOWERCASE_CODES = arrayLowToHigh(97,122);
var UPPERASE_CODES = arrayLowToHigh(65,90);
var NUMBER_CODES = arrayLowToHigh(48,57);
var SYMBOL_CODES = arrayLowToHigh(33,47).concat(arrayLowToHigh(58,64)).concat(arrayLowToHigh(91,96)
).concat(arrayLowToHigh(123,126));


var generateBtn = document.querySelector("#generate");
var cardBody = document.querySelector(".card-body");
var form = document.getElementById("wrapper");

//Syncing the password length range input with the number input
passLength.addEventListener('input', syncCharacterAmount);
passLengthNumber.addEventListener('input', syncCharacterAmount);

generateBtn.addEventListener("click", event => {
  event.preventDefault()

  var passLengthAmount = passLengthNumber.value
    if (passLengthAmount > 128) {
      passLengthAmount = 128;
      passLengthNumber.value = 128;
    } else if (passLengthAmount < 8) {
      passLengthAmount = 8;
      passLengthNumber.value = 8;
    };
  const useUpperCase = upperCase.checked
  const useNumberChars = numberChars.checked
  const useSpecialChars = specialChars.checked

  const password = generatePassword(passLengthAmount, useUpperCase, useNumberChars, useSpecialChars)

  passwordDisplay.innerText = password
});
// generatePassword this function will iterate through i until the passlengthNumber is equal to i and push the current character into the array. the array will be sent to be used by the generate button
// this function was written using the open-source code  from webdevsimplified on YouTube as a reference https://www.youtube.com/watch?v=iKo9pDKKHnc
function generatePassword(passLengthNumber, upperCase, numberChars, specialChars) {
 let characterCodes = LOWERCASE_CODES
  if (upperCase) characterCodes = characterCodes.concat(UPPERASE_CODES)
  if (numberChars) characterCodes = characterCodes.concat(NUMBER_CODES)
  if (specialChars) characterCodes = characterCodes.concat(SYMBOL_CODES)
  const passwordCharacters = []
  for (let i = 0; i < passLengthNumber; i++) {
    const currentCharacter = characterCodes[Math.floor(Math.random() * characterCodes.length)]
    passwordCharacters.push(String.fromCharCode(currentCharacter))
  }
  return passwordCharacters.join('')
};

//this function orders the ASCII characters numerically from each codeset from low to high to be used

function arrayLowToHigh(low, high) {
  const array = []
  for(let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
};

// syncCharacterAmount makes the value of the range slider and the number input to automatically equalize
function syncCharacterAmount (event) {
  const value = event.target.value 
  passLength.value = value;
  passLengthNumber.value = value;
};

