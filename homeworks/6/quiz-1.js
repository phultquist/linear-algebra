import { Vector, Matrix } from '../../linalg/src/linalg.js';

// proj of a onto b
const proj = (a, b) => {
    return b.clone().scale(a.dot(b) / b.dot(b));
}

// proj of v onto a where a is an array of bases
const projOntoSubspace = (v, M) => {
    // result should have same dimensions as v
    const result = Vector.from(v.map(x => 0));
    for (let i = 0; i < M.length; i++) {
        const basis = M[i];
        result.add(basis.clone().scale(basis.clone().dot(v)));
    }
    return result;
}

const B1 = Vector.create(1, 0, -1).normalize();
const B2 = Vector.create(1, 1, 1).normalize();
const B1NN = Vector.create(1, 0, -1);
const B2NN = Vector.create(1, 1, 1);
const m = Matrix.create(B1, B2).transpose;

const e1 = Vector.create(1, 0, 0);
const e2 = Vector.create(0, 1, 0);
const e3 = Vector.create(0, 0, 1);

const usingNormalized = Matrix.from([e1, e2, e3].map(e => projOntoSubspace(e, [B1, B2]))).transpose;
const usingNotNormalized = Matrix.from([e1, e2, e3].map(e => projOntoSubspace(e, [B1NN, B2NN]))).transpose;
const usingTranspose = m.clone()
    .mult(m.clone()
        .transpose
        .mult(m)
        .inverse()
    )
    .mult(m.clone()
        .transpose
    )

console.log('\nusing normalized');
console.log(usingNormalized.toString());
console.log('\nusing not normalized');
console.log(usingNotNormalized.toString());
console.log('\nusing transpose');
console.log(usingTranspose.toString());



