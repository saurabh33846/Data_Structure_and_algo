/**** BinaryMinHeap is a data structure which works like regular heap but support some additional
 * operation like:
 * contains: in O(1) time to check whether any key exist or not in heap
 * decreaseKey: in O(logn) time to decrease the value of key
 * oteher regular operations are:
 * add(key) : O(logn) time
 * extractMin() : O(logn)time
 * getMin() :O(1) time, which just give key of minimum element. Does not remove from heap
 */

class BinaryMinHeap {
    allNodes = [];
    size =0;
    nodePosition = new Map();
    add = function (weight, key){
        let node = new Node(weight, key);
        this.allNodes.push(node);
        let current = this.size;
        this.nodePosition.set(node.key, current);
        this.size++;
        this.heapifyUp(current);

    }
    heapifyUp = function(current) {
            let parentIndex = Math.floor((current-1)/2);
            while (parentIndex >= 0) {
            let parentNode = this.allNodes[parentIndex];
            let currentNode = this.allNodes[current];
            if(parentNode.weight > currentNode.weight) {
                this.swapAndUpdate(parentNode, currentNode);
                 current = parentIndex;
                 parentIndex = Math.floor((parentIndex-1)/2);
            } else {
                break;
            }
        }    
    }
    decreaseKey = function(key, newWeight) {
        let position = this.nodePosition.get(key);
        if(position !== undefined) {
            this.allNodes[position].weight = newWeight;
            let current = position;
            this.heapifyUp(current);

        }
    }
    swapAndUpdate = function(node1, node2){
        let index1 = this.allNodes.indexOf(node1);
        let index2 = this.allNodes.indexOf(node2);
        let temp;
        temp = this.allNodes[index1];
        this.allNodes[index1] = node2;
        this.allNodes[index2] = node1;
        this.nodePosition.set(node1.key, index2);
        this.nodePosition.set(node2.key, index1);

    }
    heapify = function(index){
        let root = this.allNodes[index];
        let left = index *2+1;
        let right = index*2 +2;
        if(left >= this.size) {
            return;
        } 
        if( right >= this.size) {
            right = left;
        }
        let minIndex = this.allNodes[left].weight < this.allNodes[right].weight? left:right;
        if(this.allNodes[minIndex].weight < this.allNodes[index].weight){
            this.swapAndUpdate(this.allNodes[minIndex], this.allNodes[index]);
            this.heapify(minIndex);
        }
    }
    extractMin = function() {
        let newNode = new Node();
        this.swapAndUpdate(this.allNodes[0], this.allNodes[this.size-1]);
        newNode = this.allNodes[this.size-1];
        this.nodePosition.delete(this.allNodes[this.size-1].key);
        this.size--;
        this.heapify(0);
        return newNode;
    }
    getMin = function() {
        return this.allNodes[0];
    }
    containsKey = function(key) {
        return this.nodePosition.has(key);
    }
    empty = function(){
        return this.size ===0;
    }
    getWeight = function(key) {
        let position = this.nodePosition.get(key);
        if (position !== -1) {
            return this.allNodes[position].weight;
        }
    }
    
   
}
class Node {
   constructor(weight, key){
       this.weight = weight;
       this.key = key;
   }
}
let heap = new BinaryMinHeap();
heap.add(3, "Tushar");
       heap.add(4, "Ani");
       heap.add(8, "Vijay");
       heap.add(10, "Pramila");
       heap.add(5, "Roy");
       heap.add(6, "NTF");
       heap.add(2,"AFR");
       heap.decreaseKey("Pramila", 1);
       console.log(heap.nodePosition);

export default BinaryMinHeap;