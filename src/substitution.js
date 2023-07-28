// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet = "", encode = true) {
    // Check that the inputted alphabet contains 26 characters
    if (alphabet.length != 26) return false;

    // Check that an alphabet was inputted
    if(!alphabet) return false;

    // Covert the input and alphabet to lowercase
    input = input.toLowerCase();
    alphabet = alphabet.toLowerCase();

    // Check if any of the characters in the inputted alphabet repeat
    let alphabetRepeat = ""
    for (let i = 0; i < alphabet.length; i++) {
        if (alphabetRepeat.includes(alphabet[i])) return false;
        alphabetRepeat += alphabet[i];
    };

    const originalAlphabet = "abcdefghijklmnopqrstuvwxyz";

    // Convert the code into an object with orginal alphabet as the keys and the encoded alphabet as the values
    let code = {};

    for (let i = 0; i < originalAlphabet.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            code[originalAlphabet[i]] = alphabet[i];
        };
    };

    // Convert the code into an array
    code = Object.entries(code);

    //DECODING
    if (!encode) {
        // Variable to store the decoded characters
        let decoded = "";

        for (let i = 0; i < input.length; i++) {
            // Find the alphabetic index of each character
            let charIndex = input[i].charCodeAt();

            // If the characters is a space add it to the decoded string
            if (charIndex === 32) {
                decoded += input[i];
            } else {
                // Find the matching value in the code array
                let match = code.find((letter) => {
                    return input[i] === letter[1];
            });
            // Add the matching values key to the decoded string
            decoded += match[0];
        }
    }
    return decoded;
}





    //ENCODING
    // Variable to store the encoded characters
    let encoded = "";

    for (let i = 0; i < input.length; i++) {
        // Find the characters alphabet index
        let charIndex = input[i].charCodeAt();

        // If the character is a space add it to the encoded string
        if (charIndex === 32) {
            encoded += input[i];
        } else {
            // Find the matching key in the code array
            let match = code.find((letter) => {
                return letter[0] === input[i]
             })
             // Add the matching keys value to the encoded string
             encoded += match[1]
        };
    };

    return encoded;
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
