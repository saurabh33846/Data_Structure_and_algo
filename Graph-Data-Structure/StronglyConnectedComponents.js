import Graph from './Graph.js';
const visitedSet = new Set();

function getStronglyConnectedComponents(graph) {
    const stronglyConnectedComp = [];
    let sortedAccordTimeStack = [];
    graph.getAllVertex().forEach((ver)=>{
        if(!visitedSet.has(ver)){
            dfsUtil(ver, sortedAccordTimeStack);
        }
    })
    let reversedGraph = reverseGraph(graph);
    visitedSet.clear();
    while(sortedAccordTimeStack.length !==0){
        let curVert = sortedAccordTimeStack.pop();
        let reversedCurVert = reversedGraph.vertexList[curVert.id];
        if(!visitedSet.has(reversedCurVert)) {
            let stronglyConVertSet = [];
            dfsUtillForReverse(reversedCurVert, stronglyConVertSet);
            stronglyConnectedComp.push(stronglyConVertSet);
        }
    }
    return stronglyConnectedComp;
}
function dfsUtil(vertex, stack){
    visitedSet.add(vertex);
    let adjescentVertex = vertex.getAdjescentVertex();
    adjescentVertex.forEach((curver)=>{
        if(!visitedSet.has(curver)) {
            dfsUtil(curver,stack)
        }
    })
    stack.push(vertex);
}
function dfsUtillForReverse(vertex, vertexSet) {
    visitedSet.add(vertex);
    vertexSet.push(vertex);
    let allAdjVert = vertex.getAdjescentVertex();
    allAdjVert.forEach((curver)=>{
        if(!visitedSet.has(curver)) {
            dfsUtillForReverse(curver, vertexSet);
        }
    })
}
function reverseGraph(graph) {
    const revGraph = new Graph(true);
    let allEdges = graph.getAllEdges();
    allEdges.forEach((edge)=>{
        revGraph.addEdge(edge.vertex2.id, edge.vertex1.id, edge.weight);
    })
    return revGraph;
}

const graph = new Graph(true);
graph.addEdge(0, 1);
        graph.addEdge(1, 2);
        graph.addEdge(2, 0);
        graph.addEdge(1, 3);
        graph.addEdge(3, 4);
        graph.addEdge(4, 5);
        graph.addEdge(5, 3);
        graph.addEdge(5, 6);
        graph.addEdge(6, 7);
        graph.addEdge(6, 8);
        graph.addEdge(8, 9);
        graph.addEdge(9, 10);
        graph.addEdge(10, 8);
const connComp = getStronglyConnectedComponents(graph);
console.log(connComp);
export default getStronglyConnectedComponents;