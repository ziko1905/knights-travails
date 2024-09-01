//
const GRID_HEIGHT = 8;
const GRID_LENGTH = 8;

function knightMoves (start, end) {
    let q = [[start, []]];
    let done = new Set();
    let res;
    while (q.length) {
        const curr = q.pop();
        const pos = curr[0];
        const list = curr[1];
        if (done.has(curr) || curr[0] < 0 || curr[0] > GRID_LENGTH - 1 || curr[1] < 0 || curr[1] > GRID_HEIGHT - 1) continue
        if (pos == end) {
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