// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // Check that the shift is included and that it does not exceed the limit
    if (!shift || shift > 25 || shift < -25) return false;

    // Convert the inputted string to lowercase
    input = input.toLowerCase();


    // DECODING
    if (!encode) {
      // Empty string to store the shifted/decoded characters, spaces, and/or symbols
      let decoded = "";

      // loops around the alphabet if it shifts off
      for (let i = 0; i < input.length; i++) {
          // Finds the index of the character
          let charIndex = input[i].charCodeAt();
  
          // Checks if the character is a lowercase letter
          if (charIndex >=97 && charIndex <= 122) {
              // Calculate the characters new index
              let shifted = charIndex - shift;

              // Helper function: Loop around the alphabet if it shifts off
              shifted = loopAround(shifted);

              // Add the shifted letter in string form to the decoded string
              decoded += (String.fromCharCode(shifted));
          } else {
              // Add the symbol or space to the decoded string
              decoded += input[i];
          };
      };
      return decoded;
  };
  

    // ENCODING
    // Empty string to store the shift/encoded characters, spaces, and/or symbols
    let encoded = "";

    // Loop through the inputted string to encode each character
    for (let i = 0; i < input.length; i++) {
        // Find the index of the character
        let charIndex = input[i].charCodeAt()

        // Chech if the character is a lowercase letter
        if (charIndex >= 97 && charIndex <= 122) {
            // Calculate the characters new index
            let shifted = charIndex + shift

            // Helper function: loop around the alphabet if is shifts off
            shifted = loopAround(shifted);

            // Add the shifted letter in string form to the encoded string
            encoded += (String.fromCharCode(shifted))
        } else {
            // Add the symbol or space to the encoded string
            encoded += input[i];
        }
    }
    return encoded;
  }

  // HELPER FUNCTION
  // Loop around the alphabet if it shifts off
  function loopAround(shifted) {
    if (shifted > 122) {
      let difference = shifted - 122
       return shifted = 96 + difference;
    };

    if (shifted < 97) {
      let difference = 97 - shifted
      return shifted = 123 - difference;
    };
    return shifted
  };





  return {
    caesar,
  };
})();

console.log(caesarModule);

module.exports = { caesar: caesarModule.caesar };


