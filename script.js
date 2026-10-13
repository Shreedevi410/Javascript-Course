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

while(number != userNo){
    userNo = prompt("wrong number, guess again");
}

console.log("congrats")
