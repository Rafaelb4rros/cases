function shuffle([...names]) {
    return names.reduce((acc, _, first) => {
        const arr = Math.floor(Math.random() * first);
        //swaping aleatory index on range of the current loop idx with the current loop idx;
        [[acc[first], acc[arr]] = [acc[arr], acc[first]]]
        return acc;
    }, names)
};

function makeName() {
    const ALPHABET = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    const DIGITS = [...Array(10).keys()];
    let pointer = 0;

    const cartesian = (a: string[], ...b: any[]) => b
        .reduce((acc, x) => acc.flatMap((e: string[]) => x.map((f: any) => [...e, f])), a.map(e => [e]))
        .map((e: string[]) => e.join(''));
     
    const mem = shuffle(cartesian(ALPHABET, ALPHABET, DIGITS, DIGITS, DIGITS));
   
    const reset = () => {
        pointer = 0;
    };

    const next = () => {
        ++pointer;
        return mem[pointer];
    };

    return {
        next,
        reset
    };
};

const mem = makeName();


export class Robot {
    private names = mem;
    private _name: string = this.names.next();

	public get name() {
        return this._name;
	};

	public resetName() {
        this._name = this.names.next();
	};
	
	public static releaseNames() {
        mem.reset();
	};
}

