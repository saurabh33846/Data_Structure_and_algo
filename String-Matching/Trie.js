class Trie {
    constructor(){
        this.root = new Node();
    }
    insert(word){
        let aWordChar = [...word];
        let current = this.root;
        for(let i=0;i<aWordChar.length;i++){
            let node = current.charMap.has(aWordChar[i]);
            if(!!!node){
                node = new Node();
                current.charMap.set(aWordChar[i], node);
            }
            current = node;
        }
        current.isEndOfWord = true;
    }
    searchWholeWord(word) {
        let aWordChar = [...word];
        let current = this.root;
        for(let i=0;i<aWordChar.length;i++){
            let node = current.charMap.has(aWordChar[i]);
            if(!!!node) {
                return false;
            }
            current = node;
        }
        return current.isEndOfWord;
    }
    searchPrefix(prefix) {
        let aWordChar = [...word];
        let current = this.root;
        for(let i=0;i<aWordChar.length;i++) {
            let node = current.charMap.has(aWordChar[i]);
            if(!!!node){
                return false;
            }
            current = node;
        }
        return true;
    }
    delete(wordArray, currNode, index) {
        if(index === word.length()){
            if(!currNode.isEndOfWord){
                return false;
            }
            currNode.charMap.delete(wordArray[index]);
            let currNodeMapSize = currNode.charMap.size();
            if(size === 0) {
                return true;
            }
            return false;
        }
        let node = currNode.charMap.get(wordArray[index]);
        if(!!!node){
            return false;
        }
        shouldIdeleteMyMap = delete(wordArray, node, index+1);
        if(shouldIdeleteMyMap) {
            currNode.charMap.delete(wordArray[index]);
            let currentMapSize = currNode.charMap.size();
            if(currentMapSize === 0) {
                return true;
            }
        }
        return false;
    }
    deleteWord(word) {
        let aWordChar = [...word];
        let current = this.root;
        delete(aWordChar, root, 0)
    }
}
class Node {
    constructor(){
        this.charMap = new Map();
        this.isEndOfWord = false;
    }
    // get charMap(){
    //     return this.charMap;
    // }
    // set charMap()
}