let a = 5;
 a++;
console.log("a++ = " , a++);//5
console.log("a++ = ", a++);

//User input
let userNumber = prompt("Enter a Number");

if (userNumber % 5 == 0) {
    console.log("yes");
} else {
    console.log("no");
}

//even number from 1 to 100

for (i = 0; i <= 100; i ++){
    if (i % 2 == 0) {
        console.log(i);
    }
}

//radom number game

let number = 25;
let userNo = prompt("Guess the number");

while (number != userNo) {
    userNo = prompt("wrong number, guess again");
}

console.log("congrats");

// for loop with break
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break;
    }
    console.log("Break example:", i);
}

// do while loop
let count = 1;
do {
    console.log("Do while count:", count);
    count++;
} while (count <= 3);

// nested loop example
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`Nested loop: ${i}, ${j}`);
    }
}

// for loop with continue
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log("Continue example:", i);
}

// for...of loop (values in an array)
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}

// for...in loop (keys in an object)
let person = {
    name: "Alex",
    age: 20
};
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
