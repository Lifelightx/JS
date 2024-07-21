// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('1st Async Code')
//         resolve()
//     }, 2000);
// })

// promiseOne.then(function(){
//      return new Promise(function(resolve, reject){
//          setTimeout(()=>{
//              console.log("promise consumed");
//              resolve();
//             },2000)

//      })

// }).then(()=>{
//     console.log("After promise cosumed")
// })

// new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("Async Task 2");
//         resolve();
//     }, 2000);
// }).then(function(){
//     console.log('Task 2 is completed.');
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("Asyn task 3");
//         resolve({name:'Jeeban', email:"jeebanjyoti@gmail.com", age:12})
//     }, 2000);

// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('Async Task 4');
//         error = false;
//         if(!error){
//             resolve({username:"Jeeban",password:'123'})
//         }
//         else{
//             reject('Something went wrong.')
//         }
//     }, 2000);
// })
// promiseFour.then(function(user){
//     return user.username;
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// })


// promiseFive = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         let error = true;
//         if(!error){
//             resolve({username:'javaScript', password:'123'});

//         }
//         else{
//             reject("ERROR: JS went wrong");
//         }
//     }, 2000);
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
    
// }

// consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//         const data = await response.json();
//         console.log(data);
//     }catch(error){
//         console.log(error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>response.json())
.then((data)=>{
    data.map((val)=>{
        console.log(val.title)
    })
})