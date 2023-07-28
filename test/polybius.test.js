const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
    describe ("encode", () => {
        it("should return the encoded version of the inputted string", () => {
            const input = "Test";
            const expected = "44513444";
            const actual = polybius(input);

            expect(actual).to.equal(expected);
        });

        it ("should maintan spaces throughout", () => {
            const input = "This is a test";
            const expected = "44324234 4234 11 44513444";
            const actual = polybius(input);

            expect(actual).to.equal(expected);
        });
    });

    describe("decode", () => {
        it("should return the decoded input if encode is set to false", () => {
            const input = "4244 4234 245111131345 324344";
            const expected = "(i/j)t (i/j)s really hot";
            const actual = polybius(input, false);

            expect(actual).to.equal(expected);
        });

        it("should return false if the the length the numbers without spaces is odd", () => {
            const input = "44324234 4234 11 4451344";
            const actual = polybius(input, false);

            expect(actual).to.be.false;
        });

        it("should maintain spaces throughout", () => {
            const input = "23115251 34542451 4244 321134 345311315134";
            const expected = "make sure (i/j)t has spaces";
            const actual = polybius(input, false);
        });

        it("should convert 42 to i and j", () => {
            const input = "2345 33112351 344411244434 25424432 11 42";
            const expected = "my name starts w(i/j)th a (i/j)";
            const actual = polybius(input, false);

            expect(actual).to.equal(expected);
        });
    });
});
