


let str = "The workshop is designed by BPUT";

// let a = str.search('bput');
// console.log(a);

//regExp
let pattern = /bput/i;

let shona = str.search(pattern);
console.table(shona);

shona = str.match(pattern);
console.log(shona);

let text = "JEebanjyoti Mallik"
console.log(text.includes("en"));


let obj ={
    name: "jeeba",
    age: 20,
    gender: "female"
}
let arr = [[1, 2, 3],['ram','sita','Laxman'],['male','female','male']];
console.table(obj);
console.table(arr);

 str = "";
console.log(str);