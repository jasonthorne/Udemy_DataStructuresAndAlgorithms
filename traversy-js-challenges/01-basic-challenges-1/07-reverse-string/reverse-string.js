function reverseString(words) {
    words = words.split(' ');
    let reversedWords = '';
    
    for (let i = 0; i < words.length; i++) {
        let reversedWord = '';
        for(let j=words[i].length-1; j>=0; j--){
            reversedWord += words[i][j];
        }
        reversedWords += reversedWord + ' ';
    }
    return reversedWords.trimEnd();
}

module.exports = reverseString;
