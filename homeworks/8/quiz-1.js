import { Vector, Matrix } from "../../linalg/src/linalg.js";

const m = Matrix.create([4,2,-4], [0,2,0], [2,2,-2]);

const e1 = m.eigenspace(0);

const diagonalized = m.clone().diagonalize();

const C = diagonalized.C
const D = diagonalized.D

// console.log(C.clone().mult(D).mult(C.clone().inverse()).toString());

// console.log(e1.toString());

const c1 = Matrix.create([1,1,0], [0,0,1], [1, 0.5, 0.5])
const d1 = Matrix.create([0,0,0], [0,2,0], [0, 0, 2])
console.log(c1.toString());
console.log('\n');
console.log(d1.toString());

console.log(c1.clone().mult(d1).mult(c1.clone().inverse()).toString());