class Node {
    constructor (value) {
        this.value = value
        this.children = [];
    }
    addChild(node) {
        this.children.push(node);
    }
    getAllChild () {
        return this.children;
    }

}

var root = new Node('a');
root.addChild(new Node('b'));
root.addChild(new Node('c'))
root.addChild(new Node('d'))
root.getAllChild()[0].addChild(new Node('e'))
root.getAllChild()[0].addChild(new Node('f'))
root.getAllChild()[1].addChild(new Node('dd'))
console.log(root);



function dfs (node) {
    if(node) {
        let children = node.getAllChild();
        for(let i =0;i<children.length;i++) {
            dfs(children[i]);
        }
        console.log(node.value);
    }
}

class queue  {
    constructor() {
        this.arr = [];
    }
    enque(val) {
        this.arr.unshift(val);
    }
    deque() {
        return this.arr.pop();
    }
}

function Bfs(node ) {
    if(node ) {
        let temp = node;
        let que = new queue();
        while(temp ) {
          console.log(temp.value);
          temp.getAllChild().forEach((ch)=>{
              que.enque(ch);
          });
          temp = que.deque();
        }
        
    }
}

//dfs(root);
Bfs(root);
