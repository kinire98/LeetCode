/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
    
    const quickSort = (array) => {
        if (array.length < 1) {
            return [];
        }
        
        let left = [],
        right = [],
        pivot = array[0];
        
        for (let i = 1; i < array.length; i++) {
            if (array[i] < pivot) {
                left.push(array[i]);
            } else {
                right.push(array[i]);
            }
        }
        
        return [].concat(quickSort(left), pivot, quickSort(right));
    }
    const findMedian = (array) => {
        if (array.length %2 === 0) {
            const middle = array.length / 2 - 1,
                avg = (array[middle] + array [middle + 1]) / 2;
            return avg;
        } else {
            return array[Math.round(array.length / 2 - 1)]
        }
    }
    let arr = quickSort(nums1.concat(nums2))
    return findMedian(arr);
};
console.log(findMedianSortedArrays([1,3,4],[2,5,7]))