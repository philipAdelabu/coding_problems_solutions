 /* 
  Write a function, largestComponent, that takes in the adjacency list of an undirected
  graph. the funcion should return the size of the largest connected component in the graph.
*/

const largestComponent = (graph) => {
    let largest = 0;
    const visited = new Set();
    for(let node in graph){
        let number = explore(graph, node, visited);
        largest = number > largest ? number : largest;
    }
    return largest;
};

const explore = (graph, current, visited) => {
     if(visited.has(current) === true) return 0;
     visited.add(current);
     let size = 1;
     for(let adj of graph[current]){
        size += explore(graph, adj, visited);
     }
     return size
};

const graph = {
  0: ['8', '1', '5'],
  1: ['0', '7'],
  7: ['1'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
};

console.log("Lagest component: " +largestComponent(graph));