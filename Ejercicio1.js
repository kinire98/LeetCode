//The parameter executed is for keeping the track if the function has already been executed
const twoSum = (nums, target, executed) => {
    function loop () {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] <= target) {
                return i;
            }
        }
    }
    function secondLoop (givenNumber) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[givenNumber] + nums[i] === target && givenNumber !== i) {
                return i;
            }
        }
    }
    
    if ((nums.length < 2 || nums.length > 1000) && !executed) {
        return console.log("The given array doesn't match the required length")
    } else if (executed) {
        return console.log("The data you have introduced has not any solutions")
    }
    
    let firstNum = loop(),
    secondNum = secondLoop(firstNum);


    if (nums[firstNum] + nums[secondNum] != target) {
        nums.shift()
        return twoSum(nums, target, 1)
    } 

    return console.log(`[${firstNum},${secondNum}]`)

}
twoSum([1],1)