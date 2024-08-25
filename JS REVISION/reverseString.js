
// let str = "jeebanjyoti Mallik"

// const rev = str.split('').reverse().join('')

// console.log(rev)

// arr = {
//     a:{
//         name:'Jeeban'
//     },
//     b:{
//         name:'Abhi'
//     }
// }


// user.cart[0].qty
user = {
cart:[{
        
    // Default quantity
        
        ref: 'product',
        quantity:{type:Number ,
            default: 1} 
        // Default quantity
        
    }]

}

console.log(user.cart[0].quantity)


let str = "Hello Jeebanjyoti"
revstr = ""
for(let i=str.length-1; i>=0; i--){
    revstr += str[i]
}

console.log(revstr)

