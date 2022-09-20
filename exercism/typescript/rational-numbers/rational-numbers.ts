const GCD = <T extends number>(n1: T, n2: T): number => n2 ? GCD(n2, n1 % n2) : n1;
const fix = (n: number) => n ? n : 0;

export class Rational {
    n1: number;
    n2: number;

    constructor(n1: number, n2: number) {
        const gcd = GCD(n1, n2);
        this.n1 = fix(n1 / gcd);
        this.n2 = fix(n2 / gcd);
    }

    add(r: Rational) {
        return new Rational(this.n1 * r.n2 + r.n1 * this.n2, this.n2 * r.n2);
    }

    sub(r: Rational) {
        return new Rational(this.n1 * r.n2 - this.n2 * r.n1, this.n2 * r.n2);
    }

    mul(r: Rational) {
        return new Rational(this.n1 * r.n1, this.n2 * r.n2);
    }

    div(r: Rational) {
        return new Rational(this.n1 * r.n2, r.n1 * this.n2);
    }

    abs() {
        return new Rational(Math.abs(this.n1), Math.abs(this.n2));
    }

    exprational(power: number) {
        return new Rational(this.n1 ** power, this.n2 ** power);
    }

    expreal(power: number) {
        return (power ** (1 / this.n2)) ** this.n1;
    }

    reduce() {
        return this;
    }
}
