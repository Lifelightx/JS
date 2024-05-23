//operator

let date = new Date();

console.log(date.getTime());
function fn(){
    sum = 0;

    for (let i = 0; i <100000; i++) {
    sum = sum + i;
}
}
fn();
//let dat1 = new Date();
console.log(date.getTime());