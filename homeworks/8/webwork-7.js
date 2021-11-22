import { Vector, Matrix } from "../../linalg/src/linalg.js";

const m = Matrix.create([0,-1,1], [2,1,0], [1,0,-2], [-1,1,-4]).transpose;

console.log(m.rref().toString());

// Part 2

const inEigenvectorBasis = Matrix.create([-2,0,0], [0,1,0], [0,0,4]);
const changeOfBasisMatrix = Matrix.create([0,2,1], [-1,1,0], [1,0,-2]);

const smsi = changeOfBasisMatrix.mult(inEigenvectorBasis).mult(changeOfBasisMatrix.clone().inverse());
console.log(smsi.toString());
console.log(smsi.mult(Matrix.create([-1],[1],[-4])));