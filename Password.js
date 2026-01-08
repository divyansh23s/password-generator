
const PasswordBox = document.getElementById("Password");
const passwordLength = 12;

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=";

const allowedChars = lowercaseChars + uppercaseChars + numberChars + symbolChars;

function generatePassword(){
    
    let password = "";

    password += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)]
    password += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)]
    password += numberChars[Math.floor(Math.random() * numberChars.length)]
    password += symbolChars[Math.floor(Math.random() * symbolChars.length)]
    
    while(passwordLength > password.length){
        password += allowedChars[Math.floor(Math.random() * allowedChars.length)];
    }
    PasswordBox.value = password;
}

function copyPassword(){
    PasswordBox.select();
    document.execCommand("copy");
}
