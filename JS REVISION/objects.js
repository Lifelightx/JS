let obj = {}

arr = [2,2,3,3,3,3,1,1,1,1]

arr.forEach(element => {
    if(obj[element] ){
        obj[element] = obj[element]+ 1
    }
    else{
        obj[element] = 1
    }
})

console.log(obj)