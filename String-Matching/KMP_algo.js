/****
 * 
 * KMP serach algo is string matching algorithm which takes linear time to perform serach.
 * IT takes two input, string and pattern to be matched. If the length of string is n
 * and length of pattern is n the time complexity of this algo is O(m+n.
 * 
 * This linear time complexity is achieve via removing unnecessary comparison when pattern 
 * does not found via creating a table which store information about the suffix and prefix
 * of the pattern to be matched.
 */

function KMPSearchPattern(source, pattern) {
    let sourceArr = [...source];
    let patternArr = [...pattern];

    let suffixPrefixTable = buildSuffixPrefixTable(patternArr);

    let index = 0;
    let counter = 0;
    let matchingIndex = -1;
    while(counter < sourceArr.length && index < patternArr.length) {
        if(sourceArr[counter] === patternArr[index]) {
            counter++;
            index++;
        }
        else if(index !==0) {
            index = suffixPrefixTable[index -1];
        } else {
            counter++;
        }
    }
    if(index === pattern.length) {
        return true;
    }
    return false;
}

function buildSuffixPrefixTable(patternArr) {
    let index =0;
    let counter = 1;
    let table = new Array(patternArr.length);
    while(counter < patternArr.length) {
        if(patternArr[index] === patternArr[counter]){
            index++;
            table[counter] = index;
            counter++; 
        } else if(index !==0) {
            index = table[index-1];
        } else {
            counter++;
        }
    }
    return table;
}