class Stack<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    push(item: T) {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }

    print(): string {
        return this.items.length > 0 ? this.items.join(' ') : 'empty';
    }

    toString(): string {
        return this.print();
    }
}

function hanoi(n: number, source: Stack<number>, target: Stack<number>, auxiliary: Stack<number>, moves: number[]): void {
    // Check if the number of disks is positive
    if (n <= 0) {
        console.log("The number of disks must be a positive integer.");
        return;
    }

    if (n === 1) {
        const disk = source.pop();
        if (disk !== undefined) {
            target.push(disk);
            moves[0]++;
            console.log(`Move disk ${disk} from Source (${source.toString()}) to Target (${target.toString()})`);
        }
    } else {
        hanoi(n - 1, source, auxiliary, target, moves);
        const disk = source.pop();
        if (disk !== undefined) {
            target.push(disk);
            moves[0]++;
            console.log(`Move disk ${disk} from Source (${source.toString()}) to Target (${target.toString()})`);
        }
        hanoi(n - 1, auxiliary, target, source, moves);
    }
}

function calculateMoves(n: number): number {
    return Math.pow(2, n) - 1;
}

// Initialize the stacks
const numDisks = 8; // Change this value to test with 3 to 8 disks
const source = new Stack<number>();
const target = new Stack<number>();
const auxiliary = new Stack<number>();

// Fill the source stack with disks
for (let i = numDisks; i >= 1; i--) {
    source.push(i);
}

// Print initial state
console.log("Initial state:");
console.log(`Disks: ${source.print()}`);
console.log(`Target: ${target.print()}`);
console.log(`Auxiliary: ${auxiliary.print()}`);

// Array to hold the count of moves
const moves = [0];

// Solve the Tower of Hanoi
hanoi(numDisks, source, target, auxiliary, moves);

// Print final state
console.log("Final state:");
console.log(`Source: ${source.print()}`);
console.log(`Target: ${target.print()}`);
console.log(`Auxiliary: ${auxiliary.print()}`);

// Calculate and print the number of moves required
console.log(`Total number of moves: ${moves[0]}`);