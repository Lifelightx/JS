console.log("Js running..."); //testing

//get elements by class name
let boxes = document.getElementsByClassName("boxes");

//elements by query selectors
const box = document.querySelector(".container").children;

//targeting 2nd box by box[1];
box[1].style.backgroundColor = "red";

//iterate the boxes and setting background color to green
for(let i=0; i<boxes.length;i++){
    boxes[i].style.backgroundColor = "green";
}

//giving random number to boxes

function getRanadomcolor(){
    let val1 = Math.floor(Math.random()*256);
    let val2 = Math.floor(Math.random()*256);
    let val3 = Math.floor(Math.random()*256);
    // let val1 = Math.floor(Math.random()*256);
    

    return `rgb(${val1},${val2},${val3})`;
}


Array.from(box).forEach(e=>{
    e.style.backgroundColor = getRanadomcolor();
    e.style.color = getRanadomcolor();
})
