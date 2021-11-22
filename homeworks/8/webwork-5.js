import { Vector, Matrix } from "../../linalg/src/linalg.js";

let m = Matrix.create([-14, 0, 9], [-27, -5, 27], [-18, 0, 13]);
const eigenvalues = m.eigenvalues();

const e1 = eigenvalues[0];
const e2 = eigenvalues[1];

[e1, e2].forEach((e) => {
  const eigenvalue = e[0];
  const lambdaI = Matrix.identity(3).scale(eigenvalue);
  const lambdaI_m = m.clone().sub(lambdaI);

  const rref = lambdaI_m.rref();

  console.log(eigenvalue);
  console.log(rref.toString() + "\n");
});

