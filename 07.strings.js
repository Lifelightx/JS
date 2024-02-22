console.log("Strings");
//strings are immutable

let a = "Jeeban";
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]); //not present

console.log(a.length);
console.log(a.charAt(3));
let friend = "Fitu";
console.log(`Hello ${a} and his frinends name is ${friend}.`) //tamplete

//escape sequence

console.log("Hello \"meon\" come on.");
console.log("JEEBAN\nJYOTI");


//old method
var newstring = new String("this is my string ");

//string property
let str = "Jeebanjyoti Mallik"

console.log(str.toUpperCase());
console.log(str.toLowerCase())
console.log(str.endsWith('ik'))
console.log(str.replace("jyoti","mama"))
console.log(str.split(" "))
let m = str.split(" ");
console.log(typeof(m));
console.log(str.indexOf("j"));
console.log(str.substring(3,7));
console.log(str.charCodeAt(3))
console.log(str.charCodeAt(2));
console.log(str.concat(" mama"));
console.log(str.lastIndexOf("a"));
console.log(str.normalize("NFKD"))
console.log(str.length);