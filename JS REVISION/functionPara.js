function myfunc(...param){
    let sum = param.reduce((acc, cu)=>{
        return acc+cu
    })
    console.log(sum)
}

myfunc(2,3,5);


let a= 'Hello'
let rev = [2,3,4]
rev.reverse()
console.log(rev)

