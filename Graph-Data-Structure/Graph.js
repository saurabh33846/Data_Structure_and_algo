class Graph {
    constructor(isDirected) {
        this.vertexList = {};
        this.edgeList = [];
        this.isDirected = !!isDirected;
    }
    getAllVertex(){
      return Object.values( this.vertexList);  
    }
    addEdge (id1, id2, weight=0) {
        let vertex1 = this.vertexList[id1];
        let vertex2 = this.vertexList[id2];
        if(!vertex1) {
            vertex1 = new Vertex(id1);
            this.vertexList[id1]= vertex1;
        }
        if(!vertex2) {
            vertex2 = new Vertex(id2);
            this.vertexList[id2] = vertex2;
        }
        let edge = new Edge(vertex1,vertex2,this.isDirected,weight);
        this.edgeList.push(edge);
        vertex1.addAdjescentVertex(edge,vertex2);
        if(!this.isDirected) {
            vertex2.addAdjescentVertex(edge, vertex1);
        }
    }
}
class Vertex {
    constructor(id) {
        this.id = id;
        this.data = null;
        this.adjescentVertex = [];
        this.edges = [];
        this.adjVertexEdgeMap = {};
    }
    addAdjescentVertex(edge, vertex) {
        this.edges.push(edge);
        this.adjescentVertex.push(vertex);
        this.adjVertexEdgeMap[vertex.id] = edge;
    }
    getAdjescentVertex (){
        return this.adjescentVertex;
    }
//     get id () {
//         return this.id;
//     }
//     get data () {
//         return this.data
//     }
//     get edges () {
//         return this.edges;
//     }
//     get addAdjescentVertex () {
//         return this.addAdjescentVertex;
    //}
//     set data (data) {
//         this.data = data;
//     }
}
class Edge {
    constructor (vertex1, vertex2, isDirected= false, weight=0) {
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.isDirected = isDirected;
        this.weight = weight;
    }
}
export default Graph;
export {Edge};
export {Vertex};

var graph = new Graph();
graph.addEdge(1,2);
graph.addEdge(2,3);
graph.addEdge(4,5);
graph.addEdge(6,7);
graph.addEdge(1,7);
graph.addEdge(2,8);
graph.addEdge(3,6);
console.log(graph.vertexList);
console.log(graph.edgeList);

