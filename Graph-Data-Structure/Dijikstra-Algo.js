import Graph from './Graph.js';
import BinaryMinHeap from './BinaryMinHeap.js';

const findShortestPath = function(graph, vertex) {
const pathMap = {};
const distanceMap = {};
const binaryMinHeap = new BinaryMinHeap();
for (const vertexId in graph.vertexList) {
    if(graph.vertexList.hasOwnProperty(vertexId))
    binaryMinHeap.add(Infinity, graph.vertexList[vertexId].id);
}
binaryMinHeap.decreaseKey(vertex.id,0);
pathMap[vertex.id] = null;
distanceMap[vertex.id] = 0;
while(!binaryMinHeap.empty()) {
    let minNode = binaryMinHeap.extractMin();
    let currVertId = minNode.key;
    distanceMap[currVertId] = minNode.weight;
    let currVert = graph.vertexList[currVertId];
    currVert.adjescentVertex.forEach((adjver)=>{
        if(binaryMinHeap.containsKey(adjver.id)){
            let newPathCost = distanceMap[currVertId] + currVert.adjVertexEdgeMap[adjver.id].weight
            if(newPathCost < binaryMinHeap.getWeight(adjver.id)) {
                binaryMinHeap.decreaseKey(adjver.id, newPathCost);
                pathMap[adjver.id] = currVert;
            }
        }
    })
}
return {
    distanceMap,
    pathMap
}
}

/****** Test code  */
const graph = new Graph();
graph.addEdge(1, 2, 5);
        graph.addEdge(2, 3, 2);
        graph.addEdge(1, 4, 9);
        graph.addEdge(1, 5, 3);
        graph.addEdge(5, 6, 2);
        graph.addEdge(6, 4, 2);
        graph.addEdge(3, 4, 3);
let currVertex = graph.vertexList[1];
let shortestPath = findShortestPath(graph, currVertex)

export default findShortestPath;
