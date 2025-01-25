function findMaxNumber(numbers) {
    let maxNum = numbers[0];
    for (const number of numbers) {
        if (number > maxNum){ maxNum = number; }
    }
    return maxNum;
}

module.exports = findMaxNumber;
