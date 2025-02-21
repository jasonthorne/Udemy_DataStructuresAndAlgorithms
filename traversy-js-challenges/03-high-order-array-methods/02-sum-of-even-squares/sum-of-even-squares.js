function sumOfEvenSquares(numbers) {
    return numbers
        .filter(num=>num%2===0)
        .map(even=>even*even)
        .reduce((total,num)=>total+num,0);
}

module.exports = sumOfEvenSquares;
