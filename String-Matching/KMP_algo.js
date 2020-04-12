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