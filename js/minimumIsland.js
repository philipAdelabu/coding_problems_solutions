/*
  Write a function, minimumIslan, tht takes in a grid containing Ws and Ls,
  W represents water, and L represents land. The function should return the size
  of the smallest island. An island is a vertically or horizontally connected region of land.
  You may assume that the grid contains at least one island.
*/

const minimumIsland = (grid) => {
      
    const visited = new Set();
    let min = Infinity;
    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[0].length; col++){
            let size = explore(grid, row, col, visited);
            if(size > 0) min = Min(min, size);
        }
    }
    return min;
}

const explore = (grid, row, col, visited) => {
    const rowInbound = row >= 0 && row < grid.length;
    const colInbound = col >= 0 && col < grid[0].length;
    if(!colInbound || !rowInbound) return 0;
    if(grid[row][col] === 'W') return 0;
    const pos = row + ',' + col;
    if(visited.has(pos)) return 0;
    visited.add(pos);

    let size = 1;
    size += explore(grid, row + 1, col, visited);
    size += explore(grid, row - 1,  col, visited);
    size += explore(grid, row, col + 1, visited);
    size += explore(grid, row,  col - 1, visited);
  
    return size;
}

const Min = (a, b) => {
    if(a > b) return b;
    return a;
}
const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'L', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W']
]

console.log(minimumIsland(grid));