
let a = 6;
console.log("HEllo");

function factorial(number){
    let array = Array.from(Array(number+1).keys())
    console.log(array.slice(1,));
    let fact = array.slice(1,).reduce((a,b)=>{
        return a*b;
    })

    console.log("Factorial: ",fact);
}


factorial(a);