/*  
 Write a funciton, islandCound, that takes in a grid contiaining Ws and Ls, W represents water and L represents
 land. The function should return the number of islands on the grid. An island is a vrticaly or horizotally connected region of land.
*/


 const islandCount = (grid) => {
    const visited = new Set();
    let count = 0
    for(let row = 0; row < grid.length; row++)
        for(let col = 0; col < grid[0].length; col++){
           if(explore(grid, row, col, visited) === true)
              count += 1;
        }

    return count;
 };

 const explore = (grid, row, col, visited) => {
    const rowInbound = row >= 0 && row < grid.length;
    const colInbound = col >= 0 && col < grid[0].length;
    if(!rowInbound || !colInbound) return false;
    if(grid[row][col] === 'W') return false;
    const pos = row + ',' + col;
    if(visited.has(pos)) return false;
    visited.add(pos);

    explore(grid, row+1, col, visited);
    explore(grid, row-1, col, visited);
    explore(grid, row, col+1, visited);
    explore(grid, row, col-1, visited);
  
    return true;
 };



const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W']
]

console.log(islandCount(grid));