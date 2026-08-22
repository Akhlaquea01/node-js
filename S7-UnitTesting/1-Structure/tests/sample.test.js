const {add} = require('../src/sample');

// Describe ==> Defines the test suite
// Test Suite --> Collection of tests
describe('Test addition of 2 numbers', () => {
    test("Should add 2 positive numbers", () => {
        const response = add(2, 5);
        expect(response).toBe(7);
    })

    test("Should add 2 negative numbers", () => {
        const response = add(-2, -5);
        expect(response).toBe(-7);
    })

    test("Should accept 2 parameters", () => {
        const response = add(2);
        expect(response).toBe(null);
    })


    test("Should accept only numbers", () => {
        const response = add("Jay", "Sai");
        expect(response).toBe(null);
    })

});


