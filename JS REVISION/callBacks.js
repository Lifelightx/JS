const doSomething = (callback)=>{
    const res = 20
    callback(res)
}

doSomething((res)=>{
    console.log(res);
})