
/*
  Write a funciton , connectedComponentCount, that takes in the adjacency
  list of an undireted graph. The functin should return the number
  of conneted components within the graph.
*/

const connectedComponentCount = (graph) => {
   const visited = new Set();
   let count = 0;
   for(let node in graph)
     if(explore(graph, node, visited) === true)
        count++;
   return  count;
};

const explore = (graph, adj, visited) => {
    if(visited.has(String(adj)) === true) return false;
    visited.add(String(adj));
    for(let neighbour of graph[adj]){
       explore(graph, neighbour, visited);
    }
    return true;
};


const graph = {
    0: [0,1,5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
};

console.log("Components: " + connectedComponentCount(graph));

