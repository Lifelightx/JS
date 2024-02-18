function Fultycal(num1,oper,num2){
    let res;
    const random = Math.random();
    if(random<0.1){
        switch(oper){
            case '+':
                res = num1 -num2;
                break;
            case '-':
                res = num1+num2;
                break;
            case '*':
                res = num1/num2;
                break;
            case '/':
                res = num1*num2;
                break;
            default:
                return "Invalid operator."
        }
    }else{
        switch(oper){
            case '-':
                res = num1 -num2;
                break;
            case '+':
                res = num1+num2;
                break;
            case '/':
                res = num1/num2;
                break;
            case '*':
                res = num1*num2;
                break;
            default:
                return "Invalid operator."
        }
    }
    return res;
}

var res1 = Fultycal(12,'+',3);
console.log("Res: ",res1);