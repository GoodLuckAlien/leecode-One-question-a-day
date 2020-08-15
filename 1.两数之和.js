

//给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
//你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。


// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function(nums, target) {
    let numMapObject = {} , indexarr = []
    for(let i=0 ;i < nums.length;i++ ){
        numMapObject[nums[i]] = i
    }
    for(let i=0;i < nums.length;i++){
        const current = String(target-nums[i])
        if(current in numMapObject && i !== numMapObject[current]){
            indexarr = [ i ,numMapObject[current] ]
            break
        }
    }
    return indexarr
};


console.log( twoSum( [2, 7, 11, 15] , 9 ) )