import Graph from './Graph.js';
function topologicalSort (graph) {
    const visitedSet = new Set();
    const sortStack = [];
    const allVertex = graph.getAllVertex();
    const topSortVertex = function(vertex){
        visitedSet.add(vertex);
        let adjescentVertex = vertex.getAdjescentVertex();
        adjescentVertex.forEach((curVertex)=>{
            if(!visitedSet.has(curVertex)){
                topSortVertex(curVertex);
            }
        });
        sortStack.push(vertex);
    }
    allVertex.forEach((vertex)=>{
        if(!visitedSet.has(vertex)){
            topSortVertex(vertex);
        }
    })
    return sortStack;
}

/******* Driving code  **************/
const graph = new Graph(true); // Create a directed graph
graph.addEdge(1, 3);
        graph.addEdge(1, 2);
        graph.addEdge(3, 4);
        graph.addEdge(5, 6);
        graph.addEdge(6, 3);
        graph.addEdge(3, 8);
        graph.addEdge(8, 11);

let sortedStack = topologicalSort(graph);
console.log(sortedStack);
export default topologicalSort;