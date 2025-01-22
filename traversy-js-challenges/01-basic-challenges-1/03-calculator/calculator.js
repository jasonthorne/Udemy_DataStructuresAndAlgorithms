function calculator(num1,num2, op) {
    try{

        if(isNaN(num1)) throw "num1 is not a number";
        if(isNaN(num2)) throw "num2 is not a number";
        if(!['+','-','/','*'].includes(op)) throw "Invalid operator";

        switch(op){
            case '+':
                return num1+num2;
            case '-':
                return num1-num2;
            case '/':
                return num1/num2;
            case '*':
                return num1*num2;
            default:
                throw "Invalid opperation"
        }

    }catch(error){
        console.log(error);
    }
}

module.exports = calculator;
