function formatPhoneNumber(number) {

    /*
    formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => "(123) 456-7890"
    formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]); // => "(519) 555-4468"
    formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]); // => "(345) 501-2527"
    */
   number = number.join(''); //make string with removed commas
   //return formatted string:
   return `(${number.slice(0,3)}) ${number.slice(3,6)}-${number.slice(6)}`;

}

module.exports = formatPhoneNumber;
