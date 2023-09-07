// Get the button and add an event listener to it
const generateButton = document.querySelector(".btn");

// Function to generate a password
function generatePassword() {
  // Prompt for password length
  let passwordLength = parseInt(
    prompt("Enter the length of the password (between 8 and 128 characters):")
  );

  // Validate the password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return;
  }

  // Prompt for character types to include in the password
  let includeLowercase = confirm("Include lowercase characters?");
  let includeUppercase = confirm("Include uppercase characters?");
  let includeNumeric = confirm("Include numeric characters?");
  let includeSpecial = confirm("Include special characters?");

  // Validate that at least one character type is selected
  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumeric &&
    !includeSpecial
  ) {
    alert("Please select at least one character type.");
    return;
  }

  // ------Define the character sets to use for generating the password
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numericChars = "0123456789";
  const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  let password = "";
  let characterSet = "";

  // -----Add selected character sets to the final character set to be used for generating the password
  if (includeLowercase) {
    characterSet += lowercaseChars;
  }
  if (includeUppercase) {
    characterSet += uppercaseChars;
  }
  if (includeNumeric) {
    characterSet += numericChars;
  }
  if (includeSpecial) {
    characterSet += specialChars;
  }

  // ----Generate the password by randomly selecting characters from the final character set
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }

  // Display the generated password
  alert("Your generated password is: " + password);
  document.querySelector("#password").value = password;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateButton.addEventListener("click", generatePassword);
