
//arrys are muteable
let arr = [2,34,5,6,7];
console.log(arr);
console.log(arr[3])

//update the array elemnt 
arr[0] = 45;
console.log("Length of array before pop: ",arr.length);
console.log(arr.pop());
console.log("Lenght of array after pop: ",arr.length)
arr.push(23);
arr.push("JEEBAN"); // returns updated length
arr.shift(); //remove 1st elemnt
arr.unshift("fitu"); // add an element to first
delete arr[2]; //return boolean but the size of the array remains same.
console.log("Printig element of array: ")
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

console.log(arr.toString());
console.log(arr.join(" and "));

let arr2 = [39,90];
let arr3 = [123, 901];
console.log(arr.concat(arr2,arr3)); //concat the arrays;

let anarr = [3,4,9,1,2,8,7];
console.log("anarr splice: ",anarr.splice(2,3));
anarr.sort(); //sorts the array

console.log(anarr);

let narry = [4,5,8,9,2,1];

console.log("splice:",narry.splice(2,4)); //splice takes two arguments 1st is starting index and 2nd is no. indexes to delete
narry.splice(2,4,"jeeban","mama",2,3);
console.log(narry);

let anarr1 = [3,4,5,6,7];

console.log("slice: ",anarr1.slice(2,3));
console.log("slice: ",anarr1.slice(2));

anarr1.reverse();
console.log("Reverse: ",anarr1);

console.log(delete arr[0]); //returns ture
console.log(delete arr[0]); //returns ture


