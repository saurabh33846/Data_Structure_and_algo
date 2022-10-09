/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */


var numBusesToDestination = function(routes, source, target) {
    class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y
    }
}
class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    enQueue(item) {
        this.stack1.push(item)
    }
    deQueue() {
        if (this.stack2.length===0) {
            let len = this.stack1.length;
            let i = 0;
            while(i< len) {
                this.stack2.push(this.stack1.pop());
                i++;
            }
        }
        return this.stack2.pop();
    }
    isEmpty() {
        return !this.stack1.length && !this.stack2.length;
    }
}
    let graph = [];
    let sources = [];
    let queue = new Queue();
    let visitedSet = new Set();
    let destinationSet = new Set();
    routes.forEach((route, index)=>{
        graph[index] = [];
        routes[index] = route.sort((a,b)=>a-b);
    })
    for (let i = 0;i< routes.length;i++) {
        for (let j = i+1; j< routes.length;j++) {
            if (isConnected(routes[i], routes[j])) {
                graph[i].push(j);
                graph[j].push(i);
            }
        }
    }
    for (let i =0;i<routes.length;i++) {
        if (binarySearch(routes[i], source, 0, routes[i].length-1)) {
            queue.enQueue(new Point(i, 0));
            visitedSet.add(i);
        }
        if (binarySearch(routes[i], target, 0, routes[i].length-1)) {
            destinationSet.add(i);
        }
    }
    console.log(destinationSet, visitedSet, graph, queue)
    while(!queue.isEmpty()) {
        console.log(destinationSet, visitedSet, graph, queue)
        let curNodePt = queue.deQueue();
        let curNode = curNodePt.x;
        let depth = curNodePt.y;
        console.log(curNodePt, curNode, depth)

        
        if (destinationSet.has(curNode)) {
            return depth +1;
        }
        graph[curNode].forEach((vert)=>{
            if(!visitedSet.has(vert)) {
                queue.enQueue(new Point(vert, depth+1));
                visitedSet.add(vert);
            }
        })

    }
    
    return -1;
    
};
function binarySearch(arr, el, start, end) {
    if (start> end) {
        return false;
    }
    let mid = Math.ceil((start+end)/2);
    if (arr[mid] === el ) {
        return true;
    }
    if (arr[mid]< el) {
        return binarySearch(arr, el,mid+1, end )
    } else {
        return binarySearch(arr, el, start, mid-1)
    }
}
function isConnected (routeA, routeB) {
    let i=0, j=0;
    while(i<routeA.length && j < routeB.length) {
        if (routeA[i]===routeB[j]) {
            return true;
        }
        if (routeA[i]< routeB[j]) {
            i++;
        } else {
            j++;
        }
    }
    return false;
}
class Browser {
    
}
// Find Unique Bus stops
// Create a directed graph Traversing all the Nodes 
// Representation of Graphs (Directed and Undirected)
// Find shortest path between Source & Destination
// (all single source shortest path Algo)

numBusesToDestination([[24],[3,6,11,14,22],[1,23,24],[0,6,14],[1,3,8,11,20]],
20
,8)
