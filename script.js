const generateBtn = document.querySelector("#generate");

// Password Data
let Number= "12345678";
let LowerCase= "abcdefghijklmnopqrstuvxz";
let UpperCase= "ABCDEFGHIJKLMNOPQRSTUVXZ";
let Special= "~`!@#$%^&*()-_+={}[]|\/:;'<>,.?";
let passwordvalue="";

//confirmation variables

let Passwordlegth;
let hasNumber;
let hasSpecial;
let hasUpperCase;
let haslowercase;


function generatePassword(){

  // validating user input with help of tutor
const userInput = prompt('Choosing numbers from 8 to 128, please set your password length.');

const passLegth = parseInt (userInput)

if (isNaN(passLegth)) {
    return alert ("It is not a Number")
  }

  else if (passLegth < 8 || passLegth > 128){

    return alert ("Please choose numbers between 8 to 128")

}
else { alert ("Valid Number !")
}
//confirming the user`s choice for a password.
hasNumber = confirm ("Will your password have Numbers?")
hasUpperCase = confirm ("Will your password have UpperCase letters?")
haslowercase= confirm ("Will your password have LowerCase letters?")
hasSpecial= confirm ("Will your password have Symbols?")

let passwordvalue = '';
let chosenchart = '';
if (hasNumber === true){
  chosenchart = chosenchart + Number;
 
}

if (hasUpperCase === true){
  chosenchart = chosenchart + UpperCase;
 
}

if (haslowercase === true){
  chosenchart = chosenchart + LowerCase;
 
}
if (hasSpecial === true){
  chosenchart = chosenchart + Special;
 
}
  
else 
alert ('Undefined Password')
  //random selection of password characters chosen by user

 for (let i = 0; i < passLegth; i++){
  passwordvalue = passwordvalue + chosenchart.charAt (Math.floor(Math.random()* Math.floor(chosenchart.length - 1)));
  
  
}
//return the randomic value
  return passwordvalue

}
function writePassword() {

  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
  
  
}  
  
   

// Add event listener to generate button
generateBtn.addEventListener("click",writePassword);





