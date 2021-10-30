import { Matrix, Vector, Subspace, Polynomial, Complex } from './linalg/src/linalg.js';

const v1 = Vector.create(3, 0, 2, 0, 5, -2),
    v2 = Vector.create(3, -3, 2, 0, 3, 0),
    v3 = Vector.create(3, 0, 5, -4, 1, 0);

const gramSchmidt = (vectors) => {
    const result = [];
    vectors.forEach((v, i) => {
        if (i == 0) {
            result.push(v);
        } else {
            let ki = v;
            for (let j = 0; j < i; j++) {
                const kj = result[j];
                const projVontoKj = proj(v, kj);
                ki = ki.sub(projVontoKj);
            }
            result.push(ki);
        }
    });
    return result
}

// projection of a onto b
const proj = (a, b) => {
    return b.clone().scale(a.dot(b) / b.dot(b));
}

const result = gramSchmidt([v1, v2, v3]);
console.log(result);
console.log(result[0].dot(v3));
// console.log(result[0].dot(v2));
// console.log(result[0].dot(result[0]));