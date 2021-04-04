// Assignment Code
var onlyNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var onlySpecial = ["~", "!", "@", "#", "$", "%", "&", "*", "(", ")", "-", "_", "+", "="];

var onlyUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

var onlyLower =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var choices = [onlyNumber, onlySpecial, onlyUpper, onlyLower];

var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {

  var length = parseInt(prompt("How many characters would you like your password to be?"));
  if (!length) {
    alert("This needs a value");
  }

  if(length < 8 || length > 128) {
    length = parseInt(prompt("How many characters would you like your password to be?"));
    
  }

  var includeNumbers = confirm("Do you want to include numbers?");
  var includeSpecial = confirm("Do you want to include special characters?");
  var includeUpper = confirm("Do you want to include uppercase letters?");
  var includeLower = confirm("Do you want to include lower case letters?");

  if (!includeNumbers && !includeSpecial && !includeUpper && !includeLower) {
    choices = alert ("You must choose a criteria!");
  }

  else if (includeNumbers && includeSpecial && includeUpper && includeLower) {
    choices = includeNumbers.concat(includeSpecial, includeUpper, includeLower);
  }

  // include 3 confirmed characteristics


  else if (includeNumbers && includeSpecial && includeUpper) {
    choices = includeNumbers.concat(includeSpecial, includeUpper);
  }

  else if (includeNumbers && includeSpecial && includeLower) {
    choices = includeNumbers.concat(includeSpecial, includeLower);
  }

  else if (includeSpecial && includeUpper && includeLower) {
    choices = includeSpecial.concat(includeUpper, includeLower);
  }

  // else if for 2 confirmed charasteristics 

  else if (includeNumbers && includeSpecial) {
    choices = includeNumbers.concat(includeSpecial);
  }

  else if (includeNumbers && includeUpper) {
    choices = includeNumbers.concat(includeUpper);
  }

  else if (includeNumbers && includeLower) {
    choices = includeNumbers.concat(includeLower);
  }

  else if (includeSpecial && includeUpper) {
    choices = includeSpecial.concat(includeUpper);
  }

  else if (includeSpecial && includeLower) {
    choices = includeSpecial.concat(includeLower);
  }

  else if (includeUpper && includeLower) {
    choices = includeUpper.concat(includeLower);
  }

  // else for 1 confirmed characteristic

  else if (includeNumbers) {
    choices = includeNumbers;
  }

  else if (includeSpecial) {
    choices = includeSpecial;
  }

  else if (includeUpper) {
    choices = includeUpper;
  }

  else if (includeLower) {
    choices = includeLower;
  }


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
