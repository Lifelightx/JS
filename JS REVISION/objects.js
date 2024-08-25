let obj = {}

arr = [1,2,3,3,3,5,6,6,7,7,7,7,7]

arr.forEach(element => {
    obj[element] = (obj[element] || 0 ) + 1
})

console.log(obj)