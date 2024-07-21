const date1 = new Date();
const getTime1 = date1.getTime();
function count(){
    sum = 0;
    for(let i=1; i<=10000; i++){
        sum = sum+i;
    }
    console.log(sum);
}
count()

const date2 = new Date();
const getTime2 = date2.getTime();

console.log(getTime2-getTime1);