// Print a multiplication table for a number.
function printMultiplicationTable(number, limit = 10) {
    for (let i = 1; i <= limit; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

// Add all numbers in an array.
function sumNumbers(numbers) {
    let sum = 0;

    for (const number of numbers) {
        sum += number;
    }

    return sum;
}

// Find the largest number in an array.
function findLargest(numbers) {
    if (numbers.length === 0) {
        return undefined;
    }

    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    return largest;
}

printMultiplicationTable(5);

const scores = [45, 82, 67, 90, 53];
console.log("Sum:", sumNumbers(scores));
console.log("Largest:", findLargest(scores));
