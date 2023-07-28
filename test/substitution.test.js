const { substitution } = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
    describe("encode", () => {
        it("should return the encoded version of the inputted string!", () => {
            const inputString = "Testing";
            const inputAlphabet = "badcfehgjilknmporqtsvuxwzy";
            const expected = "sftsjmh";
            const actual = substitution(inputString, inputAlphabet);

            expect(actual).to.equal(expected);
        });

        it("should preserve spaces", () => {
            const inputString = "This is a secret";
            const inputAlphabet = "zyxwvutsrqponmlkjihgfedcba";
            const expected = "gsrh rh z hvxivg";
            const actual = substitution(inputString, inputAlphabet);

            expect(actual).to.equal(expected);
        });

        it("should return false if the inputted alphabet length is not exactly 26 characters", () => {
           const inputString = "Are there enough";
           const inputAlphabet = "noprstuvwxyzabcdefghijklm"; 
           const actual = substitution(inputString, inputAlphabet);

           expect(actual).to.be.false;
        });

        it("should return false if every character in the inputted alphabet is not unique", () => {
            const inputString = "Everyone is unique";
            const inputAlphabet = "bbdcfehgjilknmporqtsvuxwzy";
            const actual = substitution(inputString, inputAlphabet);

            expect(actual).to.be.false;
        });

        it("should return false if the alphabet is not provided", () => {
            const inputString = "Where is the alphabet";
            const actual = substitution(inputString);

            expect(actual).to.be.false;
        });

        it("should work with input alphabets with special characters", () => {
            const inputString = "I am special";
            const inputAlphabet = "~!@#$%^&*()_+`{}|:'<>?[].;";
            const expected = "* ~+ '}$@*~_";
            const actual = substitution(inputString, inputAlphabet);

            expect(actual).to.equal(expected);
        });
    });

    describe("decode", () => {
        it("should return the decoded version of the inputted string if encode is set to false", () => {
            const inputString = "sftsjmh";
            const inputAlphabet = "badcfehgjilknmporqtsvuxwzy";
            const expected = "testing";
            const actual = substitution(inputString, inputAlphabet, false);

            expect(actual).to.equal(expected);
        });

        it("should preserve spaces", () => {
            const inputString = "gsrh rh z hvxivg";
            const inputAlphabet = "zyxwvutsrqponmlkjihgfedcba";
            const expected = "this is a secret";
            const actual = substitution(inputString, inputAlphabet);

            expect(actual).to.equal(expected);
        });

        it("should work with input alphabets with special characters", () => {
            const inputString = "* ~+ '}$@*~_";
            const inputAlphabet = "~!@#$%^&*()_+`{}|:'<>?[].;";
            const expected = "i am special";
            const actual = substitution(inputString, inputAlphabet, false);

            expect(actual).to.equal(expected);
        });
    });
});
