function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    const lowercaseChars = "abcdefghijklmnoprstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!#$%&/()=?*;:_,.<>";
    let allowedChars = "";
    let password = "";
    
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0){
        console.log(`Password must have atleast 1 character`);
    }
    else{
        for(let i = 0; i < length; i++){
            maxNum = allowedChars.length;
            password += allowedChars[Math.floor(Math.random() * maxNum)];
        }
    }

    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
console.log(`Generated password: ${password}`);