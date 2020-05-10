/**
 * 
 * Que : Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).
 *      Input: S = "ADOBECODEBANC", T = "ABC"
        Output: "BANC"
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let inp = [...s];
    let pt = [...t];
    let tempCharCount = {};
    pt.forEach((ch)=>{
        if(tempCharCount[ch]){
            tempCharCount[ch]++
        } else {
            tempCharCount[ch]=1;
        }
    });
    let foundAllChar = false;
    let len = inp.length;
    let right = 0;
    let total = pt.length;
    let minWindowLen = 0;
    let start = 0;
    let end =0;
    
    while(right < len && total >0) {
        if(tempCharCount[inp[right]]!==undefined){
            tempCharCount[inp[right]]--;
            if(tempCharCount[inp[right]]>=0)
                total--;
        }
        right++;
    }
    if(right === len && total !==0) {
        return "";
    }
    let maxWindowLen = right;
    let left =0;
    let output = inp.slice(left, right).join("");
    right--;
     if(tempCharCount[inp[right]]!==undefined) {
            tempCharCount[inp[right]]++;
     }
    
    while(right <len ){
        if(tempCharCount[inp[right]]!==undefined) {
            tempCharCount[inp[right]]--;
        }
        while(canMoveleft(inp[left], tempCharCount)){
                left++;
        }
        if((right-left +1 < maxWindowLen)){
            maxWindowLen = right-left+1;    
            output = inp.slice(left, right+1).join("");
        }
        right++
    }
    return output;
    
};
function canMoveleft(leftChar, tempCharCount){
    if(tempCharCount[leftChar] !== undefined){
        tempCharCount[leftChar]++;
        if(tempCharCount[leftChar] > 0) {
            tempCharCount[leftChar]--;
            return false
        } 
    }
    return true
}

