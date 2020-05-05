/**
 * 
    Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

    We repeatedly make duplicate removals on S until we no longer can.

    Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.
 */

var removeDuplicates = function(S) {
    let charArr = [...S];
    let stack = [];
    let count = 0;
    let len = charArr.length;
    while(count < len){
        if(stack.length===0){
            stack.push(charArr[count]);
        } else {
           while(stack.length!==0 && (count <len && stack[stack.length-1]===charArr[count]) ){
               stack.pop();
               count++;
           }
           if(count<len){
               stack.push(charArr[count]);
           }
       }
       count++;
    }
       let finalStr = stack.reduce((acc, curVal)=>{
        if(curVal){
            acc = acc+curVal;
        }
        return acc;
    }, "");
    return finalStr;
}