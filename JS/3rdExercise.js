/**
 * @param  {string} s
 * @return {number}
 */
//TODO: Add comments (complex algorithm)
const lengthOfLongestSubstring = (s) => {
    if (typeof s !== "string") {return "The given data is not a string"}
    let l = 0,
    string = "",
    result = 0;
    for (let r = 0; r < s.length; r++) {
        while (string.includes(s[r])) {
            string = string.replace(s[l], "");
            l++;
        }
        string += s[r];
        result = Math.max(result, r - l + 1)
    }
    return result;
}
console.log(lengthOfLongestSubstring("dvdf"))