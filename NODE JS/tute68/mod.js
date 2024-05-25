console.log('this is module');

function average(arr){
    let sum =0;
    arr.forEach(element => {
        sum += element;
    });
    return sum / arr.length ;
}

function sumOfnum(arr){
    let sum = 0;
    arr.forEach(element =>{
        sum +=element;
    });
    return sum;
}

module.exports = {
    avg:average,
    name: 'jeeban',
    repo : 'github',
    sum : sumOfnum
};