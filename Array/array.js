let cities = ["Bangalore", "Pune", "mumbai","hyderabad"];

for (let city of cities){
    console.log(city);
    
}

//Avg of marks of entire class
let marks = [84,54,79,98,74,89];
 let sum = 0;

for (let val of marks){
    sum += val;
    console.log(sum);
}

let avg = sum / marks.length;
console.log(`Avg of student marks = ${avg}`);

//10% offer on product price

let item = [270, 300, 450, 232,435,645];

for (let i=0; i <item.length; i++){
    let offer = item[i] / 10
    item[i] -= offer;
}

console.log(`Offer price of product after discount ${item}`);

//splice and slice method

let companies = ["IBM", "Uber","Wipro","JPMC","KPMC"];

companies.shift();
companies.splice(2,1,"ola");
companies.push("Amazon");
console.log(companies);
