const toBinary = <T>(n: T): number => Number((Number(n) >>> 0).toString(2));
const dict: Map<number, string> = new Map([
    [1, 'wink'],
    [10, 'double blink'],
    [100, 'close your eyes'],
    [1_000, 'jump'],
]);

const getClosestCommand = (cmd: number) => {
    const MAX_STACK = 10_000;
    let power = 1;
    let stack: string[] = [];
    let reverses = 0;

    while(power <= MAX_STACK) {
        const lastDigit = Math.floor(cmd / power) % 10;
        let t = String(lastDigit).padEnd(String(power).length, '0');
        if(Number(t) > 0) {
            const possibleCmd = dict.get(Number(t));
            if(Number(t) === MAX_STACK) ++reverses;
            if(possibleCmd && possibleCmd )
                stack.push(possibleCmd);
        }
        power *= 10;
    }
    
    while(reverses > 0) {
        stack = stack.reverse();
        --reverses;
    }

    return stack;
}


export function commands<T>(command: T) {
    let out: string[] = [];
    const binaryCommand = toBinary(command);
    if (dict.has(binaryCommand)) {
        out.push(dict.get(binaryCommand) as string);
    } else {
        const possibleCommand = getClosestCommand(binaryCommand);
        for(const cmd of possibleCommand) {
            out.push(cmd);
        }
    }


    return out;
}
