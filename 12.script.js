// console.log(document.body);

//child noeds
console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.childNodes[0]);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[3]);

//child node of a child node
console.log(document.body.childNodes[1].childNodes);

//first child
let contain = document.body.childNodes[1];
console.log(contain); //child node[1];

//printing first child
let cont1 = contain.firstChild;
let contl = contain.lastChild;
console.log(cont1); 
console.log(contl);


//first element child

//elements
console.log(contain.children)