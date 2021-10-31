import { Vector } from '../../src';
import { gramSchmidt } from '../../src/util';

const v1 = new Vector(3, 0, 2, 0, 5, -2),
    v2 = new Vector(3, -3, 2, 0, 3, 0),
    v3 = new Vector(3, 0, 5, -4, 1, 0);

const [u1, u2, u3] = gramSchmidt([v1, v2, v3]);
console.log('Dot Product');
console.log(u1.dot(v3));
console.log(u2.dot(v3));
