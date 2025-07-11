/*
  write a function, hasPath, hat takes in an object representing the 
  adjency list of a directed acyclic graph and two nodes (src, dst).
  The function should return a boolean indicating whether or not there 
  exits a directed path between the source 
  and destination nodes.
*/

const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};

//hasPaht(graph 'f', 'k') true
const hasPath = (graph, src, dst) => {
    count = 0;
    const queue = [src];
    while(queue.length > 0){
        const current = queue.shift();
        if(current === dst) return true;
        for(let neighbour of graph[current]){
            queue.push(neighbour);
        }
    }
    return false;
}; 


const hasPath2 = (graph, src, dst) => {
    if(src == dst) return true;
    for(let neighbour of graph[src]){
        if(hasPath2(graph, neighbour, dst) ===  true)
             return true;
    }
    return false;
};

console.log(hasPath2(graph, 'f', 'o'));
console.log("count : " + count);