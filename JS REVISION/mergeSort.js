
let arr1 = [1, 2, 4, 3]
let arr2 = [5, 7, 6]

let arr3 = []
for(let i=0; i< arr1.length; i++){
    arr3[i] = arr1[i]
}
for(let i=0; i< arr2.length; i++){
    arr3[arr1.length+i] = arr2[i]
}

arr3.sort((a,b)=> a-b)

console.log(arr3)