'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}
function getAbsDist(x,y, obs) {
    return Math.abs(x-obs[0])+Math.abs(y-obs[1]);
}

// Complete the queensAttack function below.
function queensAttack(n, k, r_q, c_q, obstacles) {
    let totalMoves = 2*(n-1) + getDiagonalMoves(n,r_q, c_q);
    let closestMoveMap = {
        "hr":{dist:Infinity, moves:0},
        "hl":{dist:Infinity, moves:0},
        "vt":{dist:Infinity, moves:0},
        "vb":{dist:Infinity, moves:0},
        "tr":{dist:Infinity, moves:0},
        "tl":{dist:Infinity, moves:0},
        "br":{dist:Infinity, moves:0},
        "bl":{dist:Infinity, moves:0}
    }
    let absDist = 0
    obstacles = obstacles.map((item)=>{
        return [item[1], item[0]];
    })
     obstacles.forEach((obstacle)=>{
         let obsDir = isPartOfPath(c_q, r_q, obstacle);
         let moves =0;
         let x = obstacle[0];
         let y = obstacle[1];
         if(obsDir) {
                switch(obsDir) {
                case "hl": moves = obstacle[0];
                break;
                case "hr": moves = n-obstacle[0]+1;
                break;
                case "vt": moves = n-obstacle[1] +1;
                break;
                case "vb": moves = obstacle[1];
                break;
                case "tr": 
                    moves = Math.min(n-x, n-y) +1;
                    console.log(`tr ${moves} ${x} ${y}`)
                    break;
                case "tl":
                    moves = Math.min(x-1, n-y) +1;
                    console.log(`tl ${moves} ${x} ${y}`)
                    break;
                case "bl":
                    moves = Math.min(x-1, y-1) +1;
                    console.log(`bl ${moves} ${x} ${y}`)
                    break;
                case "br":
                    moves = Math.min(n-x, y-1) +1;
                    console.log(`br ${moves} ${x} ${y}`)
                    break;
                default: Function.prototype();
            }
            absDist = getAbsDist(c_q, r_q, obstacle);
            console.log(`absolute distance ${absDist} ${obsDir}`);
            if(closestMoveMap[obsDir].dist > absDist) {
                closestMoveMap[obsDir].dist = absDist;
                closestMoveMap[obsDir].moves = moves;
            }
         }


     })
     console.log(closestMoveMap);
     console.log(totalMoves);
     for (const key in closestMoveMap) {
         if(closestMoveMap[key] !== Infinity) {
             totalMoves = totalMoves - closestMoveMap[key].moves;
         }
     }
     return totalMoves
}
function isPartOfPath(x, y,obstacle) {
    if(x === obstacle[0]) {
        if(obstacle[1] > y) {
            return "vt"
        }
        return "vb";
    }
    if(y === obstacle[1]) {
        if(obstacle[0] > x) {
            return "hr"
        }
        return "hl";
    }
    if(obstacle[0] > x && obstacle[1] > y && obstacle[0]-x === obstacle[1]-y) {
        return "tr";
    }
    if (obstacle[0] < x  && obstacle[1] > y &&  x-obstacle[0] === obstacle[1]-y) {
        return "tl";
    }
    if(x > obstacle[0] && y > obstacle[1] && x-obstacle[0] === y-obstacle[1]) {
        return "bl";
    }
    if(obstacle[0] > x && y > obstacle[1] && obstacle[0]-x === y-obstacle[1]) {
        return "br";
    }
}
function getDiagonalMoves(n, x, y) {
    let URD = Math.min(n-x, n-y);
    let ULD = Math.min(x-1, n-y);
    let LRD = Math.min(n-x, y-1);
    let LLD = Math.min(x-1,y-1);
    return URD + ULD + LRD + LLD;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const r_qC_q = readLine().split(' ');

    const r_q = parseInt(r_qC_q[0], 10);

    const c_q = parseInt(r_qC_q[1], 10);

    let obstacles = Array(k);

    for (let i = 0; i < k; i++) {
        obstacles[i] = readLine().split(' ').map(obstaclesTemp => parseInt(obstaclesTemp, 10));
    }

    let result = queensAttack(n, k, r_q, c_q, obstacles);

    ws.write(result + "\n");

    ws.end();
}
