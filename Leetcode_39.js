// Leetcode : Problem 39, combination Sum

 var output2 = [];
var visited = {};
var combinationSum = function(candidates, target) {
    let output=[];
    output2=[];
    combineSumRec(candidates, target,0, output,[])
    return output2;
};
function combineSumRec(candidates, target, index, output, curStack) {
    //console.log(output2);
    if (!candidates.length || target< 0) {
        return;
    }
    if(index >= candidates.length || target === 0 ) {
        let newStack = [...curStack]
        let key = JSON.stringify(newStack);
        
        if(target===0 && !visited[key]){
            output2.push(newStack);  
            visited[key] = true;
        }
        return
    }
    let curNum = candidates[index];
    curStack.push(curNum)
    combineSumRec(candidates,target-curNum,index,output,curStack);
    combineSumRec(candidates,target-curNum,index+1,output,curStack)
    curStack.pop();
    combineSumRec(candidates,target,index+1,output,curStack);
}
 console.log(combinationSum([1,2], 1));
