
const depthfirstsearch = (graph, root) => {
     const stack = [root];
     while(stack.length > 0){
        const current = stack.pop();
        console.log(current);
        for(let neighbour of graph[current]){
            stack.push(neighbour);
        }
     }
}

const depthfirstsearchrec = (graph, root) => {
     console.log(root);
     for(let neighbour of graph[root]){
         depthfirstsearchrec(graph, neighbour);
     }
};

const breathfirstsearch = (graph, root) => {
    const queue = [root];
    while(queue.length > 0){
        const current = queue.shift();
        console.log(current);
        for(let neighbour of graph[current]){
             queue.push(neighbour);
        }
    }
}

const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

//depthfirstsearch(graph, 'a');
//depthfirstsearchrec(graph, 'a');  

breathfirstsearch(graph, 'a');

