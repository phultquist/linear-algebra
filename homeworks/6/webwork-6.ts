import { Vector } from '../../src';
import { gramSchmidt } from '../../src/util';

// note: there exists a function for finding the math

const v1 = new Vector(1, 2, 3);

console.log(Object.keys(v1));
console.log(v1);

Vector.dot(v1, v1);