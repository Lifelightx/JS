console.log("Loops in array");
let array = [3,4,5,6,7];

for(let index=0; index<array.length; index++){
    console.log(array[index]);
}

array.forEach((vlaue,index,array)=>{
    console.log(vlaue,index,array);
})