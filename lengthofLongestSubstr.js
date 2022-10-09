
var lengthOfLongestSubstring = function(s) {
    let maxLen = 0;
    let inp = [...s];
    let start = 0;
    let end = 0;
    let visited = {};
    
    for(let cur in inp) {
        let curChar = inp[cur];
        if(!visited[curChar]) {
            visited[curChar] = cur;
            end++;
            maxLen = Math.max(end-start, maxLen);
        } else {
            let visitedIndex = visited[curChar];
            while(start<visitedIndex) {
                let visitedChar= inp[start];
                visited[visitedChar] = false;
                start++;
            }
            visited[curChar] = cur;
        }
    }
    return maxLen;
};

lengthOfLongestSubstring("bbtablud")
