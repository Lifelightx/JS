let arr= [1,3,4,2,0,6]


function missingNumber(arr){
    let size = arr.length
    let sum = size*(size+1)/2
    let actualSum = arr.reduce((acc, cur)=>acc+cur)
    return sum-actualSum

}

const missingNum = missingNumber(arr)
console.log(missingNum)