const isValidIPv4 = (str) => {
    
    //isValidIPv4('122.164.23.21');
    /*
    * Checks if a given string is a valid IPv4 address.
    * @param {string} input - The input string to check.
    * @returns {boolean} - True if the input is a valid IPv4 address (0-255), false otherwise.
    */

    str = str.split('.').map(element => {
       return element;
    });

    //console.log(str.length === 4);
    //console.log(str.every((num)=> num>0 && num<256));

    return str.length === 4 && str.every((num)=>{
        return num>0 && num<256;
    });
};

module.exports = isValidIPv4;
