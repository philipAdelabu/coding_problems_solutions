/*  
  file made of up of various functions utitlities.
*/


const MinMax = (a, b, type='min') => {
    if(type.toLowerCase() === 'min' || type.toLowerCase() === 'minimum'){
         if(a < b) return a;
         return b;
    }else{
        if(a > b) return a;
        return b;
    }
} 

const min = (a, b) => {
         if(a < b) return a;
         return b;
}

const max = (a, b) => {
    if(a > b) return a;
    return b;
}


const buildGraph = (edges) => {
    const graph = {};
    for(let edge of edges){
      const [a, b] = edge;
      if(!(a in graph)) graph[a] = [];
      if(!(b in graph)) graph[b] = [];

      graph[a].push(b);
      graph[b].push(a);
    }
  
   return graph;
};
