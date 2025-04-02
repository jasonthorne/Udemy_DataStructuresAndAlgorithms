function power(base, exponent) {

    //base case:
    if(exponent === 0){
        return 1;
    }

    return base * power(base, exponent-1);

    /*
        power(2, 3); // 8 (2^3 = 2 * 2 * 2 = 8)
        power(5, 2); // 25 (5^2 = 5 * 5 = 25)
        power(3, 4); // 81 (3^4 = 3 * 3 * 3 * 3 = 81)
    */
}

module.exports = power;
