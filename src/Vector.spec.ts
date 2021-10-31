import { Vector } from '.';

describe('Vector', function () {
    describe('constructor', function () {
        it('should have a length of 0', function () {
            let v = new Vector();
            expect(v.length).toBe(0);
        });
        it('should have a length of 3', function () {
            let v = new Vector(1, 2, 3);
            expect(v.length).toBe(3);
        });
    });
    describe('add', function () {
        it('should add two vectors', function () {
            let v1 = new Vector(1, 2, 3);
            let v2 = new Vector(2, 3, 4);
            let v3 = v1.add(v2);
            expect(v3[0]).toBe(3);
            expect(v3[1]).toBe(5);
            expect(v3[2]).toBe(7);
        });
        it('should add a scalar and a vector', function () {
            let v1 = new Vector(1, 2, 3);
            let v3 = v1.add(v1);
            expect(v3[0]).toBe(3);
            expect(v3[1]).toBe(4);
            expect(v3[2]).toBe(5);
        });
    });
})