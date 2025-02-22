function sumOfEvenSquares(numbers) {
    return numbers
        .filter(num=>num%2===0) //filter or even numbers
        .map(even=>even*even) //quare even numbers
        .reduce((total,num)=>total+num,0); //return total of even numbers
}

module.exports = sumOfEvenSquares;
