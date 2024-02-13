console.log("Hello world!");

var a = 3; //var global socpe
var b = 6;
console.log(a+b);
var c = "Jeeban";
console.log(c.length);
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
const a1 = 4;
// a1 = a1 + 1;
// console.log(a1);
var num = 12;
{
    console.log(num);
    var num2 = 23;
    let num3 = 14;
}
console.log(num2);
// console.log(num3);

let n1 = "Jeeban"; //string
let n2 = 4; //number
let n3 = 3.55; //number
const n4 = true; //boolean
let n5 = undefined; //undefined
let n6 = null; //null
console.log(n1,n2,n3, n4, n5, n6);
console.log(typeof n1, typeof n2, typeof n3, typeof n4,typeof n5, typeof n6);
//Object
let o ={
    name: "Jeeban",
    "job role": "student",
    "Gender": "Male",
    "Is_handsome" : true

}
console.log(o);
let n9 = o.Gender;
console.log(n9);
o.salary = 23000;
console.log(o);
o.salary = 25000;
console.log(o);