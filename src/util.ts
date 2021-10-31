import Vector from './Vector';

export const gramSchmidt = (vectors: Vector[]) => {
    const result: Vector[] = [];
    vectors.forEach((v, i) => {
        if (i == 0) {
            result.push(v);
        } else {
            let ki = v;
            for (let j = 0; j < i; j++) {
                const kj = result[j];
                const projVontoKj = proj(v, kj);
                ki = ki.clone().sub(projVontoKj);
            }
            result.push(ki);
        }
    });
    return result;
}

export const proj = (a: Vector, b: Vector) => {
    return b.clone().scale(a.dot(b) / b.dot(b));
}