//square of each number
let number = [3,4,6,7];

number.forEach((num) =>{
    console.log(num * num);//num ** 2
})

//2 method
let calsquare = (num) =>{
    console.log(num * num);
}

number.forEach(calsquare);

//filterout students with above 90

let marks = [78,98,87,86,92,95];

let output = marks.filter((val)=>{
    return val > 90;
})

console.log(output);
//take input as n from user and print 1 to n

let n = prompt("Enter Number");
let arr = [];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}

console.log(arr);

const sum = arr.reduce(( prev,cur)=>{
    return prev + cur;
}
)

console.log(sum);

const product = arr.reduce(( prev,cur)=>{
    return prev * cur;
}
)

console.log(product);
