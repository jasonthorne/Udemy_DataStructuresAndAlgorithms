function fizzBuzzArray(num) {

    /*
    Traditionally, you loop from 1 to 100 and print out each number. 
    However, if the number is divisible by 3, you print out "Fizz" instead. 
    If the number is divisible by 5, you print out "Buzz" instead. 
    If the number is divisible by both 3 and 5, you print out "FizzBuzz" instead.
    */

    try{
        if(!Number.isInteger(num) || !num>0){
            throw 'must provide interger greater than 0';
        }

        const result=[];

        for(let i=1;i<=num;i++){
            if(i%3 === 0 && i%5 === 0){
                result.push("FizzBuzz");
                continue; //break the iteration of the loop
            }else if(i%3 === 0){
                result.push("Fizz");
                continue;
            }else if(i%5 === 0){
                result.push("Buzz");
                continue;
            }else{
                result.push(i);
            }
        }

        return result;
    
    }catch(error){
        console.log(error);
    }
}

module.exports = fizzBuzzArray;
