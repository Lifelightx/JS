

// ! find the largest element of an element

arr = [123,124, 12, 87, 11]

let highest = arr[0]
arr.forEach(element => {
    if(highest<element){
        highest = element
    }
});
console.log(highest)

//! find the missing number in an array

let arr1 = [1,2,3,4,0]

let size = arr1.length
totalSum = size*(size+1)/2

let actualsum = arr1.reduce((acc, cur)=> acc+ cur)
missingNum = totalSum - actualsum
console.log(missingNum)
