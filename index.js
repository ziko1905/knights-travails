//
const GRID_HEIGHT = 8;
const GRID_LENGTH = 8;

let grid = [];
for (let m = 0; m < GRID_HEIGHT; m++) {
    grid.push([])
    for (let n = 0; n < GRID_LENGTH; n++) grid[m].push([n, m])
}

function knightMoves (start, end) {
    let q = [[grid[start[1]][start[0]], []]];
    let done = new Set();
    let res;
    while (q.length) {
        const curr = q.pop();
        if (curr[0][0] < 0 || curr[0][0] > GRID_LENGTH - 1 || curr[0][1] < 0 || curr[0][1] > GRID_HEIGHT - 1) continue
        const pos = grid[curr[0][1]][curr[0][0]];
        const list = curr[1];
        console.log(pos);
        if (done.has(pos)) continue
        if (pos == grid[end[1]][end[0]]) {
            res = [...list, pos];
            break
        }
        for (let n of [1, -1]) {
            for (let m of [2, -2]) {
                q.unshift([[pos[0] + n, pos[1] + m], [...list, pos]]);
                q.unshift([[pos[0] + m, pos[1] + n], [...list, pos]]);
            }
        }
        done.add(pos);
    }
    if (!res) console.log("Path not found!")
    else {
        console.log(`You made it in ${res.length - 1} moves!  Here's your path:`);
        res.forEach((value) => console.log(value));
    }
}