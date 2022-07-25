/**
 * @param  {} nums
 * @param  {} target
 */
//* Bruteforced
const twoSum = (nums,target) => {
    if (!Array.isArray(nums)) return "Incorrect data type1";
    if (typeof target !== "number") return "Incorrect data type";
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && i !== j)  {
                return [i,j]
            }
        }
    }
    return []
}
console.log(twoSum([1,2,3], 5))
