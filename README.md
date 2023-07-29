# Thinkful Decoder Ring Project

#### This project contains six JavaScript code files that I wrote. In the src file there are three files, each contain a function that contains the functionallity for a decoder (caesar, polybius, and substitution). The test file contains three files, each one contains a series of test for each of the decoder files.

## Caesar

### Inputs

- **input**: inputted text to be encoded or decoded

- **shift**: how much each letter is shifted by. + to the right, - to the left.

- **encode**: whether I should encode or decode the message. By defualt it is set to true

Ceasar takes the inputted text and shifts each letter by the number that shift represents. If encode is set to false, it will decode the text by shifting each letter by the number that shift represents in the opposite direction. This function takes in a string for the input and returns a string. 

### Examples

``` javascript
caesar("I love to code!", 1); // will return "j mpwf up dpef!"
```

``` javascript
 caesar("j mpwf up dpef!", 1, false); // will return "i love to code!"
```

## Polybius

### Inputs

- **input**: inputted text to be encoded or decoded

- **encode**: whether I should encode or decode the message. By default it is set to true

Polybius represents a polybius grid, where each letter represents a two digit coordinate on the grid. The function takes in a string of letters and returns a string of numbers. If encode is set to false, the function will take in a string of numbers and return a string of letters. 

### Examples 

``` javascript
polybius("This is a test"); // will return "44324234 4234 11 44513444"
```

## Substitution

### Inputs

- **input**: the inputted text to be encoded or decoded

- **alphabet**: substitution alphabet

- **encode**: whether I should encode or decode the message. By default it is set to true 

Substitution takes the inputted text, and uses the inputted alphabet to encode the message. If encode is set to false, it will decode the message by converting it using the standard alphabet. 

### Examples

```javascript
substitution("SECRET TUNNEL", "zyxwvutsrqponmlkjihgfedcba"); // will return "hvxivg gfmmvo"
```

```javascript
substitution("hvxibg gfmmvo", "zyxwvutsrqponmlkjihgfedcba", false); // will return "secret tunnel"
```