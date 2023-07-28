const { caesar } = require("../src/caesar");
const  expect  = require("chai").expect;

describe("caesar", () => {
    it("should return the encoded version of the inputted string", () => {
        const input = "I am Spiderman";
        const actual = caesar(input, 1);
        const expected = "j bn tqjefsnbo";

        expect(actual).to.equal(expected);
    });

    it("should maintain spaces and other non-alphabetic symbols throughout", () => {
        const input = "I am Spider-Man!";
        const actual = caesar(input, 1);
        const expected = "j bn tqjefs-nbo!";

        expect(actual).to.equal(expected);
    });
    
    it("should return false if the shift value isn't present, equal to 0, less than -25, or greater than 25", () => {
        const input = "With great power comes great responsibility";
        const actual = caesar(input);
        
        expect(actual).to.be.false;
    });

    it ("should wrap around to the front of the alphabet if a letter is shifted off the alphabet", () => {
        const input = "Zoe loves the zoo";
        const actual = caesar(input, 4);
        const expected = "dsi psziw xli dss";

        expect(actual).to.equal(expected);
    });

    it ("should return decoded message if the encode input is set to false ", () => {
        const input = "K jcvg ejqeqncvg.";
        const actual = caesar(input, 2, false);
        const expected = "i hate chocolate.";

        expect(actual).to.equal(expected);
    });
});