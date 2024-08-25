let arr = []
let curSize = arr.length;


function push(val){
    arr[curSize] = val;
    curSize+=1;
}

function pop(){
    
    curSize -= 1;
    arr.length = curSize
}

push(12)
push(11)
push(3)
pop()
console.warn(arr)