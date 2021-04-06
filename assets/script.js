// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterlength;
var confirmNumber;
var confirmSpecial;
var confirmUpper; 
var confirmLower;



var onlyNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var onlySpecial = ["~", "!", "@", "#", "$", "%", "&", "*", "(", ")", "-", "_", "+", "="];
var onlyUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var onlyLower =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var choices;


// Write password to the #password input
function writePassword() {
 
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;


}
generateBtn.addEventListener("click", writePassword);

function generatePassword () {
  
  characterlength = parseInt(prompt("How many characters would you like your password to be?")); console.log(characterlength);
    if (!characterlength) {
      characterlength = parseInt(prompt("How many characters would you like your password to be?"));

    }

  else if(characterlength < 8 || characterlength > 128) {
    alert("Password must be 8 to 128 characters");
    characterlength = parseInt(prompt("How many characters would you like your password to be?"));
    
  } else {

  confirmNumber = confirm("Do you want to include numbers?");
  console.log(confirmNumber);
  confirmSpecial = confirm("Do you want to include special characters?");
  console.log(confirmSpecial);
  confirmUpper = confirm("Do you want to include uppercase letters?");
  console.log(confirmUpper);
  confirmLower = confirm("Do you want to include lower case letters?");
  console.log(confirmLower);
};

  if (!confirmNumber && !confirmSpecial && !confirmUpper && !confirmLower) {
    choices = alert ("You must choose a criteria!");
  }

  else if (confirmNumber && confirmSpecial && confirmUpper && confirmLower) {
    choices = onlyNumber.concat(onlySpecial, onlyUpper, onlyLower);
  }

  // include 3 confirmed characteristics


  else if (confirmNumber && confirmSpecial && confirmUpper) {
    choices = onlyNumber.concat(onlySpecial, onlyUpper);
  }

  else if (confirmNumber && confirmSpecial && confirmLower) {
    choices = onlyNumber.concat(onlySpecial, onlyLower);
  }

  else if (confirmSpecial && confirmUpper && confirmLower) {
    choices = onlySpecial.concat(onlyUpper, onlyLower);
  }

  // else if for 2 confirmed charasteristics 

  else if (confirmNumber && confirmSpecial) {
    choices = onlyNumber.concat(onlySpecial);
  }

  else if (confirmNumber && confirmUpper) {
    choices = onlyNumber.concat(onlyUpper);
  }

  else if (confirmNumber && confirmLower) {
    choices = onlyNumber.concat(onlyLower);
  }

  else if (confirmSpecial && confirmUpper) {
    choices = onlySpecial.concat(onlyUpper);
  }

  else if (confirmSpecial && confirmLower) {
    choices = onlySpecial.concat(onlyLower);
  }

  else if (confirmUpper && confirmLower) {
    choices = onlyUpper.concat(onlyLower);
  }

  // else for 1 confirmed characteristic

  else if (confirmNumber) {
    choices = onlyNumber;
  }

  else if (confirmSpecial) {
    choices = onlySpecial;
  }

  else if (confirmUpper) {
    choices = onlyUpper;
  }

  else if (confirmLower) {
    choices = onlyLower;
  };


  for (var i = 0; i < characterlength; i++) {
    password = choices[Math.floor(Math.random() * choices.length)];
    console.log(password);
    
    
    
  }


 
}




// Add event listener to generate button


