
class DisjointSet {
    constructor() {
        this.setElementsMap = {};
    }
    
    
    makeSet = function(data){
        let node = new Node(data);
        this.setElementsMap[data] = node;
    }
    union = function(data1, data2) {
        let node1 = this.setElementsMap[data1];
        let node2 = this.setElementsMap[data2];
        if (node1 && node2) {
           let parent1 = this.findSetInternal(node1);
            let parent2 = this.findSetInternal(node2);
            if(parent1 === parent2 ) {
                return;
            }
            if (parent1.rank >= parent2.rank) {
                parent1.rank =  (parent1.rank === parent2.rank)? parent1.rank+1 : parent1.rank;
                parent2.parent = parent1;
            } else {
                parent1.parent = parent2;
            }
        }
    }
    findSetInternal = function (node) {
        if(node && node.parent) {
            let parent = node.parent;
            if(node === node.parent) {
                return parent;
            }
            node.parent = this.findSetInternal(parent);
            return node.parent;
        }

    }
    findSet = function(data) {
        return this.findSetInternal(this.setElementsMap[data]);
    }
}
class Node {
    constructor(data, parent=this, rank=0) {
        this.data = data;
        this.parent = parent;
        this.rank = rank;
    }
}
let ds = new DisjointSet();
ds.makeSet(1);
ds.makeSet(2);
ds.makeSet(3);
ds.makeSet(4);
ds.makeSet(5);
ds.makeSet(6);
ds.makeSet(7);

ds.union(1, 2);
ds.union(2, 3);
ds.union(4, 5);
ds.union(6, 7);
ds.union(5, 6);
ds.union(3, 7);

console.log(ds.findSet(1));
console.log(ds.findSet(2));
console.log(ds.findSet(3));
console.log(ds.findSet(4));
console.log(ds.findSet(5));
console.log(ds.findSet(6));
console.log(ds.findSet(7));
export default DisjointSet;