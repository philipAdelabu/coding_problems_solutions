
/*
  Write a funciton , connectedComponentCount, that takes in the adjacency
  list of an undireted graph. The functin should return the number
  of conneted components within the graph.
*/

const graph = {
    0: [0,1,5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
};

for(let element of graph[0])
     console.log(element);
