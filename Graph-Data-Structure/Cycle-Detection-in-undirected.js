/***
 * Two methods are give 
 * 1. using disjoint set: which basically checks cycle in graph using disjoint sets
 * 2. Using DFS
 */
function hasCycleUsingDisjointSets(graph) {
    let ds = new DisjointSet();
    for(key in graph.vertexList ){
       ds.makeSet(key); 
    }
    
    for(let i=0;i<graph.edgeList.length;i++){
        let currEdge = graph.edgeList[i];
        let parent1 = ds.findSet(currEdge.vertex1.id);
        let parent2 = ds.findSet(currEdge.vertex2.id);
        if(parent1 == parent2) {
            return true;
        }
        ds.union(parent1.data, parent2.data);
    }
    return false;
    
    }
    
    function hasCycleUsingDFS(graph){
        let visitedSet = new Set();
        for (key in graph.vertexList) {
            if(visitedSet.has(graph.vertexList[key])){
                continue;
            }
            let flag = hasCycleUsingDfsRecur(graph.vertexList[key], visitedSet, null);
            if(flag) {
                return true;
            }
        }
        return false;
    
    }
    function hasCycleUsingDfsRecur(vertex, visitedSet, parent) {
        visitedSet.add(vertex);
        for(let i =0;i<vertex.adjescentVertex.length;i++) {
            let currVer = vertex.adjescentVertex[i];
            if(currVer === parent){
                continue;
            }
            if(visitedSet.has(currVer)) {
                return true;
            }
            let hasCycle = hasCycleUsingDfsRecur(currVer,visitedSet,vertex);
            if (hasCycle) {
                return true;
            }
        }
        return false;
    }
    
    let isCycle = hasCycleUsingDisjointSets(graph);
    let isCycle2 = hasCycleUsingDFS(graph);
    console.log(isCycle2);