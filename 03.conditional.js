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

//code for leap year check

let year = 3000;
if((year % 400==0) || ((year % 100 !=0) && (year % 4 ==0))){
    console.log(year,"is a leap year.");
}
else{
    console.log(year,"is not a leap year");
}

let a = 10;
let b = 5;

(a>b)?console.log("True"):console.log("False");
