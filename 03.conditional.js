console.log("Hello Conditional Tutorial"); 
let age = 23;
let grace = 3;
console.log(age + grace);
console.log(age % grace);
console.log(age * grace);
console.log(age - grace);
console.log(age / grace);
console.log(age ** grace);
grace++;
console.log(grace);
grace += age;
console.log("new grace: ",grace);

if(age>18){
    console.log("You can drive");
}
else{
    console.log("You can't drive");
}