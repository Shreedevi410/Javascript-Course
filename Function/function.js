function sum (a,b){
    return a + b;
}

console.log(sum (9,5));

//arrow function
const add = (a,b) => {
    console.log(a + b);
}

add (4,5);

//
const printHello = () => {
    console.log("hello");
}

printHello();
//findout vowels

function countVowels(str) {
    let count = 0;
    for(const char of str){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count++
        }
    }
    
    console.log(count);
}
countVowels("apnacollege");

//2nd method

function countVowels(str) {
  let count = 0;

  for (const char of str) {
    if ("aeiou".includes(char.toLowerCase())) {
      count++;
    }
  }

  console.log(count);
}

countVowels("ApnaCollege"); 