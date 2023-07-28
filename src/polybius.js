// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope


  function polybius(input, encode = true) {
    // Create the polybius square grid
    const polybiusEncoding = { "a": "11", "b": "21", "c": "31", "d": "41", "e": "51", "f": "12", "g": "22", "h": "32", "i": "42", "j": "42", "k": "52", "l": "13", "m": "23", "n": "33", "o": "43", "p": "53", "q": "14", "r": "24", "s": "34", "t": "44", "u": "54", "v": "15", "w": "25", "x": "35", "y": "45", "z": "55"};
    const polybiusDecoding = { "11": "a", "21": "b", "31": "c", "41": "d", "51": "e", "12": "f", "22": "g", "32": "h", "42" : "(i/j)", "52": "k", "13": "l", "23": "m", "33": "n", "43": "o", "53": "p", "14": "q", "24": "r", "34": "s", "44": "t", "54": "u", "15": "v", "25": "w", "35": "x", "45": "y", "55": "z"};

    // Convert the inputted string to lowercase
    input = input.toLowerCase();

    // Convert the polybius square grid into an array
    const polybiusEncodingArray = Object.entries(polybiusEncoding);
    const polybiusDecodingArray = Object.entries(polybiusDecoding);

    // DECODING
    if (!encode) {
       // Check if the length of the numbers inputted without the spaces is an even number
      let inputtedNumbers = ""
        for(let i = 0; i < input.length; i++) {
          let index = input[i].charCodeAt();
          if (index != 32) inputtedNumbers += input[i];
        }
      if(inputtedNumbers.length % 2 != 0) return false;

      // Variable to store the converted characters
      let decoded = [];
      
      // Split the string of numbers into words in a single array
      input = input.split(" ");
      
      input.map((code) => {
        // Split the words into individual arrays
        let word = code.match(/../g);

        // For each word...
        word.map((letter) => {
          // Find the matching key in the polybius grid/array
          let match = polybiusDecodingArray.find((code) => {
            return code[0] === letter;
          });
          // Add the value of the matching key
          decoded.push(match[1]);
        });
        // Add spaces after each word expect the last one
        if (input.indexOf(code) < input.length - 1) decoded.push(" ")
      });
        // Join the array into a string
        return decoded.join("");
    };



    // ENCODING
    // Variable to store each encoded character
    let encoded = "";

    for (let i = 0; i < input.length; i++) {
        // If the character is a space add it to the encoded string
        if (input[i] === " ") {
            encoded += input[i];
        } else {
            // Find the matching key in the polybius grid/array
            let character = polybiusEncodingArray.find((character) => {
                return character[0] === input[i];
            });
            // Add the value of the matching key to the encoded string
            encoded += character[1];
        };
    };
    return encoded;
  };

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
