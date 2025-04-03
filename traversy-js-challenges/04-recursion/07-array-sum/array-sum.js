function arraySum(arr) {

    /*
    Think about what your base case might be with an array
    Think about how you can break down the problem of calculating the sum of an array into smaller sub-problems.
    You can use arr.slice(1) to create a new array excluding the first element.
    Examples
    arraySum([1, 2, 3, 4, 5]); // should return 15 (1 + 2 + 3 + 4 + 5 = 15)
    arraySum([-1, -2, -3, -4, -5]); // should return -15 (-1 + -2 + -3 + -4 + -5 = -15)
    arraySum([]); // should return 0 (empty array)
    */

    //base case:
    if(arr.length === 0){
        return 0;
    }

    //recursive case:
    return arr[0] + arraySum(arr.slice(1));

}

module.exports = arraySum;
