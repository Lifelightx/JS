

let rand = Math.random();
let first,second,third;
if(rand<0.33){
    first = "crazy";
}
else if(rand>=0.33 && rand<0.66){
    first = "Amazing";
}
else{
    first = "Fire";
}

let rand1 = Math.random();
if(rand1<0.33){
    second = "Engine";
}
else if(rand1>=0.33 && rand1<=0.66){
    second = "Foods";
}
else{
    second = "Garments";
}

let rand2 = Math.random();
if(rand2<0.33){
    third = "Bros";
}
else if(rand2>=0.33 && rand2<0.66){
    third = "Limited";
}
else{
    third = "Hub";
}

console.log("Bussiness name: "+first +" "+second+" " +third);