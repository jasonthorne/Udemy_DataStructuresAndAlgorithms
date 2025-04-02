function reverseString(str) {
    
    if (!str || str.length === 0){ //when streing is empty, i'e all chars reversed.
        return str;
    }

    //console.log(str.substring(1)+str.substring(0,1));

    //2nd char to end of string + first char, to 2nd char:
    return reverseString(str.substring(1)) + str.substring(0,1);

    
    /*

    ou can use recursion to reverse the string by recursively calling the function 
    with the substring starting from the second character and then concatenating 
    the first character at the end.
    //base case:
    if(myNumber === 1){
        return 1;
    }

    //recursive case:
    return myNumber + sumUpTo(myNumber - 1);*/


    /*
    let reversedStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    return reversedStr;


    */
}

module.exports = reverseString;
