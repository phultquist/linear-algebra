export default class Vector extends Array<number> {
    constructor(...args: number[]) {
        super();
        for (const i of args) this.push(i);
    }

    static fromArray(arr: number[]): Vector {
        return new Vector(...arr);
    }

    get magnitude(): number {
        return Math.sqrt(this.dot(this));
    }

    get normalized(): Vector {
        return this.clone().scale(1 / this.magnitude);
    }

    get size(): number {
        return this.length;
    }

    dot(other: Vector): number {
        return this.reduce((acc, val, i) => acc + val * other[i], 0);
    }

    static dot(a: Vector, b: Vector): number {
        return a.dot(b);
    }

    sub(other: Vector): Vector {
        this.map((val, i) => val - other[i]);
        return this;
    }

    add(other: Vector): Vector {
        this.map((val, i) => val + other[i]);
        return this;
    }

    scale(scalar: number): Vector {
        this.map((val, i) => val * scalar);
        return this;
    }

    normalize(): Vector {
        return this.scale(1 / this.magnitude);
    }

    fill(value: number): Vector {
        this.map(() => value);
        return this;
    }

    static equals = (a: Vector, b: Vector): boolean => {
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }

    // clone vector
    clone = () => new Vector(...this);
}