let marks = {
    jeeban:23,
    monika: 45,
    subham: 12,
    fitendra: 67
};

console.log(marks.jeeban);

for(let i=0 ; i<Object.keys(marks).length; i++){
    console.log("The mark of "+Object.keys(marks)[i]+" are "+ marks[Object.keys(marks)[i]]);
}

//forin loop
let student = {
    jeeban: 1,
    fitendra: 2,
    abhijit: 3,
    ambika : 4,
    deepak : 5
}
for(let i in student){
    console.log("The mark of "+i+" is "+ student[i]);
}

//arrow function

const ave = (a,b,c,d) =>{
    return (a+b+c+d)/4;
}


console.log(ave(23,24,25,26));