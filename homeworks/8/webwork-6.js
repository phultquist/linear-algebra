import { Vector, Matrix } from "../../linalg/src/linalg.js";

let m = Matrix.create([2, -6], [6, 2]);

const eigenvalues = m.eigenvalues();
eigenvalues.forEach((e) => {
  const eigenvalue = e[0];
  console.log(eigenvalue);
  const P = m.eigenspace(eigenvalue)
  console.log(P.toString());
});
