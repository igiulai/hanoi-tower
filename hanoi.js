var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Stack.prototype.size = function () {
        return this.items.length;
    };
    Stack.prototype.print = function () {
        return this.items.length > 0 ? this.items.join(' ') : 'empty';
    };
    Stack.prototype.toString = function () {
        return this.print();
    };
    return Stack;
}());
function hanoi(n, source, target, auxiliary, moves) {
    // Check if the number of disks is positive
    if (n <= 0) {
        console.log("The number of disks must be a positive integer.");
        return;
    }
    if (n === 1) {
        var disk = source.pop();
        if (disk !== undefined) {
            target.push(disk);
            moves[0]++;
            console.log("Move disk ".concat(disk, " from Source (").concat(source.toString(), ") to Target (").concat(target.toString(), ")"));
        }
    }
    else {
        hanoi(n - 1, source, auxiliary, target, moves);
        var disk = source.pop();
        if (disk !== undefined) {
            target.push(disk);
            moves[0]++;
            console.log("Move disk ".concat(disk, " from Source (").concat(source.toString(), ") to Target (").concat(target.toString(), ")"));
        }
        hanoi(n - 1, auxiliary, target, source, moves);
    }
}
function calculateMoves(n) {
    return Math.pow(2, n) - 1;
}
// Initialize the stacks
var numDisks = 8; // Change this value to test with 3 to 8 disks
var source = new Stack();
var target = new Stack();
var auxiliary = new Stack();
// Fill the source stack with disks
for (var i = numDisks; i >= 1; i--) {
    source.push(i);
}
// Print initial state
console.log("Initial state:");
console.log("Disks: ".concat(source.print()));
console.log("Target: ".concat(target.print()));
console.log("Auxiliary: ".concat(auxiliary.print()));
// Array to hold the count of moves
var moves = [0];
// Solve the Tower of Hanoi
hanoi(numDisks, source, target, auxiliary, moves);
// Print final state
console.log("Final state:");
console.log("Source: ".concat(source.print()));
console.log("Target: ".concat(target.print()));
console.log("Auxiliary: ".concat(auxiliary.print()));
// Calculate and print the number of moves required
console.log("Total number of moves: ".concat(moves[0]));
