
let array = [];

let number = 4;

let fact =1;
for(let i=number; i>=1;i--){
    fact = fact * i;
    array.push(i);
}
const reduc = (a,b)=>{
    return a*b;
}
console.log(array.reduce(reduc));
console.log(`Factorial: ${fact}`);
console.log(array);