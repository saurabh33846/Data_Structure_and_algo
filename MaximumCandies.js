/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function(candies, k) {
    /*
    * Algorithm 
    * 1. Sort the candies and after that in the limit 1 to max, apply binary search to see if we 
    *    can satisfy all the childrens.
    */
    // Sort the candies
    candies.sort((a,b)=>a-b);
    let left = 1;
    let len = candies.length-1;
    let right = candies[len];
    
    let maxNum = 0;
    while(right>=left) {
        let mid = Math.floor((left+right)/2);
        let noOfSatisfaction = getSatisfaction(mid);
        if(noOfSatisfaction >= k) {
            left = mid +1;
            if(mid> maxNum) {
                maxNum = mid;
            }
        }
        if(noOfSatisfaction < k) {
            right = mid-1;
        }
    }
    function getSatisfaction(num) {
        let count = 0;
        for(const elem of candies) {
            let satisfyCount = Math.floor(elem/num)
            count+= satisfyCount;
        }
        return count;
    }
    return maxNum;
};
// Sort -> 
// [3,3,4,4,5,6,7,8]

// 700 -> 7 *100, 6,1, 5,2. 4,3. 3,4
