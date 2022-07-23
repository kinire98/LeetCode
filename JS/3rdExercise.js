/**
 * @param  {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    if (typeof s !== "string") return console.error("The given data is not a string")
    
    const findSubString = () => {
        let subStringsArray = [];
        s.forEach(el => {
            
        })
        return subStringsArray;
    }
    const compareSubstrings = (subStringsArray) => {
        let longestSubstring = ""; 
        subStringsArray.forEach(el => {
           if (el.length > longestSubstring.length) longestSubstring = el; 
        });
        return longestSubstring.length;
    }


    let subStrings = findSubString();
    return compareSubstrings(subStrings)
}