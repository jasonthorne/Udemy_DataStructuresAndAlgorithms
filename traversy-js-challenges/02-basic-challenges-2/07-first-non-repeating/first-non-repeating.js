function findFirstNonRepeatingCharacter(str) {
    /*
        findFirstNonRepeatingCharacter('aabccdeff'); // should return 'b'
        findFirstNonRepeatingCharacter('aabbcc'); // should return null
        findFirstNonRepeatingCharacter('abcdef'); // should return 'a'

        const result1 = findFirstNonRepeatingCharacter('pprogramming');
        //const result2 = findFirstNonRepeatingCharacter('abacddbec');
    */
        //increment a & b by 2:
        for(let a=0,b=1;a<str.length-1;a+=2,b+=2){ 

            if(str[a] !== str[b]){ //check each batch of two positions for matching pairs
                return str[a];
            }
        }
        return null;
}

module.exports = findFirstNonRepeatingCharacter;
