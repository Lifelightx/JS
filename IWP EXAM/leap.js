
var year1 = 2024;

function checkLeap(year){
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)){
        console.log(`${year} is a leap year.`);
    }
    else{
        console.log(`${year} is not a leap year.`);
    }
}

checkLeap(year1);

var a;
console.log(a);
let b;
console.log(b);