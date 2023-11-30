const bcrypt = require('bcrypt')

const plainText = "I don't know what to say about cryptography"
console.log(plainText)

function caesarCipher(str, shift) {

    let lowerCaseStr = str.toLowerCase();
    let encryptedStr = "";

    for (let i = 0; i < lowerCaseStr.length; i++) {
        let char = lowerCaseStr[i];
        // Check if the character is a letter
        if (char >= 'a' && char <= 'z') {
            // Get the ASCII code of the character and normalize it to 0-25
            let code = char.charCodeAt(0) - 'a'.charCodeAt(0);
            // Apply the shift
            code = (code + shift) % 26;
            // Wrap around the alphabet if necessary
            if (code < 0) code += 26;
            // Convert back to a character and append to the result
            encryptedStr += String.fromCharCode(code + 'a'.charCodeAt(0));
        } else {
            // If it's not a letter, just append the original character
            encryptedStr += char;
        }
    }
    return encryptedStr;
}

var shiftFactor = 30
var cipherText = caesarCipher(plainText, shiftFactor)
console.log({cipherText})