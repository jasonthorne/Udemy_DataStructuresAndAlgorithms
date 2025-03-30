function fibonacci(num) {

     //base case:
    if(num<2){
        return num;
    }

    //console.log(num);

    //recursive case:
    return fibonacci(num - 1) + fibonacci(num - 2); //++++++++return the sum of the previous 2 numbers



}

module.exports = fibonacci;
