function reverseString(str) {
    /*words = words.split(' ');
    let reversedWords = '';
    
    for (let i = 0; i < words.length; i++) {
        let reversedWord = '';
        for(let j=words[i].length-1; j>=0; j--){
            reversedWord += words[i][j];
        }
        reversedWords += reversedWord + ' ';
    }
    return reversedWords.trimEnd();*/
    
    let reversedStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    return reversedStr;
}

module.exports = reverseString;
