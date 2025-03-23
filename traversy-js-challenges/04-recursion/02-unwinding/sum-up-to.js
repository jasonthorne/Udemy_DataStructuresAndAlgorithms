function sumUpTo(myNumber) {

    //base case:
    if(myNumber === 1){
        return 1;
    }

    //recursive case:
    return myNumber + sumUpTo(myNumber - 1);
}

module.exports = sumUpTo;
