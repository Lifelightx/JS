console.log("Hello this is function");

function greet(name) {
    console.log("Good morning, "+name)
}

greet("Jeeban");
greet("Fitendra");

function sum(a,b) {
    // console.log("sum: ",a+b);
    return a+b;
}

let res = sum(3,4);
console.log("res: ",res);

//default parameter

function multi(num1, num2, num3 = 3){
    return num1*num2*num3;
}

let multires = multi(3,4);
console.log("multiplication: ",multires);


//arrow funtion

const func1 = (x) =>{
    console.log("I am an arrow function",x);
}
func1(34);
func1(45);