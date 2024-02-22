const htmlinner = document.querySelector(".container").innerHTML;

console.log(htmlinner)

const texthtml = document.querySelector(".container").innerText

console.log(texthtml);

console.log(document.querySelector(".container").outerHTML);

console.log("Tag name: ");
console.log(document.querySelector(".container").tagName);

//tag name used for tags such as div, p, a;
//node name used for text node,comment node

console.log(document.querySelector(".container").textContent);

console.log(document.querySelector(".container").hidden); // to hide we can use hidden

//set an element hidden
// document.querySelector(".container").hidden = true;

document.querySelector(".box").innerHTML = "Hay i am Jeeban , new to javascript"; //select 1st element of container

console.log(document.querySelector(".box").hasAttribute("style"));


