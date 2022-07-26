/**
 * @param  {number} x
 * @return {boolean}
 */
//* LOL, faster than 80% of submissions. I wasn't expecting that
const isPalindrome = (x) => {
    const invert = () => {
        let invertedString ="";
        for (let i = x.toString().length - 1; i >= 0; i--)  invertedString += x.toString()[i]; 
        return parseInt(invertedString);
    }
    if (x === invert()) return true;
    return false;
}
isPalindrome(123)