const array = Array.from({length:5},(_, i)=>i)

const newArray = array.map((num)=>{
    return num;
})

const array1 = [1,2,3,4,5,6,7,8];
const newArray1 = array1.filter((val)=> {
    return val % 2 === 0 
});
console.log(array);
console.log(newArray);
console.log(newArray1);