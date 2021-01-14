
const palindromecheck = require('./palindrome'); //Import of the function from the .js file
describe('palindrome', () => {
    test('Test Case 1 - Should check if a palindrome', () => {
       expect(palindromecheck('eye')).toBe(true);
    });
    test('Test Case 2 - Should check if a palindrome', () => {
        expect(palindromecheck('not a palindrome')).toBe(false);
    });
    
});