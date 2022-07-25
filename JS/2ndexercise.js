/**
 * @param  {} l1
 * @param  {} l2
 */
//! This won't work on leetcode. It does the work but in leetcode gives me an error in line 27. I know pretty confusing
const addTwoNumbers = function (l1,l2) {
    const passToNumber = function (linkedList)  {
        let number = "";
        for (let i = 0; i < linkedList.length; i++) {
            number += linkedList[i];
        }
        return parseInt(number);
    }
    const passToArray = function (number) {
        const array = [],
        string = number.toString();
        for (let i = 0; i < string.length; i++) {
            array[i] = parseInt(string[i]);
        }
        return array        
    }
    let n1 = passToNumber(l1),
        n2 = passToNumber(l2);
    return passToArray(n1 + n2); 
}
addTwoNumbers([2,4,3], [5,6,4]);