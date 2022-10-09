/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 
 Jump Game VII
 */
var canReach = function(s, minJump, maxJump) {
    let left = minJump;
    let right = maxJump;
    let len = s.length -1;
     if(left<=len && right>=len && s[len]==='0')
    {
        return true;
    }
    while(true) {
        let i = left;
        let noZero = true;
        let curMaxRight = right
        let curMinLeft = left;
        let firstZero = true;
       
        if(  s[len]==='1') {
            return false
        }
         if(left > len) {
             return false;
         }
        let tempMinLeft = curMinLeft;
        while(i<=right) {
            if(s[i]==='0') {
                noZero = false;
                curMaxRight = i+maxJump;
                tempMinLeft = i+ minJump;
                if (tempMinLeft > len) {
                    return false;
                }
                if(tempMinLeft<=len && curMaxRight>=len)
                {
                    return true;
                }
                if(tempMinLeft > right) {
                    curMinLeft = tempMinLeft;
                }
                
            }
            i++;
        }
        if (noZero) {
            return false;
        }
        if (curMinLeft< right) {
            return false;
        }
        left = curMinLeft;
        right = curMaxRight;
        
    }
};
