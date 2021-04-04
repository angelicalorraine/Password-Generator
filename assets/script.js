// Assignment Code
var onlyNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var onlySpecial = ["~", "!", "@", "#", "$", "%", "&", "*", "(", ")", "-", "_", "+", "="];

var onlyUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

var onlyLower =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {

  var length = prompt("How many characters would you like your password to be?")

  if(length < 8) {
    alert("The password must contain 8 or more characters!");
    length = prompt("How many characters would you like your password to be?");
   
  }
  if (length > 128) {
    alert("The password must be less than 128 characters!");
    length = prompt("How many characters would you like your password to be?");
  }

  var includeNumbers = confirm("Do you want to include numbers?");
  var includeSpecial = confirm("Do you want to include special characters?");
  var includeUpper = confirm("Do you want to include uppercase letters?");
  var includeLower = confirm("Do you want to include lower case letters?");

  if (!includeNumbers && !includeSpecial && !includeUpper && !includeLower) {
    choices = alert ("You must choose a criteria");
  }


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
