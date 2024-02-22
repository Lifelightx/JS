console.log("Jeeban");


let boxes = document.getElementsByClassName("box");

boxes[2].style.backgroundColor = "red";

let gren = document.getElementById("gren");
gren.style.backgroundColor = "green";
// console.log("Jeeban"); 

document.querySelector(".box").style.backgroundColor = "yellow"; //only first
console.log(document.querySelectorAll(".box"))


//querry selectors all by using array
let boxed = document.querySelectorAll(".box");

boxed.forEach(element => {
    element.style.backgroundColor = "blue";
});

const divs = document.getElementsByTagName("div");
const para = document.getElementsByTagName("p");

console.log(divs);
console.log(para);

