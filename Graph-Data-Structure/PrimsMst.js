import Graph from './Graph.js';
import BinaryMinHeap from './BinaryMinHeap.js';

function primsMst(graph) {
    let allVertices = graph.getAllVertex();
    let minHeap = new BinaryMinHeap();
    let vertEdgeMap = new Map();
    allVertices.forEach((vert)=>{
        minHeap.add(Infinity,vert);
    })
    let startVert = allVertices[0];
    minHeap.decreaseKey(startVert, 0);
    vertEdgeMap.set(startVert,null);
    let result = [];
    while(!minHeap.empty()) {
        let curVertToadded = minHeap.extractMin();
        let curEdgeToadded = vertEdgeMap.get(curVertToadded.key);
        if(!!curEdgeToadded) {
            result.push(curEdgeToadded);
        }
        let adjVertEdgeMap = curVertToadded.key.getAdjVertexEdgeMap();
        for(const key in adjVertEdgeMap) {
            let curAdjVert = graph.getVertexForKey(key);
            if(minHeap.containsKey(curAdjVert)) {
                let curAdjEdge = adjVertEdgeMap[key];
                let curAdjVertWeight = minHeap.getWeight(curAdjVert);
                if(curAdjVertWeight > curAdjEdge.weight) {
                    minHeap.decreaseKey(curAdjVert,curAdjEdge.weight);
                    vertEdgeMap.set(curAdjVert,curAdjEdge);
                }
            }

        }
    }
    return result;
}
let graph = new Graph();
graph.addEdge(1, 2, 3);
        graph.addEdge(2, 3, 1);
        graph.addEdge(3, 1, 1);
        graph.addEdge(1, 4, 1);
        graph.addEdge(2, 4, 3);
        graph.addEdge(4, 5, 6);
        graph.addEdge(5, 6, 2);
        graph.addEdge(3, 5, 5);
        graph.addEdge(3, 6, 4);
let result = primsMst(graph);
console.log(result);