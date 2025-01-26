function isPalindrome(str) {

    str = str.replace(/\W/g, '').toLowerCase(); //remove non alphanumeric characters

    let reversedStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    
    return str === reversedStr;
}

module.exports = isPalindrome;
