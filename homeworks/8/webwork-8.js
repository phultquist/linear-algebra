import { Vector, Matrix } from "../../linalg/src/linalg.js";

const m1 = Matrix.create([-11, -2], [8, -3]);
const m2 = Matrix.create([15, 6], [-36, -15]);
const m3 = Matrix.create([-1,-8], [4, -3]);
const m4 = Matrix.create([17, 10], [-20, -13]);

[m1,m2,m3,m4].forEach((m, i) => {
    m = m.clone();

    console.log(i + 1);
    console.log(m.eigenvalues())
})